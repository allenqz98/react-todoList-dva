
export default {

  namespace: 'todoList',

  state:{
    tasks: [{task: 'ajfal', status: true, timer: []}, {task: 'qwe123', status: false, timer: []}],
  },
  
  reducers:{
    add(state, action) {
      return {...state, tasks: state.tasks.concat({task: action.text, status: false, timer:[]})}
    },

    toggle(state, action) {
      const newTasks = state.tasks.map((task, index) => {
        if (index === action.i) {
          if (task.status === true) {
            return {task: task.task, status: !task.status, timer: []}
          }
          else {
            return {task: task.task, status: !task.status, timer: task.timer}
          }
        }
        return task
      })
      return {...state, tasks: newTasks}
    },

    setTimer(state, action) {
      var date = new Date();
	    var seperator1 = "-";
	    var seperator2 = ":";
	    var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
	    var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
	    var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
			  + " "  + date.getHours()  + seperator2  + date.getMinutes()
			  + seperator2 + date.getSeconds();


      const newTasks = state.tasks.map((task, index) => {
        if (index === action.i) {
          if (task.timer[0]) {
            return {task: task.task, status:task.status, timer:[task.timer[0], currentdate]}
          }
          else {
            return {task: task.task, status:task.status, timer:[currentdate,task.timer[1]]}
          }
        }
        else {
          return task
        }
      })
      return {...state, tasks: newTasks}
    }
  }

};
