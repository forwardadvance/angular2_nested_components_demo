// Exercise - A little web app

// We are going to create a small web page using components that will render information about a single user / product / cat.
// We won't be passing the cat into the component yet, we'll get to this in the next section.
// Use the examples above to create an app component that contains three child components:

// A Header
// A Cat
// A Footer

// You will need to create each component separately, and then pass them in to to app component in the directives array.
// Later we will look at passing data into our component and sending it back out again.

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:`
    `
  })
  .Class({
    constructor: function() {
    }
  });



// Declare all modules in here
var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  });


// Finally bootstrap
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);
