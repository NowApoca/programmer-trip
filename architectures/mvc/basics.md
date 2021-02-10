BASICS OF MODEL VIEW CONTROLLER architecture


Basically, components are splitted in three categories: Model (where business data and logic is), Views (The interface of the User) and Controllers (where inputs are handled).

Adventages:

# Loose coupling, making them not coupled
# Models can have multiple views in order of different situations, browsers, etc
# Simultaneous development, developers can work in different part of the components without affecting the other part

Tasks of the Model:

# Manage data of the application
# In general if the model is updated, observers note that change and react accoringly
# They can be grouped in Collctions (In the case of Backbone), so they share some propertiers or use cases. (Warning: In a way it couples models)


V (Views) of MVC

# Views are a visual representation of models that present a filtered view of their current state
# A view typically observes a model and is notified when the model changes, allowing the view to update itself accordingly
# Design pattern literature commonly refers to views as “dumb”, given that their knowledge of models and controllers in an application is limited
# Users are able to interact with views, and this includes the ability to read and edit models, however the actual task of updating the model falls to controllers interacting with models



C (Controllers) of MVC

# JavaScript MVC frameworks differ from the conventional MVC the most in its use of controllers. It is that framework authors initially look at the server-side interpretation of MVC, realize that it does not translate 1:1 on the client side, and reinterpret the C in MVC to mean something they feel makes more sense
# Its views and routers act a little similar to a controller, but neither are actually controllers on their own

MVP MODEL VIEW PRESENTER

MVP is similar to MVC, but model and view just interact with the presenter.

# Presenter acts as a “middle-man” between Model and View. Thus, all presentation logic is pushed to the presenter

Tasks of the Presenter:

# retrieve data
# manipulate it
# determine how the data should be displayed in the view

Basically, the Presenter handle the model and the view. As an example of code (source https://medium.com/developers-tomorrow/javascript-interview-question-is-react-an-mvc-or-mvvm-ac2ea2a5127d):
```
// taskPresenter.js

function TaskPresenter (_view) {
  var view;
  var model;
  
  function init () {
    view = _view;
    view.addCheckedHandler (function() {
      view.remove();
    });
  }
  
  var public = {
    getView: function () {
      return view;
    },
    setModel: function (_model) {
      model = _model;
      view.setModel(model);
    }
  }
  
  init();
  return public;
}
```

MVVM or Model - View - View Model

# Models are similar to MVC, but they do not handle behaviour, they just store data
# Views are the same

# Passive View only outputs a display and does not accept any user input. Such a view may also have no real knowledge of the models in our application and could be manipulated by a presenter
# MVVM’s active View contains the data bindings, events, and behaviors, which requires an understanding of the ViewModel
# Although these behaviors can be mapped to properties, the View is still responsible for handling events from the ViewModel
# It’s important to remember that View is not responsible here for handling state ; it keeps this in sync with the ViewModel

# View Models, very similar with Presenters

# The ViewModel can be considered a specialized Controller that acts as a data converter
# It changes Model information into View information, passing commands from the View to the Model
# ViewModel does not just expose Model attributes but also access to other methods and features such as validation
# Views handle their own user interface events, mapping them to the ViewModel as necessary

MVC vs MVP vs MVVM

# The key difference between MVC and its derivatives (MVP & MVVM) is the dependency each layer has on other layers and how tightly bound they are to each other

Is react a MVC, A MVP or a MVVM? As Eric Elliot says, is just the V.

Reply of Eric Elliot: 
```
React is none of the above. It is strictly a view layer that you can plug into with lifecycle events and hooks. The React team recommends pairing it with the Flux architecture — a unidirectional data flow architecture that has little in common with any of what was described here.
```
Source: https://medium.com/developers-tomorrow/javascript-interview-question-is-react-an-mvc-or-mvvm-ac2ea2a5127d


