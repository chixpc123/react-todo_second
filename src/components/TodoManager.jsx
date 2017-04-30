var React = require('react');

var Todo = require('./Todo.jsx');

var TodoManager = React.createClass({

    getInitialState : function(){
        return { TodoListArray : [], newTodoTitle : '' };
    },
    changeFunction : function(e){
        this.setState({ newTodoTitle : e.target.value });
    },
    submitFunction : function(e){
        e.preventDefault();

        var TodoListTemp = this.state.TodoListArray;

        if(this.state.newTodoTitle != ''){
            TodoListTemp.push(this.state.newTodoTitle);

            this.setState({ TodoListArray : TodoListTemp, newTodoTitle : '' });
        }
    },
    render : function(){
        return (
                    <div>
                        <form onSubmit={this.submitFunction}>
                            <input onChange={this.changeFunction} value={this.state.newTodoTitle} />
                            <button>Add</button>
                        </form>
                        <Todo TodoList={this.state.TodoListArray} />
                    </div>
                );

    }

});

module.exports = TodoManager;