var GeoTriangle;
GeoTriangle = (function() {
  function GeoTriangle(x1, y1, x2, y2, x3, y3) {
    this.set_coordinate(x1, y1);
    this.set_coordinate(x2, y2);
    this.set_coordinate(x3, y3);
    this;
  }
  GeoTriangle.prototype.exist = function(lat, lon) {
    if (!lat) {
      return false;
    }
    if (!lon) {
      return false;
    }
    if (lat > 90.0) {
      return false;
    }
    if (lon > 180.0) {
      return false;
    }
    return true;
  };
  GeoTriangle.prototype.get_coordinates = function() {
    var _ref;
        if ((_ref = this.coordinates) != null) {
      _ref;
    } else {
      this.coordinates = [];
    };
    return this.coordinates;
  };
  GeoTriangle.prototype.set_coordinate = function(x, y) {
    var _ref;
        if ((_ref = this.coordinates) != null) {
      _ref;
    } else {
      this.coordinates = [];
    };
    if (this.exist(x, y)) {
      this.coordinates.push([x, y]);
    }
    return this;
  };
  GeoTriangle.prototype.valid_coordinates = function() {
    var co, _i, _len, _ref;
    if (!this.coordinates) {
      return false;
    }
    if (this.coordinates.length !== 3) {
      return false;
    }
    _ref = this.coordinates;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      co = _ref[_i];
      if (co.length !== 2) {
        return false;
      }
    }
    return true;
  };
  GeoTriangle.prototype.calc_center = function() {
    var co, rev, x, y, _i, _len, _ref;
    if (!this.valid_coordinates()) {
      return;
    }
    x = 0;
    y = 0;
    rev = Math.pow(10, 6);
    _ref = this.coordinates;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      co = _ref[_i];
      x += co[0] * rev;
      y += co[1] * rev;
    }
    x = Math.round(x / 3) / rev;
    y = Math.round(y / 3) / rev;
    if (this.exist(x, y)) {
      return {
        lat: x,
        lon: y
      };
    } else {
      return {};
    }
  };
  GeoTriangle.prototype.center = function() {
    var _ref;
        if ((_ref = this._center) != null) {
      _ref;
    } else {
      this._center = this.calc_center();
    };
    return this._center;
  };
  return GeoTriangle;
})();

