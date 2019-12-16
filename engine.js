
const engine = {
    html: {
        leftArrowIco: `<span class="boxedBtn">&#x21e6;</span>`,
        upArrowIco: `<span class="boxedBtn">&#x21e7;</span>`,
        rightArrowIco: `<span class="boxedBtn">&#x21e8;</span>`,
        downArrowIco: `<span class="boxedBtn">&#x21e9;</span>`,
        getKeyBtnIco: (c) => `<span class="boxedBtn">${c}</span>`
    },

    saveGame: function()
    {
        console.warn("\"Save Game\" is not implemented.")
    },

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
}