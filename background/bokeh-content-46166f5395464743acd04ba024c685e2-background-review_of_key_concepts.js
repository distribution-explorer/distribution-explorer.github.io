(function() {
  const fn = function() {
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
    const element = document.getElementById("d1e6b1a9-a9a9-4f9f-a034-59661e3e5cf3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd1e6b1a9-a9a9-4f9f-a034-59661e3e5cf3' but no matching script tag was found.")
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
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.3.0.min.js"];
      const css_urls = [];
    
      const inline_js = [    function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                  const docs_json = '{"8855acf3-8198-4ae3-978f-8a5013ac23c1":{"version":"3.3.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1082","attributes":{"width":300,"height":200,"x_range":{"type":"object","name":"Range1d","id":"p1092","attributes":{"start":-0.15,"end":4}},"y_range":{"type":"object","name":"DataRange1d","id":"p1084"},"x_scale":{"type":"object","name":"LinearScale","id":"p1093"},"y_scale":{"type":"object","name":"LinearScale","id":"p1094"},"title":{"type":"object","name":"Title","id":"p1085","attributes":{"text":"Gamma CDF"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1112","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1106","attributes":{"selected":{"type":"object","name":"Selection","id":"p1107","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1108"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[200],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[200],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1113","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1114"}}},"glyph":{"type":"object","name":"Line","id":"p1109","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1110","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p1111","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"line_width":2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1091","attributes":{"tools":[{"type":"object","name":"SaveTool","id":"p1105"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1100","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1101","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1102"},"axis_label":"F(x; 1.68, 5)","major_label_policy":{"type":"object","name":"AllLabels","id":"p1103"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1095","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1096","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1097"},"axis_label":"x","major_label_policy":{"type":"object","name":"AllLabels","id":"p1098"}}}],"center":[{"type":"object","name":"Grid","id":"p1099","attributes":{"axis":{"id":"p1095"}}},{"type":"object","name":"Grid","id":"p1104","attributes":{"dimension":1,"axis":{"id":"p1100"}}}],"background_fill_alpha":0,"border_fill_alpha":0}}]}}';
                  const render_items = [{"docid":"8855acf3-8198-4ae3-978f-8a5013ac23c1","roots":{"p1082":"d1e6b1a9-a9a9-4f9f-a034-59661e3e5cf3"},"root_ids":["p1082"]}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
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
        for (let i = 0; i < inline_js.length; i++) {
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