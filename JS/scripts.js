//Data model
let habits = [];

//Cache DOM
const listEl = document.getElementById('habit-list');
const progressEl = document.getElementById('progress');
const formEl = document.getElementById('add-habit-form');
const nameInput = document.getElementById('habit-name');
const resetBtn = document.getElementById('reset-all');

//Render habits into the list
function renderHabits(){
    listEl.innerHTML = ' ';
    for (let i = 0; i < habits.length; i++){
        const habit = habits[i];

        const li = document.createElement('li');
        if (habit.done) li.classList.add('done');
        
        //checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = habit.done;
        checkbox.addEventListener('change', () => {
            toggleHabitDone(i);
        });

        //Text
        const span = document.createElement('span');
        span.textContent = habit.name;

        //Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            removeHabit(i);
        });

        li.append(checkbox, span, removeBtn);
        listEl.appendChild(li);
    }
    updateProgress();
}

//Update the completed count
function updateProgress() {
    const doneCount = habits.filter(h => h.done).length;
    progressEl.textContent = `Habits Completed: ${doneCount}`;
}

//Add a new habit
function addHabit(name){
    habits.push({name, done: false });
    renderHabits();
}

//Toggle done state
function toggleHabitDone(index){
    habits[index].done = !habits[index].done;
    renderHabits();
}

//Remove a habit
function removeHabit(index){
habits.splice(index, 1);
renderHabits();
}

//Reset all to undone
function resetAllHabits(){
    habits.forEach(h => h.done = false);
    renderHabits();
}

//Event Listeners
formEl.addEventListener('submit', e => {
    e.preventDefault();
    addHabit(nameInput.value.trim());
    nameInput.value = ' ';
});

resetBtn.addEventListener('click', resetAllHabits);

//Initial render
renderHabits();