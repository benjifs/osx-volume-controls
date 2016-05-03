
var applescript = require('applescript');

var scripts = {
  state:
    'output volume of (get volume settings) & output muted of (get volume settings)',
  volumeState:
    'output volume of (get volume settings)',
  muteState:
    'output muted of (get volume settings)',
  set:
    'set volume output volume %s --100%',
  increase:
    'set volume output volume (output volume of (get volume settings) + 10) --100%',
  decrease:
    'set volume output volume (output volume of (get volume settings) - 10) --100%',
  mute:
    'set volume with output muted',
  unmute:
    'set volume without output muted'
};

var exec = function(script, callback) {
  if (!callback) callback = function() {};
  applescript.execString(script, callback);
}

var getScript = function(scriptName, param) {
  var script = scripts[scriptName];
  if (typeof param !== 'undefined') script = script.replace('%s', param);
  return script;
}

exports.state = function(callback) {
  return exec(getScript('state'), callback);
}

exports.volumeState = function(callback) {
  return exec(getScript('volumeState'), callback);
}

exports.muteState = function(callback) {
  return exec(getScript('muteState'), callback);
}

exports.set = function(volume, callback) {
  return exec(getScript('set', volume), callback);
}

exports.increase = function(callback) {
  return exec(getScript('increase'), callback);
}

exports.decrease = function(callback) {
  return exec(getScript('decrease'), callback);
}

exports.mute = function(callback) {
  return exec(getScript('mute'), callback);
};

exports.unmute = function(callback) {
  return exec(getScript('unmute'), callback);
};
