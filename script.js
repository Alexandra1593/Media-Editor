//  //Edit video controls
//   const videoSpeed = document.getElementById("videoSpeed");
// const videoSpeedValue = document.getElementById("videoSpeedValue");

// const videoVolume = document.getElementById("videoVolume");
// const videoVolumeValue = document.getElementById("videoVolumeValue");

// const videoFilterSelect = document.getElementById("videoFilterSelect");

// const playVideoBtn = document.getElementById("playVideoBtn");
// const pauseVideoBtn = document.getElementById("pauseVideoBtn");
// const muteVideoBtn = document.getElementById("muteVideoBtn");
// const backwardVideoBtn = document.getElementById("backwardVideoBtn");
// const forwardVideoBtn = document.getElementById("forwardVideoBtn");
// const resetVideoBtn = document.getElementById("resetVideoBtn");


// videoSpeed.addEventListener("input", () => {
//   videoSpeedValue.textContent = videoSpeed.value;
//   videoPreview.playbackRate = parseFloat(videoSpeed.value);
// });

// videoVolume.addEventListener("input", () => {
//   videoVolumeValue.textContent = videoVolume.value;
//   videoPreview.volume = parseFloat(videoVolume.value);
// });

// videoFilterSelect.addEventListener("change", () => {
//   videoPreview.style.filter = videoFilterSelect.value;
// });
// playVideoBtn.addEventListener("click", () => {
//   if (!videoPreview.src) {
//     alert("Please upload a video first.");
//     return;
//   }
//   videoPreview.play();
// });

// pauseVideoBtn.addEventListener("click", () => {
//   if (!videoPreview.src) {
//     alert("Please upload a video first.");
//     return;
//   }
//   videoPreview.pause();
// });

// muteVideoBtn.addEventListener("click", () => {
//   if (!videoPreview.src) {
//     alert("Please upload a video first.");
//     return;
//   }
//   videoPreview.muted = !videoPreview.muted;
// });

// backwardVideoBtn.addEventListener("click", () => {
//   if (!videoPreview.src) {
//     alert("Please upload a video first.");
//     return;
//   }
//   videoPreview.currentTime = Math.max(0, videoPreview.currentTime - 5);
// });

// forwardVideoBtn.addEventListener("click", () => {
//   if (!videoPreview.src) {
//     alert("Please upload a video first.");
//     return;
//   }
//   videoPreview.currentTime = Math.min(videoPreview.duration || Infinity, videoPreview.currentTime + 5);
// });

// resetVideoBtn.addEventListener("click", () => {
//   if (!videoPreview.src) {
//     alert("Please upload a video first.");
//     return;
//   }

//   videoPreview.pause();
//   videoPreview.currentTime = 0;
//   videoPreview.playbackRate = 1;
//   videoPreview.volume = 1;
//   videoPreview.muted = false;
//   videoPreview.style.filter = "none";

//   videoSpeed.value = 1;
//   videoSpeedValue.textContent = 1;

//   videoVolume.value = 1;
//   videoVolumeValue.textContent = 1;

//   videoFilterSelect.value = "none";
// });



// //Image editing controls


//     const filterSelect = document.getElementById("filterSelect");
// const brightnessRange = document.getElementById("brightnessRange");
// const brightnessValue = document.getElementById("brightnessValue");
//     const imageInput = document.getElementById("imageInput");
//     const videoInput = document.getElementById("videoInput");

//     const resizeWidth = document.getElementById("resizeWidth");
//     const resizeHeight = document.getElementById("resizeHeight");
//     const rotationAngle = document.getElementById("rotationAngle");
//     const blurRange = document.getElementById("blurRange");
//     const qualityRange = document.getElementById("qualityRange");

//     const blurValue = document.getElementById("blurValue");
//     const qualityValue = document.getElementById("qualityValue");

//     const applyBtn = document.getElementById("applyBtn");
//     const cropBtn = document.getElementById("cropBtn");
//     const compressBtn = document.getElementById("compressBtn");
//     const resetBtn = document.getElementById("resetBtn");
//     const downloadBtn = document.getElementById("downloadBtn");

