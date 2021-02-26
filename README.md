# react_reconciliation

This is a small example that demonstrates the react reconciliation algorithm, one of the really interesting things about React which makes it different from other js frameworks.

![example](https://i.imgur.com/80ZkENy.png "example")

Using the virtual DOM, React keeps the last DOM version in memory and when it has a new DOM version to take to the browser, that new DOM version will also be in memory, so React can compute the difference between the new and the old versions (in our case, the difference is the timestamp paragraph).

React will then instruct the browser to update only the computed difference and not the whole DOM node. No matter how manytimes we regenerate our interface, React will take to the browser only the new “partial” updates.

Thus when you type in the top 'js' input box, it'll get wiped as the timer advances and the DOM is refreshed.

But if you type in the bottom 'react' box it won't get refreshed as the timer advances and the DOM is refreshed.

Pretty neat!
