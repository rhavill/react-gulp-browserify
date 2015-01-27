var Child = React.createClass({
  render: function(){
    return (
      <div>
        This is the <b>{this.props.name}</b>.
      </div>
    )
  }
});

module.exports = Child;