function pyramidOfDoom() {
  setTimeout(() => {
    console.log(1)
    setTimeout(() => {
      console.log(2)
      setTimeout(() => {
        console.log(3)
	pyramidOfDoom()
      }, 500)
    }, 2000)
  }, 1000)
	if(process.argv[2]){
		console.log('As stack is never empty, it will never call the timeout functions, no matter how much time passes. It blocks the event loop! Thats why you should perform cheap computational operations.')
		for(;;){}
	}
}
pyramidOfDoom()
