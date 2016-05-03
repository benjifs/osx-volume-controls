# osx-volume-controls

Control volume on OSX

## Installation
```
	$ npm install osx-volume-controls
```

## API
### state([callback])
Get volume and mute state in callback. The value of `volume` and `mute` will be passed as the second argument in the callback.
### volumeState([callback])
Get volume state in callback. The value of `volume` will be passed as the second argument in the callback.
### muteState([callback])
Get mute state in callback. The value of `mute` will be passed as the second argument in the callback.
### set(vol, [callback])
Set volume to `vol`.
### increase([callback])
Increase volume by 10%.
### decrease([callback])
Decrease volume by 10%.
### mute([callback])
Mute volume.
### unmute([callback])
Unmute volume.

## Usage
```
	var Volume = require('osx-volume-controls')

	Volume.state(function(err, rtn) {
		console.log("Volume: " + rtn[0] + " mute: " + rtn[1]);
	});
	Volume.volumeState(function(err, rtn) {
		console.log("Volume: " + rtn);
	});
	Volume.muteState(function(err, rtn) {
		console.log("Mute: " + rtn);
	});
	Volume.increase(function() {
		Volume.volumeState(function(err, rtn) {
			console.log("Volume: " + rtn);
		});
	});
	Volume.mute();
	Volume.set(87); // Set volume to 87%
```

## License

MIT © [Benji Encalada](http://github.com/benjifs)
