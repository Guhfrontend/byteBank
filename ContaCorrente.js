import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    _cliente = null;
    agencia;
    saldo;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        };
    }

    get cliente(){
        return this._cliente;
    };

    sacar(valor){
        if(this.saldo > valor)
            this.saldo -= valor;
            return valor;
    };

    depositar(valor){
        if(valor <= 0) {
            return;
        }
            this.saldo += valor;    
    };

    transferir(valor, conta){
       const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    };
};