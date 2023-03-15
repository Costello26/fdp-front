import { Button,Space } from "antd"
import { EditOutlined, DeleteOutlined, InfoOutlined } from '@ant-design/icons'

export const ListItemActions = () => {
    return(
        <div className="actions">
            <Button className="m-1" type="default" icon={<EditOutlined />} shape='default' size="large"/>
            <Button className="m-1" type="default" icon={<InfoOutlined />} shape='default' size="large"/>
            <Button className="m-1" type="default" icon={<DeleteOutlined />} shape='default' danger size="large"/>
        </div>
    )
}