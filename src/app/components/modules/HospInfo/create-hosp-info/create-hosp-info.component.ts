import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HospInfoService } from 'src/app/components/services/hosp-info.service';

@Component({
  selector: 'app-create-hosp-info',
  templateUrl: './create-hosp-info.component.html',
  styleUrls: ['./create-hosp-info.component.css']
})
export class CreateHospInfoComponent implements OnInit{
  hospInfo: any = {
    hospInfoDtls: {},
    hospCommunicationDtls: {}
  };

  stateNames: string[] = [];

  constructor(private hospInfoService: HospInfoService, private snackBar: MatSnackBar, private router: Router) {
    this.stateNames = hospInfoService.getStateNames();
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
