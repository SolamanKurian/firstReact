

// creating nested html structire in react


// let parent=React.createElement('div',{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"im an h1 tag")))

// let root=ReactDOM.createRoot(document.getElementById("headingbox")); 
// root.render(parent)

// if there is more than one content in an html element we can add it in an array
let parent=React.createElement('div',{id:"parent"},[React.createElement(
    "div",{id:"child"},[React.createElement("h1",{},["im an h1 tag, ","second child"]),React.createElement(
        "h2",{},["im an h1 tag, ","second child"])]),React.createElement(
            "div",{id:"child"},[React.createElement("h1",{},["im an h1 tag, ","second child"]),React.createElement(
                "h2",{},["im an h1 tag, ","second child"])])])

let root=ReactDOM.createRoot(document.getElementById("headingbox")); 
root.render(parent)