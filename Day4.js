//1.Do the below programs in anonymous function & IIFE

//a)Print odd numbers in an array
//Anonymous :
let arr=[12,44,53,66,89,24,71];
let b=0;
let a=[];
let odd=function(input){
                  for(var i = 0 ; i< input.length ; i++){
                    b=arr[i]%2;
                    if(b==1){
                      console.log(arr[i]);
                       a.push(arr[i]);
                    }
                }
                }
                odd(arr);
                console.log(a);

//IIFE
(function(array){
  for(var i = 0 ; i< array.length ; i++){
             if(array[i]%2!=0){
                console.log(array[i])
             } 
        }
  })([1,2,3,4])

  //b.Convert all the strings to title caps in a string array   
  //Anonymous :            

var str="my name is ayesha";
let def=function (str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
}
def(str);
     
 //IIFE
 (function (str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(' '));
  })("hello there how are you")

//c.Sum of all numbers in an array
//Anonymous :
let arr=[2,3,4,5,6,8];
let a=0;
let odd=function(input){
                  for(var i = 0 ; i< input.length ; i++){
                    a+=arr[i];
                    }
                }
                 odd(arr);
                 console.log(a);

 //IIFE
      
(function () {
  let sum = [1, 2, 3, 4].reduce(add, 5);
  function add(accumulator, a) {
    return accumulator + a;
  }
  console.log(sum);
})()           
 
//d.Return all the prime numbers in an array
//Anonymous :
let arr=[41,3,1,1215,"hi",71,88];
let a=[];
let odd=function(input){
                  for(var i = 0 ; i< input.length ; i++){
                    if(arr[i]<=1){
                      console.log("not eligible");
                    } else if(arr[i]==2 || arr[i]==3){
                      console.log("prime"+arr[i]);
                      a.push(arr[i]);
                    } else if (arr[i]%2 == 0 || arr[i]%3 ==0){
                      console.log("not prime"+arr[i]);
                    }else if (arr[i]%2 == 1 || arr[i]%3 ==1){
                      console.log(" prime"+arr[i]);
                      a.push(arr[i]);
                    } else{
                      console.log("this is not an integer"+arr[i]);
                    }
                    }
                }
                 odd(arr);
                 console.log(a);

//IIFE
(function (){
  var primeNum = [7, 16, 9, 3]
  
  primeNum = primeNum.filter(function(number) {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  
  console.log(primeNum);
  })()
  

 
  //e.Return all the palindromes in an array
  //Anonymous :
  let arr = [ 1, 2, 3, 2, 1 ];
  let n = arr.length;
function palindrome(arr, n)
{
  let flag = 0;
  for (let i = 0; i <= n / 2 && n != 0; i++) {
      if (arr[i] != arr[n - i - 1]) {
          flag = 1;
          break;
      }
  }
  if (flag == 1)
      console.log("Not Palindrome");
  else
       console.log("Palindrome");
}
 palindrome(arr, n); 
 
 //IIFE
 ( function () {
  var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split('').reverse().join('');
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
})()
 
 
 //f.Return median of two sorted arrays of the same size.
 //Anonymous :
 let ar1=[12,13,14,15,16];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
function getMedian(ar1, ar2, n){
    var i = 0; 
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++) {
        if (ar1[i] <= ar2[j]) {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }else {
            m1 = m2;                  
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
   console.log("Median is "+ getMedian(ar1, ar2,n1));

   //IIFE
   ( function() {
    let arr1 = [1, 12, 15, 26, 38,24];
    let arr2 = [2, 13, 17, 30, 45, 47];
    
      let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
    
      const half = c.length / 2 | 0;
      
    if (c.length % 2) {
    console.log(c[half]);
    } else {
      
    console.log((c[half] + c[half - 1]) / 2);
    }
    
    })()


   //g.Remove duplicates from an array

   var arr=["mango",33,"apple",33,"mango"];
function getduplicates(data){
  return data.filter((value,index)=>data.indexOf(value)==index);
}
console.log(getduplicates(arr));

//IIFE :


(function () {
  
  let numbers = [1, 2, 3, 2, 4, 5, 5, 6];
  
  let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
  
  console.log(duplicates);
})()

//h.Rotate an array by k times

//anonymous :
function (a, n, k){
    k = k % n;
  for (let i = 0; i < n; i++) {
        if (i < k) {
    console.log(a[n + i - k] + " ");
        } else {
   console.log((a[i - k]) + " ");
        }
    }
   
}
  let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
(Array, N, K);

//IIFE :
var Array = [1, 2, 3, 4, 5];
var N = Array.length;
var K = 2;
(function (a, n, k){
    k = k % n;
   for (let i = 0; i < n; i++) {
        if (i < k) {
   console.log(a[n + i - k] + " ");
        } else {
   console.log((a[i - k]) + " ");
        }
    }
   
})
(Array, N, K);


//2.Do the below programs in arrow functions.
//a.Print odd numbers in an array
             
//Arrow Function  
var odd1=[1,22,3,43,5,46,7]

var odd=(array)=>{
   let arr=[];
   for(let i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
      arr.push(array[i]);
     }
   }
   return arr;
}
console.log(odd(odd1));


//b.Convert all the strings to title caps in a string array
var str="my name is ayesha";
let def= (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(def(str));

//c.Sum of all numbers in an array

var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
let ghi=(a)=>
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(ghi(a));

//D.Return all the prime numbers in an array
let n=34;
let l=(n)=>
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
console.log(l(n));

//E.Return all the palindromes in an array
Palindrome = (arr, n) =>
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }







