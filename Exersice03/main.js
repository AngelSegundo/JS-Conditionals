let language = prompt("En qué idioma quieres ver el mensaje? (Escriba ESPAÑOL para verlo en español\n\nDans quelle langue voulez-vous voir le message ? Tapez FRENCH pour le voir en français?")

if (language.toLowerCase() == "español") {
    alert("Dirígete a la Consola")
    console.log("Hola, mundo!")
} else if (language.toLowerCase() == "french") {
    alert("Se rendre à la console")
    console.log("Bonjour, tout le monde!")
} else {
    alert("The default language is English\n\nGo to Console")
    console.log("Hello, world!")
}


