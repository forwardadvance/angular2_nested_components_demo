
var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent, CatComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  });
