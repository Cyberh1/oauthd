exports.config = 
	provider_name: "github"
	domain: "www.github.com"
	test_suite_name: "Github test suite"
	client_id: "f8cf72b63f3f83ca0872"
	client_secret: "804297a533437c3b94e819d649f76c9147d2b306"
	form:
		selector: "#site-container form"
		fields: {
			login: 'jeanrenedupont86@gmail.com',
			password: 'jeanrene4'
		}
		permissions_buttons: [
			'.setup-main form'
		]
	requests: [
					method: "get",
					params: ['/user'],
					validate: (error, data)  ->
						return (error == undefined or error == null) and data.login == "jeanrene86"
		]