const savedLikes = localStorage.getItem("saved-likes");

if (savedLikes) {
  document.getElementById("num").textContent = savedLikes;
}

function goinsta() {
  location.href = "https://instagram.com/0neonly?igshid=YmMyMTA2M2Y=";
}

function goblog() {
  location.href = "https://blog.naver.com/onlyone0608_";
}

function likeup() {
  let like = document.getElementById("num").textContent;
  document.getElementById("num").textContent = Number(like) + 1;
  like = Number(like) + 1;
  localStorage.setItem("saved-likes", String(like));
}
