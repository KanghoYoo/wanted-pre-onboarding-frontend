import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8d8d8d68;
  height: 100vh;
`;
export const Container = styled.div`
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
export const MainText = styled.span`
  font-size: 40px;
  font-weight: 700px;
  margin-bottom: 30px;
`;
export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const StateText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: red;
`;
export const LoginInput = styled.input`
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
export const IdInput = styled(LoginInput)``;
export const PasswordInput = styled(LoginInput)``;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
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
export const LoginButton = styled(Button)`
  :disabled {
    background-color: #6377ab5f;
    :hover {
      cursor: default;
      background-color: #6377ab5f;
    }
  }
  margin-bottom: 10px;
`;
export const SignupButton = styled(Button)``;
