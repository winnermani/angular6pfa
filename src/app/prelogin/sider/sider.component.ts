import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/observable";
import { DataSource } from "@angular/cdk/collections";
import { TableService } from "../../prelogin/table.service";
import { Data } from "../sider/data";
import { extend } from "webdriver-js-extender";
import { ObservableMedia } from "@angular/flex-layout";

@Component({
  selector: "app-sider",
  templateUrl: "./sider.component.html",
  styleUrls: ["./sider.component.css"]
})
export class SiderComponent implements OnInit {
  menudetails = [
    {
      name: "Dashboard",
      icons: "home",
      action: "transfer"
    },
    {
      name: "Accounts",
      action: "fund"
    },
    {
      name: "Transfer",
      action: "payments"
    },
    {
      name: "setting",
      action: ""
    },
    {
      name: "MObilepayment",
      action: ""
    },
    {
      name: "Payments",
      action: ""
    },
    {
      name: "Logout",
      action: ""
    }
  ];
  constructor(private tableservice: TableService) {}
  data = [];
  ngOnInit() {
    this.tableservice
      .gettableData()
      .subscribe(restableData => (this.data = restableData));
  }
}
