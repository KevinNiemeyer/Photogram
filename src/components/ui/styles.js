import styled, { css } from 'styled-components';

export const Heading = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 16px;
  padding-left: 25px;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  ${props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}
`;
