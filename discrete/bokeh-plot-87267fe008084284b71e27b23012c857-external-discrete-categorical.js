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
    
      
      
    
      var element = document.getElementById("e0cfc7ee-02ba-4905-a4bf-f18062f9abe8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e0cfc7ee-02ba-4905-a4bf-f18062f9abe8' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;437d2258-97c9-4e86-b4e3-da2ca18b3e46&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;5099&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;5102&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5075&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5096&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;js_property_callbacks&quot;:{&quot;change:value&quot;:[{&quot;id&quot;:&quot;5145&quot;}]},&quot;value&quot;:&quot;0&quot;,&quot;width&quot;:70},&quot;id&quot;:&quot;5139&quot;,&quot;type&quot;:&quot;TextInput&quot;},{&quot;attributes&quot;:{&quot;width&quot;:30},&quot;id&quot;:&quot;5155&quot;,&quot;type&quot;:&quot;Spacer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5074&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;args&quot;:{&quot;arg1&quot;:{&quot;id&quot;:&quot;5136&quot;},&quot;arg2&quot;:{&quot;id&quot;:&quot;5137&quot;},&quot;arg3&quot;:{&quot;id&quot;:&quot;5138&quot;},&quot;discrete&quot;:true,&quot;dist&quot;:&quot;categorical&quot;,&quot;n&quot;:400,&quot;source_c&quot;:{&quot;id&quot;:&quot;5119&quot;},&quot;source_p&quot;:{&quot;id&quot;:&quot;5118&quot;},&quot;xrange&quot;:{&quot;id&quot;:&quot;5054&quot;}},&quot;code&quot;:&quot;function arange(start, stop) {\\n\\tvar x = [];\\n\\tfor (var i = start; i &lt; stop; i++) x.push(i);\\n\\treturn x;\\n}\\n\\nfunction discrete_cdf(cumsum, y_p) {\\n    var y_c = [];\\n\\n    y_c.push(cumsum, cumsum);\\n    for (var i = 0; i &lt; y_p.length; i++) {\\n        cumsum += y_p[i];\\n        y_c.push(cumsum, cumsum);\\n    }\\n\\n    return y_c;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_discrete(probFun, x_p, y_p, arg1, arg2, arg3) {\\n    // Compute CDF\\n    var cumsum = 0.0;\\n    for (var i = 0; i &lt; x_p[0]; i++) {\\n        cumsum += probFun(x_p[i], arg1, arg2, arg3);\\n    }\\n\\n    y_c = discrete_cdf(cumsum, y_p);\\n    return y_c;\\n}\\n\\nfunction probFun(cat, theta1, theta2, theta3) {\\n    var theta4 = 1 - theta1 - theta2 - theta3\\n    if (theta4 &lt; 0) return 0.0;\\n    if (![1, 2, 3, 4].includes(cat)) return NaN;\\n\\n    var probs = [theta1, theta2, theta3, theta4]\\n\\n    return probs[cat-1];\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points for discrete distributions\\nif (dist == &#x27;bernoulli&#x27;) {\\n\\txRangeMin = 0.0;\\n\\txRangeMax = 1.0;\\n}\\nelse if (dist == &#x27;categorical&#x27;) {\\n\\txRangeMin = 1;\\n\\txRangeMax = x_p.length;\\n}\\nelse {\\n  \\txRangeMin = Math.max(0, Math.floor(xRangeMin));\\n\\txRangeMax = Math.floor(xRangeMax);\\n}\\n\\n// x-values to evaluate PMF and CDF\\nx_p = arange(xRangeMin, xRangeMax+1);\\nlet xSize = xRangeMax - xRangeMin;\\n\\nx_c = [];\\nfor (var i = 0; i &lt; x_p.length; i++) x_c.push(x_p[i], x_p[i]);\\n\\nx_c.unshift(Math.max(xRangeMin - 0.05 * xSize, xRangeMin - 0.95));\\nx_c.push(Math.min(xRangeMax + 0.05 * xSize, xRangeMax + 0.95));\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PMF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_discrete(probFun, \\n\\tx_c, source_p.data[&#x27;y_p&#x27;], arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n&quot;},&quot;id&quot;:&quot;5135&quot;,&quot;type&quot;:&quot;CustomJS&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;5095&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;5098&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;5118&quot;}},&quot;id&quot;:&quot;5134&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5073&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5100&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;end&quot;:1,&quot;format&quot;:&quot;0[.]00&quot;,&quot;js_property_callbacks&quot;:{&quot;change:value&quot;:[{&quot;id&quot;:&quot;5135&quot;}]},&quot;start&quot;:0,&quot;step&quot;:0.01,&quot;title&quot;:&quot;\\u03b8\\u2082&quot;,&quot;value&quot;:0.3},&quot;id&quot;:&quot;5137&quot;,&quot;type&quot;:&quot;Slider&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;CDF&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;5168&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;5100&quot;}},&quot;id&quot;:&quot;5099&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;5076&quot;}},&quot;id&quot;:&quot;5072&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;5118&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;5131&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;5132&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;5134&quot;}},&quot;id&quot;:&quot;5133&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;js_property_callbacks&quot;:{&quot;change:value&quot;:[{&quot;id&quot;:&quot;5146&quot;}]},&quot;value&quot;:&quot;1&quot;,&quot;width&quot;:70},&quot;id&quot;:&quot;5142&quot;,&quot;type&quot;:&quot;TextInput&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5071&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;x0&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;x1&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y0&quot;:{&quot;value&quot;:0},&quot;y1&quot;:{&quot;field&quot;:&quot;y_p&quot;}},&quot;id&quot;:&quot;5132&quot;,&quot;type&quot;:&quot;Segment&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5070&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y_c&quot;}},&quot;id&quot;:&quot;5121&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;5141&quot;},{&quot;id&quot;:&quot;5138&quot;},{&quot;id&quot;:&quot;5144&quot;}]},&quot;id&quot;:&quot;5153&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;5103&quot;},{&quot;id&quot;:&quot;5104&quot;},{&quot;id&quot;:&quot;5105&quot;},{&quot;id&quot;:&quot;5106&quot;},{&quot;id&quot;:&quot;5107&quot;},{&quot;id&quot;:&quot;5108&quot;}]},&quot;id&quot;:&quot;5110&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;end&quot;:1,&quot;format&quot;:&quot;0[.]00&quot;,&quot;js_property_callbacks&quot;:{&quot;change:value&quot;:[{&quot;id&quot;:&quot;5135&quot;}]},&quot;start&quot;:0,&quot;step&quot;:0.01,&quot;title&quot;:&quot;\\u03b8\\u2081&quot;,&quot;value&quot;:0.2},&quot;id&quot;:&quot;5136&quot;,&quot;type&quot;:&quot;Slider&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5063&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;5119&quot;}},&quot;id&quot;:&quot;5124&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5103&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;end&quot;:1,&quot;format&quot;:&quot;0[.]00&quot;,&quot;js_property_callbacks&quot;:{&quot;change:value&quot;:[{&quot;id&quot;:&quot;5135&quot;}]},&quot;start&quot;:0,&quot;step&quot;:0.01,&quot;title&quot;:&quot;\\u03b8\\u2083&quot;,&quot;value&quot;:0.1},&quot;id&quot;:&quot;5138&quot;,&quot;type&quot;:&quot;Slider&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5104&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;5109&quot;}},&quot;id&quot;:&quot;5105&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;5062&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;5065&quot;},{&quot;id&quot;:&quot;5069&quot;}],&quot;frame_height&quot;:175,&quot;frame_width&quot;:300,&quot;left&quot;:[{&quot;id&quot;:&quot;5066&quot;}],&quot;renderers&quot;:[{&quot;id&quot;:&quot;5128&quot;},{&quot;id&quot;:&quot;5133&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;5052&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;5077&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;5054&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;5058&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;5056&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;5060&quot;}},&quot;id&quot;:&quot;5051&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5106&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Categorical&quot;},&quot;id&quot;:&quot;5052&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5107&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:[1,2,3,4],&quot;y_p&quot;:{&quot;__ndarray__&quot;:&quot;mpmZmZmZyT8zMzMzMzPTP5qZmZmZmbk/mpmZmZmZ2T8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[4]}},&quot;selected&quot;:{&quot;id&quot;:&quot;5162&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;5161&quot;}},&quot;id&quot;:&quot;5118&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;js_property_callbacks&quot;:{&quot;change:value&quot;:[{&quot;id&quot;:&quot;5149&quot;}]},&quot;value&quot;:&quot;0&quot;,&quot;width&quot;:70},&quot;id&quot;:&quot;5141&quot;,&quot;type&quot;:&quot;TextInput&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;5066&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;5069&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;5174&quot;},{&quot;id&quot;:&quot;5176&quot;}]},&quot;id&quot;:&quot;5177&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;5062&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;5065&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5108&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;category&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;5157&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;5063&quot;}},&quot;id&quot;:&quot;5062&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5067&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;PMF&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;5159&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;5067&quot;}},&quot;id&quot;:&quot;5066&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;js_property_callbacks&quot;:{&quot;change:value&quot;:[{&quot;id&quot;:&quot;5147&quot;}]},&quot;value&quot;:&quot;0&quot;,&quot;width&quot;:70},&quot;id&quot;:&quot;5140&quot;,&quot;type&quot;:&quot;TextInput&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5060&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;end&quot;:1.05,&quot;start&quot;:-0.05},&quot;id&quot;:&quot;5117&quot;,&quot;type&quot;:&quot;Range1d&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;5095&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;5098&quot;},{&quot;id&quot;:&quot;5102&quot;}],&quot;frame_height&quot;:175,&quot;frame_width&quot;:300,&quot;left&quot;:[{&quot;id&quot;:&quot;5099&quot;}],&quot;renderers&quot;:[{&quot;id&quot;:&quot;5123&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;5085&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;5110&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;5054&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;5091&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;5117&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;5093&quot;}},&quot;id&quot;:&quot;5084&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;5077&quot;},{&quot;id&quot;:&quot;5110&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;5070&quot;},{&quot;id&quot;:&quot;5071&quot;},{&quot;id&quot;:&quot;5072&quot;},{&quot;id&quot;:&quot;5073&quot;},{&quot;id&quot;:&quot;5074&quot;},{&quot;id&quot;:&quot;5075&quot;},{&quot;id&quot;:&quot;5103&quot;},{&quot;id&quot;:&quot;5104&quot;},{&quot;id&quot;:&quot;5105&quot;},{&quot;id&quot;:&quot;5106&quot;},{&quot;id&quot;:&quot;5107&quot;},{&quot;id&quot;:&quot;5108&quot;}]},&quot;id&quot;:&quot;5175&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5157&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;args&quot;:{&quot;max_value&quot;:1,&quot;min_value&quot;:0,&quot;slider&quot;:{&quot;id&quot;:&quot;5136&quot;}},&quot;code&quot;:&quot;\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n&quot;},&quot;id&quot;:&quot;5146&quot;,&quot;type&quot;:&quot;CustomJS&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5056&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;js_property_callbacks&quot;:{&quot;change:value&quot;:[{&quot;id&quot;:&quot;5148&quot;}]},&quot;value&quot;:&quot;1&quot;,&quot;width&quot;:70},&quot;id&quot;:&quot;5143&quot;,&quot;type&quot;:&quot;TextInput&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot; &quot;},&quot;id&quot;:&quot;5085&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5058&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5170&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;args&quot;:{&quot;max_value&quot;:1,&quot;min_value&quot;:0,&quot;slider&quot;:{&quot;id&quot;:&quot;5136&quot;}},&quot;code&quot;:&quot;\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n&quot;},&quot;id&quot;:&quot;5145&quot;,&quot;type&quot;:&quot;CustomJS&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5168&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;js_property_callbacks&quot;:{&quot;change:value&quot;:[{&quot;id&quot;:&quot;5150&quot;}]},&quot;value&quot;:&quot;1&quot;,&quot;width&quot;:70},&quot;id&quot;:&quot;5144&quot;,&quot;type&quot;:&quot;TextInput&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;5139&quot;},{&quot;id&quot;:&quot;5136&quot;},{&quot;id&quot;:&quot;5142&quot;}]},&quot;id&quot;:&quot;5151&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5161&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5159&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;5140&quot;},{&quot;id&quot;:&quot;5137&quot;},{&quot;id&quot;:&quot;5143&quot;}]},&quot;id&quot;:&quot;5152&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{&quot;args&quot;:{&quot;max_value&quot;:1,&quot;min_value&quot;:0,&quot;slider&quot;:{&quot;id&quot;:&quot;5138&quot;}},&quot;code&quot;:&quot;\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n&quot;},&quot;id&quot;:&quot;5149&quot;,&quot;type&quot;:&quot;CustomJS&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5162&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;5109&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;5175&quot;}},&quot;id&quot;:&quot;5176&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;5151&quot;},{&quot;id&quot;:&quot;5152&quot;},{&quot;id&quot;:&quot;5153&quot;}]},&quot;id&quot;:&quot;5154&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;args&quot;:{&quot;max_value&quot;:1,&quot;min_value&quot;:0,&quot;slider&quot;:{&quot;id&quot;:&quot;5138&quot;}},&quot;code&quot;:&quot;\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n&quot;},&quot;id&quot;:&quot;5150&quot;,&quot;type&quot;:&quot;CustomJS&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5171&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;args&quot;:{&quot;max_value&quot;:1,&quot;min_value&quot;:0,&quot;slider&quot;:{&quot;id&quot;:&quot;5137&quot;}},&quot;code&quot;:&quot;\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n&quot;},&quot;id&quot;:&quot;5148&quot;,&quot;type&quot;:&quot;CustomJS&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5166&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;args&quot;:{&quot;max_value&quot;:1,&quot;min_value&quot;:0,&quot;slider&quot;:{&quot;id&quot;:&quot;5137&quot;}},&quot;code&quot;:&quot;\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n&quot;},&quot;id&quot;:&quot;5147&quot;,&quot;type&quot;:&quot;CustomJS&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y_c&quot;}},&quot;id&quot;:&quot;5122&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:5},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y_p&quot;}},&quot;id&quot;:&quot;5126&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;5076&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;range_padding&quot;:0},&quot;id&quot;:&quot;5054&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;5119&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;5121&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;5122&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;5124&quot;}},&quot;id&quot;:&quot;5123&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;5070&quot;},{&quot;id&quot;:&quot;5071&quot;},{&quot;id&quot;:&quot;5072&quot;},{&quot;id&quot;:&quot;5073&quot;},{&quot;id&quot;:&quot;5074&quot;},{&quot;id&quot;:&quot;5075&quot;}]},&quot;id&quot;:&quot;5077&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:5},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y_p&quot;}},&quot;id&quot;:&quot;5127&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;MzMzMzMz6z8AAAAAAADwPwAAAAAAAPA/AAAAAAAAAEAAAAAAAAAAQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAQQAAAAAAAABBAmpmZmZmZEEA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[10]},&quot;y_c&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAJqZmZmZmck/mpmZmZmZyT8AAAAAAADgPwAAAAAAAOA/MzMzMzMz4z8zMzMzMzPjPwAAAAAAAPA/AAAAAAAA8D8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[10]}},&quot;selected&quot;:{&quot;id&quot;:&quot;5171&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;5170&quot;}},&quot;id&quot;:&quot;5119&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;5118&quot;}},&quot;id&quot;:&quot;5129&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;height&quot;:10},&quot;id&quot;:&quot;5178&quot;,&quot;type&quot;:&quot;Spacer&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;5118&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;5126&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;5127&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;5129&quot;}},&quot;id&quot;:&quot;5128&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5091&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;x0&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;x1&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y0&quot;:{&quot;value&quot;:0},&quot;y1&quot;:{&quot;field&quot;:&quot;y_p&quot;}},&quot;id&quot;:&quot;5131&quot;,&quot;type&quot;:&quot;Segment&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;5051&quot;},0,0],[{&quot;id&quot;:&quot;5155&quot;},0,1],[{&quot;id&quot;:&quot;5084&quot;},0,2]]},&quot;id&quot;:&quot;5174&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;5093&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;5154&quot;},{&quot;id&quot;:&quot;5178&quot;},{&quot;id&quot;:&quot;5177&quot;}]},&quot;id&quot;:&quot;5179&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;category&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;5166&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;5096&quot;}},&quot;id&quot;:&quot;5095&quot;,&quot;type&quot;:&quot;LinearAxis&quot;}],&quot;root_ids&quot;:[&quot;5179&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"437d2258-97c9-4e86-b4e3-da2ca18b3e46","root_ids":["5179"],"roots":{"5179":"e0cfc7ee-02ba-4905-a4bf-f18062f9abe8"}}];
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