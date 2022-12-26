import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './lib/styles/global';

const LayoutPage = lazy(() => import('./pages/LayoutPage'));
const MainPage = lazy(() => import('./pages/MainPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
