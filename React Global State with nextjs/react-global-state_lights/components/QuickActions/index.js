import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onAllLightsOn,
  onAllLightsOff,
  isAllLightsOn,
  isAllLightsOff,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        disabled={isAllLightsOff}
        onClick={() => onAllLightsOff()}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={isAllLightsOn}
        type="button"
        onClick={() => onAllLightsOn()}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
