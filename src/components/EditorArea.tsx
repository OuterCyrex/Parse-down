import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import '../assets/editor.less'
import {TRANSFORMERS} from "@lexical/markdown";
import {markdownNode} from "../utils/nodes.ts";


function onError(error: any) {
    console.error(error);
}

const theme = {
    ltr: 'ltr'
}


export default function EditorArea() {

    const initialConfig = {
        namespace: 'EditorArea',
        theme,
        nodes: markdownNode,
        onError,
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            <RichTextPlugin
                contentEditable={
                    <ContentEditable className="focus:outline-0 text-xl mt-6"
                        style={{
                            marginLeft: '8%',
                        }} />
                }
                ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
        </LexicalComposer>
    );
}

