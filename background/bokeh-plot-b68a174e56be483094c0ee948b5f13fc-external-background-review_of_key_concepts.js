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
    
      
      
    
      var element = document.getElementById("452c5eab-8318-4870-ba00-91cf4c6af898");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '452c5eab-8318-4870-ba00-91cf4c6af898' but no matching script tag was found.")
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
                    
                  var docs_json = '{"0a5c5a14-cde0-4dcd-9bcc-d999e9235f32":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"n","formatter":{"id":"1324"},"major_label_policy":{"id":"1325"},"ticker":{"id":"1279"}},"id":"1278","type":"LinearAxis"},{"attributes":{},"id":"1279","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1309"},"glyph":{"id":"1310"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1311"},"view":{"id":"1313"}},"id":"1312","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1310","type":"Circle"},{"attributes":{"data":{"x":[0],"y":[0]},"selected":{"id":"1333"},"selection_policy":{"id":"1332"}},"id":"1304","type":"ColumnDataSource"},{"attributes":{},"id":"1328","type":"UnionRenderers"},{"attributes":{"source":{"id":"1289"}},"id":"1293","type":"CDSView"},{"attributes":{"angle":{"value":3.141592653589793},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"value":0},"y":{"value":0}},"id":"1295","type":"Ray"},{"attributes":{"source":{"id":"1294"}},"id":"1298","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"1286"}]},"id":"1287","type":"Toolbar"},{"attributes":{"data":{},"selected":{"id":"1329"},"selection_policy":{"id":"1328"}},"id":"1294","type":"ColumnDataSource"},{"attributes":{},"id":"1329","type":"Selection"},{"attributes":{"angle":{"value":3.141592653589793},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"value":0},"y":{"value":0}},"id":"1296","type":"Ray"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"1291","type":"Segment"},{"attributes":{"data":{"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y":{"__ndarray__":"nKP0wqgeMD9wvPYieMZmP5DvlLn+F48/m5ALN5Bmqz9f10Ai1JfBP6J++Vy8ptE/tMFaiCAO3T+H4PIM/mbkP95bM4/2Uek/JJRs8LWy7D+hzdn8u5zuP+V0a9M4gu8/bhiYPePa7z9ahykC//bvP0mYu3Y8/u8/xptPY7r/7z+c8zbf9//vP73uFFP//+8/X3fj9v//7z+ibcX////vPwAAAAAAAPA/","dtype":"float64","order":"little","shape":[21]}},"selected":{"id":"1337"},"selection_policy":{"id":"1336"}},"id":"1314","type":"ColumnDataSource"},{"attributes":{},"id":"1286","type":"SaveTool"},{"attributes":{},"id":"1334","type":"UnionRenderers"},{"attributes":{},"id":"1272","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1311","type":"Circle"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"1278"}],"border_fill_alpha":0,"center":[{"id":"1281"},{"id":"1285"}],"height":250,"left":[{"id":"1282"}],"renderers":[{"id":"1292"},{"id":"1297"},{"id":"1302"},{"id":"1307"},{"id":"1312"},{"id":"1317"}],"title":{"id":"1268"},"toolbar":{"id":"1287"},"width":350,"x_range":{"id":"1270"},"x_scale":{"id":"1274"},"y_range":{"id":"1272"},"y_scale":{"id":"1276"}},"id":"1267","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1274","type":"LinearScale"},{"attributes":{},"id":"1335","type":"Selection"},{"attributes":{"data_source":{"id":"1294"},"glyph":{"id":"1295"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1296"},"view":{"id":"1298"}},"id":"1297","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1309"}},"id":"1313","type":"CDSView"},{"attributes":{},"id":"1270","type":"DataRange1d"},{"attributes":{},"id":"1283","type":"BasicTicker"},{"attributes":{"data":{},"selected":{"id":"1331"},"selection_policy":{"id":"1330"}},"id":"1299","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"value":20},"y":{"value":1}},"id":"1301","type":"Ray"},{"attributes":{"axis":{"id":"1278"},"ticker":null},"id":"1281","type":"Grid"},{"attributes":{},"id":"1330","type":"UnionRenderers"},{"attributes":{},"id":"1276","type":"LinearScale"},{"attributes":{"data_source":{"id":"1289"},"glyph":{"id":"1290"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1291"},"view":{"id":"1293"}},"id":"1292","type":"GlyphRenderer"},{"attributes":{},"id":"1321","type":"BasicTickFormatter"},{"attributes":{"axis_label":"F(n; 20, 0.34)","formatter":{"id":"1321"},"major_label_policy":{"id":"1322"},"ticker":{"id":"1283"}},"id":"1282","type":"LinearAxis"},{"attributes":{},"id":"1331","type":"Selection"},{"attributes":{"source":{"id":"1299"}},"id":"1303","type":"CDSView"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"value":20},"y":{"value":1}},"id":"1300","type":"Ray"},{"attributes":{},"id":"1322","type":"AllLabels"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1305","type":"Circle"},{"attributes":{"data_source":{"id":"1299"},"glyph":{"id":"1300"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1301"},"view":{"id":"1303"}},"id":"1302","type":"GlyphRenderer"},{"attributes":{},"id":"1324","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1304"}},"id":"1308","type":"CDSView"},{"attributes":{},"id":"1336","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"1290","type":"Segment"},{"attributes":{"data":{"x":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y":{"__ndarray__":"nKP0wqgeMD9wvPYieMZmP5DvlLn+F48/m5ALN5Bmqz9f10Ai1JfBP6J++Vy8ptE/tMFaiCAO3T+H4PIM/mbkP95bM4/2Uek/JJRs8LWy7D+hzdn8u5zuP+V0a9M4gu8/bhiYPePa7z9ahykC//bvP0mYu3Y8/u8/xptPY7r/7z+c8zbf9//vP73uFFP//+8/X3fj9v//7z+ibcX////vPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"1335"},"selection_policy":{"id":"1334"}},"id":"1309","type":"ColumnDataSource"},{"attributes":{},"id":"1325","type":"AllLabels"},{"attributes":{},"id":"1337","type":"Selection"},{"attributes":{"source":{"id":"1314"}},"id":"1318","type":"CDSView"},{"attributes":{},"id":"1326","type":"UnionRenderers"},{"attributes":{"text":"Binomial CDF"},"id":"1268","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1316","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"white"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1306","type":"Circle"},{"attributes":{},"id":"1327","type":"Selection"},{"attributes":{},"id":"1332","type":"UnionRenderers"},{"attributes":{"data":{"x0":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"x1":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":{"__ndarray__":"nKP0wqgeMD9wvPYieMZmP5DvlLn+F48/m5ALN5Bmqz9f10Ai1JfBP6J++Vy8ptE/tMFaiCAO3T+H4PIM/mbkP95bM4/2Uek/JJRs8LWy7D+hzdn8u5zuP+V0a9M4gu8/bhiYPePa7z9ahykC//bvP0mYu3Y8/u8/xptPY7r/7z+c8zbf9//vP73uFFP//+8/X3fj9v//7z+ibcX////vPw==","dtype":"float64","order":"little","shape":[20]},"y1":{"__ndarray__":"nKP0wqgeMD9wvPYieMZmP5DvlLn+F48/m5ALN5Bmqz9f10Ai1JfBP6J++Vy8ptE/tMFaiCAO3T+H4PIM/mbkP95bM4/2Uek/JJRs8LWy7D+hzdn8u5zuP+V0a9M4gu8/bhiYPePa7z9ahykC//bvP0mYu3Y8/u8/xptPY7r/7z+c8zbf9//vP73uFFP//+8/X3fj9v//7z+ibcX////vPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"1327"},"selection_policy":{"id":"1326"}},"id":"1289","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1315","type":"Circle"},{"attributes":{},"id":"1333","type":"Selection"},{"attributes":{"data_source":{"id":"1314"},"glyph":{"id":"1315"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1316"},"view":{"id":"1318"}},"id":"1317","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1282"},"dimension":1,"ticker":null},"id":"1285","type":"Grid"},{"attributes":{"data_source":{"id":"1304"},"glyph":{"id":"1305"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1306"},"view":{"id":"1308"}},"id":"1307","type":"GlyphRenderer"}],"root_ids":["1267"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"0a5c5a14-cde0-4dcd-9bcc-d999e9235f32","root_ids":["1267"],"roots":{"1267":"452c5eab-8318-4870-ba00-91cf4c6af898"}}];
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