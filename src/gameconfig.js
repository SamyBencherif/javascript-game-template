

const la = engine.html.leftArrowIco
const ra = engine.html.rightArrowIco
const ua = engine.html.upArrowIco
const da = engine.html.downArrowIco

const wb = engine.html.getKeyBtnIco("W")
const sb = engine.html.getKeyBtnIco("S")
const ab = engine.html.getKeyBtnIco("A")
const db = engine.html.getKeyBtnIco("D")

const config = {
	title: "Untitled Game",
	width: 512,
	height: 512,
	
	instructions: `Write code for a game. Use the Keyboard.
	<br>
	Keyboard buttons include 
	${wb+sb+ab+db}
	<br> and even ${la+ra}.`
}