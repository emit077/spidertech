$(document).ready(function () {
  // hide the page loader
  setTimeout(function () {
    $("#loading-screen").fadeOut(1000);
    $(".loading-content").fadeOut(400);
  }, 1000);

  /* include components */
  let includes = document.getElementsByTagName("include");
  for (var i = 0; i < includes.length; i++) {
    let include = includes[i];
    load_file(includes[i].attributes.src.value, function (text) {
      include.insertAdjacentHTML("afterend", text);
      include.remove();
    });
  }
  function load_file(filename, callback) {
    fetch(filename)
      .then((response) => response.text())
      .then((text) => callback(text));
  }
});

function opennavbar(type) {
  if (type == "open") $("#mobileMenuModel").width("60%");
  else $("#mobileMenuModel").width("0%");
}
