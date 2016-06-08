var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
	render: function() {
		console.log(this.props)
		return (
			<div> Hello Reactjs Program! </div>
		)
	}
});

ReactDOM.render(
	<HelloWorld name="Annie" anySortOfData={29} />,
	document.getElementById('app')
);