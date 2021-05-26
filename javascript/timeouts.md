Set Interval vs Set Time Out:


El timeout cuenta la ejecucion del cb como tiempo. Si el delay es de 100ms y la func dura 5ms, va a ser de 95 ms. En cambio nested timeouts te dura 100ms de minima y suma dependiendo del event loop.

SOURCE: https://javascript.info/settimeout-setinterval


UN EJEMPLO: https://dev.to/akanksha_9560/why-not-to-use-setinterval--2na9
