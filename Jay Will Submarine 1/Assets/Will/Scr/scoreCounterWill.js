#pragma strict
public var score : int;
public static var lastScore : int;
public var lastScoreDisplay : UnityEngine.UI.Text;
public var scoreDisplay : UnityEngine.UI.Text;

function Awake () {
  lastScoreDisplay.text = "last score: " + lastScore.ToString();
  score = 0;
}

function Update () {
  scoreDisplay.text = "score: " + score.ToString();
}

function Score () {
  score++;
}

function SaveLastScore () {
    lastScore = score;
}
