import React from "react";
import { Topbar } from "../topbar";
import { Sidebar } from "../sidebar/sidebar";

export const PageWrap = ({children}) => {
    //style={{height: window.innerHeight}}
    return(
        <div> 
            <Topbar />
            <section className='app-inner flex mx-auto h-full'>
                <Sidebar/>
                <section className='content-section w-[80%] h-full flex justify-center'>
                    {children}
                </section>
            </section>
        </div>
    );
};