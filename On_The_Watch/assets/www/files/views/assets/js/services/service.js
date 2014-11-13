/*
 * Service settings
 */
var OTWdb_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "5461a014e4b0c9bce1328906"
}

/*
 * Services
 */

var OTWdb_onthewatch_create_service = new Apperyio.RestService({
    'url': '{database_url}/collections/onthewatch',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': OTWdb_settings
});