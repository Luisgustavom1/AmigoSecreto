import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  place-items: center;

  padding: 3rem 0;
  
  .logo {
    width: 18.3rem;
    height: 11.7rem;
  }
`;

export const SectionContainer = styled.section`
  width: 100%;

  padding: 4rem 12.5%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(41rem, 1fr));
  gap: 3rem;

  justify-items: center;
`;