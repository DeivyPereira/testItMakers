
#Este proyecto fue creado con la finalidad de cumplir el examen de la empresa It Markers Colombia
# Realizado por Gregoris Pereira 18/07/2020
# Framework: React

Problema #1:
Escriba el componente Message que contiene un elemento de anclaje (<a>) y un párrafo (<p>) debajo del ancla. La representación del párrafo debe activarse haciendo clic en el elemento de anclaje utilizando la siguiente lógica:

- Al principio, el párrafo no debe mostrarse.
- Después de un clic, se debe mostrar el párrafo.
- Después de otro clic, el párrafo no se debe mostrar.


Problema #2:
Escriba el componente TextInput que representa un elemento de entrada (<input>) en el DOM y acepta una referencia (ref) que se reenvía a ese elemento de entrada. Realice el componente FocusableInput con la siguiente lógica:

- El componente debe aceptar una propiedad focused.
- Cuando la propiedad focused se cambia de false a true, y la entrada no está enfocada, entonces debe recibir el enfoque.
- Si al montar con la propiedad focused es true, la entrada debe recibir el foco.


Problema #3:
Escriba un componente TodoList que espere una propiedad items y una lista de objetos, cada uno con texto y la propiedad done.

TodoList también acepta una propiedad de función onItemClick, que debe llamarse cuando un usuario hace clic en un elemento de la lista, si el elemento no está marcado como hecho. De lo contrario, onItemClick no debería llamarse y el evento click en sí mismo no debería propagarse más. La función debe llamarse con el objeto de elemento de la lista de items como primer parámetro y el evento como segundo parámetro.
Problema #4:
Escriba un componente Greeter para que devuelva un elemento div con el texto "Hello {user}" donde user es una propiedad pasada al componente conectado con Redux.

Por ejemplo, si la propiedad user asociada al state de Redux tiene el valor "Admin", el componente debería devolver "Hello Admin".


Problema #5:
Escribir un programa que puede determinar si una matriz es simétrica. Una matriz es simétrica si se ve igual si está invertida. Por ejemplo ('a', 'b', 'c', 'd', 'd', 'c', 'b', 'a') es simétrica y ('a', 'b', 'c', 'd', 'd', 'b', 'c', 'a') no lo es. Suponga que n será siempre un número par entre 2 y 10 (No hay necesidad de validar esto). Si es simétrico su programa debe imprimir 'Symmetric', de lo contrario imprimir 'Asymmetric'

La salida de los datos para el arreglo en el ejemplo ('a', 'b', 'c', 'd', 'd', 'c', 'b', 'a') seria:
Symmetric

Problema #6:
Escribir un programa que imprima una X construida a base de la letra X y utilizar el carácter de subrayado como espacio. El tamaño de la X se basa en una variable n que indicará el tamaño de la letra para imprimir (en una matriz de n x n). 
Por ejemplo, para n = 5 se obtiene:

X___X
_X_X_
__X__
_X_X_
X___X

y para n = 6 se obtiene:

X____X
_X__X_
__XX__
__XX__
_X__X_
X____X

Si n es igual a cero imprimir "ERROR".
