import { useState } from "react";
import "./App.css";
import NavTab from "./component/NavTab/NavTab";
import Projects from "./component/Projects/Projects";
import projects from "./data";
import Activities from "./component/Activities";
import {experience} from './data'
import Input from "./component/Input/Input";
import TextArea from "./component/TextArea/TextArea";

function App() {
  return (
    <div className="portfolio w-[90%] mx-auto lg:w-[90rem] bg-[#FCFCFC]">
      <div className="portfolioContainer w-full mx-auto lg:w-[80%] lg:mb-[100px]">
       <div className="">
       <NavTab />
<section className=" smm:flex smm:flex-col  lg:flex lg:h-fit lg:justify-between lg:items-center lg:gap-x-[1.91625rem]">
  <div className="top lg:space-y-[2.625rem] product-container  sm:order-1 smm:text-center lg:order-[-1] ">
    <p className="max-w-[13.9375rem] text-xl creator mt-[3.5rem] mx-auto mb-[1.5rem] sm:mx-0">
      Creator | Problem Solver
    </p>
    <h2 className=" text-[2rem] leading-[1.02] font-[600] max-w-[28.99625rem] lg:text-[70px] xl:text-[100px] product-design">
      Product Designer
    </h2>
    <p className="max-w-[25rem] text-[17px] hidden lg:block">
      I love creating designs that improves the lives of people and help
      businesses achieve their goals.
    </p>
  </div>
   <div className="img-head">
   <img
    src="/images/mememoji.png"
    alt=""
    className="lgg:h-[570px] lgg:w-[570px] object-contain order-1 lg:order-2 emoji"
  />
   </div>
  
  <p className="order-3 max-w-[25rem] text-[17px] love ">  I love creating designs that improves the lives of people and help
      businesses achieve their goals.</p>
</section>
       </div>
        <section className="projects lg:mt-[2.4868rem]">
            <div className=" project-activity activities">
            <Activities title="Projects" link='projects' />
            </div>
          <div className="single-grid project-card sm:grid sm:mx-auto sm:grid-cols-[1fr] sm:gap-y-7 lg:grid lg:grid-cols-[repeat(3,1fr)] lg:gap-x-[1.5rem] sm:place-items-center ">
            {projects.map(({ logo, text, overlay, img, bg_color }, index) => {
              return (
               
                  <Projects
                  logo={logo}
                  text={text}
                  overlay={overlay}
                  img={img}
                  bg_color={bg_color}
                  key={index}
                />              
              );
            })}
          </div>
        </section>
        <section className="py-[7.5rem]">
         <div className="experience-activity activities">
         <Activities title="Experience" link='experience' />
         </div>
          <div className=" experience-card h-full sm:grid sm:grid-cols-[1fr] 
          sm:gap-y-12

          sm:place-items-center sm:text-center  lg:grid  lg:grid-cols-[repeat(3,1fr)] lg:max-w-[59.4375rem] gap-x-[5.625rem] lg:mt-[2.5rem] lg:text-left">
            {
              experience.map(({title,subtitle, summary})=>{
               return <div className="">
               <h3 className=" experience-title text-2xl font-[500]">{title}</h3>
               <p className=" sub-title text-base  mt-2 mb-3 font-normal ">{subtitle}</p>
                <p className=" details max-w-[16.75rem] text-sm font-light">{summary}</p>
             </div>
              })
            }
          </div>
        </section>
        <section className="mb-[7.5rem]">
          <div className="activity-education activities">
          <Activities title='Education & Tools'/>
          </div>
            <div className="">
            <div className="education-1">
            <p className="mt-[2.5rem] mb-[1.75rem] education-detail"><span className="">2016 - 2021</span>, Federal University of Petroleum Resources, Effurun. BSc Computer Science</p>
            </div>
              <p className="tools sm:text-xl text-neural font-medium mt-[1.75rem] mb-[1rem] tools">Tools</p>
              
              
              <div className="font-[400] mx-auto dif-tools ">
              <p>Figma</p>
              <p>Adobe XD</p>
              <p>Webflow</p>
              <p>Adobe Photoshop</p>
              </div>
              

            </div>
        </section>
        <footer className="activities-contact activities">
             <div> <Activities title="Contact"/></div>

              <div className="mt-[2.5rem] lg:flex lg:justify-between lg:w-full">
               <div className="max-w-[26.875rem] space-y-[1.75rem]">
                    <Input placeholder="Name"/>
                    <Input placeholder="Email"/>
                   <div> <TextArea/></div>
               </div>
               <div className=" lg:flex lg:flex-col lg:justify-between largeScreen-icon hidden sm:hidden   sm:flex lg:block sm:flex-col items-center">
                <img src="/images/LinkedIn.png" alt="" />
                <img src="/images/Twitter.png" alt="" />
                <img src="/images/Behance.png" alt="" />
               </div>
              </div>
        </footer>
      <div className="w-full buttonContainer sm:grid sm:place-items-center sm:mb-[8.4rem] lg:place-items-start lg:grid">
      <button className="button bg-neural py-[14.5px] px-[51.5px] text-white lg:mt-[2.25rem] lg:mb-[8.6rem]">Submit</button>
      </div>

       <div className="smallScreen-icon flex justify-center items-center lg:hidden">
       <div className=" flex  justify-between space-x-[6.0625rem] pb-[3rem] ">
                <img src="/images/LinkedIn.png" alt="" />
                <img src="/images/Twitter.png" alt="" />
                <img src="/images/Behance.png" alt="" />
               </div>
      </div>
       </div>
    </div>
  );
}

export default App;
