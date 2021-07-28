import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatchContext } from '../hooks/useAppState';
import { useDispatchContext } from '../hooks/useContext';

export default function LoginPage() {
  const history = useHistory();
  const dispatch = useDispatchContext();
  const appStateDispatcher = useAppDispatchContext();

  const handleLogin = () => {
    appStateDispatcher({ type: 'loading' });
    // 실제 구현에서는 백엔드 서버와 통신하여 async로 login 절차 진행
    // 회원 정보 있으면 로그인 -> 세션 유지되는 동안은 접속시 자동 로그인
    // 회원 정보 없으면 회원가입
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .finally(() => {
        appStateDispatcher({ type: 'init' });
      })
      .then((response) => {
        dispatch({
          type: 'login',
          info: { 
            name: response.data.name,
            img: 'https://avatars.githubusercontent.com/u/57004991?v=4',
          }
        });
        history.push('/');
      })
      .catch((error) => { appStateDispatcher({
        type: 'error',
        message: error.message,
      }) });
  }
  return (
  	<div>
      <h3>Please Login</h3>
      <button onClick={handleLogin}>fake login</button>
  	</div>
  );
}

