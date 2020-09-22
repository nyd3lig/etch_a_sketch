# etch_a_sketch
LIVE: https://nyd3lig.github.io/etch_a_sketch/


This is a project assigned by The Odin Project curriculum - https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project

Which uses recent information gathered about the DOM and Event-listeners.

Overall a very challanging but fun project for me, major struggles was getting the grid to register the mouse over on the div.
But this was simply because I overlooked an important aspect of an event listener, which is that it needs clear instructions on where the event is happening.
(I forgot to add an event.currentTarget, hence why I didn't get it to work, but found it out after some trial and error, and guidance from the ToP discord)

The other challange was getting the grid to spawn a new grid, and when doing so getting the CSS grid to update to the new grid.
Mainly because I tried to use the style.gridTemplateColumns, but because of syntax errors  couldn't get it to which lead me to believe that it wasn't possible, 
but after a lot of googling, and checking inn on TOPs discord I saw that it was possible, when you don't mess up the syntax.
