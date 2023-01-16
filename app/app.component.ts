import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
//declare let jsPDF;
//import * as JSPdf from 'jspdf';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular 5';

   images = [{
    name: "Image 1", url:"https://4.bp.blogspot.com/-OuIrYzKE1lM/WJ1nqskJ5pI/AAAAAAAAOww/v9JfD7Hb_Fwe_K1svBN7gz2A_BUKxbqGwCLcB/s400/mindblowing-awasome-wallpapers-imgs.jpg"
  },
  {
    name:"Image 2",
    url:"https://akm-img-a-in.tosshub.com/indiatoday/559_102017023826.jpg?TZlWXro5W8Rj4VbO.MpENgo1F2MX93j"
  }]


    items = {
      "Name" : "XYZ",
      "Age" : "22",
      "Gender" : "Male"
      
    };

  ngOnInit() {

  }
  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    console.log("image");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
  }

  




  download() {
     var base64 = (document.getElementById("imageid"));


     let doc = new jsPDF();

    var item = {
      "Gender": "Male",
      "description": "sdfs",
      "first name": "test",
      "last name": "dsfsdfsdfsdf",
      "single": "No"
    };

    var col = ["Fields", "Inputs"];
    var rows = [];

    for (var key in item) {
      var temp = [key, item[key]];
      rows.push(temp);
      //doc.addText(item[key]);
    }
  
    

      for(var i=0;i<this.images.length;i++){
     let imageData= this.getBase64Image(document.getElementById('img'+i));
     console.log(imageData);
     
       doc.addImage(imageData, "JPG", 10, (i+1)*10, 180, 150);
       
       doc.addPage();
    }

     doc.autoTable(col, rows);

     doc.save('First-Pdf.pdf');


   
    //doc.save('Test.pdf');
  }

}
