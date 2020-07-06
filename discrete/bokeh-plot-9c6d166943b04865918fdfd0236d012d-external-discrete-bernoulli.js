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
    
      
      
    
      var element = document.getElementById("633a399e-6f65-4190-84b8-823cea5c7805");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '633a399e-6f65-4190-84b8-823cea5c7805' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;ce75b8ee-649f-4d18-aaca-9108174bf68f&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;args&quot;:{&quot;arg1&quot;:{&quot;id&quot;:&quot;4728&quot;},&quot;arg2&quot;:{&quot;id&quot;:&quot;4728&quot;},&quot;arg3&quot;:{&quot;id&quot;:&quot;4728&quot;},&quot;discrete&quot;:true,&quot;dist&quot;:&quot;bernoulli&quot;,&quot;n&quot;:400,&quot;source_c&quot;:{&quot;id&quot;:&quot;4711&quot;},&quot;source_p&quot;:{&quot;id&quot;:&quot;4710&quot;},&quot;xrange&quot;:{&quot;id&quot;:&quot;4646&quot;}},&quot;code&quot;:&quot;function arange(start, stop) {\\n\\tvar x = [];\\n\\tfor (var i = start; i &lt; stop; i++) x.push(i);\\n\\treturn x;\\n}\\n\\nfunction discrete_cdf(cumsum, y_p) {\\n    var y_c = [];\\n\\n    y_c.push(cumsum, cumsum);\\n    for (var i = 0; i &lt; y_p.length; i++) {\\n        cumsum += y_p[i];\\n        y_c.push(cumsum, cumsum);\\n    }\\n\\n    return y_c;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_discrete(probFun, x_p, y_p, arg1, arg2, arg3) {\\n    // Compute CDF\\n    var cumsum = 0.0;\\n    for (var i = 0; i &lt; x_p[0]; i++) {\\n        cumsum += probFun(x_p[i], arg1, arg2, arg3);\\n    }\\n\\n    y_c = discrete_cdf(cumsum, y_p);\\n    return y_c;\\n}\\n\\nfunction probFun(x, theta, {}, {}) {\\n\\tif (x == 0) return 1 - theta;\\n\\telse if (x == 1) return theta;\\n\\telse return NaN;\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points for discrete distributions\\nif (dist == &#x27;bernoulli&#x27;) {\\n\\txRangeMin = 0.0;\\n\\txRangeMax = 1.0;\\n}\\nelse if (dist == &#x27;categorical&#x27;) {\\n\\txRangeMin = 1;\\n\\txRangeMax = x_p.length;\\n}\\nelse {\\n  \\txRangeMin = Math.max(0, Math.floor(xRangeMin));\\n\\txRangeMax = Math.floor(xRangeMax);\\n}\\n\\n// x-values to evaluate PMF and CDF\\nx_p = arange(xRangeMin, xRangeMax+1);\\nlet xSize = xRangeMax - xRangeMin;\\n\\nx_c = [];\\nfor (var i = 0; i &lt; x_p.length; i++) x_c.push(x_p[i], x_p[i]);\\n\\nx_c.unshift(Math.max(xRangeMin - 0.05 * xSize, xRangeMin - 0.95));\\nx_c.push(Math.min(xRangeMax + 0.05 * xSize, xRangeMax + 0.95));\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PMF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_discrete(probFun, \\n\\tx_c, source_p.data[&#x27;y_p&#x27;], arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n&quot;},&quot;id&quot;:&quot;4727&quot;,&quot;type&quot;:&quot;CustomJS&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;4691&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;4694&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4662&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;4687&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;4690&quot;},{&quot;id&quot;:&quot;4694&quot;}],&quot;frame_height&quot;:175,&quot;frame_width&quot;:300,&quot;left&quot;:[{&quot;id&quot;:&quot;4691&quot;}],&quot;renderers&quot;:[{&quot;id&quot;:&quot;4715&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;4677&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;4702&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;4646&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;4683&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;4709&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;4685&quot;}},&quot;id&quot;:&quot;4676&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4692&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;CDF&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;4748&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;4692&quot;}},&quot;id&quot;:&quot;4691&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;4710&quot;}},&quot;id&quot;:&quot;4726&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:[0,1],&quot;y_p&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAA4D8AAAAAAADgPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[2]}},&quot;selected&quot;:{&quot;id&quot;:&quot;4742&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;4741&quot;}},&quot;id&quot;:&quot;4710&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;mpmZmZmZqb8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAADwP83MzMzMzPA/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[6]},&quot;y_c&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA/AAAAAAAA4D8AAAAAAADwPwAAAAAAAPA/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[6]}},&quot;selected&quot;:{&quot;id&quot;:&quot;4751&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;4750&quot;}},&quot;id&quot;:&quot;4711&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;4710&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;4723&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;4724&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;4726&quot;}},&quot;id&quot;:&quot;4725&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot; &quot;},&quot;id&quot;:&quot;4677&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;end&quot;:1.05,&quot;start&quot;:-0.05},&quot;id&quot;:&quot;4709&quot;,&quot;type&quot;:&quot;Range1d&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;x0&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;x1&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y0&quot;:{&quot;value&quot;:0},&quot;y1&quot;:{&quot;field&quot;:&quot;y_p&quot;}},&quot;id&quot;:&quot;4724&quot;,&quot;type&quot;:&quot;Segment&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;4669&quot;},{&quot;id&quot;:&quot;4702&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;4662&quot;},{&quot;id&quot;:&quot;4663&quot;},{&quot;id&quot;:&quot;4664&quot;},{&quot;id&quot;:&quot;4665&quot;},{&quot;id&quot;:&quot;4666&quot;},{&quot;id&quot;:&quot;4667&quot;},{&quot;id&quot;:&quot;4695&quot;},{&quot;id&quot;:&quot;4696&quot;},{&quot;id&quot;:&quot;4697&quot;},{&quot;id&quot;:&quot;4698&quot;},{&quot;id&quot;:&quot;4699&quot;},{&quot;id&quot;:&quot;4700&quot;}]},&quot;id&quot;:&quot;4755&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;4658&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;4661&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;x0&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;x1&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y0&quot;:{&quot;value&quot;:0},&quot;y1&quot;:{&quot;field&quot;:&quot;y_p&quot;}},&quot;id&quot;:&quot;4723&quot;,&quot;type&quot;:&quot;Segment&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;4695&quot;},{&quot;id&quot;:&quot;4696&quot;},{&quot;id&quot;:&quot;4697&quot;},{&quot;id&quot;:&quot;4698&quot;},{&quot;id&quot;:&quot;4699&quot;},{&quot;id&quot;:&quot;4700&quot;}]},&quot;id&quot;:&quot;4702&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;args&quot;:{&quot;max_value&quot;:1,&quot;min_value&quot;:0,&quot;slider&quot;:{&quot;id&quot;:&quot;4728&quot;}},&quot;code&quot;:&quot;\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n&quot;},&quot;id&quot;:&quot;4731&quot;,&quot;type&quot;:&quot;CustomJS&quot;},{&quot;attributes&quot;:{&quot;end&quot;:1,&quot;format&quot;:&quot;0[.]00&quot;,&quot;js_property_callbacks&quot;:{&quot;change:value&quot;:[{&quot;id&quot;:&quot;4727&quot;}]},&quot;start&quot;:0,&quot;step&quot;:0.01,&quot;title&quot;:&quot;\\u03b8&quot;,&quot;value&quot;:0.5},&quot;id&quot;:&quot;4728&quot;,&quot;type&quot;:&quot;Slider&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4695&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4696&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;js_property_callbacks&quot;:{&quot;change:value&quot;:[{&quot;id&quot;:&quot;4731&quot;}]},&quot;value&quot;:&quot;0&quot;,&quot;width&quot;:70},&quot;id&quot;:&quot;4729&quot;,&quot;type&quot;:&quot;TextInput&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;4701&quot;}},&quot;id&quot;:&quot;4697&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;4654&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;4657&quot;},{&quot;id&quot;:&quot;4661&quot;}],&quot;frame_height&quot;:175,&quot;frame_width&quot;:300,&quot;left&quot;:[{&quot;id&quot;:&quot;4658&quot;}],&quot;renderers&quot;:[{&quot;id&quot;:&quot;4720&quot;},{&quot;id&quot;:&quot;4725&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;4644&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;4669&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;4646&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;4650&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;4648&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;4652&quot;}},&quot;id&quot;:&quot;4643&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4698&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Bernoulli&quot;},&quot;id&quot;:&quot;4644&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4699&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;4668&quot;}},&quot;id&quot;:&quot;4664&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4655&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;js_property_callbacks&quot;:{&quot;change:value&quot;:[{&quot;id&quot;:&quot;4732&quot;}]},&quot;value&quot;:&quot;1&quot;,&quot;width&quot;:70},&quot;id&quot;:&quot;4730&quot;,&quot;type&quot;:&quot;TextInput&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y_c&quot;}},&quot;id&quot;:&quot;4713&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;4734&quot;},{&quot;id&quot;:&quot;4758&quot;},{&quot;id&quot;:&quot;4757&quot;}]},&quot;id&quot;:&quot;4759&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;y&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;4746&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;4688&quot;}},&quot;id&quot;:&quot;4687&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4700&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4666&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;4754&quot;},{&quot;id&quot;:&quot;4756&quot;}]},&quot;id&quot;:&quot;4757&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{&quot;height&quot;:10},&quot;id&quot;:&quot;4758&quot;,&quot;type&quot;:&quot;Spacer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4665&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4659&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4746&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;width&quot;:30},&quot;id&quot;:&quot;4735&quot;,&quot;type&quot;:&quot;Spacer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4663&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;range_padding&quot;:0},&quot;id&quot;:&quot;4646&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4667&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;4654&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;4657&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4737&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;y&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;4737&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;4655&quot;}},&quot;id&quot;:&quot;4654&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;4643&quot;},0,0],[{&quot;id&quot;:&quot;4735&quot;},0,1],[{&quot;id&quot;:&quot;4676&quot;},0,2]]},&quot;id&quot;:&quot;4754&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;PMF&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;4739&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;4659&quot;}},&quot;id&quot;:&quot;4658&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;4755&quot;}},&quot;id&quot;:&quot;4756&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;args&quot;:{&quot;max_value&quot;:1,&quot;min_value&quot;:0,&quot;slider&quot;:{&quot;id&quot;:&quot;4728&quot;}},&quot;code&quot;:&quot;\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n&quot;},&quot;id&quot;:&quot;4732&quot;,&quot;type&quot;:&quot;CustomJS&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4750&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4648&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;4701&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4751&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4748&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;4729&quot;},{&quot;id&quot;:&quot;4728&quot;},{&quot;id&quot;:&quot;4730&quot;}]},&quot;id&quot;:&quot;4733&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4652&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4742&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;4711&quot;}},&quot;id&quot;:&quot;4716&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;4711&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;4713&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;4714&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;4716&quot;}},&quot;id&quot;:&quot;4715&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4739&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;4668&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:5},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y_p&quot;}},&quot;id&quot;:&quot;4718&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4741&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;4662&quot;},{&quot;id&quot;:&quot;4663&quot;},{&quot;id&quot;:&quot;4664&quot;},{&quot;id&quot;:&quot;4665&quot;},{&quot;id&quot;:&quot;4666&quot;},{&quot;id&quot;:&quot;4667&quot;}]},&quot;id&quot;:&quot;4669&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y_c&quot;}},&quot;id&quot;:&quot;4714&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;4733&quot;}]},&quot;id&quot;:&quot;4734&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4683&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:5},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y_p&quot;}},&quot;id&quot;:&quot;4719&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;4710&quot;}},&quot;id&quot;:&quot;4721&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;4710&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;4718&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;4719&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;4721&quot;}},&quot;id&quot;:&quot;4720&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4685&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;4687&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;4690&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4650&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;4688&quot;,&quot;type&quot;:&quot;BasicTicker&quot;}],&quot;root_ids&quot;:[&quot;4759&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"ce75b8ee-649f-4d18-aaca-9108174bf68f","root_ids":["4759"],"roots":{"4759":"633a399e-6f65-4190-84b8-823cea5c7805"}}];
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