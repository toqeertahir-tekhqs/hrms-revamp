import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        fetch: 'readonly',
        FormData: 'readonly',
        Headers: 'readonly',
        Request: 'readonly',
        Response: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        Image: 'readonly',
        RTCPeerConnection: 'readonly',
        Blob: 'readonly',
        requestAnimationFrame: 'readonly',
        Notification: 'readonly',
        // Node globals
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        // Test globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        vi: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // ONLY check for undefined variables and missing imports
      'no-undef': 'error',

      // Turn OFF all other rules
      'no-unused-vars': 'off',
      'no-constant-binary-expression': 'off',
      'no-dupe-keys': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'no-console': 'off',
      'no-debugger': 'off',
    },
  },
  {
    ignores: [
      'build/**',
      'dist/**',
      'node_modules/**',
      '*.config.js',
      '*.config.cjs',
      'coverage/**',
    ],
  },
];