//     const originalPreview = document.getElementById("originalPreview");
//     const originalInfo = document.getElementById("originalInfo");
//     const processedInfo = document.getElementById("processedInfo");

//     const videoPreview = document.getElementById("videoPreview");
//     const videoInfo = document.getElementById("videoInfo");

//     const canvas = document.getElementById("canvas");
//     const ctx = canvas.getContext("2d");

//     let originalImage = new Image();
//     let originalFile = null;
//     let currentDataUrl = null;
//     let currentBlob = null;

//     blurRange.addEventListener("input", () => {
//       blurValue.textContent = blurRange.value;
//     });

//     qualityRange.addEventListener("input", () => {
//       qualityValue.textContent = qualityRange.value;
//     });

//     imageInput.addEventListener("change", (e) => {
//       const file = e.target.files[0];
//       if (!file) return;

//       originalFile = file;
//       const reader = new FileReader();

//       reader.onload = function(event) {
//         originalImage = new Image();
//         originalImage.onload = function() {
//           originalPreview.src = originalImage.src;
//           originalInfo.textContent = `Original size: ${formatBytes(file.size)} | Dimensions: ${originalImage.width} x ${originalImage.height}`;

//           resizeWidth.value = originalImage.width;
//           resizeHeight.value = originalImage.height;
//           rotationAngle.value = 0;
//           blurRange.value = 0;
//           blurValue.textContent = 0;

//           drawImageToCanvas(originalImage, originalImage.width, originalImage.height, 0, 0, "none", 100);
//         };
//         originalImage.src = event.target.result;
//       };

//       reader.readAsDataURL(file);
//     });

//   videoInput.addEventListener("change", (e) => {
//   const file = e.target.files[0];
//   if (!file) return;

//   const url = URL.createObjectURL(file);
//   videoPreview.src = url;
//   videoPreview.load();

//   videoPreview.playbackRate = 1;
//   videoPreview.volume = 1;
//   videoPreview.muted = false;
//   videoPreview.style.filter = "none";

//   videoSpeed.value = 1;
//   videoSpeedValue.textContent = 1;

//   videoVolume.value = 1;
//   videoVolumeValue.textContent = 1;

//   videoFilterSelect.value = "none";

//   videoInfo.textContent = `Video uploaded: ${file.name} | Size: ${formatBytes(file.size)}`;
// });



//     applyBtn.addEventListener("click", () => {
//       if (!originalImage.src) {
//         alert("Please upload an image first.");
//         return;
//       }

// const width = parseInt(resizeWidth.value) || originalImage.width;
// const height = parseInt(resizeHeight.value) || originalImage.height;
// const angle = parseInt(rotationAngle.value) || 0;
// const blur = parseInt(blurRange.value) || 0;
// const selectedFilter = filterSelect.value;
// const brightness = parseInt(brightnessRange.value) || 100;

// drawImageToCanvas(originalImage, width, height, angle, blur, selectedFilter, brightness);
//     });

//     cropBtn.addEventListener("click", () => {
//       if (!originalImage.src) {
//         alert("Please upload an image first.");
//         return;
//       }

//       const minSide = Math.min(originalImage.width, originalImage.height);
//       canvas.width = minSide;
//       canvas.height = minSide;

//       const sx = (originalImage.width - minSide) / 2;
//       const sy = (originalImage.height - minSide) / 2;

//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//      ctx.filter = `blur(${blurRange.value}px) ${filterSelect.value} brightness(${brightnessRange.value}%)`;
//       ctx.drawImage(
//         originalImage,
//         sx, sy, minSide, minSide,
//         0, 0, minSide, minSide
//       );
//       ctx.filter = "none";

//       currentDataUrl = canvas.toDataURL("image/png");
//       processedInfo.textContent = `Cropped square image | Dimensions: ${canvas.width} x ${canvas.height}`;
//     });

//     compressBtn.addEventListener("click", () => {
//       if (!originalImage.src) {
//         alert("Please upload an image first.");
//         return;
//       }

//       const quality = parseFloat(qualityRange.value);

