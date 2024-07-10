import { createSignal } from "solid-js";
// import photo1 from "./assets/img/tesla-model-x-1.webp"
// import photo2 from "./assets/img/tesla-model-x-2.webp"
// import photo3 from "./assets/img/tesla-model-x-3.webp"

const photos = [
  "https://sirv.sirv.com/website/demos/tesla-model-x-1.jpg",
  "https://sirv.sirv.com/website/demos/tesla-model-x-2.jpg",
  "https://sirv.sirv.com/website/demos/tesla-model-x-3.jpg",
];

// const photos = [
//     photo1, photo2, photo3
// ];

const [currentIndex, setCurrentIndex] = createSignal(0);

const nextPhoto = () => {
  setCurrentIndex((current) => (current + 1) % photos.length);
};

const prevPhoto = () => {
  setCurrentIndex((current) => (current - 1 + photos.length) % photos.length);
};

function PhotoGallery() {
  return (
    <div class="flex w-1/2 justify-center">
      <button onClick={prevPhoto} disabled={currentIndex() === 0}>Previous</button>
      <img src={photos[currentIndex()]} alt="Photo" style="width: 600px; height: 400px;" />
      <button onClick={nextPhoto} disabled={currentIndex() === photos.length - 1}>Next</button>
    </div>
  );
}


export default PhotoGallery
