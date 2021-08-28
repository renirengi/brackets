let open=['(','{','|','1','3','5','7', '8','9', '['];
let close=[')','}','|','2','4','6','7','8','9', ']'];
module.exports = function check(str, bracketsConfig) {
 
  
    let arrStr=[];
    let arrConfig=[];
    for (let char of str){
      arrStr.push(char);
    }
             
     for(let i=0; i<bracketsConfig.length; i++)   {
       for(let i2=0; i2<bracketsConfig[i].length; i2++)     {
         arrConfig.push(bracketsConfig[i][i2]);
       }
     }
  
      let strValid = checkClosing(arrStr.slice());
      let bracketsConfigValid = checkClosing(arrConfig.slice());
     
  //console.log(strValid);
  //console.log(bracketsConfigValid);
  
     return (strValid && bracketsConfigValid);
    }
  
  
  function checkClosing(arrString)  {     
      for(let c=0; c<arrString.length; c++)    {
        if (open.includes(arrString[c]))
        {
           let ind = open.indexOf(arrString[c]);
           if (arrString[c+1]===close[ind])
           {
              arrString.splice(c, 2);
              c=-1;
           }
        }
      }
      return (arrString.length === 0);
  }

 



