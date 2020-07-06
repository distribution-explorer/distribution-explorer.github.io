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
    
      
      
    
      var element = document.getElementById("215d5fc0-1800-49d3-926f-e7ee22608bf9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '215d5fc0-1800-49d3-926f-e7ee22608bf9' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;cd501f37-c880-49fa-a118-0cf2ae3e3f82&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1164&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1170&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;end&quot;:4,&quot;start&quot;:-0.15},&quot;id&quot;:&quot;1143&quot;,&quot;type&quot;:&quot;Range1d&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;1151&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;1154&quot;},{&quot;id&quot;:&quot;1158&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;1155&quot;}],&quot;plot_height&quot;:200,&quot;plot_width&quot;:300,&quot;renderers&quot;:[{&quot;id&quot;:&quot;1165&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;1141&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;1160&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;1143&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;1147&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;1145&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;1149&quot;}},&quot;id&quot;:&quot;1140&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1163&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1155&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;1158&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;F(x; 1.68, 5)&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;1170&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1156&quot;}},&quot;id&quot;:&quot;1155&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1145&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1162&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1163&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1164&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1166&quot;}},&quot;id&quot;:&quot;1165&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1156&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;x&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;1168&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1152&quot;}},&quot;id&quot;:&quot;1151&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1152&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1147&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;1159&quot;}]},&quot;id&quot;:&quot;1160&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;1173&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1172&quot;}},&quot;id&quot;:&quot;1162&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1173&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1151&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;1154&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Gamma CDF&quot;},&quot;id&quot;:&quot;1141&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1162&quot;}},&quot;id&quot;:&quot;1166&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1168&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1149&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1159&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1172&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;}],&quot;root_ids&quot;:[&quot;1140&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"cd501f37-c880-49fa-a118-0cf2ae3e3f82","root_ids":["1140"],"roots":{"1140":"215d5fc0-1800-49d3-926f-e7ee22608bf9"}}];
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