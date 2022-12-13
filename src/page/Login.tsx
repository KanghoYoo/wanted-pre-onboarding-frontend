import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { ID_EXP, PW_EXP, URI } from "./Auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const loginObject = {
    id: 1,
    text: "Login",
    buttonText: "로그인",
    isSignIn: true,
  };
  const SignUpObject = {
    id: 2,
    text: "SignUp",
    buttonText: "가입하기",
    isSignIn: false,
  };
  const stateText = {
    idStateText: "이메일 형식에는 '@'가 포함되어야 합니다.",
    pwStateText: "비밀번호는 8자리가 넘어야 합니다.",
  };

  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginAndSignUp, setLoginAndSignUp] = useState(loginObject);
  const { id, text, buttonText, isSignIn } = loginAndSignUp;

  const { idStateText, pwStateText } = stateText;
  const navigate = useNavigate();

  const onChangeId = (e: any) => {
    setUserId(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  const useGoToSignUp = (e: any) => {
    setUserId("");
    setUserPassword("");
    setLoginAndSignUp(SignUpObject);
  };

  const goToBack = () => {
    setUserId("");
    setUserPassword("");
    setLoginAndSignUp(loginObject);
  };

  const loginEvent = () => {
    console.log(userId);
    axios
      .post(
        `${URI}signin/`,
        {
          email: userId,
          password: userPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setUserId("");
        setUserPassword("");
        const accessToken = response.data.access_token;
        if (accessToken) {
          localStorage.setItem("access_token", accessToken);
        }
        window.alert("로그인이 되었습니다.");
        setLoginAndSignUp(loginObject);
        navigate("/todolist", { replace: true });
      })
      .catch(function (error) {
        window.alert("로그인에 실패하였습니다. 다시 시도해주세요.");
        console.log(error);
      });
  };
  //apple12@naver.com
  //12345678
  const signUpEvent = () => {
    console.log(userId);
    console.log(userPassword);

    axios
      .post(
        `${URI}signup/`,
        {
          email: userId,
          password: userPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setUserId("");
        setUserPassword("");
        window.alert("회원가입이 되었습니다.");
        setLoginAndSignUp(loginObject);
      })
      .catch(function (error) {
        window.alert("회원가입에 실패하였습니다. 다시 시도해주세요.");
        console.log(error);
      });
  };

  return (
    <Background>
      <Container>
        <MainText>{isSignIn === true ? text : text}</MainText>
        <FormWrapper>
          <Label>
            <FontAwesomeIcon icon={faUser} />
            <IdInput
              type="email"
              placeholder="아이디를 입력해주세요."
              onChange={onChangeId}
              value={userId}
            ></IdInput>
          </Label>
          <Label>
            <FontAwesomeIcon icon={faLock} />
            <PasswordInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangePassword}
              value={userPassword}
            ></PasswordInput>
          </Label>
          {userId === ""
            ? null
            : !ID_EXP.test(userId) && <StateText>{idStateText}</StateText>}
          {userPassword === ""
            ? null
            : !PW_EXP.test(userPassword) && (
                <StateText>{pwStateText}</StateText>
              )}
        </FormWrapper>
        <ButtonWrapper>
          <LoginButton
            onClick={isSignIn ? loginEvent : signUpEvent}
            disabled={
              ID_EXP.test(userId) && PW_EXP.test(userPassword) ? false : true
            }
          >
            {isSignIn === true ? buttonText : buttonText}
          </LoginButton>
          <SignupButton onClick={isSignIn ? useGoToSignUp : goToBack}>
            {isSignIn ? "회원가입" : "로그인화면 돌아가기"}
          </SignupButton>
        </ButtonWrapper>
      </Container>
    </Background>
  );
}

export const Background = styled.div`
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
const StateText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: red;
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
  :disabled {
    background-color: #6377ab5f;
    :hover {
      cursor: default;
      background-color: #6377ab5f;
    }
  }
  margin-bottom: 10px;
`;
const SignupButton = styled(Button)``;

export default Login;
