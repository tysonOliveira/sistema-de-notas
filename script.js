const fields = document.querySelectorAll("[required]")

//console.log(fields)

function customValidation(event) {
  const field = event.target

  function verifyErrors() {
    let foundError = false;

    for(let error in field.validity) {
      
      if (error != "customError" && field.validity[error]) {
        foundError = error;
      }
    }
    document.getElementById().in
    return foundError;
  }

  const error = verifyErrors()
  console.log("Error exists: ", error)

  if (error) {
    field.setCustomValidity("Esse campo é obrigatório")
  } else {
    field.setCustomValidity("")
  }
}

for (field of fields) {
  field.addEventListener("invalid", customValidation)
}


/*
function nota (){

entrada
var nota = 90

saida
var res

switch(nota) {
  case nota >= 90:
    res = 'A';
    break;
  case nota > 79 && nota < 90:
    res = 'B';
    break;
  case nota > 69 && nota < 80:
    res = 'C';
    break;
  case nota > 59 && nota < 60:
    res = 'D';
  case nota < 60:
    res = 'F';
  default: 
    res = 'Digite um valor válido';          
}

document.getElementById("desc").innerHTML = "res";
}
export default nota(); 
*/