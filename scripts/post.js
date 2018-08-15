"use strict";
        const post={
        bindings: {
         post:"<"   
        },
        template:`
        <section class ="pastPosts">
    <ol>
       <li class="container"> 
            <p>{{$ctrl.post.title}}</p>
            <p>{{$ctrl.post.thought}}</p>
            <p>X</p>
       </li>
    </ol>
        
        </section>`
};






angular
.module("Social")
.component("post",post);