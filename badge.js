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

function create_json_badge(key, value){
	return {
		"schemaVersion": 1,
		"label": key,
		"color": DEFAULT_COLOR,
		"message": value.toString()
	}
}

module.exports = {
	create_url_badge, create_json_badge
}
