There are 3 impediments:
	- Motor impediment: 
	- Sound impediment
	- Visual impediment
	- Cognitive impediment
Accesibility in web design is a parameter of the website. More accesibility means that more users are allowed to use the site.
Foucs: Focus is where the cursor is. From that element, actions will be performed
	tips:
		- with TAB you go forward
		- with SHIFT + TAB you go backward
		- with enter you check or uncheck checkboxes
		- it follows the order of the tree in the DOM. Take care of moving elements with CSS in absolute, etc.
		- Take care of putting elements in display hidden or none, they can be renderized for focusing.
		- Take care between Hover and Focus. Hover doesnt mean that the cursor is there.
		- Take care about flexbox and Tabing for focusing
		- be careful with the reordering, it could affect the tabbing
Semantic:
	In order to get the page useful for blind people, the website have to be labelized in some ways. As a reference, search Viktor google dev showing how him use the websites.
	- Investigate vox-voice
	- If we asociate a label to a input component, the info in the label is read by the help system.
	- In images the alt is read. If not, the name of the file of the image is read.
	- Dont write by phonetics, let the help system to perform the task of interpreting what is writed.
ARIA:
	Adds more description and posibilities to accesibility.
	- Check ARIA labels and relationships
Colours and contrasts
	- Check which colors perform contrasts in another colours
	- Text and Links must be different in colour and links must be lined.
Responsive style:
	- with width = device we have the relation 1:1 between device pixel and css pixel.
	- with 1:1 relation, we can do zoom in the screren and still having all in order. See what pass if you du Ctrl + '+'
	- Use relative units for text ( to make Headers responsive )
	- Tab objects like buttons or checkbox must have a size of 48x48px or more.
tips:
	
