Javascript Gamepad and Keyboard controls management
========

### Usage ###


```html
<script src="js/Gcontrols.js"></script>
```
In your render loop, update your controls and after that, you can do whatever you want with the controls

```html
<script>

	function renderloop(){
		var pad = updateGControls();

		MyObjectIwantToMove.translateZ(pad.joystickLeft.axeY);
		MyObjectIwantToMove.rotation.y-=(pad.joystickLeft.axeX)

	}
</script>
```

As you can see, the updateGControls function return an object gamepad (Xbox Controller) :

```html
<script>
	var gamepad={
		connected:false,
		up:false,
		right:false,
		down:false,
		left:false,
		A:false,
		X:false,
		Y:false,
		B:false,
		l1:false,
		l2:false,
		r1:false,
		r2:false,
		start:false,
		select:false,
		joystickLeft:{
			axeX:0,
			axeY:0,
		},
		joystickRight:{
			axeX:0,
			axeY:0,
		}
	};
</script>
```

There is an alternative with keyboard if you don't have a Xbox pad or you disconnect it.

	up:up arrow,
	right:right arrow,
	down:down arrow,
	left:left arrow,
	A: 	"E",
	X: 	"R,
	Y: 	"T",
	B: 	"Y",
	l1:	"D",
	l2:	"F",
	r1:	"G",
	r2:	"H",
	start: "Enter",
	select: "Space",
