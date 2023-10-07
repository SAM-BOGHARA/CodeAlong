import { io } from 'socket.io-client';
import { REACT_APP_BACKEND_URL } from '../config.js';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };
    console.log("Init Socket Started")
    console.log(REACT_APP_BACKEND_URL)
    return io(REACT_APP_BACKEND_URL, options)
}