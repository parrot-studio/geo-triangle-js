class GeoTriangle
  constructor: (x1, y1, x2, y2, x3, y3) ->
    this.set_coordinate(x1, y1)
    this.set_coordinate(x2, y2)
    this.set_coordinate(x3, y3)
    this

  exist: (lat, lon) ->
    return false unless lat
    return false unless lon
    return false if lat > 90.0
    return false if lon > 180.0
    true
    
  get_coordinates: ->
    @coordinates ?= []
    @coordinates

  set_coordinate: (x, y) -> 
    @coordinates ?= []
    @coordinates.push [x, y] if this.exist(x, y)
    this

  valid_coordinates: ->
    return false unless @coordinates
    return false unless @coordinates.length is 3
    for co in @coordinates
      return false unless co.length is 2
    true
  
  calc_center: ->
    return unless this.valid_coordinates()
    x = 0
    y = 0
    rev = Math.pow(10, 6)
    for co in @coordinates
      x += co[0] * rev
      y += co[1] * rev
    x = Math.round(x / 3) / rev
    y = Math.round(y / 3) / rev
    if this.exist(x, y) then {lat: x, lon: y} else {}

  center: ->
    @_center ?= this.calc_center()
    @_center

