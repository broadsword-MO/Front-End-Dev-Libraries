// ================== Create a Simple JSX Element ===================
// Because JSX is a syntactic extension of JavaScript, you can actually write JavaScript directly within JSX. To do this, you simply include the code you want to be treated as JavaScript within curly braces: { 'this is treated as JavaScript code' }.

const JSX = <h1>Hello JSX!</h1>;

// ================== Create a Complex JSX Element ===================
/* One important thing to know about nested JSX is that it must return a single element. This one parent element would wrap all of the other levels of nested elements.
Note: When rendering multiple elements like this, you can wrap them all in parentheses, but it's not strictly required. */

// Invalid JSX:
/* const JSX = (
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
); */

// Valid JSX:
const JSX = (
    <div>
        <h1>A heading</h1>
        <p>This that and the other.</p>
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ul>
    </div>
);

// ================== Add Comments in JSX ===================
// To put comments inside the HTML-ish syntax of the `render` block/return statement in JSX, you must use the syntax `{/* */}` to wrap around the comment text. Anywhere else you can just use common JavaScript comment syntax
const JSX = (
    <div>
        {/* This is a comment */}
        <h1>This is a block of JSX</h1>
        <p>Here's a subtitle</p>
    </div>
);

// ================== Render HTML Elements to the DOM ===================
/* ReactDOM offers a simple method to render React elements to the DOM which looks like this: ReactDOM.render(componentToRender, targetNode), where the first argument is the React element or component that you want to render, and the second argument is the DOM node that you want to render the component to.
ReactDOM.render() must be called after the JSX element declarations, just like how you must declare JavaScript variables before using them. */
const JSX = (
    <div>
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
    </div>
);
// Change code below this line
// Syntax for render() is (componentToRender, targetNode)
ReactDOM.render(JSX, document.getElementById('challenge-node'));

// ================== Define an HTML Class in JSX ===================
/* One key difference in JSX is that you can't use the word 'class' to define HTML classes. This is because 'class' is a reserved word in JavaScript. Instead, JSX uses 'className'.
The naming convention for all HTML attributes and event references in JSX is camelCase. For example, a click event in JSX is 'onClick'. Likewise, 'onchange' becomes 'onChange'. */
const JSX = (
    <div className="myDiv">
        <h1>Add a class to this div</h1>
    </div>
);

// ================== Learn About Self-Closing JSX Tags ===================
/* In HTML the line-break tag can be written as <br> or as <br />, but should never be written as <br></br>, since it doesn't contain any content. In JSX, the rules are a little different.

Any JSX element can be written with a self-closing tag, and every element must be closed.

The line-break tag, for example, must always be written as <br /> in order to be valid JSX that can be transpiled. A <div>, on the other hand, can be written as <div /> or <div></div>. The difference is that in the first syntax version there is no way to include anything in the <div />. You will see in later challenges that this syntax is useful when rendering React components. */
const JSX = (
    <div>
        <h2>Welcome to React!</h2> <br />
        <p>Be sure to close all tags!</p>
        <hr />
    </div>
);

// ================== Create a Stateless Functional Component ===================
/* Components are the core of React. Everything in React is a component.
There are two ways to create a React component. The first way is to use a JavaScript function. Defining a component in this way creates a stateless functional component.
A stateless component is one that can receive data and render it, but does not manage or track changes to that data.
To create a component with a function, you simply write a JavaScript function that returns either JSX or null. One important thing to note is that React requires your function name to begin with a capital letter. */

// Here's an example of a stateless functional component that assigns an HTML class in JSX:
const DemoComponent = function () {
    return <div className="customClass" />;
};

const MyComponent = function () {
    // Change code below this line
    return (
        <div>
            <p>Some text</p>
        </div>
    );
    // Change code above this line
};

// ================== Create a React Component ===================
// The other way to define a React component is with the ES6 class syntax.

// From reactjs.org https://reactjs.org/docs/react-component.html#constructor "The only method you _must_ define in a `React.Component` subclass is called `render()` https://reactjs.org/docs/react-component.html#render. All the other methods described on this page are optional."

// In the following example, Kitten extends React.Component:
class Kitten extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Hi</h1>;
    }
}
/* Notice the Kitten class has a constructor defined within it that calls super(). It uses super() to call the constructor of the parent class, in this case React.Component. The constructor is a special method used during the initialization of objects that are created with the class keyword. It is best practice to call a component's constructor with super, and pass props to both. This makes sure the component is initialized properly. For now, know that it is standard for this code to be included. */

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // Change code below this line
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        );
        // Change code above this line
    }
}

// ================== Create a Component with Composition ===================
// To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. For example, in the render method you could write:
/* 
render() {
    return (
        <App>
            <Navbar />
            <Dashboard />
            <Footer />
        </App>
    );
}
 When React encounters a custom HTML tag that references another component (a component name wrapped in < /> like in this example), it renders the markup for that component in the location of the tag. */
