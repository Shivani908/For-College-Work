document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    if (name && email && course) {
        const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
        const newRow = studentTable.insertRow();

        const nameCell = newRow.insertCell(0);
        const emailCell = newRow.insertCell(1);
        const courseCell = newRow.insertCell(2);
        const imageCell = newRow.insertCell(3);

        nameCell.textContent = name;
        emailCell.textContent = email;
        courseCell.textContent = course;

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('image-cell');
        imgDiv.style.backgroundImage = "url('https://via.placeholder.com/100')";
        imageCell.appendChild(imgDiv);

        // Reset form after submission
        document.getElementById('registrationForm').reset();
    }
});