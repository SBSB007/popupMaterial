import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject, Component } from '@angular/core';
export interface DialogData {
    animal: string;
    name: string;
}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: './dialog-overview-example-dialog.html'

})
export class MatDialogRefComponent {
    constructor(
        public dialogRef: MatDialogRef<MatDialogRefComponent>,
        @Inject(MAT_DIALOG_DATA) public data: string) { }
    interests = ["A", "C", "B"]
    onNoClick(): void {
        this.dialogRef.close();
    }
}