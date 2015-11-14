'use strict';
class Dragdrop {
    constructor($scope) {
        console.log('dss');
        this.onDrop=()=>{
            alert('onDrop');
        }
    }
}
var app = angular.module('demo', ['ngDragDrop']);
app.controller('Dragdrop',Dragdrop);