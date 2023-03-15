import { AutoComplete, Breadcrumb, Form, Input, Radio, DatePicker, TimePicker, Button, Collapse, Modal } from "antd"
import { SwapOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import { Class } from "./class"
import { ModalInfo } from "./modalInfo";

const { Panel } = Collapse;

const items = [
    {
        title: <Link to='/'>Дэшборд</Link>
    },
    {
        title: <Link to='/charters'>Рейсы</Link>
    },
    {
        title: 'Добавление рейса'
    },
]

export const SingleCharter = () => {
    const callCancelModal = () => Modal.confirm({ 
        title: 'Подтвердите действие', 
        content: 'Вы действительно хотите выйти и аннулировать введенные данные?', 
        cancelText: 'Нет', 
        okText: 'Да', 
        okType: 'danger'
    });

    const callSubmitlModal = () => Modal.confirm({ 
        title: 'Подтвердите корректность данных', 
        content: <ModalInfo/>, 
        cancelText: 'Вернуться', 
        okText: 'Подтверждаю', 
        okType: 'default'
    });

    return(
        <section className="single-charter w-full">
            <Breadcrumb className="p-5 pb-3" items={items} separator="-"/>
            <h2 className="px-5 pb-2 text-xl font-semibold">Создание авиарейса в системе</h2>
            <div className="w-full p-5 pt-2">
                <Form className="flex flex-wrap">
                    <div className="flex flex-wrap basis-6/12 p-1">
                        <div className="p-4 border rounded basis-full">
                            <h2 className="pb-3 text-lg font-semibold font-semibold">Общая информация</h2>
                            <Input className="mb-1 w-full p-2" placeholder="Номер рейса" />
                            <h2 className="pb-3 mt-3 text-lg font-semibold font-semibold">Вылет/Прилет</h2>
                            <div className="w-full flex items-center gap-1 border rounded-lg mb-3">
                                <AutoComplete className="w-5/12 mb-1 p-2" bordered={false} placeholder="Пункт вылета" options={[{label: 'hello', value: '1'}]}/>
                                <SwapOutlined className="w-1/12" />
                                <AutoComplete className="w-5/12 mb-1 p-2" bordered={false} placeholder="Пункт прилета"/>
                            </div>
                            
                            
                            <div className="w-full flex gap-2 mb-2">
                                <DatePicker className='w-6/12 mb-1 p-2' picker="day" placeholder="Дата вылета"/>
                                <DatePicker className='w-6/12 mb-1 p-2' picker="day" placeholder="Дата возвращения"/>
                            </div>
                            <Radio.Group
                                className="mb-1 block"
                                options={[
                                    {
                                        label: 'Туда и обратно',
                                        value: 2
                                    },
                                    {
                                        label: 'В одну сторону',
                                        value: 1
                                    },
                                ]}
                                value={2}
                                optionType="button"
                                buttonStyle="solid"
                            />
                            <h2 className="w-full mt-3 pb-3 text-lg font-semibold font-semibold">Данные о полете</h2>
                            <AutoComplete className="w-full mb-2" placeholder="Воздушное судно" options={[{label: 'Boeing 777', value: '1'}, {label: 'Airbus A340', value: '1'}]}/>
                            <AutoComplete className="w-full mb-2" placeholder="Авиакомпания" options={[{label: 'Turkish Airways', value: '1'}, {label: `O'zbekiston havo yo'llar`, value: '1'}]}/>
                            <TimePicker placeholder="Время в полете(часов)" className="w-1/2 p-2" showNow={false} format={'HH:mm'}/>

                            <h2 className="w-full mt-3 pb-1 font">Питание на борту:</h2>
                            <Radio.Group
                                className="mb-1 block"
                                options={[
                                    {
                                        label: 'Включено',
                                        value: 1
                                    },
                                    {
                                        label: 'Не предусмотрено',
                                        value: 2
                                    }
                                ]}
                                value={1}
                                optionType="button"
                                buttonStyle="solid"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap basis-6/12 p-1">
                        <div className="p-4 border rounded basis-full">
                            <Collapse defaultActiveKey={['0']} accordion='true' className="mb-3">
                                <Panel header="Эконом класс">
                                    <Class title="Эконом класс"/>
                                </Panel>
                                <Panel header="Бизнес класс">
                                    <Class title="Бизнес класс"/>
                                </Panel>
                            </Collapse>

                            <span className="flex items-center w-8/12 justify-between mb-2">Кол-во мест(итого): &nbsp; <span className="font-semibold">334</span></span>
                            <span className="flex items-center w-8/12 justify-between mb-2">Кол-во мест(для продажи субагентами): &nbsp; <span className="font-semibold">120</span></span>
                        </div>
                    </div>
                    <div className="basis-full">
                        <Button type="primary" className="my-2 mr-2 bg-blue-500" onClick={callSubmitlModal}>Сохранить</Button>
                        <Button type="primary" className="my-2" danger={true} onClick={callCancelModal}>Отменить</Button>
                    </div>
                    
                </Form>
            </div>
        </section>
    )
}