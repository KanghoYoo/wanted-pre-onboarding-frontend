import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [userId, setUserId] = useState<String>("");
  const [userPassword, setUserPassword] = useState<String>("");

  const onChangeId = (e: any) => {
    setUserId(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  return (
    <Background>
      <Container>
        <MainText>Login</MainText>
        <FormWrapper>
          <Label>
            <FontAwesomeIcon icon={faUser} />
            <IdInput
              type="email"
              placeholder="아이디를 입력해주세요."
              onChange={onChangeId}
            ></IdInput>
          </Label>
          <Label>
            <FontAwesomeIcon icon={faLock} />
            <PasswordInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangePassword}
            ></PasswordInput>
          </Label>
        </FormWrapper>
        <ButtonWrapper>
          <LoginButton>로그인</LoginButton>
          <SignupButton>회원가입</SignupButton>
        </ButtonWrapper>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8d8d8d68;
  height: 100vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  border: none;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 20px 20px -18px rgba(0, 0, 0, 1);
`;
const MainText = styled.span`
  font-size: 40px;
  font-weight: 700px;
  margin-bottom: 30px;
`;
const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const LoginInput = styled.input`
  background: none;
  border: none;
  border-bottom: 2px solid #0048ff4e;
  width: 200px;
  height: 30px;
  font-size: 14px;
  margin: 0 0 5px 8px;
  :focus {
    outline: none;
    border-bottom: 2px solid #0048ffba;
  }
`;
const IdInput = styled(LoginInput)``;
const PasswordInput = styled(LoginInput)``;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  border: none;
  border-radius: 12px;
  width: 220px;
  height: 40px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  background-color: #0048ff7e;
  :hover {
    background-color: #0048ffc8;
  }
`;
const LoginButton = styled(Button)`
  margin-bottom: 10px;
`;
const SignupButton = styled(Button)``;

export default Login;
