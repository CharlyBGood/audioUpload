<?php
$title = $_POST["title"];
$targetDir = "audio/";
$fileName = basename($_FILES["audio-file"]["name"]);
$targetFilePath = $targetDir . $fileName;
$fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

if (move_uploaded_file($_FILES["audio-file"]["tmp_name"], $targetFilePath)) {
  echo "El archivo " . $fileName . " ha sido subido con éxito.";
} else {
  echo "Ha ocurrido un error al subir el archivo.";
}
