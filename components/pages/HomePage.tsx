
import Image from "next/image";
import IconFileDownload from "../icons/IconFileDownload";
import IconLinkedin from "../icons/IconLinkedin";
import IconGithub from "../icons/IconGithub";
import IconCopy from "../icons/IconCopy";




export const HomePage = ()=>{

 return (
   
    <div style={{
        display:"flex",
        justifyContent:"center",

    }}>
        <header
        style={{
            maxWidth:"400px;"
        }}
        
        >
            <div>
                <div className="header-image text-center">
                    <Image src="/kenneth-owusu.jpg" width={100} height={100} alt="Image of Kenneth Owusu"
                     className="rounded-full"
                    />
                </div>
            </div>
            <h1>Kenneth Owusu</h1>

            <p className="text-center">Hi! Kenneth here. I am a visionary web developer with a passion for 
                turning ideas into captivating digital experiences.
            </p>

            <div className="flex align-items-end justify-between">
                <span className="flex items-center"><span><IconFileDownload/></span> <span className="flex items-end">Resume</span></span>
                <span className="flex items-center"> <IconLinkedin/>LinkedIn</span> 
                <span className="flex items-center"><IconGithub/>Github</span>
            </div>

            <div className="flex justify-center items-center">
                <p>k.owusu.info@gmail.com</p>
                <span><IconCopy/></span>
            </div>
        </header>
    </div>
 )
}