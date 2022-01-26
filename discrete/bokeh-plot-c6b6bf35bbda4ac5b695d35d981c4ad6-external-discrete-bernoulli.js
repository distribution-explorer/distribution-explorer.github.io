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
    
      
      
    
      var element = document.getElementById("5424cf55-acc1-4f0a-8e5e-6f18bb3f5e7e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5424cf55-acc1-4f0a-8e5e-6f18bb3f5e7e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f4b4af62-7501-4c22-9ea4-e52d73221baa":{"defs":[],"roots":{"references":[{"attributes":{"children":[{"id":"4736"},{"id":"4738"}]},"id":"4739","type":"Row"},{"attributes":{"axis_label":"y","formatter":{"id":"4730"},"major_label_policy":{"id":"4729"},"ticker":{"id":"4666"}},"id":"4665","type":"LinearAxis"},{"attributes":{},"id":"4674","type":"WheelZoomTool"},{"attributes":{"height":10},"id":"4740","type":"Spacer"},{"attributes":{"axis":{"id":"4669"},"dimension":1,"ticker":null},"id":"4672","type":"Grid"},{"attributes":{"axis_label":"CDF","formatter":{"id":"4727"},"major_label_policy":{"id":"4726"},"ticker":{"id":"4670"}},"id":"4669","type":"LinearAxis"},{"attributes":{},"id":"4715","type":"AllLabels"},{"attributes":{},"id":"4670","type":"BasicTicker"},{"attributes":{},"id":"4678","type":"HelpTool"},{"attributes":{},"id":"4716","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"4712"},{"id":"4740"},{"id":"4739"}]},"id":"4741","type":"Column"},{"attributes":{},"id":"4673","type":"PanTool"},{"attributes":{"overlay":{"id":"4679"}},"id":"4675","type":"BoxZoomTool"},{"attributes":{},"id":"4676","type":"SaveTool"},{"attributes":{},"id":"4677","type":"ResetTool"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"4706"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"4710","type":"CustomJS"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"4696","type":"Circle"},{"attributes":{"data_source":{"id":"4689"},"glyph":{"id":"4691"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4692"},"view":{"id":"4694"}},"id":"4693","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"4707"},{"id":"4706"},{"id":"4708"}]},"id":"4711","type":"Row"},{"attributes":{"overlay":{"id":"4646"}},"id":"4642","type":"BoxZoomTool"},{"attributes":{"end":1,"js_property_callbacks":{"change:value":[{"id":"4705"}]},"start":0,"step":0.01,"title":"\\u03b8","value":0.5},"id":"4706","type":"Slider"},{"attributes":{"width":30},"id":"4713","type":"Spacer"},{"attributes":{},"id":"4734","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"4691","type":"Line"},{"attributes":{},"id":"4726","type":"AllLabels"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"4706"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"4709","type":"CustomJS"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"4697","type":"Circle"},{"attributes":{"end":1.05,"start":-0.05},"id":"4687","type":"Range1d"},{"attributes":{},"id":"4628","type":"LinearScale"},{"attributes":{},"id":"4718","type":"AllLabels"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4709"}]},"value":"0","width":70},"id":"4707","type":"TextInput"},{"attributes":{"axis_label":"PMF","formatter":{"id":"4716"},"major_label_policy":{"id":"4715"},"ticker":{"id":"4637"}},"id":"4636","type":"LinearAxis"},{"attributes":{},"id":"4727","type":"BasicTickFormatter"},{"attributes":{},"id":"4643","type":"SaveTool"},{"attributes":{},"id":"4644","type":"ResetTool"},{"attributes":{},"id":"4719","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"4737"}},"id":"4738","type":"ToolbarBox"},{"attributes":{},"id":"4641","type":"WheelZoomTool"},{"attributes":{"axis_label":"y","formatter":{"id":"4719"},"major_label_policy":{"id":"4718"},"ticker":{"id":"4633"}},"id":"4632","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"4702","type":"Segment"},{"attributes":{"data_source":{"id":"4688"},"glyph":{"id":"4701"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4702"},"view":{"id":"4704"}},"id":"4703","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"4636"},"dimension":1,"ticker":null},"id":"4639","type":"Grid"},{"attributes":{},"id":"4722","type":"Selection"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4710"}]},"value":"1","width":70},"id":"4708","type":"TextInput"},{"attributes":{"source":{"id":"4688"}},"id":"4704","type":"CDSView"},{"attributes":{},"id":"4637","type":"BasicTicker"},{"attributes":{},"id":"4723","type":"UnionRenderers"},{"attributes":{"args":{"arg1":{"id":"4706"},"arg2":{"id":"4706"},"arg3":{"id":"4706"},"discrete":true,"dist":"bernoulli","n":400,"source_c":{"id":"4689"},"source_p":{"id":"4688"},"xrange":{"id":"4624"}},"code":"function arange(start, stop) {\\n\\tvar x = [];\\n\\tfor (var i = start; i &lt; stop; i++) x.push(i);\\n\\treturn x;\\n}\\n\\nfunction discrete_cdf(cumsum, y_p) {\\n    var y_c = [];\\n\\n    y_c.push(cumsum, cumsum);\\n    for (var i = 0; i &lt; y_p.length; i++) {\\n        if (!isNaN(y_p[i])) cumsum += y_p[i];\\n        y_c.push(cumsum, cumsum);\\n    }\\n\\n    return y_c;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_discrete(probFun, x_p, y_p, arg1, arg2, arg3) {\\n    // Compute CDF\\n    var cumsum = 0.0;\\n    var summand = 0.0;\\n    for (var i = 0; i &lt; x_p[0]; i++) {\\n        summand = probFun(x_p[i], arg1, arg2, arg3);\\n        if (!isNaN(summand)) cumsum += summand;\\n    }\\n\\n    y_c = discrete_cdf(cumsum, y_p);\\n    return y_c;\\n}\\n\\nfunction probFun(x, theta, {}, {}) {\\n\\tif (x == 0) return 1 - theta;\\n\\telse if (x == 1) return theta;\\n\\telse return NaN;\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points for discrete distributions\\nif (dist == &#x27;bernoulli&#x27;) {\\n\\txRangeMin = 0.0;\\n\\txRangeMax = 1.0;\\n}\\nelse if (dist == &#x27;categorical&#x27;) {\\n\\txRangeMin = 1;\\n\\txRangeMax = x_p.length;\\n}\\nelse {\\n  \\txRangeMin = Math.max(0, Math.floor(xRangeMin));\\n\\txRangeMax = Math.floor(xRangeMax);\\n}\\n\\n// x-values to evaluate PMF and CDF\\nx_p = arange(xRangeMin, xRangeMax+1);\\nlet xSize = xRangeMax - xRangeMin;\\n\\nx_c = [];\\nfor (var i = 0; i &lt; x_p.length; i++) x_c.push(x_p[i], x_p[i]);\\n\\nx_c.unshift(Math.max(xRangeMin - 0.05 * xSize, xRangeMin - 0.95));\\nx_c.push(Math.min(xRangeMax + 0.05 * xSize, xRangeMax + 0.95));\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PMF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_discrete(probFun, \\n\\tx_c, source_p.data[&#x27;y_p&#x27;], arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"4705","type":"CustomJS"},{"attributes":{"axis":{"id":"4632"},"ticker":null},"id":"4635","type":"Grid"},{"attributes":{},"id":"4640","type":"PanTool"},{"attributes":{},"id":"4645","type":"HelpTool"},{"attributes":{"children":[{"id":"4711"}]},"id":"4712","type":"Column"},{"attributes":{"text":" "},"id":"4655","type":"Title"},{"attributes":{},"id":"4729","type":"AllLabels"},{"attributes":{},"id":"4633","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"4673"},{"id":"4674"},{"id":"4675"},{"id":"4676"},{"id":"4677"},{"id":"4678"}]},"id":"4680","type":"Toolbar"},{"attributes":{},"id":"4626","type":"DataRange1d"},{"attributes":{"range_padding":0},"id":"4624","type":"DataRange1d"},{"attributes":{},"id":"4630","type":"LinearScale"},{"attributes":{},"id":"4730","type":"BasicTickFormatter"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"4632"}],"border_fill_alpha":0,"center":[{"id":"4635"},{"id":"4639"}],"frame_height":175,"frame_width":300,"left":[{"id":"4636"}],"renderers":[{"id":"4698"},{"id":"4703"}],"title":{"id":"4622"},"toolbar":{"id":"4647"},"toolbar_location":null,"x_range":{"id":"4624"},"x_scale":{"id":"4628"},"y_range":{"id":"4626"},"y_scale":{"id":"4630"}},"id":"4621","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"4689"}},"id":"4694","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"4679","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"4665"},"ticker":null},"id":"4668","type":"Grid"},{"attributes":{},"id":"4661","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"4692","type":"Line"},{"attributes":{},"id":"4666","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqb8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAADwP83MzMzMzPA/","dtype":"float64","order":"little","shape":[6]},"y_c":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA/AAAAAAAA4D8AAAAAAADwPwAAAAAAAPA/","dtype":"float64","order":"little","shape":[6]}},"selected":{"id":"4733"},"selection_policy":{"id":"4734"}},"id":"4689","type":"ColumnDataSource"},{"attributes":{},"id":"4663","type":"LinearScale"},{"attributes":{"data":{"x":[0,1],"y_p":{"__ndarray__":"AAAAAAAA4D8AAAAAAADgPw==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"4722"},"selection_policy":{"id":"4723"}},"id":"4688","type":"ColumnDataSource"},{"attributes":{"text":"Bernoulli"},"id":"4622","type":"Title"},{"attributes":{"toolbars":[{"id":"4647"},{"id":"4680"}],"tools":[{"id":"4640"},{"id":"4641"},{"id":"4642"},{"id":"4643"},{"id":"4644"},{"id":"4645"},{"id":"4673"},{"id":"4674"},{"id":"4675"},{"id":"4676"},{"id":"4677"},{"id":"4678"}]},"id":"4737","type":"ProxyToolbar"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"4665"}],"border_fill_alpha":0,"center":[{"id":"4668"},{"id":"4672"}],"frame_height":175,"frame_width":300,"left":[{"id":"4669"}],"renderers":[{"id":"4693"}],"title":{"id":"4655"},"toolbar":{"id":"4680"},"toolbar_location":null,"x_range":{"id":"4624"},"x_scale":{"id":"4661"},"y_range":{"id":"4687"},"y_scale":{"id":"4663"}},"id":"4654","subtype":"Figure","type":"Plot"},{"attributes":{"active_multi":null,"tools":[{"id":"4640"},{"id":"4641"},{"id":"4642"},{"id":"4643"},{"id":"4644"},{"id":"4645"}]},"id":"4647","type":"Toolbar"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"4701","type":"Segment"},{"attributes":{"source":{"id":"4688"}},"id":"4699","type":"CDSView"},{"attributes":{"data_source":{"id":"4688"},"glyph":{"id":"4696"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4697"},"view":{"id":"4699"}},"id":"4698","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"4646","type":"BoxAnnotation"},{"attributes":{},"id":"4733","type":"Selection"},{"attributes":{"children":[[{"id":"4621"},0,0],[{"id":"4713"},0,1],[{"id":"4654"},0,2]]},"id":"4736","type":"GridBox"}],"root_ids":["4741"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"f4b4af62-7501-4c22-9ea4-e52d73221baa","root_ids":["4741"],"roots":{"4741":"5424cf55-acc1-4f0a-8e5e-6f18bb3f5e7e"}}];
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