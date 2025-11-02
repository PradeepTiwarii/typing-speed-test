// paragraphs (removed duplicate)
const paragraphs = [
    "Debugging code is a skill that improves with practice. It is often the most time-consuming part of programming. A common technique is to use console logs to trace the flow of data. Another way is to use a debugger tool, which allows you to step through the code line by line. Patience is key. Remember that every bug is a learning opportunity. Finding and fixing it strengthens your understanding of the system and makes you a better developer.",
    "The concept of 'state' in React is fundamental. State is basically any data that your application needs to remember and that can change over time. When a component's state changes, React automatically re-renders that component to display the new data. This is what makes React so powerful for creating dynamic interfaces. Managing state properly, using hooks like useState, is one of the first things a new React developer must learn to master.",
    "Version control with Git is a non-negotiable skill for modern developers. It allows you to save snapshots of your project, so you can go back to a previous version if something breaks. It is also essential for teamwork. Multiple developers can work on the same project by creating different 'branches' and then 'merging' their changes together. Using platforms like GitHub or GitLab to host your code also helps you build a public portfolio to show employers.",
    "Node.js uses an event-driven, non-blocking I/O model. This sounds complex, but it just means Node.js is very efficient. It can handle many connections at the same time without getting stuck waiting for one to finish. This is why it's perfect for building real-time applications like chat apps, streaming services, and fast APIs. It's a powerful tool for any JavaScript developer to have in their toolkit, allowing them to work on the server side.",
    "Building a personal portfolio is one of the best things an engineering fresher can do. It's a practical way to showcase your skills. Instead of just listing technologies on a resume, you can show real projects you have built. Include your typing test site, a to-do list, or any app you are proud of. Write a short description for each project, explaining the technology used and the problem it solves. This gives interviewers something concrete to talk about.",
    "The Internet of Things, or IoT, is a network of physical devices connected to the internet. These are not just computers and phones, but also things like smart watches, home appliances, and even cars. These devices collect and share data, allowing for new kinds of automation and insights. For example, a smart thermostat can learn your schedule and adjust the temperature to save energy. This field is growing rapidly and will create many new tech jobs.",
    "MongoDB's flexible schema is one of its biggest advantages. In a traditional SQL database, you must define your table structure, or schema, in advance. In MongoDB, data is stored in JSON-like BSON documents, and you can change the structure of these documents easily. This is perfect for projects in the early stages, where requirements might change often. It allows developers to iterate quickly and adapt to new features without complex database migrations.",
    "A good developer writes code that is not only functional but also clean and readable. Clean code is easy to understand, maintain, and debug. Use meaningful names for your variables and functions. Keep your functions small and focused on doing just one thing. Add comments only when necessary to explain the 'why' behind a piece of code, not the 'what'. Writing clean code is a habit that will make you a much more effective engineer in the long run.",
    "The spread operator in JavaScript, written with three dots, is incredibly useful. It allows you to easily copy arrays or objects, or combine them together. For example, you can merge two arrays into one. You can also use it in functions to handle a variable number of arguments. It's a modern, clean syntax that helps you write more concise code. Understanding the spread operator is essential for working with modern JavaScript frameworks like React.",
    "Large language models, or LLMs, are a type of artificial intelligence that can understand and generate human text. They are trained on massive amounts of data from the internet. You interact with them when you use chatbots or AI assistants. These models can write essays, answer questions, translate languages, and even help you write code. The technology is advancing quickly and will likely change many industries, including software development.",
    "An Application Programming Interface, or API, is a set of rules that allows different software applications to talk to each other. When you use an app on your phone, it's probably using APIs to get data. For example, a weather app uses a weather API to fetch the latest forecast. As a developer, you will both use APIs made by others and build your own APIs to serve data from your back-end to your front-end.",
    "A balanced vegetarian diet can provide all the nutrients you need for good health. It's important to include a variety of foods. For protein, you can eat lentils, chickpeas, beans, tofu, and paneer. Whole grains like oats and brown rice provide energy and fiber. Don't forget leafy green vegetables for iron and nuts and seeds for healthy fats. Planning your meals helps ensure you get a good mix of everything, keeping you healthy and energized.",
    "Learning to type faster is all about building muscle memory. Your fingers need to learn where the keys are without you having to look. This only comes with consistent practice. Try to set aside ten to fifteen minutes every day just for typing drills. Focus on accuracy first, and speed will follow. It might feel slow at first, but don't get discouraged. Over time, you will see a big improvement in your speed and confidence.",
    "Open-source software is code that is made freely available for anyone to use, modify, and share. Many of the tools you use every day, like the Linux operating system, the Python language, and even React, are open-source. Contributing to open-source projects is a great way to learn, build your resume, and connect with other developers. You can start small by fixing a typo in the documentation or helping to report a bug.",
    "The software development life cycle, or SDLC, is a structured process that teams use to build high-quality software. It starts with planning and gathering requirements. Then comes the design phase, where architects plan the system. Next is the implementation, or coding, phase. After that, the software is tested to find and fix bugs. Finally, the software is deployed and enters the maintenance phase. Understanding these steps is helpful for working in a team.",
    "React Hooks, introduced in React 16.8, changed how developers write components. Before Hooks, you had to use class components to manage state or use lifecycle methods. Now, with Hooks like 'useState' and 'useEffect', you can use these features in simple functional components. This makes the code cleaner, shorter, and easier to understand. If you are learning React today, focusing on functional components and Hooks is the modern way to go.",
    "Cloud computing has revolutionized the tech industry. Instead of buying and maintaining your own physical servers, you can rent computing power from providers like Amazon Web Services, Google Cloud, or Microsoft Azure. This is more flexible, scalable, and often cheaper. You can spin up a new server in minutes and pay only for what you use. Most modern applications are 'born in the cloud', and knowing the basics of cloud services is a valuable skill.",
    "JavaScript's 'async' and 'await' keywords make it much easier to work with asynchronous code. In the past, developers had to use callbacks or promises, which could lead to complex, nested code. 'Async' and 'await' provide a cleaner syntax that makes asynchronous code look and feel more like synchronous code. You just 'await' the result of a promise, and the function will pause in a non-blocking way until the data is available. It's a powerful feature.",
    "A solid understanding of data structures is essential for any programmer. Data structures are simply ways of organizing and storing data. Common examples include arrays, linked lists, stacks, queues, and trees. The data structure you choose can have a big impact on your program's performance. For example, searching for an item in a sorted array is much faster than in an unsorted one. Interviewers often ask questions about them.",
    "Blockchain is the technology behind cryptocurrencies like Bitcoin, but its potential goes much further. At its core, a blockchain is a distributed, unchangeable public ledger. It's a way of recording transactions in a secure and transparent way, without needing a central authority like a bank. This technology could be used to create secure voting systems, track supply chains, or manage digital identities. It is a fascinating area of future tech.",
    "Regular exercise is crucial for maintaining both physical and mental health. It is not just about building muscle; it also helps reduce stress, improve sleep, and boost your mood. Even a short walk for thirty minutes a day can make a big difference. For developers who sit at a desk for long hours, it is especially important to get up and move. Find an activity you enjoy, whether it's running, cycling, or playing a sport. Your body and mind will thank you.",
    "Reading technical documentation is a skill that many new developers overlook. It can seem boring or difficult, but it is the most reliable source of information. When you are stuck on a problem, the official docs are often the best place to find the answer. Practice reading them. Start by trying to understand the main concepts, then look at the code examples. The more you do it, the better you will get at quickly finding the information you need.",
    "The MERN stack is just one of many popular tech stacks. Another is the MEAN stack, which uses Angular instead of React. There is also the PERN stack, which substitutes PostgreSQL, an SQL database, for MongoDB. Each stack has its own strengths and is suited for different types of projects. The concepts, however, are often transferable. Learning one stack deeply, like you are with MERN, gives you a great foundation to learn others more easily.",
    "In JavaScript, '==' and '===' are used for comparison, but they are not the same. The double equals, '==', performs type coercion, meaning it tries to convert the values to the same type before comparing them. This can lead to unexpected results. The triple equals, '===', is the strict equality operator. It checks both the value and the type. It is almost always recommended to use '===' to avoid bugs and make your code clearer.",
    "Pair programming is a technique where two developers work together at one computer. One person, the 'driver', writes the code, while the other, the 'navigator', reviews the code as it's written and thinks about the big picture. This practice can lead to higher-quality code, fewer bugs, and better knowledge sharing within a team. It's also a great way to learn from a more experienced developer or to help mentor a newer one.",
    "In web development, accessibility is the practice of making your websites usable by as many people as possible. This includes people with disabilities, such as visual impairments, who may use screen readers. Simple things like adding 'alt' text to images, using proper heading structures, and ensuring good color contrast make a huge difference. Building accessible sites is not just a good practice; it's the right thing to do to ensure the web is open to everyone.",
    "The concept of 'props' in React is short for properties. It is how you pass data from a parent component down to a child component. Props are read-only, which means a child component should never try to change the props it receives. This one-way data flow makes the application more stable and easier to debug. If a child component needs to change data, it's usually done by passing a function down from the parent as a prop.",
    "Meditation and mindfulness are powerful tools for managing stress and improving focus. As a student and developer, your mind is your most important tool. Meditation is like exercise for your brain. Even just five minutes of quiet breathing each day can help calm your thoughts, reduce anxiety, and improve your ability to concentrate on complex problems. There are many free apps and guides available to help you get started with this simple practice.",
    "Express.js is a minimal and flexible Node.js web application framework. It provides a robust set of features for building web and mobile applications. It is the 'E' in the MERN stack. Express makes it simple to create a server, define routes for different URLs, and handle HTTP requests and responses. It doesn't force a specific structure on you, giving you the freedom to organize your project as you see fit. It is the most popular back-end framework for Node.js.",
    "Continuous learning is a required skill in the world of technology. The field is always changing. New languages, frameworks, and tools are released all the time. What is popular today might be outdated in five years. The most successful engineers are the ones who have a 'growth mindset' and are always curious. They read blogs, watch tech talks, and build side projects to stay sharp. Embrace the fact that learning is a lifelong process.",
    "Quantum computing is a field of technology that is still in its early days but has enormous potential. Classical computers, like the one you are using, store information in 'bits' that can be either a 0 or a 1. Quantum computers use 'qubits', which can be a 0, a 1, or both at the same time. This allows them to perform certain types of calculations much, much faster than any classical computer. They could one day revolutionize fields like medicine and materials science.",
    "A key part of learning to code is learning how to ask good questions. When you get stuck, try to debug the problem yourself first. But if you are still stuck after a reasonable amount of time, ask for help. When you do, be specific. Explain what you are trying to achieve, what you have already tried, and what error message you are getting. This helps others help you more quickly, and you will learn a lot more in the process.",
    "User Experience, or UX, design is about making a product, like a website or an app, easy and enjoyable to use. It's not just about how it looks, but how it works. A good UX designer thinks about the user's journey. Is it easy to find information? Is the checkout process smooth? Is the typing test intuitive? As a developer, having a basic understanding of UX principles will help you build better products that people will love to use.",
    "SQL databases, like PostgreSQL or MySQL, store data in structured tables with rows and columns. They are different from NoSQL databases like MongoDB. SQL databases use a powerful query language (SQL) to manage and retrieve data. They are excellent for applications that require high levelsof data consistency, such as banking or e-commerce systems. Many companies use a mix of both SQL and NoSQL databases, depending on the needs of the application.",
    "A 'component' in React is a reusable piece of your user interface. Think of a website as a set of building blocks. You might have a 'Button' component, a 'Navbar' component, and a 'UserProfile' component. Each component manages its own state and logic. You can then combine these small components to build larger, more complex ones. This component-based architecture is what makes React so efficient for building and maintaining large applications.",
    "The 'await' keyword in JavaScript can only be used inside a function that is marked with the 'async' keyword. This is a common point of confusion for new developers. If you try to use 'await' at the top level or in a regular function, you will get a syntax error. This 'async' and 'await' combination is what allows the JavaScript engine to handle the asynchronous operation without blocking the main thread, keeping your application responsive.",
    "In JavaScript, there are several ways to loop over an array. The classic 'for' loop gives you the most control. The 'forEach' method is a cleaner way to execute a function for each item, but you can't easily break out of it. The 'map' method is very useful in React; it loops over an array and returns a new array. For example, you could map an array of data to an array of list items. Choosing the right loop makes your code cleaner.",
    "Cooking can be a great way to relax and de-stress. As a vegetarian, there is a huge world of flavors to explore. Learning to cook a few simple, healthy meals can save you money and is much better for you than eating out. You could start with something simple like a lentil dal or a mixed vegetable curry. Following a recipe is like following an algorithm. You take inputs, follow a set of instructions, and produce an output.",
    "REST, which stands for Representational State Transfer, is an architectural style for designing networked applications. A RESTful API is one that follows these principles. It uses standard HTTP methods like GET, POST, PUT, and DELETE. For example, you would use a GET request to fetch data, a POST request to create new data, and a DELETE request to remove data. This standard makes it easy for different systems to communicate with each other.",
    "The concept of 'middleware' is very important in Node.js and Express. Middleware functions are functions that have access to the request object, the response object, and the 'next' function in the application's request-response cycle. They can execute code, make changes to the request and response objects, or end the request. They are like " + '"' + "gatekeepers" + '"' + " that a request must pass through. They are often used for logging, authentication, or parsing data.",
    "Imposter syndrome is the feeling that you are a fraud and don't deserve your accomplishments, even when there is evidence to the contrary. It is extremely common in the tech industry, especially for students and new developers. You might feel like everyone else knows more than you do. Remember that this is a normal feeling. Be kind to yourself, celebrate your progress, and understand that you are not alone. Even senior developers feel this way sometimes.",
    "Public speaking is a valuable skill for any professional, including engineers. You might need to present your project to your team, explain a technical concept to a manager, or speak at a conference. It can be scary, but it gets easier with practice. Start small, perhaps by presenting to a few friends. Focus on knowing your material and speaking clearly. Being ableto communicate your ideas effectively is just as important as your technical skills.",
    "A 'callback' is a function that is passed as an argument to another function, and is then executed after the first function has finished. This is a fundamental concept in asynchronous JavaScript. Before promises, callbacks were the main way to handle operations that take time, like fetching data from a server. However, this could lead to 'callback hell', where you have many nested callbacks that are hard to read. Promises and async/await are the modern solution.",
    "Object-Oriented Programming, or OOP, is a programming paradigm based on the concept of 'objects'. These objects can contain data, in the form of fields (often called attributes or properties), and code, in the form of procedures (often called methods). JavaScript is a multi-paradigm language; you can write in a functional style or an OOP style using classes or prototypes. Understanding OOP principles like encapsulation and inheritance is useful.",
    "Destructuring is a JavaScript feature that lets you 'unpack' values from arrays or properties from objects into distinct variables. It makes your code cleaner and more concise. For example, instead of accessing 'props.username' and 'props.email', you could just destructure 'username' and 'email' directly from the props object in your function arguments. It is used heavily in modern React, especially with function components and hooks.",
    "The DOM, or Document Object Model, is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. When you use JavaScript to change the text of an element or add a new one, you are manipulating the DOM. React creates a 'virtual DOM' in memory, which is a lightweight copy. This allows React to be very fast, as it can calculate the changes needed and update the real DOM only when necessary.",
    "Unit testing is the practice of testing individual pieces of code, or 'units', in isolation to ensure they work correctly. For example, you might write a test for a single function to check if it returns the correct output for different inputs. Writing tests can feel like extra work, but it saves a lot of time in the long run. It helps you catch bugs early, makes your code more reliable, and gives you confidence to make changes later.",
    "In JavaScript, 'let' and 'const' are the modern ways to declare variables, replacing 'var'. 'Const' is used for variables that will not be reassigned. 'Let' is used for variables that will be reassigned. Using 'const' by default is a good practice, as it makes your code more predictable. If you find you need to reassign the variable, you can change it to 'let'. This block-scoping also helps prevent many common bugs that used to happen with 'var'.",
    "Networking, in the career sense, is about building professional relationships. For a student, this can mean talking to your professors, connecting with seniors, or attending tech meetups. It's not just about asking for a job. It's about sharing what you are learning and asking for advice. You can connect with people on platforms like LinkedIn. Building a good network can open doors to internships, jobs, and mentorship opportunities that you might not find otherwise.",
    "A 'key' is a special prop you need to include when you are creating a list of elements in React. For example, if you are using 'map' to render a list of items, each item must have a unique 'key'. This 'key' helps React identify which items have changed, been added, or been removed. This is crucial for performance. Using the array index as a key is generally discouraged, as it can lead to bugs if the order of the items changes.",
    "The quick brown fox jumps over the lazy dog. This classic pangram is famous because it contains every single letter of the English alphabet. It is the perfect sentence to test a new keyboard or to practice your typing skills, ensuring you hit every key.",
    "Pack my box with five dozen liquor jugs. This is another popular pangram that's a bit more challenging. It forces you to use 'x', 'j', 'q', and 'z' in a very short span. It's excellent for building finger dexterity and speed on less common keys.",
    "The five boxing wizards jump quickly. This short and fun sentence is also a perfect pangram. It's easy to remember and great for a quick warm-up drill. Try to type it five times in a row as fast as you can without making any mistakes.",
    "How vexingly quick daft zebras jump! This pangram is my personal favorite. It just sounds fun. It's a fantastic drill for the 'v', 'x', 'q', 'z', and 'j' keys. You won't find many sentences that pack all of those together so neatly.",
    "Jinxed wizards pluck ivy from the big quilt. This one is a bit more whimsical. It's another complete pangram that will test your ability to fluidly move across the keyboard. Notice how 'j', 'x', 'w', 'p', 'v', and 'q' are all in there.",
    "Cybersecurity is a job that involves protecting data and networks from digital attacks. Experts in this field must find and fix 'zero-day' vulnerabilities, which are security flaws unknown to the software developer. It is a constant, high-stakes game of cat and mouse.",
    "The Amazon rainforest, the largest tropical rainforest in the world, is an amazing place. It covers a vast area of South America. This jungle is home to millions of species of insects, plants, fish, and mammals. Its biodiversity is just staggering.",
    "The JavaScript Object Notation, or JSON, is a lightweight format for storing and transporting data. It is 'self-describing' and easy to understand. You will use `JSON.stringify()` to turn an object into a string and `JSON.parse()` to turn a string back into an object.",
    "Jupiter, the fifth planet from the Sun, is a gas giant and the largest planet in our solar system. Its famous Great Red Spot is a gigantic storm, bigger than Earth itself, that has been raging for hundreds of years. The planet has dozens of moons, like Io and Europa.",
    "A 'paradox' is a statement that seems to contradict itself but might still be true. For example, the 'liar paradox' is the sentence: 'This statement is false.' If it's true, then it must be false. If it's false, then it must be true. It's a dizzying puzzle!",
    "SQL (Structured Query Language) is used to communicate with relational databases. You use commands like `SELECT`, `INSERT`, `UPDATE`, and `DELETE` to manage data. `JOIN` is a powerful query that combines rows from two or more tables based on a related column.",
    "The Jazz Age of the 1920s was a period of huge social change and artistic innovation. Jazz music, which originated in African American communities, became incredibly popular. It was a decade of rebellion, flappers, and dazzling new freedoms.",
    "Quantum computing is a mind-bending field. Instead of using 'bits' (a 0 or 1), quantum computers use 'qubits'. A qubit can be a 0, a 1, or both at the same time (a superposition). This allows them to solve extremely complex problems that classical computers cannot.",
    "The Sphinx, a limestone statue in Egypt, is a mythical creature with a lion's body and a human's head. It's an iconic and mysterious monument that has puzzled historians for centuries. It stands guard near the great pyramids of Giza.",
    "Agile is a project management methodology often used in software development. It's an iterative approach focused on flexibility, customer feedback, and quick releases. Teams work in 'sprints', which are short cycles, to build and improve a product gradually.",
    "The zip function, common in many programming languages like Python, is used to combine two or more lists. It takes items from each list and 'zips' them together into pairs. It's an extremely handy tool for iterating over multiple sequences at once.",
    "Your GitHub profile is your modern-day resume. It's a portfolio where you can showcase your best projects. A clean, well-documented repository with a good README file shows employers that you are organized, skilled, and passionate about coding.",
    "The keyboard shortcut 'Ctrl + Z' (or 'Cmd + Z' on Mac) is a universal command for 'Undo'. It's a true lifesaver when you accidentally delete something important. A quick key-press can reverse your last action. 'Ctrl + Y' is often used for 'Redo'.",
    "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). The goal is to shorten the development life cycle and provide continuous delivery with high software quality. It's all about automation, collaboration, and speed.",
    "The zebra, native to several countries in Africa, is known for its distinctive black and white stripes. These unique patterns are like fingerprints; no two zebras are exactly alike. They are social animals that live in large groups called 'herds' or 'dazzles'.",
    "A 'key' prop in React is a special string attribute you need to include when creating lists of elements. React uses these keys to identify which items have changed, been added, or been removed. This helps React update the UI efficiently without re-rendering the entire list.",
    "The quadratic equation, a fundamental concept in algebra, is a polynomial equation of the second degree. The general form is `ax^2 + bx + c = 0`. You can solve for 'x' using the quadratic formula, which is a key tool for many mathematical problems.",
    "The concept of 'zero' was a revolutionary mathematical invention. It's not just a number; it's a placeholder in our number system. This amazing idea, which was independently developed in several cultures, is the bedrock of all modern mathematics and computing.",
    "He quickly zoomed past the vexing checkpoint. His lazy brown dog, 'Max', just yawned. This mix of pangram-like words is designed to make you jump between all corners of the keyboard. Practice it to improve your finger transitions and accuracy.",
    "A 'callback' function in JavaScript is a function passed into another function as an argument. This function is then invoked inside the outer function to complete some kind of routine or action.It's the foundation of asynchronous operations, like `setTimeout`.",
    "The majestic, snow-capped Mount Kilimanjaro is the highest peak in Africa. It's a dormant volcano in Tanzania, and it's one of the few places on the equator with glaciers. Climbing it is a challenging but popular adventure for trekkers.",
    "A 'lazy' developer is often a good developer because they value efficiency. They will automate repetitive tasks, write reusable code, and build tools to make their job easier. They find the quickest, most robust solution. They work smart, not just hard.",
    "Vim is a highly configurable text editor known for its efficiency. It has a steep learning curve because it's controlled entirely by keyboard commands, with no mouse. Users navigate with keys like 'h', 'j', 'k', and 'l'. Mastering it is a badge of honor for many programmers.",
    "My 'MERN' stack project, which stands for MongoDB, Express, React, and Node.js, is a full-stack application. The 'stack' just refers to the collection of technologies used to build a complete piece of software from the database to the user interface.",
    "The quick, jagged gray fox was a truly amazing sight. It bounded over the lazy pups. This is a variation of the classic pangram, designed to give you a slightly different challenge. The word 'jagged' is a great test for your left hand.",
    "JSON Web Tokens, or JWT, are a secure way to transmit information between parties. When a user logs in, the server creates a JWT and sends it to the client. The client then sends this token with every future request to prove that they are authenticated.",
    "The Viking explorations were amazing feats of navigation. These Norse seafarers used the sun, stars, and even birds to navigate the open ocean. They colonized Iceland and Greenland and were the first Europeans to reach North America, nearly 500 years before Columbus.",
    "A `Promise` in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation. It has three states: pending, fulfilled, or rejected. Using `.then()` and `.catch()` or `async/await` helps you manage this asynchronous flow.",
    "The Great Barrier Reef, off the coast of Queensland, Australia, is the world's largest coral reef system. It's composed of over 2,900 individual reefs and 900 islands. It's so vast that it can be seen from outer space. It is a fragile and complex ecosystem.",
    "This is a 'flexbox' layout in CSS. By setting `display: flex;` on a parent container, you unlock powerful alignment properties. You can easily center items vertically and horizontally using `justify-content` and `align-items`.",
    "The Sphinx of Giza and the pyramids are major puzzles. Just how did they build them? Many experts have quizzed the logistics. The sheer size and precision are amazing. It required vast organization, advanced knowledge of mathematics, and a huge workforce.",
    "My JavaScript quiz project involves heavy DOM manipulation. I use `document.getElementById()` to grab elements, and `.addEventListener()` to listen for clicks. When a user clicks an answer, a function checks if it's correct and then updates the score.",
    "The black jazz queen is vexed by my lazy dog. This is another fun, short pangram. It has the 'j', 'q', 'z', 'x', and 'v'. It's short enough to memorize and use for quick, high-intensity typing practice to warm up your fingers.",
    "Neural networks are a key part of machine learning, inspired by the human brain. They are composed of layers of 'neurons', or nodes, that process information. By training on vast amounts of data, they can 'learn' to recognize complex patterns, like in images or speech.",
    "Krypton, Xenon, and Argon are known as 'noble gases'. They are in the far-right column of the periodic table. They are very unreactive, or 'inert', because their outer shell of electrons is full. This stability makes them useful in things like light bulbs.",
    "The year 1492 is famous because Christopher Columbus sailed the ocean blue. However, it's a complex historical moment. His voyages connected two hemispheres, but also began a long and often brutal period of colonization in the Americas.",
    "A 'constructor' in a JavaScript class is a special method that gets called when you create a new instance of that class using the `new` keyword. It's the perfect place to initialize the object's properties, or 'state', when it is first created.",
    "The bizarre, hazy fog quickly enveloped the city. Just like a giant, spooky quilt. This sentence is not a pangram, but it's full of less-common letters ('z', 'j', 'q', 'y', 'b') to keep your fingers on their toes. It is quite a challenge.",
    "A 'pixel' is the smallest unit of a digital image. The word is short for 'picture element'. Your entire screen is made up of a grid of thousands or millions of these tiny dots, each changing color to create the final, complete image.",
    "The freezing jazz music wafted from the quiet, dark club. A xylophone and a buzzing sax improvised. This sentence is designed to be a nightmare for typists. It has 'z', 'j', 'q', 'x', 'b', and 'v'. If you can type this quickly and accurately, you are in great shape.",
    "The Java programming language, created in 1995, is an object-oriented language. Its famous slogan is 'Write Once, Run Anywhere'. This means that compiled Java code can run on all platforms that support Java without needing to be recompiled.",
    "The quick brown fox, known for its lazy jumps, is a very old pangram. But the 'lazy' part is a bit unjust. Maybe the fox is just extremely efficient. Why waste energy with a high jump when a lazy one will do the job just as well?",
    "An 'array' in JavaScript is a high-level, list-like object. You can store multiple values in a single variable, like `let tech = ['React', 'Node', 'Mongo'];`. You access items using a zero-based index, so `tech[0]` would give you 'React'.",
    "A 'jukebox' is a classic automated music-playing device. You put a coin in, select a song, and a mechanical arm would grab a vinyl record and play it. They were fixtures in diners and bars for decades. Now, we have streaming, but the concept is the same.",
    "That quick, amazing, futuristic hover-jet flew past the lazy, slow blimp. This sentence is a good test of comma usage and long words. It requires a good rhythm to type correctly. The 'j', 'z', 'x', and 'v' are just a bonus challenge.",
    "A 'hackathon' is an event where programmers, designers, and project managers collaborate intensively on software projects. They usually last a weekend, from Friday to Sunday. It's a fun, high-energy, and sleepless way to build a new product very quickly.",
    "Zen, a school of Buddhism, emphasizes the value of meditation and intuition over ritual or studying scriptures. It's about finding clarity and existing in the present moment. The philosophy has influenced many things, from garden design to programming.",
    "This is `example.js`. In this JavaScript file, we will explore asynchronous `fetch()` requests. The `fetch()` API is a modern, promise-based way to make network requests. It's simpler and more powerful than the old `XMLHttpRequest` object.",
    "The Jacuzzi, a brand of hot tub, has a complex jet system. It's a luxury item. My lazy dog, 'Max', just prefers a quiet, muddy puddle. To each their own. I find the juxtaposition of the complex and the simple quite amusing.",
    "A 'binary search' is a very efficient algorithm for finding an item in a *sorted* list. It works by repeatedly dividing the search interval in half. It checks the middle item. If it's a match, it's done. If not, it knows to search in either the left or the right half.",
    "The majestic fjord, with its steep, rocky cliffs, was carved by a glacier. We took a kayak out on the freezing, quiet water. The sheer scale was amazing. It's a breathtaking example of nature's power. I'd love to go back and explore more.",
    "The `useEffect` hook in React lets you perform 'side effects' in your components. This includes things like fetching data from an API, setting up a subscription, or manually changing the DOM. It runs after every render, or you can control when it runs.",
    "The " + '"' + "five-second rule" + '"' + " is a popular food hygiene myth. The idea is that if you pick up dropped food in under five seconds, it's still clean. Sadly, bacteria can contaminate food almost instantly. It's just a funny, hopeful justification.",
    "My quiz app has a complex logic. I have an array of 'question' objects. Each object has a `question` string, an `answers` array, and a `correctIndex` number. A `score` variable is incremented when the user's `selectedIndex` matches the `correctIndex`.",
    "The obelisk, a tall, four-sided monument with a pyramid top, is an ancient Egyptian design. You can find them in major cities all over the world, like Paris, London, and New York. They were often carved from a single, gigantic piece of stone.",
    "A 'variable' in programming is like a labeled box where you can store a value. In JavaScript, you declare a variable using `let`, `const`, or `var`. For example, `let age = 25;` creates a 'box' named 'age' and puts the number 25 inside it.",
    "The jukebox has a 'queue' system. When you select songs, they are added to a list. The `Array.push()` method in JavaScript is a perfect example of a queue. It adds a new item to the end of the line. `Array.shift()` would remove the item from the front.",
    "The complex puzzle of the ancient map required a unique 'key'. The explorers had to juxtapose six different artifacts. It was a vexing job. Finally, a 'click' was heard. A hidden quartz mechanism revealed the long-lost treasure. What an amazing find!",
    "A `for` loop is a common way to iterate over an array. But I prefer using the `.forEach()` method for its clean syntax. For example: `myArray.forEach(item => console.log(item));`. It's just a more modern, functional way to write your code.",
    "The fuzzy, black kitten jumped with amazing dexterity. It pounced on a small, squeaky toy. It's practicing its hunting skills. For now, its only victims are socks and dust bunnies. It's a lazy, happy, and very spoiled little creature.",
    "In CSS, the 'box model' describes the layout of an element. It's a box that wraps around every HTML element. It consists of: the content, padding, border, and margin. Understanding this is key to getting your page layouts to look exactly right.",
    "The 1969 Apollo 11 mission was a " + '"' + "giant leap for mankind" + '"' + ". Neil Armstrong and Buzz Aldrin were the first humans to walk on the Moon. The mission was a major technical achievement and a pivotal moment in the 20th century. A truly amazing journey.",
    "My lazy, spoiled-rotten dog, 'Max', will only eat a specific, very expensive brand of kibble. It's a juxtaposition I find funny. He's a simple creature, but with very complex, high-maintenance demands. He's lucky he's so cute.",
    "A 'syntax' error is a mistake in the structure or 'grammar' of your code. For example, forgetting a closing bracket `}` or a semicolon `;`. The program can't understand the instruction. An 'interpreter' or 'compiler' will usually catch these and stop.",
    "The quick, wily jackal played a clever, foxy game. It jumped over the lazy buzzard. This is a very challenging sentence. It uses 'j', 'q', 'w', 'l', 'y', 'x', 'g', 'f', 'v', 'b', and 'z'. It is a true test of your keyboard mastery.",
    "A 'phobia' is an extreme, irrational fear. For example, 'arachnophobia' is the fear of spiders. 'Acrophobia' is the fear of heights. These go beyond simple fear and can cause genuine panic attacks. They are complex psychological conditions.",
    "Object-Oriented Programming, or OOP, is a model based on 'objects'. An object contains both data (properties) and functions (methods). JavaScript, though multi-paradigm, uses OOP concepts like classes and inheritance heavily, especially in frameworks like React.",
    "The zero-gravity environment of the International Space Station is a unique challenge. Astronauts have to 'zip' themselves into sleeping bags on the wall. Water doesn't 'pour'; it forms floating blobs. It's a completely different way of existing.",
    "The pizza, an Italian invention, is now a global food. But the 'Hawaiian' pizza, topped with ham and pineapple, is a famously controversial, love-it-or-hate-it creation. It was actually invented in Canada in 1962. A truly polarizing culinary joke.",
    "This is a `README.md` file. The '.md' extension stands for 'Markdown'. It's a lightweight markup language used to format text. You use simple characters like `#` for a heading, `*` for italics, and `**` for bold. It's the standard for code documentation.",
    "A 'palindrome' is a word or phrase that reads the same backward as forward. 'Racecar', 'level', and 'madam' are all simple examples. A more complex one is the phrase: 'A man, a plan, a canal: Panama.' It's a fun linguistic puzzle.",
    "The 'event loop' is a core concept in Node.js and browser JavaScript. It's what allows JavaScript to be asynchronous, handling multiple tasks at once. It's a loop that checks the 'message queue' and 'call stack', executing tasks as they become ready.",
    "The Mojave Desert in the United States is known for its extreme climate. It's the driest desert in North America. Death Valley, a part of the Mojave, holds the record for the highest air temperature ever reliably recorded on Earth. A truly unforgiving place.",
    "A 'regex', or 'regular expression', is a powerful tool for matching patterns in text. For example, you can write a regex to check if a string is a valid email address. The syntax is complex and 'finicky', but it's an incredibly useful skill to learn.",
    "My keyboard layout is 'QWERTY'. It's named after the first six keys on the top-left row. This layout is not the most efficient. It was designed in the 1870s to prevent old typewriter 'jams'. Other layouts, like 'Dvorak', are much faster but less common.",
    "The 'Byzantine Generals' Problem' is a famous challenge in computer science. It's about getting a group of 'generals' (or computer nodes) to agree on a single, unified plan of attack, even when some of them might be 'traitors' (faulty or malicious).",
    "That amazing, quick, blue jet, 'XJ-7', zoomed past the 20th-century zeppelin. This is a very complex typing drill. It includes uppercase letters, a number, a hyphen, and a mix of 'j', 'z', 'q', and 'x'. It's a maximal challenge.",
    "The human brain is a complex organ. It contains approximately 86 billion 'neurons'. These neurons communicate with each other using electrical and chemical signals, forming a 'neural network' that controls every thought, feeling, and action.",
    "The `git rebase` command is an advanced Git technique. It's used to move or combine a sequence of commits to a new base commit. It's an alternative to `git merge`. It's powerful, but it 'rewrites' history, so you must use it with caution, especially on shared branches.",
    "The quiz was quite complex. It had questions about zoology, physics, and 18th-century art. I knew the 'zebra' and 'quark' questions, but the one about 'rococo' art just 'stumped' me. I need to 'brush up' on my history. I'll get it next time.",
    "A 'jukebox' in the 1950s was the 'Spotify' of its day. You'd gather with friends, pick your favorite songs, and enjoy the music. The technology has changed from vinyl to algorithms, but the human desire to share and enjoy music is exactly the same.",
    "The `Array.map()` method in JavaScript is a key part of functional programming. It creates a new array by calling a function on every element in the original array. It's used all the time in React to transform an array of data into an array of JSX elements.",
    "My lazy, black, fuzzy dog 'Zephyr' just loves to 'vex' the cat. He'll 'pounce' and 'jump', but the cat just 'glares' with quiet 'disdain'. It's a daily 'drama'. The cat is the 'queen', and 'Zephyr' is just her 'jester'.",
    "This project uses `localStorage` to save the user's high score. `localStorage` is a web API that lets you store key-value pairs in the browser. The data persists even after the browser is closed. `sessionStorage` is similar, but it clears when the tab is closed.",
    "The 'zombie' is a fictional creature from folklore and horror. It's typically a reanimated human corpse, driven by a 'hunger' for human flesh. The concept is a 'vehicle' for exploring social 'anxiety', 'conformity', and 'consumerism'.",
    "The 'K-pop' or Korean Pop 'craze' is a global phenomenon. Groups like 'BTS' and 'Blackpink' have 'achieved' amazing 'success'. Their 'complex' choreography, 'high-quality' music videos, and 'savvy' use of 'social media' have 'created' a 'massive', 'loyal' fanbase.",
    "My job requires 'juggling' 'multiple' complex tasks. I 'analyze' 'vast' 'quantities' of data. I 'build' 'quiz' apps and 'fix' 'bugs' in 'legacy' 'systems'. It's a 'hectic' 'mix', but I 'love' the 'challenge'. It 'keeps' my 'brain' 'sharp' and 'engaged'.",
    "A 'black hole' is a region in space where gravity is so strong that nothing, not even light, can escape. The 'event horizon' is the 'point of no return'. At the center is a 'singularity', a point of 'infinite' 'density'. A 'truly' 'puzzling' 'object'.",
    "The `box-sizing: border-box;` CSS rule is a life-saver. By default, an element's 'width' and 'height' do *not* include 'padding' or 'border'. This makes 'math' hard. `border-box` 'fixes' this. It 'tells' the browser to 'include' 'padding' and 'border' in the 'total' 'width'.",
    "The 'quartz' watch, 'invented' in the 1960s, 'revolutionized' 'timekeeping'. It uses a 'tiny' 'quartz' 'crystal' that 'oscillates' at a 'precise' 'frequency' when 'electricity' is 'applied'. This 'makes' 'them' 'incredibly' 'accurate' and 'cheap' to 'produce'.",
    "The 'aztec' 'civilization' 'flourished' in 'central' 'Mexico' from 1300 to 1521. They 'built' 'complex' 'pyramids' and 'aquaducts'. Their 'capital' 'city', 'Tenochtitlan', 'was' 'an' 'amazing' 'feat' of 'engineering', 'built' on 'an' 'island' in 'a' 'lake'.",
    "I'm 'fixing' a 'buggy' 'piece' of 'legacy' 'JavaScript' 'code'. It 'uses' 'var' 'everywhere', 'which' 'has' 'function' 'scoping' 'issues'. I'm 'refactoring' 'it' 'to' 'use' 'let' and 'const' 'for' 'proper' 'block' 'scoping'. It's 'a' 'lot' 'cleaner' 'now'.",
    "The 'xenomorph' 'from' 'the' 'movie' 'Alien' 'is' 'an' 'iconic' 'monster'. 'Designed' 'by' 'H.R. Giger', 'its' 'bio-mechanical' 'look' 'is' 'truly' 'unique' 'and' 'terrifying'. 'It's' 'a' 'perfect' 'example' 'of' 'visual' 'storytelling' 'and' 'creature' 'design'.",
    "A 'jukebox' 'musical' 'is' 'a' 'stage' 'show' 'that' 'uses' 'well-known' 'pop' 'songs' 'instead' 'of' 'original' 'music'. 'Examples' 'like' 'Mamma Mia!' 'or' 'Jersey Boys' 'are' 'extremely' 'popular'. 'They' 'weave' 'a' 'new' 'story' 'around' 'classic' 'hits'.",
    "My 'project' 'has' 'a' 'complex' 'file' 'structure'. I 'have' 'a' '`src`' 'folder' 'for' 'my' 'source' 'code', 'a' '`public`' 'folder' 'for' 'static' 'assets' 'like' 'images' 'and' '`index.html`', 'and' 'a' '`components`' 'folder' 'inside' '`src`' 'for' 'my' 'React' 'components'. 'Organization' 'is' 'key'.",
    "The 'enigma' 'machine' 'was' 'a' 'complex' 'cipher' 'device' 'used' 'by' 'Germany' 'in' 'World' 'War' 'II'. 'Its' 'code' 'was' 'believed' 'to' 'be' 'unbreakable'. 'However', 'a' 'team' 'of' 'codebreakers', 'including' 'Alan' 'Turing', 'famously' 'cracked' 'it', 'a' 'major' 'turning' 'point' 'in' 'the' 'war'.",
    "The 'oxygen' 'we' 'breathe' 'is' 'produced' 'by' 'photosynthesis'. 'Plants', 'algae', 'and' 'some' 'bacteria' 'take' 'in' 'carbon' 'dioxide', 'water', 'and' 'sunlight', 'and' 'they' 'release' 'oxygen' 'as' 'a' 'byproduct'. 'It's' 'a' 'perfect', 'life-sustaining' 'chemical' 'reaction'."
];

