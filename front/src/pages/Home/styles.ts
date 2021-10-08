import styled from 'styled-components';
import { ButtonOutlineStyle } from '../../components/ButtonOutline/styles';

export const Container = styled.main`
  margin-top: 23.4rem;

  display: grid;
  place-items: center;
  gap: 7.1rem;

  .logo {
    width: 17.7rem;
    height: 11.3rem;

    margin-right: 3rem;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 700;
  }
`;

export const NewButtonOutline = styled(ButtonOutlineStyle)`
  width: 42.3rem;
  height: 8.5rem;

  border-radius: 50px;
`;
