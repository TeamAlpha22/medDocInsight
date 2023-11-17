import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { Router } from '@angular/router';
import { EventEmiterService } from '../services/event-emiter.service';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SerpAPIService } from '../services/serp-api.service';
import { PdfViewerComponent } from 'ng2-pdf-viewer/src/app/pdf-viewer/pdf-viewer.component';


@Component({
  selector: 'app-med-home',
  templateUrl: './med-home.component.html',
  styleUrls: ['./med-home.component.css']
})
export class MedHomeComponent {
  stringToSearch = 'hi';
  quesValue:string ="";
  isChatOpen:boolean = false;
  color1:any="#ffe6e9"
  zoom: number = 1.0;
  panelOpenState = false;
  overview:boolean=false;
  activeMatatb:number=0;
  pdfRotation: number =0;
  accordianData:any = [{
                          "title": "Document Summary",
                          "desc": "Please Wait, Doc Summary being loading......"
                        },
                        {
                          "title": "ICD codes",
                          "desc": "<b>K51.019(Ulcerative Pancolitis)</b> <br> Date: 2019-01-27<br> <a href='javascript:void(0)'> Reference Text: K51.019 </a> <br> Page Number: 5 <br><b>R70.0(Elevated ESR) </b><br> Date: 2019-02-05<br> <a href='javascript:void(0)'>Reference Text: R70.0</a><br> Page Number: 5\
                          <br><b>E118(Diabetes)</b> <br> Date: 2019-02-12<br> <a href='javascript:void(0)'> Reference Text: E118 </a> <br> Page Number: 5 <br><b>E78.1(Hypertriglyceridemia (disorder)) </b><br> Date: 1991-02-15<br> <a href='javascript:void(0)' >Reference Text: E78.1</a><br> Page Number: 5 \
                          <br><b>E88.810(Metabolic syndrome X (disorder))</b> <br> Date: 2017-02-18<br> <a href='javascript:void(0)'> Reference Text: E88.810 </a> <br> Page Number: 5 <br><b> I82.4(DVT) </b><br> Date: 2019-02-18<br> <a href='javascript:void(0)' >Reference Text: I82.40</a><br> Page Number: 5\
                          <br><b>M06.9(Rheumatoid Arthritis)</b> <br> Date: 2019-02-21<br> <a href='javascript:void(0)'> Reference Text: M06.9 </a> <br> Page Number: 5 <br><b> R73.9(Hyperglycemia (disorder)) </b><br> Date: 2019-02-18<br> <a href='javascript:void(0)' >Reference Text: R73.9</a><br> Page Number: 5",
                          "page_num": 5
                        },

                        {
                          "title": "Medication History (Within past 6 months)",
                          "desc": ""
                        },
                        {
                          "title": "Ulcerative collitis",
                          "desc": "<b>K51.019 (Ulcerative (chronic) pancolitis with unspecified complications) </b><br> Date: 3 October 2023 <br><a href='javascript:void(0)' > Reference Text: The Patient has been diagnosed with Ulcerative Colitis(K51.019). Further testing advised</a><br> Page Number: 5",
                          "page_num": 2

                        },
                        {
                          "title": "Cardiac Disease",
                          "desc":"No Data Found"
                        },
                        {
                          "title": "Blood Disorders",
                          "desc":"<b>DVT</b> <br> <a href='javascript:void(0)'>Reference Text -The patient has a medical history of DVT</a> <br> Page No: 4",
                          "page_num": 1
                        },
                        {
                          "title": "Lung Conditions",
                          "desc":"No Data Found"
                        },
                        {
                          "title": "Disease Progression",
                          "desc":"<b>Knee pain - relapsing </b><br> <a href='javascript:void(0)' >Reference Text - worsening pain in knee</a> <br> Page No: 6",
                          "page_num": 2
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
  pdfSrc = "../../assets/ActemraPrior_Auth_Request_synthetic.pdf";
  isUpload:boolean=true;
  pageVariable: number= 1;
  showAll:boolean=true;

  constructor(
    public dialog: MatDialog,
    private _signInService: EventEmiterService,
    private ngxLoader: NgxUiLoaderService,
    private serpAPIService: SerpAPIService,

  ) {
    this._signInService.fileUpload.subscribe((data: boolean) => {

      this.ngxLoader.start();
      setTimeout(() => {
        this.ngxLoader.stop();
        this.isUpload = data;
      }, 15000);

    });
  }
  ngOnInit() {

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
      height: '390px',
    });
  }
  sendMessage(){
    let data = {
      "question": "what is my name",
      "container":"clinicaldocinsights"
    }


    this.serpAPIService.fetchLoadAuditData(data).subscribe((res:any)=>{
      if(res){
        console.log(res,"oeirir")
      }

    },(error) => {
      let showLoader = false;
    })
    console.log(this.quesValue,"quesValue")
    if(this.quesValue.length>0){
      let temp_dict =  {
          "title": this.quesValue,
          "desc": "Please Wait, Working on results...... "
      }
      this.accordianData.push(temp_dict);
      console.log(this.accordianData,"this.accordianData")
    }
    this.quesValue = '';



  }
  changePage(pageNum:any){
    console.log(pageNum,"pagenum")
    this.pageVariable= pageNum;
    this.showAll= false;
  }

}
