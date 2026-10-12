/*4) Hice el Ejercicio 3 con POO basada en prototipos, sin class. Antes Tarea era solo una interface y tareas era un array en el que cada funcion hacia sus propios for.
Ahora los datos y las operaciones viven juntos en objetos.

Caracteristicas utilizadas
-Objetos (estado y comportamiento): cada tarea guarda sus datos y puede hacer operaciones con ellos, como tarea.cambiarEstado("e").
-Abstraccion: el menu no sabe como se guardan ni se buscan las tareas, solo se lo pide a la lista;(caja negra). 
Por ejemplo, tareas.buscarPorTitulo(texto) y tareas.filtrarPorEstado("p") reemplazaron a los for repetidos.
-Instanciacion: creo las tareas con una funcion constructora y new Tarea(...). Las listas se crean con Object.create(protoLista).
-Herencia prototipica: los metodos se definen una sola vez en Tarea.prototype y todas las tareas los heredan.
-Encapsulamiento (parcial): el contador siguienteId quedo dentro de la lista y solo lo usa agregar. El getter total calcula el valor sin exponer como. 
El setter nombreLista valida que el nombre no este vacio.

Caracteristicas no utilizadas
-Jerarquias de herencia y polimorfismo entre subtipos: no hacian falta. Todas las tareas se comportan igual, y solo cambian sus datos (estado y dificultad), 
ya que crear una subclase como TareaDificil hubiese sido innecesario.
*/
