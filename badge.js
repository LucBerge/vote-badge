DEFAULT_COLOR = "green"

function create_badge(key, value){
	return {
		"schemaVersion": 1,
		"label": key,
		"color": DEFAULT_COLOR,
		"message": value.toString()
	}
}

module.exports = {
	create_badge
}
