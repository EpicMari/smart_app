import styled from "styled-components";

export const StyledInput = styled.input`
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  transition: border-width 0.2s linear;

  &:focus {
    outline: solid ${({ theme }) => theme.colors.orange};
  }
`;
