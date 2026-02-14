import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export const connectWebSocket = () => {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:3000');
    socket.on('connect', () => {
      console.log('WebSocket connected');
    });
  }
  return socket;
};

export const getSocket = () => socket;