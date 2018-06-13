console.log('hello');

/*

Using the virtual DOM, React keeps the last DOM version in memory and when it has a new DOM version to take to the
browser, that new DOM version will also be in memory, so React can compute the difference between the new and the old
versions (in our case, the difference is the timestamp paragraph).

React will then instruct the browser to update only the computed diff and not the whole DOM node. No matter how many
times we regenerate our interface, React will take to the browser only the new “partial” updates.

*/

const jsContainer = document.getElementById('js');
const reactContainer = document.getElementById("react");

function render(){
    jsContainer.innerHTML = `
        <div class="demo">
            Hello JS
            <input />
            <p>${new Date()}</p>
        </div>
    `;

    ReactDOM.render(
        //first argument is html tag, second is attributes of tag, third content of the element
        React.createElement(
            "div",
            {className: "demo"},
            "Hello React",
            React.createElement("input"),
            React.createElement(
                "p",
                null,
                new Date().toString()
            )
        ),
        reactContainer
    );
}

setInterval(render, 1000)




