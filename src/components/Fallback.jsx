import { CustomSpin } from "./ui";

export default function Fallback() {
  return (
      <div className='flex justify-center items-center h-screen'>
        <CustomSpin size="default" tip="Loading..." />
    </div>
  )
}
