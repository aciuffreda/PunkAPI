angular.
module('beerDetail').
component('beerDetail', {
  templateUrl: '/components/beer-detail/beer-detail.template.html',
  controller: ['BeerSelection', '$scope', '$rootScope',
    function BeerDetailController(BeerSelection, $scope, $rootScope) {

      let beerSelected = BeerSelection.getBeerSelected();

      $scope.ok = () => { $rootScope.modalInstance.close() };
      $scope.beer = beerSelected;
      $scope.foodPairings = beerSelected.food_pairing.join(", ");

      this.getFormattedIngredients = (ingredients) => {
        const listOfIngredients = [];
        Object.keys(ingredients).forEach(key => {
          if(Array.isArray(ingredients[key])){
            for(let ingredient of ingredients[key]){
              listOfIngredients.push(
                `- ${ingredient.name} ${key} (${ingredient.amount.value} ${ingredient.amount.unit})`
                  .concat(ingredient.add != undefined ? ', added in the '+ingredient.add:'',
                    ingredient.attribute != undefined ? ', attribute: '+ingredient.attribute:'','.')
              );
            }
          }else{
            listOfIngredients.push(`- ${ingredients[key]} ${key}.`);
          }
        });
        return listOfIngredients;
      };


      this.getFormattedMethod = (method) => {
        const listOfMethodProcedures = [];
        console.log(Object.keys(method));
        Object.keys(method).forEach(key => {
          switch (key){
            case 'mash_temp': for(let methodProcedure of method[key]){
              listOfMethodProcedures.push(
                `- ${key} at ${methodProcedure.temp.value} ${methodProcedure.temp.unit} `
                  .concat(methodProcedure.duration != undefined ? 'for '+methodProcedure.duration +' min.' : '.')
              );
            }
            break;
            case 'fermentation':
              listOfMethodProcedures.push(
                `- ${key} at ${method[key].temp.value} ${method[key].temp.unit}.`
              );
              break;
            default:  listOfMethodProcedures.push(`- ${key} ${method[key] != null ? ': '+method[key] : ''}. `);
          }
        });
        return listOfMethodProcedures;
      };

      $scope.allIngredients = this.getFormattedIngredients(beerSelected.ingredients);
      $scope.method = this.getFormattedMethod(beerSelected.method);
  }
  ]
});