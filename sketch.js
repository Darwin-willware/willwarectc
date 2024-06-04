let select = document.querySelectorAll('.currency');
let btn = document.getElementById('btn');
let input = document.getElementById('input');

//to keep track of Usd by Default
let currentIndianRupees =0;

//get the current USD Value
// document.getElementById('txt_hours').value=160;
convert('USD','INR',1,false);
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayDropDown(res));

function displayDropDown(res){
  //console.log(Object.entries(res)[2][0])
  let curr = Object.entries(res)
  for(let i=0;i<curr.length;i++){
    let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
    select[0].innerHTML += opt
    select[1].innerHTML += opt
  }
}

btn.addEventListener('click',()=>{
  let curr1 = select[0].value
  let curr2 = select[1].value
  let inputVal = input.value
  if(curr1===curr2)
    alert("Choose different currencies")
  else
    convert(curr1,curr2,inputVal,true)
});

function convert(curr1,curr2,inputVal,canset){
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    console.log(data);
    // console.log("can now ",data?.rates?.INR);
    if(inputVal == 1){
      currentIndianRupees = data?.rates?.INR;
    }
    if (canset) {
      
      document.getElementById('result').value = Object.values(data.rates)[0];

    }
          
  });

}

function calcSalary() {
  var wage_element = document.getElementById('txt_wage');
  var wage = parseInt(wage_element.value);
  var hours_element = document.getElementById('txt_hours');
  var hours = parseInt(hours_element.value);
  
  var calculate = wage * hours * currentIndianRupees;
  document.getElementById('results').innerHTML = calculate;
    }



    // var input1 = document.getElementById("txt_wage");
    window.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
         event.preventDefault();
      //    document.getElementById("results").click();
      calcSalary();
      }
   });






