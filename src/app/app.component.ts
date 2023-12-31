import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = "La Calculadora";
  operandoA : number = 0;
  operandoB : number = 0;
  resultado : number = 0;

  sumar():void{
    this.resultado = this.operandoA + this.operandoB;
  }
  restar():void{
    this.resultado = this.operandoA - this.operandoB;
  }
  multiplicar():void{
    this.resultado = this.operandoA * this.operandoB;
  }
  dividir():void{
    this.resultado = this.operandoA / this.operandoB;
  }
}
