const form = document.getElementById("form-telefone");
const imgCelular = 
'<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="telefone celular"/>';
const imgOutro =
    '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lcbA3NVWVLGVGZx5zSVpTx_2lU8HT8gHKQ&usqp=CAU" alt="telefone residencial"/>';
const nome = [];
const numero = [];
const img = document.getElementById("tipo");
let linhas = " ";

form.addEventListener("submit", function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    somaTotalNumero();
    somaTotalTelefones();
});

function adicionaLinha() {
    const inputNomeCadastrado = document.getElementById("nome-cadastrado");
    const inputNumeroTelefone = document.getElementById("numero-telefone");
    const inputTipo = document.getElementById("tipo");

    if (nome.includes(inputNomeCadastrado.value)) {
    alert(`O Nome ${inputNomeCadastrado.value} já foi cadastrado`);
    } else {
    nome.push(inputNomeCadastrado.value);
    numero.push(inputNumeroTelefone.value);

    let linha = "<tr>";
    linha += `<td>${inputNomeCadastrado.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += `<td>${img.value == "Celular" ? imgCelular : imgOutro}</td>`;

    linha += "</tr>";

    linhas += linha;
    }
    inputNomeCadastrado.value = "";
    inputNumeroTelefone.value = "";
    inputTipo.value = "";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function somaTotalNumero() {
    const numerofinal = somaTotalTelefones();
    document.getElementById("total").innerHTML = numerofinal;
}

function somaTotalTelefones() {
    let somaNumero = 0;
    for (let i = 0; i < numero.length; i++) somaNumero += numero[i];
    const tot = numero.length;
    return numero.length;
}