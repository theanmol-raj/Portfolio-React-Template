import React from 'react'
import { formatRelative } from 'date-fns'

function ProjectCard({name,img,desc,linklive,linkcode,date}) {
    return (
       
            <div className='flex flex-col sm:flex-row py-8 border-b-2'>
            <div >
                <img className='max-w-max w-40  border-8 border-indigo-300 rounded-full' alt='' src={img} />
            </div>
            <div className='pl-8 items-center py-3'> <a className='' href={linklive}>
                <h1 className=' text-left hover:text-indigo-500 transition duration-100 font-black text-xl lg:text-4xl text-gray-900 '>{name}</h1></a>
                <p className='text-left font-semibold py-2 text-gray-500'>{desc}</p>
                <div className='flex flex-row space-x-32'>
                <p className='text-left font-light text-gray-500'>Anmol Raj on {date}</p>
                <a href={linkcode} className='text-left underline text-indigo-500'>Code</a>
                </div>

            </div>

            </div>

        
    )
}

export default ProjectCard