const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
        </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                {/* Change code below this line */}
                <ChildComponent />
                {/* Change code above this line */}
            </div>
        );
    }
}

// ================== Use React to Render Nested Components ===================
// There are two functional components defined in the code editor, called TypesOfFruit and Fruits. Take the TypesOfFruit component and 'compose' it, or 'nest' it, within the Fruits component. Then take the Fruits component and nest it within the TypesOfFood component. The result should be a child component, nested within a parent component, which is nested within a parent component of its own!
const TypesOfFruit = () => {
    return (
        <div>
            <h2>Fruits:</h2>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    );
};

const Fruits = () => {
    return (
        <div>
            {/* Change code below this line */}
            <TypesOfFruit />
            {/* Change code above this line */}
        </div>
    );
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                {/* Change code below this line */}
                <Fruits />
                {/* Change code above this line */}
            </div>
        );
    }
}

// ================== Compose React Components ===================
// Rendering ES6 style class components within other components is no different than rendering the simple components you used in the last few challenges. You can render JSX elements, stateless functional components, and ES6 class components within other components.

class Fruits extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Fruits:</h2>
                {/* Change code below this line */}
                <NonCitrus />
                <Citrus />
                {/* Change code above this line */}
            </div>
        );
    }
}

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                {/* Change code below this line */}
                <Fruits />
                {/* Change code above this line */}
                <Vegetables />
            </div>
        );
    }
}

// ================== Render a Class Component to the DOM ===================
/* None of the React code you write will render to the DOM without making a call to the ReactDOM API.
Here's a refresher on the syntax: ReactDOM.render(elementToRender, targetNode). The first argument is the React element that you want to render. The second argument is the DOM node that you want to render that element within.
React components are passed into ReactDOM.render() a little differently than JSX elements. For React components, you need to use the same syntax as if you were rendering a nested component, for example ReactDOM.render(<ComponentToRender />, targetNode). You use this syntax for both ES6 class components and functional components. */

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                {/* Change code below this line */}
                <Fruits />
                <Vegetables />
                {/* Change code above this line */}
            </div>
        );
    }
}

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));

// ================== Write a React Component from Scratch ===================
//React components are the core building blocks of React applications. Remember, a typical React component is an ES6 'class' which 'extends' React.Component. It has a 'render' method that 'returns' HTML (from JSX) or null. This is the basic form of a React component.

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>My First React Component!</h1>
            </div>
        );
    }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));

// ================== Pass Props to a Stateless Functional Component ===================
/* In React, you can pass props, or properties, to child components. Say you have an App component which renders a child component called 'Welcome' which is a stateless functional component. You can pass 'Welcome' a 'user' property by writing:

<App>
    <Welcome user='Mark' />
</App>

You use custom HTML attributes created by you and supported by React to be passed to the component. In this case, the created property 'user' is passed to the component 'Welcome'. Since 'Welcome' is a stateless functional component, it has access to this value like so:

const 'Welcome' = (props) => <h1>Hello, {props.user}!</h1>

It is standard to call this value props and when dealing with stateless functional components, you basically consider it as an argument to a function which returns JSX. You can access the value of the argument in the function body. With class components, you will see this is a little different. */

const CurrentDate = (props) => {
    return (
        <div>
            {/* Change code below this line */}
            <p>The current date is: {props.date}</p>
            {/* Change code above this line */}
        </div>
    );
};

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>What date is it?</h3>
                {/* Change code below this line */}
                <CurrentDate date={Date()} />
                {/* Change code above this line */}
            </div>
        );
    }
}

// ================== Pass an Array as Props ===================
/* The last challenge demonstrated how to pass information from a parent component to a child component as props or properties. This challenge looks at how arrays can be passed as props. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

<ParentComponent>
    <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>

The child component then has access to the array property colors. Array methods such as join() can be used when accessing the property. const ChildComponent = (props) => <p>{props.colors.join(', ')}</p> This will join all colors array items into a comma separated string and produce: <p>green, blue, red</p> Later, we will learn about other common methods to render arrays of data in React. */

const List = (props) => {
    {
        /* Change code below this line */
    }
    return <p>{props.tasks.join(', ')}</p>;
    {
        /* Change code above this line */
    }
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                {/* Change code below this line */}
                <List tasks={['code', 'split firewood']} />
                <h2>Tomorrow</h2>
                <List tasks={['do', 'more', 'work']} />
                {/* Change code above this line */}
            </div>
        );
    }
}

// ================== Use Default Props ===================
/* You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, if you declare:

MyComponent.defaultProps = { location: 'San Francisco' };

you have defined a location prop that's set to the string 'San Francisco', unless you specify otherwise. React assigns default props if props are undefined, but if you pass 'null' as the value for a prop, it will remain 'null'. */

