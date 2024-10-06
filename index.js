import React from 'react';
import ReactDOM from 'react-dom/client';


// ***************First Video*****************
// First video of how to add react via cdn links and how actually in react renders the jsx code in browser - 

{/* <div class="parent">
    <div class="child">
        <h1>This is h1</h1>
        <h2>This is h2</h2>
    </div>
    <div class="child">
        <h1>This is h3</h1>
        <h2>This is h4</h2>
    </div>
</div> */}
    
const parent = React.createElement('div', {id: 'parent'}, 
    [
        React.createElement('div', {className: 'child'}, [
            React.createElement('h1', {}, 'This is h1'),
            React.createElement('h2', {}, 'This is h2')
        ]),
        React.createElement('div', {className: 'child'}, [
            React.createElement('h1', {}, 'This is h3'),
            React.createElement('h2', {}, 'This is h4')
        ])
    ]
);
    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
