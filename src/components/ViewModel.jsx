import { useEffect, useState } from 'react';
import { fetchTokenData } from '../data/DateRepository'
import { UiState } from '../data/UiState';
// Encapsulated UI State and View Model Functions
const ViewModel = () => {
    const [uiState, setUiState] = useState(
        UiState
    );

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

    // const setFcmToken = (value) => {
    //     //set the fcmToken here from dataRepo 
    //     setUiState(prevState => ({
    //         ...prevState,
    //         fcmToken: value,
    //     }));
    //     // , () => {
    //     console.log("fcmtoken in uiState: " + uiState.fcmToken + " value got: " + value);

    // };

    const setFcmToken = (value) => {
        setUiState(prevState => ({
            ...prevState,
            fcmToken: value,
        }));
    };

    useEffect(() => {
        console.log("fcmtoken in uiState: " + uiState.fcmToken);
    }, [uiState.fcmToken]);

    function fetchTokenUi() {
        if(uiState.fcmToken=="Loading..."){
            try {
                // const token = fetchTokenData()
                fetchTokenData().then(
                    (token) => {
                        setFcmToken(token)
                        // console.log("successfully set token to ui state: " + uiState.fcmToken);
                    }
                ).catch((err) => {
                    console.error("error in viewmodle for fcmToken:" + err)
                    setFcmToken(err)
                });

            }
            catch (err) {
                setFcmToken("failed to get token : "+err)
                console.error("failed to get token" + err);
            }
        }
    }

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
        fetchTokenUi,
        handleUsernameChange,
        handlePasswordChange
        // handleFcmTokenChange
    };
};

export default ViewModel;