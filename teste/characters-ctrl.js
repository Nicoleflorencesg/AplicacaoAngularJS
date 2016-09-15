function CharactersCtrl($scope) {
    $scope.characters = [
      { name: 'Nicole Florence', age: '22', gender: 'Feminino' },
      { name: 'Maria Joaquina', age: '30', gender: 'Feminino' },
      { name: 'Rômulo Campos', age: '27', gender: 'Masculino' },
      { name: 'Guilherme Penido', age: '21', gender: 'Masculino' },
      { name: 'Ezequiel Dias', age: '38', gender: 'Masculino' }
    ];
}

angular
  .module('myApp')
  .controller('CharactersCtrl', CharactersCtrl);