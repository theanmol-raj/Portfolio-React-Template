import React,{useState} from 'react'
import firebase from 'firebase'

function LoginDashboard({user=null,db=null}) {

    let Schema = {
        img :'', 
        name:'', 
        desc:'', 
        linklive:'', 
        linkcode:'',
        date:firebase.firestore.FieldValue.serverTimestamp()
}

    const [newProject,setNewProject] =useState(Schema)

    const handleOnChange = e =>{
        let {name, value} = e.target
        setNewProject({
            ...newProject,
                [name] :value,
        })
    }
    

    const handleOnSubmit = e =>{
        console.log(newProject)
        e.preventDefault();
        if(db){
            db.collection('Projects').add(newProject)
        }
        setNewProject(Schema)
        
    }
    return (
        <div id='contact' className="relative bg-gray-100 py-12 overflow-hidden">
      <div className="max-w-7xl py-10 mx-auto">
      <p className='text-left text-7xl xl:text-9xl font-black opacity-10 mx-auto md:mx-0 text-indigo-600'>Upload</p>
    <p className='text-left text-3xl xl:text-5xl pl-8 -mt-16 xl:-mt-24 pb-4 mx-auto md:mx-0 '>Add a new project </p>

    {user.uid == '9O8yI3nW7YQOBsuyQs90ytlC0583' ? <form onSubmit={handleOnSubmit}>
            <div>
            <div className='w-full flex flex-col pt-8'>
            <input
                className='h-12 text-center my-2 border-2 rounded-3xl' 
                type='text'
                name='img'
                value={newProject.img}
                onChange={handleOnChange}
                placeholder='Link of Image'
            />
            <input
                className='h-12 text-center my-2 border-2 rounded-3xl' 
                type='text'
                value={newProject.name}
                name='name'
                onChange={handleOnChange}
                placeholder='Project Name'
            />
            <input
                className='h-12 text-center my-2 border-2 rounded-3xl' 
                type='text'
                value={newProject.desc}
                name='desc'
                onChange={handleOnChange}
                placeholder='Project description'
            />
            <input
                className='h-12 text-center my-2 border-2 rounded-3xl' 
                type='text'
                name='linklive'
                value={newProject.linklive}
                onChange={handleOnChange}
                placeholder='Link to live project'
            />
            <input
                className='h-12 text-center my-2 border-2 rounded-3xl' 
                type='text'
                name='linkcode'
                value={newProject.linkcode}
                onChange={handleOnChange}
                placeholder='Link to project Code'
            />
            <button className=' bg-gradient-to-l from-purple-500 via-red-500 bg-indigo-500 text-2xl text-white px-8 py-2 mt-8 rounded-3xl right-0' type='submit' disabled={!newProject}>Upload</button>
            </div>
            </div>

            </form>:'Not authorized to access this link'}
      </div>
        </div>
    )
}

export default LoginDashboard
