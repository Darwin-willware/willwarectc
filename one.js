let takehome = 0;
let tds =0;
let ctc= 0;
let newctc =0;
let hikeamount = 0;
let percentage = 0;
let candidateName = '';
let recruiterName ='';
let profitamount = 0;
let profitmargin = 0;

  
 function marginCalculator(){
      let clientctc = 0;
      let candidatectc = 0;
      let clientpercent = 0;
      clientctc = parseInt(document.getElementById("clientctc").value);
      candidatectc = parseInt(document.getElementById("candidatectc").value);
      
      console.log(clientctc,candidatectc);
      clientpercent = (100*candidatectc)/clientctc;
      console.log(clientpercent);
      this.profitmargin = 100-clientpercent;
      this.profitamount = clientctc-candidatectc;
      document.getElementById("profitpercent").innerHTML = this.profitmargin.toFixed(2);
      document.getElementById("profitamount").innerHTML = this.profitamount.toLocaleString("en-us");
    
 }

 function calculatectc(){
    
    //getting values from html page
 takehome = parseInt(document.getElementById("takehome").value);
 candidateName = document.getElementById("candidatename").value;
 recruiterName = document.getElementById("recruitername").value;
 console.log(candidateName,recruiterName);
         //calculate overall ctc = takehome*100 /90
    this.ctc = parseInt((100*takehome)/90) ;
    this.tds =( parseInt(this.ctc)).toLocaleString("en-us");
     //pushing value to the html
    document.getElementById("tds").innerHTML = this.tds;
    
    //getting last three digits to round off
    console.log("from roundoff");
  const getlastthree = String(this.tds).slice(-3);
  let lastdigits = Number(getlastthree);
  let parsectc = parseInt(this.ctc);
  let roundoff = String(parsectc).slice(0,-3);
  let needToAdd = 0;
   if(lastdigits === 0 || lastdigits === 500){
    document.getElementById("roundoff").innerHTML = this.tds; 
    roundoff = this.tds;   
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
  console.log('takehome');
  console.log(takehome);
  console.log(roundoff);
  console.log("roundit")
    display(takehome,roundoff);
    // let checker = document.getElementById("enterctc").value;
    // if(checker !== ''){
    //   console.log("success");
    //   calculatetakehome();
    // }
    
    // copytext(); //TODO kaveri

    //document.getElementById("enterctc").value = this.ctc;
}
function calculatetakehome(){
  let currentCtc = 0;
  let taketohome =0 ;
  
  currentCtc = parseInt(document.getElementById("enterctc").value);
  taketohome= (90*currentCtc)/100;
  console.log(taketohome)
    
    //document.getElementById("takehome").value = taketohome;
    document.getElementById("tds").innerHTML = taketohome.toLocaleString("en-us");
    document.getElementById("roundoff").innerHTML = currentCtc.toLocaleString("en-us");
    candidateName = document.getElementById("candidatename").value;
    recruiterName = document.getElementById("recruitername").value;
  display(taketohome,currentCtc);
  // copytext(); //TODO Kaveri
  
  // setTimeout(() => {
  //   document.location.reload();
  // }, 3000);
  //display(parseInt(taketohome),currentCtc);

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
   document.getElementById("hikeamount").innerHTML = this.hikeamount.toLocaleString("en-us");
   document.getElementById("newctc").innerHTML = this.newctc.toLocaleString("en-us");
   document.getElementById("oldtakehome").innerHTML = emphome.toLocaleString("en-us");
   document.getElementById("newtakehome").innerHTML = emptakehomenewctc.toLocaleString("en-us");
   

 }
 function display(takeh,ctcto){
    if(candidateName === '' || recruiterName === ''){
      return 0;
 }else{
  console.log(takeh,ctcto)
  document.getElementById("cop").style.display = "block";
document.getElementById("cname").innerHTML = candidateName;
document.getElementById("rname").innerHTML = recruiterName;
document.getElementById("octc").innerHTML = ctcto;
document.getElementById("thome").innerHTML = takeh;
 }
 }

 function copytext(){
  if(candidateName === '' || recruiterName === ''){
       return 0;
  }else{
    var copyText = document.getElementById("copytext").innerText;
  console.log(document.getElementById("copytext").innerText);
  //copyText.select();
  //copyText.setSelectionRange(0, 99999); 

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);
  }
 }
 function roundIt(){
  

}