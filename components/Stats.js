import React from 'react'
import { stats } from '../Data/index'

function Stats() {
  return (
    <section className="flex items-center justify-center flex-row flex-wrap sm:mb-20 mb-6">
      {
        stats.map((stat) => (
          <div key={stat.id} className="flex-1 flex items-center justify-center flex-row m-3 space-x-2">
            <h4 className="font-semibold text-white xs:text-[40px] text-[30px]">{stat.value}</h4>
            <p className="text-white xs:text-[20px] text-[15px] uppercase text-gradient">{stat.title}</p>
          </div>
        ))
      }
    </section>
  )
}

export default Stats