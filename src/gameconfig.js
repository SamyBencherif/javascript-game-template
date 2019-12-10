
const leftArrow = `<span class="boxedBtn">&#x21e6;</span>`
const upArrow = `<span class="boxedBtn">&#x21e7;</span>`
const rightArrow = `<span class="boxedBtn">&#x21e8;</span>`
const downArrow = `<span class="boxedBtn">&#x21e9;</span>`

const keyBtn = (c) => `<span class="boxedBtn">${c}</span>`

const config = {
	title: "Untitled Game",
	width: 512,
	height: 512,
	
	instructions: `Write code for a game. Use the Keyboard.
	<br>
	Keyboard buttons include 
	${keyBtn('W')}${keyBtn('S')}${keyBtn('A')}${keyBtn('D')}
	<br> and even ${leftArrow}${rightArrow}.`
}