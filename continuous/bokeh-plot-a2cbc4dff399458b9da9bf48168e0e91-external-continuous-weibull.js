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
    
      
      
    
      var element = document.getElementById("50b075a7-56b9-4e9a-9048-85e2fa59fa71");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '50b075a7-56b9-4e9a-9048-85e2fa59fa71' but no matching script tag was found.")
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
                    
                  var docs_json = '{"11f6ff05-2efe-4850-964f-ba3079f216c8":{"defs":[],"roots":{"references":[{"attributes":{"children":[[{"id":"4415"},0,0],[{"id":"4508"},0,1],[{"id":"4448"},0,2]]},"id":"4535","type":"GridBox"},{"attributes":{"end":1.05,"start":-0.05},"id":"4481","type":"Range1d"},{"attributes":{},"id":"4519","type":"UnionRenderers"},{"attributes":{"axis":{"id":"4426"},"ticker":null},"id":"4429","type":"Grid"},{"attributes":{},"id":"4520","type":"Selection"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"4459"}],"border_fill_alpha":0,"center":[{"id":"4462"},{"id":"4466"}],"frame_height":175,"frame_width":300,"left":[{"id":"4463"}],"renderers":[{"id":"4487"}],"title":{"id":"4449"},"toolbar":{"id":"4474"},"toolbar_location":null,"x_range":{"id":"4418"},"x_scale":{"id":"4455"},"y_range":{"id":"4481"},"y_scale":{"id":"4457"}},"id":"4448","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4510","type":"AllLabels"},{"attributes":{},"id":"4511","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"4498"},{"id":"4496"},{"id":"4500"}]},"id":"4506","type":"Row"},{"attributes":{"children":[{"id":"4497"},{"id":"4495"},{"id":"4499"}]},"id":"4505","type":"Row"},{"attributes":{"axis_label":"CDF","formatter":{"id":"4524"},"major_label_policy":{"id":"4523"},"ticker":{"id":"4464"}},"id":"4463","type":"LinearAxis"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"4496"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"4503","type":"CustomJS"},{"attributes":{"children":[{"id":"4535"},{"id":"4537"}]},"id":"4538","type":"Row"},{"attributes":{},"id":"4513","type":"AllLabels"},{"attributes":{"height":10},"id":"4539","type":"Spacer"},{"attributes":{"axis_label":"y","formatter":{"id":"4527"},"major_label_policy":{"id":"4526"},"ticker":{"id":"4460"}},"id":"4459","type":"LinearAxis"},{"attributes":{},"id":"4514","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y_p":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"4517"},"selection_policy":{"id":"4516"}},"id":"4482","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"4459"},"ticker":null},"id":"4462","type":"Grid"},{"attributes":{"children":[{"id":"4507"},{"id":"4539"},{"id":"4538"}]},"id":"4540","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACASAEiBYiUP4BIASIFiKQ/wOwBswfMrj+ASAEiBYi0P6CagWoGqrk/wOwBswfMvj9wH8F9BPfBP4BIASIFiMQ/kHFBxgUZxz+gmoFqBqrJP7DDwQ4HO8w/wOwBswfMzj/oCqErhK7QP3AfwX0E99E/+DPhz4Q/0z+ASAEiBYjUPwhdIXSF0NU/kHFBxgUZ1z8YhmEYhmHYP6CagWoGqtk/KK+hvIby2j+ww8EOBzvcPzjY4WCHg90/wOwBswfM3j+kAJECRArgP+gKoSuEruA/LBWxVMRS4T9wH8F9BPfhP7Qp0aZEm+I/+DPhz4Q/4z88PvH4xOPjP4BIASIFiOQ/xFIRS0Us5T8IXSF0hdDlP0xnMZ3FdOY/kHFBxgUZ5z/Ue1HvRb3nPxiGYRiGYeg/XJBxQcYF6T+gmoFqBqrpP+SkkZNGTuo/KK+hvIby6j9subHlxpbrP7DDwQ4HO+w/9M3RN0ff7D842OFgh4PtP3zi8YnHJ+4/wOwBswfM7j8E9xHcR3DvP6QAkQJECvA/xgUZF2Rc8D/oCqErhK7wPwoQKUCkAPE/LBWxVMRS8T9OGjlp5KTxP3AfwX0E9/E/kiRJkiRJ8j+0KdGmRJvyP9YuWbtk7fI/+DPhz4Q/8z8aOWnkpJHzPzw+8fjE4/M/XkN5DeU19D+ASAEiBYj0P6JNiTYl2vQ/xFIRS0Us9T/mV5lfZX71PwhdIXSF0PU/KmKpiKUi9j9MZzGdxXT2P25subHlxvY/kHFBxgUZ9z+ydsnaJWv3P9R7Ue9Fvfc/9oDZA2YP+D8YhmEYhmH4PzqL6Syms/g/XJBxQcYF+T9+lflV5lf5P6CagWoGqvk/wp8Jfyb8+T/kpJGTRk76PwaqGahmoPo/KK+hvIby+j9KtCnRpkT7P2y5seXGlvs/jr45+ubo+z+ww8EOBzv8P9LISSMnjfw/9M3RN0ff/D8W01lMZzH9PzjY4WCHg/0/Wt1pdafV/T984vGJxyf+P57neZ7nef4/wOwBswfM/j/i8YnHJx7/PwT3EdxHcP8/JvyZ8GfC/z+kAJECRAoAQDUD1QxUMwBAxgUZF2RcAEBXCF0hdIUAQOgKoSuErgBAeQ3lNZTXAEAKEClApAABQJsSbUq0KQFALBWxVMRSAUC9F/Ve1HsBQE4aOWnkpAFA3xx9c/TNAUBwH8F9BPcBQAEiBYgUIAJAkiRJkiRJAkAjJ42cNHICQLQp0aZEmwJARSwVsVTEAkDWLlm7ZO0CQGcxncV0FgNA+DPhz4Q/A0CJNiXalGgDQBo5aeSkkQNAqzut7rS6A0A8PvH4xOMDQM1ANQPVDARAXkN5DeU1BEDvRb0X9V4EQIBIASIFiARAEUtFLBWxBECiTYk2JdoEQDNQzUA1AwVAxFIRS0UsBUBVVVVVVVUFQOZXmV9lfgVAd1rdaXWnBUAIXSF0hdAFQJlfZX6V+QVAKmKpiKUiBkC7ZO2StUsGQExnMZ3FdAZA3Wl1p9WdBkBubLmx5cYGQP9u/bv17wZAkHFBxgUZB0AhdIXQFUIHQLJ2ydolawdAQ3kN5TWUB0DUe1HvRb0HQGV+lflV5gdA9oDZA2YPCECHgx0OdjgIQBiGYRiGYQhAqYilIpaKCEA6i+ksprMIQMuNLTe23AhAXJBxQcYFCUDtkrVL1i4JQH6V+VXmVwlAD5g9YPaACUCgmoFqBqoJQDGdxXQW0wlAwp8Jfyb8CUBTok2JNiUKQOSkkZNGTgpAdafVnVZ3CkAGqhmoZqAKQJesXbJ2yQpAKK+hvIbyCkC5seXGlhsLQEq0KdGmRAtA27Zt27ZtC0BsubHlxpYLQP279e/WvwtAjr45+uboC0AfwX0E9xEMQLDDwQ4HOwxAQcYFGRdkDEDSyEkjJ40MQGPLjS03tgxA9M3RN0ffDECF0BVCVwgNQBbTWUxnMQ1Ap9WdVndaDUA42OFgh4MNQMnaJWuXrA1AWt1pdafVDUDr361/t/4NQHzi8YnHJw5ADeU1lNdQDkCe53me53kOQC/qvaj3og5AwOwBswfMDkBR70W9F/UOQOLxiccnHg9Ac/TN0TdHD0AE9xHcR3APQJX5VeZXmQ9AJvyZ8GfCD0C3/t36d+sPQKQAkQJEChBA7AGzB8weEEA1A9UMVDMQQH4E9xHcRxBAxgUZF2RcEEAOBzsc7HAQQFcIXSF0hRBAoAl/JvyZEEDoCqErhK4QQDAMwzAMwxBAeQ3lNZTXEEDCDgc7HOwQQAoQKUCkABFAUhFLRSwVEUCbEm1KtCkRQOQTj088PhFALBWxVMRSEUB0FtNZTGcRQL0X9V7UexFABhkXZFyQEUBOGjlp5KQRQJYbW25suRFA3xx9c/TNEUAoHp94fOIRQHAfwX0E9xFAuCDjgowLEkABIgWIFCASQEojJ42cNBJAkiRJkiRJEkDaJWuXrF0SQCMnjZw0chJAbCivobyGEkC0KdGmRJsSQPwq86vMrxJARSwVsVTEEkCOLTe23NgSQNYuWbtk7RJAHjB7wOwBE0BnMZ3FdBYTQLAyv8r8KhNA+DPhz4Q/E0BANQPVDFQTQIk2JdqUaBNA0jdH3xx9E0AaOWnkpJETQGI6i+ksphNAqzut7rS6E0D0PM/zPM8TQDw+8fjE4xNAhD8T/kz4E0DNQDUD1QwUQBZCVwhdIRRAXkN5DeU1FECmRJsSbUoUQO9FvRf1XhRAOEffHH1zFECASAEiBYgUQMhJIyeNnBRAEUtFLBWxFEBaTGcxncUUQKJNiTYl2hRA6k6rO63uFEAzUM1ANQMVQHxR70W9FxVAxFIRS0UsFUAMVDNQzUAVQFVVVVVVVRVAnlZ3Wt1pFUDmV5lfZX4VQC5Zu2TtkhVAd1rdaXWnFUDAW/9u/bsVQAhdIXSF0BVAUF5DeQ3lFUCZX2V+lfkVQOJgh4MdDhZAKmKpiKUiFkByY8uNLTcWQLtk7ZK1SxZABGYPmD1gFkBMZzGdxXQWQJRoU6JNiRZA3Wl1p9WdFkAma5esXbIWQG5subHlxhZAtm3btm3bFkD/bv279e8WQEhwH8F9BBdAkHFBxgUZF0DYcmPLjS0XQCF0hdAVQhdAanWn1Z1WF0CydsnaJWsXQPp369+tfxdAQ3kN5TWUF0CMei/qvagXQNR7Ue9FvRdAHH1z9M3RF0BlfpX5VeYXQK5/t/7d+hdA9oDZA2YPGEA+gvsI7iMYQIeDHQ52OBhA0IQ/E/5MGEAYhmEYhmEYQGCHgx0OdhhAqYilIpaKGEDyiccnHp8YQDqL6SymsxhAgowLMi7IGEDLjS03ttwYQBSPTzw+8RhAXJBxQcYFGUCkkZNGThoZQO2StUvWLhlANpTXUF5DGUB+lflV5lcZQMaWG1tubBlAD5g9YPaAGUBYmV9lfpUZQKCagWoGqhlA6Jujb46+GUAxncV0FtMZQHqe53me5xlAwp8Jfyb8GUAKoSuErhAaQFOiTYk2JRpAnKNvjr45GkDkpJGTRk4aQCyms5jOYhpAdafVnVZ3GkC+qPei3osaQAaqGahmoBpATqs7re60GkCXrF2ydskaQOCtf7f+3RpAKK+hvIbyGkBwsMPBDgcbQLmx5caWGxtAArMHzB4wG0BKtCnRpkQbQJK1S9YuWRtA27Zt27ZtG0AkuI/gPoIbQGy5seXGlhtAtLrT6k6rG0D9u/Xv1r8bQEa9F/Ve1BtAjr45+uboG0DWv1v/bv0bQB/BfQT3ERxAaMKfCX8mHECww8EOBzscQPjE4xOPTxxAQcYFGRdkHECKxycen3gcQNLISSMnjRxAGsprKK+hHEBjy40tN7YcQKzMrzK/yhxA9M3RN0ffHEA8z/M8z/McQIXQFUJXCB1AztE3R98cHUAW01lMZzEdQF7Ue1HvRR1Ap9WdVndaHUDw1r9b/24dQDjY4WCHgx1AgNkDZg+YHUDJ2iVrl6wdQBLcR3AfwR1AWt1pdafVHUCi3ot6L+odQOvfrX+3/h1ANOHPhD8THkB84vGJxyceQMTjE49PPB5ADeU1lNdQHkBW5leZX2UeQJ7neZ7neR5A5uibo2+OHkAv6r2o96IeQHjr361/tx5AwOwBswfMHkAI7iO4j+AeQFHvRb0X9R5AmvBnwp8JH0Di8YnHJx4fQCrzq8yvMh9Ac/TN0TdHH0C89e/Wv1sfQAT3EdxHcB9ATPgz4c+EH0CV+VXmV5kfQN76d+vfrR9AJvyZ8GfCH0Bu/bv179YfQLf+3fp36x9AAAAAAAAAIEA=","dtype":"float64","order":"little","shape":[400]},"y_c":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"4520"},"selection_policy":{"id":"4519"}},"id":"4483","type":"ColumnDataSource"},{"attributes":{},"id":"4455","type":"LinearScale"},{"attributes":{},"id":"4468","type":"WheelZoomTool"},{"attributes":{},"id":"4460","type":"BasicTicker"},{"attributes":{},"id":"4457","type":"LinearScale"},{"attributes":{"axis":{"id":"4463"},"dimension":1,"ticker":null},"id":"4466","type":"Grid"},{"attributes":{},"id":"4523","type":"AllLabels"},{"attributes":{},"id":"4464","type":"BasicTicker"},{"attributes":{},"id":"4524","type":"BasicTickFormatter"},{"attributes":{},"id":"4472","type":"HelpTool"},{"attributes":{},"id":"4467","type":"PanTool"},{"attributes":{"overlay":{"id":"4473"}},"id":"4469","type":"BoxZoomTool"},{"attributes":{"text":"Weibull"},"id":"4416","type":"Title"},{"attributes":{},"id":"4470","type":"SaveTool"},{"attributes":{},"id":"4471","type":"ResetTool"},{"attributes":{},"id":"4434","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"4486","type":"Line"},{"attributes":{"js_property_callbacks":{"change:end":[{"id":"4494"}],"change:start":[{"id":"4494"}]},"range_padding":0},"id":"4418","type":"DataRange1d"},{"attributes":{"axis_label":"y","formatter":{"id":"4514"},"major_label_policy":{"id":"4513"},"ticker":{"id":"4427"}},"id":"4426","type":"LinearAxis"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_p"}},"id":"4490","type":"Line"},{"attributes":{},"id":"4526","type":"AllLabels"},{"attributes":{"data_source":{"id":"4482"},"glyph":{"id":"4490"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4491"},"view":{"id":"4493"}},"id":"4492","type":"GlyphRenderer"},{"attributes":{},"id":"4527","type":"BasicTickFormatter"},{"attributes":{},"id":"4439","type":"HelpTool"},{"attributes":{},"id":"4422","type":"LinearScale"},{"attributes":{},"id":"4431","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_p"}},"id":"4491","type":"Line"},{"attributes":{"active_multi":null,"tools":[{"id":"4434"},{"id":"4435"},{"id":"4436"},{"id":"4437"},{"id":"4438"},{"id":"4439"}]},"id":"4441","type":"Toolbar"},{"attributes":{"source":{"id":"4483"}},"id":"4488","type":"CDSView"},{"attributes":{"axis":{"id":"4430"},"dimension":1,"ticker":null},"id":"4433","type":"Grid"},{"attributes":{},"id":"4435","type":"WheelZoomTool"},{"attributes":{"args":{"arg1":{"id":"4495"},"arg2":{"id":"4496"},"arg3":{"id":"4495"},"discrete":false,"dist":"weibull","n":400,"source_c":{"id":"4483"},"source_p":{"id":"4482"},"xrange":{"id":"4418"}},"code":"function linspace(start, stop, n) {\\n\\tvar x = [];\\n\\tvar currValue = start;\\n\\tvar step = (stop - start) / (n - 1);\\n\\tfor (var i = 0; i &lt; n; i++) {\\n\\t\\tx.push(currValue);\\n\\t\\tcurrValue += step;\\n\\t}\\n\\treturn x;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_continuous(cdfFun, x_c, arg1, arg2, arg3) {\\n    var y_c = [];\\n    for (var i = 0; i &lt; x_c.length; i ++)\\n        y_c.push(cdfFun(x_c[i], arg1, arg2, arg3));\\n\\n    return y_c;\\n}\\n\\nfunction probFun(x, alpha, sigma, {}) {\\n    if (x &lt; 0) return NaN;\\n\\n    var logp = -Math.pow(x / sigma, alpha) + (alpha - 1) * Math.log(x) \\n                + Math.log(alpha) - alpha * Math.log(sigma);\\n\\n    return Math.exp(logp);\\n}\\n\\nfunction cdfFun(x, alpha, sigma, {}) {\\n    if (x &lt; 0) return 0.0;\\n\\n    return 1 - Math.exp(-Math.pow(x / sigma, alpha));\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points based on support\\n// We&#x27;re not doing this now because we want to allow zooming\\n// JS codes now make anything outside of support NaN.\\n// if (dist == &#x27;lognormal&#x27; \\n//     || dist == &#x27;gamma&#x27; \\n//     || dist == &#x27;exponential&#x27; \\n//     || dist == &#x27;inv_gamma&#x27;\\n//     || dist == &#x27;weibull&#x27;) {\\n// \\txRangeMin = 0.0;\\n// }\\n// else if (dist == &#x27;beta&#x27;) { \\n//     xRangeMin = 0.0;\\n//     xRangeMax = 1.0;\\n// }\\n\\n// x-values to evaluate PDF and CDF\\nx_p = linspace(xRangeMin, xRangeMax, n);\\nx_c = x_p;\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PDF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_continuous(cdfFun, \\n    x_c, arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"4494","type":"CustomJS"},{"attributes":{},"id":"4427","type":"BasicTicker"},{"attributes":{"data_source":{"id":"4483"},"glyph":{"id":"4485"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4486"},"view":{"id":"4488"}},"id":"4487","type":"GlyphRenderer"},{"attributes":{"text":" "},"id":"4449","type":"Title"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"4485","type":"Line"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"4496"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"4504","type":"CustomJS"},{"attributes":{},"id":"4424","type":"LinearScale"},{"attributes":{"toolbar":{"id":"4536"}},"id":"4537","type":"ToolbarBox"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"4473","type":"BoxAnnotation"},{"attributes":{"axis_label":"PDF","formatter":{"id":"4511"},"major_label_policy":{"id":"4510"},"ticker":{"id":"4431"}},"id":"4430","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"4441"},{"id":"4474"}],"tools":[{"id":"4434"},{"id":"4435"},{"id":"4436"},{"id":"4437"},{"id":"4438"},{"id":"4439"},{"id":"4467"},{"id":"4468"},{"id":"4469"},{"id":"4470"},{"id":"4471"},{"id":"4472"}]},"id":"4536","type":"ProxyToolbar"},{"attributes":{"source":{"id":"4482"}},"id":"4493","type":"CDSView"},{"attributes":{},"id":"4420","type":"DataRange1d"},{"attributes":{},"id":"4516","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"4440"}},"id":"4436","type":"BoxZoomTool"},{"attributes":{},"id":"4437","type":"SaveTool"},{"attributes":{"width":30},"id":"4508","type":"Spacer"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"4426"}],"border_fill_alpha":0,"center":[{"id":"4429"},{"id":"4433"}],"frame_height":175,"frame_width":300,"left":[{"id":"4430"}],"renderers":[{"id":"4492"}],"title":{"id":"4416"},"toolbar":{"id":"4441"},"toolbar_location":null,"x_range":{"id":"4418"},"x_scale":{"id":"4422"},"y_range":{"id":"4420"},"y_scale":{"id":"4424"}},"id":"4415","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4438","type":"ResetTool"},{"attributes":{},"id":"4517","type":"Selection"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4503"}]},"value":"0.1","width":70},"id":"4498","type":"TextInput"},{"attributes":{"end":5,"js_property_callbacks":{"change:value":[{"id":"4494"}]},"start":0.1,"step":0.01,"title":"\\u03b1","value":1},"id":"4495","type":"Slider"},{"attributes":{"end":3,"js_property_callbacks":{"change:value":[{"id":"4494"}]},"start":0.1,"step":0.01,"title":"\\u03c3","value":1.5},"id":"4496","type":"Slider"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"4495"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"4502","type":"CustomJS"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4501"}]},"value":"0.1","width":70},"id":"4497","type":"TextInput"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4502"}]},"value":"5","width":70},"id":"4499","type":"TextInput"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"4495"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"4501","type":"CustomJS"},{"attributes":{"children":[{"id":"4505"},{"id":"4506"}]},"id":"4507","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"4440","type":"BoxAnnotation"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"4504"}]},"value":"3","width":70},"id":"4500","type":"TextInput"},{"attributes":{"active_multi":null,"tools":[{"id":"4467"},{"id":"4468"},{"id":"4469"},{"id":"4470"},{"id":"4471"},{"id":"4472"}]},"id":"4474","type":"Toolbar"}],"root_ids":["4540"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"11f6ff05-2efe-4850-964f-ba3079f216c8","root_ids":["4540"],"roots":{"4540":"50b075a7-56b9-4e9a-9048-85e2fa59fa71"}}];
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