const ShoppingCart = (props) => {
    return (
        <div>
            <h1>Shopping Cart Component</h1>
            <p>Items: {props.items}</p>
        </div>
    );
};
// Change code below this line
ShoppingCart.defaultProps = { items: 0 };

// ================== Override Default Props ===================
/* The way to override the default props is to explicitly set the prop values for a component.
Note: Remember that the syntax to add a prop to a component looks similar to how you add HTML attributes. However, since the value for quantity is an integer, it won't go in quotes but it should be wrapped in curly braces. For example, {100}. This syntax tells JSX to interpret the value within the braces directly as JavaScript. */
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.defaultProps = {
    quantity: 0,
};

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        {
            /* Change code below this line */
        }
        return <Items quantity={10} />;
        {
            /* Change code above this line */
        }
    }
}

// ================== Use PropTypes to Define the Props You Expect ===================
/* React provides useful type-checking features to verify that components receive props of the correct type. It's considered a best practice to set propTypes when you know the type of a prop ahead of time. You can define a propTypes property for a component in the same way you defined defaultProps. */

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired };
/* In the example above, the PropTypes.func part checks that handleClick is a function. Adding isRequired tells React that handleClick is a required property for that component. You will see a warning if that prop isn't provided. Also notice that 'func' represents function. Among the seven JavaScript primitive types, function and boolean (written as 'bool') are the only two that use unusual spelling. */
// Note: As of React v15.5.0, PropTypes is imported independently from React, like this: import PropTypes from 'prop-types';

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

// Change code below this line
Items.propTypes = {
    quantity: PropTypes.number.isRequired,
};
// Change code above this line

Items.defaultProps = {
    quantity: 0,
};

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Items />;
    }
}

// ================== Access Props Using this.props ===================
/* A 'stateless component' is a class that extends React.Component, but does not use internal state. The ES6 class component uses a slightly different convention to access props.
Anytime you refer to a class component within itself, you use the 'this' keyword. To access props within a class component, you preface the code that you use to access it with 'this'. For example, if an ES6 class component has a prop called 'data', you write {this.props.data} in JSX. */
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* Change code below this line */}
                <Welcome name="Doug" />
                {/* Change code above this line */}
            </div>
        );
    }
}

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* Change code below this line */}
                <p>
                    Hello, <strong>{this.props.name}</strong>!
                </p>
                {/* Change code above this line */}
            </div>
        );
    }
}

// =============== Review Using Props with Stateless Functional Components ================
/* A 'stateless functional component' is any function you write which accepts props and returns JSX. These components act like pure functions. They accept props as input and return the same view every time they are passed the same props.
A common pattern is to try to minimize statefulness and to create 'stateless functional components' wherever possible. This helps contain your state management to a specific area of your application. */
class CampSite extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Camper />
            </div>
        );
    }
}

// Change code below this line
class Camper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>
                    {this.props.name} says <b>"Howdy!"</b>
                </p>
            </div>
        );
    }
}

Camper.propTypes = { name: PropTypes.string.isRequired };
Camper.defaultProps = { name: 'CamperBot' };

// ================== Create a Stateful Component ===================
/* A stateful component is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.
State consists of any data your application needs to know about, that can change over time.
You create state in a React component by declaring a state property on the component class in its constructor. This initializes the component with state when it is created. The state property must be set to a JavaScript object. Declaring it looks like this:

this.state = {
    ...
}

You have access to the state object throughout the life of your component. You can update it, render it in your UI, and pass it as props to child components. The state object can be as complex or as simple as you need it to be.
Note that you must create a class component by extending React.Component in order to create state like this. */
class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        // Only change code below this line
        this.state = {
            firstName: 'Doug',
        };
        // Only change code above this line
    }
    render() {
        return (
            <div>
                <h1>{this.state.firstName}</h1>
            </div>
        );
    }
}

// ================== Render State in the User Interface ===================
/* Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in state in its render() method. You can access the data with this.state.
If you want to access a state value within the return of the render method, you have to enclose the value in curly braces.
Note that if you make a component stateful, no other components are aware of its state. Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props.
In JSX, any code you write with curly braces { } will be treated as JavaScript. So to access the value from state just enclose the reference in curly braces. */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp',
        };
    }
    render() {
        return (
            // something
            <div>
                {/* Change code below this line */}
                <h1>{this.state.name}</h1>
                {/* Change code above this line */}
            </div>
        );
    }
}

// ================== Render State in the User Interface Another Way ===================
/* There is another way to access state in a component. In the render() method, before the return statement, you can write JavaScript directly. For example, you could declare functions, access data from state or props, perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the return statement. */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp',
        };
    }
    render() {
        // Change code below this line
        const name = this.state.name;
        // Change code above this line
        return (
            <div>
                {/* Change code below this line */}
                <h1>{name}</h1>
                {/* Change code above this line */}
            </div>
        );
    }
}