const INITIAL_TIME = 60;
let time = INITIAL_TIME;
let timer = null;

document.addEventListener("DOMContentLoaded", () => {
    // cache DOM refs
    const input = document.getElementById("input");
    const restartBtn = document.getElementById("restart");
    const timeEl = document.getElementById("time");

    // initial UI
    loadParagraph();
    timeEl.innerText = time;

    // start timer on first input, update chars on every input
    input.addEventListener("input", () => {
        startTimer();
        updateChars(input.value);
    });

    // restart button
    restartBtn.addEventListener("click", resetTest);
});

function loadParagraph() {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    const paragraph = paragraphs[randomIndex];
    const paragraphDisplay = document.getElementById("paragraph");

    // create span for each character
    paragraphDisplay.innerHTML = "";
    paragraph.split("").forEach(char => {
        const span = document.createElement("span");
        span.innerText = char;
        paragraphDisplay.appendChild(span);
    });
}

function updateChars(typedValue) {
    const chars = document.querySelectorAll("#paragraph span");
    const typed = typedValue.split("");

    chars.forEach((charEl, index) => {
        const typedChar = typed[index];

        // clear both classes first
        charEl.classList.remove("correct", "incorrect");

        if (typedChar == null) {
            // nothing typed for this char yet
            // leave it unstyled
        } else if (typedChar === charEl.innerText) {
            charEl.classList.add("correct");
        } else {
            charEl.classList.add("incorrect");
        }
    });

    // (Optional) You could show errors for extra typed chars beyond paragraph length.
}

