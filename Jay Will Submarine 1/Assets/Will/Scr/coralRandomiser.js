#pragma strict

var coral = new GameObject[9];

function Awake () {
	//get children and put in array
	//FillCoral();
	RandomiseCoral();
}

function FillCoral () {
	var j = 0;
	for (var i = 0; i < transform.childCount; i++) {
		if (transform.GetChild(i).name == "Coral") {
			coral[i] = transform.GetChild(j).gameObject;
			j++;
		}
	}
}

function RandomiseCoral () {
      for (i in coral) {
            var rng : float = Random.value;
            var spawn : boolean = (rng > 0.7f) ? true : false;
            i.SetActive(spawn ? true : false);
      }
}