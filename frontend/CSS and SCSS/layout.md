margin top: Usarlo cuano lo que importa es que viene arriba

margin bottom: usarlo cuando no importa que venga arriba o abajo, sino que el componente necesite un margin bottom

padding vs margin: padding es parte del elemento, osea que va a aplicar el borde. margin no.

Margin collapsing: NO ES UN PROBLEMA SI SIEMPRE PONES MARGIN TOP. LITERALMENTE, MARGIN BOTTOM DEBERIA ESTAR PROHIBIDO EN CUALQUIER PROYECTO PARA EVITAR EL MARGIN COLLAPSING

The top and bottom margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the individual margins (or just one of them, if they are equal), a behavior known as margin collapsing. Note that the margins of floating and absolutely positioned elements never collapse.

when does it occur: (src: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

Adjacent siblings

No content separating parent and descendants

Empty blocks



variables: siempre tener un file con el valor de todas las variabels en el tope de jerarquia del proyecto, viene bien para importarlo siempre.

Tipos de variables: spacing, borders, font sizes, colores, shadows, etc


REGLAS DE POSICIONAMIENTO DE ELEMENTOS DENTRO DE UN CONTAINER:

. LOS COMPONENTES NO DEBERIAN POSICIONARSE, EL CONTAINER LOS DEBERIA POSICIONAR
. OPCIONALMENTE LOS ELEMENTOS DEBERIAN FULLFILLEAR EL ESPACIO RESTANTE
. QUE CADA ELEMENTO DENTRO DE UN CONTAINER TENGA A SU VEZ UN DIV CONTENEDOR. ESTA BUENO PQ ES MAS FACIL ESPECIFICAR POSICIONAMIENTO DE HIJOS DENTRO DE UN CONTAINER, PERO QUEDA MUCHO MAS CODIGO

source: https://medium.com/crowdbotics/layout-in-css-634c3ca3dcff
