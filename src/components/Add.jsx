import React from 'react'

import addTask from '../assets/icons8-add2-50.png'

const Add = () => {
    return (
        <div className='flex items-center justify-end rounded-2xl mt-5 h-[60px] p-4 pr-10 gap-4 '>

            {/*         <h2 className='text-[20px] '>
              Add new section-tasks
            </h2> */}

            <div className='bg-custom-orange w-[55px] h-[55px] rounded-xl flex items-center justify-center '>
                <img src={addTask} alt="" className='w-[48px]' />
            </div>

        </div>
    )
}

export default Add
