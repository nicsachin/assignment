
function logic(c)
{   let index = c.charCodeAt(0);
       if(index>=65&&index<=90) {
               if(index>=87) {
                        index  = 90 - index
                       let logic = 3 - index;
                   //console.log(logic+65)
                   // console.log(String.fromCharCode(logic+65))
                      return (String.fromCharCode(logic+65))
               }
               else
               {
                   // console.log(String.fromCharCode(index+4))
                     return (String.fromCharCode(index+4))
               }
       }
       else if(index>=97&&index<=122)
       {
           if(index>=119) {
               index  = 122 - index
               let logic = 3 - index;
               //console.log(logic+65)
              // console.log(String.fromCharCode(logic+97))
                 return (String.fromCharCode(logic+97))

           }
           else
           {
               //console.log(String.fromCharCode(index+4))
                 return(String.fromCharCode(index+4))

           }
       }

       else if(index >= 48 && index<=57)
       {

           if(index>=54) {
               index  = 57 - index
               let logic = 3 - index;
               //console.log(logic+65)
               // console.log(String.fromCharCode(logic+97))
               return (String.fromCharCode(logic+48))

           }
           else
           {
               //console.log(String.fromCharCode(index+4))
               return(String.fromCharCode(index+4))

           }
       }
       else
           return c


}



const encrypt = (data)=>{
   let result =""
    for(let i =0 ; i < data.length ;i++)
    {
       //console.log(logic(data[i]))
        result+=logic(data[i])
    }

    console.log(result)
}


const data = "Yo Yo Yoshita dudes . Lets say hello-world_2,we like using camelCase more than snake_case."

encrypt(data)




