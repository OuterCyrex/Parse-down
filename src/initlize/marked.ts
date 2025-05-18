import {marked} from "marked";
import {markedHighlight} from "marked-highlight";
import hljs from "highlight.js";

const initMarked = () => {
    marked.use(
        markedHighlight({
            highlight(code: string, lang: string) {
                return hljs.highlight(code, {language: lang || 'plaintext'}).value;
            },
        })
    )

    marked.setOptions({
        gfm: true,
        breaks: true,
    })
}

export default initMarked
