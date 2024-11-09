function fibonacci()
{

    let num = parseInt(document.getElementById("num").value);
    let a = 0;
    let b =1;

    let arr = [];
    if(isNaN(num))
    {
        document.getElementById("result").value = "Please enter a Number.";
        return;
    }

    for(let i=0; i<num; i++)
    {
        //document.getElementById("result").value = a;
        arr.push(a);
        let next = a+b;
        a = b;
        b = next;

    }


    document.getElementById("result").value = arr.join(", ");

}

function ResetField()
{


    document.getElementById("num").value = "";
    document.getElementById("result").value = "";


}
