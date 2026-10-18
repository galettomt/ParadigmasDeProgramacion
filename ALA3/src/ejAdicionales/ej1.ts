/* 
1) Generalizaciones simbolicas
-Un objeto es una coleccion de propiedades (clave y valor). Si el valor es una funcion, la propiedad es un metodo.
-Se crean objetos con un literal { }, con una funcion constructora y new, o con Object.create (prototipo).
-Todo objeto tiene un prototipo, y asi sucesivamente hasta null. Esa es la cadena de prototipos.
-Al acceder a una propiedad, se busca primero en el objeto y luego en la cadena. Si no existe, el resultado es undefined.
-Los objetos creados con new F() heredan de F.prototype.
-this hace referencia al objeto sobre el que se invoca el método.
-Asignar a una propiedad inexistente la crea, y delete elimina propiedades propias.

2. Creencias de los profesionales
Modelo simple: hay solo objetos y un unico mecanismo, la delegacion por prototipos.
Flexibilidad: se crean objetos directamente con literales, sin definir antes una clase, y se pueden agregar o quitar propiedades en ejecucion.
Herencia dinamica: si se agrega algo al prototipo, todos los objetos que lo heredan lo ven al instante.
Ahorro de memoria: los metodos se definen una vez en el prototipo y se comparten.
Getters y setters: se consideran habituales porque permiten trabajar de forma encapsulada y ofrecen una interfaz estable
*/
