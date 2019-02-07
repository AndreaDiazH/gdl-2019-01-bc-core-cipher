# Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## Parte Obligatoria

Usa este alfabeto simple (solamente mayúsculas y sin ñ):

* A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

### Definición del productoç

Mi usuario final estaría enfocado a escritores noveles que están en negociación con casas editoriales o someten su texto a revisiones externas, ofreciéndoles de esta manera cifrar sus textos y evitar el plagio de caer en manos indiscretas antes de su publicación final.

Pensé en una interfaz muy sencilla para no abrumarlo con demasiadas indicaciones y que pudiera escribir libremente en los campos de texto o copiar y pegar simplemente los mismos.

* Principales usuarios de producto: Escritores
* Objetivos de estos usuarios en relación con tu producto: obtener un texto cifrado para compartir de manera segura.
* Creo que el producto puede resolver la problematica de plagio en textos ineditos como poemas, textos literarios, textos cientificos, etc...

### Interfaz de usuario (UI)

La interfaz permite al usuario:

* Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos  	que el cifrado desplace cada caracter.
* Insertar un mensaje (texto) que queremos cifrar.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto) a descifrar.
* Ver el resultado del mensaje descifrado.

### Scripts / Archivos

* `README.md`: esta es una webapp y por lo tanto no necesita una instalación 				y se puede acceder en este link: https://andreadiazh.github.io/gdl-2019-01-bc-core-cipher/src/index.html
	Esta webapp esta pensanda para ser muy sencilla en su funcionamiento, mostrando al usuario tres pantallas simples donde introducir su texto, su offset y mostrarle el resultado.
	
* `src/index.html`: Este archivo contiene el _markup_ (HTML) e incluye el CSS y JavaScript necesario para correr esta webapp.
* `src/cipher.js`: aquí se implementan las funciones únicamente de cifrado y descifrado a través de un objeto JavaScript.

  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que queremos mover a la izquierda en el alfabeto y `string` el mensaje
(texto) que queremos descifrar.

* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.

## Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)


## Checklist

Esta sección está para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria

* [x] `README.md` incluye info sobre proceso y decisiones de diseño.
* [x] `README.md` explica claramente quiénes son los usuarios y su relación con el producto.
* [x] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [x] Usa VanillaJS.
* [x] No utiliza `this`.
* [x] Implementa `cipher.encode`.
* [x] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [x] Interfaz permite escribir un texto para ser cifrado.
* [x] Interfaz muestra el resultado del cifrado correctamente.
* [x] Interfaz permite escribir un texto para ser descifrado.
* [x] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
