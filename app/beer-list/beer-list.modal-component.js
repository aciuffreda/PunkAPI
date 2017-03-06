angular.
module('beerList')
  .component('myModal', {
    template: `<div class="modal-body">
    <label>Name To Edit</label> <input ng-model="$ctrl.modalData.name"><br>
    <label>Value To Edit</label> <input ng-model="$ctrl.modalData.value"><br>
    <button class="btn btn-warning" type="button" ng-click="$ctrl.handleClose()">Close Modal</button>
    <button class="btn btn-warning" type="button" ng-click="$ctrl.handleDismiss()">Dimiss Modal</button>
    </div>`,
    bindings: {
      $close: '&',
      $dismiss: '&',
      modalData: '<'
    },
    controller: [function() {
      let $ctrl = this;
      $ctrl.handleClose = function() {
        console.info("in handle close");
        $ctrl.$close({
          result: $ctrl.modalData
        });
      };
      $ctrl.handleDismiss = function() {
        console.info("in handle dismiss");
        $ctrl.$dismiss({
          reason: 'cancel'
        });
      };
    }],
  });