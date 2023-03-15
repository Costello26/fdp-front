import { Topbar } from "../topbar"
import { Sidebar } from "../sidebar/sidebar"

export const PageWrap = ({children}) => {
    return(
        <div style={{height: window.innerHeight}}>
            <Topbar />
            <section className='app-inner flex mx-auto h-full max-w-[1440px]'>
                <Sidebar/>
                <section className='content-section w-[80%] h-full flex justify-center'>
                    {children}
                </section>
            </section>
        </div>
    )
}