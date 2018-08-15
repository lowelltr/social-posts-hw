"use strict";
const socialPost = { 
            template: `
            <post-form on-submit="$ctrl.onSubmit(newPost)"></post-form>
            <section>
            <h1>My Thoughts<h1>
            <button ng-click="">New Thought</button>
            <post ng-repeat="post in $ctrl.postList" post="post"></post>
            </section>

            `,
            controller: function(){
            const vm =this;
            vm.postList=[ {title: "My thoughts",
                           thought:"Whats on my Mind" 
        }

            ];
            vm.onSubmit=(newPost)=>{
                vm.postList.unshift(angular.copy(newPost));
            }

            
            
        
}
}










angular
.module("Social")
.component("socialPost",socialPost);