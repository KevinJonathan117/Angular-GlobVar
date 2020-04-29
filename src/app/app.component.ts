import { Component } from '@angular/core';
import { GlobSerService } from './glob-ser.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  datadariglob = '';
  datahtml : String;

  constructor (public globalVariable : GlobSerService) {
    this.datadariglob = this.globalVariable.getData();
  }

  ubahdata() {
    this.globalVariable.setData(this.datahtml);
    this.datahtml = "";
    this.datadariglob = this.globalVariable.getData();
  }
}
