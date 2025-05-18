import React, {ChangeEvent, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Col, Divider, Row} from "antd";
import {marked} from "marked";
import 'highlight.js/styles/github.css';
import initMarked from "../../initlize/marked.ts";
import {storeDispatch, storeState} from "../../store";
import {setMarkdown} from "../../store/markdown.ts";

export default function SplitEditor (): React.ReactElement {
    const markdown: string = useSelector((state: storeState) => state.markdown.value)
    const dispatch: storeDispatch = useDispatch()

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    initMarked()

    useEffect(() => {
        textareaRef.current?.focus();
    }, [])

    useEffect(() => {
        const textarea = textareaRef.current
        if (textarea) {
            textarea.style.height = "auto"
            textarea.style.height = textarea.scrollHeight + "px"
        }
    }, [markdown])

    return (
        <>
            <div>
                <Row>
                    <Col span={1}></Col>
                    <Col span={10} className="mt-6">
                        <div>
                            <textarea
                                ref={textareaRef}
                                value={markdown}
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => dispatch(setMarkdown(e.target.value))}
                                className="focus:outline-0 border-0 w-full text-xl font-sans resize-none"
                            />
                        </div>
                    </Col>
                    <Col span={2} className="m-0 flex justify-center" >
                        <Divider className="m-0" style={{minHeight: 'calc(100vh - 24px)'}} type={"vertical"}></Divider>
                    </Col>
                    <Col span={10} className="mt-1">
                        <div
                            className="text-xl"
                            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
                        />
                    </Col>
                    <Col span={1}></Col>
                </Row>
            </div>
        </>
    )
}
