

document.addEventListener('DOMContentLoaded', function cadastrarcliente() {
    const baseUrl = 'http://localhost:8080/cadastro'; 

    document.getElementById('btnCadastrar').addEventListener('click', function(event) {
        event.preventDefault();

        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let senha = document.getElementById('password').value;

        console.log("request")
        fetch(`${baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome: nome, email: email, senha: senha }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao cadastrar cliente');
            }
            return response.json();
        })
        .then(data => {
            alert('Cliente cadastrado com sucesso!');
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
        })
        .catch(error => {
            console.error('Erro ao cadastrar cliente:', error);
            alert('Erro ao cadastrar cliente. Verifique os dados e tente novamente.');
        });
    });
});


document.addEventListener('DOMContentLoaded', function cadastrarlanche() {
    const baseUrl = 'http://localhost:8080/cardapio'; 

    document.getElementById('btnCadastrar').addEventListener('click', function(event) {
        event.preventDefault();

        let nome = document.getElementById('nome').value;
        let email = document.getElementById('preco').value;
        let senha = document.getElementById('id').value;

        console.log("request")
        fetch(`${baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome: nome, preco: preco, id: id }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao cadastrar lanche');
            }
            return response.json();
        })
        .then(data => {
            alert('Lanche cadastrado com sucesso!');
            document.getElementById('nome').value = '';
            document.getElementById('preco').value = '';
            document.getElementById('id').value = '';
        })
        .catch(error => {
            console.error('Erro ao cadastrar lanche:', error);
            alert('Erro ao cadastrar lanche. Verifique e tente novamente.');
        });
    });
});

document.addEventListener('DOMContentLoaded', function cadastrarlanche() {
    const baseUrl = 'http://localhost:8080/cardapio'; 

    document.getElementById('btnEditar').addEventListener('click', function(event) {
        event.preventDefault();

        let nome = document.getElementById('nome').value;
        let email = document.getElementById('preco').value;
        let senha = document.getElementById('id').value;

        console.log("request")
        fetch(`${baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome: nome, preco: preco, id: id }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao editar lanche');
            }
            return response.json();
        })
        .then(data => {
            alert('Lanche editado com sucesso!');
            document.getElementById('nome').value = '';
            document.getElementById('preco').value = '';
            document.getElementById('id').value = '';
        })
        .catch(error => {
            console.error('Erro ao editar lanche:', error);
            alert('Erro ao editar lanche. Verifique e tente novamente.');
        });
    });
});

document.addEventListener('DOMContentLoaded', function cadastrarlanche() {
    const baseUrl = 'http://localhost:8080/cardapio'; 

    document.getElementById('btnDeletar').addEventListener('click', function(event) {
        event.preventDefault();

        let nome = document.getElementById('nome').value;
        let email = document.getElementById('preco').value;
        let senha = document.getElementById('id').value;

        console.log("request")
        fetch(`${baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome: nome, preco: preco, id: id }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao deletar lanche');
            }
            return response.json();
        })
        .then(data => {
            alert('Lanche deletado com sucesso!');
            document.getElementById('nome').value = '';
            document.getElementById('preco').value = '';
            document.getElementById('id').value = '';
        })
        .catch(error => {
            console.error('Erro ao deletar lanche:', error);
            alert('Erro ao deletar lanche. Verifique e tente novamente.');
        });
    });
});