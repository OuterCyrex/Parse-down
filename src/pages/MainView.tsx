import {Button, Divider, Layout} from "antd"
import 'tailwindcss'

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
    const navigationButton: Array<string> = ['文件', '设置']

    return (
        <>
            <Layout >
                <Layout.Header className='pl-1' style={scopedCSS.layoutHeader}>
                    <div>
                        {navigationButton.map(item =>
                            (<Button variant='text' color="default"
                                     className="font-light text-sm p-2" >{item}</Button>)
                        )}
                    </div>
                </Layout.Header>
                <Divider className="m-0"></Divider>
                <Layout.Content>
                </Layout.Content>
            </Layout>
        </>
    )
}


