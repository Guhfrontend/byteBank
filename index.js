import { Cliente } from "./Cliente.js"; 
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente("Ricardo", 88822233445);
const Conta1 = new ContaCorrente(cliente1, 300);
Conta1.saldo = 200;

const cliente2 = new Cliente("Alice", 11122233445);
const Conta2 = new ContaCorrente(cliente2, 400);
Conta2.saldo = 100;

console.log(Conta1);
console.log(Conta2);