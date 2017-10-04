function principal2(option){
	do{
		var option = prompt("Indique que desea hacer: 1)Cifrar - 2)Descifrar");
		if(option != ""){
			if(option == "1") {
				cipher2();
			} else if (option == "2") {
				decipher();
			} else {
				alert("Ingrese una opción válida");
			}
		}
	} while (option == "" || (option != "1" && option != "2"));
}

/*
function cipher(){
	do{
		var phrase = prompt("Ingrese phrase a traducir");
		if(phrase != ""){
			var codeAs = phrase.charCodeAt(0); // traduce a valor de código ASCII
			if (codeAs >= 65 && codeAs <= 90){ // definir rangos de valores ASCII para mayúsculas
				cipherLetter = String.fromCharCode(codeAs); // volver valor de código ASCII a letra
				alert ("mayusculas ASCII = " + codeAs + "=" + cipherLetter);

			} if (codeAs >= 97 && codeAs <= 122){ // definir rangos de valores ASCII para mayúsculas
				alert ("minusculas ASCII = " + codeAs);
			} else {
				alert("Ingrese solo letras");
			}
		} else {
			alert("Ingrese solo letras");
		}
	} while (phrase == "");

}

function decipher(){
	alert("Descifrar");
}


function cipher2(){// función de prueba
	do{
		var str= prompt("Ingrese phrase a traducir");

var arr = [1,2,3,4,5,6,7,8,9,10];

function filterEven(arreglo){ 
// el parametro de una función, se puede poner cualquier cosa, da lo mismo, 
//indica que estamos recibiendo algo
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]% 2 === 0){ // número par
			result.push(arr[i]); // muestra los números pares
		} 
	}
	return result;
}

*/

function cipher2(){// función de prueba
	do{
		var str= prompt("Ingrese phrase a traducir");

		if( str != "" ){

			var pCesar = []; // array vacío
			var codeAs = str.charCodeAt(i); // traduce a valor de código ASCII
			var i = "";
			
			for ( i = 0; i < str.length; i++ ){

				if ( codeAs >= 65 && codeAs <= 90 ){ // definir rangos de valores ASCII para mayúsculas
					var cesarM = String.fromCharCode((( codeAs - 65 + 33 ) % 26 ) + 65); // pasar a código cesar y luego a letra
					pCesar.unshift(cesarM);
					alert("Mayusculas " + pCesar); // probando el código

				} if ( codeAs >= 97 && codeAs <= 122 ){ // definir rangos de valores ASCII para mayúsculas
					alert("minusculas");

				} else {
					alert("Ingrese solo letras");
				}

			} i++;

			return pCesar;

		} else {
			alert("Ingrese solo letras");
		}

	} while (phrase == "");

}



principal2();