// ================== Set State with this.setState ===================
/* React provides a method for updating component state called setState. You call the setState method within your component class like so: this.setState(), passing in an object with key-value pairs. The keys are your state properties and the values are the updated state data. For instance, if we were storing a username in state and wanted to update it, it would look like this:

this.setState({
  username: 'Lewis'
});

Always use this.setState() when state changes occur. Also, you should note that React may batch multiple state updates in order to improve performance. What this means is that state updates through the setState method can be asynchronous. There is an alternative syntax for the setState method which provides a way around this problem. This is rarely needed but it's good to keep it in mind! Please consult our React article for further details. */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Initial State',
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // Change code below this line
        this.setState({
            name: 'React Rocks!',
        });
        // Change code above this line
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

// ================== Bind 'this' to a Class Method ===================
/* A class method typically needs to use the 'this' keyword so it can access properties on the class (such as state and props) inside the scope of the method. One common way is to explicitly bind 'this' in the constructor so 'this' becomes bound to the class methods when the component is initialized. You may have noticed the last challenge used `this.handleClick = this.handleClick.bind(this)` for its handleClick method in the constructor. Then, when you call a function like 'this.setState()' within your class method, 'this' refers to the class and will not be undefined. */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Hello',
        };
        // Change code below this line
        this.handleClick = this.handleClick.bind(this);
        // Change code above this line
    }
    handleClick() {
        this.setState({
            text: 'You clicked!',
        });
    }
    render() {
        return (
            <div>
                {/* Change code below this line */}
                <button onClick={this.handleClick}>Click Me</button>
                {/* Change code above this line */}
                <h1 on>{this.state.text}</h1>
            </div>
        );
    }
}

// ================== Use State to Toggle an Element ===================
/* State updates may be asynchronous - this means React may batch multiple setState() calls into a single update. This means you can't rely on the previous value of this.state or this.props when calculating the next value. 

So, you should NOT use code like this:
this.setState({
    counter: this.state.counter + this.props.increment
});

Instead, you should pass setState a function that allows you to access state and props. Using a function with setState guarantees you are working with the most current values of state and props. This means that the above should be rewritten as:

this.setState((state, props) => ({
    counter: state.counter + props.increment
}));

You can also use a form without props if you need only the state:
this.setState(state => ({
    counter: state.counter + 1
}));

NOTE: you have to wrap the object literal in parentheses, otherwise JavaScript thinks it's a block of code. */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false,
        };
        // Change code below this line
        this.toggleVisibility = this.toggleVisibility.bind(this);
        // Change code above this line
    }
    // Change code below this line
    // Mine
    toggleVisibility() {
        this.setState((state) => ({
            visibility: state.visibility === false ? true : false,
        }));
    }
    // Change code above this line
    // Or fCC
    // toggleVisibility() {
    //     this.setState((state) => {
    //         if (state.visibility === true) {
    //             return { visibility: false };
    //         } else {
    //             return { visibility: true };
    //         }
    //     });
    // }
    // Or this from fCC
    // toggleVisibility() {
    //     this.setState((state) => ({
    //         visibility: !state.visibility,
    //     }));
    // }
    render() {
        if (this.state.visibility) {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                    <h1>Now you see me!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                </div>
            );
        }
    }
}

// ================== Write a Simple Counter ===================
/* The Counter component keeps track of a count value in state. There are two buttons which call methods increment() and decrement(). Write these methods so the counter value is incremented or decremented by 1 when the appropriate button is clicked. Also, create a reset() method so when the reset button is clicked, the count is set to 0.
Note: Make sure you don't modify the classNames of the buttons. Also, remember to add the necessary bindings for the newly-created methods in the constructor. */
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        // Change code below this line
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        // Change code above this line
    }
    // Change code below this line
    increment() {
        this.setState((state) => ({
            count: state.count + 1,
        }));
    }
    decrement() {
        this.setState((state) => ({
            count: state.count - 1,
        }));
    }
    reset() {
        this.setState((state) => ({
            count: (state.count = 0),
        }));
    }
    // Change code above this line
    render() {
        return (
            <div>
                <button className="inc" onClick={this.increment}>
                    Increment!
                </button>
                <button className="dec" onClick={this.decrement}>
                    Decrement!
                </button>
                <button className="reset" onClick={this.reset}>
                    Reset
                </button>
                <h1>Current Count: {this.state.count}</h1>
            </div>
        );
    }
}

