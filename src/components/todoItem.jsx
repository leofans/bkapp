import React from 'react';

class TodoItem extends React.Component{

	shouldComponentUpdate(nextProps){
		return nextProps.state != this.props.state;
	}

	render(){

		let {state,action}=this.props;

		let mockState={
			id:1,
			isDone:false
		};

		let mockActions={
			doItem: id=> layer.alert('done item',id)
		};

		state=mockState; actions=mockActions;

		if(state.isDone) return null;

		return(
			<div className="todoItem">
				<div className="checkbox">
					<label>
						<input type="checkbox" />
						todo content
					<label>
				</div>
				<div className="btn-div">
					<button onClick={() => actions.doItem(state.id) }>Done</button>					
				</div>
			</div>
		)
	}
}


export default TodoItem;