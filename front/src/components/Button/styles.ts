import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

export const ContainerButton = styled.button`
 ${({ theme }) => css`
    width: 42.3rem;
    height: 8.5rem;
    
    border-radius: 50px;

    background-color: ${theme.colors.blue};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.7rem;
    
    font-size: 3.2rem;
    
    &:hover {
      background-color: ${transparentize(.2, theme.colors.blue)};
    }
  `}
`;
