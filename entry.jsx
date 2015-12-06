var React = require('react'),
    ReactDOM = require('react-dom');

  document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
      React.createElement('span', {}, "I love React!"),
      document.getElementById('root')
    );
  }, false);
