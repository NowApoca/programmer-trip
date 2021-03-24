COMPLEXITY N EXCEPT OF 1 OF INSERT

A linked list is a line of node where everyone stores data and a reference to the next. If u want to search something, it will has linear cost.
During iteration it is easy and performant to delete or add nodes.

INSERT

Add(value)
  Pre: value is the value to add to the list
  Post: value has been placed at the tail of the list
  n ← node(value)
  if head = ø
    head ← n
    tail ← n
  else
    tail.next ← n
    tail ← n
  end if
end Add

basically, tail.nexxt point to n because it is the last node, so it cannot return to head.


SEARCH

Contains(head, value)
  Pre: head is the head node in the list
       value is the value to search for
  Post: the item is either in the linked list, true; otherwise false
  n ← head
  while n != ø and n.value != value
    n ← n.next
  end while
  if n = ø
    return false
  end if
  return true
end Contains

basicamente lo busca linealmente

DELETE:

medio que parecido a la iteracion de antes
