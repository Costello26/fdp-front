import { Breadcrumb, Table } from "antd"
import { Link } from "react-router-dom"
import { ListItemActions } from "../../charter/charterList/listItemActions"

const items = [
    {
        title: <Link to='/'>Дэшборд</Link>
    },
    {
        title: 'Туры'
    }
]

const cols = [
    {
        title: '№',
        dataIndex: 'num',
        key: 'num',
        width: '5%'
      },
      {
        title: 'Тур',
        dataIndex: 'tour',
        key: 'tour',
        width: '15%'
      },
      {
        title: 'Дата',
        dataIndex: 'date',
        key: 'date',
        width: '15%'
      },
      {
        title: 'Цена(эконом / бизнес)',
        dataIndex: 'price',
        key: 'price',
        width: '15%'
      },
      {
        title: 'В продаже/продано(турпакетов)',
        dataIndex: 'sales',
        key: 'sales',
        width: '15%'
      },
      {
        title: 'Отель',
        dataIndex: 'hotel',
        key: 'hotel',
        width: '15%'

      },
      {
        title: 'Действия',
        dataIndex: 'actions',
        key: 'actions',
        width: '15%'
      },
]

const dataSource = [
    {
        num: 1,
        tour: 'Бали 8 дней/9 ночей',
        date: '15.03.2023 - 24.03.2023',
        price: '1800$ / 2400$',
        sales: '120/334',
        hotel: 'Nusa Penida view resort 5*',
        actions: <ListItemActions/>
    },
]

export const ToursList = () => {
    return(
        <section className="tour-list w-full h-full">
            <Breadcrumb className="p-5 pb-3" items={items} separator="-"/>
            <h2 className="px-5 pb-2 font-semibold text-xl">Все туры</h2>
            <Table className="px-5" columns={cols} dataSource={dataSource}/>
        </section>
    )
}