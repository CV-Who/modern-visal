import Image from 'next/image'
import React from 'react'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import { motion as m } from 'framer-motion'

function Hero() {
    return (
        <section id="home" className="flex md:flex-row flex-col sm:py-16 py-10 xl:px-16">
            <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-10">
                <div className="flex flex-row items-center px-4 rounded-[10px] bg-gradient-to-r from-gray-700 to-gray-400 mb-2">
                    <Image src={discount} />
                    <p className="font-poppins font-normal text-dimWhite text-[12px] ml-2">
                        <span className="text-white">20%</span> Discount For {""}
                        <span className="text-white">1 Month</span> Account
                    </p>
                </div>
                <div className="flex flex-row justify-between items-center w-full overflow-hidden">
                    <m.h1
                        initial={{
                            opacity: 0,
                            x: -500
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.5
                        }}
                        className="flex-1 font-poppins font-semibold sm:text-[52px] text-[40px] text-white">
                        The Next <br className="sm:block hidden" />
                        <span className="text-gradient">Generation</span>

                    </m.h1>
                    <m.div
                        initial={{
                            opacity: 0,
                            x: -500
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        className="sm:flex hidden md:mr-4 mr-0">
                        <GetStarted />
                    </m.div>
                </div>
                <div>
                    <m.h1
                        initial={{
                            opacity: 0,
                            x: -500
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.5
                        }}
                        className="font-poppins font-semibold sm:text-[52px] text-[40px] text-white w-full">
                        <span className="flex items-center space-x-4">
                            <p>Payment</p>
                            <p>Method</p>
                        </span>
                    </m.h1>
                    <p className="text-gray-300 max-w-[400px]">
                        With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
                    </p>
                </div>

            </div>
            <div className="flex-1 flex items-center justify-center md:my-0 my-10 relative">
                <m.div
                    initial={{
                        opacity: 0,
                        y: 50
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.5
                    }}
                >
                    <Image className="w-full h-full relative z-[5]" src={robot} />
                </m.div>
                <div className="absolute z-0 w-[40%] h-[40%] top-0 right-[40px] pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>
            <div className="sm:hidden flex justify-center items-center">
                <GetStarted />
            </div>
        </section>
    )
}

export default Hero