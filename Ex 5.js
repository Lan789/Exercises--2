function numSum(n){
    var sum = 0;
      for(i = 0; i <= n; i++){
        if (i%8 !==0 )
        sum += i; 
         }
    console.log(sum)
         }
numSum(10);