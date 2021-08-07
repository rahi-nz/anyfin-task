import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  border: 1px solid #20598f;
  border-radius: 20px;
  padding: 0 10px;
`;

export const Input = styled.input`
  background-color: transparent;
  height: 44px;
  width: 584px;
  outline: none;
  border: none;
  font-size: 16px;
  padding: 0 10px;
`;
