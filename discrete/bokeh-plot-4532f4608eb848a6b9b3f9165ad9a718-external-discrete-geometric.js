(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("4b0bab2c-5a17-41fe-bdf5-1c2387b4eed9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4b0bab2c-5a17-41fe-bdf5-1c2387b4eed9' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"61a2276f-cc6d-461b-bcd3-d26f63071af4":{"roots":{"references":[{"attributes":{},"id":"5040","type":"WheelZoomTool"},{"attributes":{},"id":"5119","type":"UnionRenderers"},{"attributes":{},"id":"5044","type":"HelpTool"},{"attributes":{},"id":"5120","type":"Selection"},{"attributes":{"data_source":{"id":"5087"},"glyph":{"id":"5095"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5096"},"selection_glyph":null,"view":{"id":"5098"}},"id":"5097","type":"GlyphRenderer"},{"attributes":{},"id":"5039","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"5095","type":"Circle"},{"attributes":{"text":" "},"id":"5054","type":"Title"},{"attributes":{"source":{"id":"5088"}},"id":"5093","type":"CDSView"},{"attributes":{"overlay":{"id":"5045"}},"id":"5041","type":"BoxZoomTool"},{"attributes":{},"id":"5042","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"5096","type":"Circle"},{"attributes":{},"id":"5043","type":"ResetTool"},{"attributes":{"source":{"id":"5087"}},"id":"5098","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"5101","type":"Segment"},{"attributes":{"data_source":{"id":"5087"},"glyph":{"id":"5100"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5101"},"selection_glyph":null,"view":{"id":"5103"}},"id":"5102","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"5110"}]},"id":"5111","type":"Column"},{"attributes":{"end":1,"format":"0[.]00","js_property_callbacks":{"change:value":[{"id":"5104"}]},"start":0,"step":0.01,"title":"\\u03b8","value":0.5},"id":"5105","type":"Slider"},{"attributes":{"source":{"id":"5087"}},"id":"5103","type":"CDSView"},{"attributes":{"args":{"arg1":{"id":"5105"},"arg2":{"id":"5105"},"arg3":{"id":"5105"},"discrete":true,"dist":"geometric","n":400,"source_c":{"id":"5088"},"source_p":{"id":"5087"},"xrange":{"id":"5023"}},"code":"function arange(start, stop) {\\n\\tvar x = [];\\n\\tfor (var i = start; i &lt; stop; i++) x.push(i);\\n\\treturn x;\\n}\\n\\nfunction discrete_cdf(cumsum, y_p) {\\n    var y_c = [];\\n\\n    y_c.push(cumsum, cumsum);\\n    for (var i = 0; i &lt; y_p.length; i++) {\\n        cumsum += y_p[i];\\n        y_c.push(cumsum, cumsum);\\n    }\\n\\n    return y_c;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_discrete(probFun, x_p, y_p, arg1, arg2, arg3) {\\n    // Compute CDF\\n    var cumsum = 0.0;\\n    for (var i = 0; i &lt; x_p[0]; i++) {\\n        cumsum += probFun(x_p[i], arg1, arg2, arg3);\\n    }\\n\\n    y_c = discrete_cdf(cumsum, y_p);\\n    return y_c;\\n}\\n\\nfunction probFun(x, theta, {}, {}) {\\n\\tif (theta == 1) {\\n\\t\\tif (x == 0) return 1.0;\\n\\t\\treturn 0.0;\\n\\t}\\n\\n    if (theta == 0) return 0.0;\\n\\n    if (x &lt; 0) return NaN;\\n\\n\\treturn Math.exp(x * Math.log(1-theta) + Math.log(theta));\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points for discrete distributions\\nif (dist == &#x27;bernoulli&#x27;) {\\n\\txRangeMin = 0.0;\\n\\txRangeMax = 1.0;\\n}\\nelse if (dist == &#x27;categorical&#x27;) {\\n\\txRangeMin = 1;\\n\\txRangeMax = x_p.length;\\n}\\nelse {\\n  \\txRangeMin = Math.max(0, Math.floor(xRangeMin));\\n\\txRangeMax = Math.floor(xRangeMax);\\n}\\n\\n// x-values to evaluate PMF and CDF\\nx_p = arange(xRangeMin, xRangeMax+1);\\nlet xSize = xRangeMax - xRangeMin;\\n\\nx_c = [];\\nfor (var i = 0; i &lt; x_p.length; i++) x_c.push(x_p[i], x_p[i]);\\n\\nx_c.unshift(Math.max(xRangeMin - 0.05 * xSize, xRangeMin - 0.95));\\nx_c.push(Math.min(xRangeMax + 0.05 * xSize, xRangeMax + 0.95));\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PMF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_discrete(probFun, \\n\\tx_c, source_p.data[&#x27;y_p&#x27;], arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"5104","type":"CustomJS"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"5078","type":"BoxAnnotation"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5109"}]},"value":"1","width":70},"id":"5107","type":"TextInput"},{"attributes":{"axis":{"id":"5031"},"ticker":null},"id":"5034","type":"Grid"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5108"}]},"value":"0","width":70},"id":"5106","type":"TextInput"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"5045","type":"BoxAnnotation"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"5105"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"5108","type":"CustomJS"},{"attributes":{},"id":"5121","type":"UnionRenderers"},{"attributes":{"width":30},"id":"5112","type":"Spacer"},{"attributes":{},"id":"5122","type":"Selection"},{"attributes":{"height":10},"id":"5139","type":"Spacer"},{"attributes":{"children":[[{"id":"5020"},0,0],[{"id":"5112"},0,1],[{"id":"5053"},0,2]]},"id":"5135","type":"GridBox"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"5105"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"5109","type":"CustomJS"},{"attributes":{"children":[{"id":"5106"},{"id":"5105"},{"id":"5107"}]},"id":"5110","type":"Row"},{"attributes":{"toolbar":{"id":"5136"}},"id":"5137","type":"ToolbarBox"},{"attributes":{"toolbars":[{"id":"5046"},{"id":"5079"}],"tools":[{"id":"5039"},{"id":"5040"},{"id":"5041"},{"id":"5042"},{"id":"5043"},{"id":"5044"},{"id":"5072"},{"id":"5073"},{"id":"5074"},{"id":"5075"},{"id":"5076"},{"id":"5077"}]},"id":"5136","type":"ProxyToolbar"},{"attributes":{},"id":"5036","type":"BasicTicker"},{"attributes":{"data_source":{"id":"5088"},"glyph":{"id":"5090"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5091"},"selection_glyph":null,"view":{"id":"5093"}},"id":"5092","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"5091","type":"Line"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"5100","type":"Segment"},{"attributes":{"data":{"x":{"__ndarray__":"ZmZmZmZm7r8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAABAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAAEEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAHEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAiQAAAAAAAACJAAAAAAAAAJEAAAAAAAAAkQAAAAAAAACZAAAAAAAAAJkAAAAAAAAAoQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAALEAAAAAAAAAuQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAwQAAAAAAAADFAAAAAAAAAMUAAAAAAAAAyQAAAAAAAADJAAAAAAAAAM0AAAAAAAAAzQAAAAAAAADRAAAAAAAAANEAzMzMzM/M0QA==","dtype":"float64","order":"little","shape":[44]},"y_c":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA/AAAAAAAA4D8AAAAAAADoPwAAAAAAAOg/AAAAAAAA7D8AAAAAAADsPwAAAAAAAO4/AAAAAAAA7j8AAAAAAADvPwAAAAAAAO8/AAAAAACA7z8AAAAAAIDvPwAAAAAAwO8/AAAAAADA7z8AAAAAAODvPwAAAAAA4O8/AAAAAADw7z8AAAAAAPDvPwAAAAAA+O8/AAAAAAD47z8AAAAAAPzvPwAAAAAA/O8/AAAAAAD+7z8AAAAAAP7vPwAAAAAA/+8/AAAAAAD/7z8AAAAAgP/vPwAAAACA/+8/AAAAAMD/7z8AAAAAwP/vPwAAAADg/+8/AAAAAOD/7z8AAAAA8P/vPwAAAADw/+8/AAAAAPj/7z8AAAAA+P/vPwAAAAD8/+8/AAAAAPz/7z8AAAAA/v/vPwAAAAD+/+8/AAAAAP//7z8AAAAA///vPw==","dtype":"float64","order":"little","shape":[44]}},"selected":{"id":"5122"},"selection_policy":{"id":"5121"}},"id":"5088","type":"ColumnDataSource"},{"attributes":{},"id":"5126","type":"BasicTickFormatter"},{"attributes":{},"id":"5065","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5039"},{"id":"5040"},{"id":"5041"},{"id":"5042"},{"id":"5043"},{"id":"5044"}]},"id":"5046","type":"Toolbar"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"5090","type":"Line"},{"attributes":{},"id":"5115","type":"BasicTickFormatter"},{"attributes":{"axis_label":"y","formatter":{"id":"5128"},"ticker":{"id":"5065"}},"id":"5064","type":"LinearAxis"},{"attributes":{"data":{"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y_p":{"__ndarray__":"AAAAAAAA4D8AAAAAAADQPwAAAAAAAMA/AAAAAAAAsD8AAAAAAACgPwAAAAAAAJA/AAAAAAAAgD8AAAAAAABwPwAAAAAAAGA/AAAAAAAAUD8AAAAAAABAPwAAAAAAADA/AAAAAAAAID8AAAAAAAAQPwAAAAAAAAA/AAAAAAAA8D4AAAAAAADgPgAAAAAAANA+AAAAAAAAwD4AAAAAAACwPgAAAAAAAKA+","dtype":"float64","order":"little","shape":[21]}},"selected":{"id":"5120"},"selection_policy":{"id":"5119"}},"id":"5087","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"5064"},"ticker":null},"id":"5067","type":"Grid"},{"attributes":{"end":1.05,"start":-0.05},"id":"5086","type":"Range1d"},{"attributes":{},"id":"5060","type":"LinearScale"},{"attributes":{},"id":"5073","type":"WheelZoomTool"},{"attributes":{"text":"Geometric"},"id":"5021","type":"Title"},{"attributes":{},"id":"5062","type":"LinearScale"},{"attributes":{"axis_label":"CDF","formatter":{"id":"5126"},"ticker":{"id":"5069"}},"id":"5068","type":"LinearAxis"},{"attributes":{"axis":{"id":"5068"},"dimension":1,"ticker":null},"id":"5071","type":"Grid"},{"attributes":{},"id":"5128","type":"BasicTickFormatter"},{"attributes":{},"id":"5069","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5072"},{"id":"5073"},{"id":"5074"},{"id":"5075"},{"id":"5076"},{"id":"5077"}]},"id":"5079","type":"Toolbar"},{"attributes":{},"id":"5077","type":"HelpTool"},{"attributes":{},"id":"5072","type":"PanTool"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"5064"}],"border_fill_alpha":0,"center":[{"id":"5067"},{"id":"5071"}],"frame_height":175,"frame_width":300,"left":[{"id":"5068"}],"renderers":[{"id":"5092"}],"title":{"id":"5054"},"toolbar":{"id":"5079"},"toolbar_location":null,"x_range":{"id":"5023"},"x_scale":{"id":"5060"},"y_range":{"id":"5086"},"y_scale":{"id":"5062"}},"id":"5053","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"5078"}},"id":"5074","type":"BoxZoomTool"},{"attributes":{},"id":"5075","type":"SaveTool"},{"attributes":{},"id":"5076","type":"ResetTool"},{"attributes":{},"id":"5117","type":"BasicTickFormatter"},{"attributes":{"js_property_callbacks":{"change:end":[{"id":"5104"}],"change:start":[{"id":"5104"}]},"range_padding":0},"id":"5023","type":"DataRange1d"},{"attributes":{},"id":"5032","type":"BasicTicker"},{"attributes":{"axis":{"id":"5035"},"dimension":1,"ticker":null},"id":"5038","type":"Grid"},{"attributes":{"children":[{"id":"5111"},{"id":"5139"},{"id":"5138"}]},"id":"5140","type":"Column"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"5031"}],"border_fill_alpha":0,"center":[{"id":"5034"},{"id":"5038"}],"frame_height":175,"frame_width":300,"left":[{"id":"5035"}],"renderers":[{"id":"5097"},{"id":"5102"}],"title":{"id":"5021"},"toolbar":{"id":"5046"},"toolbar_location":null,"x_range":{"id":"5023"},"x_scale":{"id":"5027"},"y_range":{"id":"5025"},"y_scale":{"id":"5029"}},"id":"5020","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5025","type":"DataRange1d"},{"attributes":{"children":[{"id":"5135"},{"id":"5137"}]},"id":"5138","type":"Row"},{"attributes":{"axis_label":"PMF","formatter":{"id":"5115"},"ticker":{"id":"5036"}},"id":"5035","type":"LinearAxis"},{"attributes":{},"id":"5029","type":"LinearScale"},{"attributes":{"axis_label":"y","formatter":{"id":"5117"},"ticker":{"id":"5032"}},"id":"5031","type":"LinearAxis"},{"attributes":{},"id":"5027","type":"LinearScale"}],"root_ids":["5140"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"61a2276f-cc6d-461b-bcd3-d26f63071af4","root_ids":["5140"],"roots":{"5140":"4b0bab2c-5a17-41fe-bdf5-1c2387b4eed9"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();