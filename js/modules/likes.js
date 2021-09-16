export function manageLikes() {
  let totalLikesDisplay = document.getElementById("total-likes");
  let likeButtons = document.querySelectorAll(".like-button");
  let arrayOfLikes = [];

  likeButtons.forEach((likeButton, i) => {
    likeButton.addEventListener("click", function () {
      //console.log(likeButton);
      let isLiked = likeButtons[i].classList.toggle("is-liked");
      let initialValue = document.querySelectorAll(".image-likes");
      if (isLiked == true) {
        let newValue = parseInt(initialValue[i].innerText) + 1;
        initialValue[i].innerText = newValue;
      } else {
        newValue = parseInt(initialValue[i].innerText) - 1;
        initialValue[i].innerText = newValue;
      }
    });
    let totalLikes = parseInt(
      document.querySelectorAll(".image-likes")[i].innerText
    );
    arrayOfLikes.push(totalLikes);
    //console.log(arrayOfLikes);
  });

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let sumTotalLikes = arrayOfLikes.reduce(reducer);
  totalLikesDisplay.innerHTML = sumTotalLikes;

  // Mise à jour de la somme totale des likes en prenant en compte les nouveaux "likes" likés
  likeButtons.forEach((likeButton, i) => {
    likeButton.addEventListener("click", function () {
      let likedImage = document.getElementsByClassName("is-liked");
      //console.log(likedImage);
      let addNewLike = likedImage.length;
      //console.log(addNewLike);
      let newTotalLikes = sumTotalLikes + addNewLike;
      totalLikesDisplay.innerText = newTotalLikes;
    });
  });
}
