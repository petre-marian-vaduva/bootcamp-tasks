function displayValue(val)
{
    document.getElementById("result").value+=val
}
  

function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}
  

function clearDisplay()
{
    document.getElementById("result").value = ""
}
