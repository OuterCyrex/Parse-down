import SplitEditor from "./SplitEditor.tsx";
import HybridEditor from "./HybridEditor.tsx";

export default function Editor(props: { mode: 'split' | 'hybrid' }) {
    switch (props.mode) {
        case 'split':
            return (<SplitEditor />)
        case 'hybrid':
            return (<HybridEditor />)
    }
}