// ================== Create a Controlled Input ===================
/* Form control elements for text input, such as input and textarea, maintain their own state in the DOM as the user types. With React, you can move this mutable state into a React component's state. The user's input becomes part of the application state, so React controls the value of that input field. Typically, if you have React components with input fields the user can type into, it will be a controlled input form. */
class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
        // Change code below this line
        this.handleChange = this.handleChange.bind(this);
        // Change code above this line
    }
    // Change code below this line
    handleChange(event) {
        this.setState({
            input: event.target.value,
        });
    }
    // Change code above this line
    render() {
        return (
            <div>
                {/* Change code below this line */}
                <input value={this.state.input} onChange={this.handleChange} />
                {/* Change code above this line */}
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
}

// ================== Create a Controlled Form ===================
/* React can control the internal state for certain elements like 'input' and 'textarea', which makes them controlled components. This applies to other form elements as well, including the regular HTML 'form' element.
Note: You also must call event.preventDefault() in the submit handler, to prevent the default form submit behavior which will refresh the web page. For camper convenience, the default behavior has been disabled here to prevent refreshes from resetting challenge code. */
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value,
        });
    }
    handleSubmit(event) {
        // Change code below this line
        this.setState((state) => ({
            submit: state.input,
        }));
        event.preventDefault();
        // Change code above this line
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* Change code below this line */}
                    <input
                        value={this.state.input}
                        onChange={this.handleChange}
                    />
                    {/* Change code above this line */}
                    <button type="submit">Submit!</button>
                </form>
                {/* Change code below this line */}
                <h1>{this.state.submit}</h1>
                {/* Change code above this line */}
            </div>
        );
    }
}

// ================== Pass State as Props to Child Components ===================
/* You saw a lot of examples that passed props to child JSX elements and child React components in previous challenges. You may be wondering where those props come from. A common pattern is to have a stateful component containing the state important to your app, that then renders child components. You want these components to have access to some pieces of that state, which are passed in as props.

For example, maybe you have an App component that renders a Navbar, among other components. In your App, you have state that contains a lot of user information, but the Navbar only needs access to the user's username so it can display it. You pass that piece of state to the Navbar component as a prop.

This pattern illustrates some important paradigms in React. The first is unidirectional data flow. State flows in one direction down the tree of your application's components, from the stateful parent component to child components. The child components only receive the state data they need. The second is that complex stateful apps can be broken down into just a few, or maybe a single, stateful component. The rest of your components simply receive state from the parent as props, and render a UI from that state. It begins to create a separation where state management is handled in one part of code and UI rendering in another. This principle of separating state logic from UI logic is one of React's key principles. When it's used correctly, it makes the design of complex, stateful applications much easier to manage. */
class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'CamperBot',
        };
    }
    render() {
        return (
            <div>
                {/* Here we will call this.state.name in order to pass the value 
            of CamperBot to the NavBar component */}
                {/* Change code below this line */}
                <Navbar name={this.state.name} />
                {/* Change code above this line */}
            </div>
        );
    }
}

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/* Since we passed in the CamperBot state value into the the NavBar
        component above the h1 element below will render the value passed
        from state */}
                {/* Change code below this line */}
                <h1>Hello, my name is: {this.props.name}</h1>
                {/* Change code above this line */}
            </div>
        );
    }
}

// ================== Pass a Callback as Props ===================
/* You can pass state as props to child components, but you're not limited to passing data. You can also pass handler functions or any method that's defined on a React component to a child component. This is how you allow child components to interact with their parent components. You pass methods to a child just like a regular prop. It's assigned a name and you have access to that method name under this.props in the child component.

Once you are finished you will be able to type in the input field in the GetInput component, which then calls the handler method in its parent via props. This updates the input in the state of the parent, which is passed as props to both children. Observe how the data flows between the components and how the single source of truth remains the state of the parent component. */
class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
        });
    }
    render() {
        return (
            <div>
                {/* Change code below this line */}
                <GetInput
                    input={this.state.inputValue}
                    handleChange={this.handleChange}
                />
                <RenderInput input={this.state.inputValue} />
                {/* Change code above this line */}
            </div>
        );
    }
}

class GetInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Get Input:</h3>
                <input
                    value={this.props.input}
                    onChange={this.props.handleChange}
                />
            </div>
        );
    }
}

class RenderInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        );
    }
}

// ================== Use the Lifecycle Method componentWillMount ===================
/* React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time. This can be before they are rendered, before they update, before they receive props, before they unmount, and so on. Here is a list of some of the main lifecycle methods: componentWillMount() componentDidMount() shouldComponentUpdate() componentDidUpdate() componentWillUnmount() The next several lessons will cover some of the basic use cases for these lifecycle methods.

Note: The `componentWillMount` Lifecycle method has been *deprecated* since version 17. 
The replacement `UNSAFE_componentWillMount()` method is considered legacy and you should avoid it in new code. Instead use componentDidMount()

The componentWillMount() method is called before the render() method when a component is being mounted to the DOM. Log something to the console within componentWillMount() - you may want to have your browser console open to see the output. */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // Change code below this line
        console.log('what the heck are you doing?');
        // Change code above this line
    }
    render() {
        return <div />;
    }
}

