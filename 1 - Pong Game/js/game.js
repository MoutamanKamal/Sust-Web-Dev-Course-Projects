let score = 0
let strikes = 0
const court = {
	canvas: document.querySelector('#canvas'),
	start: function() {
		this.context = this.canvas.getContext('2d')
	}
}
