#pragma strict

var nextLocation : float = 20;
var section : GameObject;
var hasSpawnedNextSection : boolean = false;
var obstacles : GameObject;

function Start () {
        obstacles = GameObject.Find("obstacles");
}

function Update () {

}

function OnTriggerEnter (other : Collider) {
        if (!hasSpawnedNextSection){
                var next = Instantiate(section, Vector3(transform.position.x, transform.position.y, transform.position.z + nextLocation), transform.rotation);
                next.name = "Section";
                next.transform.parent = obstacles.transform;
                hasSpawnedNextSection = true;
        }
}
