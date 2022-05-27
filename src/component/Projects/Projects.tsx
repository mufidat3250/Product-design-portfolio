import React from "react";
type projectProp = {
    logo:string;
    img:string;
    bg_color:string;
    text:React.ReactNode
    overlay:string;

}

const Projects = ({logo, img, bg_color,text, overlay}:projectProp) => {
  return (
    <div className=" container py-[3.375rem] flex flex-col justify-center items-center  bg-[#F5F5F5] h-full relative">
    <div> <img src={logo} alt="" className="mb-[0.5rem]" /></div>
     <p className="text-center sm:text-base sm:font-bold lg:text-[14px] leading-[1.42rem] lg:font-extralight mb-[1.5rem]">{text}</p>
    <div className="h-[120px] w-[80%] mx-auto"> <img src={img} alt="" className=" h-[100%] w-[100%] object-contain  "/></div>
    <div className=" absolute overlay cursor-pointer" style={{backgroundColor:bg_color}}>
      <p className="text">{overlay}</p>
    </div>
   </div>
  );
};

export default Projects;
