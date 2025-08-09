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
    
    
    const element = document.getElementById("ce3dda19-80b1-4899-8f32-c5d721005913");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ce3dda19-80b1-4899-8f32-c5d721005913' but no matching script tag was found.")
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
                  const docs_json = '{"c6598645-eab6-46d9-9a1a-f1ee82f61b8a":{"version":"3.7.3","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1171","attributes":{"width":300,"height":200,"x_range":{"type":"object","name":"DataRange1d","id":"p1172"},"y_range":{"type":"object","name":"DataRange1d","id":"p1173"},"x_scale":{"type":"object","name":"LinearScale","id":"p1181"},"y_scale":{"type":"object","name":"LinearScale","id":"p1182"},"title":{"type":"object","name":"Title","id":"p1174","attributes":{"text":"Binomial CDF"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1200","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1194","attributes":{"selected":{"type":"object","name":"Selection","id":"p1195","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1196"},"data":{"type":"map","entries":[["x0",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAAAARAAAAEgAAABMAAAA="},"shape":[20],"dtype":"int32","order":"little"}],["y0",{"type":"ndarray","array":{"type":"bytes","data":"nKP0wqgeMD9wvPYieMZmP5DvlLn+F48/m5ALN5Bmqz9f10Ai1JfBP6J++Vy8ptE/tMFaiCAO3T+H4PIM/mbkP95bM4/2Uek/JJRs8LWy7D+hzdn8u5zuP+V0a9M4gu8/bhiYPePa7z9ahykC//bvP0mYu3Y8/u8/xptPY7r/7z+c8zbf9//vP73uFFP//+8/X3fj9v//7z+ibcX////vPw=="},"shape":[20],"dtype":"float64","order":"little"}],["x1",{"type":"ndarray","array":{"type":"bytes","data":"AQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAA="},"shape":[20],"dtype":"int32","order":"little"}],["y1",{"type":"ndarray","array":{"type":"bytes","data":"nKP0wqgeMD9wvPYieMZmP5DvlLn+F48/m5ALN5Bmqz9f10Ai1JfBP6J++Vy8ptE/tMFaiCAO3T+H4PIM/mbkP95bM4/2Uek/JJRs8LWy7D+hzdn8u5zuP+V0a9M4gu8/bhiYPePa7z9ahykC//bvP0mYu3Y8/u8/xptPY7r/7z+c8zbf9//vP73uFFP//+8/X3fj9v//7z+ibcX////vPw=="},"shape":[20],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1201","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1202"}}},"glyph":{"type":"object","name":"Segment","id":"p1197","attributes":{"x0":{"type":"field","field":"x0"},"y0":{"type":"field","field":"y0"},"x1":{"type":"field","field":"x1"},"y1":{"type":"field","field":"y1"},"line_color":{"type":"value","value":"#1f77b4"},"line_width":{"type":"value","value":2}}},"nonselection_glyph":{"type":"object","name":"Segment","id":"p1198","attributes":{"x0":{"type":"field","field":"x0"},"y0":{"type":"field","field":"y0"},"x1":{"type":"field","field":"x1"},"y1":{"type":"field","field":"y1"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2}}},"muted_glyph":{"type":"object","name":"Segment","id":"p1199","attributes":{"x0":{"type":"field","field":"x0"},"y0":{"type":"field","field":"y0"},"x1":{"type":"field","field":"x1"},"y1":{"type":"field","field":"y1"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2}}}}},{"type":"object","name":"GlyphRenderer","id":"p1209","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1203","attributes":{"selected":{"type":"object","name":"Selection","id":"p1204","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1205"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1210","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1211"}}},"glyph":{"type":"object","name":"Ray","id":"p1206","attributes":{"x":{"type":"value","value":0},"y":{"type":"value","value":0},"angle":{"type":"value","value":3.141592653589793},"line_color":{"type":"value","value":"#1f77b4"},"line_width":{"type":"value","value":2}}},"nonselection_glyph":{"type":"object","name":"Ray","id":"p1207","attributes":{"x":{"type":"value","value":0},"y":{"type":"value","value":0},"angle":{"type":"value","value":3.141592653589793},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2}}},"muted_glyph":{"type":"object","name":"Ray","id":"p1208","attributes":{"x":{"type":"value","value":0},"y":{"type":"value","value":0},"angle":{"type":"value","value":3.141592653589793},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2}}}}},{"type":"object","name":"GlyphRenderer","id":"p1218","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1212","attributes":{"selected":{"type":"object","name":"Selection","id":"p1213","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1214"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1219","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1220"}}},"glyph":{"type":"object","name":"Ray","id":"p1215","attributes":{"x":{"type":"value","value":20},"y":{"type":"value","value":1},"line_color":{"type":"value","value":"#1f77b4"},"line_width":{"type":"value","value":2}}},"nonselection_glyph":{"type":"object","name":"Ray","id":"p1216","attributes":{"x":{"type":"value","value":20},"y":{"type":"value","value":1},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2}}},"muted_glyph":{"type":"object","name":"Ray","id":"p1217","attributes":{"x":{"type":"value","value":20},"y":{"type":"value","value":1},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2}}}}},{"type":"object","name":"GlyphRenderer","id":"p1227","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1221","attributes":{"selected":{"type":"object","name":"Selection","id":"p1222","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1223"},"data":{"type":"map","entries":[["x",[0]],["y",[0]]]}}},"view":{"type":"object","name":"CDSView","id":"p1228","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1229"}}},"glyph":{"type":"object","name":"Scatter","id":"p1224","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"#1f77b4"},"fill_color":{"type":"value","value":"white"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1225","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"white"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1226","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"white"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p1236","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1230","attributes":{"selected":{"type":"object","name":"Selection","id":"p1231","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1232"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"AQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAA="},"shape":[20],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"nKP0wqgeMD9wvPYieMZmP5DvlLn+F48/m5ALN5Bmqz9f10Ai1JfBP6J++Vy8ptE/tMFaiCAO3T+H4PIM/mbkP95bM4/2Uek/JJRs8LWy7D+hzdn8u5zuP+V0a9M4gu8/bhiYPePa7z9ahykC//bvP0mYu3Y8/u8/xptPY7r/7z+c8zbf9//vP73uFFP//+8/X3fj9v//7z+ibcX////vPw=="},"shape":[20],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1237","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1238"}}},"glyph":{"type":"object","name":"Scatter","id":"p1233","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"#1f77b4"},"fill_color":{"type":"value","value":"white"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1234","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"white"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1235","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"white"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p1245","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1239","attributes":{"selected":{"type":"object","name":"Selection","id":"p1240","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1241"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAAAARAAAAEgAAABMAAAAUAAAA"},"shape":[21],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"nKP0wqgeMD9wvPYieMZmP5DvlLn+F48/m5ALN5Bmqz9f10Ai1JfBP6J++Vy8ptE/tMFaiCAO3T+H4PIM/mbkP95bM4/2Uek/JJRs8LWy7D+hzdn8u5zuP+V0a9M4gu8/bhiYPePa7z9ahykC//bvP0mYu3Y8/u8/xptPY7r/7z+c8zbf9//vP73uFFP//+8/X3fj9v//7z+ibcX////vPwAAAAAAAPA/"},"shape":[21],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1246","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1247"}}},"glyph":{"type":"object","name":"Scatter","id":"p1242","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"#1f77b4"},"fill_color":{"type":"value","value":"#1f77b4"}}},"nonselection_glyph":{"type":"object","name":"Scatter","id":"p1243","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#1f77b4"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Scatter","id":"p1244","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#1f77b4"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1180","attributes":{"tools":[{"type":"object","name":"SaveTool","id":"p1193"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1188","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1189","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1190"},"axis_label":"F(n; 20, 0.34)","major_label_policy":{"type":"object","name":"AllLabels","id":"p1191"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1183","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1184","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1185"},"axis_label":"n","major_label_policy":{"type":"object","name":"AllLabels","id":"p1186"}}}],"center":[{"type":"object","name":"Grid","id":"p1187","attributes":{"axis":{"id":"p1183"}}},{"type":"object","name":"Grid","id":"p1192","attributes":{"dimension":1,"axis":{"id":"p1188"}}}],"background_fill_alpha":0,"border_fill_alpha":0}}]}}';
                  const render_items = [{"docid":"c6598645-eab6-46d9-9a1a-f1ee82f61b8a","roots":{"p1171":"ce3dda19-80b1-4899-8f32-c5d721005913"},"root_ids":["p1171"]}];
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