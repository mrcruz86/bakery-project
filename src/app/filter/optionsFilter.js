module.exports = function() {

  return function(items, vegan, gluten) {
    var output = [];

    angular.forEach(items, function(item) {
      if (vegan) {
        if (gluten) {
          if (item.is_gluten_free) {
            output.push(item);
          } else if (item.is_vegan) {
            output.push(item);
          }
        } else {
          if (item.is_vegan) {
            output.push(item);
          }
        }
      } else if (gluten) {
        if (item.is_gluten_free) {
          output.push(item);
        }
      } else {
        output.push(item);
      }
    });

    return output;
  }

}
