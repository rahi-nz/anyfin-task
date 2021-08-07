import styled from 'styled-components';

export const Container = styled.section`
  background: #005993;
  box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
  padding: 10px;
  width: 600px;
  border-radius: 20px;
  color: #fff;
`;

export const CurrencySection = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: space-around;
  input {
    color: #fff;
    border: 1px solid #fff;
    width: 100%;
    border-radius: 20px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  span {
    padding: 0 20px;
    font-style: italic;
  }
`;

export const LocalCurrency = styled.div`
  width: 100%;
`;