//       canvas.toBlob((blob) => {
//         currentBlob = blob;
//         currentDataUrl = URL.createObjectURL(blob);

//         processedInfo.textContent = `Compressed image size: ${formatBytes(blob.size)} | Quality: ${quality}`;
//       }, "image/jpeg", quality);
//     });

//     resetBtn.addEventListener("click", () => {
//       if (!originalImage.src) {
//         alert("Please upload an image first.");
//         return;
//       }

//       resizeWidth.value = originalImage.width;
//       resizeHeight.value = originalImage.height;
//       rotationAngle.value = 0;
//       blurRange.value = 0;
//       blurValue.textContent = 0;
//       filterSelect.value = "none";
// brightnessRange.value = 100;
// brightnessValue.textContent = 100;
//       qualityRange.value = 0.8;
//       qualityValue.textContent = 0.8;

//       drawImageToCanvas(originalImage, originalImage.width, originalImage.height, 0, 0, "none", 100);
//     });

//     downloadBtn.addEventListener("click", () => {
//       if (!originalImage.src) {
//         alert("Please upload an image first.");
//         return;
//       }

//       const link = document.createElement("a");
//       link.download = "processed-image.jpg";

//       if (currentBlob) {
//         link.href = URL.createObjectURL(currentBlob);
//       } else {
//         link.href = canvas.toDataURL("image/jpeg", parseFloat(qualityRange.value));
//       }

//       link.click();
//     });

//    function drawImageToCanvas(img, width, height, angle, blur, selectedFilter = "none", brightness = 100) {
//   const radians = angle * Math.PI / 180;

//   const tempCanvas = document.createElement("canvas");
//   const tempCtx = tempCanvas.getContext("2d");

//   tempCanvas.width = width;
//   tempCanvas.height = height;

//   tempCtx.clearRect(0, 0, width, height);
//   tempCtx.filter = `blur(${blur}px) ${selectedFilter} brightness(${brightness}%)`;
//   tempCtx.drawImage(img, 0, 0, width, height);
//   tempCtx.filter = "none";

//   const rotatedWidth =
//     Math.abs(Math.cos(radians) * width) + Math.abs(Math.sin(radians) * height);
//   const rotatedHeight =
//     Math.abs(Math.sin(radians) * width) + Math.abs(Math.cos(radians) * height);

//   canvas.width = Math.ceil(rotatedWidth);
//   canvas.height = Math.ceil(rotatedHeight);

//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.save();
//   ctx.translate(canvas.width / 2, canvas.height / 2);
//   ctx.rotate(radians);
//   ctx.drawImage(tempCanvas, -width / 2, -height / 2);
//   ctx.restore();

//   currentBlob = null;
//   currentDataUrl = canvas.toDataURL("image/png");

//   processedInfo.textContent =
//     `Processed image | Dimensions: ${canvas.width} x ${canvas.height} | Filter: ${selectedFilter} | Brightness: ${brightness}%`;
// }

//     function formatBytes(bytes) {
//       if (bytes < 1024) return bytes + " B";
//       if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
//       return (bytes / (1024 * 1024)).toFixed(2) + " MB";
//     }



