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
        // Prevent the form from submitting and refreshing the page
        event.preventDefault();

        const task = newTask.value;

        const li = document.createElement('li');
        li.innerHTML = task;
        // Add Bootstrap class to the li element
        li.classList.add('list-group-item');

        // Select the ordered list element
        const ol = document.querySelector('#tasks');
        // Get the last li element in the ordered list
        const lastLi = ol.querySelector('li:last-child');
        if (lastLi) {
            // Insert the new li element after the last li element
            ol.insertBefore(li, lastLi.nextSibling);
        } else {
            // If there are no li elements, simply append the new li element
            ol.appendChild(li);
        }

        newTask.value = '';
        submit.disabled = true;

        return false;
    };

});