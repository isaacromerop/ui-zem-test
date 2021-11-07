import Image from "next/image";
import Pope from "../../public/assets/img/pope-francis.@2x.png";
import { MdPlayArrow } from "react-icons/md";
import { Wikipedia, ThumbDown, ThumbUp } from "../../public/assets/icons";

const Hero = (): React.ReactElement => (
  <div className="relative w-full text-white">
    <div className="px-4 pt-4 lg:pt-56">
      <div className="inset-0 absolute h-full w-full">
        <Image
          src={Pope}
          alt="pope"
          layout="fill"
          className="object-cover filter brightness-75"
        />
      </div>
      <div className="relative lg:px-32 lg:bottom-20">
        <p className="text-2xl mb-2 mt-3 lg:hidden">Rule of thumb.</p>
        <div className="w-56 md:w-96">
          <div className="pl-4 bg-black bg-opacity-25 backdrop-filter backdrop-blur-xl md:pr-6 lg:pl-6 lg:pr-10">
            <p className="text-xs pt-2 font-light md:pt-4 md:text-base lg:pt-6">
              What&apos;s your opinion on
            </p>
            <p className="text-4xl pb-4 lg:text-5xl">Pope Francis?</p>
            <p className="font-light leading-tight md:text-base md:font-extralight lg:text-lg">
              He&apos;s talking tough on clergy sexual abuse, or is he just
              another pervert protector? (thumbs down) or a true pedophile
              punishing pontiff? (thumbs up)
            </p>
            <div className="hidden justify-start gap-x-1 items-center mt-4 cursor-pointer md:flex">
              <span>
                <Wikipedia className="text-xl" />
              </span>
              <span className="border-b text-sm font-extralight">
                More information
              </span>
            </div>
            <p className="font-bold text-sm pt-4 pb-2 md:pb-4 md:text-base">
              What&apos;s Your Veredict?
            </p>
          </div>
          <div className="grid grid-cols-2 items-center h-8 lg:h-12">
            <div className="flex justify-center items-center bg-teal h-full w-full">
              <ThumbUp className="lg:text-2xl" />
            </div>
            <div className="flex justify-center items-center bg-yellow-300 h-full w-full">
              <ThumbDown className="lg:text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="relative flex justify-start items-center mt-6 h-10 lg:h-14">
      <div className="flex justify-center items-center relative w-2/6 h-full bg-black bg-opacity-25">
        <MdPlayArrow className="absolute text-black text-opacity-40 -right-2.5 h-4 w-4" />
        <p className="pl-8 font-light text-sm z-10 lg:text-xl">CLOSING IN</p>
      </div>
      <div className="flex items-center w-4/6 pl-4 h-full bg-gradient-to-r from-gray-50 via-gray-100 to-transparent">
        <p className="text-black font-light text-lg lg:text-2xl">
          <span className="font-semibold">22</span>days
        </p>
      </div>
    </div>
  </div>
);

export { Hero };
