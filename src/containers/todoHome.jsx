import React from 'react';
import {connect} from 'react-redux';

import TodoItem from '../components/todoItem';

//Todo APP home page
class TodoHome extends React.Compnent{

	render(){
		let {state}=this.props;

		let mockState={
			isAdd:false,
				newTodoId:2,
			todoList:[
				{
					id:1,
					isDone:true
				},
				{
					id:2,
					isDone:false
				}
			]
		};

		state=mockState;

		let states={
			todoNow:{
				quantity:0
			}
			todoDone:{
				quantity:0
			}
		};

		state.todoList.map(todoItem =>{
			let selector=todoItem.isDone?'todoDone':'todoNow';
			stats[selector].quantity ++;
		})

		return(
			<div className="todoHome">
				<div className="title">TODO</div>

				<div className="header">
					<div className="login_user">
						
					</div>
					<div className="setting">
						
					</div>					
				</div>

				<div className="body">
					<div className="aside">
						
					</div>
					<div className="todo_content">
						{stats.todoNow.quantity}条todo未做,
						{stats.todoDone.quantity}条todo已做

						<div className="todo_list">
							{state.todoItem.map(todoItem => <TodoItem state={todoItem} />)}
						</div>
					</div>
				</div>
				<div className="footer">
					<button>
						ADD
					</button>
				</div>
			</div>
		)
	}
}

function select(state){
	return{
		state:state.todoHome
	}
}


export default connect(select)(TodoHome);