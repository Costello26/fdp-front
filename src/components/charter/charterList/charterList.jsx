import { Breadcrumb } from "antd"
import { Link } from "react-router-dom"

const items = [
    {
        title: <Link to='/'>Дэшборд</Link>
    },
    {
        title: 'Рейсы'
    }
]

export const CharterList = () => {
    return (
        <section className="charter-list w-full">
            <Breadcrumb className="p-5 pb-3" items={items} separator="-"/>
            <h2 className="px-5 pb-2 font-semibold text-xl">Все рейсы</h2>
        </section>
    )
}