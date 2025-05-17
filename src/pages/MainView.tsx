import {Button, Divider, Layout} from "antd"
import 'tailwindcss'
import EditorArea from "../components/EditorArea.tsx";

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
    const navigationButton: Array<{ key: number, label: string }> =
        [{key: 1, label: '文件'}, {key: 2, label: '设置'}]

    return (
        <>
            <Layout >
                <Layout.Header className='pl-1' style={scopedCSS.layoutHeader}>
                    <div>
                        {navigationButton.map(item =>
                            (<Button variant='text' color="default"
                                     className="font-light text-sm p-2" key={item.key}>{item.label}</Button>)
                        )}
                    </div>
                </Layout.Header>
                <Divider className="m-0"></Divider>
                <Layout.Content className='p-0 bg-white'>
                    <EditorArea />
                </Layout.Content>
            </Layout>
        </>
    )
}


