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
    
      
      
    
      var element = document.getElementById("7704c19f-b427-4d16-bf4f-fbd26cc385e2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7704c19f-b427-4d16-bf4f-fbd26cc385e2' but no matching script tag was found.")
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
                    
                  var docs_json = '{"a6b19cb9-6468-4bf2-876c-427ede07653e":{"defs":[],"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"6148","type":"BoxAnnotation"},{"attributes":{},"id":"6208","type":"BasicTickFormatter"},{"attributes":{"end":1.05,"start":-0.05},"id":"6156","type":"Range1d"},{"attributes":{"source":{"id":"6157"}},"id":"6168","type":"CDSView"},{"attributes":{},"id":"6192","type":"BasicTickFormatter"},{"attributes":{"width":30},"id":"6188","type":"Spacer"},{"attributes":{"args":{"max_value":"Infinity","min_value":0,"slider":{"id":"6176"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"6184","type":"CustomJS"},{"attributes":{"data_source":{"id":"6157"},"glyph":{"id":"6170"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6171"},"view":{"id":"6173"}},"id":"6172","type":"GlyphRenderer"},{"attributes":{},"id":"6199","type":"Selection"},{"attributes":{"args":{"max_value":"Infinity","min_value":0,"slider":{"id":"6175"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"6182","type":"CustomJS"},{"attributes":{},"id":"6109","type":"PanTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"6170","type":"Segment"},{"attributes":{},"id":"6207","type":"AllLabels"},{"attributes":{},"id":"6200","type":"UnionRenderers"},{"attributes":{},"id":"6191","type":"AllLabels"},{"attributes":{"children":[{"id":"6177"},{"id":"6175"},{"id":"6179"}]},"id":"6185","type":"Row"},{"attributes":{},"id":"6130","type":"LinearScale"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"6184"}]},"value":"5","width":70},"id":"6180","type":"TextInput"},{"attributes":{"children":[{"id":"6185"},{"id":"6186"}]},"id":"6187","type":"Column"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"6171","type":"Segment"},{"attributes":{"source":{"id":"6158"}},"id":"6163","type":"CDSView"},{"attributes":{},"id":"6194","type":"AllLabels"},{"attributes":{},"id":"6143","type":"WheelZoomTool"},{"attributes":{},"id":"6135","type":"BasicTicker"},{"attributes":{"axis":{"id":"6138"},"dimension":1,"ticker":null},"id":"6141","type":"Grid"},{"attributes":{"axis_label":"y","formatter":{"id":"6208"},"major_label_policy":{"id":"6207"},"ticker":{"id":"6135"}},"id":"6134","type":"LinearAxis"},{"attributes":{},"id":"6195","type":"BasicTickFormatter"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"6134"}],"border_fill_alpha":0,"center":[{"id":"6137"},{"id":"6141"}],"frame_height":175,"frame_width":300,"left":[{"id":"6138"}],"renderers":[{"id":"6162"}],"title":{"id":"6124"},"toolbar":{"id":"6149"},"toolbar_location":null,"x_range":{"id":"6093"},"x_scale":{"id":"6130"},"y_range":{"id":"6156"},"y_scale":{"id":"6132"}},"id":"6123","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6198","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"6160","type":"Line"},{"attributes":{},"id":"6204","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"ZmZmZmZm7r8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAABAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAAEEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAHEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAiQAAAAAAAACJAAAAAAAAAJEAAAAAAAAAkQAAAAAAAACZAAAAAAAAAJkAAAAAAAAAoQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAALEAAAAAAAAAuQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAwQAAAAAAAADFAAAAAAAAAMUAAAAAAAAAyQAAAAAAAADJAAAAAAAAAM0AAAAAAAAAzQAAAAAAAADRAAAAAAAAANEAAAAAAAAA1QAAAAAAAADVAAAAAAAAANkAAAAAAAAA2QAAAAAAAADdAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADhAAAAAAAAAOUAAAAAAAAA5QAAAAAAAADpAAAAAAAAAOkAAAAAAAAA7QAAAAAAAADtAAAAAAAAAPEAAAAAAAAA8QAAAAAAAAD1AAAAAAAAAPUAAAAAAAAA+QAAAAAAAAD5AAAAAAAAAP0AAAAAAAAA/QAAAAAAAAEBAAAAAAAAAQEAAAAAAAIBAQAAAAAAAgEBAAAAAAAAAQUAAAAAAAABBQAAAAAAAgEFAAAAAAACAQUAAAAAAAABCQAAAAAAAAEJAAAAAAACAQkAAAAAAAIBCQAAAAAAAAENAAAAAAAAAQ0AAAAAAAIBDQAAAAAAAgENAAAAAAAAAREAAAAAAAABEQAAAAAAAgERAAAAAAACAREAAAAAAAABFQAAAAAAAAEVAAAAAAACARUAAAAAAAIBFQAAAAAAAAEZAAAAAAAAARkAAAAAAAIBGQAAAAAAAgEZAAAAAAAAAR0AAAAAAAABHQAAAAAAAgEdAAAAAAACAR0AAAAAAAABIQAAAAAAAAEhAAAAAAACASEAAAAAAAIBIQAAAAAAAAElAAAAAAAAASUCamZmZmXlJQA==","dtype":"float64","order":"little","shape":[104]},"y_c":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAPJo44i1+DQ/8mjjiLX4ND8xQxzr4jZaPzFDHOviNlo/+IJPc/Iicz/4gk9z8iJzPy1OWl3zT4U/LU5aXfNPhT9yZKIxKA2UP3JkojEoDZQ/60ltL0/KoD/rSW0vT8qgPywU6KJIz6k/LBTookjPqT8GVpVJ/5KyPwZWlUn/krI/jheKpp9guT+OF4qmn2C5PxROVbmVnsA/FE5VuZWewD8Qt5pUnAXFPxC3mlScBcU/xOO35hfTyT/E47fmF9PJPz/gtKSK8s4/P+C0pIryzj9WK0VTQifSP1YrRVNCJ9I/8tXe19jo1D/y1d7X2OjUP9aCo8TXs9c/1oKjxNez1z+8L2ix1n7aP7wvaLHWfto/HmIAOGxB3T8eYgA4bEHdP1o48BBO9N8/WjjwEE703z/enpBWr0jhP96ekFavSOE/mdTvB9aJ4j+Z1O8H1oniP+qNDb2xu+M/6o0NvbG74z9yv4aN3tzkP3K/ho3e3OQ/thz0Q3Hs5T+2HPRDcezlP45AayHp6eY/jkBrIenp5j/2PMERIdXnP/Y8wREh1ec/y69LA0Gu6D/Lr0sDQa7oPy6t8uSvdek/Lq3y5K916T+0S6GkBizqP7RLoaQGLOo/Oy2MZgTS6j87LYxmBNLqP6To8xKEaOs/pOjzEoRo6z8tmlFDc/DrPy2aUUNz8Os/9LlyiMpq7D/0uXKIymrsP8iFGviG2Ow/yIUa+IbY7D8lWn3ppDrtPyVafemkOu0/+AKYwxuS7T/4ApjDG5LtPyZgWr7a3+0/JmBavtrf7T8mGUl3xiTuPyYZSXfGJO4/eEMkO7dh7j94QyQ7t2HuPx6U5ed3l+4/HpTl53eX7j/jp7hMxcbuP+OnuEzFxu4/Gk8t8E3w7j8aTy3wTfDuP7q1nyeyFO8/urWfJ7IU7z8AS4pthDTvPwBLim2ENO8/rDMR50lQ7z+sMxHnSVDvP/S4hgt7aO8/9LiGC3to7z+tyOFihH3vP63I4WKEfe8/VVAeUseP7z9VUB5Sx4/vP9a0Qe6an+8/1rRB7pqf7z8aKkXQTK3vPxoqRdBMre8/mUF35SG57z+ZQXflIbnvPw==","dtype":"float64","order":"little","shape":[104]}},"selected":{"id":"6199"},"selection_policy":{"id":"6200"}},"id":"6158","type":"ColumnDataSource"},{"attributes":{"end":5,"js_property_callbacks":{"change:value":[{"id":"6174"}]},"start":0,"step":0.01,"title":"\\u03c6","value":1},"id":"6176","type":"Slider"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"6115","type":"BoxAnnotation"},{"attributes":{},"id":"6132","type":"LinearScale"},{"attributes":{},"id":"6205","type":"BasicTickFormatter"},{"attributes":{},"id":"6114","type":"HelpTool"},{"attributes":{},"id":"6197","type":"Selection"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"6182"}]},"value":"20","width":70},"id":"6179","type":"TextInput"},{"attributes":{},"id":"6146","type":"ResetTool"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"6101"}],"border_fill_alpha":0,"center":[{"id":"6104"},{"id":"6108"}],"frame_height":175,"frame_width":300,"left":[{"id":"6105"}],"renderers":[{"id":"6167"},{"id":"6172"}],"title":{"id":"6091"},"toolbar":{"id":"6116"},"toolbar_location":null,"x_range":{"id":"6093"},"x_scale":{"id":"6097"},"y_range":{"id":"6095"},"y_scale":{"id":"6099"}},"id":"6090","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6145","type":"SaveTool"},{"attributes":{"text":"Negative Binomial"},"id":"6091","type":"Title"},{"attributes":{"data_source":{"id":"6158"},"glyph":{"id":"6160"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6161"},"view":{"id":"6163"}},"id":"6162","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"6148"}},"id":"6144","type":"BoxZoomTool"},{"attributes":{},"id":"6142","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"6161","type":"Line"},{"attributes":{"axis":{"id":"6134"},"ticker":null},"id":"6137","type":"Grid"},{"attributes":{},"id":"6147","type":"HelpTool"},{"attributes":{"active_multi":null,"tools":[{"id":"6142"},{"id":"6143"},{"id":"6144"},{"id":"6145"},{"id":"6146"},{"id":"6147"}]},"id":"6149","type":"Toolbar"},{"attributes":{},"id":"6139","type":"BasicTicker"},{"attributes":{"args":{"max_value":"Infinity","min_value":0,"slider":{"id":"6175"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"6181","type":"CustomJS"},{"attributes":{},"id":"6106","type":"BasicTicker"},{"attributes":{},"id":"6099","type":"LinearScale"},{"attributes":{"axis_label":"CDF","formatter":{"id":"6205"},"major_label_policy":{"id":"6204"},"ticker":{"id":"6139"}},"id":"6138","type":"LinearAxis"},{"attributes":{"args":{"max_value":"Infinity","min_value":0,"slider":{"id":"6176"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"6183","type":"CustomJS"},{"attributes":{"axis":{"id":"6101"},"ticker":null},"id":"6104","type":"Grid"},{"attributes":{"text":" "},"id":"6124","type":"Title"},{"attributes":{"data_source":{"id":"6157"},"glyph":{"id":"6165"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6166"},"view":{"id":"6168"}},"id":"6167","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"6165","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"6166","type":"Circle"},{"attributes":{},"id":"6102","type":"BasicTicker"},{"attributes":{"js_property_callbacks":{"change:end":[{"id":"6174"}],"change:start":[{"id":"6174"}]},"range_padding":0},"id":"6093","type":"DataRange1d"},{"attributes":{"data":{"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"y_p":{"__ndarray__":"72jjiLX4ND/xaOOItfhUP1rkEHFzKmk/XRllR/R8dz+1euoFXcqCP8RecFrsDos/fpT15vIJkj+3L4Xga62WPxEG03OBNps/XhKCMC9ynz/roxVtGpyhP9CydEjuNaM/5/Hz98p9pD+h2VUH6G+lP+VUzSS0DKY/FmclZvdXpj8VZyVm91emPxWTwTSsFKY/6rF+xw6XpT/zKojhhOikP21c8xVrEqQ/+pTbUbsdoz99GJMHzRKiPzbU1WYr+aA/FHvkrvuunz/djL8K/madP5paTjH+I5s/XKzfNNztmD/H0NP118qWP9cwXD24v5Q/Im33jPXPkj/+MLYL5v2QP9bxR0jRlY4/2vTy6Rtviz9DF7VYfIeIP9U0qoa23YU/Y0uXsL5vgz8mQK477jqBP30ole1heH4/MlOoYFbgej+l4olpsqZ3P3ObU7pRxHQ/9E8zuRsycj+tRZXqRdJvP2qs6IZ5xWs/w0eFdSQxaD++uA9bVwllPxSohzzvQmI/JgHJRjinXz/ciOoGxGNbP3L9LmQqqlc/","dtype":"float64","order":"little","shape":[51]}},"selected":{"id":"6197"},"selection_policy":{"id":"6198"}},"id":"6157","type":"ColumnDataSource"},{"attributes":{},"id":"6113","type":"ResetTool"},{"attributes":{"source":{"id":"6157"}},"id":"6173","type":"CDSView"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"6183"}]},"value":"0","width":70},"id":"6178","type":"TextInput"},{"attributes":{"children":[{"id":"6187"},{"id":"6219"},{"id":"6218"}]},"id":"6220","type":"Column"},{"attributes":{"toolbars":[{"id":"6116"},{"id":"6149"}],"tools":[{"id":"6109"},{"id":"6110"},{"id":"6111"},{"id":"6112"},{"id":"6113"},{"id":"6114"},{"id":"6142"},{"id":"6143"},{"id":"6144"},{"id":"6145"},{"id":"6146"},{"id":"6147"}]},"id":"6216","type":"ProxyToolbar"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"6181"}]},"value":"0","width":70},"id":"6177","type":"TextInput"},{"attributes":{},"id":"6110","type":"WheelZoomTool"},{"attributes":{"height":10},"id":"6219","type":"Spacer"},{"attributes":{"toolbar":{"id":"6216"}},"id":"6217","type":"ToolbarBox"},{"attributes":{"children":[{"id":"6178"},{"id":"6176"},{"id":"6180"}]},"id":"6186","type":"Row"},{"attributes":{"axis_label":"PMF","formatter":{"id":"6192"},"major_label_policy":{"id":"6191"},"ticker":{"id":"6106"}},"id":"6105","type":"LinearAxis"},{"attributes":{"children":[{"id":"6215"},{"id":"6217"}]},"id":"6218","type":"Row"},{"attributes":{"active_multi":null,"tools":[{"id":"6109"},{"id":"6110"},{"id":"6111"},{"id":"6112"},{"id":"6113"},{"id":"6114"}]},"id":"6116","type":"Toolbar"},{"attributes":{"args":{"arg1":{"id":"6175"},"arg2":{"id":"6176"},"arg3":{"id":"6175"},"discrete":true,"dist":"negative_binomial_mu_phi","n":400,"source_c":{"id":"6158"},"source_p":{"id":"6157"},"xrange":{"id":"6093"}},"code":"function arange(start, stop) {\\n\\tvar x = [];\\n\\tfor (var i = start; i &lt; stop; i++) x.push(i);\\n\\treturn x;\\n}\\n\\nfunction discrete_cdf(cumsum, y_p) {\\n    var y_c = [];\\n\\n    y_c.push(cumsum, cumsum);\\n    for (var i = 0; i &lt; y_p.length; i++) {\\n        if (!isNaN(y_p[i])) cumsum += y_p[i];\\n        y_c.push(cumsum, cumsum);\\n    }\\n\\n    return y_c;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_discrete(probFun, x_p, y_p, arg1, arg2, arg3) {\\n    // Compute CDF\\n    var cumsum = 0.0;\\n    var summand = 0.0;\\n    for (var i = 0; i &lt; x_p[0]; i++) {\\n        summand = probFun(x_p[i], arg1, arg2, arg3);\\n        if (!isNaN(summand)) cumsum += summand;\\n    }\\n\\n    y_c = discrete_cdf(cumsum, y_p);\\n    return y_c;\\n}\\n\\nfunction lngamma(z) {\\n    // Compute log of the Gamma function using Lanczos approx.,\\n    // see https://en.wikipedia.org/wiki/Lanczos_approximation.\\n\\n    if(z &lt; 0) return Number(&#x27;0/0&#x27;);\\n\\n    if (z &lt; 0.5) return Math.log(Math.PI) - Math.log(Math.sin(Math.PI * z)) - lngamma(1-z);\\n\\n    var p = [676.5203681218851,\\n             -1259.1392167224028,\\n             771.32342877765313,\\n             -176.61502916214059,\\n             12.507343278686905,\\n             -0.13857109526572012,\\n             9.9843695780195716e-6,\\n             1.5056327351493116e-7];\\n\\n    z -= 1.0;\\n    var Ag = 0.99999999999980993;\\n    for (var i = 0; i &lt; p.length; i++) {\\n        Ag += p[i] / (z + i + 1);\\n    }\\n    var t = z + p.length - 0.5;\\n\\n    return 0.5 * Math.log(2*Math.PI) + (z + 0.5)*Math.log(t) - t + Math.log(Ag);\\n}\\n\\n\\n\\nfunction lnfactorial(n) {\\n  if (n &gt; 254) { // Use Stirling&#x27;s approximation\\n    var x = n + 1;\\n    return (x - 0.5)*Math.log(x) - x + 0.5*Math.log(2*Math.PI) + 1.0/(12.0*x);\\n  }\\n  else { // Look it up\\n    const lnfact = [0.000000000000000,\\n                    0.000000000000000,\\n                    0.693147180559945,\\n                    1.791759469228055,\\n                    3.178053830347946,\\n                    4.787491742782046,\\n                    6.579251212010101,\\n                    8.525161361065415,\\n                    10.604602902745251,\\n                    12.801827480081469,\\n                    15.104412573075516,\\n                    17.502307845873887,\\n                    19.987214495661885,\\n                    22.552163853123421,\\n                    25.191221182738683,\\n                    27.899271383840894,\\n                    30.671860106080675,\\n                    33.505073450136891,\\n                    36.395445208033053,\\n                    39.339884187199495,\\n                    42.335616460753485,\\n                    45.380138898476908,\\n                    48.471181351835227,\\n                    51.606675567764377,\\n                    54.784729398112319,\\n                    58.003605222980518,\\n                    61.261701761002001,\\n                    64.557538627006323,\\n                    67.889743137181526,\\n                    71.257038967168000,\\n                    74.658236348830158,\\n                    78.092223553315307,\\n                    81.557959456115029,\\n                    85.054467017581516,\\n                    88.580827542197682,\\n                    92.136175603687079,\\n                    95.719694542143202,\\n                    99.330612454787428,\\n                    102.968198614513810,\\n                    106.631760260643450,\\n                    110.320639714757390,\\n                    114.034211781461690,\\n                    117.771881399745060,\\n                    121.533081515438640,\\n                    125.317271149356880,\\n                    129.123933639127240,\\n                    132.952575035616290,\\n                    136.802722637326350,\\n                    140.673923648234250,\\n                    144.565743946344900,\\n                    148.477766951773020,\\n                    152.409592584497350,\\n                    156.360836303078800,\\n                    160.331128216630930,\\n                    164.320112263195170,\\n                    168.327445448427650,\\n                    172.352797139162820,\\n                    176.395848406997370,\\n                    180.456291417543780,\\n                    184.533828861449510,\\n                    188.628173423671600,\\n                    192.739047287844900,\\n                    196.866181672889980,\\n                    201.009316399281570,\\n                    205.168199482641200,\\n                    209.342586752536820,\\n                    213.532241494563270,\\n                    217.736934113954250,\\n                    221.956441819130360,\\n                    226.190548323727570,\\n                    230.439043565776930,\\n                    234.701723442818260,\\n                    238.978389561834350,\\n                    243.268849002982730,\\n                    247.572914096186910,\\n                    251.890402209723190,\\n                    256.221135550009480,\\n                    260.564940971863220,\\n                    264.921649798552780,\\n                    269.291097651019810,\\n                    273.673124285693690,\\n                    278.067573440366120,\\n                    282.474292687630400,\\n                    286.893133295426990,\\n                    291.323950094270290,\\n                    295.766601350760600,\\n                    300.220948647014100,\\n                    304.686856765668720,\\n                    309.164193580146900,\\n                    313.652829949878990,\\n                    318.152639620209300,\\n                    322.663499126726210,\\n                    327.185287703775200,\\n                    331.717887196928470,\\n                    336.261181979198450,\\n                    340.815058870798960,\\n                    345.379407062266860,\\n                    349.954118040770250,\\n                    354.539085519440790,\\n                    359.134205369575340,\\n                    363.739375555563470,\\n                    368.354496072404690,\\n                    372.979468885689020,\\n                    377.614197873918670,\\n                    382.258588773060010,\\n                    386.912549123217560,\\n                    391.575988217329610,\\n                    396.248817051791490,\\n                    400.930948278915760,\\n                    405.622296161144900,\\n                    410.322776526937280,\\n                    415.032306728249580,\\n                    419.750805599544780,\\n                    424.478193418257090,\\n                    429.214391866651570,\\n                    433.959323995014870,\\n                    438.712914186121170,\\n                    443.475088120918940,\\n                    448.245772745384610,\\n                    453.024896238496130,\\n                    457.812387981278110,\\n                    462.608178526874890,\\n                    467.412199571608080,\\n                    472.224383926980520,\\n                    477.044665492585580,\\n                    481.872979229887900,\\n                    486.709261136839360,\\n                    491.553448223298010,\\n                    496.405478487217580,\\n                    501.265290891579240,\\n                    506.132825342034830,\\n                    511.008022665236070,\\n                    515.890824587822520,\\n                    520.781173716044240,\\n                    525.679013515995050,\\n                    530.584288294433580,\\n                    535.496943180169520,\\n                    540.416924105997740,\\n                    545.344177791154950,\\n                    550.278651724285620,\\n                    555.220294146894960,\\n                    560.169054037273100,\\n                    565.124881094874350,\\n                    570.087725725134190,\\n                    575.057539024710200,\\n                    580.034272767130800,\\n                    585.017879388839220,\\n                    590.008311975617860,\\n                    595.005524249382010,\\n                    600.009470555327430,\\n                    605.020105849423770,\\n                    610.037385686238740,\\n                    615.061266207084940,\\n                    620.091704128477430,\\n                    625.128656730891070,\\n                    630.172081847810200,\\n                    635.221937855059760,\\n                    640.278183660408100,\\n                    645.340778693435030,\\n                    650.409682895655240,\\n                    655.484856710889060,\\n                    660.566261075873510,\\n                    665.653857411105950,\\n                    670.747607611912710,\\n                    675.847474039736880,\\n                    680.953419513637530,\\n                    686.065407301994010,\\n                    691.183401114410800,\\n                    696.307365093814040,\\n                    701.437263808737160,\\n                    706.573062245787470,\\n                    711.714725802289990,\\n                    716.862220279103440,\\n                    722.015511873601330,\\n                    727.174567172815840,\\n                    732.339353146739310,\\n                    737.509837141777440,\\n                    742.685986874351220,\\n                    747.867770424643370,\\n                    753.055156230484160,\\n                    758.248113081374300,\\n                    763.446610112640200,\\n                    768.650616799717000,\\n                    773.860102952558460,\\n                    779.075038710167410,\\n                    784.295394535245690,\\n                    789.521141208958970,\\n                    794.752249825813460,\\n                    799.988691788643450,\\n                    805.230438803703120,\\n                    810.477462875863580,\\n                    815.729736303910160,\\n                    820.987231675937890,\\n                    826.249921864842800,\\n                    831.517780023906310,\\n                    836.790779582469900,\\n                    842.068894241700490,\\n                    847.352097970438420,\\n                    852.640365001133090,\\n                    857.933669825857460,\\n                    863.231987192405430,\\n                    868.535292100464630,\\n                    873.843559797865740,\\n                    879.156765776907600,\\n                    884.474885770751830,\\n                    889.797895749890240,\\n                    895.125771918679900,\\n                    900.458490711945270,\\n                    905.796028791646340,\\n                    911.138363043611210,\\n                    916.485470574328820,\\n                    921.837328707804890,\\n                    927.193914982476710,\\n                    932.555207148186240,\\n                    937.921183163208070,\\n                    943.291821191335660,\\n                    948.667099599019820,\\n                    954.046996952560450,\\n                    959.431492015349480,\\n                    964.820563745165940,\\n                    970.214191291518320,\\n                    975.612353993036210,\\n                    981.015031374908400,\\n                    986.422203146368590,\\n                    991.833849198223450,\\n                    997.249949600427840,\\n                    1002.670484599700300,\\n                    1008.095434617181700,\\n                    1013.524780246136200,\\n                    1018.958502249690200,\\n                    1024.396581558613400,\\n                    1029.838999269135500,\\n                    1035.285736640801600,\\n                    1040.736775094367400,\\n                    1046.192096209724900,\\n                    1051.651681723869200,\\n                    1057.115513528895000,\\n                    1062.583573670030100,\\n                    1068.055844343701400,\\n                    1073.532307895632800,\\n                    1079.012946818975000,\\n                    1084.497743752465600,\\n                    1089.986681478622400,\\n                    1095.479742921962700,\\n                    1100.976911147256000,\\n                    1106.478169357800900,\\n                    1111.983500893733000,\\n                    1117.492889230361000,\\n                    1123.006317976526100,\\n                    1128.523770872990800,\\n                    1134.045231790853000,\\n                    1139.570684729984800,\\n                    1145.100113817496100,\\n                    1150.633503306223700,\\n                    1156.170837573242400];\\n    return lnfact[n];\\n  }\\n}\\n\\n\\n\\nfunction probFun(y, mu, phi, {}) {\\n    if (y &lt; 0) return NaN;\\n    if (mu == 0 | phi == 0) return NaN;\\n\\n    var logMuPhi = Math.log(mu + phi);\\n\\n    return Math.exp(lngamma(y + phi)\\n                    - lngamma(phi)\\n                    - lnfactorial(y)\\n                    + phi * (Math.log(phi) - logMuPhi)\\n                    + y * (Math.log(mu) - logMuPhi);\\n\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points for discrete distributions\\nif (dist == &#x27;bernoulli&#x27;) {\\n\\txRangeMin = 0.0;\\n\\txRangeMax = 1.0;\\n}\\nelse if (dist == &#x27;categorical&#x27;) {\\n\\txRangeMin = 1;\\n\\txRangeMax = x_p.length;\\n}\\nelse {\\n  \\txRangeMin = Math.max(0, Math.floor(xRangeMin));\\n\\txRangeMax = Math.floor(xRangeMax);\\n}\\n\\n// x-values to evaluate PMF and CDF\\nx_p = arange(xRangeMin, xRangeMax+1);\\nlet xSize = xRangeMax - xRangeMin;\\n\\nx_c = [];\\nfor (var i = 0; i &lt; x_p.length; i++) x_c.push(x_p[i], x_p[i]);\\n\\nx_c.unshift(Math.max(xRangeMin - 0.05 * xSize, xRangeMin - 0.95));\\nx_c.push(Math.min(xRangeMax + 0.05 * xSize, xRangeMax + 0.95));\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PMF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_discrete(probFun, \\n\\tx_c, source_p.data[&#x27;y_p&#x27;], arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"6174","type":"CustomJS"},{"attributes":{"axis":{"id":"6105"},"dimension":1,"ticker":null},"id":"6108","type":"Grid"},{"attributes":{},"id":"6095","type":"DataRange1d"},{"attributes":{},"id":"6097","type":"LinearScale"},{"attributes":{"children":[[{"id":"6090"},0,0],[{"id":"6188"},0,1],[{"id":"6123"},0,2]]},"id":"6215","type":"GridBox"},{"attributes":{"axis_label":"y","formatter":{"id":"6195"},"major_label_policy":{"id":"6194"},"ticker":{"id":"6102"}},"id":"6101","type":"LinearAxis"},{"attributes":{"overlay":{"id":"6115"}},"id":"6111","type":"BoxZoomTool"},{"attributes":{},"id":"6112","type":"SaveTool"},{"attributes":{"end":20,"js_property_callbacks":{"change:value":[{"id":"6174"}]},"start":0,"step":0.01,"title":"\\u00b5","value":5},"id":"6175","type":"Slider"}],"root_ids":["6220"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"a6b19cb9-6468-4bf2-876c-427ede07653e","root_ids":["6220"],"roots":{"6220":"7704c19f-b427-4d16-bf4f-fbd26cc385e2"}}];
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