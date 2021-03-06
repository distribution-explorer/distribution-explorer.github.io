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
    
      
      
    
      var element = document.getElementById("2311953a-9485-4047-bd9e-7809e24a79ce");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2311953a-9485-4047-bd9e-7809e24a79ce' but no matching script tag was found.")
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
                    
                  var docs_json = '{"84d44c59-da30-4681-9c57-159fe87d77b9":{"roots":{"references":[{"attributes":{},"id":"1091","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1078"},"glyph":{"id":"1079"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1080"},"selection_glyph":null,"view":{"id":"1082"}},"id":"1081","type":"GlyphRenderer"},{"attributes":{},"id":"1065","type":"LinearScale"},{"attributes":{"axis":{"id":"1067"},"ticker":null},"id":"1070","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"1080","type":"Circle"},{"attributes":{},"id":"1061","type":"DataRange1d"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"1067"}],"border_fill_alpha":0,"center":[{"id":"1070"},{"id":"1074"}],"left":[{"id":"1071"}],"plot_height":200,"plot_width":300,"renderers":[{"id":"1081"},{"id":"1086"}],"title":{"id":"1057"},"toolbar":{"id":"1076"},"x_range":{"id":"1059"},"x_scale":{"id":"1063"},"y_range":{"id":"1061"},"y_scale":{"id":"1065"}},"id":"1056","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"1078"}},"id":"1082","type":"CDSView"},{"attributes":{},"id":"1063","type":"LinearScale"},{"attributes":{},"id":"1093","type":"Selection"},{"attributes":{"axis_label":"f(n; 20, 0.34)","formatter":{"id":"1089"},"ticker":{"id":"1072"}},"id":"1071","type":"LinearAxis"},{"attributes":{},"id":"1094","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1071"},"dimension":1,"ticker":null},"id":"1074","type":"Grid"},{"attributes":{},"id":"1072","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1075"}]},"id":"1076","type":"Toolbar"},{"attributes":{},"id":"1068","type":"BasicTicker"},{"attributes":{"axis_label":"n","formatter":{"id":"1091"},"ticker":{"id":"1068"}},"id":"1067","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"value":0},"y1":{"field":"y1"}},"id":"1084","type":"Segment"},{"attributes":{"data":{"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y":{"__ndarray__":"nKP0wqgeMD8FKJgKo8JkP3xA17BgZok/u1SmiJCgoz9u5vsoYHy1P9glspektcE/FobCVsjOxj+l/hUjt3/HP17tAQniq8M/N8LJCfsFuz/kl9PGYKCuP3noNNKar5w/OOIoi5oqhj+j626RxBtsP0O8Q0jS9Uw/ntQ3QMneJz/0z+qr873+PhKbhux3z80+Lm09FNF5lD53GISF7MNRPkdBcAQvSf09","dtype":"float64","order":"little","shape":[21]}},"selected":{"id":"1093"},"selection_policy":{"id":"1094"}},"id":"1078","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"value":0},"y1":{"field":"y1"}},"id":"1085","type":"Segment"},{"attributes":{},"id":"1095","type":"Selection"},{"attributes":{},"id":"1059","type":"DataRange1d"},{"attributes":{"data":{"x0":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"x1":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":{"__ndarray__":"nKP0wqgeMD8FKJgKo8JkP3xA17BgZok/u1SmiJCgoz9u5vsoYHy1P9glspektcE/FobCVsjOxj+l/hUjt3/HP17tAQniq8M/N8LJCfsFuz/kl9PGYKCuP3noNNKar5w/OOIoi5oqhj+j626RxBtsP0O8Q0jS9Uw/ntQ3QMneJz/0z+qr873+PhKbhux3z80+Lm09FNF5lD53GISF7MNRPkdBcAQvSf09","dtype":"float64","order":"little","shape":[21]}},"selected":{"id":"1095"},"selection_policy":{"id":"1096"}},"id":"1083","type":"ColumnDataSource"},{"attributes":{},"id":"1075","type":"SaveTool"},{"attributes":{},"id":"1089","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1083"}},"id":"1087","type":"CDSView"},{"attributes":{},"id":"1096","type":"UnionRenderers"},{"attributes":{"text":"Binomial PMF"},"id":"1057","type":"Title"},{"attributes":{"data_source":{"id":"1083"},"glyph":{"id":"1084"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1085"},"selection_glyph":null,"view":{"id":"1087"}},"id":"1086","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"1079","type":"Circle"}],"root_ids":["1056"]},"title":"Bokeh Application","version":"2.2.2"}}';
                  var render_items = [{"docid":"84d44c59-da30-4681-9c57-159fe87d77b9","root_ids":["1056"],"roots":{"1056":"2311953a-9485-4047-bd9e-7809e24a79ce"}}];
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