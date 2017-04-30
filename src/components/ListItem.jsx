var React = require('react');

var ListItem = React.createClass({

    render : function(){
        return (<li>{this.props.itemName}</li>);
    }

});

module.exports = ListItem;