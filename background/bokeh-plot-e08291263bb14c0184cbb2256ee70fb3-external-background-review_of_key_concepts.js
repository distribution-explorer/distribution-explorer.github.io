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
    
      
      
    
      var element = document.getElementById("6518ddc3-1b05-407d-b6e6-d68e8fe4cd17");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6518ddc3-1b05-407d-b6e6-d68e8fe4cd17' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;ee397b28-b271-4c7c-96e1-1866b1d1e01b&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1275&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;1278&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1269&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;white&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1308&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;1275&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;1278&quot;},{&quot;id&quot;:&quot;1282&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;1279&quot;}],&quot;plot_height&quot;:250,&quot;plot_width&quot;:350,&quot;renderers&quot;:[{&quot;id&quot;:&quot;1289&quot;},{&quot;id&quot;:&quot;1294&quot;},{&quot;id&quot;:&quot;1299&quot;},{&quot;id&quot;:&quot;1304&quot;},{&quot;id&quot;:&quot;1309&quot;},{&quot;id&quot;:&quot;1314&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;1265&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;1284&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;1267&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;1271&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;1269&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;1273&quot;}},&quot;id&quot;:&quot;1264&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;kaP0wqgeMD9xvPYieMZmP5LvlLn+F48/npALN5Bmqz9f10Ai1JfBP6J++Vy8ptE/vcFaiCAO3T+E4PIM/mbkP91bM4/2Uek/IpRs8LWy7D+hzdn8u5zuP+V0a9M4gu8/bhiYPePa7z9ahykC//bvP0mYu3Y8/u8/xptPY7r/7z+c8zbf9//vP73uFFP//+8/X3fj9v//7z+ibcX////vPwAAAAAAAPA/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[21]}},&quot;selected&quot;:{&quot;id&quot;:&quot;1332&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1331&quot;}},&quot;id&quot;:&quot;1311&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1306&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1307&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1308&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1310&quot;}},&quot;id&quot;:&quot;1309&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1276&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1311&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1312&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1313&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1315&quot;}},&quot;id&quot;:&quot;1314&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1321&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;x0&quot;:{&quot;field&quot;:&quot;x0&quot;},&quot;x1&quot;:{&quot;field&quot;:&quot;x1&quot;},&quot;y0&quot;:{&quot;field&quot;:&quot;y0&quot;},&quot;y1&quot;:{&quot;field&quot;:&quot;y1&quot;}},&quot;id&quot;:&quot;1288&quot;,&quot;type&quot;:&quot;Segment&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;F(n; 20, 0.34)&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;1319&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1280&quot;}},&quot;id&quot;:&quot;1279&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1322&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1323&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1311&quot;}},&quot;id&quot;:&quot;1315&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1280&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1313&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1317&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1286&quot;}},&quot;id&quot;:&quot;1290&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x0&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],&quot;x1&quot;:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],&quot;y0&quot;:{&quot;__ndarray__&quot;:&quot;kaP0wqgeMD9xvPYieMZmP5LvlLn+F48/npALN5Bmqz9f10Ai1JfBP6J++Vy8ptE/vcFaiCAO3T+E4PIM/mbkP91bM4/2Uek/IpRs8LWy7D+hzdn8u5zuP+V0a9M4gu8/bhiYPePa7z9ahykC//bvP0mYu3Y8/u8/xptPY7r/7z+c8zbf9//vP73uFFP//+8/X3fj9v//7z+ibcX////vPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[20]},&quot;y1&quot;:{&quot;__ndarray__&quot;:&quot;kaP0wqgeMD9xvPYieMZmP5LvlLn+F48/npALN5Bmqz9f10Ai1JfBP6J++Vy8ptE/vcFaiCAO3T+E4PIM/mbkP91bM4/2Uek/IpRs8LWy7D+hzdn8u5zuP+V0a9M4gu8/bhiYPePa7z9ahykC//bvP0mYu3Y8/u8/xptPY7r/7z+c8zbf9//vP73uFFP//+8/X3fj9v//7z+ibcX////vPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[20]}},&quot;selected&quot;:{&quot;id&quot;:&quot;1322&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1321&quot;}},&quot;id&quot;:&quot;1286&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;1283&quot;}]},&quot;id&quot;:&quot;1284&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1319&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;n&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;1317&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1276&quot;}},&quot;id&quot;:&quot;1275&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1327&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1286&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1287&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1288&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1290&quot;}},&quot;id&quot;:&quot;1289&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;x0&quot;:{&quot;field&quot;:&quot;x0&quot;},&quot;x1&quot;:{&quot;field&quot;:&quot;x1&quot;},&quot;y0&quot;:{&quot;field&quot;:&quot;y0&quot;},&quot;y1&quot;:{&quot;field&quot;:&quot;y1&quot;}},&quot;id&quot;:&quot;1287&quot;,&quot;type&quot;:&quot;Segment&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;kaP0wqgeMD9xvPYieMZmP5LvlLn+F48/npALN5Bmqz9f10Ai1JfBP6J++Vy8ptE/vcFaiCAO3T+E4PIM/mbkP91bM4/2Uek/IpRs8LWy7D+hzdn8u5zuP+V0a9M4gu8/bhiYPePa7z9ahykC//bvP0mYu3Y8/u8/xptPY7r/7z+c8zbf9//vP73uFFP//+8/X3fj9v//7z+ibcX////vPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[20]}},&quot;selected&quot;:{&quot;id&quot;:&quot;1330&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1329&quot;}},&quot;id&quot;:&quot;1306&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1279&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;1282&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;angle&quot;:{&quot;units&quot;:&quot;rad&quot;,&quot;value&quot;:3.141592653589793},&quot;length&quot;:{&quot;units&quot;:&quot;data&quot;,&quot;value&quot;:0},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;x&quot;:{&quot;value&quot;:0},&quot;y&quot;:{&quot;value&quot;:0}},&quot;id&quot;:&quot;1292&quot;,&quot;type&quot;:&quot;Ray&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1329&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1331&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1291&quot;}},&quot;id&quot;:&quot;1295&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1312&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;white&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1302&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1325&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1267&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;angle&quot;:{&quot;units&quot;:&quot;rad&quot;,&quot;value&quot;:0},&quot;length&quot;:{&quot;units&quot;:&quot;data&quot;,&quot;value&quot;:0},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;x&quot;:{&quot;value&quot;:20},&quot;y&quot;:{&quot;value&quot;:1}},&quot;id&quot;:&quot;1297&quot;,&quot;type&quot;:&quot;Ray&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:[0],&quot;y&quot;:[0]},&quot;selected&quot;:{&quot;id&quot;:&quot;1328&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1327&quot;}},&quot;id&quot;:&quot;1301&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1296&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1297&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1298&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1300&quot;}},&quot;id&quot;:&quot;1299&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1271&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1328&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1296&quot;}},&quot;id&quot;:&quot;1300&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1283&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{},&quot;selected&quot;:{&quot;id&quot;:&quot;1324&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1323&quot;}},&quot;id&quot;:&quot;1291&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1306&quot;}},&quot;id&quot;:&quot;1310&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1324&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1330&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1301&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1302&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1303&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1305&quot;}},&quot;id&quot;:&quot;1304&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1301&quot;}},&quot;id&quot;:&quot;1305&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Binomial CDF&quot;},&quot;id&quot;:&quot;1265&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;angle&quot;:{&quot;units&quot;:&quot;rad&quot;,&quot;value&quot;:0},&quot;length&quot;:{&quot;units&quot;:&quot;data&quot;,&quot;value&quot;:0},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;x&quot;:{&quot;value&quot;:20},&quot;y&quot;:{&quot;value&quot;:1}},&quot;id&quot;:&quot;1298&quot;,&quot;type&quot;:&quot;Ray&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;white&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1303&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1332&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1273&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;angle&quot;:{&quot;units&quot;:&quot;rad&quot;,&quot;value&quot;:3.141592653589793},&quot;length&quot;:{&quot;units&quot;:&quot;data&quot;,&quot;value&quot;:0},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;x&quot;:{&quot;value&quot;:0},&quot;y&quot;:{&quot;value&quot;:0}},&quot;id&quot;:&quot;1293&quot;,&quot;type&quot;:&quot;Ray&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{},&quot;selected&quot;:{&quot;id&quot;:&quot;1326&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1325&quot;}},&quot;id&quot;:&quot;1296&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;white&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1307&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1326&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1291&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1292&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1293&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1295&quot;}},&quot;id&quot;:&quot;1294&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;}],&quot;root_ids&quot;:[&quot;1264&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"ee397b28-b271-4c7c-96e1-1866b1d1e01b","root_ids":["1264"],"roots":{"1264":"6518ddc3-1b05-407d-b6e6-d68e8fe4cd17"}}];
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