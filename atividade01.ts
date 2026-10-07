class pessoa{
    private nome: string;
    private idade: number;


    constructor();
    constructor(nome: string);
    constructor(nome: string, idade: number);
    constructor(nome: string ="", idade: number = 0) {
        this.nome = nome;
        this.idade = idade;
    }


    public getNome(): string {
        return this.nome;
    }

    const pessoa1 = new pessoa();
    const pessoa2 = new pessoa("André");
    const pessoa3 = new pessoa("Maria", 20);

    console.log(pessoa1)
    console.log(pessoa2)
    console.log(pessoa3)
}