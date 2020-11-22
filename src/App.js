/** @jsx jsx */
import { jsx, Box, Button } from "theme-ui";
import { useRef, useState } from "react";
import "./App.css";
import "pattern.css/dist/pattern.css";

import Header from "./components/Header/Header";
import CveatorSection from "./components/Section/CveatorSection";
import { sections as secs, headerInfo as headinfo } from "./sections";
import { Badge, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import Steps from "./components/Steps/Steps";
import DeskImage from "./assets/images/desk.jpg";
import Logo from "./assets/images/logo.png";
import StepsIndicator from "./components/Steps/StepsIndicator/StepsIndicator";
import { useSelector } from "react-redux";
import { getStepIndex } from "./features/steps/steps";

function App() {
  const formRef = useRef();
  const [headerInfo, setHeaderInfo] = useState(headinfo);
  const [sections, setSections] = useState(secs);

  const handleChange = () => {
    var formData = new FormData(formRef.current);
    const updatedHeaderInfo = {
      name: formData.get("name"),
      title: formData.get("title"),
      links: headerInfo?.links.map((l, index) => {
        return {
          id: l.id,
          label: formData.get(`links[${index}]_label`),
          image: formData.get(`links[${index}]_image`),
          url: formData.get(`links[${index}]_url`),
        };
      }),
    };

    setHeaderInfo(updatedHeaderInfo);
  };

  const { steps, currentStep } = useSelector((state) => {
    return { steps: state.steps.steps, currentStep: state.steps.currentStep };
  });

  const stepIndex = useSelector((state) => getStepIndex(state.steps));

  return (
    <div>
      <Navigation
        position="top"
        children={
          <div
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              width: "100%",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <div />
            <div>
              <img src={Logo} sx={{ width: 200 }} />
            </div>
            {currentStep ? (
              <StepsIndicator allSteps={steps.length} currentStep={stepIndex} />
            ) : null}
          </div>
        }
      />
      <div
        sx={{
          height: "calc(100vh - 82px)",
          position: "relative",
          top: 82,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Steps currentStep={currentStep} />
      </div>
    </div>
  );
}

export default App;
