import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 56px;

  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 4px;
  background-color: #ff9000;

  color: #312e38;
  font-weight: 500;

  transition: background 200ms;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
