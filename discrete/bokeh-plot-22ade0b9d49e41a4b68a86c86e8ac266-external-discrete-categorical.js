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
    
      
      
    
      var element = document.getElementById("71b72350-3998-48a3-bc88-8a7cb1c87c34");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '71b72350-3998-48a3-bc88-8a7cb1c87c34' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.2.min.js": "JayppSWSRBsibIZqI8S4vAb1oFgLL0uhNvSn8cmArlOvYOwfFjYeyY5UWwJ+K0SU", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.2.min.js": "G0/Tv/Yy/zEPNsnW0Qif/FOsGesd+KIrKg/QLmvQmReuUW9qmSP7mAmr0VpiUNr3", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.2.min.js": "VLYHEbLQDk5G1+/4ALU0myoJPMEUsngWry2fzYorFOUmarjGRPLLURaeK/on6JqX"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.2.min.js"];
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
                    
                  var docs_json = '{"c00c21ef-aad7-46ea-8c41-54acac4ba239":{"roots":{"references":[{"attributes":{},"id":"4656","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"4651"},"dimension":1,"ticker":null},"id":"4654","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4661","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4655"},{"id":"4656"},{"id":"4657"},{"id":"4658"},{"id":"4659"},{"id":"4660"}]},"id":"4662","type":"Toolbar"},{"attributes":{},"id":"4652","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"4706","type":"Line"},{"attributes":{},"id":"4643","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"4707","type":"Line"},{"attributes":{},"id":"4660","type":"HelpTool"},{"attributes":{"data_source":{"id":"4704"},"glyph":{"id":"4706"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4707"},"selection_glyph":null,"view":{"id":"4709"}},"id":"4708","type":"GlyphRenderer"},{"attributes":{"axis_label":"category","formatter":{"id":"4744"},"ticker":{"id":"4648"}},"id":"4647","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"4760"}},"id":"4761","type":"ToolbarBox"},{"attributes":{"range_padding":0},"id":"4639","type":"DataRange1d"},{"attributes":{"end":1.05,"start":-0.05},"id":"4702","type":"Range1d"},{"attributes":{"source":{"id":"4704"}},"id":"4709","type":"CDSView"},{"attributes":{"children":[[{"id":"4636"},0,0],[{"id":"4740"},0,1],[{"id":"4669"},0,2]]},"id":"4759","type":"GridBox"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"4723"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"4735","type":"CustomJS"},{"attributes":{"axis":{"id":"4647"},"ticker":null},"id":"4650","type":"Grid"},{"attributes":{"children":[{"id":"4726"},{"id":"4723"},{"id":"4729"}]},"id":"4738","type":"Row"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"4647"}],"border_fill_alpha":0,"center":[{"id":"4650"},{"id":"4654"}],"frame_height":175,"frame_width":300,"left":[{"id":"4651"}],"renderers":[{"id":"4713"},{"id":"4718"}],"title":{"id":"4637"},"toolbar":{"id":"4662"},"toolbar_location":null,"x_range":{"id":"4639"},"x_scale":{"id":"4643"},"y_range":{"id":"4641"},"y_scale":{"id":"4645"}},"id":"4636","subtype":"Figure","type":"Plot"},{"attributes":{"width":30},"id":"4740","type":"Spacer"},{"attributes":{},"id":"4751","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"4662"},{"id":"4695"}],"tools":[{"id":"4655"},{"id":"4656"},{"id":"4657"},{"id":"4658"},{"id":"4659"},{"id":"4660"},{"id":"4688"},{"id":"4689"},{"id":"4690"},{"id":"4691"},{"id":"4692"},{"id":"4693"}]},"id":"4760","type":"ProxyToolbar"},{"attributes":{"axis_label":"category","formatter":{"id":"4753"},"ticker":{"id":"4681"}},"id":"4680","type":"LinearAxis"},{"attributes":{"data":{"x":[1,2,3,4],"y_p":{"__ndarray__":"mpmZmZmZyT8zMzMzMzPTP5qZmZmZmbk/mpmZmZmZ2T8=","dtype":"float64","order":"little","shape":[4]}},"selected":{"id":"4747"},"selection_policy":{"id":"4748"}},"id":"4703","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"4680"},"ticker":null},"id":"4683","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"MzMzMzMz6z8AAAAAAADwPwAAAAAAAPA/AAAAAAAAAEAAAAAAAAAAQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAQQAAAAAAAABBAmpmZmZmZEEA=","dtype":"float64","order":"little","shape":[10]},"y_c":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAJqZmZmZmck/mpmZmZmZyT8AAAAAAADgPwAAAAAAAOA/MzMzMzMz4z8zMzMzMzPjPwAAAAAAAPA/AAAAAAAA8D8=","dtype":"float64","order":"little","shape":[10]}},"selected":{"id":"4756"},"selection_policy":{"id":"4757"}},"id":"4704","type":"ColumnDataSource"},{"attributes":{},"id":"4753","type":"BasicTickFormatter"},{"attributes":{},"id":"4676","type":"LinearScale"},{"attributes":{},"id":"4689","type":"WheelZoomTool"},{"attributes":{},"id":"4678","type":"LinearScale"},{"attributes":{"axis_label":"CDF","formatter":{"id":"4751"},"ticker":{"id":"4685"}},"id":"4684","type":"LinearAxis"},{"attributes":{},"id":"4681","type":"BasicTicker"},{"attributes":{},"id":"4742","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"4684"},"dimension":1,"ticker":null},"id":"4687","type":"Grid"},{"attributes":{},"id":"4685","type":"BasicTicker"},{"attributes":{},"id":"4693","type":"HelpTool"},{"attributes":{},"id":"4688","type":"PanTool"},{"attributes":{"text":"Categorical"},"id":"4637","type":"Title"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"4722"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"4732","type":"CustomJS"},{"attributes":{"overlay":{"id":"4694"}},"id":"4690","type":"BoxZoomTool"},{"attributes":{},"id":"4691","type":"SaveTool"},{"attributes":{},"id":"4655","type":"PanTool"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"4723"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"4734","type":"CustomJS"},{"attributes":{},"id":"4692","type":"ResetTool"},{"attributes":{},"id":"4744","type":"BasicTickFormatter"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"4722"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"4733","type":"CustomJS"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"4712","type":"Circle"},{"attributes":{"source":{"id":"4703"}},"id":"4714","type":"CDSView"},{"attributes":{"children":[{"id":"4724"},{"id":"4721"},{"id":"4727"}]},"id":"4736","type":"Row"},{"attributes":{"children":[{"id":"4759"},{"id":"4761"}]},"id":"4762","type":"Row"},{"attributes":{"children":[{"id":"4725"},{"id":"4722"},{"id":"4728"}]},"id":"4737","type":"Row"},{"attributes":{"data_source":{"id":"4703"},"glyph":{"id":"4711"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4712"},"selection_glyph":null,"view":{"id":"4714"}},"id":"4713","type":"GlyphRenderer"},{"attributes":{},"id":"4756","type":"Selection"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4735"}]},"value":"1","width":70},"id":"4729","type":"TextInput"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"4680"}],"border_fill_alpha":0,"center":[{"id":"4683"},{"id":"4687"}],"frame_height":175,"frame_width":300,"left":[{"id":"4684"}],"renderers":[{"id":"4708"}],"title":{"id":"4670"},"toolbar":{"id":"4695"},"toolbar_location":null,"x_range":{"id":"4639"},"x_scale":{"id":"4676"},"y_range":{"id":"4702"},"y_scale":{"id":"4678"}},"id":"4669","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4757","type":"UnionRenderers"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"4721"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"4731","type":"CustomJS"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"4717","type":"Segment"},{"attributes":{"data_source":{"id":"4703"},"glyph":{"id":"4716"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4717"},"selection_glyph":null,"view":{"id":"4719"}},"id":"4718","type":"GlyphRenderer"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"4721"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"4730","type":"CustomJS"},{"attributes":{"source":{"id":"4703"}},"id":"4719","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"4711","type":"Circle"},{"attributes":{},"id":"4645","type":"LinearScale"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"4716","type":"Segment"},{"attributes":{"axis_label":"PMF","formatter":{"id":"4742"},"ticker":{"id":"4652"}},"id":"4651","type":"LinearAxis"},{"attributes":{"height":10},"id":"4763","type":"Spacer"},{"attributes":{},"id":"4648","type":"BasicTicker"},{"attributes":{"text":" "},"id":"4670","type":"Title"},{"attributes":{},"id":"4641","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4694","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4688"},{"id":"4689"},{"id":"4690"},{"id":"4691"},{"id":"4692"},{"id":"4693"}]},"id":"4695","type":"Toolbar"},{"attributes":{"overlay":{"id":"4661"}},"id":"4657","type":"BoxZoomTool"},{"attributes":{},"id":"4658","type":"SaveTool"},{"attributes":{},"id":"4659","type":"ResetTool"},{"attributes":{"children":[{"id":"4736"},{"id":"4737"},{"id":"4738"}]},"id":"4739","type":"Column"},{"attributes":{"children":[{"id":"4739"},{"id":"4763"},{"id":"4762"}]},"id":"4764","type":"Column"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4733"}]},"value":"1","width":70},"id":"4728","type":"TextInput"},{"attributes":{},"id":"4747","type":"Selection"},{"attributes":{"args":{"arg1":{"id":"4721"},"arg2":{"id":"4722"},"arg3":{"id":"4723"},"discrete":true,"dist":"categorical","n":400,"source_c":{"id":"4704"},"source_p":{"id":"4703"},"xrange":{"id":"4639"}},"code":"function arange(start, stop) {\\n\\tvar x = [];\\n\\tfor (var i = start; i &lt; stop; i++) x.push(i);\\n\\treturn x;\\n}\\n\\nfunction discrete_cdf(cumsum, y_p) {\\n    var y_c = [];\\n\\n    y_c.push(cumsum, cumsum);\\n    for (var i = 0; i &lt; y_p.length; i++) {\\n        cumsum += y_p[i];\\n        y_c.push(cumsum, cumsum);\\n    }\\n\\n    return y_c;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_discrete(probFun, x_p, y_p, arg1, arg2, arg3) {\\n    // Compute CDF\\n    var cumsum = 0.0;\\n    for (var i = 0; i &lt; x_p[0]; i++) {\\n        cumsum += probFun(x_p[i], arg1, arg2, arg3);\\n    }\\n\\n    y_c = discrete_cdf(cumsum, y_p);\\n    return y_c;\\n}\\n\\nfunction probFun(cat, theta1, theta2, theta3) {\\n    var theta4 = 1 - theta1 - theta2 - theta3\\n    if (theta4 &lt; 0) return 0.0;\\n    if (![1, 2, 3, 4].includes(cat)) return NaN;\\n\\n    var probs = [theta1, theta2, theta3, theta4]\\n\\n    return probs[cat-1];\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points for discrete distributions\\nif (dist == &#x27;bernoulli&#x27;) {\\n\\txRangeMin = 0.0;\\n\\txRangeMax = 1.0;\\n}\\nelse if (dist == &#x27;categorical&#x27;) {\\n\\txRangeMin = 1;\\n\\txRangeMax = x_p.length;\\n}\\nelse {\\n  \\txRangeMin = Math.max(0, Math.floor(xRangeMin));\\n\\txRangeMax = Math.floor(xRangeMax);\\n}\\n\\n// x-values to evaluate PMF and CDF\\nx_p = arange(xRangeMin, xRangeMax+1);\\nlet xSize = xRangeMax - xRangeMin;\\n\\nx_c = [];\\nfor (var i = 0; i &lt; x_p.length; i++) x_c.push(x_p[i], x_p[i]);\\n\\nx_c.unshift(Math.max(xRangeMin - 0.05 * xSize, xRangeMin - 0.95));\\nx_c.push(Math.min(xRangeMax + 0.05 * xSize, xRangeMax + 0.95));\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PMF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_discrete(probFun, \\n\\tx_c, source_p.data[&#x27;y_p&#x27;], arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"4720","type":"CustomJS"},{"attributes":{},"id":"4748","type":"UnionRenderers"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4732"}]},"value":"0","width":70},"id":"4725","type":"TextInput"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4734"}]},"value":"0","width":70},"id":"4726","type":"TextInput"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4731"}]},"value":"1","width":70},"id":"4727","type":"TextInput"},{"attributes":{"end":1,"format":"0[.]00","js_property_callbacks":{"change:value":[{"id":"4720"}]},"start":0,"step":0.01,"title":"\\u03b8\\u2082","value":0.3},"id":"4722","type":"Slider"},{"attributes":{"end":1,"format":"0[.]00","js_property_callbacks":{"change:value":[{"id":"4720"}]},"start":0,"step":0.01,"title":"\\u03b8\\u2081","value":0.2},"id":"4721","type":"Slider"},{"attributes":{"end":1,"format":"0[.]00","js_property_callbacks":{"change:value":[{"id":"4720"}]},"start":0,"step":0.01,"title":"\\u03b8\\u2083","value":0.1},"id":"4723","type":"Slider"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4730"}]},"value":"0","width":70},"id":"4724","type":"TextInput"}],"root_ids":["4764"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"c00c21ef-aad7-46ea-8c41-54acac4ba239","root_ids":["4764"],"roots":{"4764":"71b72350-3998-48a3-bc88-8a7cb1c87c34"}}];
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