import {ProjectSingleLayout} from '../layouts/ProjectSingleLayout';
import Link from 'next/Link';
import Image from 'next/image';


import { ProjectContainer } from '../containers/ProjectContainer';
import { ProjectFullDetail } from '../projects/ProjectFullDetail';


export const ProjectSinglePage = ({slug})=>{

  
return(
  <ProjectContainer slug={slug}>
     <ProjectFullDetail/>
  </ProjectContainer>
)
}