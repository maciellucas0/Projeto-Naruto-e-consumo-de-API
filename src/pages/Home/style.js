import styled from "styled-components";

export const ContainerUl = styled.ul`
  a {
    text-decoration: none;
  }
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;

  max-width: 300px;
  padding: 10px;
  list-style: none;

  background-color: var(--color-tertiary);
  color: black;
  text-align: center;
  border-radius: 10px;
`;
