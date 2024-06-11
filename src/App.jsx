import ViewTask from "./secundarisPag/ViewTask"

import iconEdit from './assets/Edit_duotone.svg'
import logo from './assets/Logo.svg'

import taskIcon from './assets/icons8-alarm-94.png'
import tipTask from './assets/Time_atack_duotone.svg'

function App() {


  return (
    <>
      <header className="flex gap-3 p-6">
        <img src={logo} alt="logo" />
        <h1 className='text-[35px] '>
          My task-organizer
        </h1>
      </header>

      <section className="w-[400px] h-[550px] mt-6 right-0 left-0 mx-auto overflow-y-auto ">

        <div className='flex flex-col items-center rounded-3xl right-0 left-0 mx-auto bg-custom-yelow w-[230px] h-[230px] gap-4 p-4 mb-8 '>

          <div className='bg-custom-with w-[145px] h-[145px] rounded-2xl flex items-center justify-center '>
            <img src={taskIcon} alt="" className='w-[23px] ' />
          </div>

          <div className='bg-custom-orange w-[200px] h-[35px] rounded-xl flex items-center justify-center gap-4 ' >
            <h2 className='text-[20px] '>
              Task in Progress
            </h2>
            <img src={iconEdit} alt="" className='w-[23px]' />
          </div>

        </div>

        <div className='flex flex-col items-center rounded-3xl right-0 left-0 mx-auto bg-custom-yelow w-[230px] h-[230px] gap-4 p-4 mb-8 '>

          <div className='bg-custom-with w-[145px] h-[145px] rounded-2xl flex items-center justify-center '>
            <img src={taskIcon} alt="" className='w-[23px] ' />
          </div>

          <div className='bg-custom-orange w-[200px] h-[35px] rounded-xl flex items-center justify-center gap-4 ' >
            <h2 className='text-[20px] '>
              Task in Progress
            </h2>
            <img src={iconEdit} alt="" className='w-[23px]' />
          </div>

        </div>

        <div className='flex flex-col items-center rounded-3xl right-0 left-0 mx-auto bg-custom-yelow w-[230px] h-[230px] gap-4 p-4 mb-8 '>

          <div className='bg-custom-with w-[145px] h-[145px] rounded-2xl flex items-center justify-center '>
            <img src={taskIcon} alt="" className='w-[23px] ' />
          </div>

          <div className='bg-custom-orange w-[200px] h-[35px] rounded-xl flex items-center justify-center gap-4 ' >
            <h2 className='text-[20px] '>
              Task in Progress
            </h2>
            <img src={iconEdit} alt="" className='w-[23px]' />
          </div>

        </div>

        <div className='flex flex-col items-center rounded-3xl right-0 left-0 mx-auto bg-custom-yelow w-[230px] h-[230px] gap-4 p-4 mb-8 '>

          <div className='bg-custom-with w-[145px] h-[145px] rounded-2xl flex items-center justify-center '>
            <img src={taskIcon} alt="" className='w-[23px] ' />
          </div>

          <div className='bg-custom-orange w-[200px] h-[35px] rounded-xl flex items-center justify-center gap-4 ' >
            <h2 className='text-[20px] '>
              Task in Progress
            </h2>
            <img src={iconEdit} alt="" className='w-[23px]' />
          </div>

        </div>

      </section>
    </>
  )
}

export default App
