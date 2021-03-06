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
    
      
      
    
      var element = document.getElementById("6dfa6967-71eb-45d6-8e65-9b0bb115bc84");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6dfa6967-71eb-45d6-8e65-9b0bb115bc84' but no matching script tag was found.")
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
                    
                  var docs_json = '{"938f1b2c-b61e-4a4a-809e-0fe2e6811578":{"roots":{"references":[{"attributes":{"data_source":{"id":"1374"},"glyph":{"id":"1375"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1376"},"selection_glyph":null,"view":{"id":"1378"}},"id":"1377","type":"GlyphRenderer"},{"attributes":{},"id":"1371","type":"SaveTool"},{"attributes":{"axis_label":"x","formatter":{"id":"1383"},"ticker":{"id":"1364"}},"id":"1363","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1376","type":"Line"},{"attributes":{"axis":{"id":"1363"},"ticker":null},"id":"1366","type":"Grid"},{"attributes":{},"id":"1357","type":"DataRange1d"},{"attributes":{},"id":"1381","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1363"}],"center":[{"id":"1366"},{"id":"1370"}],"left":[{"id":"1367"}],"plot_height":200,"plot_width":300,"renderers":[{"id":"1377"}],"title":{"id":"1380"},"toolbar":{"id":"1372"},"x_range":{"id":"1355"},"x_scale":{"id":"1359"},"y_range":{"id":"1357"},"y_scale":{"id":"1361"}},"id":"1354","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1359","type":"LinearScale"},{"attributes":{"range_padding":0},"id":"1355","type":"DataRange1d"},{"attributes":{"axis_label":"f(x)","formatter":{"id":"1381"},"ticker":{"id":"1368"}},"id":"1367","type":"LinearAxis"},{"attributes":{},"id":"1361","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]}},"selected":{"id":"1385"},"selection_policy":{"id":"1386"}},"id":"1374","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"1367"},"dimension":1,"ticker":null},"id":"1370","type":"Grid"},{"attributes":{},"id":"1368","type":"BasicTicker"},{"attributes":{},"id":"1364","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1371"}]},"id":"1372","type":"Toolbar"},{"attributes":{},"id":"1383","type":"BasicTickFormatter"},{"attributes":{"text":""},"id":"1380","type":"Title"},{"attributes":{"source":{"id":"1374"}},"id":"1378","type":"CDSView"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1375","type":"Line"},{"attributes":{},"id":"1385","type":"Selection"},{"attributes":{},"id":"1386","type":"UnionRenderers"}],"root_ids":["1354"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"938f1b2c-b61e-4a4a-809e-0fe2e6811578","root_ids":["1354"],"roots":{"1354":"6dfa6967-71eb-45d6-8e65-9b0bb115bc84"}}];
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