import { Component, OnInit } from '@angular/core';
import { Hour } from './hour';

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
  hours: Hour[] = [{
    label: '08:00',
    available: true
  },
  {
    label: '09:00',
    available: true
  },
  {
    label: '10:00',
    available: false
  },
  {
    label: '11:00',
    available: true
  }];

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
