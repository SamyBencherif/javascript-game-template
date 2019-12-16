# javascript-game-template

## Intro

A template project for small to medium-small javascript games.

| **Included** | **Planned** | **Imagined** |
| - | - | - |
| <ul><li>HTML page</li><li>Configuration</li></ul>  | <ul><li>Canvas Generation</li><li>Event Handling</li><li>Scene Management</li><li>Object Management</li><li>Builtin Primitives</li></ul> | <ul><li>2d Physics</li></ul> |

## Getting Started

The first step is to modify `src/gameconfig.js` to suit your game.
You can use the `keyBtn` or arrow constants to help with game instructions.

```javascript
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
```

Preview:

![](https://raw.githubusercontent.com/wiki/SamyBencherif/javascript-game-template/screenshots/concept-html-2019-12-10.png)
