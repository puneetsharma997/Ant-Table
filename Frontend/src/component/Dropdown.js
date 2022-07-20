import { DownOutlined } from "@ant-design/icons"
import { Dropdown, Menu, Space } from "antd"

const Menuu = ({ handleSort, items, oldData, setData, attribute }) => {
    return (
        <Menu
            onClick={(e) => {
                handleSort(e, oldData, setData, attribute)
            }}
            items={items}
        />
    )
}


const DropDown = ({ title, dataName, handleSort, setAttribute, items, oldData, setData, attribute }) => {

    return (
        <Dropdown
            overlay={<Menuu handleSort={handleSort} items={items} oldData={oldData} setData={setData} attribute={attribute} />}
            trigger={['click']} >
            <span onClick={() => setAttribute(dataName)} >
                <Space> {title} <DownOutlined /> </Space>
            </span>
        </Dropdown>
    )
};


export { DropDown, Menuu }