function startTimer() {
    const timeEl = document.getElementById("time");
    if (timer) return; // already running

    timer = setInterval(() => {
        time--;
        timeEl.innerText = time;

        if (time <= 0) {
            finishTest();
        }
    }, 1000);
}

function finishTest() {
    // stop timer safely
    if (timer) {
        clearInterval(timer);
        timer = null;
    }

    const input = document.getElementById("input");
    input.disabled = true;

    const correct = document.querySelectorAll(".correct").length;
    const totalTyped = input.value.length;

    const accuracy = totalTyped === 0 ? 0 : Math.round((correct / totalTyped) * 100);

    // elapsed seconds = initial - remaining
    const elapsedSeconds = INITIAL_TIME - time;
    // avoid division by zero; if elapsed is 0 use a tiny fraction
    const minutes = (elapsedSeconds === 0) ? (1 / 60) : (elapsedSeconds / 60);
    const wpm = Math.round((correct / 5) / minutes);

    document.getElementById("wpm").innerText = isFinite(wpm) ? wpm : 0;
    document.getElementById("accuracy").innerText = accuracy + "%";
}

function resetTest() {
    // clear timer if any
    if (timer) {
        clearInterval(timer);
        timer = null;
    }

    // reset values & UI
    time = INITIAL_TIME;
    document.getElementById("time").innerText = time;
    document.getElementById("wpm").innerText = 0;
    document.getElementById("accuracy").innerText = "0%";

    const input = document.getElementById("input");
    input.value = "";
    input.disabled = false;

    loadParagraph();
}
