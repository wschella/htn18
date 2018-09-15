console.log("Hello world");

var cv;

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    var s;
    s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

loadScript("app/opencv/opencv.js")
  .catch(error => console.log(error))
  .then(() => {
    document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
    cv = window.cv;
    main();
  }).catch(error => console.log(error));

function main() {
  console.log(cv);
  let imgElement = document.getElementById('imageSrc');
  let inputElement = document.getElementById('fileInput');
  inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
  }, false);
  imgElement.onload = function() {
    let src = cv.imread(imgElement);
    let dst = new cv.Mat();
    cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
    cv.imshow('canvasOutput', dst);
    src.delete();
    dst.delete();
  };
}