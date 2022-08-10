let string = "Cristian"
console.log("O valor da variavel é " + string + " e o tipo dela é " + typeof (string));

let number = 19
console.log("O valor da variavel é " + number + " e o tipo dela é " + typeof (number));

let boolean = false
console.log("O valor da variavel é " + boolean + " e o tipo dela é " + typeof (boolean));

var array = ["Joaquim", "Joana", "Junior", "Caio"]
console.log("O valor da variavel é " + array + " e o tipo dela é " + typeof (array) + " Mas não se engane é um array!!");

var object = ["Objeto"]
console.log("O valor da variavel é " + object + " e o tipo dela é " + typeof (object));

function forPuro() {
    for (let contador = 0; contador < array.length; contador++) {
        console.log("Verificando itens na lista " + contador + " = " + array[contador]);
    }
}
function forEach() {
    array.forEach(item => {
        console.log("Verificando com ForEach " + item);
    });
}
function switchString() {
    switch (string) {
        case "Cristian":
            console.log("Voce colocou " + string + " Sou eu mesmo :D");
            break;
        case "cristian":
            console.log("Sério que colocou isso? " + string + " Mais respeito ai!!");
            break;

        default:
            console.log("Quem é esse?");
            break;
    }
}

function switchNumber() {
    switch (number) {
        case 1:
            console.log("Primeiro!!");
            break;
        case 2:
            console.log("Segundo!!");
            break;

        default:
            console.log("Esse numero não vale!!");
            break;
    }

}

function ifGeral() {
    if (string == "Cristian") {
        console.log("Nome muito bonito!!");
    } else {
        console.log("Nome legalzin");
    }

    if (number > 18) {
        console.log("Pode entrar");
    } else {
        console.log("Ei menores de idade não entram!!!");
    }

    if (boolean == true) {
        console.log("Acesso Verificado");
    } else {
        console.log("Acesso Negado");
    }

    array.forEach(item => {
        if (item == "Joaquim") {
            console.log("Achei o Joaquim");
        } else {
            console.log("não é ele");
        }
    });

    if (object == "Objeto") {
        console.log("O que é esse Objeto?");
    } else {
        console.log("Não achei o Objeto");
    }
}


let porIds = document.getElementById("testando_p").textContent

console.log(porIds);

let porClasse = [...document.getElementsByClassName('btn')]
porClasse.forEach(item => {
    console.log("Listar todas as Classes pedidas: ",item.textContent);
    
})

let porTag = [...document.getElementsByTagName("p")]
console.log("Lendo todas as Tags pedidas: ", porTag);




let criarParagrafo = document.createElement("a")
criarParagrafo.href ="www"
criarParagrafo.textContent ="Paragrafo criado com javascript"
let alguem_id = document.getElementById("testando_p")
alguem_id.append(criarParagrafo)

document.body.append(criarParagrafo)

console.group("lendo conteudos com jQuery Agora");

console.log($("#testando_p"));
console.log($("#testando_p").text());
$("#alterar_1").text('Texto Alterado')

$("#alterar_1").append(
    $("<img>", {src: "https://i.pinimg.com/736x/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd--ash-ketchum-pokemon.jpg", width:"100px"})
)



let btn = [...document.getElementsByClassName("btn")]
console.log("Lista de btns : ", btn);
console.log($(".btn").text());

