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
    const getlastthree = String(this.tds).slice(-3);
    let lastdigits = Number(getlastthree);
    let parsectc = parseInt(ctc);
    console.log("parsectc =>"+ parsectc);
    let roundoff = String(parsectc).slice(0,-3);
    let needToAdd = 0;
    console.log( "ROUND OFF"+roundoff);

    console.log(lastdigits);
     if(lastdigits === 0 || lastdigits === 500){
      document.getElementById("roundoff").innerHTML = this.tds;    
    }else if(lastdigits<500){
      this.lastdigits=500;
      roundoff= roundoff+500;
      console.log(roundoff);
      document.getElementById("roundoff").innerHTML = parseInt(roundoff).toLocaleString("en-us");
     }
    else{
          needToAdd = 1000-lastdigits;
          console.log("ami =>"+needToAdd);
          roundoff = parseInt(roundoff);
          roundoff = parsectc + needToAdd;
          console.log(roundoff);
          document.getElementById("roundoff").innerHTML = roundoff.toLocaleString("en-us");
    }
    console.log(this.lastdigits);
    console.log( String(this.tds).slice(-3));
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