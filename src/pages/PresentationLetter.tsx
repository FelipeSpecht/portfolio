import Link from "next/link";

export default function PresentationLetter(){
    return (
        <div className="block rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-xl sm:p-6 lg:p-8 w-11/12 m-auto mt-4">
            <img src="telescope.svg" className=" w-20"></img>
            <h3 className="mt-0 text-lg font-bold text-white sm:text-xl">
                Felipe Specht
            </h3>
            <p className="mt-4 text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius labore
                nisi tempore modi vel voluptate ullam nostrum adipisci suscipit eaque quae
                cupiditate, accusamus minus laboriosam totam laborum, deserunt sint.
            </p>
            <Link href=""><img src="linkedin-white.png" className="w-6 inline-block mt-4 cursor-pointer"></img></Link>
            <Link href=""><img src="github-white.png" className="w-6 ml-3 inline-block mt-5 cursor-pointer"></img></Link>
        </div>
    )
}