// document.getElementById('swapbutton').addEventListener('click',checkEvenOdd);
function swap()
{
    let a = document.getElementById("A").value;
    let b = document.getElementById("B").value;

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter valid numbers.");
        return;
    }

    [a,b] = [b,a];
    document.getElementById("result").value = `first value : ${a}     second value : ${b}`;

    //document.getElementById("A").value = "";
    //document.getElementById("B").value = "";
}

function resetFields() {
    document.getElementById("A").value = '';
    document.getElementById("B").value = '';
    document.getElementById("result").value = '';
}
