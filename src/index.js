import React from "react";
import ReactDOM from "react-dom"; 
import Faker from "faker";
import CommentDetail from "./CommentDetail";

//  ./ on the above line means that we are looking for the file on the same level

/*
THREE TENETS OF COMPONENTS.
1. Component Nesting- A component can be shown inside of another.
2. Component Resuability- We want to make components that be easily resued through out our application.
3. Component Configuration- We should be able to configure a component when it is created. 

USING FAKER IN JSX
1. We are going to use a library to make our life easier in terms of images.
2. we are going to use faker js. it allows us to automatically generate fake data. 
3. In order to get faker, we use the following command in the command line.
4. npm install --save faker 
5. in order to use faker, we must call it like a function.
6. in our case for a fake avatar we call it the following way
7. scr={Faker.image.avatar()} />
8. Faker is capitalised. Also remember the perenthsis or it will not run.

CREATING A RESUABLE, CONFIGURABLE COMPONENT
1. Identify the JSX that appears to be duplicated.
2. What is the purpose of that block of JSX? 
3. Think of a descriptive name for what it does.
4. Create a new file to house this new component. It should have the same name as the component.
5. Create a new component in the new file, paste the JSX into it.
6. Make the new component configurable by using React's 'props system'.

react components are written in capital letters. eg CommentDetail.js

COMPONENT NESTING 
1. We need to make sure our component is accessable inside of our index.js file.
2. We need to import our file holding our component as follows.
3. import CommentDetail from "./CommentDetail";
4. Within our component we need to export it as follows.
5. export default CommentDetail;
6. These steps link our component with our index.js 
7. we call our components by using the syntax
8. <CommentDetail /> 

REACT PROPS SYSTEM
1. The props system allows for the passing of data from a parent component to a child component.
2. This allows us to customize and or configure a child component. 
3. props is short for properties

PASSING AND RECIEVING PROPS
1. We provide information from the parent to the child in the following way.
2. <CommentDetail author="Sam" />
3. <CommentDetail author=(is the name of the prop)"Sam"(value of the prop) />
4. The name of the prop is totally up to the developer. However, we want it to make sense! 
5. We can reference a JavaScript variable within the value of our props.
6. for example author= (hardcoded) becomes {author} 
7. When we provide a prop to a component, we can make it pass uniquely to the children.
8. We need to make sure that we consume the information that the parent provides.
9. To use a prop, we then use {props.author} in order to call it within our CommentDetails

PASSING MULTIPLE PROPS


*/


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam"/>
            <CommentDetail author="Alex"/>
            <CommentDetail author="Jane"/>
        </div>
    );
};




ReactDOM.render(<App />, document.querySelector("#root"))

