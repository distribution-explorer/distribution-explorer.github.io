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
    
    
    const element = document.getElementById("d3a1e119-616f-44a8-bc8b-3dd0559e4767");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd3a1e119-616f-44a8-bc8b-3dd0559e4767' but no matching script tag was found.")
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
                  const docs_json = '{"1c4e7af9-0934-4a15-a7e3-1e6ba1549183":{"version":"3.3.0","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1117","attributes":{"width":300,"height":200,"x_range":{"type":"object","name":"DataRange1d","id":"p1118"},"y_range":{"type":"object","name":"DataRange1d","id":"p1119"},"x_scale":{"type":"object","name":"LinearScale","id":"p1127"},"y_scale":{"type":"object","name":"LinearScale","id":"p1128"},"title":{"type":"object","name":"Title","id":"p1120","attributes":{"text":"Binomial CDF"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1146","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1140","attributes":{"selected":{"type":"object","name":"Selection","id":"p1141","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1142"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"ZmZmZmZm7r8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAABAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAAEEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAHEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAiQAAAAAAAACJAAAAAAAAAJEAAAAAAAAAkQAAAAAAAACZAAAAAAAAAJkAAAAAAAAAoQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAALEAAAAAAAAAuQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAwQAAAAAAAADFAAAAAAAAAMUAAAAAAAAAyQAAAAAAAADJAAAAAAAAAM0AAAAAAAAAzQAAAAAAAADRAAAAAAAAANEAzMzMzM/M0QA=="},"shape":[44],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAAAAAAAAAAAAAAAAJyj9MKoHjA/nKP0wqgeMD9wvPYieMZmP3C89iJ4xmY/kO+Uuf4Xjz+Q75S5/hePP5uQCzeQZqs/m5ALN5Bmqz9f10Ai1JfBP1/XQCLUl8E/on75XLym0T+ifvlcvKbRP7TBWoggDt0/tMFaiCAO3T+H4PIM/mbkP4fg8gz+ZuQ/3lszj/ZR6T/eWzOP9lHpPySUbPC1suw/JJRs8LWy7D+hzdn8u5zuP6HN2fy7nO4/5XRr0ziC7z/ldGvTOILvP24YmD3j2u8/bhiYPePa7z9ahykC//bvP1qHKQL/9u8/SZi7djz+7z9JmLt2PP7vP8abT2O6/+8/xptPY7r/7z+c8zbf9//vP5zzNt/3/+8/ve4UU///7z+97hRT///vP1934/b//+8/X3fj9v//7z+ibcX////vP6Jtxf///+8/AAAAAAAA8D8AAAAAAADwPw=="},"shape":[44],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1147","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1148"}}},"glyph":{"type":"object","name":"Line","id":"p1143","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1144","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p1145","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"#1f77b4","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p1155","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1149","attributes":{"selected":{"type":"object","name":"Selection","id":"p1150","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1151"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1156","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1157"}}},"glyph":{"type":"object","name":"Ray","id":"p1152","attributes":{"x":{"type":"value","value":0},"y":{"type":"value","value":0},"angle":{"type":"value","value":3.141592653589793},"line_color":{"type":"value","value":"#1f77b4"},"line_width":{"type":"value","value":2}}},"nonselection_glyph":{"type":"object","name":"Ray","id":"p1153","attributes":{"x":{"type":"value","value":0},"y":{"type":"value","value":0},"angle":{"type":"value","value":3.141592653589793},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2}}},"muted_glyph":{"type":"object","name":"Ray","id":"p1154","attributes":{"x":{"type":"value","value":0},"y":{"type":"value","value":0},"angle":{"type":"value","value":3.141592653589793},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2}}}}},{"type":"object","name":"GlyphRenderer","id":"p1164","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1158","attributes":{"selected":{"type":"object","name":"Selection","id":"p1159","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1160"},"data":{"type":"map"}}},"view":{"type":"object","name":"CDSView","id":"p1165","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1166"}}},"glyph":{"type":"object","name":"Ray","id":"p1161","attributes":{"x":{"type":"value","value":20},"y":{"type":"value","value":1},"line_color":{"type":"value","value":"#1f77b4"},"line_width":{"type":"value","value":2}}},"nonselection_glyph":{"type":"object","name":"Ray","id":"p1162","attributes":{"x":{"type":"value","value":20},"y":{"type":"value","value":1},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"line_width":{"type":"value","value":2}}},"muted_glyph":{"type":"object","name":"Ray","id":"p1163","attributes":{"x":{"type":"value","value":20},"y":{"type":"value","value":1},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"line_width":{"type":"value","value":2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1126","attributes":{"tools":[{"type":"object","name":"SaveTool","id":"p1139"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1134","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1135","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1136"},"axis_label":"F(n; 20, 0.34)","major_label_policy":{"type":"object","name":"AllLabels","id":"p1137"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1129","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1130","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1131"},"axis_label":"n","major_label_policy":{"type":"object","name":"AllLabels","id":"p1132"}}}],"center":[{"type":"object","name":"Grid","id":"p1133","attributes":{"axis":{"id":"p1129"}}},{"type":"object","name":"Grid","id":"p1138","attributes":{"dimension":1,"axis":{"id":"p1134"}}}],"background_fill_alpha":0,"border_fill_alpha":0}}]}}';
                  const render_items = [{"docid":"1c4e7af9-0934-4a15-a7e3-1e6ba1549183","roots":{"p1117":"d3a1e119-616f-44a8-bc8b-3dd0559e4767"},"root_ids":["p1117"]}];
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