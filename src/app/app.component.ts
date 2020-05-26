import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDialogRefComponent } from './matDialogRef';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private matDialog:MatDialog){

  }
  title = 'MatPopUPModalExample';

  openDialog(){
    console.log("Dialog will open from this console");
    this.matDialog.open(MatDialogRefComponent, {
      width: '500px',
      data : "This is a Message from Dialog Box"
    });
  }
}
