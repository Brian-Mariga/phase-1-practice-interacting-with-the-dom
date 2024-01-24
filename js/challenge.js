document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter");
  const minus = document.getElementById("minus");
  const plus = document.getElementById("plus");
  const heart = document.getElementById("heart");
  const pause = document.getElementById("pause");
  const submit = document.getElementById("submit");
  const commentForm = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");

  let count = 0;
  let timer = setInterval(() => {
    if (count < Number.MAX_SAFE_INTEGER) {
      count++;
      counter.innerText = count;
    }
  }, 1000);

  plus.addEventListener("click", () => {
    count++;
    counter.innerText = count;
  });

  minus.addEventListener("click", () => {
    count--;
    counter.innerText = count;
  });

  pause.addEventListener("click", () => {
    if (pause.innerText === "pause") {
      clearInterval(timer);
      plus.disabled = true;
      minus.disabled = true;
      heart.disabled = true;
      submit.disabled = true;
      pause.innerText = "resume";
    } else {
      timer = setInterval(() => {
        if (count < Number.MAX_SAFE_INTEGER) {
          count++;
          counter.innerText = count;
        }
      }, 1000);
      plus.disabled = false;
      minus.disabled = false;
      heart.disabled = false;
      submit.disabled = false;
      pause.innerText = "pause";
    }
  });

  const likesMap = {};
  heart.addEventListener("click", () => {
    const likes = document.querySelector(".likes");

    if (likesMap[count]) {
      likesMap[count]++;
      const li = likes.querySelector(`[data-number="${count}"]`);
      li.innerText = `Number ${count} is liked ${likesMap[count]} times`;
    } else {
      likesMap[count] = 1;
      const li = document.createElement("li");
      li.dataset.number = count;
      li.innerText = `Number ${count} is liked 1 time`;
      likes.appendChild(li);
    }
  });

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const comment = commentInput.value.trim();

    if (comment !== "") {
      const commentItem = document.getElementById("list");
      const commentList = document.createElement("li");
      commentList.innerText = comment;
      commentItem.appendChild(commentList);
      commentInput.value = "";
    }
  });
});
