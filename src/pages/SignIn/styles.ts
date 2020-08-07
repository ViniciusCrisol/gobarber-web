import styled, { keyframes } from 'styled-components';
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
  flex-direction: column;
  justify-content: center;
`;

const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-25px)
}
to {
  opacity: 1;
  transform: translateX(0)
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    width: 340px;
    margin: 80px 8px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
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
