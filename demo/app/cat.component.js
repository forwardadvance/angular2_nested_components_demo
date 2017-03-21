var CatComponent = ng.core
  .Component({
    selector: "cat",
    template:
    `
      <div>Twoodles the Cat {{x}}</div>
    `
  })
  .Class({
    constructor: function() {
      this.x = Math.random();
    }
  });
