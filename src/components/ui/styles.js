import styled, { css } from "styled-components";

export const Heading = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 16px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
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
