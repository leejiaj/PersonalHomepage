import { Courseworkstructure } from './courseworkstructure';

export const COURSEWORKS: Courseworkstructure[] = [
    {
        id: 1,
        title: 'ECommerceApp using MongoDB, Express and Node.js',
        coursename: 'Web Programming Languages',
        shortdescription: 'Bazaar is an E-commerce site developed for online clothes shopping',
        description: 'Bazaar is an E-commerce site developed for online clothes shopping. The site includes sections for men, women and kids. In each section there are categories for formals and casuals. For kids, categories include for girls and boys. The development work for this site is carried out through different routes namely admin, user, product, cart, reviews, purchases and categories.\n\n'+
        'The major functionalities of the site include:\n\n'+
        '* User signup - register a new user to the system\n'+
        '* User login\n'+
        '* Listing available products in the system\n'+
        '* Search and filtering of products\n'+
        '* Paging functionality while listing products\n'+
        '* Add products to cart\n'+
        '* Checkout and display history of purchases\n'+
        '* Review of products\n\n'+
        'Apart from these, admin users are capable of the functionalities:\n\n'+
        '* List all products\n'+
        '* Add a new product\n'+
        '* Delete a product\n'+
        '* Update a product\n'+
        '​\n'+
        'This project was part of the Web Programming Languages coursework (final group project). Code is available in below repository.',
        githuburl: 'https://github.com/leejiaj/ecommerceapp',
        imageurl1: './assets/ECommerceApp1.png',
        imageurl2: './assets/Tulips.jpg',
        imageurl3: './assets/Tulips.jpg',
        imageurl4: './assets/Tulips.jpg',
        imageurl5: './assets/Tulips.jpg'
    },
    {
        id: 2,
        title: 'ID3 Decision Tree',
        coursename: 'Machine Learning',
        shortdescription: 'Binary decision tree classifier using the ID3 algorithm',
        description: 'Binary decision tree classifier using the ID3 algorithm.\n'+
        '​\n'+
        '​This python program builds a Binary decision tree classifier using the ID3 algorithm. After building the decision tree, it is checked against the validation dataset. Accuracy is calculated on training, validation and test datasets. Finally the tree is pruned on a pruning factor so that the accuracy is improved.\n'+
        'Pandas is used for reading/pre-processing data.\n\n'+
        'Program reads four arguments from the command line:\n'+
        '* Path of the Training dataset\n'+
        '* Path of the Validation dataset\n'+
        '* Path of the Test dataset\n'+
        '* Pruning Factor\n'+
        '\n​'+
        'This was part of the Machine Learning coursework.',
        githuburl: 'https://github.com/leejiaj/ID3-Decision-Tree',
        imageurl1: './assets/ID3DecisionTree1.png',
        imageurl2: './assets/Hydrangeas.jpg',
        imageurl3: './assets/Hydrangeas.jpg',
        imageurl4: './assets/Hydrangeas.jpg',
        imageurl5: './assets/Hydrangeas.jpg'
    },
    {
        id: 3,
        title: 'Backpropagation Algorithm Neural Networks',
        coursename: 'Machine Learning',
        shortdescription: 'Implementing the backpropagation algorithm for Neural Networks',
        description: 'Implementing the backpropagation algorithm for Neural Networks.\n'+
        '\n'+
        'This python program implements the backpropagation algorithm for Neural Networks.\n\nThere are two steps:\n\n'+
        '1. Pre-processing the dataset. The two arguments for the program:\n'+
        '* input path of the raw dataset\n'+
        '* output path of the pre-processed dataset\n\n'+
        '2. Training a Neural Network - Uses the processed dataset to build a neural network. The input parameters to the neural net are:\n'+
        '* input dataset – complete path of the post-processed input dataset\n'+
        '* training percent – percentage of the dataset to be used for training\n'+
        '* maximum_iterations – Maximum number of iterations that the algorithm will run. This parameter is used so that the program terminates in a reasonable time.\n'+
        '* number of hidden layers\n'+
        '* number of neurons in each hidden layerPandas is used for reading/pre-processing data.\n'+
        '\n'+
        'This was part of the Machine Learning coursework.',
        githuburl: 'https://github.com/leejiaj/Backpropagation-Algorithm-Neural-Networks',
        imageurl1: './assets/BackpropagationAlgorithmNeuralNetworksback1.png',
        imageurl2: './assets/Chrysanthemum.jpg',
        imageurl3: './assets/Chrysanthemum.jpg',
        imageurl4: './assets/Chrysanthemum.jpg',
        imageurl5: './assets/Chrysanthemum.jpg'
    },
    {
        id: 4,
        title: 'Multinomial Naive Bayes',
        coursename: 'Machine Learning',
        shortdescription: 'Implementing the Naïve Bayes algorithm for text classification tasks',
        description: 'This python program implements Multinomial Naïve Bayes algorithm for text classification tasks.\n'+
        '\n'+
        'This program uses python\'s stop-words package: https://pypi.python.org/pypi/stop-words.\n'+
        '​\n'+
        'This also uses the 20 newsgroups dataset for training and test (5 classes out of the 20).\n'+
        '​\n'+
        'This was part of the Machine Learning coursework.',
        githuburl: 'https://github.com/leejiaj/Multinomial-Naive-Bayes',
        imageurl1: './assets/MultinomialNaiveBayes1.png',
        imageurl2: './assets/Tulips.jpg',
        imageurl3: './assets/Tulips.jpg',
        imageurl4: './assets/Tulips.jpg',
        imageurl5: './assets/Tulips.jpg'
    },
    {
        id: 5,
        title: 'Augmenting PIT Mutation Testing Tool',
        coursename: 'Software Validation, Verification and Testing coursework',
        shortdescription: '​The goal of this project is to contribute to the PIT mutation testing tool to implement more mutation operators',
        description: 'The goal of this project is to contribute to the PIT mutation testing tool to implement more mutation operators. The description of the original set of mutation operators implemented in PIT is available at: http://pitest.org/quickstart/mutators/. However, it does not include some traditional mutation operators.\n'+
        '\nPhase one of this project included:\n'+
        'Augmenting the PIT tool to implement the following mutation operators and then evaluating the augmented PIT tool on 5 real-world projects from GitHub (with >1000 lines of code and > 50 tests).\n'+
        '* AOD: Replaces an arithmetic expression by each one of the operands. For example a + b ⇒ a and a + b ⇒ b.\n'+
        '* ROR: Replaces the relational operators with each of the other ones. For example: < ⇒ >=, < ⇒ <= or < ⇒!=\n'+
        '* AOR: Replaces an arithmetic expression by each of the other ones. For example a + b ⇒ a ∗b\n'+
        '\nWe, a team of three has completed the phase one of this project.  Initial phase helped us to get an understanding of:\n'+
        '* ASM bytecode engineering framework\n'+
        '* JavaAgent on-the-fly code instrumentation\n'+
        '* Maven build system\n'+
        '\n'+
        'This was part of Software Validation, Verification and Testing coursework.',
        githuburl: 'https://github.com/leejiaj/pitest',
        imageurl1: './assets/AugmentingPITMutationTestingTool1.png',
        imageurl2: './assets/Tulips.jpg',
        imageurl3: './assets/Tulips.jpg',
        imageurl4: './assets/Tulips.jpg',
        imageurl5: './assets/Tulips.jpg'
    },
    {
        id: 6,
        title: 'Library Management System',
        coursename: 'Database Design',
        shortdescription: 'Web development project using AngularJS, Bootstrap, HTML, CSS, WampServer, PHP and MySQL',
        description: 'Web development project using AngularJS, Bootstrap, HTML, CSS, WampServer, PHP and MySQL. Functionalities of the Library Management System includes\n\n'+
        '* Book Search and Checkout\n'+
        '* Check in Book\n'+
        '* Add New Borrower\n'+
        '* Handle Fines\n\n'+
        'This project is done as part of Database Design coursework.',
        githuburl: 'https://github.com/leejiaj/LibraryManagementSystem',
        imageurl1: './assets/LibraryManagementSystem1.png',
        imageurl2: './assets/Tulips.jpg',
        imageurl3: './assets/Tulips.jpg',
        imageurl4: './assets/Tulips.jpg',
        imageurl5: './assets/Tulips.jpg'
    },
    {
        id: 7,
        title: 'Breakout Game',
        coursename: 'Human Computer Interaction',
        shortdescription: 'Android Game Development',
        description: '\nAndroid Game Development. Goal of this Breakout Game is to bounce a ball off a paddle to break bricks at the top of the screen. \n'+
        '​\nThere are different colored blocks with different scores. The game is won when all the bricks are broken before losing three lives. Total score at any point in time is shown on top right part of the game screen. The total lives left at any point in time are shown on the top left part of the game screen. The game can be started by touching anywhere on the initial screen.The touchscreen is used to move the paddle. The paddle moves to the touched location.\n'+
        '\n'+
        'If the ball hits the bottom (not the paddle) player loses one life. If the player loses all three lives the Game is over. Game Over screen is displayed with the options to see the scores. If the player breaks all the bricks, player wins the game. A new screen appears congratulating the player on winning the game. On the new screen the scores will be present.\n'+
        '\n'+
        'There are two options available for the player at any time\n'+
        '1) Start a New Game\n'+
        '2) View High Scores\n'+
        '\nAccelerometer sensor is used to display a small text on screen.\n'+
        'A text file is used to store the scores.\n'+
        'This project is done as part of Human Computer Interaction coursework.\n',
        githuburl: '',
        imageurl1: './assets/BreakoutGame1.png',
        imageurl2: './assets/Tulips.jpg',
        imageurl3: './assets/Tulips.jpg',
        imageurl4: './assets/Tulips.jpg',
        imageurl5: './assets/Tulips.jpg'
    },
    {
        id: 8,
        title: 'Personal Homepage',
        coursename: 'Web Programming Languages',
        shortdescription: 'Personal Homepage',
        description: 'Created a personal homepage and uploaded it to UTD web server.  This is a basic page using HTML5, CSS and Bootstrap. This was part of Web Programming Languages coursework.',
        githuburl: '',
        imageurl1: './assets/portfolio.PNG',
        imageurl2: './assets/Tulips.jpg',
        imageurl3: './assets/Tulips.jpg',
        imageurl4: './assets/Tulips.jpg',
        imageurl5: './assets/Tulips.jpg'
    }
  ];