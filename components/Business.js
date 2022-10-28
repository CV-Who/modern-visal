import Image from 'next/image'
import { features } from '../Data/index'
import Button from './Button'

const FeatureCard = ({ icon, title, content }) => (
  <div className={`flex flex-row p-6 rounded-[20px]} feature-card`}>
    <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-gray-500">
      <Image src={icon} className="w-[50%] h-[50%] object-contain" alt="icon" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-[18px] mb-1">{title}</h4>
      <p className="font-poppins text-[16px] mb-1">{content}</p>
    </div>
  </div>
)

function Business() {
  return (
    <section id="feature" className="flex md:flex-row flex-col sm:py-16 py-6 text-white">
      <div className="flex-1 justify-center items-center flex-col">
        <h2 className="font-semibold xs:text-[48px] text-[40px] w-full ">You do the business,<br className="sm:block hidden" /> we`ll handle the money.</h2>
        <p className="font-normal text-gray-400 text-[18px] max-w-[450px]">
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <Button style="mt-10" />
      </div>
      <div className="flex-col flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business


