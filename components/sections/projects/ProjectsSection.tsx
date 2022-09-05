
import { ProjectsContainer } from "../../containers/ProjectsContainer"
import { ProjectList } from "../../projects/ProjectList"



export const ProjectsSection = ()=>{

   return(
    <>
    <h1 className="mb-4">Works</h1>
    <ProjectsContainer order="desc">
       <ProjectList/>
    </ProjectsContainer>
   
   </>
   )
}