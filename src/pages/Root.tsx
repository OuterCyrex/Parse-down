import {useState} from "react";
import MainView from "./MainView.tsx";
import SelectView from "./SelectView.tsx";

export default function Root() {
    const [fileAvailable, _] = useState(true)

    return (
        <>
            {fileAvailable ? <MainView /> : <SelectView />}
        </>
    )
}
