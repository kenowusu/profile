import axios from 'axios';
import React, { useEffect,useState } from 'react';
import Error from 'next/error';





import api from './api';
import Router from 'next/router';



export const ProjectContainer = ({children,slug})=>{
    
 
    const [project,setProject] = useState('');
    // const [pageNotFound,setPageNotFound] = useState(false);

    
/***********useEffect*******/
useEffect(()=>{
    const url  = `${api.url}/wp/v2/projects?_embed`;
    const headers = api.headers;
    const fetchProjects = async()=>{
        
        const params = {
            slug:slug,
            acf_format:'standard',
        }
 
        try{
            const response = await axios({
                url:url,
                method:'get',
                headers:headers,
                params:params

            })
            setProject(response.data[0])
       
            if(response.data.length < 1){
                Router.push('/404')
               // setPageNotFound(true)
            }
        }catch(e){console.log(e)}
    }
    
    fetchProjects();

    
},[]);



/*******render************/
return(
    <>

     {/* {(pageNotFound) && <Error statusCode={404}/>} */}
     {React.Children.map(children,child=>{
        if(React.isValidElement(child)){
            return React.cloneElement(child,{project});
        }

        return child;
     })}

  


    </>
)


}