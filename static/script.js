SERVER_URL = "https://vote-badge.cyclic.app"
REPO_URL = "https://github.com/LucBerge/vote-badge"

KEY_ID = "key-input"
LABEL_ID = "label-input"
COLOR_ID = "color-input"
LOGO_ID = "logo-input"
LOGO_COLOR_ID = "logo-color-input"

BADGE_ID = "badge-output"
VOTE_CODE_ID = "vote-output"
VIEW_COUNTER_ID = "view-counter-output"

function create_key_params_url(key, query) {
	var url = key
	if(Object.keys(query).length !== 0) {
		const params = Object.entries(query)
			.map(([k, v]) => `${k}=${v}`)
			.join('&');
		url += `?${params}`
	}
	return url
}

function create_badge_url(key_params_url) {
	return `/count/${key_params_url}`
}

function create_vote_code(key_params_url, key) {
	return `[![Custom badge](${SERVER_URL}/count/${key_params_url})](${SERVER_URL}/vote/${key})`
}

function create_view_counter_code(key_params_url, key) {
	return `[![Custom badge](${SERVER_URL}/view/${key_params_url})](${REPO_URL})`
}

function create_badge() {
	var key = document.getElementById(KEY_ID).value;
	
	//If key is not empty
	if(key != "") {
		var query = {};
		
		var label = document.getElementById(LABEL_ID).value;
		var color = document.getElementById(COLOR_ID).value;
		var logo = document.getElementById(LOGO_ID).value;
		var logoColor = document.getElementById(LOGO_COLOR_ID).value;
		
		label != "" ? query["label"] = label : null;
		color != "" ? query["color"] = color : null;
		logo != "" ? query["logo"] = logo : null;
		logoColor != "" ? query["logoColor"] = logoColor : null;
		
		//Create params
		var key_params_url = create_key_params_url(key, query)
		
		//Update badge
		document.getElementById(BADGE_ID).src = create_badge_url(key_params_url);
		
		//Update vote code
		document.getElementById(VOTE_CODE_ID).value = create_vote_code(key_params_url, key);

		//Update view counter code
		document.getElementById(VIEW_COUNTER_ID).value = create_view_counter_code(key_params_url, key);
	}
	//If key is empty
	else {
		document.getElementById(BADGE_ID).src = "";
		document.getElementById(VOTE_CODE_ID).value = "";
		document.getElementById(VIEW_COUNTER_ID).value = "";
	}
}
function lookup() {
    if (item_id.length == 3) { /* if item id is 3 digits */
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // TODO parse JSON response
                response = xhr.responseText;
                if(response != ""){
                    object = JSON.parse(response);
                    document.getElementById("name").value = object["name"];
                    document.getElementById("brand").value = object["brand"];
                    document.getElementById("size_x").value = object["size_x"];
                    document.getElementById("size_y").value = object["size_y"];
                    document.getElementById("size_z").value = object["size_z"];
                    document.getElementById("price").value = object["price"];
                    document.getElementById("available").checked = object["available"];
                }
                // TODO fill in form fields
            }
        };
        xhr.open("GET", "/inventory?item_id=" + item_id, true);
        xhr.send(null);
    }
    else {
        /* clear form values */
        document.getElementById("name").value = "";
        document.getElementById("brand").value = "";
        document.getElementById("size_x").value = "";
        document.getElementById("size_y").value = "";
        document.getElementById("size_z").value = "";
        document.getElementById("price").value = "";
        document.getElementById("available").checked = false;
    }
}

