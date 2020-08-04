import styled, { css } from 'styled-components';

import Tooltipe from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isField: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  color: #666360;
  padding: 0 16px;

  border-radius: 4px;
  border: 2px solid #232129;
  background-color: #232129;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}

  ${({ isField }) =>
    isField &&
    css`
      color: #ff9000;
    `}



  input {
    flex: 1;
    border: 0;

    color: #f4ede8;
    padding: 16px 0;
    background: transparent;

    filter: saturate(1) hue-rotate(0deg);

    &::placeholder {
      color: #666360;
    }
  }

 svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltipe)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background-color: #c53030;
    color: white;

    ::before {
      border-color: #c53030 transparent;
    }
  }
`;
