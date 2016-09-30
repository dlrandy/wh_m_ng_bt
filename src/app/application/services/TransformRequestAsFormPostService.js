export default class TransformRequestAsFormPostService {
    constructor($rootScope) {
        this.$rootScope = $rootScope;
    }
    transform(data, getHeaders) {
        // var headers = getHeaders();
        // console.log(headers)
        // headers["content-type"] = "application/x-www-form-urlencoded; charset=utf-8";
            // console.log(headers)
        return this.serializeData(data);
    }
    serializeData(data) {
        // If this is not an object, defer to native stringification.
        if (!angular.isObject(data)) {
            return ((data == null) ? "" : data.toString());
        }
        var buffer = [];
        // Serialize each key in the object.
        for (var name in data) {
            if (!data.hasOwnProperty(name)) {
                continue;
            }
            var value = data[name];
            buffer.push(
                encodeURIComponent(name) +
                "=" +
                encodeURIComponent((value == null) ? "" : value)
            );
        }
        // Serialize the buffer and clean it up for transportation.
        var source = buffer
            .join("&")
            .replace(/%20/g, "+");
        return (source);
    }
}
