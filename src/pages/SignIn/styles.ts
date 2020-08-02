import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  align-items: center;
  place-content: center;
  flex-direction: column;

  form {
    width: 100%;
    max-width: 340px;

    text-align: center;
    margin: 80px 8px;

    h1 {
      margin-bottom: 24px;
    }

    input {
      padding: 16px;
      width: 100%;

      color: #f4ede8;
      border-radius: 4px;
      border: 2px solid #232129;
      background-color: #232129;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
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
    }

    a {
      display: block;
      margin-top: 24px;

      color: #f4ede8;
      text-decoration: none;
      transition: color 200ms;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    margin-top: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: color 200ms;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
