import React, {useEffect, useState} from "react";
import axios from "axios";

export default function AddToDoForm() {
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("OPEN");

    return <form>
        <label>Add new description
        <input value={description} onChange={event => setDescription(event.target.value)}/>
        </label>
        <label>Add new status
            <select onChange={event => setStatus(event.target.value)}>
                <option value="OPEN">OPEN</option>
                <option value="IN_PROGRESS">IN PROGRESS</option>
                <option value="DONE">DONE</option></select>
        </label>

        <button disabled={description.length === 0} type="button" onClick={() => {
            sendRequest({description, status})
            setDescription("");
            setStatus("");
        }}>Enter</button>
    </form>
}

function sendRequest({description, status}){
    const url = "/api/todo"
    const newToDo = {description, status}
    axios.post(url, newToDo).catch(error => console.log(error));
}