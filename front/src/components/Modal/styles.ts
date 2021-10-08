import styled, { css } from 'styled-components';
import { ContainerButton } from '../Button/styles';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.2);

  display: grid;
  place-items: center;
`;

export const Content = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.white50};

    border-radius: 8px;

    padding: 1rem 2rem 3rem;
    
    .textField {
      margin-bottom: 2rem;
    }

    header {
      text-align: right;
      width: 100%;

      i {
        font-size: 2.5rem;
      }
    }

    h1 {
      text-align: center;
      margin-bottom: 2.5rem;
    }
  `};
`;

export const NewButton = styled(ContainerButton)`
  width: 100%;
  height: 6rem;
  
  border-radius: 8px;

  margin-top: 4rem;
`;