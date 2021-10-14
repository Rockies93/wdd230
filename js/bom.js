const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');


    button.addEventListener('click', function() {
        let listItem = document.createElement('li');
        listItem.textContent = input.value;
        
        const xButton = document.createElement('button');
        xButton.textContent = "X";
        xButton.setAttribute ('class','delete')

        list.appendChild(listItem);
        listItem.appendChild(xButton);

        //make delete button work 
        const deleteButton = document.querySelector('.delete');

        deleteButton.addEventListener('click',function () {
            list.removeChild(listItem);
        });

        //clearing input area
        input.value = '';
        input.focus();

    });



