//class currency is added to array in 0th position first select and in 1st position second select will be present
let select = document.querySelectorAll('.currency')
// get element btn
let btn = document.getElementById('btn')
let input = document.getElementById('input')

// fetching from the api using the link:

fetch('https://api.frankfurter.app/currencies')
//coverting the result into JSON format
.then(res=>res.json())
//result is transferred to method display dropdown: 
.then(res=>displayDropDown(res))

//creating a function for the menthod

function displayDropDown(res){
    // Object.entries keyword is used to convert string to array
  let curr = Object.entries(res)
  for(let i=0;i<curr.length;i++){
    // to get the 0th element of the array value so that country name in short will be get
    let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
   //add the country name in short stored in opt value is added to select 0 and 1 in the inner html, + is used to display the previous all result of the for loop,If not given + only the last executed will be displayed

    select[0].innerHTML += opt
    select[1].innerHTML += opt
  }
}

btn.addEventListener('click',()=>{
    //get value selected in first box
  let curr1 = select[0].value
  //get value selected in second box
  let curr2 = select[1].value
  // get the input in the inputval
  let inputVal = input.value
  //if selected same countries in two box display alert 
  if(curr1===curr2)
    alert("Choose different currencies")
    //or call the function
  else
    convert(curr1,curr2,inputVal)
});

function convert(curr1,curr2,inputVal){
  const host = 'api.frankfurter.app';
  //$ is used becouse we use template format
  fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    document.getElementById('result').value = Object.values(data.rates)[0]
  });

}