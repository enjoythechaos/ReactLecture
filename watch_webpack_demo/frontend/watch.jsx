var React = require('react');
var Buttons = require('./buttons');
var Display = require('./display');
var Splits = require('./splits');

var Watch = React.createClass({
  getInitialState: function() {
    return {elapsed: 0, running: false, splits: []};
  },

  tick: function(){
    if (this.state.running) {
      this.setState({elapsed: this.state.elapsed + 1});
    }
  },

  button1Pressed: function() {
    if (this.state.running) {
      var splits = this.state.splits;
      if (splits.length > 0) {
        var lastSplit = splits[splits.length - 1];
      } else {
        var lastSplit = 0;
      }
      splits.push(this.state.elapsed - lastSplit);
      this.setState({splits: splits});
    } else {
      this.setState({running: true});
    }
  },

  button2Pressed: function() {
    if (this.state.running) {
      this.setState({running: false});
    } else {
      this.setState({elapsed: 0, splits: []});
    }
  },

  componentDidMount: function() {
    setInterval(this.tick, 1000);
  },

  render: function(){
    return (
      <div>
        <Buttons button1Callback={this.button1Pressed} button2Callback={this.button2Pressed} running={this.state.running}/>
        <Display elapsed={this.state.elapsed}/>
        <Splits splits={this.state.splits}/>
      </div>
    );
  }
});

module.exports = Watch;
