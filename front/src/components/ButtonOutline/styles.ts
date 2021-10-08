import styled from 'styled-components';

export const ButtonOutlineStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.7rem;

  width: 100%;
  height: 6rem;

  color: ${({ theme }) => theme.colors.blue};
  background-color: transparent;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.blue};

  font-size: 2.6rem;

  &:hover {
    filter: brightness(.8);
  }
`;
