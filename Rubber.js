class Rubber{
	constructor(x,y,r)
	{
		var options={
			restitution: 0.3,
			fiction: 5,
			density: 1

		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
		var angle = this.body.angle;
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(RADIUS)
			angle(80);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(0,0,this.r,this.r);

			pop()
	}

}