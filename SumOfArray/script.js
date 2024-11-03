function sumOfArray()
{
    let str = document.getElementById("values").value;

    if(!str){
        document.getElementById("result").value = "Please enter values"
        return;
    }

    let arr = str.split(',');
    let sum = 0;
    let invalidinput = false;

    for(let i=0; i<arr.length; i++)
    {
        let num = parseFloat(arr[i]);
        if(isNaN(num))
        {
            invalidinput = true;
            break;
        }
        sum += num ;

    }

    if (invalidinput) {
        document.getElementById("result").value = "Invalid input: please enter only numbers.";
    } else {
        document.getElementById("result").value = sum;
    }

}

function resetFields()
{
    document.getElementById("values").value = "";
    document.getElementById("result").value = '';
}