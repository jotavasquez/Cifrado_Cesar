# Cifrado César DEMO v0.1
______________________
###### by Vacas Vuelan
October 3, 2017 11:38 PM

####Introducción
El cifrado César es un antiguo sistema para códificar utilizado según fuentes históricas por Julio César para proteger sus mensajes importantes de contenido militar. Con este mini programa se puede ingresar una frase y convertirlo a cifrado césar y viceversa.

####Funciones

Este programa toma el antiguo sistema de cifrado César, el cual:

* Permite ingresar una frase desde el usuario

* Da a elegir entre dos opciones: Cifrar o Descifrar 

* Regresa la Frase en el formato elegido.


####DIagrama de Flujo
A continuación se presenta el funcionamiento del programa mediante un dragrama de flujo: 

![Diagrama de flujo
](https://github.com/jotavasquez/Cifrado_Cesar/blob/master/Flow_chart.jpg?raw=trueU)

####Desglozando el Código
1. Dentro de la función, se crea un ciclo do...while para ingresar y verificar datos:
`do{...} while (option == "" || (option != "1" && option != "2")); // espera los datos y los restringue 1 o 2.
}`

2. Se solicita que el usuario elija si desea cifrar o descifrar una frase.

		var option = prompt("Indique que desea hacer: 1)Cifrar - 2)Descifrar"); // elegir tu opción`

3. Se guarda el valor en un variable.
4. La variable se verifica, y restingue a dos valores: 1 y 2. 
5. Si cumple la condición se ejecuta cipher si no se ejecuta decipher, las cuales son funciones externas:
if(option == "1") {
				cipher2(); // llama a la función que cifra el string
			} else if (option == "2") {
				decipher(); // llama a la función que descifra el string
                
6. Se muestra el resultado con un alert.
7. Si no cumple con ninguna condición, en caso de que se escriba un carácter no válido, se muestra un alert.

#####Funciones Cipher y Decipher
######Cipher
La función cipher mediante un algoritmo realiza el cifrado de la siguiente manera:

1. Toma la frase ingresada y aplica:
			var codeAs = str.charCodeAt(i); // traduce a valor de código ASCII
           
2. Luego aplica la función de cifrado cesar, el valor lo trasnforma a letra según la equivalencia ASCII
- Para Mayusculas:

					var cesarM = String.fromCharCode((( codeAs - 65 + 33 ) % 26 ) + 65); // pasar a código cesar y luego a letra
- Para minusculas:

 					var cesarM = String.fromCharCode((( codeAs - 97 + 33 ) % 26 ) + 97); // pasar a código cesar y luego a letra

######Decipher


