# AEM React Starter Kit

The project is created as a starter kit to integrate React with AEM. It can either be a SPA application or individual React Component. The project is built based on Adobe's recommended way as per https://helpx.adobe.com/experience-manager/kt/sites/using/getting-started-spa-wknd-tutorial-develop/react.html

# Prerequisites
The following should be installed:

    Java 1.8
    AEM 6.5 or AEM 6.4 + SP2 (port: 6502 for author, 6503 for publish. It can be modified in pom.xml if needed)
    Apache Maven (3.3.9 or newer)
    Node.js v10+
    npm 6+

Start by double checking that the above tools have been installed and available via the command line path. Open up a new terminal and run the following commands:

    java version "1.8.+"
    Java(TM) SE Runtime Environment (build 1.8.0_111-b14)
    Java HotSpot(TM) 64-Bit Server VM (build 25.111-b14, mixed mode)
      
    $ mvn -version
    Apache Maven 3.3.9
    Maven home: /Library/apache-maven-3.3.9
    Java version: 1.8.0_111, vendor: Oracle Corporation
    Java home: /Library/Java/JavaVirtualMachines/jdk1.8.0_111.jdk/Contents/Home/jre
      
    $ node --version
    v10.8.0
      
    $ npm --version
    6.2.0

## Modules

The main parts of the template are:

* react-app: a webpack project for the React application. The App is built and deployed to AEM in the form of a client library via the ui.apps module. see the README beneath the react-app for more details.
* core: Java bundle containing all core functionality like OSGi services, listeners or schedulers, as well as component-related Java code such as servlets or request filters.
* ui.apps: contains the /apps (and /etc) parts of the project, ie JS&CSS clientlibs, components, templates, runmode specific configs as well as Hobbes-tests
* ui.content: contains sample content using the components from the ui.apps

## How to build

To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

Build and deploy the project to a local AEM instance

    mvn clean install -PautoInstallPackage -Padobe-public
    
    Note:
    
    The inclusion of the adobe-public profile as part of the Maven command can be made optional. You can avoid having to include this everytime by updating your settings.xml file to include Adobe's nexus repository.
    
Or to deploy it to a publish instance, run

    mvn clean install -PautoInstallPackagePublish -Padobe-public
    
Or alternatively

    mvn clean install -PautoInstallPackage -Daem.port=4503

Or to deploy only the bundle to the author, run

    mvn clean install -PautoInstallBundle

## Validation

At the end of the successful build and deploy, http://localhost:6502/editor.html/content/wknd-events/react/home.html should work.

## Testing

There are three levels of testing contained in the project:

* unit test in core: this show-cases classic unit testing of the code contained in the bundle. To test, execute:

    mvn clean test

* server-side integration tests: this allows to run unit-like tests in the AEM-environment, ie on the AEM server. To test, execute:

    mvn clean verify -PintegrationTests

* client-side Hobbes.js tests: JavaScript-based browser-side tests that verify browser-side behavior. To test:

    in the browser, open the page in 'Developer mode', open the left panel and switch to the 'Tests' tab and find the generated 'MyName Tests' and run them.


## Maven settings

The project comes with the auto-public repository configured. To setup the repository in your Maven settings, refer to:

    http://helpx.adobe.com/experience-manager/kb/SetUpTheAdobeMavenRepository.html
