

const la = engine.constants.html.leftArrowIco
const ra = engine.constants.html.rightArrowIco
const ua = engine.constants.html.upArrowIco
const da = engine.constants.html.downArrowIco

const wb = engine.constants.html.getKeyBtnIco("W")
const sb = engine.constants.html.getKeyBtnIco("S")
const ab = engine.constants.html.getKeyBtnIco("A")
const db = engine.constants.html.getKeyBtnIco("D")

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