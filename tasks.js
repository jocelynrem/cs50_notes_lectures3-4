document.addEventListener('DOMContentLoaded', () => {

    const submit = document.querySelector('#submit');
    const newTask = document.querySelector('#task');

    submit.disabled = true;

    newTask.onkeyup = () => {
        if (newTask.value.length > 0) {
            submit.disabled = false;
        } else {
            submit.disabled = true;
        }
    };

    document.querySelector('form').onsubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page

        const task = newTask.value;

        const li = document.createElement('li');
        li.innerHTML = task;
        li.classList.add('list-group-item'); // Add Bootstrap class to the li element

        const ol = document.querySelector('#tasks'); // Select the ordered list element
        const lastLi = ol.querySelector('li:last-child'); // Get the last li element in the ordered list
        if (lastLi) {
            ol.insertBefore(li, lastLi.nextSibling); // Insert the new li element after the last li element
        } else {
            ol.appendChild(li); // If there are no li elements, simply append the new li element
        }

        newTask.value = '';
        submit.disabled = true;

        return false;
    };

});