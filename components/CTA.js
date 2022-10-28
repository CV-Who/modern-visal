import React from 'react'
import Button from './Button'

const CTA = () => (
    <section className="flex items-center justify-center bg-gradient-to-tr from-black to-gray-400 p-6 rounded-[20px] my-10 ">
        <div className="flex-1 flex flex-col">
            <h2 className="text-white text-3xl font-bold">Let's try our service now!</h2>
            <p className="text-gray-300 max-w-[300px]">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className="flex flex-center justify-center sm:ml-10 ml-0">
            <Button />
        </div>
    </section>
)

export default CTA