const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "TODO LIST",
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
      this.tasks[i].done = true;
      console.log("hai cliccato sull'icona");
    }
  },
}).mount("#app");

// add event listener v-on @ sul button
