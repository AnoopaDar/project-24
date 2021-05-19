class Iron {
    constructor(x, y,width,height) {
      var options = {
        'density':0.8,
        'friction': 3,
        'restitution':30
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    };
    display(){
    
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('yellow')
      rectMode(CENTER)
      rect(this.x, this.y, this.width, this.height);
      pop();
    };
  };
  