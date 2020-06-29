$('li').each(function() {
    var back = ["green","blue","gray","yellow","orange","purple","black"];
    var rand = back[Math.floor(Math.random() * back.length)];
    $(this).css('background',rand);
  });