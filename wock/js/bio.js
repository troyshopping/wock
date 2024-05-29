const bios = ["Front end dev", "best valorant player", "a$gard"];
const bioContainer = document.querySelector('.bio');
let currentBioIndex = 0;

function typeBio(bio) {
  let i = 0;
  const intervalId = setInterval(() => {
    bioContainer.innerHTML = bio.substring(0, i) + '_';
    i++;
    if (i > bio.length) {
      clearInterval(intervalId);
      setTimeout(deleteBio, 1000, bio);
    }
  }, 100);
}

function deleteBio(bio) {
  let i = bio.length;
  const intervalId = setInterval(() => {
    bioContainer.innerHTML = bio.substring(0, i) + '_';
    i--;
    if (i < 0) {
      clearInterval(intervalId);
      currentBioIndex = (currentBioIndex + 1) % bios.length;
      setTimeout(typeBio, 1000, bios[currentBioIndex]);
    }
  }, 100);
}

typeBio(bios[currentBioIndex]);