<?php
   $destino = "contacto@decorksa.mx";
   $nombre = $_POST["name"];
   $apellido = $_POST["lastName"]
   $telefono = $_POST["number"];
   $email = $_POST["email"];
   $mensaje = $_POST["text"];
   $contenido = "Nombre:"  . $nombre . "\nApellido:"  . $apellido  . "\nTeléfono:"  . $telefono .  "?
   \nEmail:"  .$email  . "\nMensaje:"  . $mensaje;
   mail($destino,"Contacto", $contenido);
   header("Location:thanks.html");
?>