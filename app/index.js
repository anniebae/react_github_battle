var USER_DATA = {
	name: "Adele",
	username: "adele",
	image: 'https://pbs.twimg.com/profile_images/657199367556866048/EBEIl2ol.jpg'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function() {
		return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
	}
});

var Link = React.createClass({
	render: function() {
		return (
			<span>
				'heyy'
			</span>
		)
	}
});	

var ProfileLink = React.createClass({
	render: function() {
		return (
			<Link>
				<a href={'http://adele.com/'}>{this.props.username}</a>
			</Link>
		)
	}
});

var ProfileName = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.name}
			</div>
		)
	}
});

var Avatar = React.createClass({
	render: function() {
		return(
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
		)
	}
});

ReactDOM.render(
	<Avatar user={USER_DATA} />,
	document.getElementById('app')
)