import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-roleandpermission',
  templateUrl: './roleandpermission.component.html',
  styleUrls: ['./roleandpermission.component.css']
})
export class RoleandpermissionComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['role', 'edit', 'delete', 'copy'];
  filterSelectObj = [];

  constructor() {
   }

  ngOnInit() {
    this.getRemoteData();

  }
  getFilterObject(fullObj: any[], key: string | number) {
    const uniqChk: any[] = [];
    fullObj.filter((obj) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  getRemoteData() {

    const remoteDummyData = [
      {
        "role": "Manager",
        "edit": "",
        "delete": "",
        "copy": "",
      },
      {
        "role": "Admin",
        "edit": "",
        "delete": "",
        "copy": "",
      },
      {
        "role": "Account",
        "edit": "",
        "delete": "",
        "copy": "",
      },
      {
        "role": "Analyst",
        "edit": "",
        "delete": "",
        "copy": "",
      },
    ];
    this.dataSource.data = remoteDummyData;

    
  }

}
