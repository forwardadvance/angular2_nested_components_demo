// directives: [LikeButtonComponent],
// Show that no data is passed in. Tiddles is divorced.

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <cat></cat>
      <cat></cat>
      <cat></cat>
      <cat></cat>
    `
  })
  .Class({
    constructor: function() {

    }
  })


var CatComponent = ng.core
  .Component({
    selector: "cat",
    template:
    `
      Tiddles the Cat
    `
  })
  .Class({
    constructor: function() {}
  })


var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent, CatComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  });


// Finally bootstrap
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);





// Final State
// var CatComponent = ng.core
//   .Component({
//     selector: "cat",
//     template:
//     `
//       Tiddles the Cat
//     `
//   })
//   .Class({
//     constructor: function() {

//     }
//   })


// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     template:
//     `
//       <cat></cat>
//       <cat></cat>
//       <cat></cat>
//       <cat></cat>
//     `,
//     directives: [CatComponent]
//   })
//   .Class({
//     constructor: function() {

//     }
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });


