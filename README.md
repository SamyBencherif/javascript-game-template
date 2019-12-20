# javascript-game-template

## Intro

A template project for small to medium-small javascript games.

| **Included** | **Planned** | **Imagined** |
| - | - | - |
| <ul><li>HTML page</li><li>Configuration</li><li>Canvas Generation</li><li>Scene Management</li><li>Object Management</li><li>Some Builtin Primitives</li></ul>  | <ul><li>Event Handling</li><li>Additional Builtin Primitives</li></ul> | <ul><li>2d Physics</li><li>3d Rendering</li></ul> |

## Getting Started

The first step is to modify `src/gameconfig.js` to suit your game.
You can use the `keyBtn` or arrow constants to help with game instructions.

```javascript
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
```

Preview:

![](https://raw.githubusercontent.com/wiki/SamyBencherif/javascript-game-template/screenshots/concept-html-2019-12-10.png)
