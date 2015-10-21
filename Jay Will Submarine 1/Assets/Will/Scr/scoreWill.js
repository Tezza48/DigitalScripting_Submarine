#pragma strict

var scoreCounterWill : scoreCounterWill;

function OnTriggerEnter (other : Collider) {
  if (other.name == "PlayerCamera") {
    scoreCounterWill.Score();
  }
}
