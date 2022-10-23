let topping = prompt("Que topping quieres con tu helado?\n\nOreo\nKitKat\nBrownie\nLacasitos\n")
let iceCream = 1.90
let price = ""
let total = ""

switch (topping.toLowerCase()) {
    case "oreo":
        price = 1.00
        break
    case "kitkat":
        price = 1.50
        break
    case "brownie":
        price = 0.75
        break
    case "lacasitos":
        price = 0.95
        break
    default:
        price = 0
}

total = iceCream + price
topping = topping.toLowerCase()

if (topping == "oreo" || topping == "kitkat" || topping == "brownie" || topping == "lacasitos") {
    document.write(`Helado con ${topping} cuesta: ${total} €`)
} else {
    alert ("No tenemos ese topping, lo sentimos.")
    document.write(`Helado sin topping cuesta:<br><br> ${total} €`)
}
