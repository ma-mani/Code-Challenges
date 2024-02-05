import styled, { css } from "styled-components";

// export default function Box({isBlack}) {
//     return <StyledBox $isBlack={isBlack}></StyledBox>
// }

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};
  margin: 2rem;
`;

export default StyledBox;
