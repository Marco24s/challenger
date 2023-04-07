import {cliente} from "./cliente.js";
import {CuentaCorriente} from "cuentaCorriente.js";

const cliente = new cliente();
cliente.nombreCliente = "marcos";
cliente.dniCliente = "25564330";
cliente.rutCliente = "001";


const cuentaMarcos = new CuentaCorriente();
cuentaMarcos.numero = "1";
cuentaMarcos.agencia = "001";
cuentaMarcos.cliente = cliente;

console.log (cuentaMarcos)

 let saldo = cuentaMarcos.versaldo();
 console.log ("el saldo actual es " +saldo)



 /*cuentaMarcos.saldo = 0;*/

 saldo = cuentaMarcos.depositoEncuenta(500);
 console.log ("el saldo actual es " +saldo)
 saldo = cuentaMarcos.retirarDecuenta(100);
 console.log ("el saldo actual es " +saldo)
 




/*const cliente1 = new Cliente();

cliente1.nombreCliente = "José";
cliente1.dniCliente = "13232";

const cuentaCorriente1 = new CuentaCorriente();

cuentaCorriente1.numero = "232323";
cuentaCorriente1.saldo = 5000;

const cliente2 = new Cliente();

cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "13804050";

const cuentaCorriente2 = new CuentaCorriente();

cuentaCorriente2.numero = "123434343";
cuentaCorriente2.saldo = 1000;

console.log(cliente1);
console.log(cuentaCorriente1);
console.log(cliente2);
console.log(cuentaCorriente2);*/
