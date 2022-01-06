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
    
      
      
    
      var element = document.getElementById("adf64192-44a7-4d32-aaa1-d740d9755470");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'adf64192-44a7-4d32-aaa1-d740d9755470' but no matching script tag was found.")
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
                    
                  var docs_json = '{"787ad08b-347a-4656-ad1a-4401475ec878":{"defs":[],"roots":{"references":[{"attributes":{"end":1,"js_property_callbacks":{"change:value":[{"id":"5117"}]},"start":0,"step":0.01,"title":"\\u03b8\\u2083","value":0.1},"id":"5120","type":"Slider"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5127"}]},"value":"0","width":70},"id":"5121","type":"TextInput"},{"attributes":{"axis_label":"category","formatter":{"id":"5150"},"major_label_policy":{"id":"5151"},"ticker":{"id":"5078"}},"id":"5077","type":"LinearAxis"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5129"}]},"value":"0","width":70},"id":"5122","type":"TextInput"},{"attributes":{"axis":{"id":"5077"},"ticker":null},"id":"5080","type":"Grid"},{"attributes":{},"id":"5073","type":"LinearScale"},{"attributes":{"end":1,"js_property_callbacks":{"change:value":[{"id":"5117"}]},"start":0,"step":0.01,"title":"\\u03b8\\u2081","value":0.2},"id":"5118","type":"Slider"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"5118"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"5127","type":"CustomJS"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"5118"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"5128","type":"CustomJS"},{"attributes":{},"id":"5078","type":"BasicTicker"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5131"}]},"value":"0","width":70},"id":"5123","type":"TextInput"},{"attributes":{"data":{"x":{"__ndarray__":"MzMzMzMz6z8AAAAAAADwPwAAAAAAAPA/AAAAAAAAAEAAAAAAAAAAQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAQQAAAAAAAABBAmpmZmZmZEEA=","dtype":"float64","order":"little","shape":[10]},"y_c":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAJqZmZmZmck/mpmZmZmZyT8AAAAAAADgPwAAAAAAAOA/MzMzMzMz4z8zMzMzMzPjPwAAAAAAAPA/AAAAAAAA8D8=","dtype":"float64","order":"little","shape":[10]}},"selected":{"id":"5156"},"selection_policy":{"id":"5157"}},"id":"5101","type":"ColumnDataSource"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5128"}]},"value":"1","width":70},"id":"5124","type":"TextInput"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"5104","type":"Line"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5130"}]},"value":"1","width":70},"id":"5125","type":"TextInput"},{"attributes":{},"id":"5075","type":"LinearScale"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5132"}]},"value":"1","width":70},"id":"5126","type":"TextInput"},{"attributes":{"children":[{"id":"5121"},{"id":"5118"},{"id":"5124"}]},"id":"5133","type":"Row"},{"attributes":{"children":[{"id":"5122"},{"id":"5119"},{"id":"5125"}]},"id":"5134","type":"Row"},{"attributes":{"source":{"id":"5101"}},"id":"5106","type":"CDSView"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"5119"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"5130","type":"CustomJS"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"5119"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"5129","type":"CustomJS"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"5120"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"5132","type":"CustomJS"},{"attributes":{"args":{"max_value":1,"min_value":0,"slider":{"id":"5120"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"5131","type":"CustomJS"},{"attributes":{"data":{"x":[1,2,3,4],"y_p":{"__ndarray__":"mpmZmZmZyT8zMzMzMzPTP5qZmZmZmbk/mpmZmZmZ2T8=","dtype":"float64","order":"little","shape":[4]}},"selected":{"id":"5145"},"selection_policy":{"id":"5146"}},"id":"5100","type":"ColumnDataSource"},{"attributes":{},"id":"5156","type":"Selection"},{"attributes":{"children":[[{"id":"5033"},0,0],[{"id":"5137"},0,1],[{"id":"5066"},0,2]]},"id":"5160","type":"GridBox"},{"attributes":{},"id":"5057","type":"HelpTool"},{"attributes":{},"id":"5157","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"5161"}},"id":"5162","type":"ToolbarBox"},{"attributes":{},"id":"5052","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"5109","type":"Circle"},{"attributes":{"children":[{"id":"5123"},{"id":"5120"},{"id":"5126"}]},"id":"5135","type":"Row"},{"attributes":{"overlay":{"id":"5091"}},"id":"5087","type":"BoxZoomTool"},{"attributes":{"axis_label":"CDF","formatter":{"id":"5153"},"major_label_policy":{"id":"5154"},"ticker":{"id":"5082"}},"id":"5081","type":"LinearAxis"},{"attributes":{"width":30},"id":"5137","type":"Spacer"},{"attributes":{},"id":"5082","type":"BasicTicker"},{"attributes":{},"id":"5089","type":"ResetTool"},{"attributes":{"toolbars":[{"id":"5059"},{"id":"5092"}],"tools":[{"id":"5052"},{"id":"5053"},{"id":"5054"},{"id":"5055"},{"id":"5056"},{"id":"5057"},{"id":"5085"},{"id":"5086"},{"id":"5087"},{"id":"5088"},{"id":"5089"},{"id":"5090"}]},"id":"5161","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"5101"},"glyph":{"id":"5103"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5104"},"view":{"id":"5106"}},"id":"5105","type":"GlyphRenderer"},{"attributes":{},"id":"5085","type":"PanTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"5103","type":"Line"},{"attributes":{},"id":"5146","type":"UnionRenderers"},{"attributes":{"children":[{"id":"5160"},{"id":"5162"}]},"id":"5163","type":"Row"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"5108","type":"Circle"},{"attributes":{},"id":"5088","type":"SaveTool"},{"attributes":{},"id":"5139","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"5058"}},"id":"5054","type":"BoxZoomTool"},{"attributes":{},"id":"5140","type":"AllLabels"},{"attributes":{"height":10},"id":"5164","type":"Spacer"},{"attributes":{},"id":"5038","type":"DataRange1d"},{"attributes":{},"id":"5150","type":"BasicTickFormatter"},{"attributes":{},"id":"5053","type":"WheelZoomTool"},{"attributes":{"axis_label":"category","formatter":{"id":"5139"},"major_label_policy":{"id":"5140"},"ticker":{"id":"5045"}},"id":"5044","type":"LinearAxis"},{"attributes":{},"id":"5151","type":"AllLabels"},{"attributes":{"axis":{"id":"5044"},"ticker":null},"id":"5047","type":"Grid"},{"attributes":{"children":[{"id":"5136"},{"id":"5164"},{"id":"5163"}]},"id":"5165","type":"Column"},{"attributes":{"axis":{"id":"5048"},"dimension":1,"ticker":null},"id":"5051","type":"Grid"},{"attributes":{},"id":"5055","type":"SaveTool"},{"attributes":{},"id":"5056","type":"ResetTool"},{"attributes":{"axis_label":"PMF","formatter":{"id":"5142"},"major_label_policy":{"id":"5143"},"ticker":{"id":"5049"}},"id":"5048","type":"LinearAxis"},{"attributes":{},"id":"5142","type":"BasicTickFormatter"},{"attributes":{},"id":"5040","type":"LinearScale"},{"attributes":{},"id":"5143","type":"AllLabels"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"5091","type":"BoxAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"5052"},{"id":"5053"},{"id":"5054"},{"id":"5055"},{"id":"5056"},{"id":"5057"}]},"id":"5059","type":"Toolbar"},{"attributes":{},"id":"5153","type":"BasicTickFormatter"},{"attributes":{},"id":"5049","type":"BasicTicker"},{"attributes":{"text":" "},"id":"5067","type":"Title"},{"attributes":{},"id":"5154","type":"AllLabels"},{"attributes":{"range_padding":0},"id":"5036","type":"DataRange1d"},{"attributes":{"end":1.05,"start":-0.05},"id":"5099","type":"Range1d"},{"attributes":{},"id":"5045","type":"BasicTicker"},{"attributes":{},"id":"5042","type":"LinearScale"},{"attributes":{"children":[{"id":"5133"},{"id":"5134"},{"id":"5135"}]},"id":"5136","type":"Column"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"5077"}],"border_fill_alpha":0,"center":[{"id":"5080"},{"id":"5084"}],"frame_height":175,"frame_width":300,"left":[{"id":"5081"}],"renderers":[{"id":"5105"}],"title":{"id":"5067"},"toolbar":{"id":"5092"},"toolbar_location":null,"x_range":{"id":"5036"},"x_scale":{"id":"5073"},"y_range":{"id":"5099"},"y_scale":{"id":"5075"}},"id":"5066","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"5114","type":"Segment"},{"attributes":{"source":{"id":"5100"}},"id":"5111","type":"CDSView"},{"attributes":{"text":"Categorical"},"id":"5034","type":"Title"},{"attributes":{"data_source":{"id":"5100"},"glyph":{"id":"5108"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5109"},"view":{"id":"5111"}},"id":"5110","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"5113","type":"Segment"},{"attributes":{},"id":"5145","type":"Selection"},{"attributes":{},"id":"5090","type":"HelpTool"},{"attributes":{"data_source":{"id":"5100"},"glyph":{"id":"5113"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5114"},"view":{"id":"5116"}},"id":"5115","type":"GlyphRenderer"},{"attributes":{"end":1,"js_property_callbacks":{"change:value":[{"id":"5117"}]},"start":0,"step":0.01,"title":"\\u03b8\\u2082","value":0.3},"id":"5119","type":"Slider"},{"attributes":{},"id":"5086","type":"WheelZoomTool"},{"attributes":{"source":{"id":"5100"}},"id":"5116","type":"CDSView"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"5044"}],"border_fill_alpha":0,"center":[{"id":"5047"},{"id":"5051"}],"frame_height":175,"frame_width":300,"left":[{"id":"5048"}],"renderers":[{"id":"5110"},{"id":"5115"}],"title":{"id":"5034"},"toolbar":{"id":"5059"},"toolbar_location":null,"x_range":{"id":"5036"},"x_scale":{"id":"5040"},"y_range":{"id":"5038"},"y_scale":{"id":"5042"}},"id":"5033","subtype":"Figure","type":"Plot"},{"attributes":{"args":{"arg1":{"id":"5118"},"arg2":{"id":"5119"},"arg3":{"id":"5120"},"discrete":true,"dist":"categorical","n":400,"source_c":{"id":"5101"},"source_p":{"id":"5100"},"xrange":{"id":"5036"}},"code":"function arange(start, stop) {\\n\\tvar x = [];\\n\\tfor (var i = start; i &lt; stop; i++) x.push(i);\\n\\treturn x;\\n}\\n\\nfunction discrete_cdf(cumsum, y_p) {\\n    var y_c = [];\\n\\n    y_c.push(cumsum, cumsum);\\n    for (var i = 0; i &lt; y_p.length; i++) {\\n        if (!isNaN(y_p[i])) cumsum += y_p[i];\\n        y_c.push(cumsum, cumsum);\\n    }\\n\\n    return y_c;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_discrete(probFun, x_p, y_p, arg1, arg2, arg3) {\\n    // Compute CDF\\n    var cumsum = 0.0;\\n    var summand = 0.0;\\n    for (var i = 0; i &lt; x_p[0]; i++) {\\n        summand = probFun(x_p[i], arg1, arg2, arg3);\\n        if (!isNaN(summand)) cumsum += summand;\\n    }\\n\\n    y_c = discrete_cdf(cumsum, y_p);\\n    return y_c;\\n}\\n\\nfunction probFun(cat, theta1, theta2, theta3) {\\n    var theta4 = 1 - theta1 - theta2 - theta3\\n    if (theta4 &lt; 0) return 0.0;\\n    if (![1, 2, 3, 4].includes(cat)) return NaN;\\n\\n    var probs = [theta1, theta2, theta3, theta4]\\n\\n    return probs[cat-1];\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points for discrete distributions\\nif (dist == &#x27;bernoulli&#x27;) {\\n\\txRangeMin = 0.0;\\n\\txRangeMax = 1.0;\\n}\\nelse if (dist == &#x27;categorical&#x27;) {\\n\\txRangeMin = 1;\\n\\txRangeMax = x_p.length;\\n}\\nelse {\\n  \\txRangeMin = Math.max(0, Math.floor(xRangeMin));\\n\\txRangeMax = Math.floor(xRangeMax);\\n}\\n\\n// x-values to evaluate PMF and CDF\\nx_p = arange(xRangeMin, xRangeMax+1);\\nlet xSize = xRangeMax - xRangeMin;\\n\\nx_c = [];\\nfor (var i = 0; i &lt; x_p.length; i++) x_c.push(x_p[i], x_p[i]);\\n\\nx_c.unshift(Math.max(xRangeMin - 0.05 * xSize, xRangeMin - 0.95));\\nx_c.push(Math.min(xRangeMax + 0.05 * xSize, xRangeMax + 0.95));\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PMF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_discrete(probFun, \\n\\tx_c, source_p.data[&#x27;y_p&#x27;], arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"5117","type":"CustomJS"},{"attributes":{"active_multi":null,"tools":[{"id":"5085"},{"id":"5086"},{"id":"5087"},{"id":"5088"},{"id":"5089"},{"id":"5090"}]},"id":"5092","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"5058","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"5081"},"dimension":1,"ticker":null},"id":"5084","type":"Grid"}],"root_ids":["5165"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"787ad08b-347a-4656-ad1a-4401475ec878","root_ids":["5165"],"roots":{"5165":"adf64192-44a7-4d32-aaa1-d740d9755470"}}];
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