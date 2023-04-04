import { avatarImages } from "../library/avatar";
import "../styles/Message.css";


export function Message(props) {
    return(
        <div className="message">
            <img className="avatar" src={avatarImages[props.avatarIndex]} alt={props.author} width={100} height={100} />
            <div className="message-author">{props.author}<br/><span className="date">{props.hours}:{props.minutes}:{props.seconds} {props.day}/{props.month}/{props.year}</span></div>
            <div style={{backgroundColor: props.background}} className="message-text">{props.text}</div>
            <div>{props.id}</div>
        </div>
    );
};