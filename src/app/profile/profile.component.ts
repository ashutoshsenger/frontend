import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as jwt_decode from "jwt-decode";
import { Router, RouterModule } from '@angular/router';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';

const uploaduri = "https://hidden-river-33306.herokuapp.com/api/upload";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

   x = false;

   username =  "";

  attachmentList:any = [];

  displayProfileSettings: string = 'basic_information';
  showProfileTab: boolean = false;



  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  id  =  this.getDecodedAccessToken(localStorage.getItem('token')).subject;
  uploader:FileUploader = new FileUploader({url:uploaduri,authToken:this.id});
  
  uploadedfiles={
    id:this.id, 
    file:""
  } 

  

formid = {
  id:this.id
}


  basicinfo = {
  id:this.id,
  name:"",
  email:"",
  dob:"",
  phone:"" 
  }

  personalinfo = {
    id:this.id,
    gender:"",
    marital:"",
    familymembers:"",
    occupation:"",
    familyincome:"",
    individualincome:"",
    facebook:"",
    linkedin:"",
    twitter:"",
    address:"",
    skills:"",
    eca:"",
    higheduqual:""
  }

  educationalinfo = {
    id:this.id,
    highschool:"",
    college:"",
    bfield:"",
    buniversity:"",
    mfield:"",
    muniversity:"",
    toeflscore:"",
    grescore:"",
    gmatscore:"",
    ieltsscore:"",
    additionalqual:""
  }

  professionalinfo = {
    id:this.id,
    onerole:"",
    onelocation:"",
    onesalary:"",
    tworole:"",
    twolocation:"",
    twosalary:""
  }

  interestinfo = {
    id:this.id,
    nextmove:"",
    fieldofinterest:"",
    joblocation:"",
    jobtype:"",
    desiredsalary:"",
    desiredlivingexp:"",
    desirefive:"",
    desireten:"",
    onegoal:"",
    twogoal:""
  }

  lifestyleinfo = {
    id:this.id,
    entertainment:"",
    living:"",
    food:"",
    travel:"",
    electronics:"",
    misc:""
  }






  constructor(private auth: AuthService,private router: Router) {

       this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
         this.attachmentList.push(JSON.parse(response));
         this.router.navigate(['/thankyou']);
       }

        this.formDetails()

        this.getFiles()

  }

  ngOnInit() {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }
    
  }


  
  




  clickProfileTab(x: string): void {
    if (this.displayProfileSettings != x) {
      this.displayProfileSettings = x;
    }
    window.scroll(0, 0);
  }

  clicksave() {
    if (this.displayProfileSettings == 'basic_information') {
      this.displayProfileSettings = 'personal_information'
    } else if (this.displayProfileSettings == 'personal_information') {
      this.displayProfileSettings = 'education_information'
    }

    else if (this.displayProfileSettings == 'education_information') {
      this.displayProfileSettings = 'professional_information'
    }
    else if (this.displayProfileSettings == 'professional_information') {
      this.displayProfileSettings = 'interest_information'
    }
    else if (this.displayProfileSettings == 'interest_information') {
      this.displayProfileSettings = 'lifestyle_information'
    }

    else if (this.displayProfileSettings == 'lifestyle_information') {
      // this.setDisplay = false
    }
    window.scroll(0, 0);
  }

  fillManually() {
    this.showProfileTab = true;
    this.displayProfileSettings = 'basic_information'
  }
  backToProfile(){
    this.showProfileTab = false;
  }


  formDetails(){
    this.auth.formDetails(this.formid)
    .subscribe(
      res => {
        
      console.log(res);
      this.basicinfo.name = res.basic.name;
      this.basicinfo.dob = res.basic.dob;
      this.basicinfo.email = res.basic.email;
      this.basicinfo.phone = res.basic.phone;
      this.personalinfo.gender = res.personal.gender;
      this.personalinfo.marital = res.personal.marital;
      this.personalinfo.familymembers = res.personal.familymembers;
      this.personalinfo.occupation = res.personal.occupation;
      this.personalinfo.familyincome = res.personal.familyincome;
      this.personalinfo.individualincome = res.personal.individualincome;
      this.personalinfo.facebook = res.personal.facebook;
      this.personalinfo.linkedin = res.personal.linkedin;
      this.personalinfo.twitter = res.personal.twitter;
      this.personalinfo.address = res.personal.address;
      this.personalinfo.skills = res.personal.skills;
      this.personalinfo.eca = res.personal.eca;
      this.personalinfo.higheduqual = res.personal.higheduqual;
      this.educationalinfo.highschool = res.educational.highschool;
      this.educationalinfo.college = res.educational.college;
      this.educationalinfo.bfield = res.educational.bfield;
      this.educationalinfo.buniversity = res.educational.buniversity;
      this.educationalinfo.mfield = res.educational.mfield;
      this.educationalinfo.muniversity = res.educational.muniversity;
      this.educationalinfo.toeflscore = res.educational.toeflscore;
      this.educationalinfo.grescore = res.educational.grescore;
      this.educationalinfo.gmatscore = res.educational.gmatscore;
      this.educationalinfo.ieltsscore = res.educational.ieltsscore;
      this.educationalinfo.additionalqual = res.educational.additionalqual;
      this.professionalinfo.onerole = res.professional.onerole;
      this.professionalinfo.onelocation = res.professional.onelocation;
      this.professionalinfo.onesalary = res.professional.onesalary;
      this.professionalinfo.tworole = res.professional.tworole;
      this.professionalinfo.twolocation = res.professional.twolocation;
      this.professionalinfo.twosalary = res.professional.twosalary;
      this.interestinfo.nextmove = res.interest.nextmove;
      this.interestinfo.fieldofinterest = res.interest.fieldofinterest;
      this.interestinfo.joblocation = res.interest.joblocation;
      this.interestinfo.jobtype = res.interest.jobtype;
      this.interestinfo.desiredsalary = res.interest.desiredsalary;
      this.interestinfo.desiredlivingexp = res.interest.desiredlivingexp;
      this.interestinfo.desirefive = res.interest.desirefive;
      this.interestinfo.desireten = res.interest.desireten;
      this.interestinfo.onegoal = res.interest.onegoal;
      this.interestinfo.twogoal = res.interest.twogoal;
      this.lifestyleinfo.entertainment = res.lifestyle.entertainment;
      this.lifestyleinfo.living = res.lifestyle.living;
      this.lifestyleinfo.food = res.lifestyle.food;
      this.lifestyleinfo.travel = res.lifestyle.travel;
      this.lifestyleinfo.electronics = res.lifestyle.electronics;
      this.lifestyleinfo.misc = res.lifestyle.misc;




  
  
  
  
      },
      err => console.log(err)
    )
  }


 basicsave(){
    this.auth.saveBasic(this.basicinfo)
    .subscribe(
      res => {
        console.log(res);
        console.log(this.basicinfo);
      },
      err => console.log(err)
    ) 
 }


 personalsave(){
  this.auth.savePersonal(this.personalinfo)
  .subscribe(
    res => {
      console.log(res);
    },
    err => console.log(err)
  ) 
}


educationalsave(){
  this.auth.saveEducational(this.educationalinfo)
  .subscribe(
    res => {
      console.log(res);
    },
    err => console.log(err)
  ) 
}


professionalsave(){
  this.auth.saveProfessional(this.professionalinfo)
  .subscribe(
    res => {
      console.log(res);
    },
    err => console.log(err)
  ) 
}


interestsave(){
  this.auth.saveInterest(this.interestinfo)
  .subscribe(
    res => {
      console.log(res);
    },
    err => console.log(err)
  ) 
}


lifestylesave(){
  this.auth.saveLifestyle(this.lifestyleinfo)
  .subscribe(
    res => {
      console.log(res);
      this.router.navigate(['/thankyou']);

    },
    err => console.log(err)
  ) 
}

getFiles(){
  this.auth.getFiles(this.uploadedfiles)
  .subscribe(
    res => {
     
      if(localStorage.getItem('social-name') == null){
        this.username = res.name;
        this.uploadedfiles.file = res.data.doc.link;
      }
       else{
 
        this.username = localStorage.getItem('social-name');
        console.log(this.username);
        console.log(res);
        this.uploadedfiles.file = res.data.doc.link;


       }
     
     
    },
    err => console.log(err)
  )


 
}

























}
