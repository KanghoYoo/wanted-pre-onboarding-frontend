import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { ID_EXP, PW_EXP, signIn, signUp } from "./LoginAPI";
import { useNavigate } from "react-router-dom";
import {
  Background,
  ButtonWrapper,
  Container,
  FormWrapper,
  IdInput,
  Label,
  LoginButton,
  MainText,
  PasswordInput,
  SignupButton,
  StateText,
} from "./LoginStyles";
import { AuthButton, VerificationText } from "./LoginInterface";

function Login() {
  const loginObject: AuthButton = {
    id: 1,
    text: "Login",
    buttonText: "로그인",
    isSignIn: true,
  };
  const SignUpObject: AuthButton = {
    id: 2,
    text: "SignUp",
    buttonText: "가입하기",
    isSignIn: false,
  };
  const stateText: VerificationText = {
    idStateText: "이메일 형식에는 '@'가 포함되어야 합니다.",
    pwStateText: "비밀번호는 8자리가 넘어야 합니다.",
  };

  const [userId, setUserId] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [loginAndSignUp, setLoginAndSignUp] = useState<AuthButton>(loginObject);
  const { id, text, buttonText, isSignIn } = loginAndSignUp;
  const { idStateText, pwStateText } = stateText;
  const navigate = useNavigate();

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  const goToSignUp = () => {
    setUserId("");
    setUserPassword("");
    setLoginAndSignUp(SignUpObject);
  };

  const goToBack = () => {
    setUserId("");
    setUserPassword("");
    setLoginAndSignUp(loginObject);
  };

  const onClickSignIn = () => {
    signIn(userId, userPassword)
      .then(function (response) {
        const accessToken = response.data.access_token;
        accessToken && localStorage.setItem("access_token", accessToken);
        setUserId("");
        setUserPassword("");
        setLoginAndSignUp(loginObject);
        window.alert("로그인이 되었습니다.");
        navigate("/todo", { replace: true });
      })
      .catch(function (error) {
        window.alert("로그인에 실패하였습니다. 다시 시도해주세요.");
      });
  };

  const onClickSignUp = () => {
    signUp(userId, userPassword)
      .then(function (response) {
        setUserId("");
        setUserPassword("");
        setLoginAndSignUp(loginObject);
        window.alert("회원가입이 되었습니다.");
      })
      .catch(function (error) {
        window.alert("회원가입에 실패하였습니다. 다시 시도해주세요.");
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
            onClick={isSignIn ? onClickSignIn : onClickSignUp}
            disabled={
              ID_EXP.test(userId) && PW_EXP.test(userPassword) ? false : true
            }
          >
            {isSignIn === true ? buttonText : buttonText}
          </LoginButton>
          <SignupButton onClick={isSignIn ? goToSignUp : goToBack}>
            {isSignIn ? "회원가입" : "로그인화면 돌아가기"}
          </SignupButton>
        </ButtonWrapper>
      </Container>
    </Background>
  );
}

export default Login;
