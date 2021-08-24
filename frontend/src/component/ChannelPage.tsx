import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

type ParamTypes = {
  channel: string;
};

type MsgWithDate = {
  msg: string,
  date: Date,
};

export default function ChannelPage() {
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap> | null>(null);
  const [msg, setMsg] = useState<string>('');
  const [msgs, setMsgs] = useState<MsgWithDate[]>([]);
  const [isValidPage, setValidPage] = useState<boolean>(true);
  const { channel } = useParams<ParamTypes>();
  const history = useHistory();

  useEffect(() => {
    if (socket) {
      socket.on('chat message', (msg) => {
        setMsgs((prev) => prev.concat(msg));
      });
    } else setValidPage(false);

    return () => { socket && socket.disconnect(); };
  }, [socket]);

  useEffect(() => {
    if (!['channel1', 'channel2'].includes(channel)) setValidPage(false);
    setMsgs([]);
    setSocket(io(`http://localhost:3000/${channel}`));
  }, [channel, history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg) return;
    socket?.emit('chat message', msg);
    setMsg('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  return (
    <div>
      {isValidPage ? (
      <>
        <div>
          <ul>
            {msgs.map((msg) => <li key={`${msg.date}${msg.msg}`}>{msg.msg}</li>)}
          </ul>
        </div>
        <div style={{ position: 'fixed', bottom: 10, }}>
          <form onSubmit={handleSubmit}>
            <input value={msg} onChange={handleChange} />
            <button type="submit">send</button>
          </form>
        </div>
      </>) : (
        <h3>잘못된 url으로 접속하였거나 소켓 연결에 실패하였습니다</h3>
      )}
    </div>
  );
}
