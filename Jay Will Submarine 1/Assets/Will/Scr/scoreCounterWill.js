#pragma strict
public var score : int = 0;
public var scoreDisplay : UnityEngine.UI.Text;

function Update () {
  scoreDisplay.text = "score: " + score.ToString();
}

function Score () {
  score++;
}