document.addEventListener("DOMContentLoaded", function () {
// ================= VIDEO CONTROLS =================

const videoPreview = document.getElementById("videoPreview");
const videoInfo = document.getElementById("videoInfo");

const videoSpeed = document.getElementById("videoSpeed");
const videoSpeedValue = document.getElementById("videoSpeedValue");

const videoVolume = document.getElementById("videoVolume");
const videoVolumeValue = document.getElementById("videoVolumeValue");

const videoFilterSelect = document.getElementById("videoFilterSelect");

const playVideoBtn = document.getElementById("playVideoBtn");
const pauseVideoBtn = document.getElementById("pauseVideoBtn");
const muteVideoBtn = document.getElementById("muteVideoBtn");
const backwardVideoBtn = document.getElementById("backwardVideoBtn");
const forwardVideoBtn = document.getElementById("forwardVideoBtn");
const resetVideoBtn = document.getElementById("resetVideoBtn");

// Video sliders
videoSpeed.addEventListener("input", () => {
  videoSpeedValue.textContent = videoSpeed.value;
  videoPreview.playbackRate = parseFloat(videoSpeed.value);
});

videoVolume.addEventListener("input", () => {
  videoVolumeValue.textContent = videoVolume.value;
  videoPreview.volume = parseFloat(videoVolume.value);
});

videoFilterSelect.addEventListener("change", () => {
  videoPreview.style.filter = videoFilterSelect.value;
});

// Video buttons
playVideoBtn.onclick = () => videoPreview.src ? videoPreview.play() : alert("Upload video first");
pauseVideoBtn.onclick = () => videoPreview.src ? videoPreview.pause() : alert("Upload video first");
muteVideoBtn.onclick = () => videoPreview.src ? videoPreview.muted = !videoPreview.muted : alert("Upload video first");

backwardVideoBtn.onclick = () => {
  if (!videoPreview.src) return alert("Upload video first");
  videoPreview.currentTime = Math.max(0, videoPreview.currentTime - 5);
};

forwardVideoBtn.onclick = () => {
  if (!videoPreview.src) return alert("Upload video first");
  videoPreview.currentTime = Math.min(videoPreview.duration || Infinity, videoPreview.currentTime + 5);
};

resetVideoBtn.onclick = () => {
  if (!videoPreview.src) return alert("Upload video first");

  videoPreview.pause();
  videoPreview.currentTime = 0;
  videoPreview.playbackRate = 1;
  videoPreview.volume = 1;
  videoPreview.muted = false;
  videoPreview.style.filter = "none";

  videoSpeed.value = 1;
  videoSpeedValue.textContent = 1;

  videoVolume.value = 1;
  videoVolumeValue.textContent = 1;

  videoFilterSelect.value = "none";
};

// ================= IMAGE CONTROLS =================

const imageInput = document.getElementById("imageInput");
const videoInput = document.getElementById("videoInput");

const resizeWidth = document.getElementById("resizeWidth");
const resizeHeight = document.getElementById("resizeHeight");
const rotationAngle = document.getElementById("rotationAngle");
const blurRange = document.getElementById("blurRange");
const qualityRange = document.getElementById("qualityRange");

const filterSelect = document.getElementById("filterSelect");
const brightnessRange = document.getElementById("brightnessRange");

const blurValue = document.getElementById("blurValue");
const qualityValue = document.getElementById("qualityValue");
const brightnessValue = document.getElementById("brightnessValue");

const applyBtn = document.getElementById("applyBtn");
const cropBtn = document.getElementById("cropBtn");
const compressBtn = document.getElementById("compressBtn");
const resetBtn = document.getElementById("resetBtn");
const downloadBtn = document.getElementById("downloadBtn");

const originalPreview = document.getElementById("originalPreview");
const originalInfo = document.getElementById("originalInfo");
const processedInfo = document.getElementById("processedInfo");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let originalImage = new Image();
let currentBlob = null;

// ================= LIVE UPDATE FUNCTION =================

function updateImagePreviewLive() {
  if (!originalImage.src) return;

  const width = parseInt(resizeWidth.value) || originalImage.width;
  const height = parseInt(resizeHeight.value) || originalImage.height;
  const angle = parseInt(rotationAngle.value) || 0;
  const blur = parseInt(blurRange.value) || 0;
  const filter = filterSelect.value;
  const brightness = parseInt(brightnessRange.value) || 100;

  drawImageToCanvas(originalImage, width, height, angle, blur, filter, brightness);
}

// ================= IMAGE LOAD =================

imageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = (event) => {
    originalImage = new Image();

    originalImage.onload = () => {
      originalPreview.src = originalImage.src;

      originalInfo.textContent =
        `Size: ${formatBytes(file.size)} | ${originalImage.width}x${originalImage.height}`;

      // Reset controls
      resizeWidth.value = originalImage.width;
      resizeHeight.value = originalImage.height;
      rotationAngle.value = 0;

      blurRange.value = 0;
      blurValue.textContent = 0;

      brightnessRange.value = 100;
      brightnessValue.textContent = 100;

      filterSelect.value = "none";

      qualityRange.value = 0.8;
      qualityValue.textContent = 0.8;

      updateImagePreviewLive();
    };

    originalImage.src = event.target.result;
  };

  reader.readAsDataURL(file);
});

