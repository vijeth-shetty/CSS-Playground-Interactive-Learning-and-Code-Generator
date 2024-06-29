const image = document.getElementById("uploaded-image");
const ranges = document.querySelectorAll(".settings input");
const styles = document.getElementById("styles");
const copyButton = document.getElementById("copy-styles");

ranges.forEach((slider) => {
  slider.addEventListener("input", updateFilters);
});

function updateFilters() {
  const blur = document.getElementById("blur").value + "px";
  const brightness = document.getElementById("brightness").value + "%";
  const contrast = document.getElementById("contrast").value + "%";
  const grayscale = document.getElementById("grayscale").value + "%";
  const hueRotate = document.getElementById("hue-rotate").value + "deg";
  const invert = document.getElementById("invert").value + "%";
  const saturate = document.getElementById("saturate").value + "%";
  const sepia = document.getElementById("sepia").value + "%";
  const opacity=document.getElementById('opacity').value + "%";

  const filterString = `blur(${blur}) brightness(${brightness}) opacity(${opacity}) contrast(${contrast}) grayscale(${grayscale}) hue-rotate(${hueRotate}) invert(${invert}) saturate(${saturate}) sepia(${sepia})`;

  image.style.filter = filterString;

  styles.textContent=`filter:blur(${blur}) \n\tbrightness(${brightness}) \n\topacity(${opacity}) \n\tcontrast(${contrast}) \n\tgrayscale(${grayscale}) \n\thue-rotate(${hueRotate}) \n\tinvert(${invert}) \n\tsaturate(${saturate}) \n\tsepia(${sepia});`;
}
function copyStyles() {
  styles.select();
  document.execCommand("copy");
  copyButton.innerText = "Copied!";
  setTimeout(() => {
      copyButton.innerText = "Copy Styles";
  }, 3000);
}

updateFilters();
