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
        id: 9,
        title: 'Real time sentiment analysis of hashtags in Twitter data',
        coursename: 'Big Data Management and Analytics',
        shortdescription: 'Framework using Apache Spark Streaming, ElasticSearch and Kibana',
        description: 'We were required to implement the framework that performs sentiment analysis of particular hashtags in twitter data in real time using Apache Spark Streaming, ElasticSearch and Kibana.\n\n'+
        'For example, we want to do the sentiment analysis for all the tweets for #guncontrolnow and show their statistics(e.g.,positive, neutral, negative) in Kibana.\n\n'+
        'The steps for this includes,\n'+
        '* Get tweets via scrapper (stream.py)\n'+
        '* Write a sentiment analysis program to predict sentiment of the tweet message\n'+
        '* Visualize the findings using ElasticSearch/Kibana\n'+
        '\n'+
        'Scrapper -> Sentiment Analyzer/Common topic fnder -> Visualizer(ElasticSearch/Kibana)\n'+
        '\n'+
        '1) Scrapper\n'+
        'The scrapper collects tweets and pre-process them for analytics. It is a standalone program written in Python and performs the following:\n'+
        '1. Collect tweets in real-time with particular hashtag. For example, we will collect all tweets with #guncontrolnow.\n'+
        '2. After getting tweets, we filter them by removing emoji symbols and special characters and discard any noisy tweet that do not belong to #guncontrolnow. The returned tweet contains both the meta data (e.g., location) and text contents. We keep the text content and the location meta data.\n'+
        '3. After filtering, we convert the location meta data of each tweet back to its geolocation info by calling google geo API and send the text and geolocation info to spark streaming.\n'+
        '4. The scrapper program runs infinitely and takes hash tags as input parameters while running.\n\n'+
        
        '2) Sentiment Analyzer\n'+
        'Sentiment Analyzer determines whether a piece of tweet is positive, neutral or negative. The sentiment analyzer I used is Stanford CoreNLP.\n'+
        'For each hashtag, we perform sentiment analysis using Stanford CoreNLP and output sentiment and geolocation of each tweet to some external bases (elasticsearch) and send them to kibana for visualization.\n\n'+
        
        '3) Visualizer\n'+
        'In this part, we do the following. Install ElasticSearch and Kibana. Create an index for visualization. Create a data table to show the sentiment of each tweet, i.e., "sentiment | tweet". Then, create a number of coordinate maps to show the geolocation distribution of tweets. More specifically, first coordinate map will show the geolocation distribution of all tweets, regardless of sentiment related to #guncontrolnow. Second and Third coordinate map will show geolocation distributions of positive tweets and negative tweets, respectively. When we send data from spark to ElasticSearch, we added a time stamp. In the dashboard, the refresh time is set to 2 min as an example.\n\n'+
        
        'Tools, Languages and Techniques used for this coursework:\n'+
        'Twitter(Stream source), pyspark, google geo api, Stanford CoreNLP, elasticsearch, kibana (data table and coordinate maps)\n',
        githuburl: '',
        imageurl1: './assets/ECommerceApp1.png',
        imageurl2: './assets/Tulips.jpg',
        imageurl3: './assets/Tulips.jpg',
        imageurl4: './assets/Tulips.jpg',
        imageurl5: './assets/Tulips.jpg'
    },
    {
        id: 10,
        title: 'Programming Project - Dynamic Programming',
        coursename: 'Design and Analysis of Computer Algorithms',
        shortdescription: 'Recurrence and Dynamic Program for the problem of optimizing the net profit',
        description: 'Recurrence and Dynamic Program for the problem of optimizing the net profit. The scenario is given below. This programming project is implemented in Java.\n\n'+
        'Scenario: A jeweller has G units of gold, and has signed contracts to make n jewellery items, j1..jn. The following are the conditions, i = 1..n:\n\n'+
        
        '* Item ji requires wi units of gold to make, and generates a profit of pi per unit of ji. The agreement is to supply a minimum quantity of ni, and a maximum quantity of xi.\n'+
        '* Additional quantities of ji beyond xi cannot be sold and do not generate any profit.\n'+
        '* Not meeting the minimum quantities promised in the contracts triggers penalty fines. For ji, if the quantity supplied (qi) is below ni, then the jeweller has to pay a fine of fi for each unit below the minimum, with a cap of total fine of ci, i.e., when qi < ni, fine for ji is calculated as min(fi * (ni − qi), ci).\n\n'+
        
        'Write a recurrence for the problem of optimizing the net profit (total profit generated by items supplied minus the fines paid), and the number of different optimal solutions that are possible. Prove the correctness of these recurrences. Write a dynamic program corresponding to the recurrences. Write a program that implements the DP.\n\n'+
        
        'Input specification: If no command line parameter is supplied, or the first parameter is “−”, the input is read from the console. Otherwise, the first parameter is used as the name of a file that has the input. The first two numbers in the input are G and n. The next n lines of the input have 7 integers each: i,wi, pi, ni, xi, fi, ci. If there are additional lines in the input, ignore them.\n\n'+
        
        'Output specification: Normally the program prints just 2 numbers in the output: maximum net profit, and the number of optimal solutions. If there is a second command line parameter, whose value is greater than 0, then the list of distinct optimal solutions are enumerated, one per line.\n'+
        '\n'+
        'Sample input and output:\n\n'+
        '20 2\n'+
        '1 2 10 8 10 2 2\n'+
        '2 2 10 8 10 2 4\n'+
        '# Output:\n'+
        '98 3\n'+
        '# List of optimal solutions:\n'+
        '2 8\n'+
        '1 9\n'+
        '0 10\n',
        githuburl: '',
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