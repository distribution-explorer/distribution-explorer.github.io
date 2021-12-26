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
    
      
      
    
      var element = document.getElementById("7c777aef-8481-4d89-9b2d-7e855d00fd57");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7c777aef-8481-4d89-9b2d-7e855d00fd57' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4b5a3c48-7a73-4a4d-8182-58413457e1fb":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1034","type":"AllLabels"},{"attributes":{},"id":"1032","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1024"}},"id":"1028","type":"CDSView"},{"attributes":{},"id":"1036","type":"Selection"},{"attributes":{"axis":{"id":"1017"},"dimension":1,"ticker":null},"id":"1020","type":"Grid"},{"attributes":{},"id":"1014","type":"BasicTicker"},{"attributes":{},"id":"1037","type":"UnionRenderers"},{"attributes":{},"id":"1007","type":"DataRange1d"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{},"id":"1018","type":"BasicTicker"},{"attributes":{"axis_label":"x","formatter":{"id":"1035"},"major_label_policy":{"id":"1034"},"ticker":{"id":"1014"}},"id":"1013","type":"LinearAxis"},{"attributes":{"axis_label":"f(x; 1.68, 5)","formatter":{"id":"1032"},"major_label_policy":{"id":"1031"},"ticker":{"id":"1018"}},"id":"1017","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1024"},"glyph":{"id":"1025"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1026"},"view":{"id":"1028"}},"id":"1027","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]}},"selected":{"id":"1036"},"selection_policy":{"id":"1037"}},"id":"1024","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"1021"}]},"id":"1022","type":"Toolbar"},{"attributes":{"axis":{"id":"1013"},"ticker":null},"id":"1016","type":"Grid"},{"attributes":{},"id":"1035","type":"BasicTickFormatter"},{"attributes":{"text":"Gamma PDF"},"id":"1003","type":"Title"},{"attributes":{"end":4,"start":-0.15},"id":"1005","type":"Range1d"},{"attributes":{},"id":"1031","type":"AllLabels"},{"attributes":{},"id":"1011","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1026","type":"Line"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1025","type":"Line"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"1013"}],"border_fill_alpha":0,"center":[{"id":"1016"},{"id":"1020"}],"height":200,"left":[{"id":"1017"}],"renderers":[{"id":"1027"}],"title":{"id":"1003"},"toolbar":{"id":"1022"},"width":300,"x_range":{"id":"1005"},"x_scale":{"id":"1009"},"y_range":{"id":"1007"},"y_scale":{"id":"1011"}},"id":"1002","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1021","type":"SaveTool"}],"root_ids":["1002"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"4b5a3c48-7a73-4a4d-8182-58413457e1fb","root_ids":["1002"],"roots":{"1002":"7c777aef-8481-4d89-9b2d-7e855d00fd57"}}];
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