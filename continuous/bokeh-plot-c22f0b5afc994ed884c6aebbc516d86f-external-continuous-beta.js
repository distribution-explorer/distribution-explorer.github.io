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
    
      
      
    
      var element = document.getElementById("bb40c9c8-405b-4ecd-a793-ddf4ad288263");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bb40c9c8-405b-4ecd-a793-ddf4ad288263' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e9f01d75-9595-41ea-b0a6-0c4048bad4d3":{"defs":[],"roots":{"references":[{"attributes":{"js_property_callbacks":{"change:value":[{"id":"1752"}]},"value":"0.01","width":70},"id":"1748","type":"TextInput"},{"attributes":{"active_multi":null,"tools":[{"id":"1718"},{"id":"1719"},{"id":"1720"},{"id":"1721"},{"id":"1722"},{"id":"1723"}]},"id":"1725","type":"Toolbar"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"1677"}],"border_fill_alpha":0,"center":[{"id":"1680"},{"id":"1684"}],"frame_height":175,"frame_width":300,"left":[{"id":"1681"}],"renderers":[{"id":"1743"}],"title":{"id":"1667"},"toolbar":{"id":"1692"},"toolbar_location":null,"x_range":{"id":"1669"},"x_scale":{"id":"1673"},"y_range":{"id":"1671"},"y_scale":{"id":"1675"}},"id":"1666","subtype":"Figure","type":"Plot"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"1754"}]},"value":"0.01","width":70},"id":"1749","type":"TextInput"},{"attributes":{},"id":"1711","type":"BasicTicker"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"1746"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"1752","type":"CustomJS"},{"attributes":{},"id":"1708","type":"LinearScale"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"1746"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"1753","type":"CustomJS"},{"attributes":{},"id":"1706","type":"LinearScale"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"1753"}]},"value":"10","width":70},"id":"1750","type":"TextInput"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"1755"}]},"value":"10","width":70},"id":"1751","type":"TextInput"},{"attributes":{"children":[{"id":"1748"},{"id":"1746"},{"id":"1750"}]},"id":"1756","type":"Row"},{"attributes":{"axis_label":"\\u03b8","formatter":{"id":"1774"},"major_label_policy":{"id":"1775"},"ticker":{"id":"1711"}},"id":"1710","type":"LinearAxis"},{"attributes":{"children":[{"id":"1749"},{"id":"1747"},{"id":"1751"}]},"id":"1757","type":"Row"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y_c":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"1770"},"selection_policy":{"id":"1771"}},"id":"1734","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"1737","type":"Line"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"1747"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"1755","type":"CustomJS"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"1747"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"1754","type":"CustomJS"},{"attributes":{},"id":"1767","type":"Selection"},{"attributes":{"children":[[{"id":"1666"},0,0],[{"id":"1759"},0,1],[{"id":"1699"},0,2]]},"id":"1786","type":"GridBox"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y_p":{"__ndarray__":"AAAAAAAA8D/9///////vPwIAAAAAAPA/AQAAAAAA8D8AAAAAAADwP////////+8/AgAAAAAA8D/+///////vP/z//////+8//f//////7z/8///////vP/r//////+8//P//////7z/////////vP/3//////+8/////////7z/////////vP/3//////+8/+///////7z8AAAAAAADwP/z//////+8//f//////7z/9///////vP////////+8//P//////7z/7///////vP/z//////+8/AAAAAAAA8D/6///////vP/r//////+8/+v//////7z/5///////vP////////+8/AAAAAAAA8D/8///////vP/3//////+8/AQAAAAAA8D/8///////vP////////+8//v//////7z/6///////vP/z//////+8//v//////7z8AAAAAAADwP/3//////+8/+///////7z8AAAAAAADwP/3//////+8//v//////7z/7///////vP////////+8/AAAAAAAA8D/7///////vP/3//////+8/////////7z/////////vP/z//////+8/+///////7z/7///////vP/z//////+8//v//////7z/9///////vP/7//////+8//P//////7z/+///////vP/z//////+8//f//////7z/9///////vP/z//////+8/////////7z/+///////vP////////+8//v//////7z/8///////vP/z//////+8//v//////7z/8///////vP/z//////+8//f//////7z/+///////vP/v//////+8//f//////7z/9///////vP/z//////+8//P//////7z/+///////vP/3//////+8/AAAAAAAA8D/7///////vP/z//////+8//v//////7z/+///////vP/3//////+8//f//////7z/////////vPwAAAAAAAPA//f//////7z/+///////vP/3//////+8//P//////7z/+///////vP/z//////+8//f//////7z/7///////vP/7//////+8//v//////7z/9///////vP/v//////+8/////////7z/9///////vP/z//////+8//P//////7z/+///////vP/z//////+8/+///////7z/7///////vP/v//////+8//f//////7z/+///////vP/7//////+8//P//////7z/8///////vP/3//////+8/////////7z/8///////vP/v//////+8//P//////7z/6///////vP/3//////+8//v//////7z/+///////vP/r//////+8//P//////7z/+///////vP/z//////+8/+///////7z/+///////vP/7//////+8//f//////7z8AAAAAAADwP/z//////+8/AAAAAAAA8D/8///////vP////////+8//v//////7z/+///////vP/3//////+8/+///////7z/9///////vP/7//////+8/////////7z/7///////vP/3//////+8//v//////7z/8///////vP/3//////+8//P//////7z/+///////vP/v//////+8//P//////7z/+///////vP/7//////+8//f//////7z/8///////vP/7//////+8//f//////7z/////////vP/z//////+8//f//////7z/7///////vP/7//////+8//v//////7z/+///////vP/3//////+8//P//////7z/7///////vP/v//////+8/+///////7z/9///////vP/3//////+8//f//////7z8BAAAAAADwPwAAAAAAAPA/AAAAAAAA8D/+///////vP/z//////+8//v//////7z/////////vP////////+8//P//////7z/8///////vP/z//////+8//P//////7z/7///////vP/v//////+8/+///////7z/8///////vP/z//////+8//v//////7z/8///////vP/7//////+8//v//////7z/+///////vP/z//////+8//v//////7z/7///////vP/v//////+8//P//////7z/+///////vP/z//////+8//v//////7z/////////vP////////+8//v//////7z/8///////vP/7//////+8/AAAAAAAA8D/9///////vP////////+8//f//////7z/9///////vPwAAAAAAAPA/+///////7z/7///////vP/7//////+8/AAAAAAAA8D/9///////vP/7//////+8//P//////7z/9///////vP/n//////+8//f//////7z/7///////vP/z//////+8//f//////7z/+///////vP/7//////+8//f//////7z/9///////vP/7//////+8//v//////7z/7///////vP/z//////+8//P//////7z/8///////vP/7//////+8//P//////7z/9///////vP/z//////+8/////////7z/9///////vP/3//////+8//P//////7z/////////vP/z//////+8//v//////7z/////////vP/3//////+8/AAAAAAAA8D/8///////vPwAAAAAAAPA//f//////7z/+///////vP/7//////+8//P//////7z/////////vP/7//////+8//P//////7z/+///////vP/7//////+8//P//////7z/9///////vP/z//////+8//f//////7z/7///////vP/z//////+8/////////7z/+///////vP/7//////+8//f//////7z8AAAAAAADwP/z//////+8//f//////7z/7///////vP/v//////+8//v//////7z/9///////vP/7//////+8//v//////7z/9///////vP////////+8/////////7z/8///////vP/z//////+8//P//////7z/+///////vP/z//////+8//f//////7z/9///////vP/3//////+8//P//////7z/8///////vP////////+8//v//////7z/8///////vP/v//////+8//P//////7z/9///////vP/7//////+8/////////7z/+///////vP/v//////+8//P//////7z/8///////vP/7//////+8/+///////7z/8///////vP/7//////+8//f//////7z/8///////vP/7//////+8/////////7z/9///////vP/3//////+8//f//////7z/8///////vP////////+8//v//////7z/8///////vP/v//////+8//v//////7z/9///////vP/3//////+8//P//////7z/9///////vP/7//////+8//P//////7z/9///////vP/z//////+8//f//////7z/9///////vP/z//////+8//f//////7z/9///////vP////////+8/+v//////7z/9///////vP/v//////+8//f//////7z/8///////vP/v//////+8//v//////7z/8///////vP/7//////+8//P//////7z/9///////vP/3//////+8//P//////7z/////////vP/r//////+8/+v//////7z/6///////vP/7//////+8/AQAAAAAA8D/7///////vP/3//////+8/////////7z/////////vP/v//////+8/////////7z/6///////vP/r//////+8//f//////7z/8///////vP/r//////+8//P//////7z/8///////vP/v//////+8//f//////7z/8///////vP/v//////+8/////////7z/+///////vP////////+8//f//////7z/+///////vP/n//////+8//P//////7z/7///////vP/j//////+8/AAAAAAAA8D/8///////vP/z//////+8/AAAAAAAA8D8BAAAAAADwPwAAAAAAAPA/AAAAAAAA8D/8///////vP////////+8/AAAAAAAA8D8=","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"1767"},"selection_policy":{"id":"1768"}},"id":"1733","type":"ColumnDataSource"},{"attributes":{},"id":"1768","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"1787"}},"id":"1788","type":"ToolbarBox"},{"attributes":{},"id":"1770","type":"Selection"},{"attributes":{"width":30},"id":"1759","type":"Spacer"},{"attributes":{"toolbars":[{"id":"1692"},{"id":"1725"}],"tools":[{"id":"1685"},{"id":"1686"},{"id":"1687"},{"id":"1688"},{"id":"1689"},{"id":"1690"},{"id":"1718"},{"id":"1719"},{"id":"1720"},{"id":"1721"},{"id":"1722"},{"id":"1723"}]},"id":"1787","type":"ProxyToolbar"},{"attributes":{},"id":"1685","type":"PanTool"},{"attributes":{},"id":"1771","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_p"}},"id":"1741","type":"Line"},{"attributes":{"axis":{"id":"1710"},"ticker":null},"id":"1713","type":"Grid"},{"attributes":{},"id":"1690","type":"HelpTool"},{"attributes":{},"id":"1719","type":"WheelZoomTool"},{"attributes":{},"id":"1761","type":"BasicTickFormatter"},{"attributes":{"axis_label":"CDF","formatter":{"id":"1777"},"major_label_policy":{"id":"1778"},"ticker":{"id":"1715"}},"id":"1714","type":"LinearAxis"},{"attributes":{},"id":"1762","type":"AllLabels"},{"attributes":{"axis":{"id":"1714"},"dimension":1,"ticker":null},"id":"1717","type":"Grid"},{"attributes":{},"id":"1715","type":"BasicTicker"},{"attributes":{"children":[{"id":"1786"},{"id":"1788"}]},"id":"1789","type":"Row"},{"attributes":{},"id":"1723","type":"HelpTool"},{"attributes":{},"id":"1718","type":"PanTool"},{"attributes":{"overlay":{"id":"1724"}},"id":"1720","type":"BoxZoomTool"},{"attributes":{"height":10},"id":"1790","type":"Spacer"},{"attributes":{},"id":"1721","type":"SaveTool"},{"attributes":{},"id":"1722","type":"ResetTool"},{"attributes":{},"id":"1764","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"1758"},{"id":"1790"},{"id":"1789"}]},"id":"1791","type":"Column"},{"attributes":{"overlay":{"id":"1691"}},"id":"1687","type":"BoxZoomTool"},{"attributes":{},"id":"1765","type":"AllLabels"},{"attributes":{"start":0.0},"id":"1671","type":"DataRange1d"},{"attributes":{},"id":"1686","type":"WheelZoomTool"},{"attributes":{"axis_label":"\\u03b8","formatter":{"id":"1761"},"major_label_policy":{"id":"1762"},"ticker":{"id":"1678"}},"id":"1677","type":"LinearAxis"},{"attributes":{"axis":{"id":"1677"},"ticker":null},"id":"1680","type":"Grid"},{"attributes":{},"id":"1774","type":"BasicTickFormatter"},{"attributes":{"end":10,"js_property_callbacks":{"change:value":[{"id":"1745"}]},"start":0.01,"step":0.01,"title":"\\u03b1","value":1},"id":"1746","type":"Slider"},{"attributes":{},"id":"1688","type":"SaveTool"},{"attributes":{},"id":"1775","type":"AllLabels"},{"attributes":{"children":[{"id":"1756"},{"id":"1757"}]},"id":"1758","type":"Column"},{"attributes":{},"id":"1689","type":"ResetTool"},{"attributes":{"end":10,"js_property_callbacks":{"change:value":[{"id":"1745"}]},"start":0.01,"step":0.01,"title":"\\u03b2","value":1},"id":"1747","type":"Slider"},{"attributes":{"axis":{"id":"1681"},"dimension":1,"ticker":null},"id":"1684","type":"Grid"},{"attributes":{"axis_label":"PDF","formatter":{"id":"1764"},"major_label_policy":{"id":"1765"},"ticker":{"id":"1682"}},"id":"1681","type":"LinearAxis"},{"attributes":{},"id":"1673","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"1685"},{"id":"1686"},{"id":"1687"},{"id":"1688"},{"id":"1689"},{"id":"1690"}]},"id":"1692","type":"Toolbar"},{"attributes":{},"id":"1682","type":"BasicTicker"},{"attributes":{"text":" "},"id":"1700","type":"Title"},{"attributes":{"source":{"id":"1733"}},"id":"1744","type":"CDSView"},{"attributes":{"js_property_callbacks":{"change:end":[{"id":"1745"}],"change:start":[{"id":"1745"}]},"range_padding":0},"id":"1669","type":"DataRange1d"},{"attributes":{"end":1.05,"start":-0.05},"id":"1732","type":"Range1d"},{"attributes":{},"id":"1777","type":"BasicTickFormatter"},{"attributes":{},"id":"1678","type":"BasicTicker"},{"attributes":{},"id":"1675","type":"LinearScale"},{"attributes":{"data_source":{"id":"1733"},"glyph":{"id":"1741"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1742"},"view":{"id":"1744"}},"id":"1743","type":"GlyphRenderer"},{"attributes":{},"id":"1778","type":"AllLabels"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"1710"}],"border_fill_alpha":0,"center":[{"id":"1713"},{"id":"1717"}],"frame_height":175,"frame_width":300,"left":[{"id":"1714"}],"renderers":[{"id":"1738"}],"title":{"id":"1700"},"toolbar":{"id":"1725"},"toolbar_location":null,"x_range":{"id":"1669"},"x_scale":{"id":"1706"},"y_range":{"id":"1732"},"y_scale":{"id":"1708"}},"id":"1699","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_p"}},"id":"1742","type":"Line"},{"attributes":{"args":{"arg1":{"id":"1746"},"arg2":{"id":"1747"},"arg3":{"id":"1746"},"discrete":false,"dist":"beta","n":400,"source_c":{"id":"1734"},"source_p":{"id":"1733"},"xrange":{"id":"1669"}},"code":"function linspace(start, stop, n) {\\n\\tvar x = [];\\n\\tvar currValue = start;\\n\\tvar step = (stop - start) / (n - 1);\\n\\tfor (var i = 0; i &lt; n; i++) {\\n\\t\\tx.push(currValue);\\n\\t\\tcurrValue += step;\\n\\t}\\n\\treturn x;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_continuous(cdfFun, x_c, arg1, arg2, arg3) {\\n    var y_c = [];\\n    for (var i = 0; i &lt; x_c.length; i ++)\\n        y_c.push(cdfFun(x_c[i], arg1, arg2, arg3));\\n\\n    return y_c;\\n}\\n\\nfunction lngamma(z) {\\n    // Compute log of the Gamma function using Lanczos approx.,\\n    // see https://en.wikipedia.org/wiki/Lanczos_approximation.\\n\\n    if(z &lt; 0) return Number(&#x27;0/0&#x27;);\\n\\n    if (z &lt; 0.5) return Math.log(Math.PI) - Math.log(Math.sin(Math.PI * z)) - lngamma(1-z);\\n\\n    var p = [676.5203681218851,\\n             -1259.1392167224028,\\n             771.32342877765313,\\n             -176.61502916214059,\\n             12.507343278686905,\\n             -0.13857109526572012,\\n             9.9843695780195716e-6,\\n             1.5056327351493116e-7];\\n\\n    z -= 1.0;\\n    var Ag = 0.99999999999980993;\\n    for (var i = 0; i &lt; p.length; i++) {\\n        Ag += p[i] / (z + i + 1);\\n    }\\n    var t = z + p.length - 0.5;\\n\\n    return 0.5 * Math.log(2*Math.PI) + (z + 0.5)*Math.log(t) - t + Math.log(Ag);\\n}\\n\\n\\n\\nfunction lnbeta(x, y) {\\n    if (x &lt; 0 || y &lt; 0) {\\n        throw RangeError(&#x27;Arguments must be positive.&#x27;);\\n    }\\n    else if (x === 0 &amp;&amp; y === 0) return NaN;\\n    else if (x === 0 || y === 0) return Infinity;\\n\\n    return lngamma(x) + lngamma(y) - lngamma(x + y);\\n}\\n\\n\\n\\nfunction regularized_incomplete_beta(x, a, b) {\\n    // From Andreas Madsen&#x27;s mathfn, Copyright (c) 2013 Andreas Madsen\\n    // Computes incomplete beta function as a continued fraction\\n    if (x &lt; 0 || x &gt; 1) {\\n        throw new RangeError(&#x27;First argument must be between 0 and 1.&#x27;);\\n    }\\n\\n    // Special cases, there can make trouble otherwise\\n    else if (a === 1 &amp;&amp; b === 1) return x;\\n    else if (x === 0) return 0;\\n    else if (x === 1) return 1;\\n    else if (a === 0) return 1;\\n    else if (b === 0) return 0;\\n\\n    else {\\n        var bt = Math.exp(lngamma(a + b) - lngamma(a) - lngamma(b) + a * Math.log(x) + b * log1p(-x));\\n\\n        // Use continued fraction directly.\\n        if (x &lt; (a + 1) / (a + b + 2)) return bt * betacf(x, a, b) / a;\\n\\n        // else use continued fraction after making the symmetry transformation.\\n        else return 1 - bt * betacf(1 - x, b, a) / b;\\n    }\\n}\\n\\n\\n\\nfunction betacf(x, a, b) {\\n    // From Andreas Madsen&#x27;s mathfn, Copyright (c) 2013 Andreas Madsen\\n    // Computes incomplete beta function as a continues fraction\\n    var fpmin = 1e-30,\\n        m = 1,\\n        m2, aa, c, d, del, h, qab, qam, qap;\\n    // These q&#x27;s will be used in factors that occur in the coefficients\\n    qab = a + b;\\n    qap = a + 1;\\n    qam = a - 1;\\n    c = 1;\\n    d = 1 - qab * x / qap;\\n    if (Math.abs(d) &lt; fpmin) d = fpmin;\\n    d = 1 / d;\\n    h = d;\\n    for (; m &lt;= 100; m++) {\\n        m2 = 2 * m;\\n        aa = m * (b - m) * x / ((qam + m2) * (a + m2));\\n        // One step (the even one) of the recurrence\\n        d = 1 + aa * d;\\n        if (Math.abs(d) &lt; fpmin) d = fpmin;\\n        c = 1 + aa / c;\\n        if (Math.abs(c) &lt; fpmin) c = fpmin;\\n        d = 1 / d;\\n        h *= d * c;\\n        aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));\\n        // Next step of the recurrence (the odd one)\\n        d = 1 + aa * d;\\n        if (Math.abs(d) &lt; fpmin) d = fpmin;\\n        c = 1 + aa / c;\\n        if (Math.abs(c) &lt; fpmin) c = fpmin;\\n        d = 1 / d;\\n        del = d * c;\\n        h *= del;\\n        if (Math.abs(del - 1.0) &lt; 3e-7) break;\\n    }\\n    return h;\\n}\\n\\n\\n\\nfunction log1p(x) {\\n    // log of 1 + x, \\n    // adapted from Andreas Madsen&#x27;s mathfn, Copyright (c) 2013 Andreas Madsen\\n    if (x &lt;= -1.0) {\\n        throw new RangeError(&#x27;Argument must be greater than -1.0&#x27;);\\n    }\\n\\n    // x is large enough that the obvious evaluation is OK\\n    else if (Math.abs(x) &gt; 1e-4) {\\n        return Math.log(1.0 + x);\\n    }\\n\\n    // Use Taylor approx. log(1 + x) = x - x^2/2 with error roughly x^3/3\\n    // Since |x| &lt; 10^-4, |x|^3 &lt; 10^-12, relative error less than 10^-8\\n    else {\\n        return (-0.5*x + 1.0)*x;\\n    }\\n}\\n\\n\\n\\nfunction isone(x) {\\n    return Math.abs(1.0 - x) &lt;= 1.0e-8;\\n}\\n\\n\\n\\nfunction iszero(x) {\\n    return Math.abs(x) &lt;= 1.0e-8;\\n}\\n\\n\\n\\nfunction probFun(x, alpha, beta, {}) {\\n    if (x &lt; 0) return NaN;\\n    if (x &gt; 1) return NaN;\\n\\n    if (iszero(x)) {\\n        if (alpha == 1) {\\n            return Math.exp(-lnbeta(alpha, beta));\\n        }\\n        else if (alpha &gt; 1) {\\n            return 0.0;\\n        }\\n        else {\\n            return NaN;\\n        }\\n    }\\n    else if (isone(x)) {\\n        if (beta == 1) {\\n            return Math.exp(-lnbeta(alpha, beta));\\n        }\\n        else if (beta &gt; 1) {\\n            return 0.0;\\n        }\\n        else {\\n            return NaN;\\n        }\\n    }\\n\\n    let lnprob = (alpha - 1.0) * Math.log(x) + (beta - 1.0) * Math.log(1.0 - x) - lnbeta(alpha, beta);\\n\\n    return Math.exp(lnprob);\\n}\\n\\nfunction cdfFun(x, alpha, beta, {}) {\\n    if (x &lt; 0) return 0.0;\\n    if (x &gt; 1) return 1.0;\\n\\n    return regularized_incomplete_beta(x, alpha, beta);\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points based on support\\n// We&#x27;re not doing this now because we want to allow zooming\\n// JS codes now make anything outside of support NaN.\\n// if (dist == &#x27;lognormal&#x27; \\n//     || dist == &#x27;gamma&#x27; \\n//     || dist == &#x27;exponential&#x27; \\n//     || dist == &#x27;inv_gamma&#x27;\\n//     || dist == &#x27;weibull&#x27;) {\\n// \\txRangeMin = 0.0;\\n// }\\n// else if (dist == &#x27;beta&#x27;) { \\n//     xRangeMin = 0.0;\\n//     xRangeMax = 1.0;\\n// }\\n\\n// x-values to evaluate PDF and CDF\\nx_p = linspace(xRangeMin, xRangeMax, n);\\nx_c = x_p;\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PDF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_continuous(cdfFun, \\n    x_c, arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"1745","type":"CustomJS"},{"attributes":{"text":"Beta"},"id":"1667","type":"Title"},{"attributes":{"data_source":{"id":"1734"},"glyph":{"id":"1736"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1737"},"view":{"id":"1739"}},"id":"1738","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"1736","type":"Line"},{"attributes":{"source":{"id":"1734"}},"id":"1739","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1691","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1724","type":"BoxAnnotation"}],"root_ids":["1791"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"e9f01d75-9595-41ea-b0a6-0c4048bad4d3","root_ids":["1791"],"roots":{"1791":"bb40c9c8-405b-4ecd-a793-ddf4ad288263"}}];
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