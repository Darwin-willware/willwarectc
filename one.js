let takehome = 0;
let tds =0;
let newctc =0;
let hikeamount = 0;
let percentage = 0;
let candidateName = '';
let recruiterName ='';

 function calculatectc(){
    let ctc= 0;
    //getting values from html page
 takehome = parseInt(document.getElementById("takehome").value);
 candidateName = document.getElementById("candidatename").value;
 recruiterName = document.getElementById("recruitername").value;
 console.log(candidateName,recruiterName);
         //calculate overall ctc = takehome*100 /90
    ctc = parseInt((100*takehome)/90) ;
    this.tds =( parseInt(ctc)).toLocaleString("en-us");
     //pushing value to the html
    document.getElementById("tds").innerHTML = this.tds;
    //getting last three digits to round off
    const getlastthree = String(this.tds).slice(-3);
    let lastdigits = Number(getlastthree);
    let parsectc = parseInt(ctc);
    let roundoff = String(parsectc).slice(0,-3);
    let needToAdd = 0;
     if(lastdigits === 0 || lastdigits === 500){
      document.getElementById("roundoff").innerHTML = this.tds;    
    }else if(lastdigits<500){
      this.lastdigits=500;
      roundoff= roundoff+500;
      document.getElementById("roundoff").innerHTML = parseInt(roundoff).toLocaleString("en-us");
     }
    else{
          needToAdd = 1000-lastdigits;
          roundoff = parseInt(roundoff);
          roundoff = parsectc + needToAdd;
          document.getElementById("roundoff").innerHTML = roundoff.toLocaleString("en-us");
    }
    display(takehome,roundoff);

}
 function calculatehike(){
//ctc/100 * percentage
let oldctc =0;
let emphome = 0;
let emptakehomenewctc = 0;
oldctc = parseInt(document.getElementById("ctc").value);
let percentage = parseInt(document.getElementById("percentage").value);

console.log(oldctc,percentage);
// calculating amount need to be hiked and total new ctc
  this. hikeamount = (oldctc/100)*percentage;
  this.newctc = oldctc+ this.hikeamount;
  // calculating takehome from ctc
  emphome = (90*oldctc)/100;
  emptakehomenewctc =(90*this.newctc)/100;
  console.log(emphome);
   console.log(this.newctc);
   document.getElementById("hikeamount").innerHTML = this.hikeamount;
   document.getElementById("newctc").innerHTML = this.newctc;
   document.getElementById("oldtakehome").innerHTML = emphome;
   document.getElementById("newtakehome").innerHTML = emptakehomenewctc;
   

 }
 function display(takeh,ctcto){

document.getElementById("cname").innerHTML = candidateName;
document.getElementById("rname").innerHTML = recruiterName;
document.getElementById("octc").innerHTML = ctcto;
document.getElementById("thome").innerHTML = takeh;

 }