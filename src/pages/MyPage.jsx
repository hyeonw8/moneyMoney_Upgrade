import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileAPI } from '../api/authAPI';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logout, setUserData } from '../redux/slices/authSlice';
import { StImg } from '../shared/Header';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userData = useSelector((state) => state.auth.userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleChangeData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (nickname) formData.append("nickname", nickname);
    if (avatar) formData.append('avatar', avatar);

    const response = await updateProfileAPI(formData);
    const data = response.data;

    if(data.success) {
      toast.success('프로필 정보가 업데이트 되었습니다!');
      dispatch(setUserData({...userData, nickname: data.nickname || userData.nickname, avatar: data.avatar || userData.avatar }))
    } else {
      toast.error('프로필 정보가 업데이트에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  const getAccessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const checkAuth = () => {  
      if (!getAccessToken) {
        dispatch(logout());
        localStorage.removeItem('accessToken');
        navigate('/login');
      }
    };

    checkAuth();
  }, [dispatch, isAuthenticated]);


  if (!isAuthenticated) {
    return (
      <StMypageWrapper>
        <p>로그인이 필요합니다!</p>
      </StMypageWrapper>
    );
  }

  return (
    <>
      {getAccessToken && (
        <StMypageWrapper>
          <StMypageForm>
            <StTitle>🍀 {userData?.nickname}님의 마이 페이지</StTitle>
            { userData?.avatar !== null ?
              <StImg src={userData?.avatar} alt="MyPage" style={{width: '100px', height: '100px'}}/>
              :  <StImg src='src/assets/default-profile.jpg' alt="MyPage" style={{width: '100px', height: '100px'}}/>
            }  
            <StInputBox>
              <StLabel htmlFor="inputFile">프로필 이미지 등록하기</StLabel>
              <StInput
                type="file"
                id="inputFile"
                $text="add"
                accept="image/*"
                onChange={(e) => setAvatar(e.target.files[0])}
              />
            </StInputBox>
            <StInputBox>
              <StNicknameText>✏️ 닉네임 변경하기 ✏️</StNicknameText>
              <StInput
                type="text"
                id="inputNickname"
                placeholder="변경하실 닉네임을 입력해주세요!"
                minLength={1}
                maxLength={10}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </StInputBox>
            <StButton type="submit" $text="login" onClick={handleChangeData}>
              프로필 정보 업데이트하기
            </StButton>
          </StMypageForm>
        </StMypageWrapper>
      )}
    </>
  );
};

export default MyPage;

const StMypageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  position: relative;
`;

const StMypageForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: #ffffffdd;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  transform: translate(0%, 30%);
`;

const StInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  text-align: center;
`;

const StTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const StLabel = styled.label`
  font-size: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  width: 220px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const StInput = styled.input`
  width: 220px;
  height: 40px;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.$text === 'add' ? 'none' : 'block')};
  text-align: center;
  background-color: #fff;
`;

const StButton = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  background-color: black;
  border: none;
  color: white;
  font-size: 18px;
  margin-top: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const StNicknameText = styled.p`
  font-size: 15px;
  font-weight: bold;

`