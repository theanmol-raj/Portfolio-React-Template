import React from 'react'
import { formatRelative } from 'date-fns'

function ProjectCard({name,img,desc,linklive,linkcode,date}) {
    return (
       
            <div className='flex flex-col sm:flex-row shadow-lg px-8 rounded-3xl transform hover:scale-105 duration-300 ease-out border mb-2 hover:shadow-2xl  py-8 border-b-2'>
            <div >
                <img className='max-w-max xl:h-48 xl:w-48 h-40 w-40 rounded-full' alt='' src={img} />
            </div>
            <div className='pl-8 items-center py-3'> <a className='' href={linklive}>
                <h1 className=' text-left hover:text-indigo-500 transition duration-100 font-black text-xl lg:text-4xl text-gray-900 '>{name}</h1></a>
                <p className='text-left font-semibold pt-3 pb-6 text-gray-500'>{desc}</p>
                <div className='flex flex-row space-x-32'>
                {date?.seconds ?(
                    <p className='text-left font-light text-gray-500'>
                {formatRelative(new Date(date.seconds * 1000),new Date())}
                </p>
            ): null}
                {/* >Anmol Raj on {date} */}
                <a href={linkcode} className='text-left underline text-indigo-500'>Code</a>
                </div>

            </div>

            </div>

        
    )
}

export default ProjectCard
