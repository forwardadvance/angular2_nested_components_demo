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
