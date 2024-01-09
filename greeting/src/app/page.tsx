import { Clock } from "@/component/Clock";

const Page = () => {
  return(
    <div className='w-screen h-screen flex flex-col justify-center items-center 
      text-white bg-gradient-to-r from-sky-600 to-indigo-400'>
      < Clock />
    </div>
  )
}

export default Page;