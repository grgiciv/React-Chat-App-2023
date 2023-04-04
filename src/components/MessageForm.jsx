import { getRandomColor } from "../library/random";
import { InputFormField } from "./InputFormField";
import { SubmitFormField } from "./SubmitFormField";
import { useState } from "react";



export function MessageForm(props) {
    const [ formState, setFormState ] = useState('');
    const [bgcolor] = useState(getRandomColor());
    
    function handleChange(message){
        setFormState(message);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormState('');
        const time = new Date();
        props.onSubmit({
                id: Date.now(),
                author: {
                    username: props.username,
                    avatarIndex: props.avatarIndex,
                },
                text: formState,
                date: {
                    hours: time.getHours(),
                    minutes: time.getMinutes(),
                    seconds: time.getSeconds(),
                    day: time.getDate(),
                    month: time.getMonth() + 1,
                    year: time.getFullYear(),
                },
                background: bgcolor,
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <InputFormField label="Message" type="text" value={formState} onChange={handleChange}/>
            <SubmitFormField label="Transmit"/>
        </form>
    );
}