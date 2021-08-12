import React,{useState,useEffect} from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


function Project({db=null}) {
  const [projects ,setProjects] = useState([])


        useEffect(()=>{
        if(db){
            const unsubscribe = db.collection('Projects').orderBy('date').onSnapshot(querySnapshot =>{
                const data =querySnapshot.docs.map(doc =>({
                    ...doc.data(),
                    id : doc.id,
                }))
                setProjects(data)
            });
            return unsubscribe
        }
        

    },[db])
    return (
        <div className="relative bg-white pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl pb-10 mx-auto">
          
      <p className=' text-7xl xl:text-9xl font-black opacity-10 text-indigo-600'>Projects</p>
    <p className=' text-3xl xl:text-5xl pl-8 -mt-16 xl:-mt-20 pb-4 '>All my Previous Works</p>
    <p className='text-lg text-gray-700 pl-8 font-medium'>Take a look at some of my Projects</p>
    <div className='flex space-x-8 pt-24 pb-24 overflow-scroll scrollbar-hide'>
        {projects.slice(0).reverse().map((item,index) => {
          if(index<3){
            return(
              <a href='/portfolio'><div className='p-8 items-center  transform hover:scale-105 ease-out border duration-300 group cursor-pointer'>
            <img src={item.img} className='w-40 mx-auto h-40' alt='' />
            <p className='text-xl  text-gray-700 max-w-max pt-4  mx-auto font-bold group-hover:text-indigo-600'>{item.name}</p>
            <p className='text-gray-700 text-sm'>{item.desc}</p>
          </div></a>
            )
          }
        })}


        
        
        
    </div>

    <a href='/portfolio' className=' py-4 px-10 text-indigo-600 uppercase border border-indigo-500 hover:shadow-xl transform hover:scale-110 hover:bg-indigo-500 hover:text-white rounded-full'> More<ArrowForwardIcon fontSize='inherit'  /></a>
      </div>
            
        </div>
    )
}

export default Project
