(function($) {

  var Poller = function() {
    this.items = {
      veggies: [
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
      ],
      fruits: [
        'Apricots',
        'Blackcurrants',
        'Cherimoya',
        'Dates',
        'Elderberry',
        'Guava',
        'Kumquat',
        'Miracle Fruit',
        'Purple Mangosteen',
        'Satsuma'
      ]
    };
  };
  
  Poller.prototype.getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  Poller.prototype.getData = function(type) {
    var item,
        i,
        len,
        list = this.items[type] || [],
        results = [];
    for (i = 0, len = list.length; i < len; i++) {
      item = list[i];
      results.push({
        name: item,
        count: this.getRandomNumber(0, 2000)
      });
    }
    return results;
  };

  Poller.prototype.processData = function(data, limit) {
    var _this = this;
    return this.sortData(data).slice(0, limit);
  };

  Poller.prototype.sortData = function(data) {
    return data.sort(function(a, b) {
      return b.count - a.count;
    });
  };

  Poller.prototype.poll = function(options, cb) {
    var _this = this;
    var defaults = {
      type: 'veggies',
      limit: 10
    };
    var config = $.extend(defaults, options);
    var callback = cb;

    setTimeout(function() {
      callback(_this.processData(_this.getData(config.type), config.limit));
    }, this.getRandomNumber(400, 2000));
  };

  if (window.spredfast == null) {
    window.spredfast = {
      Poller: Poller
    };
  }

}(jQuery));