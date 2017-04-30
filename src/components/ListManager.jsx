var React = require('react');

var List = require('./List.jsx');

var ListManager = React.createClass({

    getInitialState : function(){
        return { ItemListState : [], newListItem : '' };
    },
    changeFunc : function(e){
        this.setState({ newListItem : e.target.value });
    },
    submitFunc : function(e){
        e.preventDefault();

        var ItemListArray = this.state.ItemListState;
        if(this.state.newListItem != ''){
            ItemListArray.push(this.state.newListItem);
            this.setState({ ItemListState : ItemListArray, newListItem : '' });
        }
    },
    render : function(){

        return (
                    <div>
                        <h3>{this.props.titleName}</h3>
                        <form onSubmit={this.submitFunc}>
                            <input onChange={this.changeFunc} value={this.state.newListItem} />
                            <button>Add</button>
                        </form>
                        <List itemList={this.state.ItemListState} />
                    </div>
                );

    }

});

module.exports = ListManager;