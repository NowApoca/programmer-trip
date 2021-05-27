GLOSARIO
PRODUCCION, DESARROLLO

TOPICS



que es el testing
para que sirve
beneficios

error failure defect
testing and risk
resource triangle
completation criteria
static and dynamic testing
testing and debugging
communication
code of ethics
test independency
when testing is complete?

TITULO: Certificado ISQTB: Fundamentos del TESTING

RESENIA:

ISQTB es una institucion que provee certificados exclusivamente para testers. Se puede optar para preparar el examen tanto de forma autididacta siguiendo el Syllabus provisto por la misma ISQTB como siguiendo sus cursos. Existe una variedad de certificados en los que varian los temas o la profunidad de los mismos. En esta serie vamos a hablar del primero de ellos, el Foundation Level Certified Tester donde se ven los fundamentos generales del testing.


Al dia de la fecha de la escritura de este blog, los certificados disponibles son:

Foundation Level:
	Certified tester

	Agile tester

	Security tester
	Test automation engineer
	Model based tester
	usability testing
	Automotive software tester
	Gambling industry tester
	Mobile application testing
	Performance testing
	Acceptance testing

Advanced Level:
	Agile technical tester
	Agile test leadership at SCALE (In beta 2021)

	Test manager
	Test analyst
	Technical test analyst

Expert level:
	Test managment
	Improving the test Process


Empecemos!

Nota a los requisitos: La serie esta ambientada a gente con y sin experiencia. En caso de que no se entienda un concepto, es muy probable que la definicion se encuentre, en mis propias palabras, en el siguiente link (LINK).

"... Why dont you fix bad code when you see it? ... Because you know that if you touch it you risk breaking it, and if you break it, it becames yours." The Clean Coder

Que es el testing? El testing es la exploracion sistematica de un componente y/o un sistema con el objetivo principal de encontrar y reportar defectos, erroresy fallas. El testing NO INCLUYE la correccion de errores, eso es tarea del desarrollador. Una vez que se hayan encontrado fallas y el desarrollador las haya arreglado, los tests se encargaran de que los cambios sean verificados.

El testing es una forma de añadir valor a un producto ya que encontrando errores en la fase de desarrollo se previene de que lleguen a producción. Los beneficios del testing son:
	- Aumenta la robustez del sistema:
	- Aumenta la documentacion REAL:
	- Verificacion constante del estado del software (mas si se automatiza) y ahorro de tiempo de testing manual:
	- Encuentro de fallas tempranas (early testing and static testing)
	- Disminuye el miedo a refactorizar codigo
	- facilita el desarrollo
	- expone errores de arquitectura o de disenio de metodos y componentes
	- Promueve los fundamentos del dependency injection
	- Provee rapido feedback de como funciona el codigo

Para mayor profundidad se puede leer el siguiente post: (link a explicacion de 9 beneficios del testing)

Errores, defectos y fallas.

Para entender por qué el software falla, hay que entender que el software y los requerimientos del mismo están pensados y diseñados por personas y las personas son: falibles. Existen una infinidad de factores que pueden llevar a una persona a fallar como puede ser la presión, una deadline importante, la ambiguedad de un requerimiento o simplemente un mal día. Al existir distintas fases del desarrollo van a existir distintos tipos de errores. Estos errores van a variar en costo, importancia, entre otras cualidades. A que se debe esto? Ya que los componentes dependen de los requerimientos, y un sistema de los requerimientos, una falla en estos ultimos va a traer un fallo en los niveles siguientes. Al ser los requerimientos los primeros en escribirse, si se detectan los errores antes del desarrollo se podran ahorrar tanto errores en componentes como errores en sistemas.

En el testing se pueden identificar tres cosas a tener en cuenta: Errores, Defectos y fallas. El error va a ser el disparador de todo lo demás. Si una persona expresa mal un requerimiento, el error será ese, no ser claro en el requerimiento. Por ejemplo: Un ERROR de calculo de P&L en una aplicación financiera de criptomonedas. Esto va a llevar a que el componente proveniente de este requerimiento no funcione como debería, generando un DEFECTO en el software. Cuando un componente con un defecto es llamado pueden pasar dos cosas: que la entrada del componente no dispare ningun comportamiento indeseado o que si lo haga. En último caso, el sistema tendrá una FALLA, ya que el usuario final podrá ver por ejemplo que su P&L no es el adecuado.

