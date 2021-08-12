import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const socials =[
  {icon:<LinkedInIcon fontSize='inherit' />,link:'https://www.linkedin.com/in/anmolraj5/'},
  {icon:<EmailIcon fontSize='inherit'/>,link:'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=course.anmolraj@gmail.com&su=Subject&body=Body%20Text'},
  {icon:<GitHubIcon fontSize='inherit' />,link:'https://github.com/theanmol-raj'},
  {icon:<InstagramIcon fontSize='inherit' />,link:'https://www.instagram.com/anmolraj_/'},
  {icon:<YouTubeIcon fontSize='inherit' />,link:''}
]
function Contact() {
    return (
        <div id='contact' className="relative bg-gray-100 py-12 overflow-hidden">
      <div className="max-w-7xl py-10 mx-auto">
          
        <p className='text-left text-7xl xl:text-9xl font-black opacity-10 mx-auto md:mx-0 text-indigo-600'>Contact</p>
    <p className='text-left text-3xl xl:text-5xl pl-8 -mt-16 xl:-mt-24 pb-4 mx-auto md:mx-0 '>Want to connect? </p>
    
    <p className='text-left pl-8 text-xl xl:text-3xl pt-4 font-medium xl:pt-8'>My inbox is always Open</p>
    <div className='flex flex-row pl-8 pt-8 flex-grow space-x-8'>
        {socials.map((x,index)=><a className=' text-4xl transform hover:scale-125 ease-out duration-300  text-gray-600 hover:text-indigo-600' id={index} href={x.link}>{x.icon}</a>)}

    </div>
      </div>
            
        </div>
    )
}

export default Contact
