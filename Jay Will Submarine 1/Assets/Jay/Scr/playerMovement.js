var distance : float =10;



function Update(){
		transform.position.x = Input.GetAxis("Horizontal") * distance;
		transform.position.y = Input.GetAxis("Vertical") * distance;
}
