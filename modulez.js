function calc(x) {
  var that = this;

  this.result = 0;

  this.add = (y) => {
    that.result = x + y;

    return that;
  };

  this.minus = (z) => {
    that.result = z - x;

    return that;
  };

  this.res = () => {
    return result;
  };

  return this;
}

const res = calc(5).minus(15).add(10).add(10).add(15).res();
