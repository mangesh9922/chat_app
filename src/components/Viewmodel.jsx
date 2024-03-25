import { useState } from 'react';

// Encapsulated UI State and View Model Functions
export const viewModel = (() => {
    const [uiState, setUiState] = useState({
        username: '',
        password: '',
        fcmToken: ''
    });

    // const setUsername = (value) => {
    //     setUiState(prevState => ({
    //         ...prevState,
    //         username: value
    //     }));
    // };

    // const setPassword = (value) => {
    //     setUiState(prevState => ({
    //         ...prevState,
    //         password: value
    //     }));
    // };

    const setFcmToken = (value) => {
        //set the fcmToken here from dataRepo 
        setUiState(prevState => ({
            ...prevState,
            fcmToken: value
        }));
    };

    const handleUsernameChange = (event) => {
        // setUsername(event.target.value);
        setUiState(prevState => ({
            ...prevState,
            username: event.target.value
        }));
    };

    const handlePasswordChange = (event) => {
        // setPassword(event.target.value);
        setUiState(prevState => ({
            ...prevState,
            password: event.target.value
        }));
    };

    // const handleFcmTokenChange = (event) => {
    //     setFcmToken(event.target.value);
    // };

    return {
        uiState,
        handleUsernameChange,
        handlePasswordChange,
        handleFcmTokenChange
    };
})();
