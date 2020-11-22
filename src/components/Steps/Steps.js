/** @jsx jsx */
import { useState } from "react";
import { jsx, Button, NavLink } from "theme-ui";
import Navigation from "../Navigation/Navigation";
import TemplateSelection from "./TemplateSelection/TemplateSelection";
import BasicInfo from "./BasicInfo/BasicInfo";
import SocialLinks from "./SocialLinks/SocialLinks";
import WorkExperience from "./WorkExperience/WorkExperience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Languages from "./Languages/Languages";
import { useDispatch } from "react-redux";
import { goToNextStep } from "../../features/steps/steps";
import Preview from "./PreviewSection/PreviewSection";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Classic from "../Templates/Classic/Classic";

const Steps = ({ currentStep }) => {
  const dispatch = useDispatch();

  const STEPS = {
    STEP_1: <TemplateSelection />,
    STEP_2: <BasicInfo />,
    STEP_3: <SocialLinks />,
    STEP_4: <WorkExperience />,
    STEP_5: <Education />,
    STEP_6: <Skills />,
    STEP_7: <Languages />,
  };

  return currentStep ? (
    <div sx={{ padding: 40 }}>
      <div>
        <div sx={{ variant: "container" }}>{STEPS[currentStep]}</div>
        {currentStep === "STEP_7" ? <Preview /> : null}
      </div>
      <Navigation
        position="bottom"
        children={
          <Button
            onClick={() => {
              dispatch(goToNextStep());
            }}
          >
            Next
          </Button>
        }
      />
    </div>
  ) : (
    <div sx={{ display: "flex", width: "100%" }}>
      <BrowserRouter sx={{ display: "flex" }}>
        <div
          sx={{
            variant: "sideMenu",
            display: "flex",
            flexDirection: "column",
            pt: 20,
          }}
        >
          <Link sx={{ m: 10 }} variant="primary" to="/overview">
            Overview
          </Link>
          <Link sx={{ m: 10 }} variant="primary" to="/basic">
            Basic Info
          </Link>
          <Link sx={{ m: 10 }} to="/education">
            Education
          </Link>
          <Link sx={{ m: 10 }} to="/work">
            Work Experience
          </Link>
        </div>
        <div sx={{ padding: 40, flex: 1 }}>
          <Switch>
            <Route path="/basic">
              <BasicInfo />
            </Route>
            <Route path="/social">
              <SocialLinks />
            </Route>
            <Route path="/work">
              <WorkExperience />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/languages">
              <Languages />
            </Route>
            <Route path="/overview">
              <div>Overview</div>
            </Route>
            <Route path="/">
              <div>Overview</div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default Steps;
