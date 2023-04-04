import { useState } from "react";
import { Button } from "../components/Button";
import { FormField } from "../components/FormField";
import { InputFormField } from "../components/InputFormField";
import { getRandomName } from "../library/random";
import { RandomNameButton } from "../components/RandomNameButton";
import { AvatarFormFiled } from "../components/AvatarFormField";

export function SignInForm(props) {
    const [formState, setFormState] = useState(getRandomName());
    const [avatar, setAvatar] = useState('');
    
    function handleSubmit(event){
        event.preventDefault();
        props.onSubmit({
            username: formState,
            avatarIndex: avatar,    
        });
    }

    function handleUserNameChange(value){
        setFormState(value);
    }

    function handleAvatarChange(value) {
        setAvatar(value);
    }


    return (
        <form className="sign-in-form" onSubmit={handleSubmit}>
            <AvatarFormFiled onChange={handleAvatarChange}/>
            <InputFormField label="Username" type="text" onChange={handleUserNameChange} value={formState}/>
            <FormField>
                <RandomNameButton onRandomName={handleUserNameChange}/>
            </FormField>
            <FormField>
                <Button type="submit" label="Sign in"/>
            </FormField>
        </form>
    );
}