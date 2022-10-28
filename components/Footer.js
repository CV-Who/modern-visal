import Image from 'next/image'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../Data/index'

const Footer = () => (
    <section className="flex flex-col items-center justify-center sm:py-16 py-6">
        <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
            <div className="flex-1 flex flex-col justify-start mr-10">
                <Image alt="logo" className="w-[200px] h-[72px] object-contain" src={logo} />
                <p className="text-gray-400  max-w-[300px] mt-4">A new way to make the payments easy, reliable and secure.</p>
            </div>
            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((footerLink) => (
                    <div key={footerLink.id} className="flex flex-col my-4 min-w-[150px]">
                        <h4 className="font-medium text-white text-[20px]">{footerLink.title}</h4>
                        <ul className="space-y-2 mt-2 list-none">
                            {footerLink.links.map((link, index) => (
                                <li key={index} className="text-[16px] text-gray-300 hover:text-cyan-400 cursor-pointer">
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>
        </div>
        <div className="w-full flex justify-between items-center flex-col md:flex-row pt-6 border-t-[1px] border-t-gray-300">
            <p className="text-gray-400 text-center">2021 HooBank. All Rights Reserved.</p>
            <div className="flex flex-row md:mt-0 mt-6 space-x-5">
                {socialMedia.map((social, index) => (
                    <Image className="w-[21px] h-[21px] object-contain cursor-pointer"
                    src={social.icon}
                    key={social.id}
                    alt={social.id}
                    />
                ))}
            </div>
        </div>
    </section>
)

export default Footer