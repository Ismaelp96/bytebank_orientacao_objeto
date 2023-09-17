import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const cliente1 = new Cliente('Ismael', 11122233309)
const cliente2 = new Cliente('Patrick', 22233311109)
console.log(cliente2)

const conta1 = new ContaCorrente(cliente1, 1010)
conta1.depositar(500)

const conta2 = new ContaCorrente(cliente2, 1002)

let valor = 200
conta1.transferir(valor, conta2)

console.log(ContaCorrente.numeroDeContas)
