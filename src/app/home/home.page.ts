import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})

export class HomePage {
  result: string = ''; // Resultado final

  AddValor(item: string){
    this.result += item //Pega a sequencia e atribui o novo item
  }

  LimpaResultado(){
    this.result = '' //Limpa resultado, atribuindo uma string vazia
  }
  LimpaValor(){
    this.result = this.result.slice(0, -1) //Pega ultima string e remove da variavel
  }
  
  Calcula(){
    this.result = eval(this.result) // Mostra resultado na tela, utilizando váriavel do tipo String
  }
}