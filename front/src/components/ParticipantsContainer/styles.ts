import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 600;
    font-size: 2rem;

    i {
      margin-left: .5rem;

      &:hover {
        transform: scale(1.15);
      }
    }
  }
`;

export const Content = styled.ul`
  margin-top: 1.6rem;

  max-height: 40.2rem;
  
  overflow-y: auto;

  & {
    scrollbar-width: thin;
    scrollbar-color: #ebad05;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ebad05;
    border-radius: 20px;
  }
  
  li + li {
    margin-top: .8rem;
  }
`;