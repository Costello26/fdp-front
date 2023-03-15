import { Breadcrumb, Form, Input, Collapse, Steps, Button, Rate, Select } from "antd"
import { Link } from "react-router-dom"
import { ClassOfTour } from "./class";

const { Panel } = Collapse;
const { TextArea } = Input;

const items = [
    {
        title: <Link to='/'>Дэшборд</Link>
    },
    {
        title: <Link to='/charters'>Туры</Link>
    },
    {
        title: 'Добавление тура'
    },
]

const options = [
    {
        label: 'Трансфер до отеля',
        value: 'transfer'
    },
    {
        label: 'Завтраки',
        value: 'breakfast'
    },
    {
        label: 'Визовый сбор',
        value: 'visa'
    },
    {
        label: 'Мед.страховка',
        value: 'insurance'
    },
]

export const SingleTour = () => {
    return(
        <section className="single-tour w-full h-full">
            <Breadcrumb className="p-5 pb-3" items={items} separator="-"/>
            <h2 className="px-5 pb-2 text-xl font-semibold">Создание туристического пакета в системе</h2>
            <Steps
                className="py-3"
                progressDot
                current={0}
                items={[
                    {
                    title: 'Ввод данных',
                    },
                    {
                    title: 'Загрузка медиа',
                    },
                    {
                    title: 'Публикация',
                    },
                ]}
            />
            <div className="w-full p-5 pt-2">
                <Form className="flex flex-wrap">
                    <div className="flex flex-wrap basis-6/12 p-1">
                        <div className="p-4 border rounded basis-full">
                            <h2 className="pb-3 font-semibold text-lg">Общая информация</h2>
                            <Input className="mb-3 w-full py-2" placeholder="Например: Дубай 8 дней/7 ночей" />
                            {/* <h2 className="pb-1">Вылет/Прилет</h2> */}
                            <div className="w-full flex gap-1 items-center mb-3">
                                <Input className="w-6/12 mb-1 py-2" placeholder="Отель"/>
                                <Rate className="pl-3"/>
                            </div>

                            <Select className="w-full" placeholder="Привязанный рейс"/>
                            {/* <div className="w-full flex gap-1 mb-3">
                                <DatePicker className='w-6/12 mb-1' picker="day" placeholder="Дата вылета"/>
                                <DatePicker className='w-6/12 mb-1' picker="day" placeholder="Дата возвращения"/>
                            </div> */}
                            {/* <Radio.Group
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
                            /> */}
                            <h2 className="w-full mt-3 pb-3 font-semibold text-lg">Подробноая информация</h2>
                            <TextArea allowClear={true} className="mb-2 inline-block" style={{ minHeight: 200}} re/>

                            <h2 className="w-full mt-3 text-lg font-semibold mb-2">Опции:</h2>
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Выберите необходимые опции"
                                options={options}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap basis-6/12 p-1">
                        <div className="p-4 border rounded basis-full">
                            <h2 className="w-full mt-3 pb-3 font-semibold text-lg">Стоимость и квота</h2>
                            <Collapse defaultActiveKey={['0']} accordion='true' className="mb-3">
                                <Panel header="Эконом класс">
                                    <ClassOfTour/>
                                </Panel>
                                <Panel header="Бизнес класс">
                                    <ClassOfTour/>
                                </Panel>
                            </Collapse>

                            <span className="flex items-center w-8/12 justify-between mb-2">Кол-во тур.пакетов(итого): &nbsp; <span className="font-semibold">334</span></span>
                            <span className="flex items-center w-8/12 justify-between mb-2">Кол-во тур.пакетов(для продажи субагентами): &nbsp; <span className="font-semibold">120</span></span>
                        </div>
                    </div>
                    <div className="basis-full">
                        <Button type="primary" className="my-2 mr-2 bg-blue-500">Продолжить</Button>
                        <Button type="primary" className="my-2" danger={true}>Отменить</Button>
                    </div>
                    
                </Form>
            </div>
        </section>
    )
}