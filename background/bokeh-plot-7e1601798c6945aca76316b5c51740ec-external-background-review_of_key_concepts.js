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
    
      
      
    
      var element = document.getElementById("15199316-9634-4720-bfe6-b0436cbd1e28");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '15199316-9634-4720-bfe6-b0436cbd1e28' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
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
                    
                  var docs_json = '{&quot;ff7d1481-5256-4353-b5ab-f58787666b81&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1090&quot;}},&quot;id&quot;:&quot;1094&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1102&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1103&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Binomial PMF&quot;},&quot;id&quot;:&quot;1064&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x0&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],&quot;x1&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],&quot;y1&quot;:{&quot;__ndarray__&quot;:&quot;nKP0wqgeMD8FKJgKo8JkP3xA17BgZok/u1SmiJCgoz9u5vsoYHy1P9glspektcE/FobCVsjOxj+l/hUjt3/HP17tAQniq8M/N8LJCfsFuz/kl9PGYKCuP3noNNKar5w/OOIoi5oqhj+j626RxBtsP0O8Q0jS9Uw/ntQ3QMneJz/0z+qr873+PhKbhux3z80+Lm09FNF5lD53GISF7MNRPkdBcAQvSf09&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[21]}},&quot;selected&quot;:{&quot;id&quot;:&quot;1103&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1102&quot;}},&quot;id&quot;:&quot;1090&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;1074&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;1077&quot;},{&quot;id&quot;:&quot;1081&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;1078&quot;}],&quot;plot_height&quot;:200,&quot;plot_width&quot;:300,&quot;renderers&quot;:[{&quot;id&quot;:&quot;1088&quot;},{&quot;id&quot;:&quot;1093&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;1064&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;1083&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;1066&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;1070&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;1068&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;1072&quot;}},&quot;id&quot;:&quot;1063&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;nKP0wqgeMD8FKJgKo8JkP3xA17BgZok/u1SmiJCgoz9u5vsoYHy1P9glspektcE/FobCVsjOxj+l/hUjt3/HP17tAQniq8M/N8LJCfsFuz/kl9PGYKCuP3noNNKar5w/OOIoi5oqhj+j626RxBtsP0O8Q0jS9Uw/ntQ3QMneJz/0z+qr873+PhKbhux3z80+Lm09FNF5lD53GISF7MNRPkdBcAQvSf09&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[21]}},&quot;selected&quot;:{&quot;id&quot;:&quot;1101&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1100&quot;}},&quot;id&quot;:&quot;1085&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1100&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1079&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;x0&quot;:{&quot;field&quot;:&quot;x0&quot;},&quot;x1&quot;:{&quot;field&quot;:&quot;x1&quot;},&quot;y0&quot;:{&quot;value&quot;:0},&quot;y1&quot;:{&quot;field&quot;:&quot;y1&quot;}},&quot;id&quot;:&quot;1091&quot;,&quot;type&quot;:&quot;Segment&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1096&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1074&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;1077&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1090&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1091&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1092&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1094&quot;}},&quot;id&quot;:&quot;1093&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1085&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1086&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1087&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1089&quot;}},&quot;id&quot;:&quot;1088&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:5},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1087&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1075&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1070&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1078&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;1081&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;1082&quot;}]},&quot;id&quot;:&quot;1083&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1085&quot;}},&quot;id&quot;:&quot;1089&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1072&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;n&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;1096&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1075&quot;}},&quot;id&quot;:&quot;1074&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1098&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1066&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:5},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1086&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1082&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;x0&quot;:{&quot;field&quot;:&quot;x0&quot;},&quot;x1&quot;:{&quot;field&quot;:&quot;x1&quot;},&quot;y0&quot;:{&quot;value&quot;:0},&quot;y1&quot;:{&quot;field&quot;:&quot;y1&quot;}},&quot;id&quot;:&quot;1092&quot;,&quot;type&quot;:&quot;Segment&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;f(n; 20, 0.34)&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;1098&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1079&quot;}},&quot;id&quot;:&quot;1078&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1101&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1068&quot;,&quot;type&quot;:&quot;DataRange1d&quot;}],&quot;root_ids&quot;:[&quot;1063&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"ff7d1481-5256-4353-b5ab-f58787666b81","root_ids":["1063"],"roots":{"1063":"15199316-9634-4720-bfe6-b0436cbd1e28"}}];
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