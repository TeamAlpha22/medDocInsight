import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-med-home',
  templateUrl: './med-home.component.html',
  styleUrls: ['./med-home.component.css']
})
export class MedHomeComponent {
  isChatOpen:boolean = false
  color1:any="#ffe6e9"
  zoom: number = 1.0;
  panelOpenState = false;
  overview:boolean=false;
  activeMatatb:number=0;
  pdfRotation: number =0;
  accordianData:any = [
                        {
                          "title": "ICD codes",
                          "desc": "K51.019 (Ulcerative (chronic) pancolitis with unspecified complications) <br> Date: 3 October 2023<br> <a href='https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf' target='_blank'> Reference Text: The Patient has been diagnosed with Ulcerative Colitis(K51.019). Further testing advised R70.0(Elevated ESR)</a> <br> Date: 10 October 2023 <br> <a href='https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf' target=''>Reference Text: The blood report of patient shows elevated ESR(70.0)</a><br> Page Number: 5"
                        },
                        {
                          "title": "Medication History (Within past 6 months)",
                          "desc": ""
                        },
                        {
                          "title": "Ulcerative collitis",
                          "desc": "K51.019 (Ulcerative (chronic) pancolitis with unspecified complications) <br> Date: 3 October 2023 <br><a href='https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf' target='_blank'> Reference Text: The Patient has been diagnosed with Ulcerative Colitis(K51.019). Further testing advised R70.0(Elevated ESR)</a> <br> Page Number-5"
                        },
                        {
                          "title": "Cardiac Disease",
                          "desc":"No Data Found"
                        },
                        {
                          "title": "Blood Disorders",
                          "desc":"DVT <br> Reference Text -The patient has a medical history of DVT <br> Page No:- 4"
                        },
                        {
                          "title": "Lung Conditions",
                          "desc":"No Data Found"
                        },
                        {
                          "title": "Disease Progression",
                          "desc":"Knee pain - relapsing <br> Reference Text - worsening pain in knee"
                        }
                      ];
  dataInsight:any = [
                      {
                        "title": "Demographics",
                      },
                      {
                        "title": "Physical Condition",
                      }

                    ];
  dataInsight2:any = [
                      {
                        "title": "Filter the data of subject between age 35 and 65 and with precondition as hypertension and either two doses or no vaccine??",
                      },
                      {
                        "title": "What is the distribution of male and female in subjects??",
                      }

                    ];
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor(
    public dialog: MatDialog
  ) {}

  onChangeOverview(){

  }
  onChangeMedical(event:any){
    console.log('event',event.index)
    this.activeMatatb = event.index;
    this.overview= !this.overview;

  }
 //Zoom funtion for pdf section
  incrementZoom(amount: number) {
    this.zoom += amount;
  }
  //Zoom funtion for pdf section
  incrementZoom2() {
    this.zoom = 2.5;
  }
  //Zoom funtion for pdf section
  incrementZoom3() {
    this.zoom = 1;
  }
  rotatePdf(){
    this.pdfRotation = this.pdfRotation +=90;
  }

  openQuery(){
    this.isChatOpen = !this.isChatOpen
  }
  uploadDialog() {

    const dialogRef = this.dialog.open(FileUploadComponent, {
      width: '800px',
      height: '450px',
    });
  }
}
