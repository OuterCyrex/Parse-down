import {Button, Dropdown} from "antd";
import {dropdownMenu} from "../types/functional.ts";
import {ItemType} from "antd/es/menu/interface";
import { CheckOutlined } from '@ant-design/icons';

import '../assets/dropdown.less'

export default function FoldButtonList(props: {  menu: dropdownMenu, selectable?: boolean }) {
    const menuData: Array<ItemType> = props.menu.buttons.map((item, index) => (
        {
            key: (index + 1).toString(),
            label: (
                <div
                    className="min-w-44"
                    key={index}
                    onClick={ item.Valid ? item.CoreFunction : () => {}}
                >
                    {item.label}
                </div>
            ),
            disabled: !item.Valid,
            icon: < CheckOutlined className="selected-mark" />,
        }
    ))

    return (
        <>
            <Dropdown menu={{
                items: menuData,
                selectable: props.selectable === undefined ? false : props.selectable,
                defaultSelectedKeys: props.selectable === undefined ? [] : ['1'],
            }} trigger={['click']} className="text-black">
                 <Button
                     variant="text"
                     color="default"
                     size="small"
                     className="px-2"
                 >{props.menu.label}</Button>
            </Dropdown>
        </>
    )
}
