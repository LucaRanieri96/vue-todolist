const { createApp } = Vue;

createApp({
  data() {
    return {
      dog:"./assets/img/dog.gif",
      title: "TODO LIST",
      newTask: "",
      error: null,
      tasks: [
        { text: "Learn Html", 
          done: false
        },
        { text: "Learn css", 
          done: false 
        },
        { text: "Learn php", 
          done: false 
        },
        { text: "Learn javascript", 
          done: false 
        },
      ],
    };
  },
  methods: {
    barredTask(i) {
      this.tasks[i].done = !this.tasks[i].done;
      console.log("hai cliccato sull'icona");
    },
    deleteTask(i) {
      this.tasks.splice(i, 1);
    },
    addTasks() {
      console.log("add the current task to the list");
      // pushare dentro task la nuova task

      if (this.newTask.length > 1) {
        this.tasks.push({text: this.newTask, done: false});
        this.newTask = "";
        this.error = null;
      } else {
        this.error = "sorry, the task length must be at least 2 characters";
      }
    },
  },
}).mount("#app");

// add event listener v-on @ sul button
