import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const LayoutPage = lazy(() => import('./pages/LayoutPage'));
const MainPage = lazy(() => import('./pages/MainPage'));
const AuctionRegisterPage = lazy(() => import('./pages/AuctionRegisterPage'));
const ExpertWorkDetailPage = lazy(() => import('./pages/ExpertWorkDetailPage'));
const ExpertWorkListPage = lazy(() => import('./pages/ExpertWorkListPage'));
const SettingPage = lazy(() => import('./pages/SettingPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" element={<MainPage />} />
          <Route path="register" element={<AuctionRegisterPage />} />
          <Route path="expertworkdetail" element={<ExpertWorkDetailPage />} />
          <Route path="expertworklist" element={<ExpertWorkListPage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
