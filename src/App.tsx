import React from 'react';
import Loader from 'react-loader-spinner';
import { Route, Switch } from 'react-router-dom';
import Bar from './component/Bar';
import CommunityPage from './component/CommunityPage';
import LoginPage from './component/LoginPage';
import Page from './component/Page';
import ProfilePage from './component/ProfilePage';
import { useAppContext } from './hooks/useAppState';
import { useUserContext } from './hooks/useContext';

export default function App() {
  const { isOnline } = useUserContext();
  const { isError, isLoading } = useAppContext();

  const content = isOnline ? (
    <>
      <Bar />
      <Switch>
        <Route path="/game" render={() => <Page>game</Page>} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/community" component={CommunityPage} />
        <Route path="/channel" render={() => <Page>channel</Page>} />
        <Route path="/" render={() => <Page>main</Page>} />
      </Switch>
    </>
  ) : (
    <Route path="/" component={LoginPage} />
  );

  return (
  <>
    {isLoading && <Loader
      // Loader는 Material UI progress bar로 대체할 수 있을 듯
      // 그리고 전체 UI에 통일해서 적용하기보다는 각각에 적용하고 일부는 스켈레톤 UI 쓰는 게 좋을 듯
      type="Oval"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />}
    {isError ? <div>Error! Please refresh</div> : content}
  </>
  );
};
