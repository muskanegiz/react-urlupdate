import React from "react";
import NoteContext from "./NoteContext";
const NoteStatus = (props) => {
    const state = {
        "name": "muskan",
        "age": "24"
    }
    return (
        <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
    )
}
export default NoteStatus;