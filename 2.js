

const move = (command,position)=>{

    let xpoint  = position[0]
    let ypoint = position[1]

     for(let i=0;i<command.length;i++)
     {
          if(command[i]=='L')
             //console.log('@@@')
              xpoint-=1

         else if(command[i]=='R')
             xpoint+=1

         else if(command[i]=='U')
             ypoint+=1

         else if(command[i]=='D')
             ypoint-=1

         // console.log('@',ypoint)


     }

       // xpoint+=1
    //console.log(xpoint)
      console.log(`[${xpoint},${ypoint}]`)



}

move("LLRDDR",[0,0])
