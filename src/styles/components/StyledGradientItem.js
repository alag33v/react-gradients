import styled from 'styled-components';

export const StyledGradientItem = styled.div`
  ${({ firstColor, secondColor }) =>
    `background: linear-gradient(90deg, ${firstColor} 0%, ${secondColor} 100%);`}
  border-radius: 5px;
  width: 800px;
  max-width: 100%;
  height: 100px;
`;
