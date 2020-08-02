import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 0 16px;
  border-radius: 4px;
  border: 2px solid #232129;
  background-color: #232129;

  display: flex;
  align-items: center;

  svg {
    color: #666360;
    margin-right: 16px;
  }

  & + div {
    margin-top: 8px;
  }

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
`;
