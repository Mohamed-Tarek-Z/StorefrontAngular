import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.css']
})
export class UserDataFormComponent implements OnInit {

  @Output() name: EventEmitter<string> = new EventEmitter();

  fullName: string = '';
  address: string = '';
  creditCard!: number;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.name.emit(this.fullName);
  }

}
