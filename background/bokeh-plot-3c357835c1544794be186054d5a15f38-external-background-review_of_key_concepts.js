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
    
      
      
    
      var element = document.getElementById("631e269e-7387-4f8d-9e74-fe422877f667");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '631e269e-7387-4f8d-9e74-fe422877f667' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
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
                    
                  var docs_json = '{&quot;59745072-db1d-4e50-836c-5a63cffb7bc7&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1218&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;1221&quot;}]},&quot;id&quot;:&quot;1222&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1224&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1225&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1226&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1228&quot;}},&quot;id&quot;:&quot;1227&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1230&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1214&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1234&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;F(n; 20, 0.34)&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;1232&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1218&quot;}},&quot;id&quot;:&quot;1217&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1232&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1209&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;1213&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;1216&quot;},{&quot;id&quot;:&quot;1220&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;1217&quot;}],&quot;plot_height&quot;:200,&quot;plot_width&quot;:300,&quot;renderers&quot;:[{&quot;id&quot;:&quot;1227&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;1203&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;1222&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;1205&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;1209&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;1207&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;1211&quot;}},&quot;id&quot;:&quot;1202&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1213&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;1216&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;n&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;1230&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1214&quot;}},&quot;id&quot;:&quot;1213&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1217&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;1220&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1235&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1205&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1224&quot;}},&quot;id&quot;:&quot;1228&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1211&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1226&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1221&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1207&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;ZmZmZmZm7r8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAABAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAAEEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAHEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAiQAAAAAAAACJAAAAAAAAAJEAAAAAAAAAkQAAAAAAAACZAAAAAAAAAJkAAAAAAAAAoQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAALEAAAAAAAAAuQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAwQAAAAAAAADFAAAAAAAAAMUAAAAAAAAAyQAAAAAAAADJAAAAAAAAAM0AAAAAAAAAzQAAAAAAAADRAAAAAAAAANEAzMzMzM/M0QA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[44]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAJGj9MKoHjA/kaP0wqgeMD9xvPYieMZmP3G89iJ4xmY/ku+Uuf4Xjz+S75S5/hePP56QCzeQZqs/npALN5Bmqz9f10Ai1JfBP1/XQCLUl8E/on75XLym0T+ifvlcvKbRP73BWoggDt0/vcFaiCAO3T+E4PIM/mbkP4Tg8gz+ZuQ/3Vszj/ZR6T/dWzOP9lHpPyKUbPC1suw/IpRs8LWy7D+hzdn8u5zuP6HN2fy7nO4/5XRr0ziC7z/ldGvTOILvP24YmD3j2u8/bhiYPePa7z9ahykC//bvP1qHKQL/9u8/SZi7djz+7z9JmLt2PP7vP8abT2O6/+8/xptPY7r/7z+c8zbf9//vP5zzNt/3/+8/ve4UU///7z+97hRT///vP1934/b//+8/X3fj9v//7z+ibcX////vP6Jtxf///+8/AAAAAAAA8D8AAAAAAADwPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[44]}},&quot;selected&quot;:{&quot;id&quot;:&quot;1235&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1234&quot;}},&quot;id&quot;:&quot;1224&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1225&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Binomial CDF&quot;},&quot;id&quot;:&quot;1203&quot;,&quot;type&quot;:&quot;Title&quot;}],&quot;root_ids&quot;:[&quot;1202&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"59745072-db1d-4e50-836c-5a63cffb7bc7","root_ids":["1202"],"roots":{"1202":"631e269e-7387-4f8d-9e74-fe422877f667"}}];
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