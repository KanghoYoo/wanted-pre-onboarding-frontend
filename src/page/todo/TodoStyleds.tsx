import styled from "styled-components";
import { Container } from "../login/LoginStyles";

export const LogoutButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #5e5eff;
  border: none;
  border-radius: 8px;
  width: 100px;
  height: 50px;
  color: #fff;
  font-size: 16px;
`;
export const TodoContainer = styled(Container)`
  width: 450px;
  height: 550px;
`;
export const MainText = styled.h1`
  flex: 1;
  background-color: #5e5eff;
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  padding-top: 15px;
  color: #fff;
  font-size: 40px;
  text-align: center;
`;
export const ListContainer = styled.div`
  flex: 7;
  display: flex;
  direction: column;
  overflow: auto;
  width: 100%;
`;
export const ListWrap = styled.ul`
  padding: 10px 15px;
  width: 100%;
  height: 100%;
`;
export const AddContainer = styled.div`
  display: flex;
  direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #5e5effa2;
  border-top: 4px solid #9999ff;
  border-radius: 0px 0px 8px 8px;
  width: 100%;
  height: 60px;
`;
export const AddInputText = styled.input`
  background: none;
  border: none;
  border-bottom: 3px solid #4c4cff;
  width: 340px;
  height: 40px;
  font-size: 16px;
  :focus {
    outline: none;
    border-bottom: 4px solid #5e5eff;
  }
`;
export const AddTextButton = styled.button`
  background-color: #5e5eff;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  width: 80px;
  height: 40px;
`;
