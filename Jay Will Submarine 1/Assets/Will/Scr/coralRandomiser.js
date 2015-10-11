#pragma strict

var coral = new GameObject[9];

function RandomiseCoral () {
      for (i in coral) {
            var rng : float = Random.value;
            var spawn : boolean = (rng > 0.7f) ? true : false;
            if (!spawn) i.SetActive(false);
      }
}

function Start () {
      RandomiseCoral();
}
