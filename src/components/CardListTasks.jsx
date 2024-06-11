import React from 'react'

import iconEdit from '../assets/Edit_duotone.svg'

import taskIcon from '../assets/icons8-alarm-94.png'

const CardListTasks = () => {
    return (
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
    )
}

export default CardListTasks
