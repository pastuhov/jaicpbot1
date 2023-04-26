var ENDPOINT = $injector.pipedream_endpoint;

function sendRequest(units, lang, q){
return $http.get("${ENDPOINT}", {
        timeout: 10000,
        query:{
            units: units,
            lang: lang,
            q: q
        }
    });
}