'use strict';
class Dragdrop {
    constructor($scope, $q) {
        console.log('dss');
        //this.onDrop=()=>{
        //    console.log('onDrop');
        //    console.log(this);
        //}
        $scope.beforeDrop = function (e) {
            console.log(e);
            var deferred = $q.defer();
            var x;
            var y;
            if (e.pageX || e.pageY) {
                x = e.pageX;
                y = e.pageY;
            }
            else {
                x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            console.log(x);
            console.log(y);
            let circleProp = {};
            circleProp.x = $('.drop-block').offset().left;
            circleProp.y = $('.drop-block').offset().top;
            circleProp.dx = $('.drop-block').width();
            circleProp.dy = $('.drop-block').height();
            console.log(circleProp);
            //console.log(this);
            let inCircle = function (x, y, x0, y0, dx, dy) {
                let center = {};
                center.x = x0 + dx / 2;
                center.y = y0 + dy / 2;
                return (Math.pow((x - center.x), 2) + Math.pow((y - center.y), 2) <= Math.pow(x + dx, 2)) ? true : false;
            };
            if (x > circleProp.x && (x < circleProp.x + circleProp.dx) && y > circleProp.y && (y < circleProp.y + circleProp.dy && inCircle(x, y, circleProp.x, circleProp.y, circleProp.dx, circleProp.dy))) {
                console.log('true');
            } else {
                $(".drag-block").animate({
                    left: "0",
                    top: "0"
                }, 500, function () {
                    // Animation complete.
                });
            }
            deferred.resolve();
            /*if (confirm('Are you sure???')) {
             deferred.resolve();
             } else {
             deferred.reject();
             }*/
            return deferred.promise;
        };
    }
}
var app = angular.module('demo', ['ngDragDrop']);
app.controller('Dragdrop', Dragdrop);