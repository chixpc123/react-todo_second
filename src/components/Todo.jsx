var React = require('react');

var ListManager = require('./ListManager.jsx');

var Todo = React.createClass({

    render : function(){
        var createTodo = function(todoTitle, index){
            return (<ListManager titleName={todoTitle} key={index + todoTitle} />);
        }

        return (<span>{this.props.TodoList.map(createTodo)}</span>);
    }

});

module.exports = Todo;