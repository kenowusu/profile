import Head from 'next/head';


import { ProjectSinglePage } from "../../components/pages/ProjectSinglePage";


export const  getServerSideProps = async({query})=>{
   
    return{
        props:{
            slug:query['project-single']
        }
    }
}
const ProjectSingle = ({slug})=>{
    


    return(
        <>
        <Head>
            <title>Project - Kenneth Owusu</title>
        </Head>
        <ProjectSinglePage slug={slug}/>
        
        </>
    )
}

export default ProjectSingle;