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
    
      
      
    
      var element = document.getElementById("08b91acf-1db2-415f-ad1e-7e7fd10f8f9f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '08b91acf-1db2-415f-ad1e-7e7fd10f8f9f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"3bc8378e-5685-4da0-a361-c9bcfa912d35":{"roots":{"references":[{"attributes":{"overlay":{"id":"4289"}},"id":"4285","type":"BoxZoomTool"},{"attributes":{},"id":"4372","type":"UnionRenderers"},{"attributes":{},"id":"4283","type":"PanTool"},{"attributes":{},"id":"4317","type":"WheelZoomTool"},{"attributes":{},"id":"4373","type":"Selection"},{"attributes":{},"id":"4321","type":"HelpTool"},{"attributes":{},"id":"4288","type":"HelpTool"},{"attributes":{},"id":"4316","type":"PanTool"},{"attributes":{"overlay":{"id":"4322"}},"id":"4318","type":"BoxZoomTool"},{"attributes":{},"id":"4287","type":"ResetTool"},{"attributes":{},"id":"4319","type":"SaveTool"},{"attributes":{},"id":"4320","type":"ResetTool"},{"attributes":{},"id":"4280","type":"BasicTicker"},{"attributes":{},"id":"4361","type":"BasicTickFormatter"},{"attributes":{},"id":"4286","type":"SaveTool"},{"attributes":{"axis":{"id":"4279"},"dimension":1,"ticker":null},"id":"4282","type":"Grid"},{"attributes":{"text":"Bernoulli"},"id":"4265","type":"Title"},{"attributes":{},"id":"4359","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"4375"},{"id":"4377"}]},"id":"4378","type":"Row"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4289","type":"BoxAnnotation"},{"attributes":{},"id":"4363","type":"UnionRenderers"},{"attributes":{},"id":"4313","type":"BasicTicker"},{"attributes":{"height":10},"id":"4379","type":"Spacer"},{"attributes":{"toolbars":[{"id":"4290"},{"id":"4323"}],"tools":[{"id":"4283"},{"id":"4284"},{"id":"4285"},{"id":"4286"},{"id":"4287"},{"id":"4288"},{"id":"4316"},{"id":"4317"},{"id":"4318"},{"id":"4319"},{"id":"4320"},{"id":"4321"}]},"id":"4376","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4322","type":"BoxAnnotation"},{"attributes":{},"id":"4364","type":"Selection"},{"attributes":{"axis_label":"PMF","formatter":{"id":"4359"},"ticker":{"id":"4280"}},"id":"4279","type":"LinearAxis"},{"attributes":{"children":[{"id":"4355"},{"id":"4379"},{"id":"4378"}]},"id":"4380","type":"Column"},{"attributes":{"width":30},"id":"4356","type":"Spacer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4283"},{"id":"4284"},{"id":"4285"},{"id":"4286"},{"id":"4287"},{"id":"4288"}]},"id":"4290","type":"Toolbar"},{"attributes":{"end":1.05,"start":-0.05},"id":"4330","type":"Range1d"},{"attributes":{},"id":"4271","type":"LinearScale"},{"attributes":{},"id":"4284","type":"WheelZoomTool"},{"attributes":{"source":{"id":"4332"}},"id":"4337","type":"CDSView"},{"attributes":{"text":" "},"id":"4298","type":"Title"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"4275"}],"border_fill_alpha":0,"center":[{"id":"4278"},{"id":"4282"}],"frame_height":175,"frame_width":300,"left":[{"id":"4279"}],"renderers":[{"id":"4341"},{"id":"4346"}],"title":{"id":"4265"},"toolbar":{"id":"4290"},"toolbar_location":null,"x_range":{"id":"4267"},"x_scale":{"id":"4271"},"y_range":{"id":"4269"},"y_scale":{"id":"4273"}},"id":"4264","subtype":"Figure","type":"Plot"},{"attributes":{"range_padding":0},"id":"4267","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4316"},{"id":"4317"},{"id":"4318"},{"id":"4319"},{"id":"4320"},{"id":"4321"}]},"id":"4323","type":"Toolbar"},{"attributes":{"axis":{"id":"4275"},"ticker":null},"id":"4278","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"4335","type":"Line"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"4308"}],"border_fill_alpha":0,"center":[{"id":"4311"},{"id":"4315"}],"frame_height":175,"frame_width":300,"left":[{"id":"4312"}],"renderers":[{"id":"4336"}],"title":{"id":"4298"},"toolbar":{"id":"4323"},"toolbar_location":null,"x_range":{"id":"4267"},"x_scale":{"id":"4304"},"y_range":{"id":"4330"},"y_scale":{"id":"4306"}},"id":"4297","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqb8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAADwP83MzMzMzPA/","dtype":"float64","order":"little","shape":[6]},"y_c":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA/AAAAAAAA4D8AAAAAAADwPwAAAAAAAPA/","dtype":"float64","order":"little","shape":[6]}},"selected":{"id":"4373"},"selection_policy":{"id":"4372"}},"id":"4332","type":"ColumnDataSource"},{"attributes":{},"id":"4368","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"4344","type":"Segment"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"4349"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"4352","type":"CustomJS"},{"attributes":{"data_source":{"id":"4331"},"glyph":{"id":"4339"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4340"},"selection_glyph":null,"view":{"id":"4342"}},"id":"4341","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4332"},"glyph":{"id":"4334"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4335"},"selection_glyph":null,"view":{"id":"4337"}},"id":"4336","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"4334","type":"Line"},{"attributes":{"children":[[{"id":"4264"},0,0],[{"id":"4356"},0,1],[{"id":"4297"},0,2]]},"id":"4375","type":"GridBox"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"4339","type":"Circle"},{"attributes":{"axis_label":"y","formatter":{"id":"4361"},"ticker":{"id":"4276"}},"id":"4275","type":"LinearAxis"},{"attributes":{},"id":"4269","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"4340","type":"Circle"},{"attributes":{},"id":"4309","type":"BasicTicker"},{"attributes":{},"id":"4273","type":"LinearScale"},{"attributes":{"toolbar":{"id":"4376"}},"id":"4377","type":"ToolbarBox"},{"attributes":{"source":{"id":"4331"}},"id":"4342","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"4345","type":"Segment"},{"attributes":{},"id":"4276","type":"BasicTicker"},{"attributes":{"data_source":{"id":"4331"},"glyph":{"id":"4344"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4345"},"selection_glyph":null,"view":{"id":"4347"}},"id":"4346","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"4354"}]},"id":"4355","type":"Column"},{"attributes":{"axis_label":"y","formatter":{"id":"4370"},"ticker":{"id":"4309"}},"id":"4308","type":"LinearAxis"},{"attributes":{"data":{"x":[0,1],"y_p":{"__ndarray__":"AAAAAAAA4D8AAAAAAADgPw==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"4364"},"selection_policy":{"id":"4363"}},"id":"4331","type":"ColumnDataSource"},{"attributes":{},"id":"4370","type":"BasicTickFormatter"},{"attributes":{"end":1,"format":"0[.]00","js_property_callbacks":{"change:value":[{"id":"4348"}]},"start":0,"step":0.01,"title":"\\u03b8","value":0.5},"id":"4349","type":"Slider"},{"attributes":{"axis":{"id":"4308"},"ticker":null},"id":"4311","type":"Grid"},{"attributes":{"children":[{"id":"4350"},{"id":"4349"},{"id":"4351"}]},"id":"4354","type":"Row"},{"attributes":{"source":{"id":"4331"}},"id":"4347","type":"CDSView"},{"attributes":{"args":{"arg1":{"id":"4349"},"arg2":{"id":"4349"},"arg3":{"id":"4349"},"discrete":true,"dist":"bernoulli","n":400,"source_c":{"id":"4332"},"source_p":{"id":"4331"},"xrange":{"id":"4267"}},"code":"function arange(start, stop) {\\n\\tvar x = [];\\n\\tfor (var i = start; i &lt; stop; i++) x.push(i);\\n\\treturn x;\\n}\\n\\nfunction discrete_cdf(cumsum, y_p) {\\n    var y_c = [];\\n\\n    y_c.push(cumsum, cumsum);\\n    for (var i = 0; i &lt; y_p.length; i++) {\\n        cumsum += y_p[i];\\n        y_c.push(cumsum, cumsum);\\n    }\\n\\n    return y_c;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_discrete(probFun, x_p, y_p, arg1, arg2, arg3) {\\n    // Compute CDF\\n    var cumsum = 0.0;\\n    for (var i = 0; i &lt; x_p[0]; i++) {\\n        cumsum += probFun(x_p[i], arg1, arg2, arg3);\\n    }\\n\\n    y_c = discrete_cdf(cumsum, y_p);\\n    return y_c;\\n}\\n\\nfunction probFun(x, theta, {}, {}) {\\n\\tif (x == 0) return 1 - theta;\\n\\telse if (x == 1) return theta;\\n\\telse return NaN;\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points for discrete distributions\\nif (dist == &#x27;bernoulli&#x27;) {\\n\\txRangeMin = 0.0;\\n\\txRangeMax = 1.0;\\n}\\nelse if (dist == &#x27;categorical&#x27;) {\\n\\txRangeMin = 1;\\n\\txRangeMax = x_p.length;\\n}\\nelse {\\n  \\txRangeMin = Math.max(0, Math.floor(xRangeMin));\\n\\txRangeMax = Math.floor(xRangeMax);\\n}\\n\\n// x-values to evaluate PMF and CDF\\nx_p = arange(xRangeMin, xRangeMax+1);\\nlet xSize = xRangeMax - xRangeMin;\\n\\nx_c = [];\\nfor (var i = 0; i &lt; x_p.length; i++) x_c.push(x_p[i], x_p[i]);\\n\\nx_c.unshift(Math.max(xRangeMin - 0.05 * xSize, xRangeMin - 0.95));\\nx_c.push(Math.min(xRangeMax + 0.05 * xSize, xRangeMax + 0.95));\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PMF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_discrete(probFun, \\n\\tx_c, source_p.data[&#x27;y_p&#x27;], arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"4348","type":"CustomJS"},{"attributes":{},"id":"4304","type":"LinearScale"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4352"}]},"value":"0","width":70},"id":"4350","type":"TextInput"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4353"}]},"value":"1","width":70},"id":"4351","type":"TextInput"},{"attributes":{},"id":"4306","type":"LinearScale"},{"attributes":{"axis_label":"CDF","formatter":{"id":"4368"},"ticker":{"id":"4313"}},"id":"4312","type":"LinearAxis"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"4349"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"4353","type":"CustomJS"},{"attributes":{"axis":{"id":"4312"},"dimension":1,"ticker":null},"id":"4315","type":"Grid"}],"root_ids":["4380"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"3bc8378e-5685-4da0-a361-c9bcfa912d35","root_ids":["4380"],"roots":{"4380":"08b91acf-1db2-415f-ad1e-7e7fd10f8f9f"}}];
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