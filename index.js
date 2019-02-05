// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskDescription.push(description);
//   taskComplete.push(false);
// }


//Using OOP to organize properties and methods in one function
function newTask(project, description, dueDate) {
  const task = {
    project: project, 
    description: description,
    dueDate: dueDate,
    complete: false,

    logTaskState: function () {
      if (this.complete === false) {
        console.log(`${this.project} has not been completed and it is due ${dueDate}. Better get on it soon`)
      } 

      if (this.complete === true) {
        console.log(`${this.project} has been completed`)
      }
    },

    markCompleted: function () {
      this.complete = true
    }
  }
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(task) {
//   //taskComplete[taskIndex] = true;
//   task.complete = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   const title = task.title;
//   const complete = task.complete;
//   // const title = taskTitles[taskIndex];
//   // const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// // DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1



// const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task1 = newTask("Energy Project Program", "Provide funding to support energy reduce projects", "February 3rd")
// const task2 = newTask("Do Laundry", "😨");
// const tasks = [task1, task2];



// console.log(tasks);

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logTaskState(); // Clean Cat Litter has been completed
