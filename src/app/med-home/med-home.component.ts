import { Component } from '@angular/core';

@Component({
  selector: 'app-med-home',
  templateUrl: './med-home.component.html',
  styleUrls: ['./med-home.component.css']
})
export class MedHomeComponent {
  color1:any="#ffe6e9"
  zoom: number = 1.0;
  panelOpenState = false;
  overview:boolean=false;
  activeMatatb:number=0;
  pdfRotation: number =0;
  accordianData:any = [
                        {
                          "title": "What are the medical and surgical conditions that the applicant has?",
                        },
                        {
                          "title": "Does the applicant have any life-threatning medical condition?",
                        },
                        {
                          "title": "What are the medications that the apllicant is taking?",
                        },
                        {
                          "title": "What are the Diagnostic and Lab test that the applicant has taken in the last 5 years?",
                        },
                        {
                          "title": "Smoking History?",
                        },
                        {
                          "title": "What is the social history of the applicant?",
                        },
                        {
                          "title": "What are the medical conditions listed in the last office visit?",
                        },
                        {
                          "title": "What are the vitals in the last office visit?",
                        },
                        {
                          "title": "What are the last 1 year BP readings?",
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
}
