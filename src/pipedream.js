var ENDPOINT = $injector.pipedream_endpoint;

function sendRequest(payload){
return $http.get("${ENDPOINT}", {
        timeout: 10000,
        query:{
            payload: payload
        }
    });
}