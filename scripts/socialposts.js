"use strict";
const socialPost = { 
            template: `
            <post-form on-submit="$ctrl.onSubmit(newPost)"></post-form>
            <section>
            <h1>My Thoughts<h1>
            <button ng-click="$ctrl.pickAFunctionName()">New Thought</button>
            <post ng-repeat="post in $ctrl.postList" post="post"></post>
            </section>

            `,
            controller: function(){
            const vm =this;
            vm.postList=[ {title: "Inside My Brain",
                           thought:"Would'nt you like to know"
                        },
                           {title:"Wild Thoughts" ,
                           thought:"Which way is up"
                        },
                           {title:"Ooo I think she like me",
                           thought: "She don't"
                        },
            ];
            vm.onSubmit=(newPost)=>{
                vm.postList.unshift(angular.copy(newPost));
            }
            vm.pickAFunctionName = function () {
                document.querySelector("post-form").classList.toggle("makeUpAClassNameHere")
            } 
            
            
        
}
}










angular
.module("Social")
.component("socialPost",socialPost);