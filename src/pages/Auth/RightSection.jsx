import LanguageSwitcher from "@/components/Language/LanguageSwitcher";

export default function RightSection() {
  return (
      <div className="hidden overflow-auto relative w-1/2 h-dvh lg:block"
          style={{
              background: 'var(--bg-container-auth)',
              
          }}
      >
          <div className="absolute top-4 right-4 z-10">
              <LanguageSwitcher />
          </div>
          <div className="flex justify-center items-center h-full">
              <img src="/src/attachment/Container.svg" className="z-10"/>
</div>
              <img src='/src/attachment/Line pattern.svg' className="absolute top-0 right-0 z-0" />
              <img src='/src/attachment/Line pattern.svg' className="absolute bottom-0 left-0 z-0" />
      </div>
  )
}
