class Stone {
    constructor(x, y,width,height) {
      var options = {
        'density':0.8,
        'friction': 0.9,
        'restitution':12
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
      fill('red')
      rectMode(CENTER)
      rect(this.x, this.y, this.width, this.height);
      pop();
    };
  };
  