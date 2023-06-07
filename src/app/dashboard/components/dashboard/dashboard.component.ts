import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  statisticsForm!: FormGroup;
  statisticsData!: any;
  table!: number;
  lamp!: number;
  chair!: number;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.statisticsForm = this.fb.group({
      chairs: [],
      tables: [],
      lamps: [],
    });
  }
  onSubmit() {
    console.log(this.statisticsForm.value);
    this.statisticsData = this.statisticsForm.value;
    this.table = this.statisticsForm.value.tables;
    this.lamp = this.statisticsForm.value.lamps;
    this.chair = this.statisticsForm.value.chairs;
  }
}
