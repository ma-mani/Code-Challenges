import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import StyledBox from "@/components/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <FlexWrapper>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox></StyledBox>
      <StyledBox $isBlack></StyledBox>
    </FlexWrapper>
  );
}

const FlexWrapper = styled.div`
  display: flex;
`;
