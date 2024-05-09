import React from 'react';
import SEO from '../Reuseable/SEO';
import SecTitle from '../Reuseable/SecTitle';
import { Chip } from '@material-tailwind/react';
import { featuresData } from '../../constants';
import myPhoto from '../../Images/myPhoto.jpeg'

const About = () => {

    let skills = featuresData.map((skill, idx) => {
        return (
            <Chip key={idx} variant="outlined" className='text-[#cccccc] border-white' value={skill.name} />
        )
    })


    return (
        <>
            <SEO title='About Me' desc='This page contains my skills and some information about me' />
            <div className="py-36 min-h-[calc(100vh-129px)]">
                <SecTitle title='About Me' />
                <div className="container px-4 mx-auto items-center flex flex-col lg:flex-row 4 gap-24">
                    <div className="rounded-full min-w-[310px] w-[310px] h-[310px]">
                        <img src={myPhoto} className='w-full h-full border-4 rounded-full object-cover' alt="myPhoto" />
                    </div>
                    <div className="text-lg text-[#cccccc]">
                        <p className=' leading-relaxed mb-10'>Hi, I'm Sara. I'm a dedicated and aspiring Full Stack Developer with a profound passion for web development. My focus lies in mastering the dynamic duo of React.js and Laravel. Eager to broaden my horizons, I relentlessly pursue opportunities to bolster my skills and deepen my understanding of these technologies.</p>
                        <div className="chips flex gap-x-2 gap-y-3 flex-wrap">
                            {skills}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;