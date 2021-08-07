import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Progressbar from './Progressbar';



const socials =[{icon:<LinkedInIcon fontSize='inherit' />,link:''},{icon:<EmailIcon fontSize='inherit'/>,link:''},{icon:<GitHubIcon fontSize='inherit' />,link:''},{icon:<InstagramIcon fontSize='inherit' />,link:''},{icon:<YouTubeIcon fontSize='inherit' />,link:''}]
const skills=[{name:'Machine Learning',value:25},
{name:'Data Science',value:75},
{name:'Full Stack Web',value:90}]
function About() {
    return (
        <div className="relative bg-white pb-12 overflow-hidden">
      <div className="max-w-7xl py-8  mx-auto">
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
<div>
    <p className='text-left text-7xl xl:text-9xl font-black opacity-10 text-indigo-600'>About</p>
    <p className='text-left text-3xl xl:text-5xl pl-8 -mt-16 xl:-mt-24 pb-4 '>A little about me ,</p>

    <p className='text-left pl-8 text-xl xl:text-3xl pt-4 font-medium xl:pt-8'>Hello !</p>
    <p className='text-left pl-8 text-lg text-gray-700 py-8 '>Hi there! I am Anmol! I've been coding for over 5 years now. As a Developer I've worked on various projects in the field of AI, Ml , Data Science and Web Development. ... more to add later.</p>
    <div className='flex flex-row justify-between'>
    <div className='flex flex-row pl-8 flex-grow space-x-8'>
        {socials.map((x,index)=><a className=' text-3xl transform hover:scale-125 ease-out duration-300  text-gray-600 hover:text-indigo-600' id={index} href={x.link}>{x.icon}</a>)}

    </div>
    <a className='py-1 px-6 transform hover:scale-110 duration-300 border border-indigo-600 text-indigo-600 ease-out hover:bg-indigo-600 rounded-full whitespace-nowrap xl:mr-8 mt-1 uppercase text-sm lg:text-lg hover:text-white' href='/about'>Read more</a>
    </div>
</div>
<div>
<p className='text-left text-xl md:text-2xl xl:text-3xl pl-8 font-bold pt-12 pb-4 '>My Skills</p>
<div className='mx-8'>
    {skills.map(x=><Progressbar name={x.name} value={x.value}  />)}
</div>
</div>

      </div>
      </div>
        </div>
    )
}

export default About
