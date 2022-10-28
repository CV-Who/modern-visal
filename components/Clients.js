import Image from 'next/image'
import React from 'react'
import { clients } from '../Data/index'

const Clients = () => (
    <section className="flex items-center justify-center my-2 md:px-10 mx-auto">
        <div className="flex items-center justify-center flex-wrap w-full">

            {clients.map((client) => (
                <div key={client.id} className="flex-1 items-center justify-center sm:min-w-[192px] min-w-[120px]">
                    <Image className="w-[100px] sm:w-[142px] object-contain" src={client.logo} />

                </div>
            ))}

        </div>
    </section>
)

export default Clients