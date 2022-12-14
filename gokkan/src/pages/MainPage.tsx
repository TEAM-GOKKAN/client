import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate();

  const handleNavigateClick = () => {
    navigate('/register');
  };

  return (
    <div>
      Main page 입니다.
      <button onClick={handleNavigateClick}>등록 테스트</button>
    </div>
  );
}
