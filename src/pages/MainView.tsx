import { Divider, Layout} from "antd"
import 'tailwindcss'
import Editor from '../components/editor/Editor.tsx'
import {DefaultFuncButton, dropdownMenu} from "../types/functional.ts";
import {useState} from "react";
import FoldButtonList from "../components/FoldButton.tsx";
import {SaveButton} from "../types/save.ts";
import * as API from '../api/save.ts'
import '../assets/mainview.less'
import {useSelector} from "react-redux";
import {storeState} from "../store";

export default function MainView() {
    const [mode, setMode] = useState<'split' | 'hybrid'>('split')
    const fileContent = useSelector((state: storeState) => state.markdown.value)

    const navigationButtons: Array<dropdownMenu & {selectable?: boolean}> = [
        {
            label: '文件',
            buttons: [
                new SaveButton("新建", () => {

                }),
                new SaveButton("保存", () =>  {
                    API.saveAsMarkdown(fileContent).then()
                }),
                new SaveButton("另存为", () =>  {
                    API.saveAsMarkdown(fileContent).then()
                }),
            ],
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
            ],
            selectable: true,
        }
    ]

    return (
        <>
            <Layout >
                <Layout.Header className='pl-1 layoutHeader'>
                    <div>
                        {navigationButtons.map((item, index) => (
                            <FoldButtonList key={index} menu={item} selectable={item.selectable}></FoldButtonList>
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


