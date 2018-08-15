"use strict";

    function enhanceOnFocus() {
        return {
        restrict: "A",
        replace: false,
        link:($scope, $element, $attrs)=> {
            $element.on("focus",function(){
                $element.css("padding","100px"); 
            $element.on("blur",function(){
                $element.css("padding","5px");
            });
        });
    }
    }
    }




angular
.module("Social")
.directive("enhanceOnFocus", enhanceOnFocus);