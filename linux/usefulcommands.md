ss -ntpl: te tira todos los puertos que estan corriendo cosas

ss -ntpl | grep *:3100: te tira que proceso ta corriendo en el puerto 3100*

ps: Lista y busca procesos, con ps aux | grep algoespecifico busca los procesos de ese algoespecifico.

cat package.json | grep scripts: te imprime todas las lineas de package.json que tengan el contenido scripts
