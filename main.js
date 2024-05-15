import PSD from './dist/'

const input = document.querySelector("#input");
const list = document.querySelector("#list");

input.addEventListener("change", async (e) => {
  var files = event.target.files;
  const fileURL = window.URL.createObjectURL(files[0]);

  const psd = await PSD.fromURL(fileURL);

  const _layers = psd.layers;

  console.log("_layers: ", _layers);

  const layersMapping = [];
  for (const layer of _layers) {
    try {
      console.log("layer.image; ", layer.image);
      const imgSrc = await layer.image.toBase64();
      layersMapping.push({ imgSrc: imgSrc, id: _.uniqueId(), ...layer });
    } catch (e) {
      console.error(e);
    }
  }
  console.log("layersMapping; ", layersMapping);

  layersMapping.forEach((l) => {
    const html = `<img src="${l.imgSrc}"/>`;

    list.insertAdjacentHTML("beforeend", html);
  });
});
