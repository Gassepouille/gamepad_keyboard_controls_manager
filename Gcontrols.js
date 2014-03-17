(function(ctx){
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
	var controlOn=true;
	var eventstat=-1;
	ctx.updateGControls=function(){
		updategamepad();

		// Go keyboard if pad disconnected   
		if (!controlOn) {
			if (eventstat==0) {
				document.removeEventListener('keydown', onKeyDown, false );
				document.removeEventListener('keyup', onKeyUp, false );
				controlOn=true;
				eventstat=-1;
			}
			if(eventstat==1){
				document.addEventListener( 'keydown', onKeyDown, false );
				document.addEventListener( 'keyup', onKeyUp, false );
				eventstat=-1;
			}
		}
		return gamepad;
	}

	// --------------- GamePad controls
	var updategamepad = function(){
		if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
			var gamepads = navigator.webkitGetGamepads();

			gamepad.connected = !! gamepads[0];

			// if a gamepad is connected this object will be fill 
			if (!gamepads[0]){
				controlOn=false;
				eventstat=1;
				return false;
			}else{
				eventstat=0;
			}

			// We get the 1st connected gamepad
			var mainGamepad = gamepads[0];

			gamepad.up = mainGamepad.buttons[12] === 1;
			gamepad.right = mainGamepad.buttons[15] === 1;
			gamepad.down = mainGamepad.buttons[13] === 1;
			gamepad.left = mainGamepad.buttons[14] === 1;

			gamepad.A = mainGamepad.buttons[0] === 1;
			gamepad.X = mainGamepad.buttons[2] === 1;
			gamepad.Y = mainGamepad.buttons[3] === 1;
			gamepad.B = mainGamepad.buttons[1] === 1;

			gamepad.l1 = mainGamepad.buttons[4];
			gamepad.l2 = mainGamepad.buttons[6];
			gamepad.r1 = mainGamepad.buttons[5];
			gamepad.r2 = mainGamepad.buttons[7];

			gamepad.start = mainGamepad.buttons[9];
			gamepad.select = mainGamepad.buttons[8];

			gamepad.joystickLeft.axeX = mainGamepad.axes[0];
			gamepad.joystickLeft.axeY = mainGamepad.axes[1];
			gamepad.joystickRight.axeX = mainGamepad.axes[2];
			gamepad.joystickRight.axeY = mainGamepad.axes[3];

			// error threshold for joystick
			gamepad.joystickLeft.axeX = ( Math.abs(0 - gamepad.joystickLeft.axeX) > 0.15) ? gamepad.joystickLeft.axeX : 0;
			gamepad.joystickLeft.axeY = ( Math.abs(0 - gamepad.joystickLeft.axeY) > 0.15) ? gamepad.joystickLeft.axeY : 0;

			gamepad.joystickRight.axeX = ( Math.abs(0 - gamepad.joystickRight.axeX) > 0.15) ? gamepad.joystickRight.axeX : 0;
			gamepad.joystickRight.axeY = ( Math.abs(0 - gamepad.joystickRight.axeY) > 0.15) ? gamepad.joystickRight.axeY : 0;
		}else{
			controlOn=false;
			eventstat=1;
		}
	}

	// ------------- Keyboard controls 
	var onKeyDown = function ( event ) {
		switch ( event.keyCode ) {
			case 38: // up
				gamepad.up = true;
				break;
			case 37: // left
				gamepad.left = true;
				break;
			case 40: // down
				gamepad.down = true;
				break;
			case 39: // right
				gamepad.right = true;
				break;
			case 69: // E
				gamepad.A = true;
				break;
			case 82: // R
				gamepad.X = true;
				break;
			case 84: // T
				gamepad.Y = true;
				break;
			case 89: // Y
				gamepad.B = true;
				break;
			case 68: // D
				gamepad.l1 = true;
				break;
			case 70: // F
				gamepad.l2 = true;
				break;
			case 71: // G
				gamepad.r1 = true;
				break;
			case 72: // H
				gamepad.r2 = true;
				break;
			case 13: // enter
				gamepad.start = true;
				break;
			case 32: // space
				gamepad.select = true;
				break;
		}
	};
	var onKeyUp = function ( event ) {
		switch( event.keyCode ) {
			case 38: // up
				gamepad.up = false;
				break;
			case 37: // left
				gamepad.left = false; 
				break;
			case 40: // down
				gamepad.down = false;
				break;
			case 39: // right
				gamepad.right = false;
				break;
			case 69: // E
				gamepad.A = false;
				break;
			case 82: // R
				gamepad.X = false;
				break;
			case 84: // T
				gamepad.Y = false;
				break;
			case 89: // Y
				gamepad.B = false;
				break;
			case 68: // D
				gamepad.l1 = false;
				break;
			case 70: // F
				gamepad.l2 = false;
				break;
			case 71: // G
				gamepad.r1 = false;
				break;
			case 72: // H
				gamepad.r2 = false;
				break;
			case 13: // enter
				gamepad.start = false;
				break;
			case 32: // space
				gamepad.select = false;
				break;

		}

	};
})(window)