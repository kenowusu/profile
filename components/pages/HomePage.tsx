import { useEffect,useState } from "react";


import Image from "next/image";
import IconFileDownload from "../icons/IconFileDownload";
import IconLinkedin from "../icons/IconLinkedin";
import IconGithub from "../icons/IconGithub";
import IconCopy from "../icons/IconCopy";
import {Check} from 'lucide-react';

import Button from "../Button";


export const HomePage = ()=>{
 
 const [email,setEmail] = useState('k.owusu.info@gmail.com');
 const[isCopied,setIsCopied] = useState(false);

 const copy = ()=>{
    setIsCopied(true);
    navigator.clipboard.writeText(email);
    setTimeout(()=>setIsCopied(false),2000);
 }

 


 return (
   
    <div style={{
        display:"flex",
        justifyContent:"center",

    }}>
        <header className="flex flex-col justify-center items-center max-w-xl">
            <div>
                <div className="header-image text-center ">
                    <Image src="/kenneth-owusu.jpg" width={100} height={100} alt="Image of Kenneth Owusu"
                     className="rounded-full"
                    />
                </div>
            </div>
            <h1 className="mb-3">Kenneth Owusu</h1>

            <p className="text-center mb-6">Hi! Kenneth here. I am a visionary web developer with a passion for 
                turning ideas into captivating digital experiences.
            </p>


          <div className="max-w-xs w-full">
            <div className="flex align-items-end justify-between mb-6">
                <a href="https://profile.kowusu.me/wp-content/uploads/2022/07/CV_CoverLeter.pdf" 
                target="_blank" className="flex items-center" download rel="noopener noreferrer">
                    <span className="flex items-center">
                        <span><IconFileDownload width="19px" height="19px"/></span>
                        <span className="flex items-end  pl-1">resume</span>
                    </span>
                </a>

                <a href="https://linkedin.com/in/kenneth-owusu" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center"> 
                    <span><IconLinkedin width="19px" height="19px"/></span>
                    <span className="pl-1">linkedIn</span>
                </span>
                </a> 

                <a href="https://github.com/kenowusu" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center ">
                    <span><IconGithub width="19px" height="19px"/></span>
                    <span className="pl-1">github</span>
                </span>
                </a>
            </div>
            
            <Button >
                <div onClick={copy} className="flex justify-center items-center">
                    <p>{email}</p>
                    <span className="ml-0.5"><IconCopy height="1.5em" width="1.5em"/></span>
                </div>
            </Button>
          
            <section 
            className={`flex justify-center items-center mt-2  transition-all duration-300 ease-linear text-xs
             ${isCopied ? "opacity-100 visible" : "opacity-0 invisible"}`}
             >Email copied successfully<Check size={15} className="ml-1"/>
             </section>
            
          </div>
           
        </header>
    </div>
 )
}