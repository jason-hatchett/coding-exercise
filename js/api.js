(function($) {

  var Poller = function(options, callback) {
    var defaults = {
      frequency: 60,
      limit: 10
    };
    this.callback = callback;
    this.config = $.extend(defaults, options);
    this.hardcoreVeggies = [
      'Adzuki Beans',
      'Asparagus',
      'Black-eyed Peas',
      'Brussels Sprouts',
      'Carrots',
      'Collard Greens',
      'Parsnips',
      'Rhubarb',
      'Yams',
      'Watercress'
    ];
  };

  Poller.prototype.getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  Poller.prototype.getData = function() {
    var hardcoreVeg,
        i,
        len,
        results = [];
    for (i = 0, len = this.hardcoreVeggies.length; i < len; i++) {
      hardcoreVeg = this.hardcoreVeggies[i];
      results.push({
        name: hardcoreVeg,
        count: this.getRandomNumber(0, 2000)
      });
    }
    return results;
  };

  Poller.prototype.processData = function() {
    return this.sortData(this.getData()).slice(0, this.config.limit);
  };

  Poller.prototype.sortData = function(data) {
    return data.sort(function(a, b) {
      return b.count - a.count;
    });
  };

  Poller.prototype.start = function() {
    var _this = this;
    this.interval = setInterval((function() {
      _this.callback(_this.processData());
    }), this.config.frequency * 1000);
    this.callback(this.processData());
    return this;
  };

  Poller.prototype.stop = function() {
    clearInterval(this.interval);
    return this;
  };

  if (window.spredfast == null) {
    window.spredfast = {
      Poller: Poller
    };
  }

}(jQuery));