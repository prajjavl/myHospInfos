import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { HospInfoService } from 'src/app/components/services/hosp-info.service';

@Component({
  selector: 'app-create-hosp-info',
  templateUrl: './create-hosp-info.component.html',
  styleUrls: ['./create-hosp-info.component.css']
})
export class CreateHospInfoComponent implements OnInit {
  hospInfo: any = {
    hospInfoDtls: {},
    hospCommunicationDtls: {}
  };
  // Inside your component class
  recordStatusOptions = [
    { label: 'Active', value: 'Active' },
    // { label: 'Inactive', value: 'Inactive' }
  ];
  hospTransStatusOptions: SelectItem[] = [
    { label: 'Pending', value: 'Pending' },
    { label: 'Open', value: 'Open' },
    { label: 'Close', value: 'Close' }
  ];

  stateNames: string[] = [];

  stateOptions: SelectItem[] = [];

  constructor(private hospInfoService: HospInfoService, private snackBar: MatSnackBar, private router: Router) {
    this.stateOptions = this.hospInfoService.getStateNames().map(state => ({ label: state, value: state }));
  }

  ngOnInit(): void {
    this.resetForm();
  }

  createHosp(): void {
    this.hospInfoService.createHospInfo(this.hospInfo).subscribe(
      response => {
        this.openSnackBar('Hospital created successfully with HospId: ', this.hospInfo.hospId);
      },
      error => {
        console.error('Error creating hospital:', error);
        this.openSnackBar('Failed to create hospital', 'Close');
      }
    );
    setTimeout(() => {
      this.router.navigate(['/hospInfo']);
    }, 3000);
  }

  resetForm(): void {
    this.hospInfo = {
      hospInfoDtls: {},
      hospCommunicationDtls: {}
    };
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000, // Adjust the duration as needed
    });
  }
}
