import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Bar from './component/Bar';
import Page from './component/Page';
import { useDispatchContext, useUserContext } from './hooks/useContext';

export default function App() {
  const history = useHistory();
  const dispatch = useDispatchContext();
  const { isOnline } = useUserContext();

  const handleLogin = () => {
    // 실제 구현에서는 백엔드 서버와 통신하여 async로 login 절차 진행
    // 회원 정보 있으면 로그인 -> 세션 유지되는 동안은 접속시 자동 로그인
    // 회원 정보 없으면 회원가입
    dispatch({ type: 'login', info: { name: 'user1', img: 'https://avatars.githubusercontent.com/u/57004991?v=4' } });
    history.push('/');
  }

  const content = isOnline ? (
    <>
      <Bar />
      <Switch>
        <Route path="/game" render={() => <Page>game</Page>} />
        <Route path="/profile" render={() => <Page>profile</Page>} />
        <Route path="/community" render={() => <Page>community</Page>} />
        <Route path="/channel" render={() => <Page>channel</Page>} />
        <Route path="/" render={() => <Page>main</Page>} />
      </Switch>
    </>
  ) : (
    <>
      <Route path="/" render={() => <Page>please login</Page>} />
      <button onClick={handleLogin}>fake login</button>
    </>
  );

  return (<>
    {content}
  </>);
};
