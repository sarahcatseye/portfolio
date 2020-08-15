var modal = document.getElementById('myModal');
var preview = $('.art-box');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.art-box').click(function(){
    modal.style.display = "block";
    var newSrc = this.dataset.src;
    modalImg.attr('src', newSrc);
    if (screen.width >= 800) {
      console.log(screen.width);
      console.log("resizing");
      if (this.dataset.type === "comic") {
        $('.modal-content').css({"height": "auto", "width": "50%"});
      } else {
        $('.modal-content').css({"width": "auto", "height": "75%"});
      }
    }
    captionText.innerHTML = this.dataset.caption;
});
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}