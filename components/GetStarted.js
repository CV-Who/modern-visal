import Image from 'next/image'
import React from 'react'
import { arrowUp } from '../assets'

const GetStarted = () => (
    <div
        className="flex items-center justify-center bg-gradient-to-r from-cyan-400 to-cyan-300 p-[2px] w-[140px] h-[140px] rounded-full text-white cursor-pointer">
        <div className="bg-black w-full h-full rounded-full text-center pt-8">
            <div className="flex items-center justify-center">
                <h1 className="text-xl">Get</h1>
                <Image src={arrowUp} />
            </div>
            <h1 className="text-xl">Started</h1>
        </div>
    </div>
)

export default GetStarted

