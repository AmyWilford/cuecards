const QuestionList = [
  {
    id: 1,
    question: "What is the use of window object?",
    answer: `The window object represents an open window in a browser. BOM (the browser object model), allows Javascript to talk to the browser.  The DOM  (document object model is a property of the window object).

        All global javascript objects, functions, and variables automatically become members of the window object. Global variables are properties of the window object. Global functions are methods of the window object.
        
        There are some built in methods we can use to access or control the window - including .open(), .close(), moveTo(), resizeTo(), innerWidth(), innerHeight() > the later 2 are used to determine the size of the browser and will return in px.
        `,
  },
  {
    id: 2,
    question: "What are the different data types present in JavaScript",
    answer:
      "Primitive Value Types (BBUNNSS): Boolean, BigInt, Number, NaN, String, Symbol | Non-primitive Value Types: Objects, Arrays, Classes",
  },
  {
    id: 3,
    question:
      "What is the difference between primitive and non-primitive data types?",
    answer: `Primitive data types are predefined  and will always a have a value, while Non-primitive data types can be null. Primitive type starts with a lower caseletter, while non–primitive data types can start with an uppercase letter. 

    The size of a primitive type depends on the data type - while non-primitive types all have the same size.`,
  },
  {
    id: 4,
    question: "What is the difference between undefined value and null value?",
    answer: `Null refers to a variable whose value has specifically been set as no value (ie. null). Undefined means that a variable has been declared but its value has not yet been assigned`,
  },
  {
    id: 5,
    question: "What is this [[[ ]]]?",
    answer: "Refers to a three-dimentional array",
  },
  {
    id: 6,
    question:
      "What are the differences between cookie, local storage, and session storage?",
    answer: `All three refer to storing client information on the browser to be retrieved and used at a later time. 

    Local Storage - stores user information without any expiration date. Ie. it’s there until the user goes into their local storage and chooses to delete it. Information is stored as a json object in the form of key/value pairs. This data can only be read on the client side and not accessed by the server
    
    Session Storage - stores data for one sessions (ie. typically data is lost when the browser tab is closed). Session storage is accessible from the server
    
    Cookies act almost like a access card to the session information - and allow us to extend or shorten session lifespans (this means that information can persist after the browser is closed - or we can set sessions to end even within the browser lifespan)
    `,
  },
  {
    id: 7,
    question: "What is the difference between setInterval and setTimeout",
    answer: `Settimeout allows us to run a function - or set block of code -  a single time after the interval of time declared by the timeout. To clear, clearTimeout().
    settimeout(function ,0) will place the function execution on the waiting section of the stack, and will be run once the stack is empty
    
    Set interval allows us to a run function - or set block of code - repeatedly starting after the interval of time, then repeating continuously at that interval. To clear, clearInterval()
    `,
  },
  {
    id: 8,
    question: "What is the 'this' keyword? ",
    answer: `This keyword refers to an object - and can be used to access properties of an object. Depending on how it is used it can refer to different objects. Ie. when used in an object method, it refers to the object. Alone, it refers to the global object.

    In a web browser - the global object is the window. In something like node, there is global as the global object
    `,
  },
  {
    id: 9,
    question: "What is Syntactic sugar? ",
    answer: `Syntactic sugar is simply syntax designed to make things easier to read or more concisely expressed.

    Examples of syntactic sugar are JSX,    
    `,
  },
  {
    id: 10,
    question: "Stateless vs. Stateful",
    answer: `A STATEFUL component is a component that manages state.
    This could be either using a class-based approach using the state property
    OR functional using the useState HOOK.
    They are also known as "SMART" Components or "CONTAINER" (because they hold the state of your application)
Vs stateless components simply return JSX directly - they simply display data is receives from its react compoenent. These are know as dumb - or presentation compoenntes - they have no internal logic

Fun Fact: we should aim to write stateless components where possible as they are easier to reuse both across the application and in other projects
    `,
  },
  {
    id: 11,
    question: "What is the 'this' keyword? ",
    answer: `This keyword refers to an object - and can be used to access properties of an object. Depending on how it is used it can refer to different objects. Ie. when used in an object method, it refers to the object. Alone, it refers to the global object.

    In a web browser - the global object is the window. In something like node, there is global as the global object
    `,
  },
 
];

export default QuestionList;
