import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { HospInfoService } from 'src/app/components/services/hosp-info.service';

@Component({
  selector: 'app-hosp-master',
  templateUrl: './hosp-master.component.html',
  styleUrls: ['./hosp-master.component.css']
})
export class HospMasterComponent {
  @ViewChild('dt1') dt1: Table | undefined;

  hospitals: any[] = [];
  status: string = '';
  hospCode: string = '';
  statusOptions: string[] = [];
  dataAvailable: boolean = true;
  hospCodeOptions: string[] = [];
  hospCodeAvailable: boolean = true;

  constructor(private hospInfoService: HospInfoService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getStatusOptions();
    this.getHospCodeOptions();
    this.searchByTransStatus();
    this.searchByHospCode();
  }
  searchByTransStatus(): void {
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

  searchByHospCode() {
    if (!this.hospCode) {
      this.getAllHospitals();
    } else {
      // Fetch hospitals based on hospCode
      this.hospInfoService.getHospByHospCode(this.hospCode).subscribe(data => {
        this.hospitals = data;
        this.checkDataAvailability();
        if (!this.hospCodeAvailable) {
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

  getHospCodeOptions(): void {
    // Fetch all hospitals
    this.hospInfoService.getHospInfo().subscribe(data => {
      this.hospCodeOptions = [...new Set(data.flatMap(hospital => hospital.hospCode))];
    });
  }

  deleteMyprofile(hospId: any): void {
    this.hospInfoService.deleteHospital(hospId).subscribe(() => {
      this.getStatusOptions();
      this.openSnackBar('Hospital Deleted successfully', 'Close');
      setTimeout(() => {
        this.searchByTransStatus();
        this.searchByHospCode();
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
