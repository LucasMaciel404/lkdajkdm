// class Biblioteca {
//     estante = []
//     adicionar(livro) {
//         if (livro) {
//             this.estante.push(livro)
//         } else {
//             console.log('livro indefinido.')
//         }
//     }
//     listar() {
//         console.table(this.estante)
//     }
//     emprestar(nome) {
//         this.estante.forEach((element, index) => {
//             if (element.titulo == nome){
//                 element.setStatus('emprestado')  
//             }
//         })
//     }
//     devolver(nome) {
//         this.estante.forEach((element, index) => {
//             if (element.titulo == nome){
//                 element.setStatus('livro devolvido') 
//             }
//         })
//     }
//     disponibilidade(nome){
//         this.estante.forEach((element, index) => {
//             if (element.titulo == nome){
//                 console.log(element.getStatus());
//             }
//         })
//     }
// }

// class CriarLivro {
//     titulo;
//     autor;
//     data_publicacao;
//     #status;

//     constructor(titulo= '', autor= '', data_publicacao= '', status = 'disponivel') {
//         this.titulo = titulo;
//         this.autor = autor;
//         this.data_publicacao = data_publicacao;
//         this.status = status;
//     }
//     getStatus(){
//         console.log(this.status)
//     }
//     setStatus(valor){
//         this.status = valor;
//     }
// }
// const livro01 = new CriarLivro('Ado ado ado...', 'D. Flamingo', 1999, 'indisponivel');
// const livro02 = new CriarLivro('Quer outra?', '?? meme n indentificado ??', 2024, 'disponivel');
// const biblioteca = new Biblioteca();
// biblioteca.adicionar(livro01)
// biblioteca.adicionar(livro02)
// biblioteca.adicionar(livro01)
// biblioteca.adicionar(livro02)
// biblioteca.adicionar(livro02)
// biblioteca.adicionar(livro01)
// biblioteca.adicionar(livro01)
// biblioteca.adicionar(livro01)
// biblioteca.adicionar(livro01)
// biblioteca.adicionar(livro01)
// biblioteca.adicionar(livro02)
// biblioteca.adicionar(livro02)
// biblioteca.adicionar(livro02)
// biblioteca.adicionar(livro02)
// biblioteca.adicionar(livro01)
// biblioteca.adicionar(livro01)

// biblioteca.devolver('Ado ado ado...')
// biblioteca.listar()

class Conta {
    #saldo
    constructor(titular, agencia, numero, saldo) {
        this.titular = titular;
        this.agencia = agencia;
        this.numero = numero;
        this.#saldo = saldo;
    }
    getSaldo() {
        console.log(this.#saldo);
    }

    setSaldo(valor) {
        this.saldo += valor
    }
    setSacar(valor) {
        if (valor <= this.valor) {
            this.#saldo -= valor
        }
    }

}
class CS extends Conta {
    constructor(empresa, titular, agencia, numero, saldo) {
        super(titular, agencia, numero, saldo);
        this.empresa = empresa
    }
}
class CC extends Conta {
    #limiteImprestimo
    #limiteTrasferencia
    temEmprestimo
    constructor(limiteEmprestimo, limiteTransferencia, temEmprestimo = false, titular, agencia, numero, saldo) {
        super(titular, agencia, numero, saldo);
        this.limiteEmprestimo = limiteEmprestimo
        this.limiteTransferencia = limiteTransferencia
        this.temEmprestimo = temEmprestimo
    }
    trasnferir(valor) {
        if (valor <= this.valor) {
            this.setSacar(valor);
        }
    }
    depositar(valor) {
        this.setSaldo(valor)
    }
    emprestimo(valor) {
        if (this.temEmprestimo) {
            if (this.#limiteImprestimo >= valor) {
                console.log(`imprestimo de R$:${valor} foi aprovado!!`)
            } else {
                console.log('valor do imprestimo muito alto :(')
            }
        } else {
            console.log('A aprovação do imprestimo foi reprovada :(')
        }
    }
}
class CP extends Conta {
    #dataAniversario
    #rendimento
    constructor(rendimento, aniver, titular, agencia, numero, saldo) {
        super(titular, agencia, numero, saldo);
        this.#rendimento = rendimento;
        this.#dataAniversario = aniver;
    }
    aplicarRendimento() { }
    trasnferir(valor) {
        if (valor <= this.valor) {
            this.setSacar(valor);
        }
    }
    depositar(valor) {
        this.setSaldo(valor)
    }
}

const MyAccont = new CS('Construtora LTDA', 'Lucas', '1234', '5678910', 10)
MyAccont.getSaldo()