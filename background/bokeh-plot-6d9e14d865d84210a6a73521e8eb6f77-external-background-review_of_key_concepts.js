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
    
      
      
    
      var element = document.getElementById("d05d0793-70e4-43e0-8e63-a09f83ce7645");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd05d0793-70e4-43e0-8e63-a09f83ce7645' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d998fc17-f434-45c1-960d-24e8f765df36":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1104","type":"Selection"},{"attributes":{},"id":"1107","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"1089","type":"Circle"},{"attributes":{"data_source":{"id":"1092"},"glyph":{"id":"1093"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1094"},"view":{"id":"1096"}},"id":"1095","type":"GlyphRenderer"},{"attributes":{},"id":"1084","type":"SaveTool"},{"attributes":{"source":{"id":"1087"}},"id":"1091","type":"CDSView"},{"attributes":{},"id":"1072","type":"LinearScale"},{"attributes":{"source":{"id":"1092"}},"id":"1096","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"1084"}]},"id":"1085","type":"Toolbar"},{"attributes":{"text":"Binomial PMF"},"id":"1066","type":"Title"},{"attributes":{},"id":"1098","type":"BasicTickFormatter"},{"attributes":{},"id":"1081","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"1088","type":"Circle"},{"attributes":{"axis":{"id":"1080"},"dimension":1,"ticker":null},"id":"1083","type":"Grid"},{"attributes":{"data":{"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y":{"__ndarray__":"kaP0wqgeMD/1J5gKo8JkP3FA17BgZok/rFSmiJCgoz9g5vsoYHy1P98lspektcE/EYbCVsjOxj+a/hUjt3/HP2HtAQniq8M/RcLJCfsFuz/il9PGYKCuP4/oNNKar5w/MOIoi5oqhj97626RxBtsP1S8Q0jS9Uw/ptQ3QMneJz/sz+qr873+Phibhux3z80+Fm09FNF5lD5uGISF7MNRPiZBcAQvSf09","dtype":"float64","order":"little","shape":[21]}},"selected":{"id":"1104"},"selection_policy":{"id":"1105"}},"id":"1087","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"value":0},"y1":{"field":"y1"}},"id":"1094","type":"Segment"},{"attributes":{"axis_label":"f(n; 20, 0.34)","formatter":{"id":"1101"},"major_label_policy":{"id":"1102"},"ticker":{"id":"1081"}},"id":"1080","type":"LinearAxis"},{"attributes":{},"id":"1070","type":"DataRange1d"},{"attributes":{"data":{"x0":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"x1":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":{"__ndarray__":"kaP0wqgeMD/1J5gKo8JkP3FA17BgZok/rFSmiJCgoz9g5vsoYHy1P98lspektcE/EYbCVsjOxj+a/hUjt3/HP2HtAQniq8M/RcLJCfsFuz/il9PGYKCuP4/oNNKar5w/MOIoi5oqhj97626RxBtsP1S8Q0jS9Uw/ptQ3QMneJz/sz+qr873+Phibhux3z80+Fm09FNF5lD5uGISF7MNRPiZBcAQvSf09","dtype":"float64","order":"little","shape":[21]}},"selected":{"id":"1106"},"selection_policy":{"id":"1107"}},"id":"1092","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"1076"},"ticker":null},"id":"1079","type":"Grid"},{"attributes":{},"id":"1068","type":"DataRange1d"},{"attributes":{},"id":"1077","type":"BasicTicker"},{"attributes":{"axis_label":"n","formatter":{"id":"1098"},"major_label_policy":{"id":"1099"},"ticker":{"id":"1077"}},"id":"1076","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1087"},"glyph":{"id":"1088"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1089"},"view":{"id":"1091"}},"id":"1090","type":"GlyphRenderer"},{"attributes":{},"id":"1105","type":"UnionRenderers"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"1076"}],"border_fill_alpha":0,"center":[{"id":"1079"},{"id":"1083"}],"height":200,"left":[{"id":"1080"}],"renderers":[{"id":"1090"},{"id":"1095"}],"title":{"id":"1066"},"toolbar":{"id":"1085"},"width":300,"x_range":{"id":"1068"},"x_scale":{"id":"1072"},"y_range":{"id":"1070"},"y_scale":{"id":"1074"}},"id":"1065","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"value":0},"y1":{"field":"y1"}},"id":"1093","type":"Segment"},{"attributes":{},"id":"1102","type":"AllLabels"},{"attributes":{},"id":"1101","type":"BasicTickFormatter"},{"attributes":{},"id":"1074","type":"LinearScale"},{"attributes":{},"id":"1099","type":"AllLabels"},{"attributes":{},"id":"1106","type":"Selection"}],"root_ids":["1065"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"d998fc17-f434-45c1-960d-24e8f765df36","root_ids":["1065"],"roots":{"1065":"d05d0793-70e4-43e0-8e63-a09f83ce7645"}}];
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