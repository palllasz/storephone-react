import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid;
  border-color: ${props => (props.cart ? "#ffa400" : "blue")};
  color: ${props => (props.cart ? "#ffa400" : "blue")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${props => (props.cart ? "#ffa400" : "#009ffd")};
    color: ${props => (props.cart ? "black" : "black")};
  }
  &:focus {
    outline: none;
  }
`;
