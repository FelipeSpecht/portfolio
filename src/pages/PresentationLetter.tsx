import Image from "next/image";
import Link from "next/link";

export default function PresentationLetter(){
    return (
        <div id="aboutSection" className="block rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-xl sm:mt-4 md:mt-4 sm:mx-auto md:m-auto sm:p-6 lg:p-8 lg:pb-[2.4rem] w-11/12 m-auto lg:w-5/12 lg:inline-block lg:mr-8 lg:align-top lg:mt-10">
            <Image alt="" src="telescope.svg" className=" w-20"></Image>
            <h3 className="mt-0 text-lg font-bold text-white sm:text-xl">
                Felipe Specht
            </h3>
            <p className="mt-4 text-sm text-gray-300">
                Hey! I&apos;m Felipe Specht, a developer passionate with technology and video games. Have been working with IT  for 5 years and currently 2 years deep on my System&apos;s Analyses and Development graduation.
            </p>
            <Link href="https://www.linkedin.com/in/felipe-specht/" target="_blank"><Image alt="" src="linkedin-white.png" className="w-6 inline-block mt-4 cursor-pointer"></Image></Link>
            <Link href="https://github.com/FelipeSpecht/" target="_blank"><Image alt="" src="github-white.png" className="w-6 ml-3 inline-block mt-5 cursor-pointer"></Image></Link>
        </div>
    )
}