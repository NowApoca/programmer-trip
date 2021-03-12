hay 3 formas de despachar info en next js:


	ssr: en cada request se buildea la pagina. lo usas cuando la data es incalculble, es decir que no tiene sentido cachear.

	static generation: se hace en build time. podes buildear todo y podes hacer q solo haga un fetch y llene la data faltante. o podes hacerlo con datos estaticos. Esto lo uso cuando ya tengo la respuesta que necesito devolver. OOoooo cuando tenes regeneartio que es buildear on demand y que quede.

	client generation: se buildea en el cliente

	regeneration: al principio no ta buildeada, pero se va buildeando y quedando o demand. esto podes despacharlo en un CDN. podes especificar cada cuanto tiempo.

	cuando usas static props: cunado es info del user no especifica del usuario, cuando ya tenes la data en build time, si necesitas seo y performance.

	get static paths: podes limitar una cantidad limitada de paths que queres que sean buildeadas, y podes meterle static regeneration.

	cuando usas sSr y csr: cuando es info especifica de un usuario, cuando no va para seo, cuando se updatea casi siempre, etc.
