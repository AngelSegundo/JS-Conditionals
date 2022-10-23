let language = prompt("In which language do you want to see the message?\n\nSpanish / Español\n\nFrench / Français\n\nGerman / Deutsch\n\nJapanese / やまと\n\nChinese / 中国\n\nPortuguese / Português\n\nItalian / Italiano\n\nRussian / Русский\n\nRomanian / Românesc")

switch (language.toLowerCase()) {
    case "spanish":
    case "español":
        alert("Dirígete a la Consola")
        console.log("Hola, mundo!")
        break
    case "french":
    case "français":
        alert("Se rendre à la console")
        console.log("Bonjour, le monde !")
        break
    case "german":
    case "deutsch":
        alert("Zur Konsole gehen")
        console.log("Hallo, Welt!")
        break
    case "japanese":
    case "やまと":
        alert("コンソールに向かう")
        console.log("ハロー、ワールド")
        break
    case "chinese":
    case "中国":
        alert("前往控制台")
        console.log("你好，世界!")
        break
    case "portuguese":
    case "português":
        alert("Cabeça para a Consola")
        console.log("Olá, mundo!")
        break
    case "italian":
    case "italiano":
        alert("Dirigetevi verso la console")
        console.log("Ciao, mondo!")
        break
    case "russian":
    case "pусский":
        alert("Направляйтесь к консоли")
        console.log("Здравствуй, мир!")
        break
    case "romanian":
    case "românesc":
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


