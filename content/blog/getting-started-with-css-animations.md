---
title: Getting Started with CSS Animations
date: 2024-03-04T16:33:11Z
description: A guide on understanding animations with pure css
duration: 5 min
---

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

.element-5 {
    width: 100px;
    height: 100px;
    background-color:  #f6a192;
    border-radius: 20px;
    padding: 20px;
    animation:
        cool-animation
        3000ms
        ease-in-out
}

.element-6 {
    width: 100px;
    height: 100px;
    background-color:  #f6a192;
    border-radius: 20px;
    padding: 20px;
    animation:
        cool-animation
        3000ms
        ease-in-out
        forwards
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

### Transition Timing Functions

You can further create a more impactful animation with the use of a `transition-timing-function`. This affects how an animation plays out in terms of speed. There's various _timing functions_ that can be used:

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

### Transition Delay

And finally you can delay the transition using `transition-delay`. This just lags the animation from starting and gives an effect of anticipation.

<div class="element-3">
Hover me
</div>

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

---

This time let's start with a complete animation sequence:

> Example

<div class="element-4"></div>

---

---

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
    /* other element styles */
    animation: 
        cool-animation 
        3000ms 
        ease-in-out 
        infinite 
        alternate 
        forwards;
}
```

### Animation Timing Function

The `ease-in-out`, is the `animation-timing-function`.Just like in transition animations, it controls the speed of the progressing animation and has the different functions mentioned in the [transitions section](/blog/getting-started-with-css-animations#transition-timing-functions).

You can define it separately:
```css 
animation-timing-function: ease-in-out
```

The next property is the `animation-iteration-count`. This is what determines how many times the animation is going to run, you can give it an integer value or make it `infinite` to run forever.

```css
animation-iteration-count: infinite
```

### Multi-Step Controlled Animation

You probably noticed we are able to define the steps in the animation timeline using the percentage to completion. You can customize this further to have as many steps as possible to make your animation do all sorts of magic.

```css
 @keyframes multi-step {
    0% {
      /* transform something */
    }
    25% {
      /* transform it again */
    }
    50% {
      /* transform it differently */
    }
    100% {
      /* transform it back to it's initial state*/
    }
  }
```

This gives you control on each and every motion the animated element makes. Honestly you could become an animator at this point, right ?

Let's wrap this up with the last two values, `alternate` and `forwards`.

### Animation Direction

`animation-direction` controls the order of the sequence. The default value is `normal`, going from 0% to 100% over the course of the specified duration.

We can also set it to `reverse`. This will play the animation backwards, going from 100% to 0%.

The interesting part, though, is that we can set it to `alternate`, which ping-pongs between normal and reverse on subsequent iterations.

### Animation Fill Mode

`animation-fill-mode` lets us persist the final value from the animation, forwards in time. Normally when you run an animation like this,

<br/>
<br/>
<br/>

<div class="flex items-center justify-between">
<div class="element-5" id="element-5"></div>
<button class="p2 border border-border rounded-md" id="replay">
<span class="i-material-symbols-replay"></span>Replay
</button>
</div>

---

---

```css
.element {
    /* other element styles */
    animation:
     cool-animation
     3000ms
     ease-in-out
}
```

You notice that after the animation is done it resets the element back to it's original position defined in it's styling. Applying an `animation-fill-mode` of `forwards` ensures your element persists it's position after the animation is complete.

---

<div class="flex items-center justify-between">
<div class="element-6" id="element-6"></div>
<button class="p2 border border-border rounded-md" id="replay-2">
<span class="i-material-symbols-replay"></span>Replay
</button>
</div>

---

---

```css
.element {
    /* other element styles  */
    animation:
     cool-animation
     3000ms
     ease-in-out
     forwards
}
```

## You're Just Getting Started

If you've made it this far, Congratulations. You can finally start doing awesome animations with CSS. This is just the beginning of your journey. Keep on improving those skills. Catch you next time.