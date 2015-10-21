var distance : float =10;
var speed :float =10;
var xPos :float;
var yPos :float;
var zPos :float;

public var scoreCounterWill : scoreCounterWill;

function Update(){
		transform.position.x = Input.GetAxis("Horizontal") * distance;
		transform.position.y = Input.GetAxis("Vertical") * distance;
		transform.position.z += speed * Time.deltaTime;
}

function OnCollisionEnter () {
	scoreCounterWill.SaveLastScore();
	Application.LoadLevel(0);
}
