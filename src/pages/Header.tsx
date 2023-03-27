import { Component } from "react";
import $ from 'jquery'
import Link from "next/link";

export default function Header() {
    if(typeof window !== "undefined"){
        window.onclick = (event: Event) => {
            const target = event.target as HTMLElement;
            if(target.id != 'button-nav' && target.id != 'svg-header-nav' && target.id != 'path-header-nav'){
                $("#navbar-default").slideUp("fast", function(){$(this).toggle(false)});
            }else{
                if($("#navbar-default").is(':visible')){
                    $("#navbar-default").slideUp("fast", function(){$(this).toggle(false)});
                }else{
                    $("#navbar-default").slideDown("fast", function(){$(this).toggle(true)});
                }
            }
        }
    }

    return <header aria-label="Site Header" className="bg-white dark:bg-gray-900">
    <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
      <Link className="block text-teal-600 dark:text-teal-300" href="/">
        <img src="code.svg" className="w-14 inline-block"></img>
      </Link>
      <div className="flex flex-1 items-center justify-end">
        <nav aria-label="Site Nav" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li><Link className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="/">History</Link></li>
            <li><Link className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="/">Services</Link></li>
            <li><Link className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="/">Projects</Link></li>
            <li><Link className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="/">Blog</Link></li>
          </ul>
        </nav>
        <div className="hidden w-3/4 md:hidden md:w-auto absolute top-11 right-4" style={{ animation: "1s infinite alternate slideinout" }} id="navbar-default">
            <ul className="flex flex-col p-4 mt-3 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li><Link href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link></li>
                <li><Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link></li>
                <li><Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link></li>
                <li><Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</Link></li>
                <li><Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link></li>
            </ul>
        </div>
        <div className="flex items-center gap-4">
          <button id="button-nav" className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg id="svg-header-nav" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path id="path-header-nav" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>  
}