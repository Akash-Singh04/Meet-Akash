'use client'
import React from 'react'
import Navbar from "../components/Navbar";
import { useParams } from 'next/navigation'
import {projectDataSet} from "../../../src/data" 
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'

const Page = () => {
  const params = useParams()
  const id:any = params.id
  const projectData = projectDataSet[id as keyof typeof projectDataSet]

  return (
    <div>
      <Navbar />
      <div className="project-details p-6 md:flex mt-20 items-center text-white"  data-aos="fade-up">
        <div className="md:w-1/2 md:pr-6 text-center">
          <Image src={projectData.imgSrc} alt={projectData.name} width={1000} height={1000} className='w-full max-h-[100%] object-contain'/>
          <a
            className="btn btn-ghost normal-case text-xl mt-4"
            href={projectData.githubLink}
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="fas fa-check"
              style={{ color: "grey", fontSize: 50 }}
            />
          </a>

          {projectData.projectlink && (
            <a
              className="btn btn-ghost normal-case text-xl mt-4"
              href={projectData.projectlink}
            >
              <FontAwesomeIcon
                icon={faLink}
                className="fas fa-check"
                style={{ color: "grey", fontSize: 50 }}
              />
            </a>
          )}

          {projectData.youtubeLink && (
            <a
              className="btn btn-ghost normal-case text-xl mt-4"
              href={projectData.youtubeLink}
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="fas fa-check"
                style={{ color: "grey", fontSize: 50 }}
              />
            </a>
          )}
        </div>
        <div className="md:w-1/2">
          <div className="container">
            <div className="section-title">
              <h2 className="other-header">{projectData.name}</h2>
            </div>
          </div>
          <p>{projectData.description}</p>
          <h2 className=' my-5'>Tech Stack: {projectData.techStack}</h2>
          <h2 className=' my-5'>Domain: {projectData.domain}</h2>
          <h2 className=' my-5'>Project Date: {projectData.projectdate}</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
