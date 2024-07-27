import { Cliente } from "./Cliente.js"; 
import { ContaCorrente } from "./ContaCorrente.js";


const Conta1 = new ContaCorrente();
Conta1._cliente = new Cliente();
Conta1._cliente.nome = "alice";
Conta1._cliente.cpf = 88822233445;
Conta1.agencia = 1001;
Conta1.saldo = 300;

const conta2 = new ContaCorrente();
conta2._cliente = new Cliente;
conta2._cliente.nome = "Gustavo";
conta2._cliente.cpf = 11122233445;
conta2.agencia = 1001;
conta2.saldo = 300;


console.log(Conta1);
console.log(conta2);