import styled, { css } from 'styled-components';

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const InputContainer = styled.div`
  width: 37.7rem;
  height: 5.6rem;

  background-color: transparent;

  border: 1px solid rgba(122, 122, 122, 0.4);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.6rem 1.8rem;
  margin-top: .6rem;
  input {
    background-color: transparent;
    outline: none;

    width: 90%;
    height: 100%;

    font-weight: 600;
    font-size: 1.8rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray};
      font-weight: 600;
      font-size: 1.8rem;
    }
  }
`;