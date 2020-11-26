/** @jsx jsx */
import { jsx, Button, Slider } from "theme-ui";
import Navigation from "../../Navigation/Navigation";
import TemplateSelection from "./TemplateSelection/TemplateSelection";
import BasicInfo from "./BasicInfo/BasicInfo";
import SocialLinks from "./SocialLinks/SocialLinks";
import WorkExperience from "./WorkExperience/WorkExperience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Languages from "./Languages/Languages";
import { Provider, useDispatch, useSelector } from "react-redux";
import { goToNextStep } from "../../../slices/steps";
import Preview from "./PreviewSection/PreviewSection";
import { renderToString } from "react-dom/server";
import html2pdf from "html2pdf.js";
import {
  Switch,
  Route,
  BrowserRouter,
  NavLink,
  Redirect,
} from "react-router-dom";

import Work from "./WorkExperience/Work";
import Classic from "../../Templates/Classic/Classic";
import { useState } from "react";
import EducationIndex from "./Education/EducationIndex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import store from "../../../app/store";
import { getIcons } from "../../Templates/Classic/icons/icons";

const Steps = ({ currentStep }) => {
  const dispatch = useDispatch();
  const {
    lastestEducationEntry,
    latestWorkExperience,
    workExperienceEntries,
    educationEntries,
    basicInfoEntries,
  } = useSelector((state) => {
    return {
      workExperienceEntries: state.experiences.entries,
      educationEntries: state.education.entries,
      basicInfoEntries: state.basicInfo.entries,
      lastestEducationEntry: state.education.entries[0],
      latestWorkExperience: state.experiences.entries[0],
    };
  });

  const renderStep = (step, props) => {
    const {
      latestWorkExperience,
      lastestEducationEntry,
      basicInfoEntries,
    } = props;
    if (step === "STEP_1") {
      return <TemplateSelection {...props} />;
    }
    if (step === "STEP_2") {
      return <BasicInfo {...props} entry={basicInfoEntries[0]} />;
    }
    if (step === "STEP_3") {
      return <SocialLinks {...props} />;
    }
    if (step === "STEP_4") {
      return <WorkExperience entry={latestWorkExperience} />;
    }
    if (step === "STEP_5") {
      return <Education entry={lastestEducationEntry} />;
    }
    if (step === "STEP_6") {
      return <Skills {...props} />;
    }
    if (step === "STEP_7") {
      return <Languages {...props} />;
    }
    return <div />;
  };

  return currentStep ? (
    <div sx={{ padding: 40 }}>
      <div>
        <div sx={{ variant: "container", width: "40vw" }}>
          {renderStep(currentStep, {
            latestWorkExperience,
            lastestEducationEntry,
            basicInfoEntries,
          })}
        </div>
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
          <NavLink
            sx={{ m: "10px 30px", color: "text" }}
            variant="primary"
            to="/overview"
            activeStyle={{
              backgroundColor: "#82cbcd",
              color: "white",
              padding: 10,
              borderRadius: 4,
            }}
          >
            Overview
          </NavLink>
          <NavLink
            sx={{ m: "10px 30px", color: "text" }}
            activeStyle={{
              backgroundColor: "#82cbcd",
              color: "white",
              padding: 10,
              borderRadius: 4,
            }}
            variant="primary"
            to="/basic"
          >
            Basic Info
          </NavLink>
          <NavLink
            sx={{ m: "10px 30px", color: "text" }}
            activeStyle={{
              backgroundColor: "#82cbcd",
              color: "white",
              padding: 10,
              borderRadius: 4,
            }}
            variant="primary"
            to="/social"
          >
            Social Links
          </NavLink>
          <NavLink
            sx={{ m: "10px 30px", color: "text" }}
            activeStyle={{
              backgroundColor: "#82cbcd",
              color: "white",
              padding: 10,
              borderRadius: 4,
            }}
            to="/work"
          >
            Work Experience
          </NavLink>
          <NavLink
            sx={{ m: "10px 30px", color: "text" }}
            activeStyle={{
              backgroundColor: "#82cbcd",
              color: "white",
              padding: 10,
              borderRadius: 4,
            }}
            to="/education"
          >
            Education
          </NavLink>
          <NavLink
            sx={{ m: "10px 30px", color: "text" }}
            activeStyle={{
              backgroundColor: "#82cbcd",
              color: "white",
              padding: 10,
              borderRadius: 4,
            }}
            to="/skills"
          >
            Skills
          </NavLink>
          <NavLink
            activeStyle={{
              backgroundColor: "#82cbcd",
              color: "white",
              padding: 10,
              borderRadius: 4,
            }}
            sx={{ m: "10px 30px", color: "text" }}
            to="/languages"
          >
            Languages
          </NavLink>
        </div>
        <div sx={{ padding: 40, flex: 1, ml: 40, paddingLeft: 250 }}>
          <Switch>
            <Route path="/basic">
              <BasicInfo entry={basicInfoEntries[0]} />
            </Route>
            <Route path="/social">
              <SocialLinks />
            </Route>
            <Route path="/work">
              <Work
                title="Work Experience"
                type="work"
                items={workExperienceEntries}
              />
            </Route>
            <Route path="/education">
              <EducationIndex
                title="Education"
                type="education"
                items={educationEntries}
              />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/languages">
              <Languages />
            </Route>
            <Route path="/overview">
              <div>
                <ZoomControl initialZoom={0.8}>
                  {({ zoom, setZoom }) => {
                    return (
                      <div>
                        <Classic
                          scale={zoom}
                          bordered={true}
                          settings={{ color: "red" }}
                        />
                        <div
                          sx={{
                            position: "fixed",
                            bottom: 20,
                            p: 20,
                            zIndex: 4,
                          }}
                        >
                          <Slider
                            defaultValue={zoom * 100}
                            onChange={(e) => {
                              setZoom(e.target.value / 100);
                            }}
                          />
                        </div>
                      </div>
                    );
                  }}
                </ZoomControl>
                <div sx={{ variant: "sideMenu", width: 100, right: 0 }}>
                  <h4>Settings</h4>
                </div>
              </div>
            </Route>
            <Route path="/">
              <Redirect to="/overview" />
            </Route>
          </Switch>
          <Button
            sx={{ position: "fixed", right: 40, bottom: 40 }}
            onClick={async () => {
              const icons = await getIcons("social", true);
              const e = document.createElement("div");

              var opt = {
                margin: 0.5,
                filename: "CV.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 5 },
                jsPDF: {
                  unit: "in",
                  format: "letter",
                  orientation: "portrait",
                },
              };

              e.innerHTML = renderToString(
                <Provider store={store}>
                  <Classic scale={1} printMode={true} icons={icons} />
                </Provider>
              );

              html2pdf(e, opt);
            }}
          >
            <FontAwesomeIcon sx={{ mr: 10 }} icon={faDownload} />
            Download
          </Button>
        </div>
      </BrowserRouter>
      <canvas style={{ position: "absolute", left: "-10000000000000px" }} />
      <img id="temp" />
    </div>
  );
};

const ZoomControl = ({ initialZoom = 1, children }) => {
  const [zoom, setZoom] = useState(initialZoom);
  return children({ zoom, setZoom });
};

export default Steps;
