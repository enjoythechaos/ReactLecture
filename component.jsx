// A react component class takes in a single argument, which is an object containing
// key-value pairs that are usually functions.  This one needs to have a render function
// since it is a view class.
// Props - passed to component upon creation from parent object.
// Component doesn't change props.
// State - established when an instance of a component is created.  See getInitialState function.
// State changes over time.  The state will generally become the props of its descendent.


var ClickCounter = React.createClass({
  getInitialState: function() {
    return {count: 0};
  },

  click: function(event) {
    event.preventDefault();
    this.setState({count: this.state.count + 1});
  },
  //     ^ I think setState is an inherited method.

  //render should always return a tree.
  //this is never explicitly called.  Completely determinisitic based on props and state.
  //Renders when state or parent componet change, props change.

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement(
          'button',
          {onClick: this.click},
          //The event listener is created by passing the handler in as a prop, associated with the event that triggers it.
          //No need to do this.evendHandler.bind(this) for instance methods, automatically bound.
          //Event is passed to handler just as in JQuery.
          "CLICK ME"
        ),
        React.createElement('span', {}, this.state.count)
      )
    );
  }
});
