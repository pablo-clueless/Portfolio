import React from 'react'
const About = () => {

    return (
        <div className='flex flex-col items-center text-center bg-main-bg dark:bg-main-dark-bg px-6 py-10' id="about">
            <p className='text-6xl font-medium text-primary mb-10'>
                About
            </p>
            <div className='flex md:flex-row flex-col gap-4'>
                <div className='md:w-1/2 text-left w-full my-4'>
                    <p className='text-3xl text-primary'>
                        Okunola Samson
                    </p>
                    <p className='text-5xl text-gray-600 dark:text-white'>
                        Frontend Developer, Blockchain Enthusiast and Technical Writer.
                    </p>
                </div>
                <div className='md:w-1/2 text-left w-full my-4'>
                    <p className='text-xl text-gray-600 dark:text-white'>
                        I&apos;m a Frontend Web Developer and Blockchain enthusiast based in Lagos, Nigeria.
                        <br />
                        I like looking for solutions and creating a great user experience adhering to real applications implementation with the knowledge and understanding of web development concepts. I&apos;ve worked with other developers on projects and created several working SPAs and websites that are maintainable and scalable.<br />
                        I like pop music and good food. When I&apos;m not coding, I&apos;m either reading, playing video games or writing.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
