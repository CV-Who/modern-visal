import React from 'react'

const Button = ({ style }) => {
    return (
        <button type="button" className={`py-4 px-6 bg-gradient-to-r from-cyan-400 to-cyan-300 font-medium rounded-lg text-black text-xl ${style}`}>
            Get Started
        </button>
    )
}

export default Button