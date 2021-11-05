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
    
      
      
    
      var element = document.getElementById("57553b93-eb03-493a-9c75-05e55b356c4f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '57553b93-eb03-493a-9c75-05e55b356c4f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"707061d5-e486-40a0-bb02-08d2a9533fa1":{"defs":[],"roots":{"references":[{"attributes":{},"id":"5255","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"5322","type":"Circle"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"5290"}],"border_fill_alpha":0,"center":[{"id":"5293"},{"id":"5297"}],"frame_height":175,"frame_width":300,"left":[{"id":"5294"}],"renderers":[{"id":"5318"}],"title":{"id":"5280"},"toolbar":{"id":"5305"},"toolbar_location":null,"x_range":{"id":"5249"},"x_scale":{"id":"5286"},"y_range":{"id":"5312"},"y_scale":{"id":"5288"}},"id":"5279","subtype":"Figure","type":"Plot"},{"attributes":{"js_property_callbacks":{"change:end":[{"id":"5330"}],"change:start":[{"id":"5330"}]},"range_padding":0},"id":"5249","type":"DataRange1d"},{"attributes":{},"id":"5265","type":"PanTool"},{"attributes":{},"id":"5288","type":"LinearScale"},{"attributes":{"overlay":{"id":"5271"}},"id":"5267","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"5304","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"5341"},{"id":"5342"}]},"id":"5343","type":"Column"},{"attributes":{"axis":{"id":"5261"},"dimension":1,"ticker":null},"id":"5264","type":"Grid"},{"attributes":{"axis_label":"PMF","formatter":{"id":"5347"},"major_label_policy":{"id":"5346"},"ticker":{"id":"5262"}},"id":"5261","type":"LinearAxis"},{"attributes":{},"id":"5262","type":"BasicTicker"},{"attributes":{"source":{"id":"5314"}},"id":"5319","type":"CDSView"},{"attributes":{},"id":"5270","type":"HelpTool"},{"attributes":{},"id":"5291","type":"BasicTicker"},{"attributes":{"axis_label":"n","formatter":{"id":"5350"},"major_label_policy":{"id":"5349"},"ticker":{"id":"5258"}},"id":"5257","type":"LinearAxis"},{"attributes":{"data_source":{"id":"5314"},"glyph":{"id":"5316"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5317"},"view":{"id":"5319"}},"id":"5318","type":"GlyphRenderer"},{"attributes":{"width":30},"id":"5344","type":"Spacer"},{"attributes":{},"id":"5268","type":"SaveTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"5326","type":"Segment"},{"attributes":{},"id":"5269","type":"ResetTool"},{"attributes":{"toolbars":[{"id":"5272"},{"id":"5305"}],"tools":[{"id":"5265"},{"id":"5266"},{"id":"5267"},{"id":"5268"},{"id":"5269"},{"id":"5270"},{"id":"5298"},{"id":"5299"},{"id":"5300"},{"id":"5301"},{"id":"5302"},{"id":"5303"}]},"id":"5372","type":"ProxyToolbar"},{"attributes":{},"id":"5251","type":"DataRange1d"},{"attributes":{},"id":"5286","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"5265"},{"id":"5266"},{"id":"5267"},{"id":"5268"},{"id":"5269"},{"id":"5270"}]},"id":"5272","type":"Toolbar"},{"attributes":{"toolbar":{"id":"5372"}},"id":"5373","type":"ToolbarBox"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"5317","type":"Line"},{"attributes":{},"id":"5253","type":"LinearScale"},{"attributes":{"text":" "},"id":"5280","type":"Title"},{"attributes":{},"id":"5258","type":"BasicTicker"},{"attributes":{"source":{"id":"5313"}},"id":"5329","type":"CDSView"},{"attributes":{},"id":"5266","type":"WheelZoomTool"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5337"}]},"value":"0","width":70},"id":"5333","type":"TextInput"},{"attributes":{"data_source":{"id":"5313"},"glyph":{"id":"5326"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5327"},"view":{"id":"5329"}},"id":"5328","type":"GlyphRenderer"},{"attributes":{"text":"Discrete Uniform"},"id":"5247","type":"Title"},{"attributes":{"end":10,"js_property_callbacks":{"change:value":[{"id":"5330"}]},"start":0,"title":"low","value":0},"id":"5331","type":"Slider"},{"attributes":{"end":1.05,"start":-0.05},"id":"5312","type":"Range1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"5321","type":"Circle"},{"attributes":{"data_source":{"id":"5313"},"glyph":{"id":"5321"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5322"},"view":{"id":"5324"}},"id":"5323","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"5316","type":"Line"},{"attributes":{"end":10,"js_property_callbacks":{"change:value":[{"id":"5330"}]},"start":0,"title":"high","value":10},"id":"5332","type":"Slider"},{"attributes":{},"id":"5299","type":"WheelZoomTool"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5339"}]},"value":"0","width":70},"id":"5334","type":"TextInput"},{"attributes":{"source":{"id":"5313"}},"id":"5324","type":"CDSView"},{"attributes":{},"id":"5352","type":"UnionRenderers"},{"attributes":{"axis":{"id":"5290"},"ticker":null},"id":"5293","type":"Grid"},{"attributes":{"children":[{"id":"5371"},{"id":"5373"}]},"id":"5374","type":"Row"},{"attributes":{"args":{"max_value":"Infinity","min_value":"-Infinity","slider":{"id":"5331"}},"code":"\\nslider.start = Math.max(Math.floor(min_value), Math.floor(Number(cb_obj.value)));\\n"},"id":"5337","type":"CustomJS"},{"attributes":{},"id":"5346","type":"AllLabels"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"5257"}],"border_fill_alpha":0,"center":[{"id":"5260"},{"id":"5264"}],"frame_height":175,"frame_width":300,"left":[{"id":"5261"}],"renderers":[{"id":"5323"},{"id":"5328"}],"title":{"id":"5247"},"toolbar":{"id":"5272"},"toolbar_location":null,"x_range":{"id":"5249"},"x_scale":{"id":"5253"},"y_range":{"id":"5251"},"y_scale":{"id":"5255"}},"id":"5246","subtype":"Figure","type":"Plot"},{"attributes":{"height":10},"id":"5375","type":"Spacer"},{"attributes":{},"id":"5353","type":"Selection"},{"attributes":{},"id":"5302","type":"ResetTool"},{"attributes":{"args":{"max_value":"Infinity","min_value":"-Infinity","slider":{"id":"5332"}},"code":"\\nslider.start = Math.max(Math.floor(min_value), Math.floor(Number(cb_obj.value)));\\n"},"id":"5339","type":"CustomJS"},{"attributes":{"axis_label":"CDF","formatter":{"id":"5360"},"major_label_policy":{"id":"5359"},"ticker":{"id":"5295"}},"id":"5294","type":"LinearAxis"},{"attributes":{"active_multi":null,"tools":[{"id":"5298"},{"id":"5299"},{"id":"5300"},{"id":"5301"},{"id":"5302"},{"id":"5303"}]},"id":"5305","type":"Toolbar"},{"attributes":{"children":[{"id":"5343"},{"id":"5375"},{"id":"5374"}]},"id":"5376","type":"Column"},{"attributes":{},"id":"5303","type":"HelpTool"},{"attributes":{"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y_p":{"__ndarray__":"RhdddNFFtz9GF1100UW3P0YXXXTRRbc/RhdddNFFtz9GF1100UW3P0YXXXTRRbc/RhdddNFFtz9GF1100UW3P0YXXXTRRbc/RhdddNFFtz9GF1100UW3Pw==","dtype":"float64","order":"little","shape":[11]}},"selected":{"id":"5353"},"selection_policy":{"id":"5352"}},"id":"5313","type":"ColumnDataSource"},{"attributes":{},"id":"5356","type":"Selection"},{"attributes":{"axis":{"id":"5294"},"dimension":1,"ticker":null},"id":"5297","type":"Grid"},{"attributes":{"axis_label":"n","formatter":{"id":"5363"},"major_label_policy":{"id":"5362"},"ticker":{"id":"5291"}},"id":"5290","type":"LinearAxis"},{"attributes":{},"id":"5298","type":"PanTool"},{"attributes":{"children":[{"id":"5333"},{"id":"5331"},{"id":"5335"}]},"id":"5341","type":"Row"},{"attributes":{"overlay":{"id":"5304"}},"id":"5300","type":"BoxZoomTool"},{"attributes":{"children":[[{"id":"5246"},0,0],[{"id":"5344"},0,1],[{"id":"5279"},0,2]]},"id":"5371","type":"GridBox"},{"attributes":{},"id":"5295","type":"BasicTicker"},{"attributes":{},"id":"5359","type":"AllLabels"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5340"}]},"value":"10","width":70},"id":"5336","type":"TextInput"},{"attributes":{},"id":"5360","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"5334"},{"id":"5332"},{"id":"5336"}]},"id":"5342","type":"Row"},{"attributes":{"axis":{"id":"5257"},"ticker":null},"id":"5260","type":"Grid"},{"attributes":{"args":{"max_value":"Infinity","min_value":"-Infinity","slider":{"id":"5331"}},"code":"\\nslider.end = Math.min(Math.floor(max_value), Math.floor(Number(cb_obj.value)));\\n"},"id":"5338","type":"CustomJS"},{"attributes":{},"id":"5301","type":"SaveTool"},{"attributes":{},"id":"5350","type":"BasicTickFormatter"},{"attributes":{"args":{"max_value":"Infinity","min_value":"-Infinity","slider":{"id":"5332"}},"code":"\\nslider.end = Math.min(Math.floor(max_value), Math.floor(Number(cb_obj.value)));\\n"},"id":"5340","type":"CustomJS"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5338"}]},"value":"10","width":70},"id":"5335","type":"TextInput"},{"attributes":{},"id":"5349","type":"AllLabels"},{"attributes":{},"id":"5362","type":"AllLabels"},{"attributes":{"args":{"arg1":{"id":"5331"},"arg2":{"id":"5332"},"arg3":{"id":"5331"},"discrete":true,"dist":"discrete_uniform","n":400,"source_c":{"id":"5314"},"source_p":{"id":"5313"},"xrange":{"id":"5249"}},"code":"function arange(start, stop) {\\n\\tvar x = [];\\n\\tfor (var i = start; i &lt; stop; i++) x.push(i);\\n\\treturn x;\\n}\\n\\nfunction discrete_cdf(cumsum, y_p) {\\n    var y_c = [];\\n\\n    y_c.push(cumsum, cumsum);\\n    for (var i = 0; i &lt; y_p.length; i++) {\\n        cumsum += y_p[i];\\n        y_c.push(cumsum, cumsum);\\n    }\\n\\n    return y_c;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_discrete(probFun, x_p, y_p, arg1, arg2, arg3) {\\n    // Compute CDF\\n    var cumsum = 0.0;\\n    for (var i = 0; i &lt; x_p[0]; i++) {\\n        cumsum += probFun(x_p[i], arg1, arg2, arg3);\\n    }\\n\\n    y_c = discrete_cdf(cumsum, y_p);\\n    return y_c;\\n}\\n\\nfunction probFun(n, low, high, {}) {\\n    if (low &gt; high || n &lt; low || n &gt; high) return NaN;\\n\\n    return 1 / (high - low + 1);\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points for discrete distributions\\nif (dist == &#x27;bernoulli&#x27;) {\\n\\txRangeMin = 0.0;\\n\\txRangeMax = 1.0;\\n}\\nelse if (dist == &#x27;categorical&#x27;) {\\n\\txRangeMin = 1;\\n\\txRangeMax = x_p.length;\\n}\\nelse {\\n  \\txRangeMin = Math.max(0, Math.floor(xRangeMin));\\n\\txRangeMax = Math.floor(xRangeMax);\\n}\\n\\n// x-values to evaluate PMF and CDF\\nx_p = arange(xRangeMin, xRangeMax+1);\\nlet xSize = xRangeMax - xRangeMin;\\n\\nx_c = [];\\nfor (var i = 0; i &lt; x_p.length; i++) x_c.push(x_p[i], x_p[i]);\\n\\nx_c.unshift(Math.max(xRangeMin - 0.05 * xSize, xRangeMin - 0.95));\\nx_c.push(Math.min(xRangeMax + 0.05 * xSize, xRangeMax + 0.95));\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PMF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_discrete(probFun, \\n\\tx_c, source_p.data[&#x27;y_p&#x27;], arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"5330","type":"CustomJS"},{"attributes":{},"id":"5363","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAA4L8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAABAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAAEEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAHEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAiQAAAAAAAACJAAAAAAAAAJEAAAAAAAAAkQAAAAAAAACVA","dtype":"float64","order":"little","shape":[24]},"y_c":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAEYXXXTRRbc/RhdddNFFtz9GF1100UXHP0YXXXTRRcc/dNFFF1100T900UUXXXTRP0YXXXTRRdc/RhdddNFF1z8XXXTRRRfdPxdddNFFF90/dNFFF1104T900UUXXXThP1100UUXXeQ/XXTRRRdd5D9GF1100UXnP0YXXXTRRec/L7rooosu6j8vuuiiiy7qPxdddNFFF+0/F1100UUX7T8AAAAAAADwPwAAAAAAAPA/","dtype":"float64","order":"little","shape":[24]}},"selected":{"id":"5356"},"selection_policy":{"id":"5355"}},"id":"5314","type":"ColumnDataSource"},{"attributes":{},"id":"5347","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"5271","type":"BoxAnnotation"},{"attributes":{},"id":"5355","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"5327","type":"Segment"}],"root_ids":["5376"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"707061d5-e486-40a0-bb02-08d2a9533fa1","root_ids":["5376"],"roots":{"5376":"57553b93-eb03-493a-9c75-05e55b356c4f"}}];
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