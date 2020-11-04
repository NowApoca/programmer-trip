FILE
	:q! -> quit without save
	:saveas <PATH> -> save as
	:w -> write
	:wq -> write and quit
	ZZ -> same as :wq
MOVE
	gg -> Move to the top of the file
	G -> Move to the bottom of the file

	w -> move to the end of the word
	W -> move to the end of a entire string without blank spaces
	b -> move to the begin of the word
	B -> move to the begin of a entire string without blank spaces
	
	0 -> move to the beginning of the line
	$ -> move to the end of the line
	
	H -> move to the top of the screen
	M -> move to the middle of the screen
	L -> move to the bottom of the screen

	Ctrl - o -> jump back to where you were
	Ctrl - d -> move down half a page
	Ctrl - u -> move up half a page
	Ctrl - F -> move down a page
	Ctrl - B -> move up a page
	<Numero de linea>G: jump to a known line

	j -> move to one line down
	k -> move to one line up
	l -> move to one character right
	h -> move to one character left

SEARCH
	/ -> search word or character in command mode
	* -> search word like /, but word under current cursor
	n -> when * or /, go to next word
	N -> when * or /, go to previous word

CHANGE AND INSERT

	i -> Insert before the cursor
	a -> append after the cursor
	I -> insert at the beginning of the line
	A -> Append ad the end of the Line
	o -> open a new line below the current cursor
	O -> open a new line above the current cursor
	r -> replace the one character under your cursor
	R -> replace the one character under your cursor and keep writing
	C -> Change the current line from where you are (it deletes the line and get into insert mode for changing that line)
	S -> Like C but changing the entire line instead of from where you are
	~ -> change the case from upper to lower or reverse

DELETE

	x -> delete the caracter under the cursor
	X -> delete the caracter before the cursor
	dd -> delete current line
	dt<CHARACTER> -> delete all from cursor to character specified
	D -> delete from the cursor to the end of the line, cursor included
	J -> delete space from end of the line to next line
	dw -> delete from cursor to the end of the world

UNDO AND REDO
	u -> u for UNDO in command mode
	Ctrl -r -> Redo the last action

