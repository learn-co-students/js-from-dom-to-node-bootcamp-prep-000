# Moving Away from the DOM

Congratulations! You are now able to understand how Javascript interacts with
websites through the DOM. That's a big deal. Take a few seconds, breathe in,
breathe out and realize that you now know something you didn't before. Only a few
lessons ago, you didn't even know what the DOM was. Now you understand how to
manipulate it.

![Perspective](https://web-dev-readme-photos.s3.amazonaws.com/js/perspective.gif)

If you ever want to show your friends something cool, open up the console on any
web page and then find the selector for an element, then modify it using
Javascript in the console. Prepare to enjoy the shock and awe of your friends!

## From DOM Manipulation to Programming Logic

For the rest of this material, we will be moving from the basics of DOM
manipulation to the meat and potatoes of programming. This means we are going to
cover the ideas of conditionals, looping, encapsulation and syntax. I know those
may not be familiar to you, but over the next few lessons they will become
second nature! Remember when DOM was a scary word? Encapsulation will soon go
the way of the DOM. You're going to be encapsulating everything.

Really the goal of the rest of this course is to introduce you to _programmatic
thinking_. We will be doing that through explaining Javascript, but the goal is
for every student to begin using programmatic thinking as a general way to solve
problems. These problems may be creating the next Facebook, or it may be just
solving the best order to complete your errands. You'll notice programmatic,
logical thinking starting to permeate throughout your decision process. It's
incredibly powerful and something that has aided millions of programmers to
solve some of the hardest problems in the world.

That is the goal with this class. While we may touch on making pictures of cats
spin, we want you to internalize the thought process required to solve that
silly problem. Hopefully, you'll go off after this class and solve some slightly
more important problems :)

## Javascript Outside of the Browser

You've spent some time in the browser with Javascript. That's great. Now let's
get to where Javascript has been rapidly increasing its programming market
share: outside of the browser. You may have heard of it, but a new tool called
NodeJS was created a few years back to allow developers to write Javascript code
outside of the browser. That is what we are going to use now to be able to go
deep on programmatic thinking, without having to explain complicated browser
interactions. We want to simplify programming down to its most core elements.

### Hello World

Let's write your first code using NodeJS and non-browser Javascript. To do this,
we are going to remove your first set of training wheels. We are no longer going
to be using the CodePens that we've been using before. We are going to use a
real developer environment through the Learn IDE.

![Training Wheels](https://web-dev-readme-photos.s3.amazonaws.com/js/training_wheels.gif)

The Learn IDE is available as both an in-browser development environment as well
as a standalone application.

To choose which environment you would like to work in, on any learn.co page,
click your user image in the upper right corner of the page, then click
'Manage Account.'

![manage account menu](https://curriculum-content.s3.amazonaws.com/node-js/manage_account.png)

In Account Management, click 'Learning Environment' and choose either 'IDE In
Browser' or 'IDE Download.' Or, if you are already comfortable using an IDE and
a console and prefer your own set up, you may also choose 'Local.' This
lesson's instructions assume that you are using the Learn IDE in browser.

If you choose 'IDE In Browser' you are set and can navigate back to this lesson.
If you have chosen 'IDE Download,' you can download and set up the IDE
[here][ide].

Now, click "Open IDE" to open your environment. On the left side is your file
tree. In the `js-from-dom-to-node` folder, click `index.js` to open the file up.
IT'S CODING TIME.

#### Running Code in Chrome's Browser Console

First thing is first, I want to show you that everything we will do in the IDE,
you can do in the console. In your browser, right click and select Inspect.
Select the Console tab, type `console.log("Hello, World!")`, and press `Enter`.
You should see "Hello, World!" printed right below your line of code. Congrats!
You just wrote your first line of browser-less code. All this does is print out
whatever is in between the parenthesis.

Let's bring that code over to our `index.js` file on the IDE. Make sure you
are editing the `index.js` file, which is inside a folder, `js`, inside the
`js-from-dom-to-node` folder. Once in there go ahead and paste the following
code in there:

```javascript
console.log('Hello, World!');
```

Now when you hit `Enter`, nothing super interesting will happen. All that occurs
is the cursor moves to a new line. That's because you are in the text editor.
This is pretty much the same as using Word. To get this to actually return
something like we did in the Console in the browser we need to _execute_ the
`index.js` file. It sounds super official, but all we are going to do is tell
the IDE "I'm ready, run this code and show me the result".

First, we have to **save the file**. Next, look at the pane at the bottom of the
IDE. This is your terminal. Below your code you should see a flashing cursor
like this:

![command line in ide](https://web-dev-readme-photos.s3.amazonaws.com/js/ide-command-line.png)

Alright, let's let the magic happen! First, we need to make sure we are in the
right folder. Our goal is to make it into the "js-from-dom-to-node" folder. If
you look at the text next to the time, you should see `js-from-dom-to-node` or
something very similar. If you see that, you are good and you can skip the next
section. If it says something else, follow these instructions:

> If you see `code`, we need to go into our `labs` folder first. To do this type
> `cd labs`. Now if should see `labs` next to the clock. We have to go one more
> folder in. I know this by looking at the folder structure on the left. See how
> `labs` is in `code` and `js-from-dom-to-node` is in labs? Ok now we need to `cd`
> into the `js-from-dom-to-node` lab. Take a look at your folder structure on the
> right to get the _exact_ name and then type `cd EXACT-FOLDER-YOU-WANT-TO-ENTER`.
> In my case, I get `js-from-dom-to-node`. If you were successful, you'll see
> `js-from-dom-to-node` next to the clock.

#### Running Code With Node

To run your code, in your terminal, you can type `node index.js`. `node`
is the node code runner and `index.js` is the name of your file. You should see:

```js
Hello, World!
```

Woot! It worked. You just wrote your first Javascript outside of the browser.
Now let's submit it back to Learn. In your terminal type `learn submit`. This
will send your code up to Learn and you may move on to the next lesson.

If you would like to try a few more examples, take a look at the two JavaScript
files inside `more_js`. From your current directory, run `node more_js/example_one.js` and `node more_js/example_two.js` to see them in action.

#### Possible Errors

After you type in `node index.js` you get something looks like:

```sh
module.js:471
    throw err;
    ^

Error: Cannot find module '/home/jmburges/code/labs/index.js'
    at Function.Module._resolveFilename (module.js:469:15)
    at Function.Module._load (module.js:417:25)
    at Module.runMain (module.js:604:10)
    at run (bootstrap_node.js:393:7)
    at startup (bootstrap_node.js:150:9)
    at bootstrap_node.js:508:3
```

The key there is "Error: Cannot find module". That just means you are in the
wrong folder. Go back and read the earlier paragraph that starts "If you see
`code`...". That should help you out. You need to be seeing
`js-from-dom-to-node` next to the clock.

[ide]: http://help.learn.co/the-learn-ide/how-to-download-and-use-learn-ide-3

<p class='util--hide'>View <a href='https://learn.co/lessons/js-from-dom-to-node'>From DOM To Node and the IDE</a> on Learn.co and start learning to code for free.</p>
