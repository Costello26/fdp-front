import { Avatar } from "antd"
import { Link } from "react-router-dom"
import { UserOutlined } from '@ant-design/icons'

export const Topbar = () => {
    return(
      <section className='topbar min-h-[70px] bg-blue-500 w-full px-[30px] flex items-center'>
        <div className='w-full flex items-center justify-between mx-auto max-w-[1440px]'>
          <div className='topbar__logo'>
            <a href="/" className='inline-block text-white text-xl'>Flyinup sales office</a>
          </div>
          <div className='topbar__user flex items-center'>
            <Avatar className='flex items-center justify-center cursor-pointer' size="large" icon={<UserOutlined/>}/>
            <div className='user__labels flex flex-col px-[10px]'>
              <a href="##" className='text-white inline-block'>Фирдавс Эргашев</a>
              <span className='text-white text-xs'>Менеджер</span>
            </div>
          </div>
        </div>
      </section>
    )
}