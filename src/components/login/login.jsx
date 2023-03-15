import { Form, Input, Button } from "antd"

export const Login = () => {
    return(
        <section style={{height: window.innerHeight}} className="w-full flex items-center justify-center max-w-[1280px] mx-auto">
            <div className="login__container w-[35%] p-5 rounded-xl border">
                <div className="login__inner text-center ">
                    <h1 className="mb-5 text-[24px]">Flyinup sales Dashboard</h1>
                    <Form>
                        <Input className="m-1 p-3 text-lg" placeholder="Номер телефона"/>
                        <Input className="m-1 p-3 text-lg" placeholder="Код доступа"/>
                        <Button className="mt-3 mr-1" type='default'>Запросить код</Button>
                        <Button className="bg-blue-500 mt-3" type="primary">Войти</Button>
                    </Form>
                </div>
            </div>
        </section>
    )
}