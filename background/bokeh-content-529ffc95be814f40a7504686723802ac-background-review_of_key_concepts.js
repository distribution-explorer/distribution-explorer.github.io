(function() {
  const fn = function() {
    'use strict';
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
    const element = document.getElementById("b16d6be8-cdb3-4b0e-9fe6-6ba8523f9b5e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b16d6be8-cdb3-4b0e-9fe6-6ba8523f9b5e' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.7.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.7.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.7.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.7.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.7.3.min.js"];
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
                  const docs_json = '{"eb911ec2-ef8f-4850-9f64-6684c287f33c":{"version":"3.7.3","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1003","attributes":{"width":300,"height":200,"x_range":{"type":"object","name":"Range1d","id":"p1013","attributes":{"start":-0.15,"end":4}},"y_range":{"type":"object","name":"DataRange1d","id":"p1005"},"x_scale":{"type":"object","name":"LinearScale","id":"p1014"},"y_scale":{"type":"object","name":"LinearScale","id":"p1015"},"title":{"type":"object","name":"Title","id":"p1006","attributes":{"text":"Gamma PDF"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1033","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1027","attributes":{"selected":{"type":"object","name":"Selection","id":"p1028","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1029"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[200],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[200],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1034","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1035"}}},"glyph":{"type":"object","name":"Line","id":"p1030","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1031","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p1032","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"line_width":2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1012","attributes":{"tools":[{"type":"object","name":"SaveTool","id":"p1026"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1021","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1022","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1023"},"axis_label":"f(x; 1.68, 5)","major_label_policy":{"type":"object","name":"AllLabels","id":"p1024"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1016","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1017","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1018"},"axis_label":"x","major_label_policy":{"type":"object","name":"AllLabels","id":"p1019"}}}],"center":[{"type":"object","name":"Grid","id":"p1020","attributes":{"axis":{"id":"p1016"}}},{"type":"object","name":"Grid","id":"p1025","attributes":{"dimension":1,"axis":{"id":"p1021"}}}],"background_fill_alpha":0,"border_fill_alpha":0}}]}}';
                  const render_items = [{"docid":"eb911ec2-ef8f-4850-9f64-6684c287f33c","roots":{"p1003":"b16d6be8-cdb3-4b0e-9fe6-6ba8523f9b5e"},"root_ids":["p1003"]}];
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