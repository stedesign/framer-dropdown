require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Dropdown":[function(require,module,exports){
exports.Dropdown = function(layerA, layerB, layerAbgColour, updateSelector) {
  var defaultColour;
  document.body.style.cursor = "auto";
  defaultColour = layerA.backgroundColor.color;
  if (layerB.visible) {
    layerB.visible = false;
  }
  layerA.style = {
    "cursor": "pointer"
  };
  layerA.onMouseOver(function() {
    if (layerAbgColour === void 0) {
      layerA.backgroundColor = defaultColour;
    } else {
      layerA.backgroundColor = layerAbgColour;
    }
    return layerA.onMouseOut(function() {
      return layerA.backgroundColor = defaultColour;
    });
  });
  return layerA.onClick(function() {
    var i, j, len, option, ref, results;
    if (layerB.visible) {
      layerB.visible = false;
    } else {
      layerB.visible = true;
    }
    layerB.opacity = 1;
    ref = layerB.children;
    results = [];
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      option = ref[i];
      if (updateSelector === true) {
        layerB.children[i].onClick(function(event, layer) {
          return layerA.selectChild("text").text = layer.text;
        });
      }
      layerB.children[i].style = {
        "cursor": "pointer"
      };
      results.push(layerB.children[i].onClick(function() {
        return layerB.visible = false;
      }));
    }
    return results;
  });
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvRHJvcGRvd24uY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIERyb3Bkb3duIGZ1bmN0aW9uXG5leHBvcnRzLkRyb3Bkb3duID0gKGxheWVyQSwgbGF5ZXJCLCBsYXllckFiZ0NvbG91ciwgdXBkYXRlU2VsZWN0b3IpIC0+XG5cdFxuXHQjIFJlc2V0IHRoZSBjdXJzb3IgdG8gbm9ybWFsXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJhdXRvXCJcblx0XG5cdGRlZmF1bHRDb2xvdXIgPSBsYXllckEuYmFja2dyb3VuZENvbG9yLmNvbG9yXG5cblx0aWYgbGF5ZXJCLnZpc2libGVcblx0XHRsYXllckIudmlzaWJsZSA9IGZhbHNlXG5cdFxuXHQjIE1vdXNlIEhvdmVyXG5cdGxheWVyQS5zdHlsZSA9IFxuXHRcdFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG5cblx0bGF5ZXJBLm9uTW91c2VPdmVyIC0+IFxuXG5cdFx0aWYgbGF5ZXJBYmdDb2xvdXIgPT0gdW5kZWZpbmVkXG5cdFx0XHRsYXllckEuYmFja2dyb3VuZENvbG9yID0gZGVmYXVsdENvbG91clxuXHRcdGVsc2UgXG5cdCAgXHRsYXllckEuYmFja2dyb3VuZENvbG9yID0gbGF5ZXJBYmdDb2xvdXJcdFxuXG5cdFx0IyBJbnN0YW50bHkgc3dpdGNoIHRvIHRoZSBzdGF0ZSBcblx0XHRsYXllckEub25Nb3VzZU91dCAtPlxuXHRcdCAgbGF5ZXJBLmJhY2tncm91bmRDb2xvciA9IGRlZmF1bHRDb2xvdXJcblxuXHQjIFNob3cgb3IgaGlkZSBpdHMgbWVudVx0XHRcblx0bGF5ZXJBLm9uQ2xpY2sgLT5cdFx0XHRcblxuXHRcdGlmIGxheWVyQi52aXNpYmxlXG5cdFx0XHRsYXllckIudmlzaWJsZSA9IGZhbHNlXG5cdFx0ZWxzZVxuXHRcdFx0bGF5ZXJCLnZpc2libGUgPSB0cnVlXG5cblx0XHRsYXllckIub3BhY2l0eSA9IDEgICBcblxuXHRcdCMgRm9yIGVhY2ggbWVudSBvcHRpb25cblx0XHRmb3Igb3B0aW9uLCBpIGluIGxheWVyQi5jaGlsZHJlblxuXHRcdFx0aWYgdXBkYXRlU2VsZWN0b3IgPT0gdHJ1ZVxuXHRcdFx0XHQjIFdoZW4gaXQncyBjbGlja2VkXG5cdFx0XHRcdGxheWVyQi5jaGlsZHJlbltpXS5vbkNsaWNrIChldmVudCwgbGF5ZXIpIC0+XG5cdFx0XHRcdFx0IyBTaG93IHRoZSBzZWxlY3RlZCBvcHRpb24gaW4gdGhlIGRyb3AgZG93blxuXHRcdFx0XHRcdGxheWVyQS5zZWxlY3RDaGlsZChcInRleHRcIikudGV4dCA9IGxheWVyLnRleHRcblxuXHRcdFx0IyBVcGRhdGUgdGhlIGN1cnNvciBvbiBob3ZlclxuXHRcdFx0bGF5ZXJCLmNoaWxkcmVuW2ldLnN0eWxlID0gXG5cdFx0XHRcdFwiY3Vyc29yXCI6IFwicG9pbnRlclwiXG5cblx0XHRcdCMgQ2xvc2UgbW9kYWwgYWZ0ZXIgc2VsZWN0aW9uXHRcblx0XHRcdGxheWVyQi5jaGlsZHJlbltpXS5vbkNsaWNrIC0+XG5cdFx0XHRcdGxheWVyQi52aXNpYmxlID0gZmFsc2Vcblx0XHRcdFx0IiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFDQUE7QURDQSxPQUFPLENBQUMsUUFBUixHQUFtQixTQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLGNBQWpCLEVBQWlDLGNBQWpDO0FBR2xCLE1BQUE7RUFBQSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFwQixHQUE2QjtFQUU3QixhQUFBLEdBQWdCLE1BQU0sQ0FBQyxlQUFlLENBQUM7RUFFdkMsSUFBRyxNQUFNLENBQUMsT0FBVjtJQUNDLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLE1BRGxCOztFQUlBLE1BQU0sQ0FBQyxLQUFQLEdBQ0M7SUFBQSxRQUFBLEVBQVUsU0FBVjs7RUFFRCxNQUFNLENBQUMsV0FBUCxDQUFtQixTQUFBO0lBRWxCLElBQUcsY0FBQSxLQUFrQixNQUFyQjtNQUNDLE1BQU0sQ0FBQyxlQUFQLEdBQXlCLGNBRDFCO0tBQUEsTUFBQTtNQUdFLE1BQU0sQ0FBQyxlQUFQLEdBQXlCLGVBSDNCOztXQU1BLE1BQU0sQ0FBQyxVQUFQLENBQWtCLFNBQUE7YUFDaEIsTUFBTSxDQUFDLGVBQVAsR0FBeUI7SUFEVCxDQUFsQjtFQVJrQixDQUFuQjtTQVlBLE1BQU0sQ0FBQyxPQUFQLENBQWUsU0FBQTtBQUVkLFFBQUE7SUFBQSxJQUFHLE1BQU0sQ0FBQyxPQUFWO01BQ0MsTUFBTSxDQUFDLE9BQVAsR0FBaUIsTUFEbEI7S0FBQSxNQUFBO01BR0MsTUFBTSxDQUFDLE9BQVAsR0FBaUIsS0FIbEI7O0lBS0EsTUFBTSxDQUFDLE9BQVAsR0FBaUI7QUFHakI7QUFBQTtTQUFBLDZDQUFBOztNQUNDLElBQUcsY0FBQSxLQUFrQixJQUFyQjtRQUVDLE1BQU0sQ0FBQyxRQUFTLENBQUEsQ0FBQSxDQUFFLENBQUMsT0FBbkIsQ0FBMkIsU0FBQyxLQUFELEVBQVEsS0FBUjtpQkFFMUIsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsTUFBbkIsQ0FBMEIsQ0FBQyxJQUEzQixHQUFrQyxLQUFLLENBQUM7UUFGZCxDQUEzQixFQUZEOztNQU9BLE1BQU0sQ0FBQyxRQUFTLENBQUEsQ0FBQSxDQUFFLENBQUMsS0FBbkIsR0FDQztRQUFBLFFBQUEsRUFBVSxTQUFWOzttQkFHRCxNQUFNLENBQUMsUUFBUyxDQUFBLENBQUEsQ0FBRSxDQUFDLE9BQW5CLENBQTJCLFNBQUE7ZUFDMUIsTUFBTSxDQUFDLE9BQVAsR0FBaUI7TUFEUyxDQUEzQjtBQVpEOztFQVZjLENBQWY7QUExQmtCIn0=