// ================== Use the Lifecycle Method componentDidMount ===================
/* The best practice with React is to place API endpoint calls to retrieve data or any calls to your server in the lifecycle method componentDidMount(). This method is called after a component is mounted to the DOM. Any calls to setState() here will trigger a re-rendering of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data. */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUsers: null,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 1273,
            });
        }, 2500); // simulates calling a server to retrieve data
    }
    render() {
        return (
            <div>
                {/* Change code below this line */}
                <h1>Active Users: {this.state.activeUsers}</h1>
                {/* Change code above this line */}
            </div>
        );
    }
}

// ================== Add Event Listeners ===================
/* The componentDidMount() method is also the best place to attach any event listeners you need to add for specific functionality. 
React provides a synthetic event system which wraps the native event system present in browsers. You've already been using some of these synthetic event handlers such as onClick(). React's synthetic event system is great to use for most interactions you'll manage on DOM elements. However, if you want to attach an event handler to the document or window objects, you have to do this directly.

Note: document.addEventListener and document.removeEventListener will take in a quoted string for its event, and when passing in the function you will reference the function handleKeyPress() as this.handleKeyPress. If you invoke the function as this.handleKeyPress(), the event listener will evaluate the function first and will pass back a value of undefined. */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // Change code below this line
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    // Change code above this line
    handleEnter() {
        this.setState((state) => ({
            message: state.message + 'You pressed the enter key! ',
        }));
    }
    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}

// ================== Optimize Re-Renders with shouldComponentUpdate ===================
/* React provides a lifecycle method you can call when child components receive new state or props, and declare specifically if the components should update or not. The method is shouldComponentUpdate(), and it takes `nextProps` and `nextState` as parameters.

This method is a useful way to optimize performance. For example, the default behavior is that your component re-renders when it receives new props, even if the props haven't changed. You can use `shouldComponentUpdate()` to prevent this by comparing the props. The method must return a boolean value that tells React whether or not to update the component. You can compare the current props (this.props) to the next props (nextProps) to determine if you need to update or not, and return true or false accordingly. */
class OnlyEvens extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps) {
        console.log('Should I update?');
        // Change code below this line
        // if (nextProps.value % 2 === 0) return true; // Or
        return nextProps.value % 2 === 0;
        // Change code above this line
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render() {
        return <h1>{this.props.value}</h1>;
    }
}

class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
        this.addValue = this.addValue.bind(this);
    }
    addValue() {
        this.setState((state) => ({
            value: state.value + 1,
        }));
    }
    render() {
        return (
            <div>
                <button onClick={this.addValue}>Add</button>
                <OnlyEvens value={this.state.value} />
            </div>
        );
    }
}

// ================== Introducing Inline Styles ===================
/* You apply inline styles to JSX elements similar to how you do it in HTML, but with a few JSX differences. JSX elements use the style attribute, but because of the way JSX is transpiled, you can't set the value to a string. Instead, you set it equal to a JavaScript object. Here's an example:

<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>

Notice how we camelCase the fontSize property? This is because React will not accept kebab-case keys in the style object. React will apply the correct property name for us in the HTML. */
class Colorful extends React.Component {
    render() {
        return (
            // <div style={{ color: "red", fontSize: 72 }}>Big Red</div> // All length units default to px unless otherwise specified, so...
            <div style={{ color: 'red', fontSize: '72px' }}>Big Red</div> // Quotes necessary if using unit types
        );
    }
}

// ================== Add Inline Styles in React ===================
/* The names of certain CSS style properties use camel case. For example, set the size of the font with fontSize instead of font-size. Hyphenated words like font-size are invalid syntax for JavaScript object properties, so React uses camel case. As a rule, any hyphenated style properties are written using camel case in JSX.

Most property value length units (like height, width, and fontSize) are assumed to be in px unless otherwise specified. If you want to use em, for example, you wrap the value and the units in quotes, like {fontSize: "4em"}. Not all style properties are converted to pixel strings though. Certain ones remain unitless (eg zoom, order, flex). A complete list of unitless properties can be seen at https://github.com/facebook/react/blob/4131af3e4bf52f3a003537ec95a1655147c81270/src/renderers/dom/shared/CSSProperty.js#L15-L59. Other than the length values that default to px, all other property values should be wrapped in quotes. */
const styles = { color: 'purple', fontSize: 40, border: '2px solid purple' };
// Change code above this line
class Colorful extends React.Component {
    render() {
        // Change code below this line
        return <div style={styles}>Style Me!</div>;
        // Change code above this line
    }
}

