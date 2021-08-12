import React from 'react'
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FaceIcon from '@material-ui/icons/Face';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import Favicon from '../favicon.ico'
import PeopleIcon from '@material-ui/icons/People';
const intrest =[
    {icon:<LaptopMacIcon fontSize='inherit' />,name:'Machine Learning',info:'I am passionate about learning the theory that is pushing the cutting edge of ML.'},
    {icon:<ChatBubbleOutlineIcon fontSize='inherit' />,name:'NLP',info:'I apply text analytics to some of the hardest questions in business.'},
    {icon:<FaceIcon fontSize='inherit' />,name:'Computer Vision',info:''},
    {icon:<PollOutlinedIcon fontSize='inherit' />,name:'Data Analytics',info:'I love telling a story. Getting to the heart of a problem and coming up with a solution.'},
    // {icon:null,img : Favicon,name:'React.js',info:'I create, beautiful websites with NEXT.js(React Framework)'},
    {icon:<PeopleIcon fontSize='inherit' />,name:'Collaboration',info:'I enjoy working with my team to create winning strategies.',info: ''}]

function AreasOfIntrest() {
    return (
        <div className="relative bg-gray-200 pt-12 overflow-hidden">
      <div className="max-w-7xl py-10 mx-auto">
      <p className=' text-7xl xl:text-9xl font-black opacity-10 text-indigo-600'>Intrests</p>
    <p className=' text-3xl xl:text-5xl pl-8 -mt-16 xl:-mt-20 pb-4 '>Areas of Interest</p>
    <p className='text-lg text-gray-700 pl-8 font-medium'>Take a look at some of the things I love working on.</p>

    <div className='grid grid-cols-1 py-16 md:grid-cols-2 mx-8 gap-8 lg:grid-cols-3'>
        {intrest.map(({icon,name,info})=>(
          <div className='p-8 items-center bg-white rounded-3xl shadow-md hover:shadow-xl transform hover:scale-105 ease-out duration-300 group cursor-pointer'>
            <h1 className='text-4xl text-gray-700 max-w-max mx-auto group-hover:text-indigo-600'>{icon}</h1>
            <p className='text-xl font-semibold text-gray-700 max-w-max  mx-auto w- group-hover:text-indigo-600'>{name}</p>
            <p className='text-gray-700 text-sm'>{info}</p>
          </div>
        ))}
        <div className='p-8 items-center bg-white rounded-3xl shadow-md hover:shadow-xl transform hover:scale-105 ease-out duration-300 group cursor-pointer'>
            <img alt='' src={Favicon} className='text-4xl h-12  text-gray-700 max-w-max mx-auto group-hover:text-purple-500' />
            <p className='text-xl font-semibold text-gray-700 max-w-max  mx-auto w- group-hover:text-purple-500'>{`React.Js`}</p>
            <p className='text-gray-700 text-sm'>{``}</p>
        </div>
        
    </div>
      </div>
        </div>
    )
}

export default AreasOfIntrest
