function reverseString()
{

    let str = document.getElementById("strInput").value;
    let newstr = "";


    // Check if input is empty
    if (!str) 
    {
        document.getElementById("result").value = "Please enter a string.";
        return;
    }


    for (let i = 0; i < str.length; i++) 
    {
        let charCode = str.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))) 
        {
            document.getElementById("result").value = "Invalid input: only letters are allowed.";
            return;
        }
    }


    for(let i=str.length-1; i>=0; i--)
    {
        newstr += str[i];
    }
    

    document.getElementById("result").value = newstr;
    // document.getElementById("strInput").value = "";
}


function resetFields()
{

    document.getElementById("strInput").value = "";
    document.getElementById("result").value = "";

}