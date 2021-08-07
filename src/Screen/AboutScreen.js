import React from 'react'
import pp from '../Images/pp.jpeg'
import { Disclosure, Transition } from '@headlessui/react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


function AboutScreen() {
    return (
        <div className="relative pt-12 overflow-hidden">
      <div className="max-w-7xl py-10 mx-auto">

      <div className='grid grid-cols-1 md:grid-cols-2 justify-between'>
          <div className='pt-12 md:pt-0'>
          <p className='text-left text-7xl xl:text-9xl font-black opacity-10 mx-auto md:mx-0 text-indigo-600'>About</p>
    <p className='text-left text-3xl xl:text-5xl pl-8 -mt-16 xl:-mt-24 pb-4 mx-auto md:mx-0 '>Personal Details </p>

    <p className='text-left md:pr-24 pt-10 pl-8 xl:text-lg text-gray-600 pb-4'>At the beginning of 2018, I didn't know where my life was going. After some serious self-reflection about my passions and interests, I committed to learning everything I could about machine learning, data science, and the tech industry.</p>
    <p className='text-left md:pr-24 pl-8 xl:text-lg text-gray-600 pb-4'>After graduating woth a masters in Computer Science from UT Dallas and a year of working at Capital One, I have officially become a Data Scientist in the auto financing organization at Capital One. Here I am utilizing my knowledge of machine learning engineering to build intelligent systems to better the customer experience</p>
          </div>
          <div className='relative w-full  row-start-1'>
              <img alt='Avatar Anmol RAj' className='h-80 w-80 mx-auto md:absolute top-20 left-1/4   rounded-full border-8 border-indigo-200 filter grayscale ' src={pp} />
          </div>
      </div>
        <hr className='mt-12 hidden md:block' />
        <p className='text-left text-7xl xl:text-9xl font-black opacity-10 mx-auto md:mx-0 text-indigo-600'>Academics</p>
    <p className='text-left text-3xl xl:text-5xl pl-8 -mt-16 xl:-mt-24 pb-4 mx-auto md:mx-0 '>Education </p>
       <div className='py-8 mt-12 border mb-16 shadow-md hover:shadow-xl transform hover:scale-110 ease-out duration-300 bg-white z-10 rounded-3xl '>
       <h1 className='pl-8 font-bold text-3xl text-left'>Bachelor's Degree in Artificial Intelligence & Data Science</h1>
       <p className='text-left text-xl pl-8 pt-2 font-medium text-gray-600'>KL University ,Hyderabad</p>
       <p className='text-left text-xl pl-8 pt-2 font-light text-gray-600'>2020-2024</p>
       </div>


      </div>
            
        </div>
    )
}





export default AboutScreen
