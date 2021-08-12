import React from 'react'

function Footer({signin,signout,user}) {
    return (
        <div className="relative bg-gradient-to-r to-green-400 via-blue-500 from-indigo-600  overflow-hidden">
      <div className="max-w-7xl py-8 flex flex-row mx-auto">
      <div className='justify-items-start'><h1 className=' pb-1 font-semibold text-white text-xl text-left'>About This Page</h1>
      <p className=' font-light text-white text-sm text-left'>
{`This website was coded in <React /> by `}<a className='underline font-bold' href='https://www.linkedin.com/in/anmolraj5/'>Anmol Raj </a> .<br />{` It is hosted on a Firebase.

Copyright ©${new Date().getFullYear()} All rights reserved | This template is original Design of `}<a className='underline font-bold' href='https://www.linkedin.com/in/anmolraj5/'>Anmol Raj</a></p>
<div className='flex flex-row pt-4 space-x-4'>
<div>
{user ? <button onClick={signout} className="font-medium text-white">
                        Sign Out
                      </button> :<button onClick={signin} className="font-medium text-white">
                        Admin
                      </button>}
</div>
<div>
  {user ? <a className="font-medium text-white" href="/Dashboard"> Upload a project </a> :null}
</div>
</div>
</div>
      <div>
        
      </div>

      </div>
      
        </div>
    )
}

export default Footer
