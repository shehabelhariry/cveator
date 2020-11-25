export function svgToPng(svg, callback) {
  const url = getSvgUrl(svg);
  const svgImage = svgUrlToPng(url, (imgData) => {
    callback(imgData);
    URL.revokeObjectURL(url);
  });
}

function getSvgUrl(svg) {
  return URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
}

function svgUrlToPng(svgUrl, callback) {
  const svgImage = document.createElement("img");
  svgImage.style.position = "absolute";
  svgImage.style.left = "-100000px";
  document.body.appendChild(svgImage);
  svgImage.onload = function () {
    const canvas = document.createElement("canvas");
    canvas.width = svgImage.clientWidth;
    canvas.height = svgImage.clientHeight;
    const canvasCtx = canvas.getContext("2d");
    canvasCtx.drawImage(svgImage, 0, 0);
    const imgData = canvas.toDataURL("image/png");
    callback(imgData);
  };
  svgImage.src = svgUrl;
  return svgImage;
}
