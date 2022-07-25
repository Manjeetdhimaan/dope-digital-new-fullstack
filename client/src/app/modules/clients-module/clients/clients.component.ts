import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(private clientService: ClientsService) { }

  clientsArray: any[] = [];
  isClientComponent:boolean = true;
  
  ngOnInit(): void {
   this.clientsArray = this.clientService.clientsArray;
  }

}
