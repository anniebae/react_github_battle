var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

// acronym to test React Components against (Addy Osmani)
/*
	Focused
	Independent
	Reusable
	Small
	Testable
*/


ReactDOM.render(
	routes,
	document.getElementById('app')
);


// var ProfileName = React.createClass({})
// SAME THING
// class ProfileName extends React.Component{}