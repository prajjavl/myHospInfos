import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HospInfoService } from 'src/app/components/services/hosp-info.service';

@Component({
  selector: 'app-update-hosp-info',
  templateUrl: './update-hosp-info.component.html',
  styleUrls: ['./update-hosp-info.component.css']
})
export class UpdateHospInfoComponent implements OnInit {
  hospInfo: any = {
    hospInfoDtls: {},  // Ensure this property is initialized
    hospCommunicationDtls: {}
  };

  constructor(private route: ActivatedRoute, private hospInfoService: HospInfoService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hospInfo = {
        hospInfoDtls: {},  // Initialize hospInfoDtls property
        hospCommunicationDtls: {}
      };
      this.hospInfo.hospId = +params['hospId'];
      this.loadHospitalDetails();
    });
  }

  loadHospitalDetails(): void {
    this.hospInfoService.getHospInfoById(this.hospInfo.hospId).subscribe(
      response => {
        console.log('Hospital details response:', response);
        this.hospInfo = response[0];  // Ensure to access the first item if the response is an array
      },
      error => {
        console.error('Error loading hospital details:', error);
      }
    );
  }

  // UpdateHospInfoComponent
  updateHosp(): void {
    this.hospInfoService.updateHospInfo(this.hospInfo.hospId, this.hospInfo).subscribe(
      response => {
        // Handle the response as needed
        console.log('Hospital updated successfully:', response);
        this.openSnackBar('Hospital updated successfully', 'Close');
      },
      error => {
        console.error('Error updating hospital:', error);
        this.openSnackBar('Error updating hospital.', 'Close');
      }
    );
    setTimeout(() => {
      this.router.navigate(['/hospInfo']);
    }, 2000);
  }
  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000, // Adjust the duration as needed
    });
  }

}
