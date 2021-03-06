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
    
      
      
    
      var element = document.getElementById("eb08cb2a-ae6b-438b-b0e4-b50c21568f5a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'eb08cb2a-ae6b-438b-b0e4-b50c21568f5a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"94e0c35b-5e3a-4c8e-86ae-24f75c7be6bc":{"roots":{"references":[{"attributes":{"background_fill_alpha":0,"below":[{"id":"3466"}],"border_fill_alpha":0,"center":[{"id":"3469"},{"id":"3473"}],"frame_height":150,"frame_width":200,"left":[{"id":"3470"}],"renderers":[{"id":"3480"}],"title":{"id":"3483"},"toolbar":{"id":"3475"},"x_range":{"id":"3458"},"x_scale":{"id":"3462"},"y_range":{"id":"3460"},"y_scale":{"id":"3464"}},"id":"3457","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"3470"},"dimension":1,"ticker":null},"id":"3473","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3479","type":"Line"},{"attributes":{"num_minor_ticks":10},"id":"3471","type":"LogTicker"},{"attributes":{"axis":{"id":"3466"},"ticker":null},"id":"3469","type":"Grid"},{"attributes":{"axis_label":"CCDF","formatter":{"id":"3484"},"ticker":{"id":"3471"}},"id":"3470","type":"LogAxis"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3478","type":"Line"},{"attributes":{},"id":"3489","type":"UnionRenderers"},{"attributes":{"text":""},"id":"3483","type":"Title"},{"attributes":{"num_minor_ticks":10},"id":"3467","type":"LogTicker"},{"attributes":{"axis_label":"y","formatter":{"id":"3486"},"ticker":{"id":"3467"}},"id":"3466","type":"LogAxis"},{"attributes":{"ticker":null},"id":"3486","type":"LogTickFormatter"},{"attributes":{},"id":"3464","type":"LogScale"},{"attributes":{"data_source":{"id":"3477"},"glyph":{"id":"3478"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3479"},"selection_glyph":null,"view":{"id":"3481"}},"id":"3480","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3477"}},"id":"3481","type":"CDSView"},{"attributes":{},"id":"3462","type":"LogScale"},{"attributes":{"ticker":null},"id":"3484","type":"LogTickFormatter"},{"attributes":{},"id":"3460","type":"DataRange1d"},{"attributes":{"end":1000.0,"start":0.1},"id":"3458","type":"Range1d"},{"attributes":{},"id":"3488","type":"Selection"},{"attributes":{},"id":"3474","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZuT8AAAAAAADwPwAAAAAAQI9A","dtype":"float64","order":"little","shape":[3]},"y":{"__ndarray__":"AAAAAAAA8D8AAAAAAADwP43ttaD3xrA+","dtype":"float64","order":"little","shape":[3]}},"selected":{"id":"3488"},"selection_policy":{"id":"3489"}},"id":"3477","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3474"}]},"id":"3475","type":"Toolbar"}],"root_ids":["3457"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"94e0c35b-5e3a-4c8e-86ae-24f75c7be6bc","root_ids":["3457"],"roots":{"3457":"eb08cb2a-ae6b-438b-b0e4-b50c21568f5a"}}];
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