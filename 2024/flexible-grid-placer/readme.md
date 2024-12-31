INSTALLATION:
    - git clone https://github.com/tu_usuario/tu_proyecto.git
    - cd tu_proyecto
    - Double click to index.html
USE:
    - Use the figures creator to create a shape
        - Click on a square to init the creation in the panel
        - Click on other square to determinate the size and finish the creation in the panel
    - Transfer the square
        - Once the figure is created you need to transfer the square so, click a square in the "real grid"
    - Other features
        - If you click on a space already occupied space, it will throw you an error changing the color of the shape to red
        - If you click on a square where the space is not enough in the grid but it is due to the limitations of the grid itself, it will change the size of the grid to adjust to what the shape requires
PURPOSE:
    - Show how logical processes in information transferring from user interaction to display can be made
commit -
Author:helper369 (Git account) Nazareno Tognoli (real name) <->
Date:   Mon Mar 11 01:36:06 2024 -0300

    It was Identified the number of columns and rows in the grid of figures creator, also identified the coordinates of a cell of figures creator based on the number of rows and columns, also identified grid lines and grid rows, it was added a mirror grid element to figures creator to interact with the grid, it was added the functionallity to figures creator to build shapes, it was added a transfer object to transfer a shape from figures creator to the real flexible grid, it was refactorized the figures creator logic to OOP, it was added a functionallity to preview shapes with hover in figures creator, it was finished the transfer information functionallity to full transfer the shape to the real flexible grid, it was refactorized the flexible grid logic to a OOP approach, it was added an auto-min-height and auto-min-width to the flexible-grid, it was added a functionallity to the flexible grid to preview the shapes before they are inserted

commit -
Author: helper369 <->
Date:   Sat Feb 10 02:10:53 2024 -0300

    It was created the structure where will be placed the controls and the resizable element, also it was added the resizable element

commit -
Author: helper369 <->
Date:   Tue Jan 23 22:30:13 2024 -0300

    The ideas were clarified, then it was added a function that auto-increment the rows and columns of a grid element based on the space available and columns and rows of 50px of size, then was added a mirror grid element with position absolute, this for the visualization of the separations between the columns and the rows, then was added the structure for keeping the development, with a control panel and a resizable element. I will need to finish the development of other dependency for continuing developing this one, so I end the commit here

commit -
Author: helper369 <->
Date:   Mon Jan 22 22:08:41 2024 -0300

    Initializing project
