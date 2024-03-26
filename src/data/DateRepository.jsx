import {fetchToken} from '../network/FirebaseApi'

//write function here to return the fcmToken from api

export const fetchTokenData = async () => {
    // try {
    //  fetchToken() 
    // }
    // catch (err) {
    //     console.error("error getting token")
    //     throw err
    // }
    let retToken = ""
    await fetchToken().then((token) => {
        retToken = token 
    })
        .catch((err) => {
            console.error("error in data for fcm token : " + err)
            retToken = err
            throw err
    })

    return retToken
}