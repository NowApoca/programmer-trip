tips:

	las clases de estilos deberian ser todas importadas en el _app.js para usarse como className='someclass'

	si queres tener clases en cada componente, tenes que hacer en la misma carpeta contenedora del file lo siguiente: Nombredelfile.module.css y ahi pones las clases. Luego podes importar y usar un styes['nombredeclase'] en classname

	haciendo npm install sass podes importar sass y scss en _app.js

	Image de nextjs viene con muchas optimizaciones copadas pero creo q es incomodo de usar

	fast uplaod (caracteristica de desarrollo de nextjs): Vos updateas algo en el codigo y updatea los estilos, pero mantiene el estado.

	npm run build: te pre genera todo y carga todo mucho mas rapido.

	Ruteo: link no me gusta, la verdad que prefiero <a> pq te pone una manito al hacer hover. Y podes no usasr el useRouter, con window.reload y eso se la re banca. Y la verdad q hay mas material en stackoverflow de <a> que de Link

	todo lo que pongas en la carpeta api en pages va a ser server side rendering. ojo con esto

	En paginacion dinamica tenes algo re copado que son los slugs. podes aplicar filtros parecidos a los de mercado libre

	en los lazy loading se pueden poner spinners. ta bueno pq te trae la pagina en cuotas

	
