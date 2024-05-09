import React from 'react';
import { Button } from '@material-tailwind/react';
import WhiteAnimation from './WriteAnimation';
import SocialLinks from '../Reuseable/SocilaLinks';
import { Link } from 'react-router-dom';
// import resume from '../../Images/Elsayed resume.pdf'
import heroImage from '../../Images/hero.jpeg'

const Hero = () => {


    const buttonsData = [
        {
            id: 1,
            url: '/about',
            content: 'about me',
        },
        {
            id: 2,
            url: '/contact',
            content: 'contact me',
        },
    ]

    const buttons = buttonsData.map(button => {
        return (
            <Button key={button.id} variant="outlined" className='text-white border-[#cccccc] p-0 text-base capitalize focus:shadow-none hover:opacity-100'>

                <Link to={button.url} className='block px-6 py-3' >
                    {button.content}
                </Link>

            </Button>
        )
    })

    return (
        <div className="hero bg-cover px-4 h-screen  text-white text-xl relative before:absolute before:inset-0 before:bg-black before:w-full before:h-full before:bg-opacity-50" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="flex flex-col justify-center items-center relative h-full">
                <h1 className='text-[40px] leading-normal md:text-7xl mb-3 font-semibold text-[#cccccc] capitalize relative'>I'm sara</h1>
                <WhiteAnimation />
                <div className="flex gap-4 mb-8">
                    {buttons}
                </div>
                <SocialLinks />
            </div>
        </div>
    );
}

export default Hero;