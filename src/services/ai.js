
// Mock Question Bank for Top MNC Topics - GeeksForGeeks Style & FAANG Level
const QUESTION_BANK = {
    react: {
        Easy: [
            { question: "What is JSX?", options: ["Syntax extension for JavaScript", "A database", "A server", "A styling library"], correctAnswer: 0, explanation: "JSX allows writing HTML-like code inside JavaScript.", askedIn: ["Meta", "Netflix", "Google"] },
            { question: "How do you create a component in React?", options: ["Function or Class", "Only HTML", "Only CSS", "Database query"], correctAnswer: 0, explanation: "React components are building blocks, created via functions or classes.", askedIn: ["Uber", "Airbnb", "Amazon"] },
            { question: "What is a State in React?", options: ["Internal storage of component", "External storage", "Global storage", "None"], correctAnswer: 0, explanation: "State is a built-in React object that is used to contain data or information about the component.", askedIn: ["Amazon", "Oracle", "Google"] },
            { question: "What is Props?", options: ["Arguments passed to components", "Internal variable", "CSS style", "Database field"], correctAnswer: 0, explanation: "Props are arguments passed into React components.", askedIn: ["Microsoft", "Adobe", "Meta"] },
            { question: "What hook is used for side effects?", options: ["useEffect", "useState", "useContext", "useReducer"], correctAnswer: 0, explanation: "useEffect is used for data fetching, subscriptions, etc.", askedIn: ["Google", "Meta", "Amazon"] },
            { question: "What is the entry point of a React app?", options: ["index.js / main.jsx", "App.js", "style.css", "package.json"], correctAnswer: 0, explanation: "Usually index.js or main.jsx where ReactDOM.render is called.", askedIn: ["Salesforce", "Microsoft", "Google"] },
            { question: "How to handle events in React?", options: ["camelCase naming", "lowercase naming", "uppercase naming", "kebab-case"], correctAnswer: 0, explanation: "React events are named using camelCase, rather than lowercase.", askedIn: ["PayPal", "Amazon", "Meta"] },
            { question: "What is the Virtual DOM?", options: ["Lightweight copy of Real DOM", "Heavy copy", "The browser DOM", "A server"], correctAnswer: 0, explanation: "A virtual representation of the UI kept in memory.", askedIn: ["Meta", "Uber", "Google"] },
            { question: "What is the 'key' prop used for?", options: ["Identify changed items", "Styling", "Sorting", "Filtering"], correctAnswer: 0, explanation: "Keys help React identify which items have changed, are added, or are removed.", askedIn: ["Airbnb", "Flipkart", "Amazon"] },
            { question: "Can we use hooks in Class components?", options: ["No", "Yes", "Maybe", "Only useEffect"], correctAnswer: 0, explanation: "Hooks are consistent with functional components and cannot be used inside classes.", askedIn: ["Atlassian", "Microsoft", "Google"] },
            { question: "What is the useState hook?", options: ["Adds state to functional components", "Creates a class", "Adds styling", "None"], correctAnswer: 0, explanation: "useState is a Hook that lets you add React state to function components.", askedIn: ["Google", "Amazon", "Meta"] },
            { question: "What is a functional component?", options: ["JavaScript function returning JSX", "Class extending React", "HTML file", "CSS module"], correctAnswer: 0, explanation: "Functional components are simple JavaScript functions that return JSX.", askedIn: ["Meta", "Microsoft", "Amazon"] },
            { question: "How do you render a list in React?", options: ["Using map() function", "Using for loop in JSX", "Using while loop", "None"], correctAnswer: 0, explanation: "The map() method is commonly used to render lists in React.", askedIn: ["Uber", "Netflix", "Google"] },
            { question: "What is conditional rendering?", options: ["Rendering based on conditions", "Always render", "Never render", "None"], correctAnswer: 0, explanation: "Showing different UI based on certain conditions.", askedIn: ["Amazon", "Flipkart", "Microsoft"] },
            { question: "What is ReactDOM?", options: ["Library for DOM rendering", "Database", "Styling library", "None"], correctAnswer: 0, explanation: "ReactDOM provides DOM-specific methods for React.", askedIn: ["Adobe", "Oracle", "Meta"] },
            { question: "What is a React element?", options: ["Plain object describing component", "DOM node", "CSS class", "None"], correctAnswer: 0, explanation: "React elements are plain objects describing what to render.", askedIn: ["Meta", "Google", "Amazon"] },
            { question: "How do you add CSS in React?", options: ["Import CSS file or inline styles", "Only inline", "Only external", "None"], correctAnswer: 0, explanation: "CSS can be imported directly or used inline with style prop.", askedIn: ["Microsoft", "Uber", "Google"] },
            { question: "What is the default export?", options: ["Single export per module", "Multiple exports", "No exports", "None"], correctAnswer: 0, explanation: "Default export allows one default export per file.", askedIn: ["Amazon", "Netflix", "Meta"] },
            { question: "What is component composition?", options: ["Building components from smaller ones", "Single large component", "No components", "None"], correctAnswer: 0, explanation: "Creating complex UIs by combining simpler components.", askedIn: ["Airbnb", "Stripe", "Google"] },
            { question: "What is the children prop?", options: ["Content passed between tags", "Parent component", "CSS child", "None"], correctAnswer: 0, explanation: "Children prop contains content between component tags.", askedIn: ["Meta", "LinkedIn", "Microsoft"] },
            { question: "How to comment in JSX?", options: ["{/* comment */}", "// comment", "<!-- comment -->", "None"], correctAnswer: 0, explanation: "JSX comments use curly braces with /* */.", askedIn: ["Google", "Adobe", "Amazon"] },
            { question: "What is npm?", options: ["Node Package Manager", "New Programming Method", "Network Protocol", "None"], correctAnswer: 0, explanation: "npm is the package manager for JavaScript.", askedIn: ["Microsoft", "Amazon", "Meta"] },
            { question: "What is create-react-app?", options: ["CLI tool to bootstrap React projects", "React component", "CSS framework", "None"], correctAnswer: 0, explanation: "create-react-app sets up a React project with good defaults.", askedIn: ["Meta", "Netflix", "Google"] },
            { question: "What is a single page application?", options: ["App that loads single HTML page", "Multiple pages", "Static website", "None"], correctAnswer: 0, explanation: "SPA loads once and dynamically updates content.", askedIn: ["Uber", "Airbnb", "Amazon"] },
            { question: "What is component lifecycle?", options: ["Stages from mount to unmount", "Styling stages", "API calls", "None"], correctAnswer: 0, explanation: "Components go through mounting, updating, and unmounting.", askedIn: ["Amazon", "Oracle", "Microsoft"] },
            { question: "What is React.StrictMode?", options: ["Development tool for highlighting issues", "Production mode", "Testing framework", "Linting tool"], correctAnswer: 0, explanation: "StrictMode is a tool for highlighting potential problems in an application.", askedIn: ["Google", "Meta", "Microsoft"] },
            { question: "What is the purpose of React.Fragment?", options: ["Group elements without extra DOM node", "Create fragments of code", "Split components", "None"], correctAnswer: 0, explanation: "Fragment lets you group children without adding extra nodes to the DOM.", askedIn: ["Amazon", "Google", "Netflix"] },
            { question: "How do you pass data to child components?", options: ["Using props", "Using state directly", "Global variables", "None"], correctAnswer: 0, explanation: "Props are the primary way to pass data from parent to child.", askedIn: ["Meta", "Microsoft", "Amazon"] },
            { question: "What is the difference between controlled and uncontrolled components?", options: ["State managed by React vs DOM", "Same thing", "Speed difference", "None"], correctAnswer: 0, explanation: "Controlled components have their state managed by React.", askedIn: ["Google", "Amazon", "Uber"] },
            { question: "What is the purpose of className in React?", options: ["Apply CSS classes", "Name a component", "Create a variable", "None"], correctAnswer: 0, explanation: "className is used instead of class to apply CSS classes.", askedIn: ["Microsoft", "Meta", "Google"] },
            { question: "What is event.preventDefault() used for?", options: ["Stop default browser behavior", "Prevent event bubbling", "Cancel event", "None"], correctAnswer: 0, explanation: "Prevents the default action of an event from occurring.", askedIn: ["Amazon", "Netflix", "Microsoft"] },
            { question: "What is the spread operator in React?", options: ["... to expand arrays/objects", "* operator", "& operator", "None"], correctAnswer: 0, explanation: "Spread operator expands arrays or objects into individual elements.", askedIn: ["Google", "Meta", "Adobe"] },
            { question: "What is destructuring in React?", options: ["Extracting values from objects/arrays", "Destroying components", "Removing props", "None"], correctAnswer: 0, explanation: "Destructuring allows you to extract values from arrays or properties from objects.", askedIn: ["Amazon", "Microsoft", "Google"] }
        ],
        Medium: [
            { question: "What is the significance of the dependency array in useEffect?", options: ["Controls when effect runs", "Defines variable types", "Styling dependencies", "None"], correctAnswer: 0, explanation: "It tells React to skip applying an effect if certain values haven't changed between re-renders.", askedIn: ["Amazon", "Microsoft"] },
            { question: "Explain the concept of Lifting State Up.", options: ["Sharing state between components", "Deleting state", "Hiding state", "None"], correctAnswer: 0, explanation: "Moving state to a common ancestor to share it between siblings.", askedIn: ["Google", "Uber"] },
            { question: "What is the UseRef hook used for?", options: ["Accessing DOM directly / Persisting values", "State management", "Routing", "Fetching data"], correctAnswer: 0, explanation: "useRef allows you to persist values between renders and access DOM elements directly.", askedIn: ["Meta", "Netflix"] },
            { question: "Difference between Context API and Redux?", options: ["Context is built-in, Redux is external lib", "Redux is built-in", "No difference", "Context is for complex state"], correctAnswer: 0, explanation: "Context is great for passing data deeply, Redux is a predictable state container for complex apps.", askedIn: ["Apple", "LinkedIn"] },
            { question: "What are Higher-Order Components (HOC)?", options: ["Function taking component returning component", "Component returning HTML", "API wrapper", "None"], correctAnswer: 0, explanation: "A pattern for reusing component logic.", askedIn: ["Airbnb", "Twitter"] },
            { question: "What is Prop Drilling?", options: ["Passing data through many layers", "Creating props", "Deleting props", "Validating props"], correctAnswer: 0, explanation: "Passing data from parent to deeply nested children.", askedIn: ["Microsoft", "Oracle"] },
            { question: "How does React handle forms?", options: ["Controlled/Uncontrolled components", "Only HTML forms", "External library", "None"], correctAnswer: 0, explanation: "React uses controlled components where state is the single source of truth.", askedIn: ["Intuit", "Cisco"] },
            { question: "What is React Fragment?", options: ["Grouping children without node", "A div", "A span", "A style"], correctAnswer: 0, explanation: "Let's you group a list of children without adding extra nodes to the DOM.", askedIn: ["Adobe"] },
            { question: "Explain usage of useMemo.", options: ["Memoize value", "Memoize function", "Memoize component", "None"], correctAnswer: 0, explanation: "useMemo returns a memoized value.", askedIn: ["Google", "Amazon"] },
            { question: "Explain usage of useCallback.", options: ["Memoize callback function", "Memoize value", "Memoize component", "None"], correctAnswer: 0, explanation: "useCallback returns a memoized callback.", askedIn: ["Meta", "Uber"] },
            { question: "What is the useReducer hook?", options: ["Alternative to useState for complex state", "Reduces component size", "Removes state", "None"], correctAnswer: 0, explanation: "useReducer is preferable to useState when you have complex state logic.", askedIn: ["Netflix", "Stripe"] },
            { question: "How do you prevent unnecessary re-renders?", options: ["React.memo, useMemo, useCallback", "Use more state", "Add more components", "None"], correctAnswer: 0, explanation: "These optimization techniques help prevent unnecessary re-renders.", askedIn: ["Meta", "Google"] },
            { question: "What is lazy loading in React?", options: ["Loading components on demand", "Slow loading", "Preloading everything", "None"], correctAnswer: 0, explanation: "React.lazy() lets you load components dynamically when they're first rendered.", askedIn: ["Amazon", "Uber"] },
            { question: "What is React Suspense?", options: ["Waiting for async data", "Stopping rendering", "Removing components", "None"], correctAnswer: 0, explanation: "Suspense lets components wait for something before rendering.", askedIn: ["Meta", "Netflix"] },
            { question: "What is the useContext hook?", options: ["Access context without Consumer", "Create new context", "Delete context", "None"], correctAnswer: 0, explanation: "useContext accepts a context object and returns the current context value.", askedIn: ["Microsoft", "Adobe"] },
            { question: "Difference between useEffect and componentDidMount?", options: ["useEffect runs after every render by default", "They are identical", "componentDidMount is async", "None"], correctAnswer: 0, explanation: "useEffect combines componentDidMount, componentDidUpdate, and componentWillUnmount.", askedIn: ["Google", "Apple"] },
            { question: "What is the purpose of key in lists?", options: ["Helps React identify which items changed", "Styling purpose", "Sorting purpose", "None"], correctAnswer: 0, explanation: "Keys help React identify which items have changed, are added, or are removed.", askedIn: ["Amazon", "Flipkart"] },
            { question: "How do you pass data from child to parent?", options: ["Callback functions via props", "Direct modification", "Global variables", "None"], correctAnswer: 0, explanation: "Pass a function from parent to child, child calls it with data.", askedIn: ["Microsoft", "Oracle"] },
            { question: "What is the difference between state and props?", options: ["State is internal, props are external", "They are the same", "Both are external", "None"], correctAnswer: 0, explanation: "State is managed within the component, props are passed from parent.", askedIn: ["Meta", "Amazon"] },
            { question: "What is a pure component in React?", options: ["Component that implements shouldComponentUpdate with shallow comparison", "Component without side effects", "Functional component only", "None"], correctAnswer: 0, explanation: "PureComponent performs a shallow prop and state comparison.", askedIn: ["Netflix", "LinkedIn"] },
            { question: "How do you optimize images in React?", options: ["Lazy loading, compression, CDN", "Load all at once", "Use only SVGs", "None"], correctAnswer: 0, explanation: "Use lazy loading, proper sizing, and CDNs for optimized image delivery.", askedIn: ["Shopify", "Pinterest"] },
            { question: "What is the children prop?", options: ["Content between opening and closing tags", "Child components only", "CSS children", "None"], correctAnswer: 0, explanation: "props.children contains the content between the opening and closing tag.", askedIn: ["Airbnb", "Uber"] },
            { question: "What is React Portal?", options: ["Render children outside parent DOM hierarchy", "New route", "API gateway", "None"], correctAnswer: 0, explanation: "Portals provide a way to render children into a DOM node outside the parent.", askedIn: ["Meta", "Atlassian"] },
            { question: "What is the forwardRef API?", options: ["Pass ref to child component", "Move component forward", "Skip rendering", "None"], correctAnswer: 0, explanation: "forwardRef lets you pass a ref through a component to one of its children.", askedIn: ["Google", "Stripe"] },
            { question: "What are custom hooks?", options: ["Reusable stateful logic", "Built-in React hooks", "CSS hooks", "None"], correctAnswer: 0, explanation: "Custom hooks let you extract component logic into reusable functions.", askedIn: ["Amazon", "Netflix"] }
        ],
        Hard: [
            { question: "How does React Fiber improve performance?", options: ["Incremental rendering / Splitting work", "Faster CPU", "More RAM", "Deleting DOM"], correctAnswer: 0, explanation: "Fiber allows React to pause, abort, or reuse work as it assigns priority to different types of updates.", askedIn: ["Meta", "Microsoft"] },
            { question: "Explain Synthesis Events in React.", options: ["Cross-browser wrapper", "Native events", "Custom events", "Server events"], correctAnswer: 0, explanation: "React normalizes events so they have consistent properties across different browsers.", askedIn: ["Netflix", "Airbnb"] },
            { question: "What is Concurrent Mode?", options: ["Rendering interruptible", "Parallel processing", "Multi-threading", "None"], correctAnswer: 0, explanation: "A set of new features that help React apps stay responsive and gracefully adjust to the user's device capabilities.", askedIn: ["Meta", "Google"] },
            { question: "How would you optimize a large list in React?", options: ["Virtualization (react-window)", "Render all", "Use simple array", "None"], correctAnswer: 0, explanation: "Windowing or virtualization renders only the items currently visible.", askedIn: ["Uber", "Twitter"] },
            { question: "Explain Reconciliation algorithm details.", options: ["Diffing algo O(n)", "Diffing O(n^3)", "Sorting", "None"], correctAnswer: 0, explanation: "React compares the new and old virtual DOMs to decide what to update.", askedIn: ["Amazon", "Apple"] },
            { question: "How to implement Server Side Rendering (SSR) with React?", options: ["Next.js / ReactDOMServer", "Only React", "jQuery", "None"], correctAnswer: 0, explanation: "Using frameworks like Next.js or ReactDOMServer APIs to render on server.", askedIn: ["LinkedIn", "Netflix"] },
            { question: "What are Error Boundaries?", options: ["Catch JS errors in child tree", "Catch network errors", "Catch CSS errors", "None"], correctAnswer: 0, explanation: "Components that catch JavaScript errors anywhere in their child component tree.", askedIn: ["Salesforce", "Atlassian"] },
            { question: "Design pattern: Compound Components.", options: ["Components working together", "Single component", "HOC", "None"], correctAnswer: 0, explanation: "Think <select> and <option>, they work together to share state implicitly.", askedIn: ["Airbnb", "Pinterest"] },
            { question: "How does 'useLayoutEffect' differ from 'useEffect'?", options: ["Fires synchronously after DOM mutation", "Fires asynchronously", "No difference", "Fires before render"], correctAnswer: 0, explanation: "useLayoutEffect fires synchronously after all DOM mutations, useful for reading layout from DOM.", askedIn: ["Google", "Meta"] },
            { question: "What is StrictMode?", options: ["Highlights potential problems", "Enforces Types", "Prevents rendering", "None"], correctAnswer: 0, explanation: "Tool for highlighting potential problems in an application (double invoke effects in dev).", askedIn: ["Microsoft"] }
        ]
    },
    dsa: {
        Easy: [
            { question: "Time complexity of accessing array element?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correctAnswer: 0, explanation: "Random access is constant time.", askedIn: ["Google", "Amazon", "Microsoft"] },
            { question: "LIFO data structure?", options: ["Stack", "Queue", "Tree", "Graph"], correctAnswer: 0, explanation: "Last In, First Out.", askedIn: ["Infosys", "TCS", "Google", "Amazon"] },
            { question: "FIFO data structure?", options: ["Queue", "Stack", "Tree", "Graph"], correctAnswer: 0, explanation: "First In, First Out.", askedIn: ["Wipro", "Accenture", "Meta", "Microsoft"] },
            { question: "What is a Linked List?", options: ["Nodes with data and pointer", "Contiguous memory", "Key-value pair", "None"], correctAnswer: 0, explanation: "Linear data structure where elements are not stored at contiguous locations.", askedIn: ["Amazon", "Oracle", "Google"] },
            { question: "Binary Search precondition?", options: ["Sorted array", "Unsorted array", "Linked List", "None"], correctAnswer: 0, explanation: "Binary search only works on sorted arrays.", askedIn: ["Google", "Adobe", "Amazon", "Meta"] },
            { question: "What is hashing?", options: ["Mapping data to fixed size", "Sorting", "Encryption", "None"], correctAnswer: 0, explanation: "Converting a given key into another value.", askedIn: ["Microsoft", "IBM", "Google", "Amazon"] },
            { question: "Worst case Bubble Sort?", options: ["O(n^2)", "O(n)", "O(log n)", "O(1)"], correctAnswer: 0, explanation: "Nested loops comparing adjacent elements.", askedIn: ["TCS", "Infosys", "Meta", "Microsoft"] },
            { question: "What is a Tree?", options: ["Hierarchical structure", "Linear structure", "Circular structure", "None"], correctAnswer: 0, explanation: "Non-linear data structure with root and children.", askedIn: ["Amazon", "Cisco", "Google", "Meta"] },
            { question: "What is Recursion?", options: ["Function calling itself", "Loop", "Variable", "None"], correctAnswer: 0, explanation: "A process in which a function calls itself directly or indirectly.", askedIn: ["Google", "Meta", "Amazon", "Microsoft"] },
            { question: "Size of empty class in C++?", options: ["1 byte", "0 byte", "4 bytes", "8 bytes"], correctAnswer: 0, explanation: "To ensure distinct address for different objects.", askedIn: ["Adobe", "Oracle", "Google", "Amazon"] },
            { question: "What is a Binary Search Tree?", options: ["Left < Root < Right", "Root < Left < Right", "Random order", "None"], correctAnswer: 0, explanation: "BST follows left child < parent < right child.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "Time complexity of binary search?", options: ["O(log n)", "O(n)", "O(1)", "O(n^2)"], correctAnswer: 0, explanation: "Divides search space in half each iteration.", askedIn: ["Amazon", "Google", "Microsoft", "Meta"] },
            { question: "What is a Graph?", options: ["Nodes connected by edges", "Linear structure", "Tree variation", "None"], correctAnswer: 0, explanation: "Non-linear structure consisting of vertices and edges.", askedIn: ["Google", "Meta", "Amazon", "Microsoft"] },
            { question: "What is BFS?", options: ["Breadth First Search", "Binary First Search", "Best First Search", "None"], correctAnswer: 0, explanation: "Explores neighbors before children.", askedIn: ["Amazon", "Microsoft", "Google", "Meta"] },
            { question: "What is DFS?", options: ["Depth First Search", "Direct First Search", "Data First Search", "None"], correctAnswer: 0, explanation: "Explores as deep as possible before backtracking.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is a Hash Table?", options: ["Key-value storage with hashing", "Array", "Tree", "None"], correctAnswer: 0, explanation: "Data structure that implements associative array.", askedIn: ["Microsoft", "Google", "Amazon", "Meta"] },
            { question: "What is time complexity?", options: ["Measure of algorithm efficiency", "Space used", "Code lines", "None"], correctAnswer: 0, explanation: "Describes how time grows with input size.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is space complexity?", options: ["Memory used by algorithm", "Time taken", "Code size", "None"], correctAnswer: 0, explanation: "Describes memory requirements of an algorithm.", askedIn: ["Google", "Microsoft", "Amazon", "Meta"] },
            { question: "What is Big O notation?", options: ["Upper bound of complexity", "Exact complexity", "Lower bound", "None"], correctAnswer: 0, explanation: "Describes worst-case time complexity.", askedIn: ["Meta", "Google", "Amazon", "Microsoft"] },
            { question: "What is a Queue used for?", options: ["BFS, scheduling", "Sorting", "Searching", "None"], correctAnswer: 0, explanation: "Used in BFS, CPU scheduling, and more.", askedIn: ["Amazon", "Microsoft", "Google", "Meta"] }
        ],
        Medium: [
            { question: "Detect cycle in Linked List.", options: ["Floyd's Cycle Finding", "Sorting", "Linear Search", "None"], correctAnswer: 0, explanation: "Use slow and fast pointers.", askedIn: ["Amazon", "Microsoft", "Meta", "Google"] },
            { question: "Reverse a Linked List.", options: ["Iterative/Recursive", "Sorting", "Hashing", "None"], correctAnswer: 0, explanation: "Change the next pointer of each node to point to the previous node.", askedIn: ["Google", "Adobe", "Apple", "Amazon"] },
            { question: "Find Kth largest element.", options: ["Min Heap", "Sorting", "Max Heap", "None"], correctAnswer: 0, explanation: "Min Heap of size K is efficient.", askedIn: ["Amazon", "Uber", "Flipkart", "Google", "Meta"] },
            { question: "Level Order Traversal.", options: ["Queue (BFS)", "Stack (DFS)", "Recursion", "None"], correctAnswer: 0, explanation: "Process nodes level by level using a Queue.", askedIn: ["Microsoft", "LinkedIn", "Google", "Amazon"] },
            { question: "Check for Balanced Parentheses.", options: ["Stack", "Queue", "Array", "None"], correctAnswer: 0, explanation: "Push opening, pop matching closing.", askedIn: ["Google", "Twitter", "Adobe", "Amazon", "Meta"] },
            { question: "Longest Substring Without Repeating Characters.", options: ["Sliding Window", "Brute Force", "DP", "None"], correctAnswer: 0, explanation: "Use a map/set and window pointers.", askedIn: ["Meta", "Amazon", "Apple", "Google", "Microsoft"] },
            { question: "Merge two sorted lists.", options: ["Two pointers", "Sorting", "Hashing", "None"], correctAnswer: 0, explanation: "Compare heads and advance the smaller one.", askedIn: ["Microsoft", "Oracle", "Google", "Amazon"] },
            { question: "Binary Tree to Doubly Linked List.", options: ["Inorder Traversal", "Preorder", "Postorder", "None"], correctAnswer: 0, explanation: "Inorder traversal gives sorted order.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "Coin Change Problem.", options: ["Dynamic Programming", "Greedy", "Backtracking", "None"], correctAnswer: 0, explanation: "Find min coins to make a value.", askedIn: ["Uber", "Adobe", "ByteDance", "Google", "Amazon"] },
            { question: "Lowest Common Ancestor in BST.", options: ["Compare values", "DFS", "BFS", "None"], correctAnswer: 0, explanation: "Navigate down based on value comparison.", askedIn: ["Microsoft", "Salesforce", "Google", "Amazon", "Meta"] },
            { question: "Two Sum Problem.", options: ["Hash Map", "Brute Force", "Sorting", "None"], correctAnswer: 0, explanation: "Use hash map for O(n) solution.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "Valid Palindrome.", options: ["Two pointers", "Stack", "Recursion", "None"], correctAnswer: 0, explanation: "Compare characters from both ends.", askedIn: ["Amazon", "Microsoft", "Google", "Meta"] },
            { question: "Maximum Subarray (Kadane's).", options: ["Dynamic Programming", "Brute Force", "Divide and Conquer", "None"], correctAnswer: 0, explanation: "Track max ending here and max so far.", askedIn: ["Google", "Meta", "Amazon", "Microsoft"] },
            { question: "Validate Binary Search Tree.", options: ["Inorder traversal / Range check", "BFS", "DFS only", "None"], correctAnswer: 0, explanation: "Check if inorder is sorted or use min/max bounds.", askedIn: ["Amazon", "Google", "Microsoft", "Meta"] },
            { question: "Clone a Linked List with Random Pointer.", options: ["Hash Map / Interleaving", "Simple copy", "Recursion only", "None"], correctAnswer: 0, explanation: "Use hash map or interleave nodes.", askedIn: ["Meta", "Amazon", "Google", "Microsoft"] }
        ],
        Hard: [
            { question: "Trapping Rain Water.", options: ["Two pointers / Stack", "Brute force", "Sorting", "None"], correctAnswer: 0, explanation: "Calculate max left and max right boundary for each element.", askedIn: ["Google", "Amazon", "Goldman Sachs", "Meta", "Microsoft"] },
            { question: "Median of Two Sorted Arrays.", options: ["Binary Search on length", "Merge and sort", "Two pointers", "None"], correctAnswer: 0, explanation: "O(log(min(m,n))) complexity required.", askedIn: ["Google", "Apple", "Uber", "Amazon", "Meta"] },
            { question: "LRU Cache Implementation.", options: ["HashMap + Doubly Linked List", "Array", "Stack", "None"], correctAnswer: 0, explanation: "O(1) get and put operations.", askedIn: ["Amazon", "Microsoft", "Adobe", "Google", "Meta"] },
            { question: "Largest Rectangle in Histogram.", options: ["Stack based", "Brute force", "DP", "None"], correctAnswer: 0, explanation: "Find next smaller and prev smaller elements.", askedIn: ["Meta", "ByteDance", "Google", "Amazon"] },
            { question: "Word Ladder II (Shortest paths).", options: ["BFS + DFS/Backtracking", "Simple BFS", "Dp", "None"], correctAnswer: 0, explanation: "Find all shortest transformation sequences.", askedIn: ["Amazon", "Google", "Lyft", "Meta", "Microsoft"] },
            { question: "Merge K Sorted Lists.", options: ["Min Heap", "Iterative merge", "Brute force", "None"], correctAnswer: 0, explanation: "Push heads to heap, pop min, push next.", askedIn: ["Meta", "Microsoft", "Uber", "Google", "Amazon"] },
            { question: "Serialize and Deserialize Binary Tree.", options: ["BFS/DFS traversal string", "Inorder", "Sorting", "None"], correctAnswer: 0, explanation: "Convert tree to string and back.", askedIn: ["Google", "LinkedIn", "DoorDash", "Amazon", "Meta"] },
            { question: "N-Queens Problem.", options: ["Backtracking", "Greedy", "DP", "None"], correctAnswer: 0, explanation: "Place N queens such that no two attack each other.", askedIn: ["Amazon", "Microsoft", "Google", "Meta"] },
            { question: "Travelling Salesman Problem.", options: ["DP / Bitmasking", "Greedy", "BFS", "None"], correctAnswer: 0, explanation: "NP-Hard problem, solved via DP O(n^2 * 2^n).", askedIn: ["Google", "Uber", "Amazon", "Microsoft"] },
            { question: "Count of Smaller Numbers After Self.", options: ["Merge Sort / BIT / Segment Tree", "Brute Force", "Stack", "None"], correctAnswer: 0, explanation: "Efficiently counting smaller elements to the right.", askedIn: ["Google", "Apple", "Amazon", "Meta"] }
        ]
    },
    "system design": {
        Easy: [
            { question: "What is Scalability?", options: ["Ability to handle growth", "Making code pretty", "Database size", "None"], correctAnswer: 0, explanation: "Capability to handle increased load.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "Horizontal vs Vertical Scaling?", options: ["More machines vs Bigger machine", "Bigger vs More", "Same", "None"], correctAnswer: 0, explanation: "Horizontal = scale out, Vertical = scale up.", askedIn: ["Meta", "Microsoft", "Google", "Amazon"] },
            { question: "What is a Load Balancer?", options: ["Distributes traffic", "Stores data", "Runs code", "None"], correctAnswer: 0, explanation: "Distributes incoming network traffic across servers.", askedIn: ["Uber", "Netflix", "Google", "Amazon", "Meta"] },
            { question: "What is Caching?", options: ["Storing data for fast access", "Deleting data", "Sorting", "None"], correctAnswer: 0, explanation: "Temporary storage for high-speed retrieval.", askedIn: ["Amazon", "Twitter", "Google", "Meta", "Microsoft"] },
            { question: "What is a Database?", options: ["Organized data collection", "A file", "A code", "None"], correctAnswer: 0, explanation: "System to store and retrieve data.", askedIn: ["Oracle", "IBM", "Google", "Amazon", "Meta"] },
            { question: "SQL vs NoSQL?", options: ["Relational vs Non-relational", "Fast vs Slow", "Old vs New", "None"], correctAnswer: 0, explanation: "Structured tables vs flexible documents.", askedIn: ["MongoDB", "Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is Latency?", options: ["Delay in data transfer", "Speed", "Throughput", "None"], correctAnswer: 0, explanation: "Time taken for data to travel.", askedIn: ["Cisco", "Akamai", "Google", "Amazon", "Meta"] },
            { question: "What is Throughput?", options: ["Rate of successful message delivery", "Delay", "Error rate", "None"], correctAnswer: 0, explanation: "Number of actions executed per unit time.", askedIn: ["Amazon", "Visa", "Google", "Meta", "Microsoft"] },
            { question: "What is Redundancy?", options: ["Duplication for reliability", "Deleting duplicates", "Compression", "None"], correctAnswer: 0, explanation: "Having backup components.", askedIn: ["Google", "NASA", "Amazon", "Meta", "Microsoft"] },
            { question: "What is API?", options: ["Interface for software communication", "A database", "A server", "None"], correctAnswer: 0, explanation: "Application Programming Interface.", askedIn: ["Postman", "Twilio", "Google", "Amazon", "Meta"] },
            { question: "What is REST?", options: ["Representational State Transfer", "Remote Server", "Request State", "None"], correctAnswer: 0, explanation: "Architectural style for web services.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is HTTP?", options: ["HyperText Transfer Protocol", "High Transfer Protocol", "Host Transfer", "None"], correctAnswer: 0, explanation: "Protocol for data communication on web.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is DNS?", options: ["Domain Name System", "Data Name Server", "Direct Name System", "None"], correctAnswer: 0, explanation: "Translates domain names to IP addresses.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is a Proxy Server?", options: ["Intermediary between client and server", "Direct server", "Database", "None"], correctAnswer: 0, explanation: "Acts as gateway between users and internet.", askedIn: ["Amazon", "Google", "Microsoft", "Meta"] }
        ],
        Medium: [
            { question: "CAP Theorem?", options: ["Consistency, Availability, Partition", "Consistency, Accuracy, Performance", "None", "All"], correctAnswer: 0, explanation: "Pick two of three.", askedIn: ["Amazon", "Google", "Kafka", "Meta", "Microsoft"] },
            { question: "What is Sharding?", options: ["Partitioning logic", "Backups", "Caching", "None"], correctAnswer: 0, explanation: "Splitting data across multiple machines.", askedIn: ["Instagram", "Pinterest", "Google", "Amazon", "Meta"] },
            { question: "What is Consistent Hashing?", options: ["Distributed caching/sharding technique", "Encryption", "Sorting", "None"], correctAnswer: 0, explanation: "Minimizes reorganization when nodes change.", askedIn: ["Discord", "Uber", "Vimeo", "Google", "Amazon"] },
            { question: "Rate Limiting algorithms?", options: ["Token Bucket / Leaky Bucket", "Sorting", "Graph", "None"], correctAnswer: 0, explanation: "Control rate of traffic.", askedIn: ["Stripe", "Cloudflare", "Google", "Amazon", "Meta"] },
            { question: "SQL ACID properties?", options: ["Atomicity, Consistency, Isolation, Durability", "None", "Availability...", "Fast..."], correctAnswer: 0, explanation: "Guarantees for reliable transactions.", askedIn: ["Oracle", "Bank of America", "Google", "Amazon", "Microsoft"] },
            { question: "What is a CDN?", options: ["Content Delivery Network", "Central Database", "Code Network", "None"], correctAnswer: 0, explanation: "Distributed servers to serve content close to user.", askedIn: ["Netflix", "Akamai", "Google", "Amazon", "Meta"] },
            { question: "Message Queues usage?", options: ["Asynchronous processing / Decoupling", "Database", "Frontend", "None"], correctAnswer: 0, explanation: "Kafka, RabbitMQ for decoupling services.", askedIn: ["Uber", "LinkedIn", "Google", "Amazon", "Meta"] },
            { question: "Reverse Proxy vs Forward Proxy?", options: ["Protects server vs Protects client", "Same", "None", "Opposite"], correctAnswer: 0, explanation: "Reverse proxy sits before origin servers.", askedIn: ["Cloudflare", "NGINX", "Google", "Amazon", "Microsoft"] },
            { question: "Database Normalization.", options: ["Reduce redundancy", "Increase speed", "Make bigger", "None"], correctAnswer: 0, explanation: "Organizing data to minimize duplication.", askedIn: ["Microsoft", "Oracle", "Google", "Amazon", "Meta"] },
            { question: "What is Microservices?", options: ["Loosely coupled services", "Monolith", "One code base", "None"], correctAnswer: 0, explanation: "Architectural style of small, independent services.", askedIn: ["Netflix", "Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is Database Indexing?", options: ["Speed up data retrieval", "Slow down writes", "Storage format", "None"], correctAnswer: 0, explanation: "Data structure to quickly locate data.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is a Message Broker?", options: ["Middleware for message routing", "Database", "Web server", "None"], correctAnswer: 0, explanation: "Enables applications to communicate.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] }
        ],
        Hard: [
            { question: "Design a URL Shortener.", options: ["Base62 encoding / Hashing", "Random string", "Encryption", "None"], correctAnswer: 0, explanation: "Consider collisions, scale, and redirect.", askedIn: ["TinyURL", "Google", "Meta", "Amazon", "Microsoft"] },
            { question: "Design Twitter news feed.", options: ["Fanout service / Hybrid approach", "Simple SQL query", "NoSQL", "None"], correctAnswer: 0, explanation: "Pull vs Push models.", askedIn: ["Twitter", "Meta", "Google", "Amazon"] },
            { question: "Design a Rate Limiter.", options: ["Redis + Token Bucket", "SQL", "Local memory", "None"], correctAnswer: 0, explanation: "Distributed rate limiting.", askedIn: ["Stripe", "Google", "Amazon", "Meta", "Microsoft"] },
            { question: "Design a Chat System (WhatsApp).", options: ["WebSockets / Persistent connections", "HTTP Polling", "FTP", "None"], correctAnswer: 0, explanation: "Real-time communication requirements.", askedIn: ["Meta", "Discord", "Google", "Amazon"] },
            { question: "How to handle Thundering Herd problem?", options: ["Exponential Backoff / Jitter", "More servers", "Faster DB", "None"], correctAnswer: 0, explanation: "Preventing storm of requests simultaneously.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "Design a Key-Value Store.", options: ["LSM Trees / Consistent Hashing", "B-Tree", "SQL", "None"], correctAnswer: 0, explanation: "Dynamo paper concepts.", askedIn: ["Amazon", "Riak", "Google", "Meta", "Microsoft"] },
            { question: "Database Replication strategies.", options: ["Leader-Follower / Multi-Leader", "Backup", "Sharding", "None"], correctAnswer: 0, explanation: "Sync vs Async replication.", askedIn: ["MongoDB", "PostgreSQL", "Google", "Amazon", "Meta"] },
            { question: "Handling Distributed Transactions.", options: ["2 Phase Commit / Sagas", "ACID", "Locking", "None"], correctAnswer: 0, explanation: "Managing consistency across services.", askedIn: ["Uber", "Airbnb", "Google", "Amazon", "Meta"] },
            { question: "Design Uber Backend.", options: ["Geo-hashing / QuadTrees", "SQL", "Lists", "None"], correctAnswer: 0, explanation: "Location based services matching.", askedIn: ["Uber", "Lyft", "Google", "Amazon", "Meta"] },
            { question: "Gossip Protocol.", options: ["Epidemic protocol for state dissemination", "Chatting", "Logging", "None"], correctAnswer: 0, explanation: "Used in Cassandra/Dynamo for cluster state.", askedIn: ["Amazon", "Spotify", "Google", "Meta", "Microsoft"] }
        ]
    },
    javascript: {
        Easy: [
            { question: "Data types in JS?", options: ["Number, String, Boolean, Undefined...", "Int, Float", "None", "All"], correctAnswer: 0, explanation: "Primitive and Object types.", askedIn: ["W3Schools", "Infosys", "Google", "Amazon", "Meta"] },
            { question: "What is NaN?", options: ["Not a Number", "Number type", "Error", "None"], correctAnswer: 0, explanation: "Represents computational error.", askedIn: ["Mozilla", "Google", "Amazon", "Microsoft"] },
            { question: "How to declare variable?", options: ["var, let, const", "int, char", "variable", "None"], correctAnswer: 0, explanation: "Standard keywords.", askedIn: ["Microsoft", "Google", "Amazon", "Meta"] },
            { question: "== vs ===?", options: ["Value vs Value & Type", "Same", "Speed", "None"], correctAnswer: 0, explanation: "Strict equality checks type.", askedIn: ["Google", "Meta", "Amazon", "Microsoft"] },
            { question: "What is an Array?", options: ["Ordered collection", "Unordered", "Key value", "None"], correctAnswer: 0, explanation: "List-like object.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is a Function?", options: ["Reusable code block", "Variable", "Loop", "None"], correctAnswer: 0, explanation: "Set of statements.", askedIn: ["Oracle", "Google", "Amazon", "Meta"] },
            { question: "What is DOM?", options: ["Document Object Model", "Data Model", "Design Model", "None"], correctAnswer: 0, explanation: "Interface for HTML/XML documents.", askedIn: ["W3C", "Google", "Amazon", "Meta"] },
            { question: "What is 'strict mode'?", options: ["Strict error handling", "Faster code", "New features", "None"], correctAnswer: 0, explanation: "Opt into a restricted variant of JS.", askedIn: ["Mozilla", "Google", "Amazon", "Microsoft"] },
            { question: "Comment syntax?", options: ["// or /* */", "#", "<!-- -->", "None"], correctAnswer: 0, explanation: "Single and multi-line.", askedIn: ["IBM", "Google", "Amazon", "Meta"] },
            { question: "What is an Object?", options: ["Collection of properties", "Type", "Class", "None"], correctAnswer: 0, explanation: "Key-value pairs.", askedIn: ["Meta", "Google", "Amazon", "Microsoft"] },
            { question: "What is null vs undefined?", options: ["Intentional vs Uninitialized", "Same", "Error types", "None"], correctAnswer: 0, explanation: "null is intentional absence, undefined means not assigned.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is typeof operator?", options: ["Returns type of operand", "Returns value", "Checks equality", "None"], correctAnswer: 0, explanation: "Used to check the type of a variable.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What are template literals?", options: ["String with backticks and expressions", "Regular strings", "Numbers", "None"], correctAnswer: 0, explanation: "Allow embedded expressions using ${...}.", askedIn: ["Google", "Meta", "Amazon", "Microsoft"] },
            { question: "What is console.log?", options: ["Outputs to console", "Creates variable", "Loops", "None"], correctAnswer: 0, explanation: "Used for debugging output.", askedIn: ["Microsoft", "Google", "Amazon", "Meta"] },
            { question: "What is an arrow function?", options: ["Shorter function syntax", "Loop", "Variable", "None"], correctAnswer: 0, explanation: "Concise syntax for writing functions.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] }
        ],
        Medium: [
            { question: "What is Closure?", options: ["Function + Lexical Scope", "Block", "Object", "None"], correctAnswer: 0, explanation: "Inner function accessing outer variables.", askedIn: ["Google", "Meta", "Microsoft", "Amazon"] },
            { question: "What adds to Microtask Queue?", options: ["Promises", "setTimeout", "setInterval", "None"], correctAnswer: 0, explanation: "Promises, MutationObserver.", askedIn: ["Netflix", "Uber", "Google", "Amazon", "Meta"] },
            { question: "Explain 'this' keyword.", options: ["Context reference", "Current function", "Global object", "None"], correctAnswer: 0, explanation: "Value of this is determined by how function is called.", askedIn: ["Amazon", "Adobe", "Google", "Meta", "Microsoft"] },
            { question: "Event Bubbling.", options: ["Event goes Up the DOM", "Down", "Stay", "None"], correctAnswer: 0, explanation: "Target -> Root.", askedIn: ["Microsoft", "Mozilla", "Google", "Amazon", "Meta"] },
            { question: "Event Delegation.", options: ["Listener on parent", "Listener on every child", "None", "All"], correctAnswer: 0, explanation: "Leveraging bubbling to handle events at parent.", askedIn: ["Airbnb", "Flipkart", "Google", "Amazon", "Meta"] },
            { question: "Explain Hoisting.", options: ["Declarations moved to top", "Code cleanup", "Sorting", "None"], correctAnswer: 0, explanation: "Variables and functions can be used before declaration.", askedIn: ["Google", "Twitch", "Amazon", "Meta", "Microsoft"] },
            { question: "Map vs Set?", options: ["Key-Value vs Unique Values", "Same", "Ordered vs Unordered", "None"], correctAnswer: 0, explanation: "Map stores pairs, Set stores unique keys.", askedIn: ["Amazon", "Bloomberg", "Google", "Meta", "Microsoft"] },
            { question: "Prototypal Inheritance.", options: ["Objects inherit from objects", "Class inheritance", "None", "Java style"], correctAnswer: 0, explanation: "Prototype chain.", askedIn: ["Meta", "Yahoo", "Google", "Amazon", "Microsoft"] },
            { question: "Callback Hell.", options: ["Heavily nested callbacks", "Error", "Loop", "None"], correctAnswer: 0, explanation: "Unreadable async code.", askedIn: ["Node.js", "Netflix", "Google", "Amazon", "Meta"] },
            { question: "Promises.", options: ["Async completion object", "Guarantee", "Fast code", "None"], correctAnswer: 0, explanation: "Handle async operations.", askedIn: ["Google", "PayPal", "Amazon", "Meta", "Microsoft"] },
            { question: "Async/Await syntax.", options: ["Syntactic sugar for Promises", "New loop", "Variable type", "None"], correctAnswer: 0, explanation: "Makes async code look synchronous.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is destructuring?", options: ["Extract values from arrays/objects", "Destroy variables", "Create objects", "None"], correctAnswer: 0, explanation: "Convenient way to extract multiple values.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "Spread vs Rest operator.", options: ["Expand vs Collect", "Same", "Different syntax", "None"], correctAnswer: 0, explanation: "Spread expands, rest collects.", askedIn: ["Google", "Meta", "Amazon", "Microsoft"] }
        ],
        Hard: [
            { question: "Event Loop details.", options: ["Call Stack, Web APIs, Task Queues", "Only Stack", "Only Queue", "None"], correctAnswer: 0, explanation: "Mechanism that handles execution order.", askedIn: ["Google", "Meta", "Netflix", "Amazon", "Microsoft"] },
            { question: "How does Garbage Collection work?", options: ["Mark and Sweep", "Counting", "Manual", "None"], correctAnswer: 0, explanation: "Reclaiming memory that is no longer reachable.", askedIn: ["Microsoft", "Chrome", "Google", "Amazon", "Meta"] },
            { question: "Implement Debounce.", options: ["Delay execution until silence", "Limit rate", "Cancel", "None"], correctAnswer: 0, explanation: "Ensure call only happens once per time window.", askedIn: ["Amazon", "Lodash", "Google", "Meta", "Microsoft"] },
            { question: "Implement Throttle.", options: ["Execute once per interval", "Delay", "Cancel", "None"], correctAnswer: 0, explanation: "Limit execution frequency.", askedIn: ["Google", "Underscore", "Amazon", "Meta", "Microsoft"] },
            { question: "Service Workers.", options: ["Proxy between app and network", "Background thread", "UI thread", "None"], correctAnswer: 0, explanation: "Offline capabilities, caching.", askedIn: ["Google", "Twitter", "Amazon", "Meta"] },
            { question: "Currying.", options: ["Transform function(a,b) to f(a)(b)", "Spicing", "Sorting", "None"], correctAnswer: 0, explanation: "Evaluation of function with multiple args sequence.", askedIn: ["Meta", "Haskell", "Google", "Amazon", "Microsoft"] },
            { question: "Generator Functions.", options: ["Can be paused and resumed", "Fast loops", "Async", "None"], correctAnswer: 0, explanation: "function* and yield.", askedIn: ["Netflix", "Redux-Saga", "Google", "Amazon", "Meta"] },
            { question: "WeakMap vs Map.", options: ["Keys are weakly referenced (GC)", "Same", "WeakMap is slower", "None"], correctAnswer: 0, explanation: "WeakMap keys must be objects and are eligible for GC.", askedIn: ["Google", "Mozilla", "Amazon", "Meta", "Microsoft"] },
            { question: "V8 Engine Internals involved in optimization.", options: ["Hidden Classes / Inline Caching", "Interpreter", "None", "RAM"], correctAnswer: 0, explanation: "Techniques used by Chrome's JS engine.", askedIn: ["Google", "Node.js", "Amazon", "Microsoft"] },
            { question: "Promise.all vs Promise.allSettled.", options: ["Fail fast vs Wait all", "Same", "Speed", "None"], correctAnswer: 0, explanation: "all rejects if one rejects, allSettled waits for all.", askedIn: ["Amazon", "Shopify", "Google", "Meta", "Microsoft"] }
        ]
    },
    java: {
        Easy: [
            { question: "What is JVM?", options: ["Java Virtual Machine", "Java Visual Machine", "Java Variable Memory", "None"], correctAnswer: 0, explanation: "JVM is the runtime environment for Java bytecode.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is the difference between JDK and JRE?", options: ["JDK includes development tools, JRE is runtime only", "Same thing", "JRE includes JDK", "None"], correctAnswer: 0, explanation: "JDK is for development, JRE is for running Java programs.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What are primitive data types in Java?", options: ["int, byte, short, long, float, double, boolean, char", "String, Object", "Array, List", "None"], correctAnswer: 0, explanation: "Java has 8 primitive data types.", askedIn: ["Google", "Amazon", "Microsoft", "Meta"] },
            { question: "What is the difference between == and equals()?", options: ["== compares reference, equals() compares value", "Same", "equals() compares reference", "None"], correctAnswer: 0, explanation: "== checks if both references point to same object, equals() checks value equality.", askedIn: ["Amazon", "Meta", "Google", "Microsoft"] },
            { question: "What is a constructor?", options: ["Special method to initialize objects", "Normal method", "Variable", "None"], correctAnswer: 0, explanation: "Constructor is called when an object is created.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is method overloading?", options: ["Same method name with different parameters", "Same method name and parameters", "Different method names", "None"], correctAnswer: 0, explanation: "Compile-time polymorphism with same method name but different signatures.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is static keyword?", options: ["Belongs to class, not instance", "Belongs to instance", "Creates new object", "None"], correctAnswer: 0, explanation: "Static members are shared across all instances of a class.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is final keyword?", options: ["Cannot be modified/overridden", "Can be changed", "Creates new instance", "None"], correctAnswer: 0, explanation: "final makes variables constant, methods non-overridable, classes non-inheritable.", askedIn: ["Google", "Meta", "Amazon", "Microsoft"] },
            { question: "What is an interface?", options: ["Contract with abstract methods", "Class implementation", "Variable type", "None"], correctAnswer: 0, explanation: "Interface defines a contract that implementing classes must follow.", askedIn: ["Amazon", "Microsoft", "Google", "Meta"] },
            { question: "What is ArrayList?", options: ["Dynamic array implementation", "Fixed size array", "Linked list", "None"], correctAnswer: 0, explanation: "ArrayList is a resizable array implementation of List interface.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] }
        ],
        Medium: [
            { question: "What is the difference between abstract class and interface?", options: ["Abstract class can have implementation, interface cannot (pre-Java 8)", "Same thing", "Interface has fields", "None"], correctAnswer: 0, explanation: "Abstract classes can have concrete methods, interfaces define contracts.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is HashMap internal working?", options: ["Array of buckets with linked lists/trees", "Simple array", "Stack", "None"], correctAnswer: 0, explanation: "HashMap uses array of buckets, handles collisions with linked lists (or trees in Java 8+).", askedIn: ["Amazon", "Google", "Microsoft", "Meta"] },
            { question: "What is garbage collection?", options: ["Automatic memory management", "Manual memory cleanup", "File deletion", "None"], correctAnswer: 0, explanation: "JVM automatically reclaims memory from unused objects.", askedIn: ["Google", "Meta", "Amazon", "Microsoft"] },
            { question: "What is multithreading?", options: ["Concurrent execution of threads", "Single thread execution", "Multiple processes", "None"], correctAnswer: 0, explanation: "Multiple threads run concurrently within a single program.", askedIn: ["Amazon", "Microsoft", "Google", "Meta"] },
            { question: "What is synchronized keyword?", options: ["Ensures thread-safe access", "Makes code faster", "Creates threads", "None"], correctAnswer: 0, explanation: "synchronized prevents race conditions by allowing only one thread at a time.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is the difference between Comparable and Comparator?", options: ["Comparable is natural ordering, Comparator is custom", "Same thing", "Comparator is natural", "None"], correctAnswer: 0, explanation: "Comparable defines natural ordering, Comparator allows custom comparison logic.", askedIn: ["Amazon", "Meta", "Google", "Microsoft"] },
            { question: "What is Stream API?", options: ["Functional-style operations on collections", "I/O streams", "Network streams", "None"], correctAnswer: 0, explanation: "Java 8 Stream API provides functional operations like map, filter, reduce.", askedIn: ["Google", "Microsoft", "Amazon", "Meta"] },
            { question: "What is Optional class?", options: ["Container to avoid null pointer exceptions", "Primitive type", "Collection", "None"], correctAnswer: 0, explanation: "Optional helps handle nullable values elegantly.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is exception handling?", options: ["try-catch-finally mechanism", "If-else statements", "Loops", "None"], correctAnswer: 0, explanation: "Java uses try-catch blocks to handle runtime errors.", askedIn: ["Meta", "Amazon", "Google", "Microsoft"] },
            { question: "What is the difference between checked and unchecked exceptions?", options: ["Checked must be handled, unchecked are runtime", "Same thing", "Unchecked must be handled", "None"], correctAnswer: 0, explanation: "Checked exceptions must be caught or declared, unchecked are optional.", askedIn: ["Google", "Amazon", "Microsoft", "Meta"] }
        ],
        Hard: [
            { question: "Explain Java Memory Model.", options: ["Heap, Stack, Method Area, Native Stack", "Only Heap", "Only Stack", "None"], correctAnswer: 0, explanation: "JVM memory is divided into heap, stack, method area, and native method stack.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is ConcurrentHashMap?", options: ["Thread-safe HashMap with segment locking", "Same as HashMap", "Slower HashMap", "None"], correctAnswer: 0, explanation: "ConcurrentHashMap allows concurrent read/write with better performance than synchronized HashMap.", askedIn: ["Amazon", "Microsoft", "Google", "Meta"] },
            { question: "What is volatile keyword?", options: ["Ensures visibility across threads", "Makes variable constant", "Creates thread", "None"], correctAnswer: 0, explanation: "volatile ensures changes to variable are visible to all threads immediately.", askedIn: ["Google", "Meta", "Amazon", "Microsoft"] },
            { question: "What is ThreadLocal?", options: ["Thread-confined variables", "Global variables", "Static variables", "None"], correctAnswer: 0, explanation: "ThreadLocal provides thread-local variables, each thread has its own copy.", askedIn: ["Amazon", "Google", "Microsoft", "Meta"] },
            { question: "What is CompletableFuture?", options: ["Asynchronous programming with callbacks", "Synchronous future", "Thread pool", "None"], correctAnswer: 0, explanation: "CompletableFuture enables asynchronous, non-blocking computations.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "Explain Java classloading.", options: ["Bootstrap, Extension, Application classloaders", "Single classloader", "No classloaders", "None"], correctAnswer: 0, explanation: "Java uses hierarchical classloader system to load classes.", askedIn: ["Meta", "Amazon", "Google", "Microsoft"] },
            { question: "What is method reference in Java 8?", options: ["Shorthand for lambda expressions", "Method overloading", "Method signature", "None"], correctAnswer: 0, explanation: "Method references like Class::method are shorthand for lambdas.", askedIn: ["Google", "Microsoft", "Amazon", "Meta"] },
            { question: "What is ForkJoinPool?", options: ["Divide-and-conquer parallel execution", "Single threaded pool", "Thread group", "None"], correctAnswer: 0, explanation: "ForkJoinPool is designed for work-stealing parallel algorithms.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is Reflection API?", options: ["Inspect and modify classes at runtime", "Compile-time analysis", "Static typing", "None"], correctAnswer: 0, explanation: "Reflection allows examining and modifying class structure at runtime.", askedIn: ["Google", "Amazon", "Microsoft", "Meta"] },
            { question: "What is Java Agent?", options: ["Instrument bytecode at load time", "User agent string", "HTTP agent", "None"], correctAnswer: 0, explanation: "Java Agents can modify bytecode before classes are loaded.", askedIn: ["Amazon", "Meta", "Google", "Microsoft"] }
        ]
    },
    python: {
        Easy: [
            { question: "What is Python?", options: ["Interpreted, high-level programming language", "Compiled language", "Markup language", "None"], correctAnswer: 0, explanation: "Python is known for its readability and simplicity.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What are Python's data types?", options: ["int, float, str, list, dict, tuple, set", "Only int and string", "No types", "None"], correctAnswer: 0, explanation: "Python has several built-in data types.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is a list in Python?", options: ["Mutable ordered sequence", "Immutable sequence", "Dictionary", "None"], correctAnswer: 0, explanation: "Lists are mutable and can contain mixed types.", askedIn: ["Google", "Meta", "Amazon", "Microsoft"] },
            { question: "What is a dictionary?", options: ["Key-value pair collection", "Ordered list", "Set", "None"], correctAnswer: 0, explanation: "Dictionaries store data as key-value pairs.", askedIn: ["Amazon", "Microsoft", "Google", "Meta"] },
            { question: "What is the difference between list and tuple?", options: ["List is mutable, tuple is immutable", "Same thing", "Tuple is mutable", "None"], correctAnswer: 0, explanation: "Lists can be modified, tuples cannot.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is a function in Python?", options: ["Reusable block of code defined with def", "Variable", "Class", "None"], correctAnswer: 0, explanation: "Functions are defined using the def keyword.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is indentation in Python?", options: ["Defines code blocks", "Optional formatting", "Comments", "None"], correctAnswer: 0, explanation: "Python uses indentation instead of braces to define blocks.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is a module?", options: ["Python file with functions/classes", "Variable", "Loop", "None"], correctAnswer: 0, explanation: "Modules are .py files that can be imported.", askedIn: ["Google", "Meta", "Amazon", "Microsoft"] },
            { question: "What is pip?", options: ["Python package installer", "Python interpreter", "IDE", "None"], correctAnswer: 0, explanation: "pip is used to install Python packages.", askedIn: ["Amazon", "Microsoft", "Google", "Meta"] },
            { question: "What is None in Python?", options: ["Represents absence of value", "Zero", "Empty string", "None"], correctAnswer: 0, explanation: "None is Python's null equivalent.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] }
        ],
        Medium: [
            { question: "What is a decorator?", options: ["Function that modifies another function", "Variable", "Class attribute", "None"], correctAnswer: 0, explanation: "Decorators use @syntax to wrap functions.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is a generator?", options: ["Function that yields values lazily", "Normal function", "Class", "None"], correctAnswer: 0, explanation: "Generators use yield to produce values on demand.", askedIn: ["Amazon", "Meta", "Google", "Microsoft"] },
            { question: "What is list comprehension?", options: ["Concise way to create lists", "Loop syntax", "Function", "None"], correctAnswer: 0, explanation: "List comprehensions provide a compact way to create lists.", askedIn: ["Google", "Microsoft", "Amazon", "Meta"] },
            { question: "What is *args and **kwargs?", options: ["Variable positional and keyword arguments", "Fixed arguments", "Return values", "None"], correctAnswer: 0, explanation: "*args collects positional args, **kwargs collects keyword args.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is lambda function?", options: ["Anonymous inline function", "Named function", "Class method", "None"], correctAnswer: 0, explanation: "Lambda creates small anonymous functions.", askedIn: ["Meta", "Amazon", "Google", "Microsoft"] },
            { question: "What is GIL?", options: ["Global Interpreter Lock", "Global Import Lock", "General Interface Library", "None"], correctAnswer: 0, explanation: "GIL prevents multiple threads from executing Python bytecode simultaneously.", askedIn: ["Google", "Amazon", "Microsoft", "Meta"] },
            { question: "What is the difference between shallow and deep copy?", options: ["Shallow copies references, deep copies objects", "Same thing", "Deep copies references", "None"], correctAnswer: 0, explanation: "Deep copy creates independent copies of nested objects.", askedIn: ["Amazon", "Meta", "Google", "Microsoft"] },
            { question: "What is __init__?", options: ["Constructor method", "Destructor", "Static method", "None"], correctAnswer: 0, explanation: "__init__ initializes object attributes when created.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is self in Python?", options: ["Reference to current instance", "Global variable", "Class name", "None"], correctAnswer: 0, explanation: "self refers to the instance of the class.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is exception handling in Python?", options: ["try-except-finally blocks", "If-else", "Loops", "None"], correctAnswer: 0, explanation: "Python uses try-except to handle exceptions.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] }
        ],
        Hard: [
            { question: "What is metaclass?", options: ["Class of a class", "Instance of class", "Module", "None"], correctAnswer: 0, explanation: "Metaclasses define how classes behave.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is descriptor protocol?", options: ["__get__, __set__, __delete__ methods", "Iterator protocol", "Context manager", "None"], correctAnswer: 0, explanation: "Descriptors customize attribute access.", askedIn: ["Amazon", "Meta", "Google", "Microsoft"] },
            { question: "What is asyncio?", options: ["Asynchronous I/O framework", "Multithreading", "Multiprocessing", "None"], correctAnswer: 0, explanation: "asyncio enables async/await syntax for concurrent code.", askedIn: ["Google", "Microsoft", "Amazon", "Meta"] },
            { question: "What is MRO?", options: ["Method Resolution Order", "Multiple Return Objects", "Module Registry Order", "None"], correctAnswer: 0, explanation: "MRO determines the order in which base classes are searched.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is monkey patching?", options: ["Modifying code at runtime", "Code review", "Testing", "None"], correctAnswer: 0, explanation: "Monkey patching changes classes or modules at runtime.", askedIn: ["Meta", "Amazon", "Google", "Microsoft"] },
            { question: "What is context manager?", options: ["with statement for resource management", "Exception handler", "Decorator", "None"], correctAnswer: 0, explanation: "Context managers implement __enter__ and __exit__ for resource cleanup.", askedIn: ["Google", "Amazon", "Microsoft", "Meta"] },
            { question: "What is slots?", options: ["Memory optimization for classes", "Method slots", "Variable naming", "None"], correctAnswer: 0, explanation: "__slots__ reduces memory by preventing __dict__ creation.", askedIn: ["Amazon", "Meta", "Google", "Microsoft"] },
            { question: "What is dataclass?", options: ["Decorator to auto-generate class methods", "Data storage", "Database class", "None"], correctAnswer: 0, explanation: "dataclass decorator auto-generates __init__, __repr__, etc.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is type hinting?", options: ["Optional static type annotations", "Runtime type checking", "Type conversion", "None"], correctAnswer: 0, explanation: "Type hints add optional type information for better tooling.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is functools.lru_cache?", options: ["Memoization decorator", "Caching library", "Memory manager", "None"], correctAnswer: 0, explanation: "lru_cache caches function results for performance.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] }
        ]
    },
    cpp: {
        Easy: [
            { question: "What is C++?", options: ["Object-oriented extension of C", "Scripting language", "Markup language", "None"], correctAnswer: 0, explanation: "C++ adds OOP features to C.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is a pointer?", options: ["Variable storing memory address", "Integer variable", "Function", "None"], correctAnswer: 0, explanation: "Pointers hold addresses of other variables.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is the difference between struct and class?", options: ["Default access: struct public, class private", "No difference", "struct has methods", "None"], correctAnswer: 0, explanation: "struct members are public by default, class members are private.", askedIn: ["Google", "Microsoft", "Amazon", "Meta"] },
            { question: "What is a reference?", options: ["Alias for existing variable", "Pointer", "New variable", "None"], correctAnswer: 0, explanation: "References are alternative names for variables.", askedIn: ["Amazon", "Meta", "Google", "Microsoft"] },
            { question: "What is new and delete?", options: ["Dynamic memory allocation/deallocation", "Variable declaration", "Loop control", "None"], correctAnswer: 0, explanation: "new allocates heap memory, delete frees it.", askedIn: ["Google", "Amazon", "Microsoft", "Meta"] },
            { question: "What is a constructor?", options: ["Initializes object when created", "Destroys object", "Returns value", "None"], correctAnswer: 0, explanation: "Constructors have same name as class and no return type.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is a destructor?", options: ["Cleans up when object is destroyed", "Initializes object", "Copies object", "None"], correctAnswer: 0, explanation: "Destructors are called when objects go out of scope or are deleted.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is function overloading?", options: ["Same function name, different parameters", "Same everything", "Different names", "None"], correctAnswer: 0, explanation: "Functions with same name but different signatures.", askedIn: ["Google", "Meta", "Amazon", "Microsoft"] },
            { question: "What is inheritance?", options: ["Deriving new class from existing", "Copying code", "Including files", "None"], correctAnswer: 0, explanation: "Inheritance allows code reuse through class hierarchy.", askedIn: ["Amazon", "Microsoft", "Google", "Meta"] },
            { question: "What is a namespace?", options: ["Organizes code to avoid name conflicts", "File name", "Variable type", "None"], correctAnswer: 0, explanation: "Namespaces prevent naming collisions.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] }
        ],
        Medium: [
            { question: "What is virtual function?", options: ["Enables runtime polymorphism", "Compile-time function", "Static function", "None"], correctAnswer: 0, explanation: "Virtual functions allow derived classes to override base class behavior.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is RAII?", options: ["Resource Acquisition Is Initialization", "Random Access Memory", "Return And Init", "None"], correctAnswer: 0, explanation: "RAII ties resource lifetime to object lifetime.", askedIn: ["Amazon", "Microsoft", "Google", "Meta"] },
            { question: "What is smart pointer?", options: ["Automatic memory management pointer", "Raw pointer", "Null pointer", "None"], correctAnswer: 0, explanation: "Smart pointers like unique_ptr and shared_ptr manage memory automatically.", askedIn: ["Google", "Meta", "Amazon", "Microsoft"] },
            { question: "What is the Rule of Three?", options: ["Destructor, copy constructor, copy assignment", "Three functions", "Three classes", "None"], correctAnswer: 0, explanation: "If you define one, you likely need all three.", askedIn: ["Amazon", "Google", "Microsoft", "Meta"] },
            { question: "What is move semantics?", options: ["Transfer resources without copying", "Copy semantics", "Delete semantics", "None"], correctAnswer: 0, explanation: "Move semantics avoid expensive copies by transferring ownership.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is template?", options: ["Generic programming mechanism", "HTML template", "Design pattern", "None"], correctAnswer: 0, explanation: "Templates enable writing generic code for any data type.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is STL?", options: ["Standard Template Library", "Static Type Library", "String Library", "None"], correctAnswer: 0, explanation: "STL provides containers, algorithms, and iterators.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is operator overloading?", options: ["Custom behavior for operators", "Default operators", "New operators", "None"], correctAnswer: 0, explanation: "Allows operators like + to work with custom types.", askedIn: ["Google", "Meta", "Amazon", "Microsoft"] },
            { question: "What is const correctness?", options: ["Proper use of const to prevent modification", "Constant values", "Variable definition", "None"], correctAnswer: 0, explanation: "const ensures immutability where appropriate.", askedIn: ["Amazon", "Microsoft", "Google", "Meta"] },
            { question: "What is a lambda in C++?", options: ["Anonymous function object", "Greek letter", "Loop type", "None"], correctAnswer: 0, explanation: "Lambdas are inline anonymous functions introduced in C++11.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] }
        ],
        Hard: [
            { question: "What is SFINAE?", options: ["Substitution Failure Is Not An Error", "Error handling", "Template error", "None"], correctAnswer: 0, explanation: "SFINAE allows template specialization based on type traits.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is vtable?", options: ["Table of virtual function pointers", "Variable table", "Value table", "None"], correctAnswer: 0, explanation: "vtable enables runtime dispatch of virtual functions.", askedIn: ["Amazon", "Meta", "Google", "Microsoft"] },
            { question: "What is memory model in C++11?", options: ["Defines thread-safe memory access", "Memory allocation", "Garbage collection", "None"], correctAnswer: 0, explanation: "C++11 memory model defines semantics for concurrent memory access.", askedIn: ["Google", "Microsoft", "Amazon", "Meta"] },
            { question: "What is std::atomic?", options: ["Lock-free atomic operations", "Atomic energy", "Thread class", "None"], correctAnswer: 0, explanation: "atomic provides thread-safe operations without locks.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is perfect forwarding?", options: ["Preserves value category in templates", "Normal forwarding", "Function call", "None"], correctAnswer: 0, explanation: "Perfect forwarding uses universal references and std::forward.", askedIn: ["Meta", "Amazon", "Google", "Microsoft"] },
            { question: "What is CRTP?", options: ["Curiously Recurring Template Pattern", "C++ Runtime Pattern", "Compile Pattern", "None"], correctAnswer: 0, explanation: "CRTP enables static polymorphism.", askedIn: ["Google", "Amazon", "Microsoft", "Meta"] },
            { question: "What is constexpr?", options: ["Compile-time computation", "Runtime constant", "Variable type", "None"], correctAnswer: 0, explanation: "constexpr enables computation at compile time.", askedIn: ["Amazon", "Meta", "Google", "Microsoft"] },
            { question: "What is std::variant?", options: ["Type-safe union", "Array variant", "String type", "None"], correctAnswer: 0, explanation: "variant can hold one of several types safely.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is undefined behavior?", options: ["No guarantees on program behavior", "Defined error", "Exception", "None"], correctAnswer: 0, explanation: "UB means the program can do anything - crash, work, corrupt memory.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is ODR?", options: ["One Definition Rule", "Object Definition Rule", "Operator Definition", "None"], correctAnswer: 0, explanation: "ODR requires exactly one definition of entities in a program.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] }
        ]
    },
    csharp: {
        Easy: [
            { question: "What is C#?", options: ["Object-oriented language for .NET", "C extension", "Scripting language", "None"], correctAnswer: 0, explanation: "C# is Microsoft's modern language for .NET platform.", askedIn: ["Microsoft", "Google", "Amazon", "Meta"] },
            { question: "What is CLR?", options: ["Common Language Runtime", "C Language Runtime", "Compiled Runtime", "None"], correctAnswer: 0, explanation: "CLR is the virtual machine for .NET.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is the difference between value and reference types?", options: ["Value on stack, reference on heap", "Same thing", "Reference on stack", "None"], correctAnswer: 0, explanation: "Value types store data directly, reference types store addresses.", askedIn: ["Microsoft", "Google", "Amazon", "Meta"] },
            { question: "What is a property?", options: ["Getter/setter accessor for field", "Variable", "Method", "None"], correctAnswer: 0, explanation: "Properties provide controlled access to class fields.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is a namespace?", options: ["Organizes classes and prevents conflicts", "File name", "Variable", "None"], correctAnswer: 0, explanation: "Namespaces group related types together.", askedIn: ["Google", "Microsoft", "Amazon", "Meta"] },
            { question: "What is using statement?", options: ["Imports namespace or disposes resources", "Variable declaration", "Loop", "None"], correctAnswer: 0, explanation: "using imports namespaces or ensures IDisposable cleanup.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is boxing and unboxing?", options: ["Converting value type to/from object", "Package compression", "Data encryption", "None"], correctAnswer: 0, explanation: "Boxing wraps value types in objects, unboxing extracts them.", askedIn: ["Microsoft", "Google", "Amazon", "Meta"] },
            { question: "What is an interface?", options: ["Contract defining members to implement", "Class", "Variable", "None"], correctAnswer: 0, explanation: "Interfaces define contracts without implementation.", askedIn: ["Microsoft", "Amazon", "Meta", "Google"] },
            { question: "What is inheritance in C#?", options: ["Deriving from base class with :", "Copying code", "Including files", "None"], correctAnswer: 0, explanation: "C# supports single inheritance using : syntax.", askedIn: ["Google", "Microsoft", "Amazon", "Meta"] },
            { question: "What is null in C#?", options: ["Represents no object reference", "Zero", "Empty string", "None"], correctAnswer: 0, explanation: "null indicates a reference points to nothing.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] }
        ],
        Medium: [
            { question: "What is LINQ?", options: ["Language Integrated Query", "Linked Query", "List Query", "None"], correctAnswer: 0, explanation: "LINQ adds query capabilities directly to C#.", askedIn: ["Microsoft", "Google", "Amazon", "Meta"] },
            { question: "What is async/await?", options: ["Asynchronous programming keywords", "Loop keywords", "Variable types", "None"], correctAnswer: 0, explanation: "async/await simplifies asynchronous code.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is garbage collection in .NET?", options: ["Automatic memory management", "File cleanup", "Cache clearing", "None"], correctAnswer: 0, explanation: "GC automatically reclaims unused managed memory.", askedIn: ["Microsoft", "Google", "Amazon", "Meta"] },
            { question: "What is delegate?", options: ["Type-safe function pointer", "Variable", "Class", "None"], correctAnswer: 0, explanation: "Delegates hold references to methods.", askedIn: ["Microsoft", "Amazon", "Meta", "Google"] },
            { question: "What is an event?", options: ["Publisher-subscriber notification mechanism", "Method", "Variable", "None"], correctAnswer: 0, explanation: "Events notify subscribers when something happens.", askedIn: ["Microsoft", "Google", "Amazon", "Meta"] },
            { question: "What is generics?", options: ["Type-parameterized classes/methods", "General types", "Object types", "None"], correctAnswer: 0, explanation: "Generics provide type safety with reusable code.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is extension method?", options: ["Add methods to existing types", "Override methods", "Static methods", "None"], correctAnswer: 0, explanation: "Extension methods add functionality without modifying original types.", askedIn: ["Microsoft", "Meta", "Google", "Amazon"] },
            { question: "What is nullable reference types?", options: ["Compiler warnings for null safety", "Nullable value types", "Optional types", "None"], correctAnswer: 0, explanation: "C# 8+ adds nullable annotations for reference types.", askedIn: ["Microsoft", "Google", "Amazon", "Meta"] },
            { question: "What is IEnumerable?", options: ["Interface for iteration", "Class", "Delegate", "None"], correctAnswer: 0, explanation: "IEnumerable allows foreach iteration.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is yield keyword?", options: ["Creates iterator methods", "Loop control", "Return type", "None"], correctAnswer: 0, explanation: "yield creates lazy enumerable sequences.", askedIn: ["Microsoft", "Google", "Meta", "Amazon"] }
        ],
        Hard: [
            { question: "What is Span<T>?", options: ["Stack-only memory slice without allocation", "Array type", "Collection", "None"], correctAnswer: 0, explanation: "Span provides high-performance access to contiguous memory.", askedIn: ["Microsoft", "Google", "Amazon", "Meta"] },
            { question: "What is expression tree?", options: ["Data structure representing code", "Binary tree", "AST", "None"], correctAnswer: 0, explanation: "Expression trees represent code as data for analysis.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is reflection?", options: ["Inspect and invoke types at runtime", "Compile-time analysis", "Optimization", "None"], correctAnswer: 0, explanation: "Reflection examines type information at runtime.", askedIn: ["Microsoft", "Meta", "Google", "Amazon"] },
            { question: "What is covariance and contravariance?", options: ["Generic type parameter variance", "Type conversion", "Inheritance", "None"], correctAnswer: 0, explanation: "Variance allows flexible generic type assignments.", askedIn: ["Microsoft", "Google", "Amazon", "Meta"] },
            { question: "What is IAsyncEnumerable?", options: ["Async iteration support", "Sync enumerable", "List type", "None"], correctAnswer: 0, explanation: "IAsyncEnumerable enables async foreach loops.", askedIn: ["Microsoft", "Amazon", "Meta", "Google"] },
            { question: "What is Source Generator?", options: ["Compile-time code generation", "Runtime generation", "Template", "None"], correctAnswer: 0, explanation: "Source generators create code during compilation.", askedIn: ["Microsoft", "Google", "Amazon", "Meta"] },
            { question: "What is Unsafe code?", options: ["Direct memory manipulation with pointers", "Dangerous code", "Untested code", "None"], correctAnswer: 0, explanation: "unsafe keyword enables pointer operations in C#.", askedIn: ["Microsoft", "Meta", "Google", "Amazon"] },
            { question: "What is struct layout?", options: ["Memory arrangement of struct fields", "Code organization", "File layout", "None"], correctAnswer: 0, explanation: "StructLayout controls how fields are arranged in memory.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is pattern matching?", options: ["Declarative data shape testing", "Regex", "String matching", "None"], correctAnswer: 0, explanation: "Pattern matching tests and extracts data from objects.", askedIn: ["Microsoft", "Google", "Meta", "Amazon"] },
            { question: "What is ConfigureAwait(false)?", options: ["Avoids capturing synchronization context", "Configuration setting", "Await modifier", "None"], correctAnswer: 0, explanation: "ConfigureAwait(false) improves performance in library code.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] }
        ]
    },
    databases: {
        Easy: [
            { question: "What is a database?", options: ["Organized collection of data", "File system", "Application", "None"], correctAnswer: 0, explanation: "Databases store and manage structured data.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is SQL?", options: ["Structured Query Language", "Simple Query Language", "System Query", "None"], correctAnswer: 0, explanation: "SQL is used to communicate with databases.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is a primary key?", options: ["Unique identifier for each row", "First column", "Any column", "None"], correctAnswer: 0, explanation: "Primary keys uniquely identify records.", askedIn: ["Google", "Meta", "Amazon", "Microsoft"] },
            { question: "What is a foreign key?", options: ["Reference to primary key in another table", "Unique key", "Index", "None"], correctAnswer: 0, explanation: "Foreign keys create relationships between tables.", askedIn: ["Amazon", "Microsoft", "Google", "Meta"] },
            { question: "What is SELECT statement?", options: ["Retrieves data from database", "Inserts data", "Deletes data", "None"], correctAnswer: 0, explanation: "SELECT is used to query data.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is INSERT statement?", options: ["Adds new records", "Updates records", "Deletes records", "None"], correctAnswer: 0, explanation: "INSERT adds new rows to a table.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is UPDATE statement?", options: ["Modifies existing records", "Adds records", "Removes records", "None"], correctAnswer: 0, explanation: "UPDATE changes existing data.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is DELETE statement?", options: ["Removes records from table", "Adds records", "Updates records", "None"], correctAnswer: 0, explanation: "DELETE removes rows from tables.", askedIn: ["Google", "Meta", "Amazon", "Microsoft"] },
            { question: "What is NULL?", options: ["Missing or unknown value", "Zero", "Empty string", "None"], correctAnswer: 0, explanation: "NULL represents absence of a value.", askedIn: ["Amazon", "Microsoft", "Google", "Meta"] },
            { question: "What is a table?", options: ["Collection of related data in rows and columns", "Single value", "Function", "None"], correctAnswer: 0, explanation: "Tables organize data into rows and columns.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] }
        ],
        Medium: [
            { question: "What is normalization?", options: ["Organizing data to reduce redundancy", "Adding data", "Speeding up queries", "None"], correctAnswer: 0, explanation: "Normalization eliminates data duplication.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is a JOIN?", options: ["Combines rows from multiple tables", "Splits tables", "Deletes rows", "None"], correctAnswer: 0, explanation: "JOINs link related data across tables.", askedIn: ["Amazon", "Meta", "Google", "Microsoft"] },
            { question: "What is an index?", options: ["Data structure for faster lookups", "Primary key", "Table", "None"], correctAnswer: 0, explanation: "Indexes speed up query performance.", askedIn: ["Google", "Microsoft", "Amazon", "Meta"] },
            { question: "What is ACID?", options: ["Atomicity, Consistency, Isolation, Durability", "Database type", "Query type", "None"], correctAnswer: 0, explanation: "ACID properties ensure reliable transactions.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is a transaction?", options: ["Logical unit of database operations", "Single query", "Table", "None"], correctAnswer: 0, explanation: "Transactions group operations that succeed or fail together.", askedIn: ["Meta", "Amazon", "Google", "Microsoft"] },
            { question: "What is GROUP BY?", options: ["Aggregates rows by column values", "Sorts rows", "Filters rows", "None"], correctAnswer: 0, explanation: "GROUP BY collects rows for aggregate functions.", askedIn: ["Google", "Amazon", "Microsoft", "Meta"] },
            { question: "What is HAVING clause?", options: ["Filters grouped results", "Filters rows before grouping", "Sorts", "None"], correctAnswer: 0, explanation: "HAVING filters after GROUP BY aggregation.", askedIn: ["Amazon", "Meta", "Google", "Microsoft"] },
            { question: "What is subquery?", options: ["Query nested inside another query", "Main query", "Stored procedure", "None"], correctAnswer: 0, explanation: "Subqueries are queries within queries.", askedIn: ["Google", "Microsoft", "Amazon", "Meta"] },
            { question: "What is a view?", options: ["Virtual table from query result", "Physical table", "Index", "None"], correctAnswer: 0, explanation: "Views provide a saved query as a virtual table.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is stored procedure?", options: ["Precompiled SQL code stored in database", "View", "Table", "None"], correctAnswer: 0, explanation: "Stored procedures are reusable SQL programs.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] }
        ],
        Hard: [
            { question: "What is database sharding?", options: ["Horizontal partitioning across servers", "Vertical partitioning", "Indexing", "None"], correctAnswer: 0, explanation: "Sharding distributes data across multiple databases.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is CAP theorem?", options: ["Consistency, Availability, Partition tolerance trade-off", "Database property", "Query type", "None"], correctAnswer: 0, explanation: "CAP states you can only have 2 of 3 properties.", askedIn: ["Amazon", "Meta", "Google", "Microsoft"] },
            { question: "What is database replication?", options: ["Copying data across multiple servers", "Backing up", "Indexing", "None"], correctAnswer: 0, explanation: "Replication provides redundancy and scalability.", askedIn: ["Google", "Microsoft", "Amazon", "Meta"] },
            { question: "What is query optimization?", options: ["Improving query execution efficiency", "Writing queries", "Database design", "None"], correctAnswer: 0, explanation: "Optimizers find efficient query execution plans.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] },
            { question: "What is B-tree index?", options: ["Balanced tree for efficient lookups", "Binary tree", "Hash table", "None"], correctAnswer: 0, explanation: "B-trees are commonly used for database indexes.", askedIn: ["Meta", "Amazon", "Google", "Microsoft"] },
            { question: "What is MVCC?", options: ["Multi-Version Concurrency Control", "Database version", "Backup", "None"], correctAnswer: 0, explanation: "MVCC allows concurrent reads without blocking writes.", askedIn: ["Google", "Amazon", "Microsoft", "Meta"] },
            { question: "What is a deadlock?", options: ["Circular wait for resources", "Query timeout", "Connection error", "None"], correctAnswer: 0, explanation: "Deadlocks occur when transactions wait for each other.", askedIn: ["Amazon", "Meta", "Google", "Microsoft"] },
            { question: "What is eventual consistency?", options: ["Data becomes consistent over time", "Immediate consistency", "No consistency", "None"], correctAnswer: 0, explanation: "Eventually consistent systems prioritize availability.", askedIn: ["Google", "Amazon", "Meta", "Microsoft"] },
            { question: "What is connection pooling?", options: ["Reusing database connections", "Creating new connections", "Closing connections", "None"], correctAnswer: 0, explanation: "Connection pools reduce connection overhead.", askedIn: ["Microsoft", "Amazon", "Google", "Meta"] },
            { question: "What is write-ahead logging (WAL)?", options: ["Log changes before applying to database", "Log after changes", "No logging", "None"], correctAnswer: 0, explanation: "WAL ensures durability by logging before writes.", askedIn: ["Amazon", "Google", "Meta", "Microsoft"] }
        ]
    }
};
import { generateQuizContent as generateGeminiQuiz } from './gemini.js';

export const getAvailableCompanies = () => {
    const companies = new Set();
    Object.values(QUESTION_BANK).forEach(topic => {
        Object.values(topic).forEach(level => {
            level.forEach(q => {
                if (q.askedIn) {
                    q.askedIn.forEach(c => companies.add(c));
                }
            });
        });
    });
    return Array.from(companies).sort();
};

// Helper function to get used questions from localStorage
const getUsedQuestions = (topic, difficulty) => {
    const key = `used_questions_${topic}_${difficulty}`;
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
};

// Helper function to save used questions to localStorage
const saveUsedQuestion = (topic, difficulty, questionText) => {
    const key = `used_questions_${topic}_${difficulty}`;
    const used = getUsedQuestions(topic, difficulty);
    used.push(questionText);
    localStorage.setItem(key, JSON.stringify(used));
};

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export const generateQuestions = async (topicInput, difficultyInput = 'Medium', companyInput = '', apiKey = '', count = 10) => {
    console.log(`generateQuestions called with: topic=${topicInput}, difficulty=${difficultyInput}, company=${companyInput}, count=${count}`);

    // If API Key is provided, use Gemini for truly unique questions
    if (apiKey) {
        try {
            console.log('Using Gemini AI to generate questions...');
            const geminiQuestions = await generateGeminiQuiz(apiKey, topicInput, difficultyInput, companyInput, count);
            console.log(`Gemini returned ${geminiQuestions.length} questions`);
            return geminiQuestions.map((q, i) => {
                const shuffled = shuffleOptions(q.options, q.correctAnswer);
                return {
                    ...q,
                    id: i + 1,
                    options: shuffled.options,
                    correctAnswer: shuffled.correctAnswer
                };
            });
        } catch (error) {
            console.error("Falling back to mock data due to API error:", error);
            // Continue to mock data fallback
        }
    }

    // Simulate network delay for mock data
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Normalize topic - handle variations and spaces
    let topic = topicInput.toLowerCase().trim();

    // Topic aliases to handle various input formats
    const topicAliases = {
        'systemdesign': 'system design',
        'system-design': 'system design',
        'sd': 'system design',
        'sys design': 'system design',
        'sysdesign': 'system design',
        'js': 'javascript',
        'data structures': 'dsa',
        'data-structures': 'dsa',
        'datastructures': 'dsa',
        'algorithms': 'dsa',
        'reactjs': 'react',
        'react.js': 'react',
        'react js': 'react'
    };

    // Apply alias if exists
    if (topicAliases[topic]) {
        topic = topicAliases[topic];
    }

    const difficulty = difficultyInput;
    let questions = [];

    // Get previously used questions
    const usedQuestions = getUsedQuestions(topic, difficulty);

    // Check if we have curated questions for this topic and difficulty
    if (QUESTION_BANK[topic] && QUESTION_BANK[topic][difficulty]) {
        let potentialQuestions = [...QUESTION_BANK[topic][difficulty]]; // Create a copy

        if (companyInput) {
            // First try: filter current topic + difficulty for selected company
            const filtered = potentialQuestions.filter(q =>
                q.askedIn && q.askedIn.some(c => c.toLowerCase() === companyInput.toLowerCase())
            );

            if (filtered.length > 0) {
                potentialQuestions = filtered;
            } else {
                // Second try: filter current topic, all difficulties for selected company
                const allTopicQuestions = [
                    ...QUESTION_BANK[topic]['Easy'],
                    ...QUESTION_BANK[topic]['Medium'],
                    ...QUESTION_BANK[topic]['Hard']
                ];
                const topicMatch = allTopicQuestions.filter(q =>
                    q.askedIn && q.askedIn.some(c => c.toLowerCase() === companyInput.toLowerCase())
                );

                if (topicMatch.length > 0) {
                    potentialQuestions = topicMatch;
                }
                // If no company match, keep original topic questions (don't search other topics)
            }
        }

        // Filter out previously used questions
        let availableQuestions = potentialQuestions.filter(q => !usedQuestions.includes(q.question));

        // If we've used all questions, reset the tracking and use all again
        if (availableQuestions.length < 10) {
            localStorage.removeItem(`used_questions_${topic}_${difficulty}`);
            availableQuestions = potentialQuestions;
        }

        // Randomize using Fisher-Yates shuffle
        const shuffledQuestions = shuffleArray(availableQuestions);

        // Take first 'count' questions and mark them as used
        questions = shuffledQuestions.slice(0, count).map((q, i) => {
            saveUsedQuestion(topic, difficulty, q.question);
            return {
                ...q,
                id: i + 1,
            };
        });

        console.log(`Generated ${questions.length} questions from question bank`);


    } else {
        // Fallback logic for unknown topics
        if (QUESTION_BANK[topic]) {
            const fallbackDiff = QUESTION_BANK[topic]['Medium'] ? 'Medium' : 'Easy';
            let bank = [...QUESTION_BANK[topic][fallbackDiff]] || [];

            // Randomize fallback
            bank = shuffleArray(bank);
            questions = bank.slice(0, count).map((q, i) => ({ ...q, id: i + 1 }));
        } else {
            // Fallback for completely unknown topics
            questions = Array.from({ length: count }, (_, i) => ({
                id: i + 1,
                question: `[${difficulty}] What is a core principle regarding "${topicInput}" in context ${i + 1}?`,
                options: [
                    `Ideally, it follows standard ${topicInput} conventions`,
                    `It is strictly forbidden in ${topicInput}`,
                    `It depends on the compiler version`,
                    `None of the above`
                ],
                correctAnswer: 0,
                explanation: `This is a fundamental aspect of ${topicInput} aimed at optimizing performance and readability.`,
                askedIn: ["Generic Startup"]
            }));
        }
    }

    // Shuffle options for all questions
    return questions.map(q => {
        const shuffled = shuffleOptions(q.options, q.correctAnswer);
        return {
            ...q,
            options: shuffled.options,
            correctAnswer: shuffled.correctAnswer
        };
    });
};

export const evaluatePerformance = async (questions, answers) => {
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    let score = 0;
    // Calculate score
    questions.forEach((q, index) => {
        if (answers[index] === q.correctAnswer) {
            score++;
        }
    });

    return {
        score,
        total: questions.length,
        percentage: (score / questions.length) * 100,
        summary: score > 8 ? "Outstanding performance!" :
            score > 6 ? "Good job! Keep practicing." :
                score > 4 ? "Average. Review the basics." : "Keep learning.",
    };
};

function shuffleOptions(options, originalCorrectIndex) {
    const styledOptions = options.map((opt, i) => ({
        text: opt,
        isCorrect: i === originalCorrectIndex
    }));

    for (let i = styledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [styledOptions[i], styledOptions[j]] = [styledOptions[j], styledOptions[i]];
    }

    return {
        options: styledOptions.map(o => o.text),
        correctAnswer: styledOptions.findIndex(o => o.isCorrect)
    };
}
