/* CANVAS FROU */
var c = document.getElementById('frou');
c.width = window.innerWidth;
c.height = window.innerHeight;

var d = c.getContext('2d');
var i;
var tri = {
  obj: {
    num: 18,
    step: Math.PI / 180,
    rad: 5
  },

  draw_: function($) {
    i += .2;
    d.globalCompositeOperation = 'xor';
    var rot = Math.sin(3) * 5 * Math.PI;
    d.scale(2, 2.5);
    d.beginPath();
    d.strokeStyle = 'hsla(009%,95%,1)';
    d.arc(10, 10, 2, 0, Math.PI * 5);
    d.stroke();
    d.beginPath();
    d.strokeStyle = 'hsla(009%,95%,1)';
    d.rotate(rot);
    d.arc(10, 10, 1, 0, 5 * Math.PI, false);
    d.stroke();
    d.scale(2.5, 4.5);
    d.beginPath();
    d.strokeStyle = 'hsla(009%,95%,1)';
    d.arc(20, 20, 25, 0, 5 * Math.PI, false);
    d.stroke();
    d.scale(2.5, 2.5);
  }
};

function Obj(mid, off_, step) {
  this.mid = mid;
  this.off_ = off_;
  this.step = step;
}

Obj.prototype.draw = function($) {
  this.step += tri.obj.step;
  d.save();
  d.translate(this.mid.x, this.mid.y);
  d.rotate(this.step + this.off_);
  tri.draw_(d);
  d.restore();

};

var arr = [];
for (var i = 0; i < tri.obj.num; i++) {
  var t = i * Math.PI * 2 / tri.obj.num;
  arr.push(new Obj({
    x: c.width / 2 + tri.obj.rad * Math.cos(t),
    y: c.height / 2 + tri.obj.rad * Math.sin(t)
  }, t, Math.PI * i * 3));
}

var go = function() {
  d.save();
  d.fillStyle = 'hsla(0,0%,95%,1)';
  d.fillRect(0, 0, c.width, c.height);
  for (var i in arr) {
    arr[i].draw($);
  }
  d.restore();
}

var run = function() {
  window.requestAnimationFrame(run);
  go();
  i -= .5;
}

window.addEventListener('resize', function() {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
}, false);

run();