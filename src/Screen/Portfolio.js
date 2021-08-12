import React,{useState,useEffect} from 'react'
import ProjectCard from '../Components/ProjectCard'

function Portfolio({user=null,db=null}) {

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
        <div className="relative bg-white border border-t-0 overflow-hidden">
      <div className="max-w-7xl mx-auto">
            <h1 className='lg:text-6xl text-4xl font-light pt-12 text-gray-600 pb-8 lg:pb-16 '>Portfolio</h1>

            {/* {console.log(Object.keys(projects))} */}
            {projects.slice(0).reverse().map((item,index) => (
                <ProjectCard 
                key={index}
            img={item.img} 
            name={item.name} 
            desc={item.desc}
            linklive={item.linklive} 
            linkcode={item.linkcode}
            date={item.date} />
            ))} 
             
            </div>
        </div>
    )
}

export default Portfolio
