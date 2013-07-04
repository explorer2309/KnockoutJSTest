Using HTML5, CSS3 and JavaScript with only KnockoutJS and RequireJS libraries create the following user interface using a test driven development approach.
 
![](https://raw.github.com/glister/KnockoutJSTest/master/UI.png)

The project structure is already defined in ***src***. Changes will only need to be made to ***src/index.html***, ***src/js/summary.js***, ***src/js/summaryTests.js*** and ***src/css/screen.css***. 

•	The view model should have a constructor that accepts a single parameter which will provide a JSON string of the initial data, of the following format *“[{“name”:”Item”,”value”:”20”}, {“name”:”Item”,”value”:”20”}, {“name”:”Item”,”value”:”20”}, {“name”:”Item”,”value”:”20”}, {“name”:”Item”,”value”:”30.50”}]”*

•	Clicking “Add +” should add a new row with label “Item (n+1)” and a value of 0.

•	Newly added rows should fade in over 0.5 seconds

•	Changing any of the row values should update the total when losing focus on the input

•	Changing any of the row values to an invalid value (e.g. empty or ‘not-a-number’) should turn the value input red.

**Note:  Only concerned with webkit browsers compatibility only**

**Note 2: Testing has been setup for MochaJS + Chai, feel free to swap out for preferred testing framework.**
