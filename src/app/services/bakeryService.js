module.exports = function($http) {

  var getItems = function(cat, search) {
    var baseUrl = 'http://localhost:3000/api/v1/menu';

    if (cat || search) {
      baseUrl = baseUrl + '?';
      if (search && cat) {
        baseUrl = baseUrl + 'category=' + cat;
        baseUrl = baseUrl + '&';
        baseUrl = baseUrl + 'query=' + search;
      } else {
        if (cat) {
          baseUrl = baseUrl + 'category=' + cat;
        }
        if (search) {
          baseUrl = baseUrl + 'query=' + search;
        }
      }
    }
    console.log(baseUrl);
    return $http.get(baseUrl);
  };

  return {
    getItems: getItems
  };

}
