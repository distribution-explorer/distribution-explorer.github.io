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
    
      
      
    
      var element = document.getElementById("c291fe1e-b612-43a3-894f-1a338b09f77a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c291fe1e-b612-43a3-894f-1a338b09f77a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e745a273-bfff-4bdf-9dcd-18d4c4c9e72b":{"defs":[],"roots":{"references":[{"attributes":{"num_minor_ticks":10},"id":"3736","type":"LogTicker"},{"attributes":{},"id":"3757","type":"AllLabels"},{"attributes":{"ticker":null},"id":"3755","type":"LogTickFormatter"},{"attributes":{"axis":{"id":"3735"},"ticker":null},"id":"3738","type":"Grid"},{"attributes":{},"id":"3731","type":"LogScale"},{"attributes":{},"id":"3759","type":"Selection"},{"attributes":{"ticker":null},"id":"3758","type":"LogTickFormatter"},{"attributes":{"source":{"id":"3746"}},"id":"3750","type":"CDSView"},{"attributes":{"axis_label":"y","formatter":{"id":"3758"},"major_label_policy":{"id":"3757"},"ticker":{"id":"3736"}},"id":"3735","type":"LogAxis"},{"attributes":{},"id":"3760","type":"UnionRenderers"},{"attributes":{},"id":"3733","type":"LogScale"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"3735"}],"border_fill_alpha":0,"center":[{"id":"3738"},{"id":"3742"}],"frame_height":150,"frame_width":200,"left":[{"id":"3739"}],"renderers":[{"id":"3749"}],"title":{"id":"3752"},"toolbar":{"id":"3744"},"x_range":{"id":"3727"},"x_scale":{"id":"3731"},"y_range":{"id":"3729"},"y_scale":{"id":"3733"}},"id":"3726","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3743","type":"SaveTool"},{"attributes":{"end":1000.0,"start":0.1},"id":"3727","type":"Range1d"},{"attributes":{"data_source":{"id":"3746"},"glyph":{"id":"3747"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3748"},"view":{"id":"3750"}},"id":"3749","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3748","type":"Line"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3747","type":"Line"},{"attributes":{},"id":"3752","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZuT8AAAAAAADwPwAAAAAAQI9A","dtype":"float64","order":"little","shape":[3]},"y":{"__ndarray__":"AAAAAAAA8D8AAAAAAADwP43ttaD3xrA+","dtype":"float64","order":"little","shape":[3]}},"selected":{"id":"3759"},"selection_policy":{"id":"3760"}},"id":"3746","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"3743"}]},"id":"3744","type":"Toolbar"},{"attributes":{},"id":"3754","type":"AllLabels"},{"attributes":{"num_minor_ticks":10},"id":"3740","type":"LogTicker"},{"attributes":{"axis_label":"CCDF","formatter":{"id":"3755"},"major_label_policy":{"id":"3754"},"ticker":{"id":"3740"}},"id":"3739","type":"LogAxis"},{"attributes":{"axis":{"id":"3739"},"dimension":1,"ticker":null},"id":"3742","type":"Grid"},{"attributes":{},"id":"3729","type":"DataRange1d"}],"root_ids":["3726"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"e745a273-bfff-4bdf-9dcd-18d4c4c9e72b","root_ids":["3726"],"roots":{"3726":"c291fe1e-b612-43a3-894f-1a338b09f77a"}}];
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