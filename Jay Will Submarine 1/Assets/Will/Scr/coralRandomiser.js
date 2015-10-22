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
	var threshold = (Mathf.Exp((-Time.timeSinceLevelLoad - 180)/300 - 0.4f) + 0.3);
      for (i in coral) {
            var rng : float = Random.value;
            var spawn : boolean = (rng > threshold) ? true : false;
            i.SetActive(spawn ? true : false);
      }
}
