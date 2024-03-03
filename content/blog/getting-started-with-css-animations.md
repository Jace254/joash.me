---
title: Getting Started with CSS Animations
date: 2024-03-03T16:33:11Z
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

I won't make the assumption that everyone reading this blog post knows a thing or two about animation, so let's get you started here. Otherwise you can jump to [this section](/blog/getting-started-with-css-animation#).

There are a lot of concepts that go into animation. However, in this post I'll focus on a few major ones. You can later on continue your research to learn the different [animation principles](https://www.animaker.com/hub/12-principles-of-animation/).

So let's get started. You may find some CSS terms new in the list below but I'll make everything clear as we move forward.
Heres a list of animation principles I'll cover:

1. **Timing**: Timing in CSS animations refers to the duration and delay of an animation. You can control timing using the `animation-duration` property to set how long an animation should take, and `animation-delay` to specify a delay before an animation starts.

    ```css
    .element {
        /* Animation lasts for 2 seconds */
        animation-duration: 2s; 
        /* Animation starts after a 1-second delay */
        animation-delay: 1s; 
        /* Timing function (e.g., ease, linear) */
        animation-timing-function: ease;
    }
    ```

2. **Squash and Stretch**:
    To achieve squash and stretch effects, you can use CSS transforms like `scale` to change the size of an element during animation.

    ```css
    @keyframes squash-stretch {
        0% { transform: scale(1); }
        /* Squash effect */
        50% { transform: scale(0.8); }
        /* Stretch effect */
        100% { transform: scale(1.2); } 
    }

    .element {
        /* Applies the animation infinitely */
        animation: squash-stretch 1s infinite alternate; 
    }
    ```

3. **Anticipation**: Anticipation involves preparing the viewer for an upcoming action. You can use keyframes to animate an element slightly in the opposite direction before the main action.

    ```css
    @keyframes anticipation {
        0% { transform: translateX(0); }
        /* Anticipating movement to the left */
        20% { transform: translateX(-10px); }
        /* Main movement */
        100% { transform: translateX(100px); } 
    }

    .element {
        /* Animation plays once and stops at the end */
        animation: anticipation 1s forwards; 
    }
    ```

4. **Follow Through and Overlapping Action**:
    To create follow-through and overlapping action, you can animate different parts of an element with slight delays or different timing functions.

    ```css
    .element-part1 {
        animation: follow-through 1s ease forwards;
    }

    .element-part2 {
        animation: overlapping-action 1s ease forwards;
    }
    ```

5. **Arcs**:
    Animating along arcs can be achieved by combining multiple transforms like `translate` and `rotate`.

    ```css
    @keyframes arc {
        0% { transform: translate(0, 0) rotate(0deg); }
        /* Midpoint of the arc */
        50% { transform: translate(50px, -100px) rotate(45deg); } 
        100% { transform: translate(100px, 0) rotate(90deg); }
    }

    .element {
        animation: arc 2s ease-in-out forwards;
    }
    ```

6. **Slow In and Slow Out**:
    Slow in and slow out effects can be achieved using different timing functions such as `ease-in` and `ease-out`.

    ```css
    .element {
        animation: slow-in-out 2s ease-in-out forwards;
    }
    ```
