import React, {PureComponent} from 'react';
import { connect } from 'dva';
import Input from '../components/Input';
import Table from '../components/Table';

const mapStateToProps = (state) => ({
  tasks: state.todoList.tasks
})

const mapDispatchToProps = (dispatch) => {
  return {
    add: (str) => dispatch({ type: 'todoList/add', text: str}),
    toggle: (i) => dispatch({type: "todoList/toggle", i: i}),
    setTimer:(i) => dispatch({type: "todoList/setTimer", i: i}),
  }
}



class IndexPage extends PureComponent {
  render() {
    const {tasks, add, toggle, setTimer} = this.props;
    return (
      <div className="conatiner-fluid">
        <Input add={add}></Input> 
        <Table tasks={tasks} toggle={toggle} setTimer={setTimer}></Table>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
