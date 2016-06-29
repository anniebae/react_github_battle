var React = require('react');
var PropTypes = React.PropTypes;

function puke(obj) {
	return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function Results (props) {
	return (
		<div>Results</div>
	)
}

Results.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.arrauy.isRequired
}

module.exports = Results;