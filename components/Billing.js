import Image from 'next/image'
import React from 'react'
import { apple, bill, google } from '../assets'


const Billing = () => (

    <section id="product" className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
        <div className="flex-1 flex items-center justify-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
            <Image className="w-full h-full relative z-[5]" src={bill} />
            <div className="absolute z-[10] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[6] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        </div>
        <div className="flex-1 flex justify-center items-center flex-col w-full">
            <h1 className="text-white text-3xl font-bold">Easily control your <br className="sm:block hidden" /> billing & invoicing</h1>
            <p className="font-normal text-gray-400 text-[18px] md:max-w-[260px] max-w-[450px]">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className="flex flex-row items-center flex-wrap sm:mt-10 mt-6">
                <Image className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" src={apple}/>
                <Image className="w-[128px] h-[42px] object-contain  cursor-pointer" src={google}/>

            </div>
        </div>
    </section>

)

export default Billing