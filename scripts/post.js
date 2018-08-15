"use strict";
        const post={
        bindings: {
         post:"<"   
        },
        template:`
        <section class ="pastPosts">
        <p>{{$ctrl.post.title}}</p>
        <p>{{$ctrl.post.thought}}</p>
        <p>X</p>

        
        </section>`
};






angular
.module("Social")
.component("post",post);