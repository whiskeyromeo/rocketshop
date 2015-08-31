Created: 8/29/2015
Updated: 8/29/2015

This is a basic e-comm site built using meteor.js


Notes about Meteor:
  Load order is important
  What file you put things in matters
  Anything in lib loaded first, then server, then client.
    Includes their full path.
    Dont depend on load order

  lib is available to both the client and the server...
    Therefore anything declared in the lib folder is immediately available on both ends

  scripts used by the client can be put in the client/scripts directory and they will be directly
  accessible via other js files located in the client directory

  Note on globals:
    From the Meteor site:
      "Use global variables as much as you want: **Meteor generates a
      wrapper around your code so that they are 'global' only to the app
      or package that defined them."
    This does not mean collisions will not happen!
    Say you are using the global Products and decide to use a package that uses that
    very same global...This may require quite a bit of renaming in order
    to mitigate collisions
    there are ways around this...search for namespacing meteor...

Packages(all found via atmospherejs.com:
  Styling
    meteor add twbs:boostrap
    loading screen --> meteor add pcel:loading
  Routing
    meteor add iron:router
  signup/login
    meteor add ian:accounts-ui-bootstrap-3
    meteor add accounts-password
    meteor add accounts-github **requires configuration
    meteor add accounts-google **requires configuration
  roles
    meteor add alanning:roles

Commands from the console:
  Meteor.user()  <--show the current user+properties
  Other commands : http://docs.meteor.com/#/basic/

Interacting with the app via mongo.
  From the console you can change certain things about a particular account:
    ex: Meteor.users.update({_id: "user_id_here123451"}, {$set : {'profile.name' : "Bill Russo"}})
    Note: This does not allow for the changing of user permissions
  An alternative is to go through the console and start mongo in the meteor dash
    meteor mongo
    db.users.update({_id: "user_id_here123451"}, {$set : {roles: ["Administrator"]}})
      **this is allowed, however due to security, from the console this role will not
      show up.

Reset the project(post migration to mongodb or other db) :
  meteor reset

*******DO NOT FORGET TO REMOVE INSECURE AND AUTOPUBLISH******
meteor remove insecure
meteor remove autopublish

meteorjs uses blaze templating engine

In order to use ORM style of interaction check out:
  astronomy
  minimongoid <--requires coffeescript...
  meteor-collection-helpers
  graviton



Testing: Velocity build into meteor --> Velocity.meteor.com
ex: Mocha --> meteor add mike: mocha


