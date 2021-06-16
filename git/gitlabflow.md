Conclusiones de gitlab flow

Hay que tener los siguientes branchs:

Features: 
	Cada feature va a generar un branch.
	Estos branchs deberian tener de forma mas breve y simple posible el nombre del feature, fix, etc.
	Estos brancchs idealmente deberian durar menos de 1 dia y en lo posible no deberian traerse main para continuar trabajando, salvo que dure mas por algun motivo que debe ser detallado al final del dia.
	Antes del final del dia, debe hacerse un merge request. Si se quiere se puede hacer antes para pedir un review.
	Para mergear a main, debe traerse main, resolver conflictos, aprobar todos los tests y ahi si aprobar el merge request.
	El MR debe pedirselo a un Mantainer en caso de que haya constraints que no permiten. 

Main: El codigo mas actualizado que se va a deployar en staging. Es algo asi como el codigo mas actualizado estable. Cuando se decida, se mergeara a pre o a produccion. Este branch se debe usar para branchear a los feature-branchs.

Pre production (Optional): Si tenes algun constraint como puede ser una ventana de tiempo o alguna regla, no queres mergear main y que se deployee. En cambio lo mergeas a pre produccion y esperas a cumplir esa constraint. cuando eso suceda, mergeas a produccion y esto se va a deployear. Todo tiene mas sentido si esto es CI CD.

Production: El codigo que esta actualmente en produccion. Usando CI CD, si se encuentra un bug deberia branchearse de main, solucionarse, mergearse a main y continuar los merge a pre y produccion.


Commits: Los commits deberian ser cortos, dirgidos a un solo fin. Los posibles fin son:

feat:     The new feature being added to a particular application
fix:      A bug fix (this correlates with PATCH in SemVer)
style:    Feature and updates related to styling
refactor: Refactoring a specific section of the codebase
test:     Everything related to testing
docs:     Everything related to documentation
chore:    Regular code maintenance

Por lo general, cualquier tarea que un desarrollador haga va a caer en estas 7 clasificaciones. Deberian buscarse commits de como mucho una hora que solo toquen cambios con alguna de estas clasificaciones. El mensaje de commit deberia tener este formato:

type(scope): subject
<body>
<footer>


Donde:

type: los tipos previamente vistos.

scope: La epic donde entra este feature. Por ejemplo: usuarios, pacientes, etc. Tanto como la epic, el scope debe ser un sustantivo.

subject: Debe cumplir con:
	Limite de 50 caracteres
	No debe tener punctuations (,.-)
	Usar present simple o imperative.

	Ejemplo: validation of custom specification

Body (Opcional): Explica que cambios y por que los hiciste.
	Separar con un Enter o un \n con el subject
	Las lineas deben tener menos de 72 caracteres
	No asumas que el lector entiende el problema a resolver, explicalo.
	No asumas que su codigo se entiende por si solo

Footer (Opcional):
	En caso de que sea necesario, usa el footer para referenciar a personas, issues, cards, stories, epics, lo que haga falta.






