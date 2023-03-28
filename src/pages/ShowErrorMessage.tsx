export default function ShowErrorMessage(){
    return (
        <div id="errorMessage" className="bg-red-200 border-red-600 text-red-600 border-l-4 p-4 fixed left-0 -bottom-20 w-full lg:w-8/12 lg:ml-[50%] lg:-translate-x-2/4 h-20 transition-all delay-500" role="alert">
            <p className="font-bold">
                Error
            </p>
            <p>
                The email was not sent!
            </p>
        </div>
    )
}