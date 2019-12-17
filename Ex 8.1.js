var Season_1 ="Winter";
var Season_2 ="Spring";
var Season_3 ="Summer";
var Season_4="Autumn";
for (var i=1; i<=12; i++ ){
  for (var j=1; j<=4; j++){
    if(i===1 || i===2 || i===12){
      console.log(i + Season_1)
    }
    break;
  } if (i==3 || i==4 || i==5){
    console.log(i + Season_2)
  } 
    if (i==6 || i==7 || i==8)
   {
     console.log(i+ Season_3)
   }
   if (i==9 || i==10 || i==11){
     console.log(i+ Season_4)
   }
 }