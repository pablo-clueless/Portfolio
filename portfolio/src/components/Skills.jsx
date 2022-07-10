
import { JavaScript, Nextjs, Nodejs, React, Redux, Sass, Solidity, Styledcomponents, Threejs, TypeScript } from '../assets/icons'

const Skills = () => {

    return (
        <div className='flex flex-col items-center text-center bg-main-bg dark:bg-main-dark-bg px-6 py-10' id="about">
            <p className='text-6xl font-medium text-primary mb-10'>
                Skills
            </p>
            <div className='flex md:flex-row flex-col gap-4'>
                <div className='md:w-1/2 text-left w-full my-4'>
                    <p className='text-2xl text-gray-600 dark:text-white mb-2'>
                        2 years+, a ton of tutorials and online courses, here I am.
                    </p>

                    <p className='text-xl text-gray-600 dark:text-white'>
                        A passion of mine is translating logic and designs into code. Here are some the tools I use
                    </p>
                </div>
                <div className='md:w-1/2 text-left w-full my-4 flex flex-wrap gap-8'>
                    <JavaScript />
                    <Nextjs />
                    <Nodejs />
                    <React />
                    <Redux />
                    <Sass />
                    <Solidity />
                    <Styledcomponents />
                    <Threejs />
                    <TypeScript />
                </div>
            </div>
        </div>
    )
}

export default Skills