
const engine = {

    constants:
    {
        html: {
            leftArrowIco: `<span class="boxedBtn">&#x21e6;</span>`,
            upArrowIco: `<span class="boxedBtn">&#x21e7;</span>`,
            rightArrowIco: `<span class="boxedBtn">&#x21e8;</span>`,
            downArrowIco: `<span class="boxedBtn">&#x21e9;</span>`,
            getKeyBtnIco: (c) => `<span class="boxedBtn">${c}</span>`
        }
    },

    presentation:
    {
        popOut: function () {
            engine.saveGame()
            document.querySelector("#startHintBox").classList.remove('hidden')
            document.querySelector("#startHint").innerText = "Game is popped out."
            var W = window.open(window.location.href + '?windowed=true','_blank','width=800,height=800')
        },
    
        enterWindowedMode: function() {
            var gameView = document.querySelector("#gameView")
    
            document.body.innerHTML = ""
            document.body.appendChild(gameView)
            document.body.style.margin = "0"
    
            gameView.style.width = "100vw"
            gameView.style.height = "100vh"
        }
    },

    state: 
    {
        activeScene: null
    },

    rendering:
    {
        canvas: null,
        ctx: null,
        enabled: false,
        update: function()
        {
            if (engine.activeScene)
            {
                this.activeScene.gameObjects.forEach((g) => {g.update()})
            }

            if (engine.rendering.enabled)
                requestAnimationFrame(engine.rendering.update)
        }
    },

    stage: {
        Scene: function(gameObjects)
        {
            this.gameObjects = Set(gameObjects)
        }
    },

    initializeGame: function()
    {

        if (typeof game == "undefined")
        {
            console.error("No game defined. Ensure game.js is linked and contains a game definition.")
            return
        }

        if (typeof game.entry == "undefined")
        {
            console.error("No game entry point defined. Please specify an entry in game.js")
            // return
        }

        engine.rendering.canvas = document.createElement("canvas")

        engine.rendering.canvas.style.width = "100%"
        engine.rendering.canvas.style.height = "100%"

        engine.rendering.canvas.width = document.querySelector('#gameView').offsetWidth
        engine.rendering.canvas.height = document.querySelector('#gameView').offsetHeight

        engine.rendering.canvas.style.imageRendering = "pixelated"

        engine.rendering.ctx = engine.rendering.canvas.getContext('2d')

        document.querySelector('#clickToStart').classList.add("hidden")

        document.querySelector('#gameView').appendChild(engine.rendering.canvas)

        engine.rendering.enabled = true
        requestAnimationFrame(engine.rendering.update)

        // add various events
        //document.querySelector('#gameView').addEventListener

        // onresize
        // engine.rendering.canvas.width = document.querySelector('#gameView').offsetWidth
        // engine.rendering.canvas.height = document.querySelector('#gameView').offsetHeight
    },

    saveGame: function()
    {
        console.warn("\"Save Game\" is not implemented.")
    },
}