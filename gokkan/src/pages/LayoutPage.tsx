import { Outlet } from 'react-router-dom';

export default function LayoutPage() {
  return (
    <div>
      <header>헤더 영역 입니다.</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
