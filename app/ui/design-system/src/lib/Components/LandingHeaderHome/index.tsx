import LandingImage from "../../../../images/misc/landing-home.png"
import LandingImage2x from "../../../../images/misc/landing-home@2x.png"
import { LandingHeaderLinks } from "../LandingHeader"

export type LandingHeaderHomeProps = {
  description: string
  tag: string
  title: string
}

export function LandingHeaderHome({
  description,
  tag,
  title,
}: LandingHeaderHomeProps) {
  return (
    <div className="container flex flex-col items-center pt-4 pb-10 md:flex-row md:pb-20">
      <div className="flex max-w-full flex-1 basis-1/2 flex-col items-start self-start pt-8 pb-4 pr-4 md:mt-24 md:py-16">
        <p className="mb-4 font-display text-2xl font-bold text-primary-gray-300 dark:text-primary-gray-200">
          #{tag}
        </p>
        <h1 className="text-h1 mb-6 max-w-full overflow-hidden text-ellipsis !text-4xl md:!text-7xl ">
          {title}
        </h1>
        <div className="max-w-[400px] text-xl font-semibold text-primary-gray-400 dark:text-primary-gray-50">
          {description}
        </div>
      </div>
      <div className="order-first flex-1 basis-1/2 md:order-last">
        <img
          src={LandingImage}
          srcSet={`${LandingImage}, ${LandingImage2x} 2x`}
          alt=""
          className="max-h-[195px] object-cover md:max-h-[540px]"
        />
      </div>
      <LandingHeaderLinks />
    </div>
  )
}
