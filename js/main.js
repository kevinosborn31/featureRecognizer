let flipHorizontal = false;
let imageElement = document.getElementById('image');
// prompt user to enter image URL
let img = window.prompt("Enter Image URL to see your most prominent feature");
document.getElementById("image").src = img;
posenet.load().then(function(net) {
  const pose = net.estimateSinglePose(imageElement, {
    flipHorizontal: true
  });
  return pose;
}).then(function(pose){
  console.log(pose);
  let prominentFeature;
  let highestScore = 0;

  // find the highest score
  for ( i=0; i < pose.keypoints.length; i++) {
    if (pose.keypoints[i].score > highestScore) {
      highestScore = pose.keypoints[i].score;
      prominentFeature = pose.keypoints[i].part;
    }
  }
  alert(`Your most prominent feature is: Your ${prominentFeature}`);
});
