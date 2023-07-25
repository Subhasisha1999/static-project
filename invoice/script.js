var total = document.getElementById('total');
var netprice = document.getElementsByClassName('netprice');


function quantityfunc(q){
    // console.log(q.value)
    // console.log(q.parentElement.parentElement.children[1].children[0].value);
    var priceValue = q.parentElement.parentElement.children[1].children[0].value;
    q.parentElement.parentElement.children[2].innerHTML = q.value * priceValue;
    // console.log(q.value * priceValue);

    var cal = 0;

    for(let i = 0; i<netprice.length; i++){
        // console.log(netprice[i]);
        // console.log(netprice[i].innerHTML);
        // cal = cal + netprice[i].innerTEXT;
        
        cal = cal + parseInt(netprice[i].innerText);
    }
    // console.log(cal)
    total.innerHTML = cal;
}