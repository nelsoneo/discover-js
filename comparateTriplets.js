let a = [17,28,30];
let b = [9,28,50];

function compareTriplets(a, b) {
  // Write your code here
  let alice = 0;
  let bob = 0;
  let arr = [];


  for(let i = 0; i < a.length; i++){
     
    if(a[i] < b[i]){
        bob++;   
    } 
    if(a[i] > b[i]) {
      
        alice++; 
    }
}

arr.push(alice);
arr.push(bob);
  return arr;
}

console.log(compareTriplets(a, b));
