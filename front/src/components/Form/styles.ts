import styled from 'styled-components';
import { ContainerButton } from '../Button/styles';

export const Container = styled.form`
  display: grid;
  place-items: center;
  gap: 1.9rem;

  background-color: ${({ theme }) => theme.colors.white50};
  border-radius: 15px;

  padding: 2rem 2.2rem 1.7rem 2.2rem;
  
  width: 42rem;
  h1 {
    font-size: 2.8rem;
    font-weight: 600;
  }
`;

export const ButtonForm = styled(ContainerButton)`
  width: 100%;
  height: 6rem;

  border-radius: 8px;

  font-size: 2.6rem;

  margin-top: 2rem;
`;