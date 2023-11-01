
import Image from "next/image";
import IconFileDownload from "../icons/IconFileDownload";
import IconLinkedin from "../icons/IconLinkedin";
import IconGithub from "../icons/IconGithub";
import IconCopy from "../icons/IconCopy";
import Link from "next/link";

import Button from "../Button";


export const HomePage = ()=>{

 return (
   
    <div style={{
        display:"flex",
        justifyContent:"center",

    }}>
        <header className="flex flex-col justify-center items-center max-w-sm">
            <div>
                <div className="header-image text-center ">
                    <Image src="/kenneth-owusu.jpg" width={100} height={100} alt="Image of Kenneth Owusu"
                     className="rounded-full"
                    />
                </div>
            </div>
            <h1 className="mb-3">Kenneth Owusu</h1>

            <p className="text-center mb-3">Hi! Kenneth here. I am a visionary web developer with a passion for 
                turning ideas into captivating digital experiences.
            </p>


          <div className="max-w-xs w-full">
            <div className="flex align-items-end justify-between mb-3">
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
            
            <Button>
                <div className="flex justify-center items-center">
                    <p>k.owusu.info@gmail.com</p>
                    <span><IconCopy/></span>
                </div>
            </Button>
          </div>
           
        </header>
    </div>
 )
}