class List {
    constructor() {
        this.tasks = [];
        this.numberOfTasks = 0;
    };

    add(task) {
        this.numberOfTasks += 1;
        this.tasks.push({id: this.numberOfTasks, content: task, status: "to-do"});
        console.log(this.tasks[this.tasks.length-1]);
    };

    delete(taskId) {
        this.tasks.forEach((obj, i) => {
            if(obj.id == taskId) {
                this.tasks.splice(i, 1);
                console.log(this.tasks);
            };
        });
    };

    edit(taskId, taskContent) {
        this.tasks.forEach(obj => {
            if(obj.id == taskId) {
                obj.content = taskContent;
                console.log(obj);
            }
        })
    };

    markAsUnCompleted(taskId) {
        this.tasks.forEach(obj => {
            if(obj.id == taskId) {
                if(obj.status === "to-do") {
                    obj.status = "done";
                    console.log(obj.status);
                }
                else if (obj.status === "done") {
                    obj.status = "to-do";
                    console.log(obj.status);
                };
            };
        });
    };
};

export {List};