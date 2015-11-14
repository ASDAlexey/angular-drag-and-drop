'use strict';
var Dragdrop = (function () {
    function Dragdrop($scope) {
        console.log('dss');
        this.onDrop = function () {
            alert('onDrop');
        };
    }
    return Dragdrop;
})();
var app = angular.module('demo', ['ngDragDrop']);
app.controller('Dragdrop', Dragdrop);
//# sourceMappingURL=DragDrop.js.map