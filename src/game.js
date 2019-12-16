

const scenes = {
	menu: engine.Scene([
	
		engine.Backdrop.ScrollingPattern({
			foreground: "blue",
			background: "white",
			shape: "circle"
		}), 
		
		engine.Button({
			label: "Play",
			target: null
		}), 
		
		engine.Button({
			label: "Info",
			target: infoScene
		})
		
	]),
	info: engine.Scene([])
}

const init = scenes.menu
