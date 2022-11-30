var dateValue = "", monthValue = "", yearValue = "";
const error = document.getElementById('errors');


function handleDate()
{
    const date = document.getElementById('date');
    dateValue = date.value;
    console.log(dateValue,"jjj");
}

function handleMonth()
{
    const month = document.getElementById('month');
    monthValue = month.value;

}

function handleYear()
{
    const year = document.getElementById('year');
    yearValue = year.value;
}

function handleClick()
{
    let dateErr = false, monthErr = false, yearErr = false;

    if(dateValue === "" || monthValue === "" || yearValue==="")
    {
        error.innerHTML = "*All fields are mandatory";
        return;
    }
    else
    {
        error.innerHTML = "";
    }


    if(isNaN(dateValue))
    {
        dateErr = true;
        dateValue = "";
    }
    else
    {
        dateValue = parseInt(dateValue);
        dateErr = false
    }

    if(isNaN(monthValue))
    {
        monthErr = true;
        monthValue = "";
    }
    else
    {
        monthValue = parseInt(monthValue);
        monthErr= false
    }

    if(isNaN(yearValue))
    {
        yearErr = true;
        yearValue = "";
    }
    else
    {
        yearValue = parseInt(yearValue);
        yearErr = false
    }
    
    
    console.log(dateValue,monthValue,yearValue);


    if(dateValue <= 0 || dateValue >31 || dateValue === "")
    {
        dateErr = true;
    }
    else
    {
        dateErr = false
    }

    if(monthValue <= 0 || monthValue >12 || monthValue === "")
    {
        console.log("55")
        monthErr = true;
    }
    else
    {
        monthErr = false
    }

    if(yearValue >9999  || yearValue <999 || yearValue === "")
    {
        yearErr = true;
    }
    else
    {
        yearErr = false
    }

    console.log(dateErr,monthErr,yearErr);

    
        if(dateErr && monthErr && yearErr)
        {
            error.innerHTML = "Please enter valid input in date, month, year fields" 
        }
        else if(dateErr && monthErr && !yearErr)
        {
            error.innerHTML = "Please enter valid input in date, month fields" 
        }
        else if(dateErr && !monthErr && yearErr)
        {
            error.innerHTML = "Please enter valid input in date, year fields" 
        }
        else if(!dateErr && monthErr && yearErr)
        {
            error.innerHTML = "Please enter valid input in month, year fields" 
        }
        else if(dateErr && !monthErr && !yearErr)
        {
            error.innerHTML = "Please enter valid input in date field" 
        }
        else if(!dateErr && monthErr && !yearErr)
        {
            error.innerHTML = "Please enter valid input in month field" 
        }
        else if(!dateErr && !monthErr && yearErr)
        {
            error.innerHTML = "Please enter valid input in year field" 
        }
        else
        {
            error.innerHTML = "";
        }
    
    

    if(error.innerHTML === "")
    {
        let present = new Date();

        let presentDate = present.getDate();
        let presentMonth = present.getMonth();
        let presentYear = present.getFullYear();

        let years = presentYear - yearValue;
        let months = presentMonth - monthValue;
        let days = presentDate - dateValue;
        
        const age = document.getElementById('age');
        age.innerHTML = `Your Age is ${years} years ${months} months ${days} days`
    }
    else
    {
        const age = document.getElementById('age');
        age.innerHTML = ""
    }

}

