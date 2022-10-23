let language = prompt("In which language do you want to see the message?\n\nSpanish\n\nFrench\n\nGerman\n\nJapanese\n\nChinese\n\nPortuguese\n\nItalian\n\nRussian\n\nRomanian")

switch (language.toLowerCase()) {
    case "spanish":
        alert("Dirígete a la Consola")
        console.log("Hola, mundo!")
        break
    case "french":
        alert("Se rendre à la console")
        console.log("Bonjour, le monde !")
        break
    case "german":
        alert("Zur Konsole gehen")
        console.log("Hallo, Welt!")
        break
    case "japanese":
        alert("コンソールに向かう")
        console.log("ハロー、ワールド")
        break
    case "chinese":
        alert("前往控制台")
        console.log("你好，世界!")
        break
    case "portuguese":
        alert("Cabeça para a Consola")
        console.log("Olá, mundo!")
        break
    case "italian":
        alert("Dirigetevi verso la console")
        console.log("Ciao, mondo!")
        break
    case "russian":
        alert("Направляйтесь к консоли")
        console.log("Здравствуй, мир!")
        break
    case "romanian":
        alert("Mergeți la consolă")
        console.log("Bună ziua, lume!")
        break
    case "":
        alert("You have to indicate something!!!")
        location.reload()
        break
    default:
        alert("Sorry! don't know this language.\n\nThe default language is English\n\nGo to Console")
        console.log("Hello, world!")
}


