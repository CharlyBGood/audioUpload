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
      // let newAudio = `<audio controls controlsList="nodownload" src='${e.currentTarget.result}'>`;
      let newAudio = `<audio controls controlsList="nodownload" src='${e.currentTarget.result}'>`;
      result.style.display = "flex";
      // result.innerHTML += titleOne;
      // result.innerHTML += contentP;
      result.innerHTML += newAudio += "<hr>";
    });
  }
};

//  upload form

document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let formData = new FormData();
  formData.append("audio-file", document.getElementById("audio-file").files[0]);

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "upload.php", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      alert("Archivo subido con éxito");
    } else {
      alert("Error al subir el archivo");
    }
  };

  xhr.send(formData);
});
