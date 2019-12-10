

const scenes = {
	menu: Scene([
	
		Backdrop.ScrollingPattern({
			foreground: "blue",
			background: "white",
			shape: "circle"
		}), 
		
		Button({
			label: "Play"
			target: null
		}), 
		
		Button({
			label: "Info"
			target: infoScene
		})
		
	]),
	info: Scene([])
}

const init = scenes.menu
