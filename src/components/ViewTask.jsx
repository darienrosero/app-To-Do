import iconEdit from '../assets/Edit_duotone.svg'
import logo from '../assets/Logo.svg'

import taskIcon from '../assets/icons8-alarm-94.png'
import tipTask from '../assets/Time_atack_duotone.svg'

import iconCompleted from '../assets/icons8-weightlifting-48.png'
import iconCheck from '../assets/Done_round_duotone.svg'

import logoCoffe from '../assets/icons8-coffee-mug-24.png'
import iconIncomplet from '../assets/close_ring_duotone.svg'

import logoBooks from '../assets/icons8-books-94.png'

import addTask from '../assets/icons8-add2-50.png'

const ViewTask = () => {
    return (
        <>

            <main className="w-[380px] h-[850px] my-10 right-0 left-0 mx-auto font-Outfit ">
                <header>
                    <div className='flex gap-4'>
                        <img src={logo} alt="logo" />
                        <h1 className='text-[40px] '>
                            My Task Board
                        </h1>
                        <button>
                            <img src={iconEdit} alt="edit" className='w-8' />
                        </button>
                    </div>
                    <p className='pl-12'>
                        Tasks to keep organised
                    </p>
                </header>


                <section className=''>
                    <div className='flex items-center rounded-2xl mt-8 bg-custom-yelow h-[60px] gap-4 '>

                        <div className='bg-custom-with w-[35px] h-[35px] rounded-xl flex ml-4 items-center justify-center '>
                            <img src={taskIcon} alt="" className='w-[23px] ' />
                        </div>

                        <h2 className='text-[20px] '>
                            Task in Progress
                        </h2>

                        <div className='bg-custom-orange w-[35px] h-[35px] rounded-xl ml-[100px] flex items-center justify-center ' >
                            <img src={tipTask} alt="" className='w-[23px]' />
                        </div>

                    </div>

                    <div className='flex items-center rounded-2xl mt-8 bg-custom-limon-green h-[60px] gap-4 '>

                        <div className='bg-custom-with w-[35px] h-[35px] rounded-xl flex ml-4 items-center justify-center '>
                            <img src={iconCompleted} alt="" className='w-[23px] ' />
                        </div>

                        <h2 className='text-[20px] '>
                            Task Completed
                        </h2>

                        <div className='bg-custom-green w-[35px] h-[35px] rounded-xl ml-[100px] flex items-center justify-center ' >
                            <img src={iconCheck} alt="" className='w-[23px]' />
                        </div>

                    </div>

                    <div className='flex items-center rounded-2xl mt-8 bg-custom-pink h-[60px] gap-4 '>

                        <div className='bg-custom-with w-[35px] h-[35px] rounded-xl flex ml-4 items-center justify-center '>
                            <img src={logoCoffe} alt="" className='w-[23px] ' />
                        </div>

                        <h2 className='text-[20px] '>
                            Task Won’t Do
                        </h2>

                        <div className='bg-custom-red w-[35px] h-[35px] rounded-xl ml-[115px] flex items-center justify-center ' >
                            <img src={iconIncomplet} alt="" className='w-[23px]' />
                        </div>

                    </div>

                    <div className='flex items-center rounded-2xl mt-8 bg-custom-light-grey h-[60px] gap-4 '>

                        <div className='bg-custom-with w-[35px] h-[35px] rounded-xl flex ml-4 items-center justify-center '>
                            <img src={logoBooks} alt="" className='w-[23px] ' />
                        </div>

                        <h2 className='text-[20px] '>
                            Task To Do
                        </h2>

                    </div>

                    <div className='flex items-center rounded-2xl mt-8 bg-custom-beish h-[60px] gap-4 '>

                        <div className='bg-custom-orange w-[35px] h-[35px] rounded-xl flex ml-4 items-center justify-center '>
                            <img src={addTask} alt="" className='w-[23px]' />
                        </div>

                        <h2 className='text-[20px] '>
                            Add new task
                        </h2>

                    </div>

                </section>

            </main>

        </>
    )
}

export default ViewTask
