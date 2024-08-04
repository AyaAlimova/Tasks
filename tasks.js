 // FizzBuzz
for(let i = 1; i < 100; i++){
  if(i % 3 == 0){
    console.log("Fizz")
  }
  else if(i % 5 == 0){
    console.log("Buzz");
  }
   else if(i % 3==0 && i % 5==0){
    console.log("Fizz Buzz")
  }
  else{
    console.log(i)
  }
}

console.log("-------------------------------")

// Prime number

function primeNumber(num){
  if(num < 2){
    return "This is not a prime number";
  }
  for(let i = 2; i < num; i ++){
    if(num % i == 0){
      return "This is not a prime number"
    }
    else{
      return "This is a prime number"
    }
  }
}

console.log(primeNumber(53));