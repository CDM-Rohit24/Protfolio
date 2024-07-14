import React from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import project1 from "../assets/priject1.png";
import project2 from "../assets/foodrecipes.png";

function Projects() {
  const projectList = [
    {
      
      title: "CrytoPlace ",
      dec: "This is a cryptocurrency tracker  responcive website for crypto currency tracking with help of Coingecko api",
      tools: "HTML, CSS, JavaScript, React, React Router Dom.",
      github_code: "https://github.com/CDM-Rohit24/CrytoPlace",
      diploy_link: "https://cryptoplace1o1.netlify.app",
      image: project1,
    },
    {
      title: "Food Recipe Web App",
      dec: "A web application that leverages React.js for front-end development, integrating with an external API to fetch and display content. The project also utilizes the Tailwind framework to enhance the user interface..",
      tools: "HTML, CSS, JavaScript, React,React Router Dom ,Tailwind.",
      github_code: "https://github.com/CDM-Rohit24/Food-recipe",
      diploy_link: "https://foodrecipes01.netlify.app",
      image: project2,
    },
  ];
  return (
    <div>
      <div className="pb-12">
        <h1 className=" py-4 pb-10 text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-12 w-[80%] m-auto">
        {projectList.map((item, index) => (
          <div
            key={index}
            className="block rounded-lg p-4 shadow-md  m-2 shadow-indigo-100"
          >
            <img
              alt=""
              src={item.image}
              className="h-56 w-full rounded-md object-cover"
            />

            <div className="mt-2">
              <dl>
                <div>
                  <dt className="text-center mt-10 text-2xl font-bold  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                    {item.title}
                  </dt>
                </div>

                <div>
                  <dt className="text-center text-md  font-semibold">
                    {item.dec}
                  </dt>

                  <dd className="font-medium text-md">
                    <span className="text-red-600 text-md">Tech Stack :</span>{" "}
                    {item.tools}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex items-center gap-8 justify-between text-xl">
                {/* <div className="sm:inline-flex sm:shrink-0 sm:items-center  sm:gap-2"> */}
                {/* logo */}
                <div className="flex m-auto mt-6 mb-0 pb-0 gap-[120px] md:gap-[250px] ">
                  <Link to={item.github_code} target="_blank">
                    <FaGithub className="w-4 h-4" />
                  </Link>
                  <Link to={item.diploy_link} target="_blank">
                    <FaArrowUpRightFromSquare className="w-4 h-4" />
                  </Link>
                </div>
                {/* </div> */}

                {/* <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <div className="mt-1.5 sm:mt-0"></div>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;