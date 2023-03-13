import { AutoComplete, Breadcrumb, Form, Input, Radio, DatePicker, TimePicker, Button, Collapse, InputNumber } from "antd"
import { Link } from "react-router-dom"
import { Class } from "./class"

const { Panel } = Collapse;

const items = [
    {
        title: <Link to='/'>Дэшборд</Link>
    },
    {
        title: <Link to='/charter'>Рейсы</Link>
    },
    {
        title: 'Добавление рейса'
    },
]

export const SingleCharter = () => {
    return(
        <section className="single-charter w-full">
            <Breadcrumb className="p-5 pb-3" items={items} separator="-"/>
            <h2 className="px-5 pb-2 text-xl font-semibold">Создание авиарейса в системе</h2>
            <div className="w-full p-5 pt-2">
                <Form className="flex flex-wrap">
                    <div className="flex flex-wrap basis-6/12 p-1">
                        <div className="p-4 border rounded basis-full">
                            <h2>Общая информация</h2>
                            <Input className="mb-1 w-full" placeholder="Title" />
                            <h2>Вылет/Прилет</h2>
                            <div className="w-full flex gap-1">
                                <AutoComplete className="w-6/12 mb-1" placeholder="Пункт вылета" options={[{label: 'hello', value: '1'}]}/>
                                <AutoComplete className="w-6/12 mb-1" placeholder="Пункт прилета"/>
                            </div>
                            
                            
                            <div className="w-full flex gap-1">
                                <DatePicker className='w-6/12 mb-1' picker="day" placeholder="Дата вылета"/>
                                <DatePicker className='w-6/12 mb-1' picker="day" placeholder="Дата возвращения"/>
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
                            <h2 className="w-full mt-3">Данные о полете</h2>
                            <AutoComplete className="w-full mb-1" placeholder="Воздушное судно" options={[{label: 'Boeing 777', value: '1'}, {label: 'Airbus A340', value: '1'}]}/>
                            <AutoComplete className="w-full mb-1" placeholder="Авиакомпания" options={[{label: 'Turkish Airways', value: '1'}, {label: `O'zbekiston havo yo'llar`, value: '1'}]}/>
                            <TimePicker placeholder="Время в полете(часов)" className="w-1/2" showNow={false} format={'HH:mm'}/>

                            <h2 className="w-full mt-3">Питание на борту:</h2>
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
                        <Button type="primary" className="my-2 mr-2 bg-blue-500">Сохранить</Button>
                        <Button type="primary" className="my-2" danger={true}>Отменить</Button>
                    </div>
                    
                </Form>
            </div>
        </section>
    )
}