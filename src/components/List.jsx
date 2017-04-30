var React = require('react');

var ListItem = require('./ListItem.jsx');

var List = React.createClass({

    render : function(){

        var createList = function(itemName, index){
            return (<ListItem key={itemName + index}  itemName={itemName} />);
        };
        return (<ul>{this.props.itemList.map(createList)}</ul>);
    }

});

module.exports = List;