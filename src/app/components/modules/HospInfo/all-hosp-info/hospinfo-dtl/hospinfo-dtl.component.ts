import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HospInfoService } from 'src/app/components/services/hosp-info.service';

@Component({
  selector: 'app-hospinfo-dtl',
  templateUrl: './hospinfo-dtl.component.html',
  styleUrls: ['./hospinfo-dtl.component.css']
})
export class HospinfoDtlComponent {

  hospitals: any[] = [];
  status: string = '';
  statusOptions: string[] = [];
  dataAvailable: boolean = true;

  constructor(private hospInfoService: HospInfoService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getStatusOptions();
    this.search();
  }

  search(): void {
    // If no status is selected, fetch all hospitals
    if (!this.status) {
      this.getAllHospitals();
    } else {
      // Fetch hospitals based on selected status
      this.hospInfoService.getHospInfoByStatus(this.status).subscribe(data => {
        this.hospitals = data;
        this.checkDataAvailability();
        // If no data is available for the selected status, fetch all hospitals
        if (!this.dataAvailable) {
          this.getAllHospitals();
        }
      });
    }
  }

  getAllHospitals(): void {
    this.hospInfoService.getHospInfo().subscribe(data => {
      this.hospitals = data;
      this.checkDataAvailability();
    });
  }

  getStatusOptions(): void {
    // Fetch all hospitals
    this.hospInfoService.getHospInfo().subscribe(data => {
      this.statusOptions = [...new Set(data.flatMap(hospital => hospital.hospTransStatusId))];
    });
  }

  deleteMyprofile(hospId: any): void {
    this.hospInfoService.deleteHospital(hospId).subscribe(() => {
      this.getStatusOptions(); 
      this.openSnackBar('Hospital Deleted successfully', 'Close');
      setTimeout(() => {
        this.search(); 
      }, 300);
    });
  }

  private checkDataAvailability(): void {
    this.dataAvailable = this.hospitals.length > 0;
  }

  openUpdatePage(hospId: number) {
    // Navigate to the update page with the selected diary entry ID
    this.router.navigate(['/update', hospId]);
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000, // Adjust the duration as needed
    });
  }

}
