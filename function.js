var findElement = document.getElementById('red-btn');
findElement.addEventListener('click', redBtn);

function redBtn(){
    document.body.style.backgroundColor = 'red';
}

// Add Event Listener in differet way 

var getELment  = document.getElementById('green-btn');
getELment.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})

// Another way of add event listner 

document.getElementById('blue-color').addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
})


// Add event handler 

    function eventhandler(){
        var p = document.getElementById('clicking-method');
        p.innerText = 'Text change using funciton';
    }

    // direct with input field 
   document.getElementById('update-name').addEventListener('click', function(){
        const findfield = document.getElementById('input-field');
        console.log(findfield.value);
        
        var textadd = document.getElementById('set-text');
        textadd.innerText = findfield.value;
        findfield.value = '';
   })