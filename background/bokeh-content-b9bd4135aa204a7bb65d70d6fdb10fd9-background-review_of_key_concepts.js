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
    
    
    const element = document.getElementById("c409331c-04e8-4d16-962f-e6a8253eed08");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c409331c-04e8-4d16-962f-e6a8253eed08' but no matching script tag was found.")
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
                  const docs_json = '{"26f69c13-67db-4515-84e3-1a889f193be9":{"version":"3.3.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1036","attributes":{"width":300,"height":200,"x_range":{"type":"object","name":"DataRange1d","id":"p1037"},"y_range":{"type":"object","name":"DataRange1d","id":"p1038"},"x_scale":{"type":"object","name":"LinearScale","id":"p1046"},"y_scale":{"type":"object","name":"LinearScale","id":"p1047"},"title":{"type":"object","name":"Title","id":"p1039","attributes":{"text":"Binomial PMF"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1065","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1059","attributes":{"selected":{"type":"object","name":"Selection","id":"p1060","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1061"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAAAARAAAAEgAAABMAAAAUAAAA"},"shape":[21],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"hqP0wqgeMD/1J5gKo8JkP35A17BgZok/rFSmiJCgoz9g5vsoYHy1P98lspektcE/EYbCVsjOxj+a/hUjt3/HP2HtAQniq8M/RcLJCfsFuz/pl9PGYKCuP53oNNKar5w/MOIoi5oqhj97626RxBtsP1S8Q0jS9Uw/ptQ3QMneJz/sz+qr873+Phibhux3z80+Fm09FNF5lD5uGISF7MNRPiZBcAQvSf09"},"shape":[21],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1066","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1067"}}},"glyph":{"type":"object","name":"Circle","id":"p1062","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#1f77b4"},"fill_color":{"type":"value","value":"#1f77b4"}}},"nonselection_glyph":{"type":"object","name":"Circle","id":"p1063","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#1f77b4"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Circle","id":"p1064","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":5},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#1f77b4"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p1074","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1068","attributes":{"selected":{"type":"object","name":"Selection","id":"p1069","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1070"},"data":{"type":"map","entries":[["x0",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAAAARAAAAEgAAABMAAAAUAAAA"},"shape":[21],"dtype":"int32","order":"little"}],["x1",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAAAARAAAAEgAAABMAAAAUAAAA"},"shape":[21],"dtype":"int32","order":"little"}],["y1",{"type":"ndarray","array":{"type":"bytes","data":"hqP0wqgeMD/1J5gKo8JkP35A17BgZok/rFSmiJCgoz9g5vsoYHy1P98lspektcE/EYbCVsjOxj+a/hUjt3/HP2HtAQniq8M/RcLJCfsFuz/pl9PGYKCuP53oNNKar5w/MOIoi5oqhj97626RxBtsP1S8Q0jS9Uw/ptQ3QMneJz/sz+qr873+Phibhux3z80+Fm09FNF5lD5uGISF7MNRPiZBcAQvSf09"},"shape":[21],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1075","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1076"}}},"glyph":{"type":"object","name":"Segment","id":"p1071","attributes":{"x0":{"type":"field","field":"x0"},"y0":{"type":"value","value":0},"x1":{"type":"field","field":"x1"},"y1":{"type":"field","field":"y1"},"line_color":{"type":"value","value":"#1f77b4"},"line_width":{"type":"value","value":2}}},"nonselection_glyph":{"type":"object","name":"Segment","id":"p1072","attributes":{"x0":{"type":"field","field":"x0"},"y0":{"type":"value","value":0},"x1":{"type":"field","field":"x1"},"y1":{"type":"field","field":"y1"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2}}},"muted_glyph":{"type":"object","name":"Segment","id":"p1073","attributes":{"x0":{"type":"field","field":"x0"},"y0":{"type":"value","value":0},"x1":{"type":"field","field":"x1"},"y1":{"type":"field","field":"y1"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1045","attributes":{"tools":[{"type":"object","name":"SaveTool","id":"p1058"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1053","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1054","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1055"},"axis_label":"f(n; 20, 0.34)","major_label_policy":{"type":"object","name":"AllLabels","id":"p1056"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1048","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1049","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1050"},"axis_label":"n","major_label_policy":{"type":"object","name":"AllLabels","id":"p1051"}}}],"center":[{"type":"object","name":"Grid","id":"p1052","attributes":{"axis":{"id":"p1048"}}},{"type":"object","name":"Grid","id":"p1057","attributes":{"dimension":1,"axis":{"id":"p1053"}}}],"background_fill_alpha":0,"border_fill_alpha":0}}]}}';
                  const render_items = [{"docid":"26f69c13-67db-4515-84e3-1a889f193be9","roots":{"p1036":"c409331c-04e8-4d16-962f-e6a8253eed08"},"root_ids":["p1036"]}];
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