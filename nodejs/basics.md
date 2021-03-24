cosas copadas que trae nodejs:

	ta bueno q podes manejar back y front con el mismo source language.

Reglas:
	Siempre enrutar todo con __dirname
	en general usar index.js para los archivos roots de las distintas carpetas.
	en express el orden de routes importa
	ojo que el contenido en la carpeta public es publico
	siempre manejar versionado de npm.


Arquitectura:
	src/
		controllers/
			someentity/
				n files per n routes. in each file u declare method and middleware
		factories/
		routes/
			n files per n entities or desired controller
		store/
			n files per n entities or desired persistance
		utils

