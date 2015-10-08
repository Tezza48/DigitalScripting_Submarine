var distance : float =10;
var speed :float =10;
var xPos :float;
var yPos :float;
var zPos :float;

function Update(){
		transform.position.x = Input.GetAxis("Horizontal") * distance;
		transform.position.y = Input.GetAxis("Vertical") * distance;
		transform.position.z += speed * Time.deltaTime;
}
