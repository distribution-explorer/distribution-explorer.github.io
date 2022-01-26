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
    
      
      
    
      var element = document.getElementById("f483d634-d46c-4de8-90d8-1243fe8cae78");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f483d634-d46c-4de8-90d8-1243fe8cae78' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b6c1b2bb-19c9-45e7-a13e-ff6f5c0baa92":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1223","type":"SaveTool"},{"attributes":{"axis":{"id":"1219"},"dimension":1,"ticker":null},"id":"1222","type":"Grid"},{"attributes":{"source":{"id":"1226"}},"id":"1230","type":"CDSView"},{"attributes":{},"id":"1234","type":"AllLabels"},{"attributes":{"axis_label":"F(n; 20, 0.34)","formatter":{"id":"1233"},"major_label_policy":{"id":"1234"},"ticker":{"id":"1220"}},"id":"1219","type":"LinearAxis"},{"attributes":{"axis":{"id":"1215"},"ticker":null},"id":"1218","type":"Grid"},{"attributes":{},"id":"1236","type":"BasicTickFormatter"},{"attributes":{},"id":"1233","type":"BasicTickFormatter"},{"attributes":{},"id":"1216","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"1223"}]},"id":"1224","type":"Toolbar"},{"attributes":{},"id":"1237","type":"AllLabels"},{"attributes":{},"id":"1220","type":"BasicTicker"},{"attributes":{"axis_label":"n","formatter":{"id":"1236"},"major_label_policy":{"id":"1237"},"ticker":{"id":"1216"}},"id":"1215","type":"LinearAxis"},{"attributes":{},"id":"1211","type":"LinearScale"},{"attributes":{},"id":"1213","type":"LinearScale"},{"attributes":{},"id":"1239","type":"Selection"},{"attributes":{},"id":"1209","type":"DataRange1d"},{"attributes":{},"id":"1207","type":"DataRange1d"},{"attributes":{},"id":"1238","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"ZmZmZmZm7r8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAABAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAAEEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAHEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAiQAAAAAAAACJAAAAAAAAAJEAAAAAAAAAkQAAAAAAAACZAAAAAAAAAJkAAAAAAAAAoQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAALEAAAAAAAAAuQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAwQAAAAAAAADFAAAAAAAAAMUAAAAAAAAAyQAAAAAAAADJAAAAAAAAAM0AAAAAAAAAzQAAAAAAAADRAAAAAAAAANEAzMzMzM/M0QA==","dtype":"float64","order":"little","shape":[44]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAJyj9MKoHjA/nKP0wqgeMD9wvPYieMZmP3C89iJ4xmY/kO+Uuf4Xjz+Q75S5/hePP5uQCzeQZqs/m5ALN5Bmqz9f10Ai1JfBP1/XQCLUl8E/on75XLym0T+ifvlcvKbRP7TBWoggDt0/tMFaiCAO3T+H4PIM/mbkP4fg8gz+ZuQ/3lszj/ZR6T/eWzOP9lHpPySUbPC1suw/JJRs8LWy7D+hzdn8u5zuP6HN2fy7nO4/5XRr0ziC7z/ldGvTOILvP24YmD3j2u8/bhiYPePa7z9ahykC//bvP1qHKQL/9u8/SZi7djz+7z9JmLt2PP7vP8abT2O6/+8/xptPY7r/7z+c8zbf9//vP5zzNt/3/+8/ve4UU///7z+97hRT///vP1934/b//+8/X3fj9v//7z+ibcX////vP6Jtxf///+8/AAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","order":"little","shape":[44]}},"selected":{"id":"1239"},"selection_policy":{"id":"1238"}},"id":"1226","type":"ColumnDataSource"},{"attributes":{"text":"Binomial CDF"},"id":"1205","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1228","type":"Line"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1227","type":"Line"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"1215"}],"border_fill_alpha":0,"center":[{"id":"1218"},{"id":"1222"}],"height":200,"left":[{"id":"1219"}],"renderers":[{"id":"1229"}],"title":{"id":"1205"},"toolbar":{"id":"1224"},"width":300,"x_range":{"id":"1207"},"x_scale":{"id":"1211"},"y_range":{"id":"1209"},"y_scale":{"id":"1213"}},"id":"1204","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"1226"},"glyph":{"id":"1227"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1228"},"view":{"id":"1230"}},"id":"1229","type":"GlyphRenderer"}],"root_ids":["1204"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"b6c1b2bb-19c9-45e7-a13e-ff6f5c0baa92","root_ids":["1204"],"roots":{"1204":"f483d634-d46c-4de8-90d8-1243fe8cae78"}}];
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