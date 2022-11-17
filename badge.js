const https = require('https');

DEFAULT_COLOR = "green"

function create_url_badge(key, value, query){
	let url = `https://img.shields.io/badge/${key.replaceAll('-', '--')}-${value}-${DEFAULT_COLOR}`
	if(Object.keys(query).length !== 0) {
		const params = Object.entries(query)
			.map(([k, v]) => `${k}=${v}`)
			.join('&');
		url += `?${params}`
	}
	return url
}

async function get_badge(key, value, query) {
	const shields_url = create_url_badge(key, value, query)
	console.log(`GET request to ${shields_url}`)
	let data = ''
	await new Promise((resolve) => {
		https.get(shields_url, (resp) => {

			// A chunk of data has been received.
			resp.on('data', (chunk) => {
				data += chunk
			});

			// The whole response has been received. Print out the result.
			resp.on('end', () => {
				resolve(data)
			});
		}).on("error", (err) => {
			console.log("Shield.io request failed:")
			console.error(err)
		})
	})
	return data
}

function create_json_badge(key, value){
	return {
		"schemaVersion": 1,
		"label": key,
		"color": DEFAULT_COLOR,
		"message": value.toString()
	}
}

module.exports = {
	get_badge, create_json_badge
}
