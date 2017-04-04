function validateForm(){
	/* Escribe tú código aquí */
var nombre = document.getElementById("name");
var apellido=document.getElementById("lastname");
var correo = document.getElementById("input-email");
var contrasena = document.getElementById("input-password");
var combo= document.getElementsByClassName("form-control")[0].selectedIndex;

/*if(nombre.value==""){
  document.getElementById("spanNombre").style.display="inline-block";
  document.getElementById("spanNombre").innerHTML=" este campo no puede esrar vacio";
}else {
  document.getElementById("spanNombre").style.display="none";
}*/
  if(nombre.value==""){
    var divNombre= document.getElementsByClassName("name-container")[0];
    var span = document.createElement("span");
    span.setAttribute("class","spanNombre");
    var lista = document.getElementsByClassName("spanNombre");
    span.innerHTML = "Debe ingresar su nombre";
    divNombre.appendChild(span);
  /

  if(/[0-9]/.test(nombre.value)){
    var divNombre= document.getElementsByClassName("name-container")[0];
    var span = document.createElement("span");
    span.setAttribute("class","spanNombre");
    span.innerHTML = "Ingrese solo letras";
    divNombre.appendChild(span);
  }

    if(nombre.value.charAt(0).toUpperCase() != nombre.value.charAt(0) ){
      var divNombre= document.getElementsByClassName("name-container")[0];
      var span = document.createElement("span");
      span.setAttribute("class","spanNombre");
      span.innerHTML = "Ingrese la primera letra en mayusculas";
      divNombre.appendChild(span);
  }

    if(!apellido.value || apellido.value==""){
      var divApellido= document.getElementsByClassName("lastname-container")[0];
      var span = document.createElement("span");
      span.innerHTML = "Debe ingresar su Apellido";
      divApellido.appendChild(span);
    }

  if(/[0-9]/.test(apellido.value)){
    var divApellido= document.getElementsByClassName("lastname-container")[0];
    var span = document.createElement("span");
    span.innerHTML = "Ingrese solo letras";
    divApellido.appendChild(span);
  }

  if(apellido.value.charAt(0).toUpperCase() != apellido.value.charAt(0) ){
    var divApellido= document.getElementsByClassName("lastname-container")[0];
    var span = document.createElement("span");
    span.innerHTML = "Ingrese la primera letra en mayusculas";
    divApellido.appendChild(span);
  }
  if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/.test(correo.value)){
  } else if(correo.value == ""){
    var divEmail= document.getElementsByClassName("email-container")[0];
    var span = document.createElement("span");
    span.innerHTML = "Escriba su correo";
    divEmail.appendChild(span);
  } else{
    var divEmail= document.getElementsByClassName("email-container")[0];
    var span = document.createElement("span");
    span.innerHTML = "Verifique su Email";
    divEmail.appendChild(span);
  }
  if(contrasena.value == "password"|| contrasena.value == "123456" || contrasena.value == "098754"){
    var divContrasena= document.getElementsByClassName("form-group")[0];
    var span = document.createElement("span");
    span.innerHTML = "Ingrese otra contraseña";
    divContrasena.appendChild(span);

  } else if(/.{6,}/.test(contrasena.value)){

  } else{
    var divContrasena= document.getElementsByClassName("form-group")[0];
    var span = document.createElement("span");
    span.innerHTML = "La contraseña debe tener al menos 6 caracteres";
    divContrasena.appendChild(span);
  }

  if( combo == null || combo == 0 ) {
    var divOpciones= document.getElementsByClassName("form-group")[1];
    var span = document.createElement("span");
    span.innerHTML = "Debes seleccionar al menos un tipo de bici";
    divOpciones.appendChild(span);
  }
}
