const tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function renderList () {}

function toggleTask (taskId) {
    const task=tasks.filter(function({
       return task.id == taskId;
})
if(task.length>0){

}
}

function deleteTask (taskId) {
    const newtasks=tasks.filter(function(){
        return task.id!==taskId
    })
    tasks=newtasks;
}

function addTask (task) {
    if(task){
        task.push(task);
       renderList();
       showNotification('task is sucefukky added');
       return;
    }
    showNotification('task is not added');

}

function showNotification(text) {
    alert(text);
}
function handleInputKeypress(e){
    if(e.key=='Enter'){
        const text=e.target.value;
        if(!text){
            showNotification('text can no be empty');
            return;
        }
        const task={text,
        id:Date.now().toString()
    }
    e.target.value="";
    addTask(task);
 }
}
addTaskInput.addEventListener('keyup',handleInputKeypress);

