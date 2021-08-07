import Progress from 'react-progressbar';
 import React from 'react'

function Progressbar({name , value}) {
    return (
        <div>
               <div className='pb-4 pt-2'>
               <p className='text-left pb-2 font-semibold text-2xl'>{name}</p>
             <Progress className='border border-gray-500 rounded-full' completed={value} />
               </div>
        </div>
    )
}

export default Progressbar
