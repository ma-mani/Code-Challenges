import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  onAllLightsOn,
  onAllLightsOff,
  isAllLightsOn,
  isAllLightsOff,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onAllLightsOn={onAllLightsOn}
        onAllLightsOff={onAllLightsOff}
        isAllLightsOn={isAllLightsOn}
        isAllLightsOff={isAllLightsOff}
      />
    </>
  );
}
