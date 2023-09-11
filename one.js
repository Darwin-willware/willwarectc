let takehome = 0;
let tds =0;
let newctc =0;
let hikeamount = 0;
let percentage = 0;
 function calculatectc(){
    let ctc= 0;
    
 takehome = parseInt(document.getElementById("takehome").value);
 console.log(takehome);
 console.log("from no where")
         
    ctc = parseInt((100*takehome)/90) ;
    console.log(ctc)
    this.tds =( parseInt(ctc)).toLocaleString("en-us");
    console.log("ctc is"+ "  "+ this.tds);

    document.getElementById("tds").innerHTML = this.tds;
    Math.round(this.tds);
    console.log(this.tds);
}
 function calculatehike(){
//ctc/100 * percentage
let oldctc =0;
oldctc = parseInt(document.getElementById("ctc").value);
let percentage = parseInt(document.getElementById("percentage").value);
console.log(oldctc,percentage);
  this. hikeamount = (oldctc/100)*percentage;
  this.newctc = oldctc+ this.hikeamount;
   console.log(this.newctc);
   document.getElementById("hikeamount").innerHTML = this.hikeamount;
   document.getElementById("newctc").innerHTML = this.newctc;

 }