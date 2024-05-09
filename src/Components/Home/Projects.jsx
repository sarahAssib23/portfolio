import React from 'react';
import ProjectCard from '../Reuseable/ProjectCard';
import SecTitle from '../Reuseable/SecTitle';
import { projectsData } from '../../constants';

const Projects = () => {

    const projects = projectsData.map((project, idx) => {
        return <ProjectCard key={idx} {...project} />
    })


    return (
        <div className="projects pt-28">
            <SecTitle title='Check Out My Projects' />
            <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-10 mb-10">
                {projects}
            </div>
        </div>
    );
}

export default Projects;