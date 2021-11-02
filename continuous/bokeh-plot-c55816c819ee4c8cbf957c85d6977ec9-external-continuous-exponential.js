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
    
      
      
    
      var element = document.getElementById("920abbac-0d61-4b4b-9e8d-849c8d36d951");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '920abbac-0d61-4b4b-9e8d-849c8d36d951' but no matching script tag was found.")
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
                    
                  var docs_json = '{"7af8fd54-3642-40e4-9f5a-8a2c9294db94":{"defs":[],"roots":{"references":[{"attributes":{},"id":"2101","type":"ResetTool"},{"attributes":{"width":30},"id":"2165","type":"Spacer"},{"attributes":{"source":{"id":"2146"}},"id":"2151","type":"CDSView"},{"attributes":{"data_source":{"id":"2145"},"glyph":{"id":"2153"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2154"},"view":{"id":"2156"}},"id":"2155","type":"GlyphRenderer"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"2158"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"2162","type":"CustomJS"},{"attributes":{"children":[{"id":"2159"},{"id":"2158"},{"id":"2160"}]},"id":"2163","type":"Row"},{"attributes":{"toolbars":[{"id":"2104"},{"id":"2137"}],"tools":[{"id":"2097"},{"id":"2098"},{"id":"2099"},{"id":"2100"},{"id":"2101"},{"id":"2102"},{"id":"2130"},{"id":"2131"},{"id":"2132"},{"id":"2133"},{"id":"2134"},{"id":"2135"}]},"id":"2193","type":"ProxyToolbar"},{"attributes":{},"id":"2134","type":"ResetTool"},{"attributes":{"axis_label":"y","formatter":{"id":"2169"},"major_label_policy":{"id":"2167"},"ticker":{"id":"2090"}},"id":"2089","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_p"}},"id":"2154","type":"Line"},{"attributes":{},"id":"2185","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"2164"},{"id":"2196"},{"id":"2195"}]},"id":"2197","type":"Column"},{"attributes":{},"id":"2176","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"2148","type":"Line"},{"attributes":{},"id":"2177","type":"Selection"},{"attributes":{"axis":{"id":"2093"},"dimension":1,"ticker":null},"id":"2096","type":"Grid"},{"attributes":{"height":10},"id":"2196","type":"Spacer"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"2161"}]},"value":"0.1","width":70},"id":"2159","type":"TextInput"},{"attributes":{"axis":{"id":"2089"},"ticker":null},"id":"2092","type":"Grid"},{"attributes":{},"id":"2102","type":"HelpTool"},{"attributes":{"children":[{"id":"2192"},{"id":"2194"}]},"id":"2195","type":"Row"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"2149","type":"Line"},{"attributes":{},"id":"2135","type":"HelpTool"},{"attributes":{},"id":"2131","type":"WheelZoomTool"},{"attributes":{},"id":"2094","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"2130"},{"id":"2131"},{"id":"2132"},{"id":"2133"},{"id":"2134"},{"id":"2135"}]},"id":"2137","type":"Toolbar"},{"attributes":{"overlay":{"id":"2136"}},"id":"2132","type":"BoxZoomTool"},{"attributes":{},"id":"2127","type":"BasicTicker"},{"attributes":{"axis_label":"PDF","formatter":{"id":"2172"},"major_label_policy":{"id":"2170"},"ticker":{"id":"2094"}},"id":"2093","type":"LinearAxis"},{"attributes":{},"id":"2133","type":"SaveTool"},{"attributes":{},"id":"2097","type":"PanTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_p"}},"id":"2153","type":"Line"},{"attributes":{"overlay":{"id":"2103"}},"id":"2099","type":"BoxZoomTool"},{"attributes":{},"id":"2180","type":"AllLabels"},{"attributes":{"text":"Exponential"},"id":"2079","type":"Title"},{"attributes":{},"id":"2098","type":"WheelZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAAD4M+HPhD+zP/gz4c+EP8M/9M3RN0ffzD/4M+HPhD/TP/aA2QNmD9g/9M3RN0ff3D95DeU1lNfgP/gz4c+EP+M/d1rdaXWn5T/2gNkDZg/oP3Wn1Z1Wd+o/9M3RN0ff7D9z9M3RN0fvP3kN5TWU1/A/uCDjgowL8j/4M+HPhD/zPzhH3xx9c/Q/d1rdaXWn9T+2bdu2bdv2P/aA2QNmD/g/NpTXUF5D+T91p9WdVnf6P7S60+pOq/s/9M3RN0ff/D804c+EPxP+P3P0zdE3R/8/2QNmD5g9AEB5DeU1lNcAQBkXZFyQcQFAuCDjgowLAkBYKmKpiKUCQPgz4c+EPwNAmD1g9oDZA0A4R98cfXMEQNdQXkN5DQVAd1rdaXWnBUAXZFyQcUEGQLZt27Zt2wZAVnda3Wl1B0D2gNkDZg8IQJaKWCpiqQhANpTXUF5DCUDVnVZ3Wt0JQHWn1Z1WdwpAFbFUxFIRC0C0utPqTqsLQFTEUhFLRQxA9M3RN0ffDECU11BeQ3kNQDThz4Q/Ew5A0+pOqzutDkBz9M3RN0cPQBP+TPgz4Q9A2QNmD5g9EECpiKUilooQQHkN5TWU1xBASZIkSZIkEUAZF2RckHERQOmbo2+OvhFAuCDjgowLEkCIpSKWilgSQFgqYqmIpRJAKK+hvIbyEkD4M+HPhD8TQMi4IOOCjBNAmD1g9oDZE0Bowp8JfyYUQDhH3xx9cxRAB8weMHvAFEDXUF5DeQ0VQKfVnVZ3WhVAd1rdaXWnFUBH3xx9c/QVQBdkXJBxQRZA5+ibo2+OFkC2bdu2bdsWQIbyGsprKBdAVnda3Wl1F0Am/JnwZ8IXQPaA2QNmDxhAxgUZF2RcGECWilgqYqkYQGYPmD1g9hhANpTXUF5DGUAFGRdkXJAZQNWdVnda3RlApSKWilgqGkB1p9WdVncaQEUsFbFUxBpAFbFUxFIRG0DlNZTXUF4bQLS60+pOqxtAhD8T/kz4G0BUxFIRS0UcQCRJkiRJkhxA9M3RN0ffHEDEUhFLRSwdQJTXUF5DeR1AZFyQcUHGHUA04c+EPxMeQANmD5g9YB5A0+pOqzutHkCjb46+OfoeQHP0zdE3Rx9AQ3kN5TWUH0AT/kz4M+EfQHFBxgUZFyBA2QNmD5g9IEBBxgUZF2QgQKmIpSKWiiBAEUtFLBWxIEB5DeU1lNcgQOHPhD8T/iBASZIkSZIkIUCxVMRSEUshQBkXZFyQcSFAgdkDZg+YIUDpm6Nvjr4hQFFeQ3kN5SFAuCDjgowLIkAg44KMCzIiQIilIpaKWCJA8GfCnwl/IkBYKmKpiKUiQMDsAbMHzCJAKK+hvIbyIkCQcUHGBRkjQPgz4c+EPyNAYPaA2QNmI0DIuCDjgowjQDB7wOwBsyNAmD1g9oDZI0AAAAAAAAAkQGjCnwl/JiRA0IQ/E/5MJEA4R98cfXMkQJ8Jfyb8mSRAB8weMHvAJEBvjr45+uYkQNdQXkN5DSVAPxP+TPgzJUCn1Z1Wd1olQA+YPWD2gCVAd1rdaXWnJUDfHH1z9M0lQEffHH1z9CVAr6G8hvIaJkAXZFyQcUEmQH8m/JnwZyZA5+ibo2+OJkBPqzut7rQmQLZt27Zt2yZAHjB7wOwBJ0CG8hrKaygnQO60utPqTidAVnda3Wl1J0C+Ofrm6JsnQCb8mfBnwidAjr45+uboJ0D2gNkDZg8oQF5DeQ3lNShAxgUZF2RcKEAuyLgg44IoQJaKWCpiqShA/kz4M+HPKEBmD5g9YPYoQM7RN0ffHClANpTXUF5DKUCdVnda3WkpQAUZF2RckClAbdu2bdu2KUDVnVZ3Wt0pQD1g9oDZAypApSKWilgqKkAN5TWU11AqQHWn1Z1WdypA3Wl1p9WdKkBFLBWxVMQqQK3utLrT6ipAFbFUxFIRK0B9c/TN0TcrQOU1lNdQXitATfgz4c+EK0C0utPqTqsrQBx9c/TN0StAhD8T/kz4K0DsAbMHzB4sQFTEUhFLRSxAvIbyGsprLEAkSZIkSZIsQIwLMi7IuCxA9M3RN0ffLEBckHFBxgUtQMRSEUtFLC1ALBWxVMRSLUCU11BeQ3ktQPyZ8GfCny1AZFyQcUHGLUDMHjB7wOwtQDThz4Q/Ey5Am6Nvjr45LkADZg+YPWAuQGsor6G8hi5A0+pOqzutLkA7re60utMuQKNvjr45+i5ACzIuyLggL0Bz9M3RN0cvQNu2bdu2bS9AQ3kN5TWUL0CrO63utLovQBP+TPgz4S9APWD2gNkDMEBxQcYFGRcwQKUilopYKjBA2QNmD5g9MEAN5TWU11AwQEHGBRkXZDBAdafVnVZ3MECpiKUiloowQN1pdafVnTBAEUtFLBWxMEBFLBWxVMQwQHkN5TWU1zBAre60utPqMEDhz4Q/E/4wQBWxVMRSETFASZIkSZIkMUB9c/TN0TcxQLFUxFIRSzFA5TWU11BeMUAZF2RckHExQE34M+HPhDFAgdkDZg+YMUC1utPqTqsxQOmbo2+OvjFAHX1z9M3RMUBRXkN5DeUxQIU/E/5M+DFAuCDjgowLMkDsAbMHzB4yQCDjgowLMjJAVMRSEUtFMkCIpSKWilgyQLyG8hrKazJA8GfCnwl/MkAkSZIkSZIyQFgqYqmIpTJAjAsyLsi4MkDA7AGzB8wyQPTN0TdH3zJAKK+hvIbyMkBckHFBxgUzQJBxQcYFGTNAxFIRS0UsM0D4M+HPhD8zQCwVsVTEUjNAYPaA2QNmM0CU11BeQ3kzQMi4IOOCjDNA/JnwZ8KfM0Awe8DsAbMzQGRckHFBxjNAmD1g9oDZM0DMHjB7wOwzQAAAAAAAADRANOHPhD8TNEBowp8JfyY0QJyjb46+OTRA0IQ/E/5MNEAEZg+YPWA0QDhH3xx9czRAayivobyGNECfCX8m/Jk0QNPqTqs7rTRAB8weMHvANEA7re60utM0QG+Ovjn65jRAo2+Ovjn6NEDXUF5DeQ01QAsyLsi4IDVAPxP+TPgzNUBz9M3RN0c1QKfVnVZ3WjVA27Zt27ZtNUAPmD1g9oA1QEN5DeU1lDVAd1rdaXWnNUCrO63utLo1QN8cfXP0zTVAE/5M+DPhNUBH3xx9c/Q1QHvA7AGzBzZAr6G8hvIaNkDjgowLMi42QBdkXJBxQTZAS0UsFbFUNkB/JvyZ8Gc2QLMHzB4wezZA5+ibo2+ONkAbymsor6E2QE+rO63utDZAg4wLMi7INkC2bdu2bds2QOpOqzut7jZAHjB7wOwBN0BSEUtFLBU3QIbyGsprKDdAutPqTqs7N0DutLrT6k43QCKWilgqYjdAVnda3Wl1N0CKWCpiqYg3QL45+ubomzdA8hrKayivN0Am/JnwZ8I3QFrdaXWn1TdAjr45+uboN0DCnwl/Jvw3QPaA2QNmDzhAKmKpiKUiOEBeQ3kN5TU4QJIkSZIkSThAxgUZF2RcOED65uibo284QC7IuCDjgjhAYqmIpSKWOECWilgqYqk4QMprKK+hvDhA/kz4M+HPOEAyLsi4IOM4QGYPmD1g9jhAmvBnwp8JOUDO0TdH3xw5QAKzB8weMDlANpTXUF5DOUBpdafVnVY5QJ1Wd1rdaTlA0TdH3xx9OUAFGRdkXJA5QDn65uibozlAbdu2bdu2OUChvIbyGso5QNWdVnda3TlACX8m/JnwOUA9YPaA2QM6QHFBxgUZFzpApSKWilgqOkDZA2YPmD06QA3lNZTXUDpAQcYFGRdkOkB1p9WdVnc6QKmIpSKWijpA3Wl1p9WdOkARS0UsFbE6QEUsFbFUxDpAeQ3lNZTXOkCt7rS60+o6QOHPhD8T/jpAFbFUxFIRO0BJkiRJkiQ7QH1z9M3RNztAsVTEUhFLO0DlNZTXUF47QBkXZFyQcTtATfgz4c+EO0CB2QNmD5g7QLS60+pOqztA6Jujb46+O0AcfXP0zdE7QFBeQ3kN5TtAhD8T/kz4O0C4IOOCjAs8QOwBswfMHjxAIOOCjAsyPEBUxFIRS0U8QIilIpaKWDxAvIbyGsprPEDwZ8KfCX88QCRJkiRJkjxAWCpiqYilPECMCzIuyLg8QMDsAbMHzDxA9M3RN0ffPEAor6G8hvI8QFyQcUHGBT1AkHFBxgUZPUDEUhFLRSw9QPgz4c+EPz1ALBWxVMRSPUBg9oDZA2Y9QJTXUF5DeT1AyLgg44KMPUD8mfBnwp89QDB7wOwBsz1AZFyQcUHGPUCYPWD2gNk9QMweMHvA7D1AAAAAAAAAPkA=","dtype":"float64","order":"little","shape":[400]},"y_c":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"2177"},"selection_policy":{"id":"2176"}},"id":"2146","type":"ColumnDataSource"},{"attributes":{},"id":"2087","type":"LinearScale"},{"attributes":{},"id":"2167","type":"AllLabels"},{"attributes":{"text":" "},"id":"2112","type":"Title"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"2122"}],"border_fill_alpha":0,"center":[{"id":"2125"},{"id":"2129"}],"frame_height":175,"frame_width":300,"left":[{"id":"2126"}],"renderers":[{"id":"2150"}],"title":{"id":"2112"},"toolbar":{"id":"2137"},"toolbar_location":null,"x_range":{"id":"2081"},"x_scale":{"id":"2118"},"y_range":{"id":"2144"},"y_scale":{"id":"2120"}},"id":"2111","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2175","type":"Selection"},{"attributes":{"end":1.05,"start":-0.05},"id":"2144","type":"Range1d"},{"attributes":{"args":{"arg1":{"id":"2158"},"arg2":{"id":"2158"},"arg3":{"id":"2158"},"discrete":false,"dist":"exponential","n":400,"source_c":{"id":"2146"},"source_p":{"id":"2145"},"xrange":{"id":"2081"}},"code":"function linspace(start, stop, n) {\\n\\tvar x = [];\\n\\tvar currValue = start;\\n\\tvar step = (stop - start) / (n - 1);\\n\\tfor (var i = 0; i &lt; n; i++) {\\n\\t\\tx.push(currValue);\\n\\t\\tcurrValue += step;\\n\\t}\\n\\treturn x;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_continuous(cdfFun, x_c, arg1, arg2, arg3) {\\n    var y_c = [];\\n    for (var i = 0; i &lt; x_c.length; i ++)\\n        y_c.push(cdfFun(x_c[i], arg1, arg2, arg3));\\n\\n    return y_c;\\n}\\n\\nfunction probFun(x, beta, {}, {}) {\\n    if (x &lt; 0) return NaN;\\n\\n    return beta * Math.exp(-beta * x);\\n}\\n\\nfunction cdfFun(x, beta, {}, {}) {\\n    if (x &lt; 0) return 0.0;\\n\\n    return 1 - Math.exp(-beta * x);\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points based on support\\n// We&#x27;re not doing this now because we want to allow zooming\\n// JS codes now make anything outside of support NaN.\\n// if (dist == &#x27;lognormal&#x27; \\n//     || dist == &#x27;gamma&#x27; \\n//     || dist == &#x27;exponential&#x27; \\n//     || dist == &#x27;inv_gamma&#x27;\\n//     || dist == &#x27;weibull&#x27;) {\\n// \\txRangeMin = 0.0;\\n// }\\n// else if (dist == &#x27;beta&#x27;) { \\n//     xRangeMin = 0.0;\\n//     xRangeMax = 1.0;\\n// }\\n\\n// x-values to evaluate PDF and CDF\\nx_p = linspace(xRangeMin, xRangeMax, n);\\nx_c = x_p;\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PDF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_continuous(cdfFun, \\n    x_c, arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"2157","type":"CustomJS"},{"attributes":{"js_property_callbacks":{"change:end":[{"id":"2157"}],"change:start":[{"id":"2157"}]},"range_padding":0},"id":"2081","type":"DataRange1d"},{"attributes":{},"id":"2090","type":"BasicTicker"},{"attributes":{},"id":"2174","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"2078"},0,0],[{"id":"2165"},0,1],[{"id":"2111"},0,2]]},"id":"2192","type":"GridBox"},{"attributes":{},"id":"2100","type":"SaveTool"},{"attributes":{},"id":"2085","type":"LinearScale"},{"attributes":{"end":1,"js_property_callbacks":{"change:value":[{"id":"2157"}]},"start":0.1,"step":0.01,"title":"\\u03b2","value":0.25},"id":"2158","type":"Slider"},{"attributes":{},"id":"2182","type":"BasicTickFormatter"},{"attributes":{},"id":"2169","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"2103","type":"BoxAnnotation"},{"attributes":{},"id":"2083","type":"DataRange1d"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"2162"}]},"value":"1","width":70},"id":"2160","type":"TextInput"},{"attributes":{},"id":"2183","type":"AllLabels"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"2089"}],"border_fill_alpha":0,"center":[{"id":"2092"},{"id":"2096"}],"frame_height":175,"frame_width":300,"left":[{"id":"2093"}],"renderers":[{"id":"2155"}],"title":{"id":"2079"},"toolbar":{"id":"2104"},"toolbar_location":null,"x_range":{"id":"2081"},"x_scale":{"id":"2085"},"y_range":{"id":"2083"},"y_scale":{"id":"2087"}},"id":"2078","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"2163"}]},"id":"2164","type":"Column"},{"attributes":{"axis":{"id":"2126"},"dimension":1,"ticker":null},"id":"2129","type":"Grid"},{"attributes":{"axis_label":"CDF","formatter":{"id":"2185"},"major_label_policy":{"id":"2183"},"ticker":{"id":"2127"}},"id":"2126","type":"LinearAxis"},{"attributes":{"source":{"id":"2145"}},"id":"2156","type":"CDSView"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"2158"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"2161","type":"CustomJS"},{"attributes":{},"id":"2130","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"2136","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"2146"},"glyph":{"id":"2148"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2149"},"view":{"id":"2151"}},"id":"2150","type":"GlyphRenderer"},{"attributes":{},"id":"2123","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"2193"}},"id":"2194","type":"ToolbarBox"},{"attributes":{},"id":"2118","type":"LinearScale"},{"attributes":{},"id":"2172","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y_p":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"2175"},"selection_policy":{"id":"2174"}},"id":"2145","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"2122"},"ticker":null},"id":"2125","type":"Grid"},{"attributes":{"axis_label":"y","formatter":{"id":"2182"},"major_label_policy":{"id":"2180"},"ticker":{"id":"2123"}},"id":"2122","type":"LinearAxis"},{"attributes":{},"id":"2120","type":"LinearScale"},{"attributes":{},"id":"2170","type":"AllLabels"},{"attributes":{"active_multi":null,"tools":[{"id":"2097"},{"id":"2098"},{"id":"2099"},{"id":"2100"},{"id":"2101"},{"id":"2102"}]},"id":"2104","type":"Toolbar"}],"root_ids":["2197"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"7af8fd54-3642-40e4-9f5a-8a2c9294db94","root_ids":["2197"],"roots":{"2197":"920abbac-0d61-4b4b-9e8d-849c8d36d951"}}];
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