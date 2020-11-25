import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faLink, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faBehance,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

async function svgToBase64Png(svg, width) {
  return new Promise((resolve, reject) => {
    const svgImage = document.createElement("img");
    svgImage.style.position = "absolute";
    svgImage.style.left = "-10000px";

    document.body.appendChild(svgImage);
    svgImage.src = URL.createObjectURL(
      new Blob([svg], { type: "image/svg+xml" })
    );
    svgImage.addEventListener("load", function () {
      const canvas = document.getElementsByTagName("canvas")[0];
      canvas.width = 100;
      canvas.height = 100;
      const canvasCtx = canvas.getContext("2d");
      canvasCtx.drawImage(svgImage, 0, 0);
      const imgData = canvas.toDataURL("image/png");
      resolve(imgData);
    });
  });
}

const icons = {
  social: {
    linkedIn: <FontAwesomeIcon icon={faLinkedin} size="2x" />,
    github: <FontAwesomeIcon icon={faGithub} size="2x" />,
    behance: <FontAwesomeIcon icon={faBehance} size="2x" />,
    medium: <FontAwesomeIcon icon={faMedium} size="2x" />,
    website: <FontAwesomeIcon icon={faLink} size="2x" />,
    phone: <FontAwesomeIcon icon={faPhone} size="2x" />,
    address: <FontAwesomeIcon icon={faInbox} size="2x" />,
  },
};

export async function getIcons(key, printMode = false) {
  if (printMode) {
    const entries = Object.entries(icons[key]);
    const encodedIcons = entries.map(([__, icon]) =>
      renderToStaticMarkup(icon)
    );
    try {
      const iconsBase64 = await Promise.all(
        encodedIcons.map((icon) => svgToBase64Png(icon, 30))
      );
      return Object.fromEntries(
        entries.map(([label, icon], index) => [label, iconsBase64[index]])
      );
    } catch (e) {
      //   console.log(e);
    }
  }
  return icons[key];
}
