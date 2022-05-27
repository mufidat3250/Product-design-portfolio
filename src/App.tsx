import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavTab from "./component/NavTab/NavTab";
import Projects from "./component/Projects/Projects";
import projects from "./data";
import Activities from "./component/Activities";
import {experience} from './data'
import Input from "./component/Input/Input";
import TextArea from "./component/TextArea/TextArea";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="portfolio w-[95%] mx-auto lg:w-[90rem] bg-[#FCFCFC]">
      <div className=" portfolioContainer w-full mx-auto lg:w-[80%] lg:mb-[100px]">
       <div className="">
       <NavTab />

<section className=" smm:flex smm:flex-col  lg:flex lg:h-fit lg:justify-between lg:items-center lg:gap-x-[1.91625rem]">
  <div className="space-y-[2.625rem] smm:order-2 smm:text-center lg:order-1 ">
    <p className="max-w-[13.9375rem] text-xl">
      Creator | Problem Solver
    </p>
    <h2 className="text-[100px] leading-[1.02] font-[600] max-w-[28.99625rem] lgg:text-[70px]">
      Product Designer
    </h2>
    <p className="max-w-[25rem] text-[17px] ">
      I love creating designs that improves the lives of people and help
      businesses achieve their goals.
    </p>
  </div>
  <img
    src="/public/images/mememoji.png"
    alt=""
    className="h-[570px] w-[570px] object-contain order-1 lg:order-2"
  />
</section>
       </div>
        <section className="mt-[2.4868rem]">
          <Activities title="Projects" link='projects' />
          <div className=" sm:grid sm:mx-auto sm:grid-cols-[1fr] sm:gap-y-[20px] lg:grid lg:grid-cols-[repeat(3,1fr)] lg:gap-x-[1.5rem] sm:place-items-center sm:mt-[2rem]">
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
          <Activities title="Experience" link='experience' />
          <div className=" h-full sm:grid sm:grid-cols-[1fr] sm:place-items-center sm:text-center  lg:grid  lg:grid-cols-[repeat(3,1fr)] lg:max-w-[59.4375rem] gap-x-[5.625rem] lg:mt-[2.5rem] lg:text-left">
            {
              experience.map(({title,subtitle, summary})=>{
               return <div className="">
               <h3 className=" text-2xl font-[500]">{title}</h3>
               <p className="text-base  mt-2 mb-3 font-normal ">{subtitle}</p>
                <p className="max-w-[16.75rem] text-sm font-light">{summary}</p>
             </div>
              })
            }
          </div>
        </section>
        <section className="mb-[7.5rem]">
            <Activities title='Education & Tools'/>
            <div className="">
              <p className="mt-[2.5rem] mb-[1.75rem]"><span className="">2016 - 2021</span>, Federal University of Petroleum Resources, Effurun. BSc Computer Science</p>
              <p className=" text-xl text-neural font-medium mt-[1.75rem] mb-[1rem]">Tools</p>
              
              <div className="max-w-[8.1875rem] font-[400]">
              <p>Figma</p>
              <p>Adobe XD</p>
              <p>Webflow</p>
              <p>Adobe Photoshop</p>
              </div>

            </div>
        </section>
        <footer className="">
              <Activities title="Contact"/>

              <div className="mt-[2.5rem] flex justify-between ">
               <div className="w-[422px] space-y-[1.75rem]">
                    <Input placeholder="Name"/>
                    <Input placeholder="Email"/>
                   <div> <TextArea/></div>
               </div>
               <div className=" flex flex-col justify-between ">
                <img src="/public/images/LinkedIn.png" alt="" />
                <img src="/public/images/Twitter.png" alt="" />
                <img src="/public/images/Behance.png" alt="" />
               </div>
              </div>
        </footer>
        <button className=" bg-neural py-[14.5px] px-[51.5px] text-white mt-[2.25rem]">Submit</button>
      </div>
    </div>
  );
}

export default App;
