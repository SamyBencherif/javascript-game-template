
const scenes = {
    menu: new engine.stage.Scene([
    
        new engine.builtins.backdrops.ScrollingPattern({
            foreground: "rgba(0,0,255,.05)",
            background: "white",
            shape: "square",
            coverage: .4,
            linearQuantity: 6
        }), 
    
        new engine.builtins.ui.TitleText({
            text: "Untitled Game",
            foreground: "blue",
            background: "black",
            font: "60px 'Trebuchet MS'",
            shadowOffset: 2,
            anchor: {textAlign: "center", textBaseline: "middle"},
            position: new engine.util.Point((w)=>w/2, 100)
        }),

        new engine.builtins.ui.Button({
            text: "Play",
            foreground: "blue",
            background: "black",
            font: "40px 'Trebuchet MS'",
            shadowOffset: 2,
            anchor: {textAlign: "center", textBaseline: "middle"},
            position: new engine.util.Point((w)=>w/2, 180),
            target: null
        }), 
        
        // engine.Button({
        //     label: "Info",
        //     target: infoScene
        // })
        
    ]),
    // info: engine.Scene([])
}

const game = 
{
    entry: scenes.menu
}
