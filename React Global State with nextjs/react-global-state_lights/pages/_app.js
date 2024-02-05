import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
const initialState = [
  {
    id: "1",
    name: "Living Room",
    isOn: false,
  },
  {
    id: "2",
    name: "Kitchen",
    isOn: false,
  },
  {
    id: "3",
    name: "Bedroom",
    isOn: false,
  },
  {
    id: "4",
    name: "Bathroom",
    isOn: false,
  },
  {
    id: "5",
    name: "Garage",
    isOn: false,
  },
  {
    id: "6",
    name: "Porch",
    isOn: false,
  },
  {
    id: "7",
    name: "Garden",
    isOn: false,
  },
  {
    id: "8",
    name: "Office",
    isOn: false,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialState);

  const turnedOnLightsCount = lights.filter((light) => light.isOn).length;

  const isAllLightsOn = lights.every((light) => light.isOn === true);
  const isAllLightsOff = lights.every((light) => light.isOn === false);

  function handleToggle(newId) {
    setLights(
      lights.map((light) =>
        light.id === newId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleAllLightsToOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }
  function handleAllLightsToOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  return (
    <Layout isDimmed={isAllLightsOff}>
      <GlobalStyle />
      <Component
        onToggle={handleToggle}
        lights={lights}
        {...pageProps}
        turnedOnLightsCount={turnedOnLightsCount}
        onAllLightsOn={handleAllLightsToOn}
        onAllLightsOff={handleAllLightsToOff}
        isAllLightsOn={isAllLightsOn}
        isAllLightsOff={isAllLightsOff}
      />
    </Layout>
  );
}
