import type { NextApiRequest } from 'next';
import { Server } from 'socket.io';

export default function handler(req: NextApiRequest, res: any) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', socket => {
      console.log('client connected');
      socket.on('join-feed', () => {
        socket.join('feed');
      });
      socket.on('disconnect', () => {
        console.log('client disconnected');
      });
    });
  }
  res.end();
}