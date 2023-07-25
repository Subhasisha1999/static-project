const open = document.getElementById('open');

const close = document.getElementById('close');

const container = document.getElementById('container');

open.addEventListener("click",()=>{
    container.classList.add('active');
});

close.addEventListener("click",()=>{
    container.classList.remove('active');
});



// DropDown
//get all drop dwon elements from the document
const dropdowns = document.querySelectorAll(".dropdown")

//loop through all dropdowns elements
dropdowns.forEach(dropdown =>{

    //get inner elements from each dropdown
    const select = dropdown.querySelector(".select");
    const selected = dropdown.querySelector(".selected");
    const caret = dropdown.querySelector(".caret");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".menu li");

    // we are creating this method in order to have multiple drodown menus on the page work.

    //Add a click event to the select element.
    select.addEventListener('click',()=>{
        //Add the clicked the selected style to the select element.
        select.classList.toggle('select-clicked')
        //Add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate') 
        //Add the open style to the menu element
        menu.classList.toggle('menu-open') 
    });

    //loop through all options elements
    options.forEach(option =>{
        // Add a click event to the option element
        option.addEventListener('click',()=>{
            //change selected inner text to clicked option inner text
            selected.innerText = option.innerText;
            //Add the clicked selected styles to the selected element
            select.classList.remove('select-clicked');
            //Add the rotate styles to the caret element
            caret.classList.remove('caret-rotate')
            //Add the open styles to the menu element
            menu.classList.remove('menu-open');
            //Remove active class from all option elements
            options.forEach(option =>{
                    option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});


// toggle
// const toggle = document.getElementById('toggle')

// toggle.addEventListener('change',(e)=>{
//     document.body.classList.toggle('dark',e.target.checked);
// })


// about US
var tablinks=document.getElementsByClassName("tab-links");
        var tabcontents=document.getElementsByClassName("tab-content");
        function opentab(tabname){
            for(tablink of tablinks)
            {
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents)
            {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }




// calculation
// var total = document.getElementById('total');
// var netprice = document.getElementsByClassName('netprice');


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



// function pricefunc(p){
//     // console.log(p.value)
//     var quantityValue =  p.parentElement.parentElement.children[0].children[0].value;
//     p.parentElement.parentElement.children[2].innerHTML = p.value * quantityValue;
//     var cal = 0;

//     for(let i = 0; i<netprice.length; i++){
//         // console.log(netprice[i]);
//         // console.log(netprice[i].innerHTML);
//         // cal = cal + netprice[i].innerTEXT;
        
//         cal = cal + parseInt(netprice[i].innerText);
//     }
//     // console.log(cal)
//     total.innerHTML = cal;
// }








// https://i.pinimg.com/564x/60/bc/69/60bc69a3ee7f4837a3690f56cd487239.jpg
// https://i.pinimg.com/236x/03/8b/16/038b16b827b56e494bcf4b5fd1afd2c1.jpg
// https://i.pinimg.com/236x/8e/03/9b/8e039b5194e102cae4276ddf3b307997.jpg
// https://i.pinimg.com/236x/14/a1/ad/14a1ad90bbac6d2fe3a9721350b0cd6a.jpg
// https://i.pinimg.com/236x/2b/b8/95/2bb895c474b8810280145b072dbb1151.jpg
// https://i.pinimg.com/236x/b5/75/a8/b575a80fd2b26e2557ef409fb83fea0a.jpg









