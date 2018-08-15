"use strict";
const postForm = { 
            bindings:{
            onSubmit:"&"
     },
            template:`
            <form ng-submit="$ctrl.onSubmit({newPost:$ctrl.newPost});">
            <p>New Post</p>
            <input enhance-on-focus type="text"ng-model="$ctrl.newPost.title">
            <p>Thought</p>
            <input enhance-on-focus type="text area" ng-model"$ctrl.newPost.thought">
            <button>Add Post</button>
            </form>
            
            
            `,
}


angular
.module("Social")
.component("postForm",postForm);