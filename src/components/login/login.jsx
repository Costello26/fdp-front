import React from "react";
import { useState } from "react";
import { Form, Button, notification } from "antd";
import { MaskedInput } from "antd-mask-input";
//import LoginBg from '../../assets/img/login-bg.jpg';
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/img/logo.svg';

export const Login = () => {
    const navigate = useNavigate();
    const [buttonDisabled, setButtonDisabled] = useState(false);
    notification.config({
        duration: 2,
        placement: 'topRight'
    });
    const handleOtpReq = () => {
        setButtonDisabled(true);
        setTimeout(() => setButtonDisabled(false), 30000);
        notification.success({
            message: 'Успешно',
            description: 'Код выслан на указанный номер'
        });
    };
    return(
        <section style={{
                height: window.innerHeight
            }} className="w-full flex items-center flex-col justify-center max-w-[1280px] mx-auto">
            <div className="absolute z-[-1] w-full h-full" style={{
                background: 'linear-gradient(135deg, rgba(195,224,229,1) 0%, rgba(65,114,159,1) 52%, rgba(101,145,213,1) 100%)',
                height: window.innerHeight
            }}></div>
            {/* <img className="absolute z-[-1] w-full h-full" src={LoginBg}></img> */}
            <img className=" absolute top-[20%] mb-5 w-[15%]" src={Logo}/>
            <div className="login__container w-[40%] p-10 bg-white/[.5] rounded">
                <div className="login__inner text-center">
                    
                    <h1 className="mb-5 text-[24px] text-black/[.6]">Авторизация в системе</h1>
                    <Form>
                        <MaskedInput mask={'+998(00)000-00-00'} className="m-1 p-3 text-md text-black/[.5] bg-white/[.5]" placeholder="+998(00)000-00-00"/>
                        <MaskedInput mask={'0 0 0 0 0 0'} className="m-1 p-3 text-xl text-black/[.5] bg-white/[.5]" placeholder="Код доступа"/>
                        <Button className="mt-3 mr-1 bg-white" type='default' onClick={handleOtpReq} disabled={buttonDisabled} loading={buttonDisabled}>Запросить код</Button>
                        <Button className="bg-blue-500 mt-3" type="primary" onClick={() => navigate('/')}>Войти</Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};