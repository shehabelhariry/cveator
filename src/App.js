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

  const currentStep = "STEP_1";

  return (
    <div>
      <Navigation
        position="top"
        children={
          <div sx={{ variant: "logo" }}>
            <img src={Logo} sx={{ width: 200 }} />
          </div>
        }
      />
      <div
        sx={{
          padding: 40,
          height: "calc(100vh - 82px)",
          position: "relative",
          top: 82,
        }}
      >
        <Steps currentStep={currentStep} />
      </div>
    </div>
    // <div className="cveator App">
    //   <div className="cveator-controls">
    //     <Nav variant="pills" activeKey="1" onSelect={() => {}}>
    //       <Nav.Item>
    //         <Nav.Link eventKey={1} href="#/home">
    //           Header
    //         </Nav.Link>
    //       </Nav.Item>
    //       {sections.map((section, index) => (
    //         <Nav.Item>
    //           <Nav.Link eventKey={index + 2} href="#/home">
    //             {section.title}
    //           </Nav.Link>
    //         </Nav.Item>
    //       ))}
    //       <Button className="mt-5" variant="secondary">
    //         Add Section
    //       </Button>
    //     </Nav>
    //     <Form ref={formRef}>
    //       <h3 className="text-center">
    //         <Badge variant="info">Header</Badge>
    //       </h3>

    //       <Form.Group controlId="name">
    //         <Form.Label>Name</Form.Label>
    //         <Form.Control
    //           type="text"
    //           placeholder="Name"
    //           name="name"
    //           defaultValue={headerInfo.name}
    //           onChange={handleChange}
    //         />
    //       </Form.Group>
    //       <Form.Group controlId="title">
    //         <Form.Label>Title</Form.Label>
    //         <Form.Control
    //           type="text"
    //           name="title"
    //           placeholder="text"
    //           defaultValue={headerInfo.title}
    //           onChange={handleChange}
    //         />
    //       </Form.Group>

    //       {headerInfo.links.map((link, index) => {
    //         return (
    //           <Form.Group controlId={link.id + "link"} key={link.id}>
    //             <h5>Link {index + 1}</h5>
    //             <Form.Control
    //               type="text"
    //               placeholder="text"
    //               defaultValue={link.image}
    //               name={`links[${index}]_image`}
    //               onChange={handleChange}
    //             />
    //             <Form.Control
    //               type="text"
    //               placeholder="text"
    //               defaultValue={link.label}
    //               name={`links[${index}]_label`}
    //               onChange={handleChange}
    //             />
    //             <Form.Control
    //               type="text"
    //               placeholder="text"
    //               defaultValue={link.url}
    //               name={`links[${index}]_url`}
    //               onChange={handleChange}
    //             />
    //           </Form.Group>
    //         );
    //       })}
    //       <Button
    //         variant="secondary"
    //         className="mt-3"
    //         onClick={() => {
    //           const newLink = {
    //             id: new Date().getTime(),
    //             url: "",
    //             label: "",
    //           };
    //           setHeaderInfo((old) => {
    //             return {
    //               ...old,
    //               links: [...old.links, newLink],
    //             };
    //           });
    //         }}
    //       >
    //         Add new Link
    //       </Button>
    //     </Form>
    //   </div>
    //   <div className="cveator-container">
    //     <Header {...headerInfo} />
    //     <div className="cveator__section-layout">
    //       {sections.map((section) => {
    //         return <CveatorSection {...section} key={section.title} />;
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
