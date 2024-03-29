export class CuentaCorriente
{
    cliente;
    numero;
    agencia;
    #saldo;
    

    constructor() {
        this.cliente = null;
        this.numero = ``;
        this.agencia = ``;
        this.#saldo = 0;
        
    }

    depositoEncuenta(valor){
        if (valor > 0)
        this.#saldo += valor;
        return this.#saldo;
    }

    retirarDecuenta(valor){
        if (valor <= this.#saldo)
        this.#saldo -= valor;
        return this.#saldo;
    }

    versaldo() {
        return this.#saldo;
    }
}