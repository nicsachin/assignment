
function case1(num,expected)
{
    if(num*4 == expected)
       console.log(num,num,num,num)
      // return((num*4)==expected)
       return(true)
    //console.log()

}

function case2(num1,num2,expected) {

        if(num1*2+num2*2 == expected)
        // {  console.log(num1, num1, num2, num2);
            return(true)

        else if(num1*3+num2 == expected)
            return (true)
        else if(num2*3+num1 == expected)
            return (true)

    return (false)

}

function case3(num1,num2,num3,expected)
{
    if(num1*1+num2*2+num3 == expected)
        return(true)

    else if(num1*2+num2+num3 == expected)
        return (true)
    else if(num2*1+num1*1+num3*2 == expected)
        return (true)

    return (false)

}



function case4(num1,num2,num3,num4,expected) {

     if(num1+num2+num3+num4 == expected)
         return(true)
    else
         return false

}


const result = (number)=>{
    let factors = []
     let sum = 0

     for(let i=2 ;i<=number/2;i++)
     {
         if(number%i==0)
         {
             factors.push(i)
         }
     }

    if(number%4==0)
    {
         for(let j=0;j<factors.length;j++)
         {
             console.log(case1(factors[j],number))
         }

        for(let j=0;j<factors.length-1;j++)
        {
            console.log(case1(factors[j],factors[j+1],number))
        }

        for(let j=0;j<factors.length-2;j++)
        {
            console.log(case1(factors[j],factors[j+1],factors[j+2],number))
        }


            console.log(case1(factors[0],factors[1],factors[2],factors[3],number))


    }

        else
    {
        console.log('not possible')
    }


}


result(8)