// ================== Use Advanced JavaScript in React Render Method ===================
/* You can also write JavaScript directly in your render methods, before the return statement, without inserting it inside of curly braces. This is because it is not yet within the JSX code. When you want to use a variable later in the JSX code inside the return statement, you place the variable name inside curly braces. */
const inputStyle = {
    width: 235,
    margin: 5,
};

class MagicEightBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            randomIndex: '',
        };
        this.ask = this.ask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    ask() {
        if (this.state.userInput) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 20),
                userInput: '',
            });
        }
    }
    handleChange(event) {
        this.setState({
            userInput: event.target.value,
        });
    }
    render() {
        const possibleAnswers = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            "Don't count on it",
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful',
        ];
        const answer = possibleAnswers[this.state.randomIndex]; // Change this line
        return (
            <div>
                <input
                    type="text"
                    value={this.state.userInput}
                    onChange={this.handleChange}
                    style={inputStyle}
                />
                <br />
                <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
                <br />
                <h3>Answer:</h3>
                <p>
                    {/* Change code below this line */}
                    {answer}
                    {/* Change code above this line */}
                </p>
            </div>
        );
    }
}

// ================== Render with an If-Else Condition ===================
/* Another application of using JavaScript to control your rendered view is to tie the elements that are rendered to a condition. When the condition is true, one view renders. When it's false, it's a different view. You can do this with a standard if/else statement in the render() method of a React component.
 **Note**: Because of how JSX is compiled, `if/else` statements can't be inserted directly into JSX code. When an `if/else` statement is required, it must always be outside the `return` statement. */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
        };
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState((state) => ({
            display: !state.display,
        }));
    }
    render() {
        // Change code below this line
        if (this.state.display) {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                    <h1>Displayed!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                </div>
            );
        }
    }
}

// ================== Use && for a More Concise Conditional ===================
/* Imagine you want different elements to render depending on different conditions. You can use the && logical operator to perform conditional logic in a more concise way. This is possible because you want to check if a condition is true, and if it is, return some markup. 
Here's an example:

{condition && <p>markup</p>}

If the condition is true, the markup will be returned. If the condition is false, the operation will immediately return false after evaluating the condition and return nothing. You can include these statements directly in your JSX and string multiple conditions together by writing && after each one. This allows you to handle more complex conditional logic in your render() method without repeating a lot of code. */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
        };
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState((state) => ({
            display: !state.display,
        }));
    }
    render() {
        // Change code below this line
        return (
            <div>
                <button onClick={this.toggleDisplay}>Toggle Display</button>
                {this.state.display && <h1>Displayed!</h1>}
            </div>
        );
    }
}

// ================== Use a Ternary Expression for Conditional Rendering ===================
/* The ternary operator is often utilized as a shortcut for if/else statements. They're not quite as robust as traditional if/else statements, but they are very popular among React developers. One reason for this is because of how JSX is compiled, if/else statements can't be inserted directly into JSX code. Ternary expressions can be an excellent alternative if you want to implement conditional logic within your JSX. Recall that a ternary operator has three parts, but you can combine several ternary expressions together. Here's the basic syntax:

condition ? expressionIfTrue : expressionIfFalse; */
const inputStyle = {
    width: 235,
    margin: 5,
};

class CheckUserAge extends React.Component {
    constructor(props) {
        super(props);
        // Change code below this line
        this.state = {
            input: '',
            userAge: '',
        };
        // Change code above this line
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            input: e.target.value,
            userAge: '',
        });
    }
    submit() {
        this.setState((state) => ({
            userAge: state.input,
        }));
    }
    render() {
        const buttonOne = <button onClick={this.submit}>Submit</button>;
        const buttonTwo = <button>You May Enter</button>;
        const buttonThree = <button>You Shall Not Pass</button>;
        return (
            <div>
                <h3>Enter Your Age to Continue</h3>
                <input
                    style={inputStyle}
                    type="number"
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                <br />
                {/* Change code below this line */}
                {this.state.userAge === ''
                    ? buttonOne
                    : this.state.userAge >= 18
                    ? buttonTwo
                    : buttonThree}
                {/* Change code above this line */}
            </div>
        );
    }
}

