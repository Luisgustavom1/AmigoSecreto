import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.white50};

  border-radius: 25px;

  height: 3.3rem;
  width: 45rem;

  font-size: 1.4rem;
  font-weight: 600;

  padding: 0 2rem;
  margin-right: .7rem;
  svg + svg {
    margin-left: 1rem;
  }
`;
