import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './lib/styles/global';

const LayoutPage = lazy(() => import('./pages/LayoutPage'));
const MainPage = lazy(() => import('./pages/MainPage'));
const AuctionRegisterPage = lazy(() => import('./pages/AuctionRegisterPage'));
const ExpertWorkDetailPage = lazy(() => import('./pages/ExpertWorkDetailPage'));
const ExpertWorkListPage = lazy(() => import('./pages/ExpertWorkListPage'));
const SettingPage = lazy(() => import('./pages/SettingPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const TestPage = lazy(() => import('./pages/Testpage'));
const UserVerifyPage = lazy(() => import('./pages/UserVerifyPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" element={<MainPage />} />
          <Route path="expertworkdetail" element={<ExpertWorkDetailPage />} />
          <Route path="expertworklist" element={<ExpertWorkListPage />} />
          <Route path="verify" element={<UserVerifyPage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="test" element={<TestPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route
          path="register/:pageNumber/:productId"
          element={<AuctionRegisterPage />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
