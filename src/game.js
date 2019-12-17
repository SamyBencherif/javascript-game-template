

const scenes = {
	menu: new engine.stage.Scene([
	
		new engine.builtins.backdrops.ScrollingPattern({
			foreground: "blue",
			background: "white",
			shape: "circle",
			shapeSize: 10
		}), 
		
		// engine.Button({
		// 	label: "Play",
		// 	target: null
		// }), 
		
		// engine.Button({
		// 	label: "Info",
		// 	target: infoScene
		// })
		
	]),
	// info: engine.Scene([])
}

const game = 
{
	entry: scenes.menu
}