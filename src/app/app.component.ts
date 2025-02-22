import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmployeeComponent} from "./component/employee/employee.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmployeeComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng17-curd-app';
}
