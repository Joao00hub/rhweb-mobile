import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios-desligados',
  templateUrl: './funcionarios-desligados.page.html',
  styleUrls: ['./funcionarios-desligados.page.scss'],
})
export class FuncionariosDesligadosPage implements OnInit {
  visibleSearchbar: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  exibiSearchbar()
  {
      this.visibleSearchbar = !this.visibleSearchbar;
  }
}
