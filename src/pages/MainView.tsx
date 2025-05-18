import { Divider, Layout} from "antd"
import 'tailwindcss'
import Editor from '../components/editor/Editor.tsx'
import {DefaultFuncButton, dropdownMenu} from "../types/functional.ts";
import {useState} from "react";
import FoldButtonList from "../components/FoldButton.tsx";

export const scopedCSS = {
    layoutHeader: {
        backgroundColor: "#e6e6e6",
        height: '22px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
    },
}

export default function MainView() {
    const [mode, setMode] = useState<'split' | 'hybrid'>('split')

    const navigationButtons: Array<dropdownMenu> = [
        {
            label: '文件',
            buttons: []
        },
        {
            label: '模式',
            buttons: [
                new DefaultFuncButton("双栏模式", () =>  {
                    setMode(() => 'split')
                }),
                new DefaultFuncButton("混合模式 (测试中)",() => {
                    setMode(() => 'hybrid')
                }, false)
            ]
        }
    ]

    return (
        <>
            <Layout >
                <Layout.Header className='pl-1' style={scopedCSS.layoutHeader}>
                    <div>
                        {navigationButtons.map((item, index) => (
                            <FoldButtonList key={index} menu={item}></FoldButtonList>
                            )
                        )}
                    </div>
                </Layout.Header>
                <Divider className="m-0"></Divider>
                <Layout.Content className='p-0 bg-white'>
                    <Editor mode={mode}></Editor>
                </Layout.Content>
            </Layout>
        </>
    )
}


