var distance : float =10;



function Update(){
		transform.position =Vector3(Input.GetAxis("Horizontal") * distance, Input.GetAxis("Vertical") * distance, -10);
}


