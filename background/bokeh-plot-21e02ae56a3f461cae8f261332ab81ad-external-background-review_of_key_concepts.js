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
    
      
      
    
      var element = document.getElementById("ab36962e-4aca-47ee-bf93-98cf2c363ce3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ab36962e-4aca-47ee-bf93-98cf2c363ce3' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
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
                    
                  var docs_json = '{"e9ee28cc-cec3-46ff-a254-1ee7bf57af06":{"roots":{"references":[{"attributes":{"data":{"x":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y":{"__ndarray__":"kaP0wqgeMD9xvPYieMZmP5LvlLn+F48/npALN5Bmqz9f10Ai1JfBP6J++Vy8ptE/vcFaiCAO3T+E4PIM/mbkP91bM4/2Uek/IpRs8LWy7D+hzdn8u5zuP+V0a9M4gu8/bhiYPePa7z9ahykC//bvP0mYu3Y8/u8/xptPY7r/7z+c8zbf9//vP73uFFP//+8/X3fj9v//7z+ibcX////vPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"1300"},"selection_policy":{"id":"1299"}},"id":"1276","type":"ColumnDataSource"},{"attributes":{"axis_label":"n","formatter":{"id":"1289"},"ticker":{"id":"1246"}},"id":"1245","type":"LinearAxis"},{"attributes":{},"id":"1289","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1283","type":"Circle"},{"attributes":{},"id":"1298","type":"Selection"},{"attributes":{},"id":"1253","type":"SaveTool"},{"attributes":{"data_source":{"id":"1266"},"glyph":{"id":"1267"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1268"},"selection_glyph":null,"view":{"id":"1270"}},"id":"1269","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1249"},"dimension":1,"ticker":null},"id":"1252","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1278","type":"Circle"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1272","type":"Circle"},{"attributes":{},"id":"1287","type":"BasicTickFormatter"},{"attributes":{},"id":"1297","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1261"},"glyph":{"id":"1262"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1263"},"selection_glyph":null,"view":{"id":"1265"}},"id":"1264","type":"GlyphRenderer"},{"attributes":{"axis_label":"F(n; 20, 0.34)","formatter":{"id":"1287"},"ticker":{"id":"1250"}},"id":"1249","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1276"},"glyph":{"id":"1277"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1278"},"selection_glyph":null,"view":{"id":"1280"}},"id":"1279","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1276"}},"id":"1280","type":"CDSView"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"1257","type":"Segment"},{"attributes":{"data":{"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y":{"__ndarray__":"kaP0wqgeMD9xvPYieMZmP5LvlLn+F48/npALN5Bmqz9f10Ai1JfBP6J++Vy8ptE/vcFaiCAO3T+E4PIM/mbkP91bM4/2Uek/IpRs8LWy7D+hzdn8u5zuP+V0a9M4gu8/bhiYPePa7z9ahykC//bvP0mYu3Y8/u8/xptPY7r/7z+c8zbf9//vP73uFFP//+8/X3fj9v//7z+ibcX////vPwAAAAAAAPA/","dtype":"float64","order":"little","shape":[21]}},"selected":{"id":"1302"},"selection_policy":{"id":"1301"}},"id":"1281","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1281"}},"id":"1285","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"1296"},"selection_policy":{"id":"1295"}},"id":"1266","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":0},"length":{"units":"data","value":0},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"value":20},"y":{"value":1}},"id":"1268","type":"Ray"},{"attributes":{"data_source":{"id":"1281"},"glyph":{"id":"1282"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1283"},"selection_glyph":null,"view":{"id":"1285"}},"id":"1284","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0],"y":[0]},"selected":{"id":"1298"},"selection_policy":{"id":"1297"}},"id":"1271","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1253"}]},"id":"1254","type":"Toolbar"},{"attributes":{},"id":"1296","type":"Selection"},{"attributes":{"data_source":{"id":"1271"},"glyph":{"id":"1272"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1273"},"selection_glyph":null,"view":{"id":"1275"}},"id":"1274","type":"GlyphRenderer"},{"attributes":{},"id":"1293","type":"UnionRenderers"},{"attributes":{},"id":"1295","type":"UnionRenderers"},{"attributes":{},"id":"1302","type":"Selection"},{"attributes":{"angle":{"units":"rad","value":3.141592653589793},"length":{"units":"data","value":0},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"value":0},"y":{"value":0}},"id":"1262","type":"Ray"},{"attributes":{},"id":"1301","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"1258","type":"Segment"},{"attributes":{},"id":"1299","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1256"},"glyph":{"id":"1257"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1258"},"selection_glyph":null,"view":{"id":"1260"}},"id":"1259","type":"GlyphRenderer"},{"attributes":{},"id":"1239","type":"DataRange1d"},{"attributes":{"axis":{"id":"1245"},"ticker":null},"id":"1248","type":"Grid"},{"attributes":{},"id":"1294","type":"Selection"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1277","type":"Circle"},{"attributes":{},"id":"1250","type":"BasicTicker"},{"attributes":{"data":{},"selected":{"id":"1294"},"selection_policy":{"id":"1293"}},"id":"1261","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1256"}},"id":"1260","type":"CDSView"},{"attributes":{},"id":"1246","type":"BasicTicker"},{"attributes":{},"id":"1292","type":"Selection"},{"attributes":{},"id":"1291","type":"UnionRenderers"},{"attributes":{"source":{"id":"1261"}},"id":"1265","type":"CDSView"},{"attributes":{"data":{"x0":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"x1":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":{"__ndarray__":"kaP0wqgeMD9xvPYieMZmP5LvlLn+F48/npALN5Bmqz9f10Ai1JfBP6J++Vy8ptE/vcFaiCAO3T+E4PIM/mbkP91bM4/2Uek/IpRs8LWy7D+hzdn8u5zuP+V0a9M4gu8/bhiYPePa7z9ahykC//bvP0mYu3Y8/u8/xptPY7r/7z+c8zbf9//vP73uFFP//+8/X3fj9v//7z+ibcX////vPw==","dtype":"float64","order":"little","shape":[20]},"y1":{"__ndarray__":"kaP0wqgeMD9xvPYieMZmP5LvlLn+F48/npALN5Bmqz9f10Ai1JfBP6J++Vy8ptE/vcFaiCAO3T+E4PIM/mbkP91bM4/2Uek/IpRs8LWy7D+hzdn8u5zuP+V0a9M4gu8/bhiYPePa7z9ahykC//bvP0mYu3Y8/u8/xptPY7r/7z+c8zbf9//vP73uFFP//+8/X3fj9v//7z+ibcX////vPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"1292"},"selection_policy":{"id":"1291"}},"id":"1256","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":3.141592653589793},"length":{"units":"data","value":0},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"value":0},"y":{"value":0}},"id":"1263","type":"Ray"},{"attributes":{"text":"Binomial CDF"},"id":"1235","type":"Title"},{"attributes":{},"id":"1300","type":"Selection"},{"attributes":{},"id":"1241","type":"LinearScale"},{"attributes":{"source":{"id":"1271"}},"id":"1275","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":0},"length":{"units":"data","value":0},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"value":20},"y":{"value":1}},"id":"1267","type":"Ray"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1282","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1273","type":"Circle"},{"attributes":{"source":{"id":"1266"}},"id":"1270","type":"CDSView"},{"attributes":{},"id":"1243","type":"LinearScale"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"1245"}],"border_fill_alpha":0,"center":[{"id":"1248"},{"id":"1252"}],"left":[{"id":"1249"}],"plot_height":250,"plot_width":350,"renderers":[{"id":"1259"},{"id":"1264"},{"id":"1269"},{"id":"1274"},{"id":"1279"},{"id":"1284"}],"title":{"id":"1235"},"toolbar":{"id":"1254"},"x_range":{"id":"1237"},"x_scale":{"id":"1241"},"y_range":{"id":"1239"},"y_scale":{"id":"1243"}},"id":"1234","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1237","type":"DataRange1d"}],"root_ids":["1234"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"e9ee28cc-cec3-46ff-a254-1ee7bf57af06","root_ids":["1234"],"roots":{"1234":"ab36962e-4aca-47ee-bf93-98cf2c363ce3"}}];
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