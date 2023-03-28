export default function ShowSuccessMessage(){
    const closeModel = () => {
        document.querySelector("#containerSuccessMessage")?.classList.toggle("hidden");
    }

    return (
        <div id="containerSuccessMessage" className="hidden fixed bg-transparent h-full w-full after:bg-zinc-900 after:opacity-80 after:top-0 after:left-0 after:block top-0 left-0 after:h-full after:w-full">
            <div className="w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-800 z-[999] absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
                <div className="w-full h-full text-center">
                    <div className="flex flex-col justify-between h-full">
                        <svg className="w-12 h-12 m-auto mt-4 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        <p className="px-6 py-2 text-gray-600 dark:text-gray-100 text-md">
                            Success!<br></br>I will get back to you as soon as possible.
                        </p>
                        <div className="flex items-center justify-between w-full gap-4 mt-8">
                            <button id="closeSuccessMessage" onClick={closeModel} type="button" className="py-2 px-4  bg-cyan-400 hover:bg-cyan-600 focus:bg-cyan-500 focus:ring-offset-cyan-300 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}