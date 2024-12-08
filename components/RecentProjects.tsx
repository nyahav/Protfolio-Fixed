import { projects } from '@/data'
import React from 'react'
import { CardContainer, CardBody, CardItem } from './ui/3d-card' // Import Card components
import { FaLocationArrow } from 'react-icons/fa6'
// import Link from 'next/link'

const RecentProjects = () => {
    return (
        <div className="py-20" id="projects">
            <h1 className="heading">
                A small selection of {''}
                <span className='text-purple'>Recent projects</span>
            </h1>

            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map(({ id, title, des, img, iconLists}) =>
                    <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                        {/* Replace PinContainer with CardContainer */}
                        <CardContainer className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[38rem] h-auto rounded-xl p-6 border">
                                {/* Image Section */}
                                <CardItem translateZ="50" className='relative flex items-center justify-center sm:w-[570px] w-[15vw] overflow-hidden sm:h-[40vh] h-[30vh] lg:h-[30vh] mb-10'>
                                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                        <img src="./bg.png" alt="bg-img" />
                                    </div>
                                    <img src={img} alt={title} className='z-10 absolute bottom-0' />
                                </CardItem>

                                {/* Title */}
                                <CardItem translateZ="60" className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                    {title}
                                </CardItem>

                                {/* Description */}
                                <CardItem translateZ="60" as="p" className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                    {des}
                                </CardItem>

                                {/* Icons and Link */}
                                <div className='flex items-center justify-between mt-7 mb-3'>
                                    <CardItem translateZ="30" className='flex items-center'>
                                        {iconLists.map((icon, index) => (
                                            <div key={icon} className='border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                                style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                                                <img src={icon} alt={icon} className='p-2' />
                                            </div>
                                        ))}
                                    </CardItem>
                                    
                                    {/* Live Site Link */}
                                    <CardItem translateZ="30"  className='flex justify-center items-center'>
                                        <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                                        <FaLocationArrow className='ms-3' color="#CBACF9"/>
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RecentProjects
