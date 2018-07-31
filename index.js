function shout(string) {
  return string.toUpperCase()
}

function whisper(HELLO) {
  return HELLO.toLowerCase()
}

function logShout(spy) {
	console.log(‘spyOn')
	return 'HELLO'()
	}