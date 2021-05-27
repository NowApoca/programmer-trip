PRINCIPIOS GENERALES DEL TESTING

Testing shows the presence of bugs

	Es importante entender que el testing no corrobora que el sistema este libre de errores. El testing solo va a mostrar que defectos estan presentes en el sistema en el caso de que estos sean encontrados (Spotted). 

Exhaustive testing is imposible

	Para esto debemos definir, que es el testing exhaustivo? El testing exhaustivo es una tecnica del testing que coinsiste testear todas las combinaciones de datos de entrada posibles.

	Si testeando uno encuentra errores y defectos, es logico esperar que al aumentar el testing, mas errores se van a encontrar. De hecho, es asi: cuando uno mas testea mas errores encuentra. El problema viene con el costo de testear mas, hay que balancear que sea bueno para con el proyecto ya que hay muchos factores que pueden intervenir en la seleccion de no testear absolutamente todo: deadlines, budget, etc.

	Se recomienda el uso de testing exhaustivo cuando el componente o aplicacion bajo el tester sea de logica extremadamente simple y ademas cumpla con que las combinaciones de datos de entrada sean muy limitadas.

	Para poder realizar un testing efectivo, es muy importante el priorizar los tests. De esta forma, se puede hacer foco en los tests mas importantes y llegar al budget o deadline en caso de que estos existan.

Early testing

	FRASE THE ISQTB: The earlier a problem is found, the less it costs to fix.

	El concepto del testing temprano es simple: se deben encontrar y arreglar la mayor cantidad de errores o de defectos en la etapa corriente, ya que si un defecto es heredado sin ser descubierto por la siguiente etapa costara mucho mas arreglarlo. Tomemos como ejemplo un error no detectado en la fase de requerimientos.  

	Teniendo en cuenta que el projecto tiene como etapas: Requerimientos -> Coding -> Program Testing -> User acceptance testing -> Developent -> Production.

	Si un error es encontrado y arreglado en la etapa de Requerimientos, el costo del error sera practicamente insignificante, tan facil como corregir un parrafo, un texto o como mucho una videollamada discutiendo sobre la ambiguedad encontrada. Pero que pasa si el error lo encuentra un tester en el Program Testing? O si el cliente lo encuentra en el User Acceptance testing? Ni hablar si se encuentra en produccion.

	Un error encontrado en una etapa puede llevar a que el mismo error este en todas las etapas anteriores, requiriendo la inversion de tiempo y desarrollo en todas estas. Existen varios metodos de early testing o de tests en la misma etapa para cumplir con el testing temprano. Para mas profunidad en el tema, ver (LINK DE EARLY TESTING)

Defect Clustering.

	Generalmente, la mayor cantidad de errores o defectos se acumulan en unos pocos modulos. Esto se puede dar por algunas de las siguientes razones:

- La complejidad de estos modulos o la integracion de los mismos.
- Codigo volatil o bajo cambios constantemente
- Nivel de experiencia del equipo al desarrollar estos modulos

	Para dar un numero estimativo, existe el principio de Pareto: aproximadamente el 80% de los problemas son encontrados en un 20% de los modulos. Esto significa que se deben identificar estos modulos para solucionar la mayor cantidad de errores, pero atencion, no se debe hacer foco solo en estos ya que el 20% de los errores tambien seran importantes y estaran desperdigonados por el resto de los modulos.

The pesticide paradox.

	Correr siempre la misma bateria de tests no va a encontrar errores o defectos nuevos. En caso de que se agreguen nuevas funcionalidades o especificaciones, no se debe solo chequear que los tests sigan corriendo para demostrar que esos errores testeados estan fixeados. Al agregar o modificar codigo se deben agregar tests nuevos que prueben esta funcionalidad. En caso de que los nuevos cambios afecten el comportamiento previamente deseado en la actual bateria de tests, estos deben ser fixeados ya que sino seguiran dando error.

Testing is context dependent

	El testing no va a ser siemper igual. El metodo de testing esta estrictamente conectado a las circunstancias del proyecto. Como ya mencionamos en los conceptos generales del testing, no es lo mismo testear un proyecto de alto riesgo que uno sin mucho riesgo, como un reactor nuclear versus un sistema gestor de helados.

	El riesgo no es sino uno de los factores que van a contribuir a la decision de metodos de testing o no. Segun el sistema se hara foco en testing de seguridad, testing agile, de carga, de estres, etc. Profundizaremos sobre tipos de testing mas adelante.

Absence error falacy.

	Que un sistema no presente errores conocidos no quiere decir que este listo para estar en produccion. Que pasa si para el cliente los requerimientos no estan cumplidos? Factores como que el usuario final este contento con el desarrollo, o la capacidad del sistema para sobrellevar horas pico de carga o cualquier otro problema que no haya surgido en la fase de desarrollo puede salir a la luz en la fase de produccion. Para esto siempre hay que considerar tanto el test dinamico como el estatico, test funcionales, test no funcionales, tests del sistema en su conjunto, etc. Veremos mas sobre esto mas adelante.

