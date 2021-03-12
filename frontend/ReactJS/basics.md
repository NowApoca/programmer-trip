
	si a un componente de react le pasas <SomeComponent isHungry> le llega un props con isHungry={true}
	
	si a un componente le pasas un componente asi <Componente><div> </div></ Componente> el div de adentro pasa al props como children

	Fragmentos: <></>. creo q no aparece en el arbol de dom. Si quiero usar keys en esos fragments, puedo usar : <React.Fragment></ React.Fragment>

	generalmente un componente padre modifica a sus hijos por props, usar el ref es en casos particulares
