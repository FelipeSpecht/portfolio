import { createElement, FormEvent, MouseEvent, useState } from "react";
import emailjs from '@emailjs/browser';
import ReactDOM from "react-dom";
import ShowSuccessMessage from "./ShowSuccessMessage";
import ShowErrorMessage from "./ShowErrorMessage";
import { Node } from "typescript";

export default function Contact(){

    const sendEmail = (event: MouseEvent) => {
        document.querySelector("#loadingScreen")?.classList.toggle("hidden");

        event.preventDefault();
        let form = document.querySelector("#emailForm");
        let params = {
            name: (form?.querySelector("#contact-form-name") as HTMLInputElement).value,
            email: (form?.querySelector("#contact-form-email") as HTMLInputElement).value,
            message: (form?.querySelector("#message") as HTMLInputElement).value
        }

        if(!params.email.includes("@")){
            console.log("");
        }else{
            emailjs.send("service_tyyr8pp", "template_c8p7lkb", undefined, "OndcSE9d3QDqQpUoq").then(() => {
                document.querySelector("#containerSuccessMessage")?.classList.toggle("hidden");
                document.querySelector("#loadingScreen")?.classList.toggle("hidden");
            }, (err) => {
                console.log(err);
                document.querySelector("#loadingScreen")?.classList.toggle("hidden");
                (document.querySelector("#errorMessage") as HTMLElement).style.bottom = "0";
                setTimeout(() => {
                    (document.querySelector("#errorMessage") as HTMLElement).style.bottom = "-80px";
                    setTimeout(() => {
                        document.querySelector("#errorMessage")?.remove();
                    }, 500)
                }, 3000)
            });
        }
    }

    const [value, setValue] = useState("");
    const onInput = (e: FormEvent) => {

        let form = document.querySelector("#emailForm");
        let children = [form?.querySelector("#contact-form-name"), form?.querySelector("#contact-form-email"), form?.querySelector("#message")]
        let inputsHaveData = true;

        for (var elem of children){
            if(!(elem as HTMLInputElement).value){
                inputsHaveData = false;
            }
        }

        if(!(children[1] as HTMLInputElement).value.includes("@")){
            inputsHaveData = false;
        } 

        let inputValue = inputsHaveData ? inputsHaveData+"" : "";

        setValue(inputValue);
    }

    return (
        <form id="emailForm" className="flex w-full">
            <div className="w-11/12 max-w-2xl px-5 py-10 pt-4 m-auto rounded-lg shadow bg-transparent mb-4">
                <div className="mb-6 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl text-center">
                    Contact me!
                </div>
                <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                    <div className="col-span-2 lg:col-span-1">
                        <div className=" relative ">
                            <input type="text" onInput={onInput} id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" placeholder="Name" name="user_name"/>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <div className=" relative ">
                            <input type="text" onInput={onInput} id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" placeholder="Email" name="user_email" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className="text-gray-700" htmlFor="name">
                            <textarea onInput={onInput} className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" id="message" placeholder="Enter your message" name="message" rows={5} cols={40}></textarea>
                        </label>
                    </div>
                    <div className="col-span-2 text-right">
                        <button disabled={!value} onClick={event => sendEmail(event)}  className="py-2 px-4 opacity-100 bg-cyan-400 hover:bg-cyan-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg disabled:opacity-50 ">Send</button>
                    </div>
                </div>
            </div>
            <ShowSuccessMessage />
            <ShowErrorMessage />
        </form>
    )
}