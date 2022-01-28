import { Component, OnInit } from '@angular/core';
import {SidenavService} from '../../services/sidenav.service'
import { MatDialog, MatDialogConfig, } from "@angular/material/dialog";
import {ModelboxComponent} from '../modelbox/modelbox.component'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  [x: string]: any;
  
  dataSource : any = [];

  columnsToDisplay = ['Title','started by ','creation date', 'last-updates', 'last-update', 'id','action'];
  highlightedRows: any;
  highlightedRowss: any;


  constructor(private service:SidenavService) {
    
   }
  

  ngOnInit(){
    this.service.getUsers().subscribe((response) =>{
      this.dataSource = response
    })
  }
  onChange() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ModalComponent, dialogConfig);
  }
  highlight(row: { name: string | number; }) {
    this.highlightedRows.push(row);
    this.highlightedRowss[row.name] = !this.highlightedRowss[row.name];
  }

  

}
function ModalComponent(ModalComponent: any, dialogConfig: any) {
  throw new Error('Function not implemented.');
}

