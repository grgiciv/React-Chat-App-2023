import "../styles/SubmitFormField.css";
import  { Button } from "./Button";

export function SubmitFormField (props) {
    return (
        <div className="submit-form-filed">
            <Button type="submit" label={props.label} />
        </div>
    );
};