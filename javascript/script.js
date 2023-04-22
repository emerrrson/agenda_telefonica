const form = document.getElementById('form-agenda');

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-pessoa');
    const inputNumeroContato = document.getElementById('tel-pessoa');

    let linha = '<tr>';
    linha +=`<td>${inputNomeContato.value}</td>`
    
    linha += `<td>${inputNumeroContato.value}</td>`
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = ''; // Limpar o campo do input
    inputNumeroContato.value = '';

    
})


