// ==========================================================
// Add new task
const close_card_task = document.getElementById("card-button-close")
const open_card_task = document.getElementById("add-task")
open_card_task.addEventListener("click", () => {
    document.querySelector('.card-new-task').classList.add("card-slide-active");
});
close_card_task.addEventListener("click", () => {
    document.querySelector('.card-new-task').classList.add("move-off-screen-final");
    document.querySelector('.card-new-task').classList.remove("card-slide-active");
    document.querySelector('.card-new-task').classList.remove("move-off-screen-final");
});

const form = document.getElementById('task-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('task-title').value;
    const text = document.getElementById('task-text').value;

    // Create new section
    const taskSection = document.createElement('section');
    taskSection.id = 'tasks';

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('new-task');

    const titleElement = document.createElement('h1');
    titleElement.className = 'title-design';
    titleElement.textContent = title;

    const textElement = document.createElement('label');
    textElement.className = 'text-design';
    textElement.textContent = text;

    const otherInfoDiv = document.createElement('div');
    otherInfoDiv.classList.add('other-info');

    const dateLabel = document.createElement('label');
    const timeLabel = document.createElement('label');

    const now = new Date();
    const dateOptions = { year: 'numeric', day: '2-digit', month: 'long' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };

    dateLabel.textContent = now.toLocaleDateString('en-US', dateOptions);
    timeLabel.textContent = now.toLocaleTimeString('en-US', timeOptions);

    otherInfoDiv.appendChild(dateLabel);
    otherInfoDiv.appendChild(timeLabel);

    taskDiv.appendChild(titleElement);
    taskDiv.appendChild(textElement);
    taskDiv.appendChild(otherInfoDiv);

    const buttonLink = document.createElement('a');
    buttonLink.href = '#';
    const button = document.createElement('button');
    button.className = 'click-effect arrow-button';
    buttonLink.appendChild(button);

    taskSection.appendChild(taskDiv);
    taskSection.appendChild(buttonLink);

    // Append to body
    document.getElementById("tasks-place").appendChild(taskSection);

    // Clear inputs
    form.reset();
});