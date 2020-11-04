Sintaxis:
	:= -> Its the shortest way of declaring a var in GO. Left therm must have a new var, if not, it breaks. e.g.:
		a, b  := 5,6
		b, c  := 7,8 // b already exists, but c is new so b value could be overwritted.
		a,b = 10, 11 // its fine
		b,c := 12,13 // It breaks, both vars were initialized before.
	Multiple assignment: -> var var1, var2 int32 = 1,2
	Multiplie assignment different type: => 
		var( 
			var1 := 5
			var2 := 'five'
		)
	if -> if a < b {

	}
	for -> for i := 0 ; i < j; i++ {

	}
	For casting we have types like float64(). Note: it is not like C that you can assume ur type conversion, you have to put it explicitly. For more informacion visit: https://golang.org/doc/faq#conversions 
	For Printing write: Println("some text", var1, var1). It assumes types. Instead, in PrintF you have a more C-way print: Printf("some text %d", someInt)
	For trunc we can write: Printf("%d.6f", someFloat) for show an 6 decimals precision number.

ARRAYS
	var arr []int32 = {1,2,3,4,5,6}
	var arrSliced []int32 = arr[1:4] // [2,3,4]

STRING CONV
	strconv.Atoi( string ) => return int, err
	strconv.Itoa( int ) => return string,err
	
