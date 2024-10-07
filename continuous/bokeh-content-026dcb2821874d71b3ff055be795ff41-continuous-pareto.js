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
    
    
    const element = document.getElementById("dde94b25-fac5-4522-b9ba-c0768282a04e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dde94b25-fac5-4522-b9ba-c0768282a04e' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.4.1.min.js"];
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
                  const docs_json = '{"f8174a23-f480-4616-b09d-6ef1485436e6":{"version":"3.4.1","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p3180","attributes":{"width":275,"height":175,"x_range":{"type":"object","name":"Range1d","id":"p3189","attributes":{"start":0.1,"end":1000.0}},"y_range":{"type":"object","name":"DataRange1d","id":"p3182"},"x_scale":{"type":"object","name":"LogScale","id":"p3190"},"y_scale":{"type":"object","name":"LogScale","id":"p3191"},"title":{"type":"object","name":"Title","id":"p3187"},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p3209","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p3203","attributes":{"selected":{"type":"object","name":"Selection","id":"p3204","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p3205"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"mpmZmZmZuT8AAAAAAADwPwAAAAAAQI9A"},"shape":[3],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAAA8D8AAAAAAADwP43ttaD3xrA+"},"shape":[3],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p3210","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p3211"}}},"glyph":{"type":"object","name":"Line","id":"p3206","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p3207","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p3208","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"line_width":2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p3188","attributes":{"tools":[{"type":"object","name":"SaveTool","id":"p3202"}]}},"left":[{"type":"object","name":"LogAxis","id":"p3197","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p3198","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p3199"},"axis_label":"CCDF","major_label_policy":{"type":"object","name":"AllLabels","id":"p3200"}}}],"below":[{"type":"object","name":"LogAxis","id":"p3192","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p3193","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p3194"},"axis_label":"y","major_label_policy":{"type":"object","name":"AllLabels","id":"p3195"}}}],"center":[{"type":"object","name":"Grid","id":"p3196","attributes":{"axis":{"id":"p3192"}}},{"type":"object","name":"Grid","id":"p3201","attributes":{"dimension":1,"axis":{"id":"p3197"}}}],"background_fill_alpha":0,"border_fill_alpha":0}}]}}';
                  const render_items = [{"docid":"f8174a23-f480-4616-b09d-6ef1485436e6","roots":{"p3180":"dde94b25-fac5-4522-b9ba-c0768282a04e"},"root_ids":["p3180"]}];
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