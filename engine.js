
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
    
        enterWindowedMode: function()
        {
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

    builtins: 
    {
        backdrops:
        {
            ScrollingPattern:
            function(options)
            {
                Object.assign(this, options)

                this.shape = this.shape.toLowerCase()

                if ( this.shape != "square" )
                {
                    if ( this.shape != "circle" && this.shape != "triangle" )
                    {
                        console.error("Shape " + this.shape + " is not implemented yet.")
                    }
                    else
                    {
                        console.error("Shape " + this.shape + " is not implemented. Please contact the developer.")
                    }
                }

                this.t = 0

                this.update = function()
                {
                    const ctx = engine.rendering.ctx
                    const w = engine.rendering.canvas.width
                    const h = engine.rendering.canvas.height

                    ctx.fillStyle = this.background

                    ctx.fillRect(0, 0, w, h)

                    ctx.fillStyle = this.foreground

                    const size = Math.min(w, h) / this.linearQuantity
                    const ssize = size*this.coverage
                    
                    const trackX = -size
                    const trackY = -size
                    const trackWidth = w + 2*size
                    const trackHeight = h + 2*size

                    for (var x=0; x<trackWidth/size; x++)
                    {
                        for (var y=0; y<trackHeight/size; y++)
                        {
                            ctx.save()

                            const m = 500
                            ctx.translate( trackX + (this.t + size*x) % trackWidth, trackY + (this.t + size*y) % trackHeight )
                            ctx.rotate(this.t / 30)

                            switch (this.shape) {
                                case "square":
                                    ctx.fillRect(-ssize/2, -ssize/2, ssize, ssize)
                                break
                                case "circle":
                                break
                                case "triangle":
                                break
                            }

                            ctx.restore()
                        }
                    }


                    this.t ++;
                }
            }
        },

        ui: {
            TitleText: 
            function(options)
            {
                Object.assign(this, options)

                this.update = function()
                {
                    const ctx = engine.rendering.ctx

                    ctx.font = this.font
                    ctx.fillStyle = this.background

                    ctx.textAlign = this.anchor.textAlign
                    ctx.textBaseline = this.anchor.textBaseline

                    ctx.save()
                    ctx.translate(this.position.getX(), this.position.getY())
                    ctx.translate(this.shadowOffset, this.shadowOffset)
                    ctx.fillText(this.text, 0, 0)
                    ctx.fillStyle = this.foreground
                    ctx.translate(-this.shadowOffset, -this.shadowOffset)
                    ctx.fillText(this.text, 0, 0)
                    ctx.restore()
                }
            }
        }
    },

    rendering:
    {
        canvas: null,
        ctx: null,
        enabled: false,
        update: function()
        {
            if (engine.state.activeScene)
            {
                engine.state.activeScene.gameObjects.forEach((g) => {if (g.update) g.update()})
            }

            if (engine.rendering.enabled)
                requestAnimationFrame(engine.rendering.update)
        }
    },

    stage: {
        Scene: function(gameObjects)
        {
            this.gameObjects = new Set(gameObjects)
        }
    },

    util: {
        Point: function(X_fn_or_val, Y_fn_or_val)
        {
            this.getX = function()
            {
                if (typeof X_fn_or_val == "function")
                {
                    return X_fn_or_val(engine.rendering.canvas.width)
                }
                else 
                {
                    return X_fn_or_val
                }
            }

            this.getY = function()
            {
                if (typeof Y_fn_or_val == "function")
                {
                    return Y_fn_or_val(engine.rendering.canvas.height)
                }
                else 
                {
                    return Y_fn_or_val
                }
            }
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

        engine.state.activeScene = game.entry

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
