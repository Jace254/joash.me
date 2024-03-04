---
title: Getting Started with CSS Animations
date: 2024-03-04T16:33:11Z
description: A guide on understanding animations with pure css
duration: In Progress
draft: true
---

I've been experimenting with CSS animations in the past 3 months. I realized that there's so much that can be done with just pure CSS, without the need for 3rd party libraries. Before I'd just go online and find a library that handles animations, but you will find that lots of them are not framework agnostic. So I decided to do some research and the answer was really in front of me the whole time. CSS !

## Why CSS

Well I think it's obvious why, but to emphasize why, let's look at why other methods are a pain.

I'm currently a Vue developer, I was previously a fan of React until I discovered Vue (_a story for another post_). In Vue, there are a couple of options for animation. [VueUse](https://vueuse.org) provides some helper functions that can get you moving things around. There's also a [blog](https://blog.logrocket.com/top-5-vue-animation-libraries-compared/) that compares different Vue animation libraries, so I won't delve into those details here. However, a common factor among these libraries is that they all use JavaScript.

This means your animations will only load after the page content is rendered, and optimization can only do so much. As a result, you may end up with a slow, bulky website with cool animations.

CSS offers a lightweight and efficient API that is simple to use and supported by almost all major browsers. It is easy to maintain because it is separate from your page's logic. However, handling complex animations and interactions with CSS can be stressful, and some of its benefits may diminish in these situations. Keep this in mind.

## Where should you start?

First let's start with the basics. What can we animate ?

This is a very important question, and from my experience, anything that can be styled, can be animated. Be it color, font, underlines, size, you name them. I also stand to be corrected.

But in this post I'll focus on only three things: _*_Scale_*_, _*_Rotation_*_ and _*_Position_*_. These are the transformation properties of an element. I'll also group my CSS animations into two, _Transition Animations_ and _Keyframe Animations_.

## Transition Animations

These animations allow you to change propery values smoothly over a specified duration. To create a transition you must specify the property you want to add the effect to, and the duration.

> Example

```css
.element {
    width: 100px;
    height: 100px;
    background-color: #1E5CC2;
    transition: width 2s
}
```

The transition effect of this rule will take effect when the specified property changes value. Now let's set a new value for the width when the element is hovered.

```css
.element:hover {
   width: 200px
}
```

You'll notice that the element takes 2 seconds to animate to it's new width.

You'll get something that looks like this:



<div class="element">
Hover me
</div>

<style>
.element {
    width: 100px;
    height: 100px;
    background-color: #1E5CC2;
    display: flex;
    color: black;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    transition: width 2s
}
.element:hover {
   width: 200px
}
</style>

<br/>

This is just a simple example you can further create a more impactful animation with the use of a `transition-timing-function`. This affects how an animation plays out in terms of speed. There's various _timing functions_ that can be used: 

- <span style="color:orange">ease</span> - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
- <span style="color:orange">linear</span> - specifies a transition effect with the same speed from start to end
- <span style="color:orange">ease-in</span> - specifies a transition effect with a slow start
- <span style="color:orange">ease-out</span> - specifies a transition effect with a slow end
- <span style="color:orange">ease-in-out</span> - specifies a transition effect with a slow start and end
- <span style="color:orange">cubic-bezier(n,n,n,n)</span> - lets you define your own values in a cubic-bezier function

So let's update our previous animation to look like this:

<div class="element-2">
Hover me
</div>

<style>
.element-2 {
    width: 100px;
    height: 100px;
    background-color: #1E5CC2;
    display: flex;
    color: black;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    transition: width 2s;
    transition-timing-function: ease-in;
}
.element-2:hover {
    width: 200px
}
</style>

<br/>

```css
.element {
    width: 100px;
    height: 100px;
    background-color: #1E5CC2;
    transition: width 2s;
    transition-timing-function: ease-in;
}
```

You'll notice that the animation starts out slower than it ends.

And finally you can delay the transition using `transition-delay`. This just lags the animation from starting and gives an effect of anticipation.

<div class="element-3">
Hover me
</div>

<style>
.element-3 {
    width: 100px;
    height: 100px;
    background-color: #1E5CC2;
    display: flex;
    color: black;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    transition: width 2s;
    transition-timing-function: ease-in;
    transition-delay: 1s
}
.element-3:hover {
    width: 200px
}
</style>

<br/>

```css
.element {
    width: 100px;
    height: 100px;
    background-color: #1E5CC2;
    transition: width 2s;
    transition-timing-function: ease-in;
    transition-delay: 1s
}
```

You can short-hand these properties into one line on the transition prop:

```css
.element {
    width: 100px;
    height: 100px;
    background-color: #1E5CC2;
    transition: width 2s ease-in 1s
}
```

There's many other things that you can animate using this method. But that pretty much covers how transitions are done using CSS.

## Keyframes

Keyframes are a special sauce to CSS animations. They can do so much more with very minimal setup.

They define a sequence of styles to be applied at various points of an animation timeline. They give us the ability to create dynamic animations like continuous loops, multi-step animations and advanced effects. At this point, your imagination is the limit.

I'd like to go on and tell you how great `@keyframes` are, but let me just show you 😄.

So keyframes are defined with the `@keyframes` selector followed by the name of the animation, like so:

```css
@keyframes my-animation {
    0%: {
        /* apply properties to animate  */
    }
    100%: {
        /* apply final values for the properties */
    }

    /* or */

    from: {
        /* apply properties to animate  */
    }
    to: {
        /* apply final values for the properties */
    }
}
```

This time let's start with a complete animation sequence:

<br/>
<br/>
<br/>

<div class="element-4"></div>

<style>
.element-4 {
    width: 100px;
    height: 100px;
    background-color:  #f6a192;
    border-radius: 20px;
    padding: 20px;
    animation:
     cool-animation
     3000ms
     ease-in-out
     infinite
     alternate
     forwards;
}

@keyframes cool-animation {
    0% {
        transform:  scale(0.5) translateY(-100px) rotate(20deg);
    }
    100% {
        transform: scale(1.5) translateY(50px) rotate(-20deg);
    }
}
</style>

<br/>
<br/>
<br/>

```html
<div class="element">
</div>

<style>
.element {
    width: 100px;
    height: 100px;
    background-color:  #f6a192;
    border-radius: 20px;
    padding: 20px;
    animation: 
        cool-animation 
        3000ms 
        ease-in-out 
        infinite 
        alternate 
        forwards;
}

@keyframes cool-animation {
    0% {
        transform:  scale(0.5) translateY(-100px) rotate(20deg);
    }
    100% {
        transform: scale(1.5) translateY(50px) rotate(-20deg);
    }
}
</style>
```

The first two values in the animation property specify the animation that is running and the duration of the animation.

Let's talk about the rest,

```css line=10
.element {
    width: 100px;
    height: 100px;
    background-color:  #f6a192;
    border-radius: 20px;
    padding: 20px;
    animation: 
        cool-animation 
        3000ms 
        ease-in-out 
        infinite 
        alternate 
        forwards;
}
```

The ease-in-out, just like in transition animations, is the `animation-timing-function`. It controls the speed of the progressing animation and similarly, the different functions mentioned in the [transitions section](/blog/getting-started-with-css-animations#transition-animations).

