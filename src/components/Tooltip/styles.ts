import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    transform: translateX(-50%);
    bottom: calc(100% + 12px);
    left: 50%;

    width: 160px;
    color: #312e38;
    padding: 8px;
    border-radius: 4px;
    background-color: #ff9000;

    font-size: 14px;
    font-weight: 500;

    opacity: 0;
    visibility: hidden;
    transition: opacity 300ms, visibility 300ms;

    &::before {
      position: absolute;
      transform: translateX(-50%);
      top: 100%;
      left: 50%;

      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;

      content: '';
    }
  }

  &:hover {
    span {
      opacity: 1;
      visibility: visible;
    }
  }
`;
