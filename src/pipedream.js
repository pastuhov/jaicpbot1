var ENDPOINT = $injector.pipedream_endpoint;

function sendRequest(payload){
return $http.get("${endpoint}?payload=${payload}", {
        timeout: 10000,
        query:{
            endpoint: ENDPOINT,
            payload: payload
        }
    });
}