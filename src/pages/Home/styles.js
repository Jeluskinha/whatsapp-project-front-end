import styled from "styled-components";

const HomeStyle = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: row;
  background-color: blue;
  ul {
    height: 100vh;
    width: 250px;
    background-color: red;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: scroll;
    overflow-x: hidden;
    li {
      background-color: green;
      h2 {
        text-align: center;
        font-size: var(--fontSize-Middle);
      }
      h3 {
        text-align: center;
        font-size: var(--fontSize-Small);
      }
    }
  }
`;

export default HomeStyle;
