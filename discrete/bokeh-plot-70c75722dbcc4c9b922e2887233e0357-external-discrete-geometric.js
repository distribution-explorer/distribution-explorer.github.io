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
    
      
      
    
      var element = document.getElementById("ada51f5b-f549-436b-b88f-8d07f9de9392");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ada51f5b-f549-436b-b88f-8d07f9de9392' but no matching script tag was found.")
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
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js": "dM3QQsP+wXdHg42wTqW85BjZQdLNNIXqlPw/BgKoExPmTG7ZLML4EGqLMfqHT6ON", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js": "8x57I4YuIfu8XyZfFo0XVr2WAT8EK4rh/uDe3wF7YuW2FNUSNEpJbsPaB1nJ2fz2", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js": "3QTqdz9LyAm2i0sG5XTePsHec3UHWwVsrOL68SYRoAXsafvfAyqtQ+h440+qIBhS"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js"];
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
                    
                  var docs_json = '{"6109c219-4669-4a3b-9a53-aa454ee9471e":{"defs":[],"roots":{"references":[{"attributes":{"active_multi":null,"tools":[{"id":"5509"},{"id":"5510"},{"id":"5511"},{"id":"5512"},{"id":"5513"},{"id":"5514"}]},"id":"5516","type":"Toolbar"},{"attributes":{},"id":"5477","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"5525"},"glyph":{"id":"5527"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5528"},"view":{"id":"5530"}},"id":"5529","type":"GlyphRenderer"},{"attributes":{},"id":"5551","type":"AllLabels"},{"attributes":{"end":1,"js_property_callbacks":{"change:value":[{"id":"5541"}]},"start":0,"step":0.01,"title":"\\u03b8","value":0.5},"id":"5542","type":"Slider"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"5542"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"5545","type":"CustomJS"},{"attributes":{},"id":"5564","type":"AllLabels"},{"attributes":{"axis":{"id":"5472"},"dimension":1,"ticker":null},"id":"5475","type":"Grid"},{"attributes":{"axis_label":"PMF","formatter":{"id":"5552"},"major_label_policy":{"id":"5551"},"ticker":{"id":"5473"}},"id":"5472","type":"LinearAxis"},{"attributes":{},"id":"5565","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"5468"},"ticker":null},"id":"5471","type":"Grid"},{"attributes":{"data_source":{"id":"5524"},"glyph":{"id":"5532"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5533"},"view":{"id":"5535"}},"id":"5534","type":"GlyphRenderer"},{"attributes":{},"id":"5514","type":"HelpTool"},{"attributes":{},"id":"5464","type":"LinearScale"},{"attributes":{"end":1.05,"start":-0.05},"id":"5523","type":"Range1d"},{"attributes":{"source":{"id":"5524"}},"id":"5535","type":"CDSView"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"5537","type":"Segment"},{"attributes":{"width":30},"id":"5549","type":"Spacer"},{"attributes":{},"id":"5473","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"5476"},{"id":"5477"},{"id":"5478"},{"id":"5479"},{"id":"5480"},{"id":"5481"}]},"id":"5483","type":"Toolbar"},{"attributes":{"children":[{"id":"5547"}]},"id":"5548","type":"Column"},{"attributes":{"data_source":{"id":"5524"},"glyph":{"id":"5537"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5538"},"view":{"id":"5540"}},"id":"5539","type":"GlyphRenderer"},{"attributes":{},"id":"5567","type":"AllLabels"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5545"}]},"value":"0","width":70},"id":"5543","type":"TextInput"},{"attributes":{},"id":"5497","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"5538","type":"Segment"},{"attributes":{},"id":"5568","type":"BasicTickFormatter"},{"attributes":{"axis_label":"CDF","formatter":{"id":"5565"},"major_label_policy":{"id":"5564"},"ticker":{"id":"5506"}},"id":"5505","type":"LinearAxis"},{"attributes":{"axis":{"id":"5505"},"dimension":1,"ticker":null},"id":"5508","type":"Grid"},{"attributes":{},"id":"5552","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"5543"},{"id":"5542"},{"id":"5544"}]},"id":"5547","type":"Row"},{"attributes":{},"id":"5502","type":"BasicTicker"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5546"}]},"value":"1","width":70},"id":"5544","type":"TextInput"},{"attributes":{},"id":"5510","type":"WheelZoomTool"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"5542"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"5546","type":"CustomJS"},{"attributes":{},"id":"5506","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"5577"}},"id":"5578","type":"ToolbarBox"},{"attributes":{},"id":"5462","type":"DataRange1d"},{"attributes":{"js_property_callbacks":{"change:end":[{"id":"5541"}],"change:start":[{"id":"5541"}]},"range_padding":0},"id":"5460","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"5528","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"5515","type":"BoxAnnotation"},{"attributes":{"text":" "},"id":"5491","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"5532","type":"Circle"},{"attributes":{},"id":"5499","type":"LinearScale"},{"attributes":{},"id":"5513","type":"ResetTool"},{"attributes":{},"id":"5555","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"5525"}},"id":"5530","type":"CDSView"},{"attributes":{},"id":"5512","type":"SaveTool"},{"attributes":{},"id":"5560","type":"Selection"},{"attributes":{},"id":"5561","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"ZmZmZmZm7r8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAABAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAAEEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAHEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAiQAAAAAAAACJAAAAAAAAAJEAAAAAAAAAkQAAAAAAAACZAAAAAAAAAJkAAAAAAAAAoQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAALEAAAAAAAAAuQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAwQAAAAAAAADFAAAAAAAAAMUAAAAAAAAAyQAAAAAAAADJAAAAAAAAAM0AAAAAAAAAzQAAAAAAAADRAAAAAAAAANEAzMzMzM/M0QA==","dtype":"float64","order":"little","shape":[44]},"y_c":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA/AAAAAAAA4D8AAAAAAADoPwAAAAAAAOg/AAAAAAAA7D8AAAAAAADsPwAAAAAAAO4/AAAAAAAA7j8AAAAAAADvPwAAAAAAAO8/AAAAAACA7z8AAAAAAIDvPwAAAAAAwO8/AAAAAADA7z8AAAAAAODvPwAAAAAA4O8/AAAAAADw7z8AAAAAAPDvPwAAAAAA+O8/AAAAAAD47z8AAAAAAPzvPwAAAAAA/O8/AAAAAAD+7z8AAAAAAP7vPwAAAAAA/+8/AAAAAAD/7z8AAAAAgP/vPwAAAACA/+8/AAAAAMD/7z8AAAAAwP/vPwAAAADg/+8/AAAAAOD/7z8AAAAA8P/vPwAAAADw/+8/AAAAAPj/7z8AAAAA+P/vPwAAAAD8/+8/AAAAAPz/7z8AAAAA/v/vPwAAAAD+/+8/AAAAAP//7z8AAAAA///vPw==","dtype":"float64","order":"little","shape":[44]}},"selected":{"id":"5560"},"selection_policy":{"id":"5561"}},"id":"5525","type":"ColumnDataSource"},{"attributes":{},"id":"5554","type":"AllLabels"},{"attributes":{},"id":"5469","type":"BasicTicker"},{"attributes":{},"id":"5559","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"5457"},0,0],[{"id":"5549"},0,1],[{"id":"5490"},0,2]]},"id":"5576","type":"GridBox"},{"attributes":{},"id":"5481","type":"HelpTool"},{"attributes":{"overlay":{"id":"5515"}},"id":"5511","type":"BoxZoomTool"},{"attributes":{},"id":"5558","type":"Selection"},{"attributes":{"overlay":{"id":"5482"}},"id":"5478","type":"BoxZoomTool"},{"attributes":{},"id":"5479","type":"SaveTool"},{"attributes":{},"id":"5476","type":"PanTool"},{"attributes":{"args":{"arg1":{"id":"5542"},"arg2":{"id":"5542"},"arg3":{"id":"5542"},"discrete":true,"dist":"geometric","n":400,"source_c":{"id":"5525"},"source_p":{"id":"5524"},"xrange":{"id":"5460"}},"code":"function arange(start, stop) {\\n\\tvar x = [];\\n\\tfor (var i = start; i &lt; stop; i++) x.push(i);\\n\\treturn x;\\n}\\n\\nfunction discrete_cdf(cumsum, y_p) {\\n    var y_c = [];\\n\\n    y_c.push(cumsum, cumsum);\\n    for (var i = 0; i &lt; y_p.length; i++) {\\n        if (!isNaN(y_p[i])) cumsum += y_p[i];\\n        y_c.push(cumsum, cumsum);\\n    }\\n\\n    return y_c;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_discrete(probFun, x_p, y_p, arg1, arg2, arg3) {\\n    // Compute CDF\\n    var cumsum = 0.0;\\n    var summand = 0.0;\\n    for (var i = 0; i &lt; x_p[0]; i++) {\\n        summand = probFun(x_p[i], arg1, arg2, arg3);\\n        if (!isNaN(summand)) cumsum += summand;\\n    }\\n\\n    y_c = discrete_cdf(cumsum, y_p);\\n    return y_c;\\n}\\n\\nfunction probFun(x, theta, {}, {}) {\\n\\tif (theta == 1) {\\n\\t\\tif (x == 0) return 1.0;\\n\\t\\treturn 0.0;\\n\\t}\\n\\n    if (theta == 0) return 0.0;\\n\\n    if (x &lt; 0) return NaN;\\n\\n\\treturn Math.exp(x * Math.log(1-theta) + Math.log(theta));\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points for discrete distributions\\nif (dist == &#x27;bernoulli&#x27;) {\\n\\txRangeMin = 0.0;\\n\\txRangeMax = 1.0;\\n}\\nelse if (dist == &#x27;categorical&#x27;) {\\n\\txRangeMin = 1;\\n\\txRangeMax = x_p.length;\\n}\\nelse {\\n  \\txRangeMin = Math.max(0, Math.floor(xRangeMin));\\n\\txRangeMax = Math.floor(xRangeMax);\\n}\\n\\n// x-values to evaluate PMF and CDF\\nx_p = arange(xRangeMin, xRangeMax+1);\\nlet xSize = xRangeMax - xRangeMin;\\n\\nx_c = [];\\nfor (var i = 0; i &lt; x_p.length; i++) x_c.push(x_p[i], x_p[i]);\\n\\nx_c.unshift(Math.max(xRangeMin - 0.05 * xSize, xRangeMin - 0.95));\\nx_c.push(Math.min(xRangeMax + 0.05 * xSize, xRangeMax + 0.95));\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PMF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_discrete(probFun, \\n\\tx_c, source_p.data[&#x27;y_p&#x27;], arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"5541","type":"CustomJS"},{"attributes":{},"id":"5480","type":"ResetTool"},{"attributes":{"text":"Geometric"},"id":"5458","type":"Title"},{"attributes":{"children":[{"id":"5576"},{"id":"5578"}]},"id":"5579","type":"Row"},{"attributes":{"source":{"id":"5524"}},"id":"5540","type":"CDSView"},{"attributes":{"height":10},"id":"5580","type":"Spacer"},{"attributes":{"toolbars":[{"id":"5483"},{"id":"5516"}],"tools":[{"id":"5476"},{"id":"5477"},{"id":"5478"},{"id":"5479"},{"id":"5480"},{"id":"5481"},{"id":"5509"},{"id":"5510"},{"id":"5511"},{"id":"5512"},{"id":"5513"},{"id":"5514"}]},"id":"5577","type":"ProxyToolbar"},{"attributes":{"data":{"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y_p":{"__ndarray__":"AAAAAAAA4D8AAAAAAADQPwAAAAAAAMA/AAAAAAAAsD8AAAAAAACgPwAAAAAAAJA/AAAAAAAAgD8AAAAAAABwPwAAAAAAAGA/AAAAAAAAUD8AAAAAAABAPwAAAAAAADA/AAAAAAAAID8AAAAAAAAQPwAAAAAAAAA/AAAAAAAA8D4AAAAAAADgPgAAAAAAANA+AAAAAAAAwD4AAAAAAACwPgAAAAAAAKA+","dtype":"float64","order":"little","shape":[21]}},"selected":{"id":"5558"},"selection_policy":{"id":"5559"}},"id":"5524","type":"ColumnDataSource"},{"attributes":{},"id":"5466","type":"LinearScale"},{"attributes":{"children":[{"id":"5548"},{"id":"5580"},{"id":"5579"}]},"id":"5581","type":"Column"},{"attributes":{"axis_label":"y","formatter":{"id":"5555"},"major_label_policy":{"id":"5554"},"ticker":{"id":"5469"}},"id":"5468","type":"LinearAxis"},{"attributes":{"axis_label":"y","formatter":{"id":"5568"},"major_label_policy":{"id":"5567"},"ticker":{"id":"5502"}},"id":"5501","type":"LinearAxis"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"5501"}],"border_fill_alpha":0,"center":[{"id":"5504"},{"id":"5508"}],"frame_height":175,"frame_width":300,"left":[{"id":"5505"}],"renderers":[{"id":"5529"}],"title":{"id":"5491"},"toolbar":{"id":"5516"},"toolbar_location":null,"x_range":{"id":"5460"},"x_scale":{"id":"5497"},"y_range":{"id":"5523"},"y_scale":{"id":"5499"}},"id":"5490","subtype":"Figure","type":"Plot"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"5468"}],"border_fill_alpha":0,"center":[{"id":"5471"},{"id":"5475"}],"frame_height":175,"frame_width":300,"left":[{"id":"5472"}],"renderers":[{"id":"5534"},{"id":"5539"}],"title":{"id":"5458"},"toolbar":{"id":"5483"},"toolbar_location":null,"x_range":{"id":"5460"},"x_scale":{"id":"5464"},"y_range":{"id":"5462"},"y_scale":{"id":"5466"}},"id":"5457","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"5482","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"5533","type":"Circle"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"5527","type":"Line"},{"attributes":{},"id":"5509","type":"PanTool"},{"attributes":{"axis":{"id":"5501"},"ticker":null},"id":"5504","type":"Grid"}],"root_ids":["5581"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"6109c219-4669-4a3b-9a53-aa454ee9471e","root_ids":["5581"],"roots":{"5581":"ada51f5b-f549-436b-b88f-8d07f9de9392"}}];
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