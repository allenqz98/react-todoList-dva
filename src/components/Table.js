import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: this.props.tasks,
      mode: 'all',
    };
    this.checkMode = this.checkMode.bind(this)
    this.displayRows = this.displayRows.bind(this)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.tasks !== this.props.tasks) {
      this.setState(nextProps)
    }
  }

  handleDone = (i) => {
    this.props.toggle(i)
  }

  render() {
    const rows = this.displayRows()
    return (
      <div>
        <table className="table text-center">
          <thead className="thead-dark">
          <tr>
            <th>序号</th>
            <th>内容</th>
            <th>状态</th>
            <th>开始</th>
            <th>开始时间</th>
            <th>结束时间</th>
            <th>完成/未完成</th>
          </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
        <div className="container text-center">
        <input type="button" className="btn btn-primary" value="全部" onClick={() => this.setState({mode: "all"})} />
        <input type="button" className="btn btn-success" value="完成" onClick={() => this.setState({mode:"done"})} />
        <input type="button" className="btn btn-warning" value="未完成" onClick={() => this.setState({mode: "!done"})} />
        
        </div>
      </div>
    );
  }


  displayRows = () => {
    const display = this.state.tasks.filter(this.checkMode)
    const rows = display.map((task, i) => (
      <tr>
        <td>{this.state.tasks.indexOf(display[i]) + 1}</td>
        <td>{display[i].task}</td>
        <td>{display[i].status? '完成' : '未完成'}</td>
        <td><input type="button" className={display[i].timer[0]? "btn btn-warning" : "btn btn-primary"} value={display[i].timer[0]? "结束" : "开始"} onClick={() => this.startTimer(this.state.tasks.indexOf(display[i]), display[i].timer[0]? "结束" : "开始")} /></td>
        <td>{display[i].timer[0]}</td>
        <td>{display[i].timer[1]}</td>
        <td><input type="submit" value={display[i].status ? '未完成' : '完成'} onClick={() => {this.handleDone(this.state.tasks.indexOf(display[i]))}} className={display[i].status ? "btn btn-warning" : "btn btn-success"}></input></td>
        
        
      </tr>))

    return rows
  }

  checkMode(task) {
    if (this.state.mode === "done") {
      return task.status === true;
    }
    if (this.state.mode === "!done") {
      return task.status === false;
    }
    else {
      return true;
    }
  }

  startTimer = (i, text) => {
    if (this.state.tasks[i].status === false){
      this.props.setTimer(i)

      if (text === '结束') {
        this.props.toggle(i)
      }
    }
    
  }

}

export default Table;
