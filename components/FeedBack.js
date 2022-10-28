import Image from 'next/image'
import React from 'react'
import { quotes } from '../assets/index'

const FeedBack = ({ content, name, title, img }) => (
    <div className="flex justify-between flex-col px-5 py-12 rounded-[20px] max-w-[300px] md:mr-10 sm:mr-5 my-5 feedback-card cursor-pointer">
        <Image className="w-[43px] h-[27px] object-contain" src={quotes} />
        <p className="text-[18px] text-white my-6 max-w-[350px]">{content}</p>
        <div className="flex flex-row space-x-5 items-center">
            <Image className="w-[48px] h-[48px] rounded-full" src={img} />
            <div className="flex flex-col">
                <h4 className="font-semibold text-[20px] text-white">{name}</h4>
                <p className="text-[18px] text-white">{title}</p>

            </div>
        </div>
    </div>
)

export default FeedBack