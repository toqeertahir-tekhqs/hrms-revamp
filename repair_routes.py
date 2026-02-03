import re
import os

ALIAS_MAP = {
    "pages": "src/pages",
    "~/pages": "src/pages",
    "~": "src",
    "components": "src/components",
    "Hooks": "src/Hooks",
    "routes": "src/routes"
}

def resolve_path(import_path):
    # Fix double slashes
    import_path = import_path.replace("//", "/")
    
    resolved = None
    for alias, replacement in ALIAS_MAP.items():
        if import_path.startswith(alias):
            resolved = import_path.replace(alias, replacement, 1)
            break
    
    if not resolved:
        # If it starts with ./ or ../, it's relative to src/routes/index.jsx (which is in src/routes/)
        # So ../package.json -> src/package.json
        # ./routes -> src/routes/routes
        if import_path.startswith("."):
            # We are generating for src/routes/index.jsx
            base_dir = "src/routes" 
            resolved = os.path.normpath(os.path.join(base_dir, import_path))
    
    return resolved

with open("src/routes/index.jsx", "r") as f:
    content = f.read()

imports = re.findall(r"import\s+.*\s+from\s+['\"]([^'\"]+)['\"];", content)
# Also handle dynamic imports: lazy(() => import('...'))
lazy_imports = re.findall(r"import\(['\"]([^'\"]+)['\"]\)", content)

all_imports = imports + lazy_imports

for imp in all_imports:
    path = resolve_path(imp)
    if not path:
        print(f"Skipping unresolvable path: {imp}")
        continue
    
    # Check extensions
    extensions = [".js", ".jsx", ".ts", ".tsx", "/index.js", "/index.jsx"]
    found = False
    
    # Check if file exists exactly or with extension
    candidates = [path] + [path + ext for ext in extensions]
    
    for cand in candidates:
        if os.path.exists(cand) and os.path.isfile(cand):
            found = True
            break
    
    if not found:
        print(f"Creating placeholder for: {path}")
        target_file = path + ".jsx"
        # If it looks like a directory import (e.g. ends with index or implied), we created .jsx. 
        # But if the import was "Folder/index", path is "src/Folder/index", target is "src/Folder/index.jsx". Correct.
        # If import was "Folder", path is "src/Folder", target is "src/Folder.jsx". 
        # Ideally we should verify if "Folder" is meant to be a dir. But .jsx works for vite import.
        
        try:
            os.makedirs(os.path.dirname(target_file), exist_ok=True)
            with open(target_file, "w") as f:
                 name = os.path.basename(path)
                 f.write(f"import React from 'react';\n\nconst {name.replace('-', '_').replace('.', '_')} = () => <div className='p-10 text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg m-4'>\n  <h2 className='text-xl font-semibold mb-2'>Coming Soon</h2>\n  <p>The page <strong>{name}</strong> is under development.</p>\n</div>;\n\nexport default {name.replace('-', '_').replace('.', '_')};")
        except Exception as e:
            print(f"Failed to create {target_file}: {e}")
