import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background-color: #ebf8ff;
    color: #3272b7;
  `,
  success: css`
    background-color: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background-color: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  padding: 30px;
  overflow: hidden;
`;

export const Toast = styled.div<ToastProps>`
  width: 360px;
  border-radius: 10px;
  padding: 16px 30px 16px 16px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  position: relative;

  & + div {
    margin-top: 8px;
  }

  ${({ type }) => toastTypeVariations[type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      opacity: 0.8;

      margin-top: 4px;
      font-size: 14px;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 17px;

    border: 0;
    opacity: 0.6;
    color: inherit;
    background-color: transparent;
  }

  ${({ hasDescription }) =>
    !hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
