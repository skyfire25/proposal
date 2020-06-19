let userInput1 = getInput(0)
let userInput2 = getInput(1)

function cToF(celsius) {
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
  
  console.log(message);
    if(userInput1 < 19){
    return 'it\'s cold out, You should layer up.'

    }else if(userInput1 > 19 && userInput1 < 30){
    return 'It\'s nice outside you  should wear something comfortable'

    }else if(userInput1 > 30){
    return 'It\'s blazing hot out, you should keep hydrated'
    }
}

function fToC(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
    if(userInput2 < 66){
    return 'It\'s kind of chilly out, you should wear something warm'
    
  }else if(userInput2 > 66 && userInput2 < 86 ){
  return 'It\'s nice outside, you should wear something comfortable'
    
  }else if(userInput2 > 86){
  return 'It\'s hotter than the devil\'s bum, you should keep hydrated'
    }
} 


getInput(5);
getInput(30);


function getInput(i){
return process.argv[i + 2]
}