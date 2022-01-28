import { Component, OnInit } from '@angular/core';
import{ SidenavService } from '../../services/sidenav.service'
import { MatDialog } from '@angular/material/dialog';
import {ModelboxComponent} from '../modelbox/modelbox.component'

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  dialogValue!: string;
  sendValue!: string;
  [x: string]: any;
  dataSource : any = [];

  columnsToDisplay = ['Title','started by ','creation date', 'last-updates', 'last-update','action'];
  highlightedRows: any;
  highlightedRowss: any;

  constructor(private service:SidenavService ,  public dialog: MatDialog) { }

  ngOnInit() {
    this.service.getUsers().subscribe((response) =>{
      this.dataSource = response
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModelboxComponent, {
      height: '500px',  
      width: '550px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.dialogValue = result.data;
    });
  }

}
