$(document).ready(function() {
  $(".t_subject").each( function() {
    var post = $(this);
    var postText = $(this)[0].innerText;
    var divExists = function (post) {
      divs = post.find("div.popcontents")
      if (divs.size() == 0) {
        return false;
      } else {
        return divs;
      }
    };

    window.dd = post;
    
    if (postText.trim().substr(-4) != "(nm)") {
      var div = divExists(post);
      if (!div) {
        var a = post.find("a").eq(1);
        newDiv = $("<div style='display:inline;margin-top:-5px;background:rgba(228,232,237,0.9);border-radius:5px;color:#000;position:absolute;z-index:98;padding:5px 15px;border: 1px solid navy;'/>")
          .addClass("popcontents")
          .css("margin-left", 20)
          .hide();
        $(newDiv).load(a[0].href + " #m_body > div")
          .appendTo(post);
      }
    }
  });
  $(".t_subject").hover(
    function() {
      var post = $(this);
      var div = post.find("div.popcontents");
      if (div.size() != 0) {
        div.show();
      }
    }, function() {
      var post = $(this);
      var div = post.find("div.popcontents");
      if (div.size() != 0) {
        div.hide();
      }
    }
  );
});