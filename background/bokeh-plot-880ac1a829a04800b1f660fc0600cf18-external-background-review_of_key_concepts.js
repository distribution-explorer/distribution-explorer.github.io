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
    
      
      
    
      var element = document.getElementById("960fc95c-057c-47cb-9b65-40fb0b23bcb6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '960fc95c-057c-47cb-9b65-40fb0b23bcb6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"2a9d1cea-f493-4d56-b162-d5d051e73bd6":{"roots":{"references":[{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1202","type":"Line"},{"attributes":{},"id":"1212","type":"Selection"},{"attributes":{},"id":"1191","type":"BasicTicker"},{"attributes":{},"id":"1188","type":"LinearScale"},{"attributes":{},"id":"1209","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1201"}},"id":"1205","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1198"}]},"id":"1199","type":"Toolbar"},{"attributes":{},"id":"1198","type":"SaveTool"},{"attributes":{},"id":"1207","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1203","type":"Line"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"1190"}],"border_fill_alpha":0,"center":[{"id":"1193"},{"id":"1197"}],"left":[{"id":"1194"}],"plot_height":200,"plot_width":300,"renderers":[{"id":"1204"}],"title":{"id":"1180"},"toolbar":{"id":"1199"},"x_range":{"id":"1182"},"x_scale":{"id":"1186"},"y_range":{"id":"1184"},"y_scale":{"id":"1188"}},"id":"1179","subtype":"Figure","type":"Plot"},{"attributes":{"text":"Binomial CDF"},"id":"1180","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"ZmZmZmZm7r8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAABAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAAEEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAHEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAiQAAAAAAAACJAAAAAAAAAJEAAAAAAAAAkQAAAAAAAACZAAAAAAAAAJkAAAAAAAAAoQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAALEAAAAAAAAAuQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAwQAAAAAAAADFAAAAAAAAAMUAAAAAAAAAyQAAAAAAAADJAAAAAAAAAM0AAAAAAAAAzQAAAAAAAADRAAAAAAAAANEAzMzMzM/M0QA==","dtype":"float64","order":"little","shape":[44]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAJGj9MKoHjA/kaP0wqgeMD9xvPYieMZmP3G89iJ4xmY/ku+Uuf4Xjz+S75S5/hePP56QCzeQZqs/npALN5Bmqz9f10Ai1JfBP1/XQCLUl8E/on75XLym0T+ifvlcvKbRP73BWoggDt0/vcFaiCAO3T+E4PIM/mbkP4Tg8gz+ZuQ/3Vszj/ZR6T/dWzOP9lHpPyKUbPC1suw/IpRs8LWy7D+hzdn8u5zuP6HN2fy7nO4/5XRr0ziC7z/ldGvTOILvP24YmD3j2u8/bhiYPePa7z9ahykC//bvP1qHKQL/9u8/SZi7djz+7z9JmLt2PP7vP8abT2O6/+8/xptPY7r/7z+c8zbf9//vP5zzNt/3/+8/ve4UU///7z+97hRT///vP1934/b//+8/X3fj9v//7z+ibcX////vP6Jtxf///+8/AAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","order":"little","shape":[44]}},"selected":{"id":"1212"},"selection_policy":{"id":"1211"}},"id":"1201","type":"ColumnDataSource"},{"attributes":{"axis_label":"F(n; 20, 0.34)","formatter":{"id":"1207"},"ticker":{"id":"1195"}},"id":"1194","type":"LinearAxis"},{"attributes":{},"id":"1184","type":"DataRange1d"},{"attributes":{},"id":"1211","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1201"},"glyph":{"id":"1202"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1203"},"selection_glyph":null,"view":{"id":"1205"}},"id":"1204","type":"GlyphRenderer"},{"attributes":{},"id":"1186","type":"LinearScale"},{"attributes":{"axis":{"id":"1194"},"dimension":1,"ticker":null},"id":"1197","type":"Grid"},{"attributes":{},"id":"1182","type":"DataRange1d"},{"attributes":{},"id":"1195","type":"BasicTicker"},{"attributes":{"axis":{"id":"1190"},"ticker":null},"id":"1193","type":"Grid"},{"attributes":{"axis_label":"n","formatter":{"id":"1209"},"ticker":{"id":"1191"}},"id":"1190","type":"LinearAxis"}],"root_ids":["1179"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"2a9d1cea-f493-4d56-b162-d5d051e73bd6","root_ids":["1179"],"roots":{"1179":"960fc95c-057c-47cb-9b65-40fb0b23bcb6"}}];
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