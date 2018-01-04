(function() {
  var init, isMobile, setupExamples, setupHero, _Drop;

  _Drop = Drop.createContext({
    classPrefix: 'drop'
  });

  isMobile = $(window).width() < 567;

  init = function() {
    setupHero();
    return setupExamples();
  };

  setupHero = function() {
    var drop;
    return drop = new _Drop({
      target: $('.hero .drop-target')[0],
      classes: 'drop-theme-arrows-bounce-dark drop-hero',
      position: 'bottom center',
      constrainToWindow: false,
      constrainToScrollParent: false,
      openOn: 'always',
      content: '<h1>farpras</h1>\n<h2>Under construction!<br/></h2>\n<p>\n<a class="button" href="http://twitter.com/farpras">Twitter</a>\n</p>'
    });
  };

  setupExamples = function() {
    return $('.example').each(function() {
      var $example, $target, content, drop, openOn, theme;
      $example = $(this);
      theme = $example.data('theme');
      openOn = $example.data('open-on') || 'click';
      $target = $example.find('.drop-target');
      $target.addClass(theme);
      content = $example.find('.drop-content').html();
      return drop = new _Drop({
        target: $target[0],
        classes: theme,
        position: 'bottom center',
        constrainToWindow: true,
        constrainToScrollParent: false,
        openOn: openOn,
        content: content
      });
    });
  };

  init();

}).call(this);
