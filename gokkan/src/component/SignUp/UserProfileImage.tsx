import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  width: 100%;
  height: 30%;
  img {
    width: 60%;
    height: 60%;
    border: 1px solid black;
    border-radius: 50%;
  }
  button {
    margin-top: 2vh;
  }
  input {
    display: none;
  }
  p {
    color: red;
  }
`;

const UserProfileImage = () => {
  return (
    <ProfileWrapper>
      <img alt="유저 프로필 이미지" src={imgUrl} />
      <button onClick={profileChangeButtonClick}>프로필 이미지 변경</button>
      <input
        type="file"
        accept="image/jpg,impge/png,image/jpeg,image/gif"
        onChange={changeImg}
        ref={fileInput}
      />
      {warn !== '' && <p>*{warn}</p>}
    </ProfileWrapper>
  );
};

export default UserProfileImage;
