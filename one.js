let takehome = 0;
let tds =0;
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
}