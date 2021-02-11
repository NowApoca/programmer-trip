

You can think of a flex element as a parent container with display:flex. Elements placed inside this container are called items. Each container has a flex-start and flex-end points as shown on this diagram.

For vertical behaviour, we will use align properties.

For horizontal behaviour, we will use justify properties.

Direction

	Item's flow is setted with flex-directio (i.e. column, row, etc)

Wrap

	Wrap determines how items are wrapped when parent container runs out of space.

Align items

	WITH align items you control items vertically

flex-basis
	works similar to another CSS property: min-width outside of flex. It will expand item’s size based on inner content. If not, the default basis value will be used.

flex-grow

	when applied to an item will scale it relative to the sum of the size of all other items on the same row, which are automatically adjusted according the the value that was specified. In each example here the item’s flex-grow value was set to 1, 7 and (3 and 5) in the last example.

flex-shrink
	is the opposite of flex-grow. In this example value of 7 was used to ”shrink” the selected item in the amount of time equal to 1/7th times the size of its surrounding items — which it will be also automatically adjusted.

order
	Using order property it’s possible to re-arrange the natural order of items.



SOURCE WITH THE BEST GRAPH EVER: https://jstutorial.medium.com/the-complete-css-flex-box-tutorial-d17971950bdc
