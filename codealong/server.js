import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { REACT_APP_BACKEND_URL } from './config.js';
import ACTIONS from './src/Actions.js';
dotenv.config();

const app = express();


const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

const userSocketMap = {}
function getAllConnectedClients(roomID) {
    return Array.from(io.sockets.adapter.rooms.get(roomID) || []).map((socketId) => {
        return {
            socketId,
            username: userSocketMap[socketId]
        }
    })
}

io.on('connection', (socket) => {
    // console.log("Socket connected : " + socket.id)
    socket.on('error', (error) => {
        console.error("Socket error:", error);
    });
    socket.on('disconnect', () => {
        console.log("Socket disconnected: " + socket.id);
    });

    
    // ACTIONS -- JOIN
    socket.on(ACTIONS.JOIN, ({ roomID, username }) => {
        userSocketMap[socket.id] = username;
        socket.join(roomID);
        const clients = getAllConnectedClients(roomID);
        console.log(clients)
        clients.forEach(({ socketId }) => {
            io.to(socketId).emit(ACTIONS.JOINED, {
                clients,
                username,
                socketId: socket.id
            })
        });
    });

    // ACTIONS -- CODE CHANGE
    socket.on(ACTIONS.CODE_CHANGE, ({ roomID, code }) => {
        socket.in(roomID).emit(ACTIONS.CODE_CHANGE, { code })
    })

    socket.on(ACTIONS.SYNC_CODE, ({ socketId, code }) => {
        io.to(socketId).emit(ACTIONS.CODE_CHANGE, { code });
    });

    // ACTIONS -- DISCONNECTED
    socket.on('disconnecting', () => {
        const rooms = [...socket.rooms];
        rooms.forEach((roomID) => {
            socket.in(roomID).emit(ACTIONS.DISCONNECTED, {
                socketId: socket.id,
                username: userSocketMap[socket.id],
            })
        });
        delete userSocketMap[socket.id];
        socket.leave();
    })

})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(REACT_APP_BACKEND_URL);
});
