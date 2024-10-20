let Loader = document.getElementById("loader");

// Function to load assignments from localStorage and display them on the page
function loadAssignments() {
    const assignments = JSON.parse(localStorage.getItem('practicals')) || [];
    const assignmentList = document.getElementById('assignment-list');

    // Clear existing assignments to avoid duplicates
    assignmentList.innerHTML = '';

    // Create a card for each assignment
    assignments.forEach((assignment, index) => {
        const div = document.createElement('div');
        div.className = "col-md-6";

        // Apply 'completed' class if the assignment is marked as done
        const completedClass = assignment.completed ? 'completed' : '';

        div.innerHTML = `
            <div class="card ${completedClass}">
                <div class="card-body">
                    <div>
                        <h5 class="card-title">${assignment.subject}</h5>
                        <p class="card-text">Topic: ${assignment.topic}</p>
                        <p class="card-text">Date: ${assignment.date}</p>
                        <p class="card-text">Deadline: ${assignment.deadline}</p>
                    </div>
                    <div>
                        <button class="done-btn my-4" onclick="markAsDone(${index})">Done</button>
                        <button class="remove-btn" onclick="removeAssignment(${index})">Remove</button>
                    </div>
                </div>
            </div>
        `;
        assignmentList.appendChild(div);
    });
}

// Load assignments when the page loads
window.onload = loadAssignments;

// Function to mark an assignment as done
function markAsDone(index) {
    let assignments = JSON.parse(localStorage.getItem('practicals')) || [];
    
    // Mark assignment as done
    assignments[index].completed = true;  
    localStorage.setItem('practicals', JSON.stringify(assignments));
    
    // Show loader during processing
    Loader.style.display = "block";

    // Simulate a delay for processing
    setTimeout(() => {
        Loader.style.display = "none";
        alert("Practical marked as done!");
        loadAssignments(); // Refresh the assignments list without reloading the page
    }, 1000);
}

// Function to remove an assignment based on its index in the array
function removeAssignment(index) {
    let assignments = JSON.parse(localStorage.getItem('practicals')) || [];
    
    // Remove the assignment at the specified index
    assignments.splice(index, 1);  
    localStorage.setItem('practicals', JSON.stringify(assignments));
    
    // Show loader during processing
    Loader.style.display = "block";

    // Simulate a delay for processing
    setTimeout(() => {
        Loader.style.display = "none";
        alert("Practical removed successfully!");
        loadAssignments(); // Refresh the assignments list without reloading the page
    }, 1000);
}
