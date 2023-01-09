"use strict";

const audioFile = document.getElementById("audio-file");
audioFile.addEventListener("change", (e) => {
  fileReader(audioFile.files);
});

let result = document.querySelector(".result");
// let titleOne = `<h1 contenteditable="true">Modifica este título</h1>`;
// let contentP = `<p contenteditable="true">Agrega una descripción aquí</p>`;

const fileReader = (ar) => {
  for (let i = 0; i < ar.length; i++) {
    const reader = new FileReader();
    reader.readAsDataURL(ar[i]);
    reader.addEventListener("load", (e) => {
      let newAudio = `<audio controls src='${e.currentTarget.result}'>`;

      result.style.display = "flex";
      // result.innerHTML += titleOne;
      // result.innerHTML += contentP;
      result.innerHTML += newAudio += "<hr>";
    });
  }
};