Testing and Risk:

	Es esperado que a mayor riesgo, mayor cantidad y calidad de testeo. Esto es logico, no vamos a testear con la misma profundidad el codigo de un reactor nuclear que el de un sistema contable de una heladeria. Al riesgo tener mayor costo (monteario o incluso vidas) un fallo no es opción. Profundizaremos sobre esto más adelante.

Resource triangle

En el testing del desarrollo, existen tres recursos o atributos: Dinero, tiempo y calidad. Estos tres recursos construyen un triangulo en el que por ejemplo, si se necesita desarrollar más rápido costará más dinero. Como también desarrollar más rápido, tendrá su costo en calidad ya que por lo general ambos no van juntos.

Completation criteria

	Cuando un test o el testing está terminado? La mejor forma de definir cuando el testing es suficiente es con la priorización. Si bien el mejor de los escenarios es tener un coverage del 100% en la mayoría de los casos esto no es asequible que esto es costoso y puede llevar mucho tiempo. Por supuesto, dependerá del contexto pero quizás son recursos que el equipo no tiene disponible (un budget especifico, una deadline, etc). Para esto la priorización es fundamental ya que por lo genral el 80% de las fallas se encuentra en el 20% del codigo, por lo tanto si esa pequeña parte del código se testea se va a tener un gran procentaje de los casos cubiertos.

	También se puede definir un criterio de completación. Este criterio será un estimativo de qué defectos son tolerables, hasta donde está bien testear. Esta decisión por lo general es tomada en conjunto con los distintos stake holders en base a por ejemplo los recursos.

	Más información del testing exaustivo en los principios del testing.

Testing and debugging
	El testing y el debugging son dos cosas completamente distintas. El debugging lo realiza el desarrollador y sirve para detectar la raíz de los problemas de la falla y el defecto y si es posible, arreglarlo. En cambio el testing es la exploración sistematica del sistema con el objetivo de encontrar defectos. El debugeo efectivo es fundamental para mantener la robustez y la calidad de un sistema. El testeo efectivo es fundamental para validar que la calidad del software se mantiene entre cambios.
	
Static and dynamic testing.

	Todo el testing se puede clasificar en 2 grupos: dinámico y estático. La forma más fácil de diferenciar estos 2 distintos tests es básicamente que el estático no se ejecuta y el dinámico sí. Ejemplos de test dinámico son los test unitarios o de integración. Ejemplos de tests estáticos son las revisiones de los requerimientos.

Communicacion

	Es en mi opinión la parte más importante del testing. No importa todos los defectos que identifiques o mantengas, si no lo comunicas bien no va a servir de nada. Antes que tester soy un desarrollador y admito que al amar este trabajo es difícil no depositar sentimientos en el producto de uno. Y esto pasa con la mayoría de los desarrolladores. Si no se entiende mucho sobre el trabajo del tester y además el tester no sabe comunicar bien los defectos, no es dificil que se puedan herir suceptibilidades. Idealmente esto no debería pasar pero el software esta desarollado por nosotros humanos falibles. Esto puede llevar a la no colaboración de un equipo.

	Es por esto que es completa responsabilidad del tester saber comunicar de manera cordial y etica los defectos encontrados en el software de otro desarrollador. Si el tester es el mismo desarrollador, por supuesto que esto no hace falta.

	Al ser el software desarrollado por equipos, la buena comunicación y predisposición es ESENCIAL.


Independencia en el testing:

	Existen cuatro niveles distintos en el testing:

	Cuando el testing lo hace el mismo desarrollador
	Cuando el testing lo hace entre el mismo equipo
	Cuando el testing lo hace otro equipo en la misma empresa
	Cuando el testing lo hace un equipo de otra empresa

Por supuesto, la independencia es mayor cuando el testeo lo hacen personas desde otra empresa. La independencia va decayendo en cada uno del tipo del testing.




