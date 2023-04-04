import React, { useEffect } from "react";
import { useState } from "react";

export const AppContext = React.createContext("test");

export const AppConsumer = AppContext.Consumer;

export function AppProvider (props) {
    const [ username, setUsername ] = useState('');
    const [ avatarIndex, setAvatarIndex ] = useState(0);
    const [ config, setConfig ] = useState(null);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        fetch("/assets/config.json")
            .then(response => {
                return response.json();
            })
            .then(json => {
                setConfig(json);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    return (
        <AppContext.Provider value={{
            username: username,
            setUsername: setUsername,
            avatarIndex: avatarIndex,
            setAvatarIndex: setAvatarIndex,
            isSignedIn: username !== '',
            SignOut: function handleSignOut() {
                setUsername('');
            },
            config: config,
            error: error,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}