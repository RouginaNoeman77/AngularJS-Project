import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {
  title = 'Quest';
  reactiveForm: FormGroup;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
        Type: new FormControl('House'),
        Region: new FormControl('Coastal'),
        Area: new FormControl('BeachFront'),
        Capacity: new FormControl('0')
      
    });
}

  onSubmit() {
    const formValues = this.reactiveForm.value;
    console.log(formValues);
    this.getProperty();
  }

  getProperty() {
    const formValues = this.reactiveForm.value;
    this.apiService.getProperty(formValues.Type, formValues.Area, formValues.Region, formValues.Capacity)
      .subscribe({
        next: (response: any) => {
          console.log(response);
  
          if (response && response.length > 0) {
            alert('Request to API succeeded.');
          } else {
            alert('No properties found for the specified criteria.');
          }
        },
        error: (error: any) => {
          console.error(error);
          alert('An error occurred while making the API request.');
        }
      });
  }
  
}