// ================= VIDEO LOAD =================

videoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  videoPreview.src = url;
  videoPreview.load();

  videoPreview.playbackRate = 1;
  videoPreview.volume = 1;
  videoPreview.style.filter = "none";

  videoInfo.textContent = `Video: ${file.name} | ${formatBytes(file.size)}`;
});

// ================= LIVE CONTROLS =================

blurRange.oninput = () => {
  blurValue.textContent = blurRange.value;
  updateImagePreviewLive();
};

brightnessRange.oninput = () => {
  brightnessValue.textContent = brightnessRange.value;
  updateImagePreviewLive();
};

rotationAngle.oninput = updateImagePreviewLive;

filterSelect.onchange = updateImagePreviewLive;

resizeWidth.onchange = updateImagePreviewLive;
resizeHeight.onchange = updateImagePreviewLive;

qualityRange.oninput = () => {
  qualityValue.textContent = qualityRange.value;
};

// ================= ACTION BUTTONS =================

applyBtn.onclick = updateImagePreviewLive;

cropBtn.onclick = () => {
  if (!originalImage.src) return alert("Upload image first");

  const size = Math.min(originalImage.width, originalImage.height);
  canvas.width = size;
  canvas.height = size;

  ctx.filter = `blur(${blurRange.value}px) ${filterSelect.value} brightness(${brightnessRange.value}%)`;

  ctx.drawImage(
    originalImage,
    (originalImage.width - size) / 2,
    (originalImage.height - size) / 2,
    size,
    size,
    0,
    0,
    size,
    size
  );

  ctx.filter = "none";

  processedInfo.textContent = `Cropped ${size}x${size}`;
};

compressBtn.onclick = () => {
  if (!originalImage.src) return alert("Upload image first");

  canvas.toBlob(
    (blob) => {
      currentBlob = blob;
      processedInfo.textContent = `Compressed: ${formatBytes(blob.size)}`;
    },
    "image/jpeg",
    parseFloat(qualityRange.value)
  );
};

resetBtn.onclick = () => {
  if (!originalImage.src) return alert("Upload image first");

  resizeWidth.value = originalImage.width;
  resizeHeight.value = originalImage.height;
  rotationAngle.value = 0;

  blurRange.value = 0;
  blurValue.textContent = 0;

  brightnessRange.value = 100;
  brightnessValue.textContent = 100;

  filterSelect.value = "none";

  updateImagePreviewLive();
};

downloadBtn.onclick = () => {
  if (!originalImage.src) return alert("Upload image first");

  const link = document.createElement("a");
  link.download = "image.jpg";

  canvas.toBlob(
    (blob) => {
      link.href = URL.createObjectURL(blob);
      link.click();
    },
    "image/jpeg",
    parseFloat(qualityRange.value)
  );
};

// ================= DRAW FUNCTION =================

function drawImageToCanvas(img, width, height, angle, blur, filter, brightness) {
  const radians = angle * Math.PI / 180;

  const tempCanvas = document.createElement("canvas");
  const tempCtx = tempCanvas.getContext("2d");

  tempCanvas.width = width;
  tempCanvas.height = height;

  tempCtx.filter = `blur(${blur}px) ${filter} brightness(${brightness}%)`;
  tempCtx.drawImage(img, 0, 0, width, height);

  const w = Math.abs(Math.cos(radians) * width) + Math.abs(Math.sin(radians) * height);
  const h = Math.abs(Math.sin(radians) * width) + Math.abs(Math.cos(radians) * height);

  canvas.width = Math.ceil(w);
  canvas.height = Math.ceil(h);

  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(radians);
  ctx.drawImage(tempCanvas, -width / 2, -height / 2);
  ctx.restore();

  processedInfo.textContent = `Processed: ${canvas.width}x${canvas.height}`;
}

// ================= UTILS =================

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

});

