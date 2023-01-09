"use strict";

const file = document.getElementById("file");
file.addEventListener("change", (e) => {
  fileReader(file.files);
});

const fileReader = (ar) => {
  for (let i = 0; i < ar.length; i++) {
    const reader = new FileReader();
    reader.readAsDataURL(ar[i]);
    reader.addEventListener("load", (e) => {
      let newAudio = `<audio controls src='${e.currentTarget.result}'>`;
      let titleOne = `<h1 contenteditable="true">Modifica este título</h1>`;
      document.querySelector(".resultado").innerHTML += titleOne;
      document.querySelector(".resultado").innerHTML += newAudio += "<hr>";
    });
  }
};
