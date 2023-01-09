"use strict";

const file = document.getElementById("file");
file.addEventListener("change", (e) => {
  fileReader(file.files);
});

let result = document.querySelector(".result");

const fileReader = (ar) => {
  for (let i = 0; i < ar.length; i++) {
    const reader = new FileReader();
    reader.readAsDataURL(ar[i]);
    reader.addEventListener("load", (e) => {
      let newAudio = `<audio controls src='${e.currentTarget.result}'>`;
      let titleOne = `<h1 contenteditable="true">Modifica este título</h1>`;
      let contentP = `<p contenteditable="true">Agrega una descripción aquí</p>`;
      result.style.display = "flex";
      result.innerHTML += titleOne;
      result.innerHTML += contentP;
      result.innerHTML += newAudio += "<hr>";
    });
  }
};
