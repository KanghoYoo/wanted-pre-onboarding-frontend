import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Background>
      <Container>
        <FormWrapper>
          <Label>아이디</Label>
          <IdInput type="email" placeholder="아이디를 입력해주세요."></IdInput>
          <Label>비밀번호</Label>
          <PasswordInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
          ></PasswordInput>
          <ButtonWrapper>
            <LoginButton>로그인</LoginButton>
            <SignupButton>회원가입</SignupButton>
          </ButtonWrapper>
        </FormWrapper>
      </Container>
    </Background>
  );
}

const Background = styled.div``;
const Container = styled.div``;
const Label = styled.div``;
const FormWrapper = styled.div``;
const IdInput = styled.input``;
const PasswordInput = styled.input``;

const ButtonWrapper = styled.div``;
const LoginButton = styled.button``;
const SignupButton = styled.button``;
export default Login;
