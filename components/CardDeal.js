import Image from 'next/image'
import React from 'react'
import { card } from '../assets'
import Button from './Button'

const CardDeal = () => (
    <section className="flex md:flex-row flex-col sm:py-16 py-6">
        <div className="flex-1  justify-center items-center flex-col">
            <h2 className="text-white text-3xl font-bold">Find a better card deal <br className="sm:block hidden" /> in few easy steps.
            </h2>
            <p className="font-normal text-gray-400 text-[18px] md:max-w-[260px] max-w-[450px] mt-5">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
            <Button style="mt-10" />
        </div>

        <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
            <Image className="w-full h-full object-contain" src={card} alt="djf" />
        </div>
    </section>
)


export default CardDeal