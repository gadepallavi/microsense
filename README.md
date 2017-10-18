# `microsense`

- Display a list of readers in the system.
- Display the health status of each reader alongside that reader.
- Allow the user to select a set of readers, select an operation from those available, and press a "Start Job" button to run a job.
- If a reader has a health status of `ERROR`, do not allow the user to start a job with it. Disabled the "Start Job" button and showed message
to the user saying cannot proceed with the ERROR status.
- If a reader has a health status of `WARNING`, allow the user to start the job, but display a warning message bellow the job start button.
- Considered some test cases and added validation to the page.



## Getting Started

To get you started you can simply clone the `microsense` repository and install the dependencies:

### Prerequisites

You need git to clone the repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `microsense`

Clone the `microsense` repository using git:

```
git clone https://github.com/gadepallavi/microsense.git
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files


### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```
Now browse the index.html


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    data/
     health.js
     job.js
     operations.js
     readers.js
  view1/                --> the view1 view template and logic
    view1.html            --> the view html template
    view1.js              --> the controller logic
    view1_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```
