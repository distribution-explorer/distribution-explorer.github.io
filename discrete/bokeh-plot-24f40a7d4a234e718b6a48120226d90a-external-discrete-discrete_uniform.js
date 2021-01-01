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
    
      
      
    
      var element = document.getElementById("f1bcc02f-b9ec-4923-959b-dd52848f6e3b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f1bcc02f-b9ec-4923-959b-dd52848f6e3b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f3fd3868-e07d-4ff2-b756-1591c5c8cfd4":{"roots":{"references":[{"attributes":{},"id":"4935","type":"Selection"},{"attributes":{"height":10},"id":"4954","type":"Spacer"},{"attributes":{"axis":{"id":"4873"},"ticker":null},"id":"4876","type":"Grid"},{"attributes":{"source":{"id":"4897"}},"id":"4902","type":"CDSView"},{"attributes":{"text":"Discrete Uniform"},"id":"4830","type":"Title"},{"attributes":{"axis_label":"n","formatter":{"id":"4943"},"ticker":{"id":"4874"}},"id":"4873","type":"LinearAxis"},{"attributes":{},"id":"4852","type":"ResetTool"},{"attributes":{},"id":"4869","type":"LinearScale"},{"attributes":{},"id":"4874","type":"BasicTicker"},{"attributes":{},"id":"4851","type":"SaveTool"},{"attributes":{},"id":"4871","type":"LinearScale"},{"attributes":{"width":30},"id":"4927","type":"Spacer"},{"attributes":{"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y_p":{"__ndarray__":"RhdddNFFtz9GF1100UW3P0YXXXTRRbc/RhdddNFFtz9GF1100UW3P0YXXXTRRbc/RhdddNFFtz9GF1100UW3P0YXXXTRRbc/RhdddNFFtz9GF1100UW3Pw==","dtype":"float64","order":"little","shape":[11]}},"selected":{"id":"4935"},"selection_policy":{"id":"4934"}},"id":"4896","type":"ColumnDataSource"},{"attributes":{"axis_label":"CDF","formatter":{"id":"4941"},"ticker":{"id":"4878"}},"id":"4877","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"4909","type":"Segment"},{"attributes":{},"id":"4882","type":"WheelZoomTool"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"4840"}],"border_fill_alpha":0,"center":[{"id":"4843"},{"id":"4847"}],"frame_height":175,"frame_width":300,"left":[{"id":"4844"}],"renderers":[{"id":"4906"},{"id":"4911"}],"title":{"id":"4830"},"toolbar":{"id":"4855"},"toolbar_location":null,"x_range":{"id":"4832"},"x_scale":{"id":"4836"},"y_range":{"id":"4834"},"y_scale":{"id":"4838"}},"id":"4829","subtype":"Figure","type":"Plot"},{"attributes":{"toolbars":[{"id":"4855"},{"id":"4888"}],"tools":[{"id":"4848"},{"id":"4849"},{"id":"4850"},{"id":"4851"},{"id":"4852"},{"id":"4853"},{"id":"4881"},{"id":"4882"},{"id":"4883"},{"id":"4884"},{"id":"4885"},{"id":"4886"}]},"id":"4951","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4854","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"4887","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"4877"},"dimension":1,"ticker":null},"id":"4880","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"4905","type":"Circle"},{"attributes":{"end":1.05,"start":-0.05},"id":"4895","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4881"},{"id":"4882"},{"id":"4883"},{"id":"4884"},{"id":"4885"},{"id":"4886"}]},"id":"4888","type":"Toolbar"},{"attributes":{},"id":"4878","type":"BasicTicker"},{"attributes":{"js_property_callbacks":{"change:end":[{"id":"4913"}],"change:start":[{"id":"4913"}]},"range_padding":0},"id":"4832","type":"DataRange1d"},{"attributes":{},"id":"4930","type":"BasicTickFormatter"},{"attributes":{},"id":"4886","type":"HelpTool"},{"attributes":{},"id":"4881","type":"PanTool"},{"attributes":{"toolbar":{"id":"4951"}},"id":"4952","type":"ToolbarBox"},{"attributes":{"children":[{"id":"4950"},{"id":"4952"}]},"id":"4953","type":"Row"},{"attributes":{"overlay":{"id":"4887"}},"id":"4883","type":"BoxZoomTool"},{"attributes":{},"id":"4884","type":"SaveTool"},{"attributes":{"children":[[{"id":"4829"},0,0],[{"id":"4927"},0,1],[{"id":"4862"},0,2]]},"id":"4950","type":"GridBox"},{"attributes":{"overlay":{"id":"4854"}},"id":"4850","type":"BoxZoomTool"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"4873"}],"border_fill_alpha":0,"center":[{"id":"4876"},{"id":"4880"}],"frame_height":175,"frame_width":300,"left":[{"id":"4877"}],"renderers":[{"id":"4901"}],"title":{"id":"4863"},"toolbar":{"id":"4888"},"toolbar_location":null,"x_range":{"id":"4832"},"x_scale":{"id":"4869"},"y_range":{"id":"4895"},"y_scale":{"id":"4871"}},"id":"4862","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4885","type":"ResetTool"},{"attributes":{},"id":"4849","type":"WheelZoomTool"},{"attributes":{},"id":"4936","type":"UnionRenderers"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4923"}]},"value":"10","width":70},"id":"4919","type":"TextInput"},{"attributes":{"args":{"max_value":"Infinity","min_value":"-Infinity","slider":{"id":"4915"}},"code":"\\nslider.start = Math.max(Math.floor(min_value), Math.floor(Number(cb_obj.value)));\\n"},"id":"4922","type":"CustomJS"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4922"}]},"value":"0","width":70},"id":"4917","type":"TextInput"},{"attributes":{},"id":"4853","type":"HelpTool"},{"attributes":{"args":{"max_value":"Infinity","min_value":"-Infinity","slider":{"id":"4915"}},"code":"\\nslider.end = Math.min(Math.floor(max_value), Math.floor(Number(cb_obj.value)));\\n"},"id":"4923","type":"CustomJS"},{"attributes":{"data_source":{"id":"4897"},"glyph":{"id":"4899"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4900"},"selection_glyph":null,"view":{"id":"4902"}},"id":"4901","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"4904","type":"Circle"},{"attributes":{"end":10,"format":"0[.]00","js_property_callbacks":{"change:value":[{"id":"4913"}]},"start":0,"title":"low","value":0},"id":"4914","type":"Slider"},{"attributes":{},"id":"4848","type":"PanTool"},{"attributes":{"args":{"max_value":"Infinity","min_value":"-Infinity","slider":{"id":"4914"}},"code":"\\nslider.start = Math.max(Math.floor(min_value), Math.floor(Number(cb_obj.value)));\\n"},"id":"4920","type":"CustomJS"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4848"},{"id":"4849"},{"id":"4850"},{"id":"4851"},{"id":"4852"},{"id":"4853"}]},"id":"4855","type":"Toolbar"},{"attributes":{"text":" "},"id":"4863","type":"Title"},{"attributes":{"end":10,"format":"0[.]00","js_property_callbacks":{"change:value":[{"id":"4913"}]},"start":0,"title":"high","value":10},"id":"4915","type":"Slider"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAA4L8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAABAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAAEEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAHEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAiQAAAAAAAACJAAAAAAAAAJEAAAAAAAAAkQAAAAAAAACVA","dtype":"float64","order":"little","shape":[24]},"y_c":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAEYXXXTRRbc/RhdddNFFtz9GF1100UXHP0YXXXTRRcc/dNFFF1100T900UUXXXTRP0YXXXTRRdc/RhdddNFF1z8XXXTRRRfdPxdddNFFF90/dNFFF1104T900UUXXXThP1100UUXXeQ/XXTRRRdd5D9GF1100UXnP0YXXXTRRec/L7rooosu6j8vuuiiiy7qPxdddNFFF+0/F1100UUX7T8AAAAAAADwPwAAAAAAAPA/","dtype":"float64","order":"little","shape":[24]}},"selected":{"id":"4937"},"selection_policy":{"id":"4936"}},"id":"4897","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"4926"},{"id":"4954"},{"id":"4953"}]},"id":"4955","type":"Column"},{"attributes":{"children":[{"id":"4917"},{"id":"4915"},{"id":"4919"}]},"id":"4925","type":"Row"},{"attributes":{"children":[{"id":"4916"},{"id":"4914"},{"id":"4918"}]},"id":"4924","type":"Row"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4921"}]},"value":"10","width":70},"id":"4918","type":"TextInput"},{"attributes":{"args":{"max_value":"Infinity","min_value":"-Infinity","slider":{"id":"4914"}},"code":"\\nslider.end = Math.min(Math.floor(max_value), Math.floor(Number(cb_obj.value)));\\n"},"id":"4921","type":"CustomJS"},{"attributes":{"data_source":{"id":"4896"},"glyph":{"id":"4904"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4905"},"selection_glyph":null,"view":{"id":"4907"}},"id":"4906","type":"GlyphRenderer"},{"attributes":{"axis_label":"n","formatter":{"id":"4932"},"ticker":{"id":"4841"}},"id":"4840","type":"LinearAxis"},{"attributes":{"axis_label":"PMF","formatter":{"id":"4930"},"ticker":{"id":"4845"}},"id":"4844","type":"LinearAxis"},{"attributes":{},"id":"4836","type":"LinearScale"},{"attributes":{},"id":"4932","type":"BasicTickFormatter"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4920"}]},"value":"0","width":70},"id":"4916","type":"TextInput"},{"attributes":{},"id":"4834","type":"DataRange1d"},{"attributes":{"axis":{"id":"4844"},"dimension":1,"ticker":null},"id":"4847","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"4900","type":"Line"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"4899","type":"Line"},{"attributes":{},"id":"4937","type":"Selection"},{"attributes":{},"id":"4845","type":"BasicTicker"},{"attributes":{"axis":{"id":"4840"},"ticker":null},"id":"4843","type":"Grid"},{"attributes":{},"id":"4934","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"4910","type":"Segment"},{"attributes":{"data_source":{"id":"4896"},"glyph":{"id":"4909"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4910"},"selection_glyph":null,"view":{"id":"4912"}},"id":"4911","type":"GlyphRenderer"},{"attributes":{},"id":"4841","type":"BasicTicker"},{"attributes":{"source":{"id":"4896"}},"id":"4907","type":"CDSView"},{"attributes":{"args":{"arg1":{"id":"4914"},"arg2":{"id":"4915"},"arg3":{"id":"4914"},"discrete":true,"dist":"discrete_uniform","n":400,"source_c":{"id":"4897"},"source_p":{"id":"4896"},"xrange":{"id":"4832"}},"code":"function arange(start, stop) {\\n\\tvar x = [];\\n\\tfor (var i = start; i &lt; stop; i++) x.push(i);\\n\\treturn x;\\n}\\n\\nfunction discrete_cdf(cumsum, y_p) {\\n    var y_c = [];\\n\\n    y_c.push(cumsum, cumsum);\\n    for (var i = 0; i &lt; y_p.length; i++) {\\n        cumsum += y_p[i];\\n        y_c.push(cumsum, cumsum);\\n    }\\n\\n    return y_c;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_discrete(probFun, x_p, y_p, arg1, arg2, arg3) {\\n    // Compute CDF\\n    var cumsum = 0.0;\\n    for (var i = 0; i &lt; x_p[0]; i++) {\\n        cumsum += probFun(x_p[i], arg1, arg2, arg3);\\n    }\\n\\n    y_c = discrete_cdf(cumsum, y_p);\\n    return y_c;\\n}\\n\\nfunction probFun(n, low, high, {}) {\\n    if (low &gt; high || n &lt; low || n &gt; high) return NaN;\\n\\n    return 1 / (high - low + 1);\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points for discrete distributions\\nif (dist == &#x27;bernoulli&#x27;) {\\n\\txRangeMin = 0.0;\\n\\txRangeMax = 1.0;\\n}\\nelse if (dist == &#x27;categorical&#x27;) {\\n\\txRangeMin = 1;\\n\\txRangeMax = x_p.length;\\n}\\nelse {\\n  \\txRangeMin = Math.max(0, Math.floor(xRangeMin));\\n\\txRangeMax = Math.floor(xRangeMax);\\n}\\n\\n// x-values to evaluate PMF and CDF\\nx_p = arange(xRangeMin, xRangeMax+1);\\nlet xSize = xRangeMax - xRangeMin;\\n\\nx_c = [];\\nfor (var i = 0; i &lt; x_p.length; i++) x_c.push(x_p[i], x_p[i]);\\n\\nx_c.unshift(Math.max(xRangeMin - 0.05 * xSize, xRangeMin - 0.95));\\nx_c.push(Math.min(xRangeMax + 0.05 * xSize, xRangeMax + 0.95));\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PMF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_discrete(probFun, \\n\\tx_c, source_p.data[&#x27;y_p&#x27;], arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"4913","type":"CustomJS"},{"attributes":{},"id":"4838","type":"LinearScale"},{"attributes":{},"id":"4943","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"4924"},{"id":"4925"}]},"id":"4926","type":"Column"},{"attributes":{"source":{"id":"4896"}},"id":"4912","type":"CDSView"},{"attributes":{},"id":"4941","type":"BasicTickFormatter"}],"root_ids":["4955"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"f3fd3868-e07d-4ff2-b756-1591c5c8cfd4","root_ids":["4955"],"roots":{"4955":"f1bcc02f-b9ec-4923-959b-dd52848f6e3b"}}];
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