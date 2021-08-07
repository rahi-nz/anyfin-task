import styled from 'styled-components';

export const Container = styled.section`
  text-align: center;
`;

export const List = styled.ul`
  text-align: center;
  max-height: 300px;
  overflow-y: auto;
  background: #005993;
  box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
  border-radius: 20px;
  padding: 10px 30px;
`;

export const Item = styled.li.attrs(() => ({
  'data-test-id': 'suggested',
}))`
  text-align: left;
  padding: 10px 0;
  a {
    color: #fff;
    display: block;
  }
`;
