import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Logo from '../../assets/img/logo_mono.svg';

export const Topbar = () => {
    const depositAmount = 156850;

    return(
      <section className='topbar min-h-[70px] bg-sky-600 w-full px-[30px] flex items-center'>
        <div className='w-full flex items-center justify-between'>
          <div className='topbar__logo'>
            <a href="/" className='inline-block text-white text-xl'>
              {/* Flyinup sales office */}
              <img className="w-100" src={Logo}/>
            </a>
          </div>
          <div className='topbar__user flex items-center'>
            <Link className="px-8 py-3 mr-4 rounded-lg bg-black/[.25] hover:bg-black/[.2] active:bg-black/[.1] transition text-white/[.95]" to="/tickets/sell">
              Новая продажа
            </Link>
            <div className="flex items-center border-r border-white/[.2] mr-2">
              <div className='user__labels flex flex-col px-[10px] text-end'>
                <a href="##" className='text-white inline-block'>Asia Luxe travel</a>
                <span className='text-white text-xs'>Депозит: { depositAmount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") }$</span>
              </div>
            </div>
            <div className="flex items-center">
              <Avatar className='flex items-center justify-center cursor-pointer' size="large" icon={<UserOutlined/>}/>
              <div className='user__labels flex flex-col px-[10px]'>
                <a href="##" className='text-white inline-block'>Фирдавс Эргашев</a>
                <span className='text-white text-xs'>Менеджер</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};