module.exports = function(router) {

  router.route('/menu')
  .get(function(req, res) {
    var temp = [];
    var result = [];

    if (req.query.category || req.query.query) {
      if (req.query.category) {
        menu.forEach(function(item) {
          if (item.category === req.query.category) {
            temp.push(item);
          }
        });
      } else {
        temp = menu;
      }

      if (req.query.query) {
        var pattern = new RegExp(req.query.query, 'i');
        temp.forEach(function(item) {
          if (pattern.test(item.name)) {
            result.push(item);
          }
        });
      } else {
        result = temp;
      }
    } else {
      result = menu;
    }
    res.json(result);
  });

  return router;

}

var menu = [{
  "name": "disappearing chocolate cake",
  "category": "cakes",
  "price": 12.00,
  "description": "Three layers of dense chocolate cake, frosted and filled with rich chocolate buttercream. It will be gone before you can say 'Abracadabra'.",
  "image_url": "https://www.hersheys.com/recipes/images/detail/184_en-us_large.jpg",
  "is_vegan": false,
  "is_gluten_free": false
},
{
  "name": "banana bread",
  "category": "breads",
  "price": 12.00,
  "description": "Three layers of dense chocolate cake, frosted and filled with rich chocolate buttercream. It will be gone before you can say 'Abracadabra'.",
  "image_url": "https://www.hersheys.com/recipes/images/detail/184_en-us_large.jpg",
  "is_vegan": false,
  "is_gluten_free": false
},
{
  "name": "chocolate fudge brownies",
  "category": "brownies",
  "price": 12.00,
  "description": "Three layers of dense chocolate cake, frosted and filled with rich chocolate buttercream. It will be gone before you can say 'Abracadabra'.",
  "image_url": "https://www.hersheys.com/recipes/images/detail/184_en-us_large.jpg",
  "is_vegan": false,
  "is_gluten_free": false
},
{
  "name": "peanut butter cookies",
  "category": "cookies",
  "price": 12.00,
  "description": "Three layers of dense chocolate cake, frosted and filled with rich chocolate buttercream. It will be gone before you can say 'Abracadabra'.",
  "image_url": "https://www.hersheys.com/recipes/images/detail/184_en-us_large.jpg",
  "is_vegan": false,
  "is_gluten_free": false
},
{
  "name": "snickers",
  "category": "candy",
  "price": 12.00,
  "description": "Three layers of dense chocolate cake, frosted and filled with rich chocolate buttercream. It will be gone before you can say 'Abracadabra'.",
  "image_url": "https://www.hersheys.com/recipes/images/detail/184_en-us_large.jpg",
  "is_vegan": false,
  "is_gluten_free": false
},
{
  "name": "red velvet cake",
  "category": "cakes",
  "price": 12.00,
  "description": "Three layers of dense chocolate cake, frosted and filled with rich chocolate buttercream. It will be gone before you can say 'Abracadabra'.",
  "image_url": "https://www.hersheys.com/recipes/images/detail/184_en-us_large.jpg",
  "is_vegan": false,
  "is_gluten_free": false
},
{
  "name": "chocolate chip cookie",
  "category": "cookies",
  "price": 12.00,
  "description": "Three layers of dense chocolate cake, frosted and filled with rich chocolate buttercream. It will be gone before you can say 'Abracadabra'.",
  "image_url": "https://www.hersheys.com/recipes/images/detail/184_en-us_large.jpg",
  "is_vegan": true,
  "is_gluten_free": false
},
{
  "name": "sweet bread",
  "category": "breads",
  "price": 12.00,
  "description": "Three layers of dense chocolate cake, frosted and filled with rich chocolate buttercream. It will be gone before you can say 'Abracadabra'.",
  "image_url": "https://www.hersheys.com/recipes/images/detail/184_en-us_large.jpg",
  "is_vegan": false,
  "is_gluten_free": true
},
{
  "name": "garlic bread",
  "category": "breads",
  "price": 12.00,
  "description": "Three layers of dense chocolate cake, frosted and filled with rich chocolate buttercream. It will be gone before you can say 'Abracadabra'.",
  "image_url": "https://www.hersheys.com/recipes/images/detail/184_en-us_large.jpg",
  "is_vegan": false,
  "is_gluten_free": false
},
{
  "name": "milky way",
  "category": "candy",
  "price": 12.00,
  "description": "Three layers of dense chocolate cake, frosted and filled with rich chocolate buttercream. It will be gone before you can say 'Abracadabra'.",
  "image_url": "https://www.hersheys.com/recipes/images/detail/184_en-us_large.jpg",
  "is_vegan": true,
  "is_gluten_free": true
},
{
  "name": "peanut butter brownie",
  "category": "brownies",
  "price": 12.00,
  "description": "Three layers of dense chocolate cake, frosted and filled with rich chocolate buttercream. It will be gone before you can say 'Abracadabra'.",
  "image_url": "https://www.hersheys.com/recipes/images/detail/184_en-us_large.jpg",
  "is_vegan": false,
  "is_gluten_free": false
},
{
  "name": "ice cream cake",
  "category": "cakes",
  "price": 12.00,
  "description": "Three layers of dense chocolate cake, frosted and filled with rich chocolate buttercream. It will be gone before you can say 'Abracadabra'.",
  "image_url": "https://www.hersheys.com/recipes/images/detail/184_en-us_large.jpg",
  "is_vegan": false,
  "is_gluten_free": true
}];