// ================== Render Conditionally from Props ===================
/* Using props to conditionally render code is very common with React developers — that is, they use the value of a given prop to automatically make decisions about what to render.

In this challenge, you'll set up a child component to make rendering decisions based on props. You'll also use the ternary operator, but you can see how several of the other concepts that were covered in the last few challenges might be just as useful in this context. */
class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        {
            /* Change code below this line */
        }
        return <h1>{this.props.fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>;
        {
            /* Change code above this line */
        }
    }
}

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState((prevState) => {
            // Complete the return statement:
            return {
                counter: prevState.counter + 1,
            };
        });
    }
    render() {
        const expression = Math.random() >= 0.5 ? true : false; // Change this line
        return (
            <div>
                <button onClick={this.handleClick}>Play Again</button>
                {/* Change code below this line */}
                <Results fiftyFifty={expression} />
                {/* Change code above this line */}
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
}

// ================== Change Inline CSS Conditionally Based on Component State ===================
/* You can also render CSS conditionally based on the state of a React component. To do this, you check for a condition, and if that condition is met, you modify the styles object that's assigned to the JSX elements in the render method. When you set a style object based on a condition, you describe how the UI should look as a function of the application's state. There is a clear flow of information that only moves in one direction. This is the preferred method when writing applications with React. */

class GateKeeper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ input: event.target.value });
    }
    render() {
        let inputStyle = {
            border: '1px solid black',
        };
        // Change code below this line
        if (this.state.input.length > 15) {
            inputStyle.border = '3px solid red';
        }
        // Change code above this line
        return (
            <div>
                <h3>Don't Type Too Much:</h3>
                <input
                    type="text"
                    style={inputStyle}
                    value={this.state.input}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

// ================== Use Array.map() to Dynamically Render Elements ===================
/* Uou may need your components to render an unknown number of elements. Often in reactive programming, a programmer has no way to know what the state of an application is until runtime. Programmers need to write their code to correctly handle that unknown state ahead of time. Using Array.map() in React illustrates this concept. */
const textAreaStyles = {
    width: 235,
    margin: 5,
};

class MyToDoList extends React.Component {
    constructor(props) {
        super(props);
        // Change code below this line
        this.state = {
            userInput: '',
            toDoList: [],
        };
        // Change code above this line
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            toDoList: itemsArray,
        });
    }
    handleChange(e) {
        this.setState({
            userInput: e.target.value,
        });
    }
    render() {
        const items = this.state.toDoList.map((item) => <li>{item}</li>); // Change this line
        return (
            <div>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.userInput}
                    style={textAreaStyles}
                    placeholder="Separate Items With Commas"
                />
                <br />
                <button onClick={this.handleSubmit}>Create List</button>
                <h1>My "To Do" List:</h1>
                <ul>{items}</ul>
            </div>
        );
    }
}

// ================== Give Sibling Elements a Unique Key Attribute ===================
/* When you create an array of elements, each one needs a 'key' attribute set to a unique value. React uses these keys to keep track of which items are added, changed, or removed. This helps make the re-rendering process more efficient when the list is modified in any way.

Note: Keys only need to be unique between sibling elements, they don't need to be globally unique in your application. */
const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue',
];

function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map((lang, ind) => (
        <li key={'fEF' + ind}>{lang}</li>
    )); // Change this line
    return (
        <div>
            <h1>Popular Front End JavaScript Frameworks</h1>
            <ul>{renderFrameworks}</ul>
        </div>
    );
}

// ================== Use Array.filter() to Dynamically Filter an Array ===================
/* Another method is filter, which filters the contents of an array based on a condition, then returns a new array. For example, if you have an array of users that all have a property online which can be set to true or false, you can filter only those users that are online by writing:

let onlineUsers = users.filter(user => user.online);

In the code editor, MyComponent's state is initialized with an array of users. Some users are online and some aren't. Filter the array so you see only the users who are online. To do this, first use filter to return a new array containing only the users whose online property is true. Then, in the renderOnline variable, map over the filtered array, and return a 'li' element for each user that contains the text of their username. Be sure to include a unique key as well, like in the last challenges. */
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    username: 'Jeff',
                    online: true,
                },
                {
                    username: 'Alan',
                    online: false,
                },
                {
                    username: 'Mary',
                    online: true,
                },
                {
                    username: 'Jim',
                    online: false,
                },
                {
                    username: 'Sara',
                    online: true,
                },
                {
                    username: 'Laura',
                    online: true,
                },
            ],
        };
    }
    render() {
        const usersOnline = this.state.users.filter(
            (user) => user.online === true
        ); // Change this line
        const renderOnline = usersOnline.map((user, ind) => (
            <li key={'user' + ind}>{user.username}</li>
        )); // Change this line
        return (
            <div>
                <h1>Current Online Users:</h1>
                <ul>{renderOnline}</ul>
            </div>
        );
    }
}

// ================== Render React on the Server with renderToString ===================
/* So far, you have been rendering React components on the client. Normally, this is what you will always do. However, there are some use cases where it makes sense to render a React component on the server. Since React is a JavaScript view library and you can run JavaScript on the server with Node, this is possible. In fact, React provides a renderToString() method you can use for this purpose.

There are two key reasons why rendering on the server may be used in a real world app. First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML markup on the server and send this to the client, the initial page load contains all of the page's markup which can be crawled by search engines. Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.

The renderToString() method is provided on ReactDOMServer, which is available here as a global object. The method takes one argument which is a React element. Use this to render App to a string. */
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div />;
    }
}

// Change code below this line
ReactDOMServer.renderToString(<App />);
