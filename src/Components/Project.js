import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const intrest =[
    {img:'https://images.wallpaperscraft.com/image/lawn_forest_mountains_144578_300x168.jpg',name:'Machine Learning',info:'I am passionate about learning the theory that is pushing the cutting edge of ML.'},
    {img:'https://images.wallpaperscraft.com/image/tree_planet_stars_galaxy_art_117068_300x168.jpg',name:'NLP',info:'I apply text analytics to some of the hardest questions in business.'},
    
    {img:'https://images.wallpaperscraft.com/image/landscape_mountains_art_140515_300x168.jpg',name:'Data Analytics',info:'I love telling a story. Getting to the heart of a problem and coming up with a solution.'}]

function Project() {
    return (
        <div className="relative bg-white pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl pb-10 mx-auto">
          
      <p className=' text-7xl xl:text-9xl font-black opacity-10 text-indigo-600'>Projects</p>
    <p className=' text-3xl xl:text-5xl pl-8 -mt-16 xl:-mt-20 pb-4 '>All my Previous Works</p>
    <p className='text-lg text-gray-700 pl-8 font-medium'>Take a look at some of my Projects</p>
    <div className='flex space-x-8 pt-24 pb-24 overflow-scroll scrollbar-hide'>
        {intrest.map(({img,name,info})=>(
          <div className='p-8 items-center  transform hover:scale-105 ease-out border duration-300 group cursor-pointer'>
            <img src={img} className='w-full h-40' alt='' />
            <p className='text-xl font-semibold text-gray-700 max-w-max pt-4  mx-auto w- group-hover:text-purple-500'>{name}</p>
            <p className='text-gray-700 text-sm'>{info}</p>
          </div>
        ))}


        
        
        
    </div>

    <a href='/portfolio' className=' py-4 px-10 text-indigo-600 uppercase border border-indigo-500 hover:shadow-xl transform hover:scale-110 hover:bg-indigo-500 hover:text-white rounded-full'> More<ArrowForwardIcon fontSize='inherit'  /></a>
      </div>
            
        </div>
    )
}

export default Project
