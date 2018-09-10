import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  date: string;
  firstName: string;
  lastName: string;
  telephone: string;

  constructor() { }

  ngOnInit() {
  }

  setAppointment(firstName, lastName, telephone, date) {
    this.date = date;
    this.firstName = firstName;
    this.lastName = lastName;
    this.telephone = telephone;
  }
}
