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
    
      
      
    
      var element = document.getElementById("a0eead47-368a-48c5-b418-ce0359e7e091");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a0eead47-368a-48c5-b418-ce0359e7e091' but no matching script tag was found.")
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
                    
                  var docs_json = '{"6af9a254-1d94-4356-a6f3-10500db728f1":{"defs":[],"roots":{"references":[{"attributes":{"js_property_callbacks":{"change:value":[{"id":"2367"}]},"value":"5","width":70},"id":"2363","type":"TextInput"},{"attributes":{},"id":"2323","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"2349","type":"Line"},{"attributes":{"source":{"id":"2345"}},"id":"2356","type":"CDSView"},{"attributes":{"data_source":{"id":"2345"},"glyph":{"id":"2353"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2354"},"view":{"id":"2356"}},"id":"2355","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"2361"},{"id":"2359"},{"id":"2363"}]},"id":"2369","type":"Row"},{"attributes":{"toolbar":{"id":"2399"}},"id":"2400","type":"ToolbarBox"},{"attributes":{},"id":"2377","type":"AllLabels"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_p"}},"id":"2354","type":"Line"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"2365"}]},"value":"5","width":70},"id":"2362","type":"TextInput"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_p"}},"id":"2353","type":"Line"},{"attributes":{"axis_label":"CDF","formatter":{"id":"2388"},"major_label_policy":{"id":"2387"},"ticker":{"id":"2327"}},"id":"2326","type":"LinearAxis"},{"attributes":{"axis_label":"y","formatter":{"id":"2391"},"major_label_policy":{"id":"2390"},"ticker":{"id":"2323"}},"id":"2322","type":"LinearAxis"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"2366"}]},"value":"0.1","width":70},"id":"2361","type":"TextInput"},{"attributes":{},"id":"2285","type":"LinearScale"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"2358"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"2364","type":"CustomJS"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"2364"}]},"value":"1","width":70},"id":"2360","type":"TextInput"},{"attributes":{"toolbars":[{"id":"2304"},{"id":"2337"}],"tools":[{"id":"2297"},{"id":"2298"},{"id":"2299"},{"id":"2300"},{"id":"2301"},{"id":"2302"},{"id":"2330"},{"id":"2331"},{"id":"2332"},{"id":"2333"},{"id":"2334"},{"id":"2335"}]},"id":"2399","type":"ProxyToolbar"},{"attributes":{},"id":"2388","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"2398"},{"id":"2400"}]},"id":"2401","type":"Row"},{"attributes":{},"id":"2327","type":"BasicTicker"},{"attributes":{},"id":"2300","type":"SaveTool"},{"attributes":{},"id":"2283","type":"DataRange1d"},{"attributes":{"data_source":{"id":"2346"},"glyph":{"id":"2348"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2349"},"view":{"id":"2351"}},"id":"2350","type":"GlyphRenderer"},{"attributes":{"js_property_callbacks":{"change:end":[{"id":"2357"}],"change:start":[{"id":"2357"}]},"range_padding":0},"id":"2281","type":"DataRange1d"},{"attributes":{},"id":"2287","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"2348","type":"Line"},{"attributes":{"axis":{"id":"2326"},"dimension":1,"ticker":null},"id":"2329","type":"Grid"},{"attributes":{"source":{"id":"2346"}},"id":"2351","type":"CDSView"},{"attributes":{},"id":"2380","type":"Selection"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"2289"}],"border_fill_alpha":0,"center":[{"id":"2292"},{"id":"2296"}],"frame_height":175,"frame_width":300,"left":[{"id":"2293"}],"renderers":[{"id":"2355"}],"title":{"id":"2279"},"toolbar":{"id":"2304"},"toolbar_location":null,"x_range":{"id":"2281"},"x_scale":{"id":"2285"},"y_range":{"id":"2283"},"y_scale":{"id":"2287"}},"id":"2278","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2331","type":"WheelZoomTool"},{"attributes":{},"id":"2374","type":"AllLabels"},{"attributes":{},"id":"2387","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACgmoFqBqqZP6CagWoGqqk/+DPhz4Q/sz+gmoFqBqq5P6QAkQJECsA/+DPhz4Q/wz9MZzGdxXTGP6CagWoGqsk/9M3RN0ffzD+kAJECRArQP04aOWnkpNE/+DPhz4Q/0z+iTYk2JdrUP0xnMZ3FdNY/9oDZA2YP2D+gmoFqBqrZP0q0KdGmRNs/9M3RN0ff3D+e53me53neP6QAkQJECuA/eQ3lNZTX4D9OGjlp5KThPyMnjZw0cuI/+DPhz4Q/4z/NQDUD1QzkP6JNiTYl2uQ/d1rdaXWn5T9MZzGdxXTmPyF0hdAVQuc/9oDZA2YP6D/LjS03ttzoP6CagWoGquk/dafVnVZ36j9KtCnRpkTrPx/BfQT3Eew/9M3RN0ff7D/J2iVrl6ztP57neZ7nee4/c/TN0TdH7z+kAJECRArwPw4HOxzscPA/eQ3lNZTX8D/kE49PPD7xP04aOWnkpPE/uCDjgowL8j8jJ42cNHLyP44tN7bc2PI/+DPhz4Q/8z9iOovpLKbzP81ANQPVDPQ/OEffHH1z9D+iTYk2Jdr0PwxUM1DNQPU/d1rdaXWn9T/iYIeDHQ72P0xnMZ3FdPY/tm3btm3b9j8hdIXQFUL3P4x6L+q9qPc/9oDZA2YP+D9gh4MdDnb4P8uNLTe23Pg/NpTXUF5D+T+gmoFqBqr5PwqhK4SuEPo/dafVnVZ3+j/grX+3/t36P0q0KdGmRPs/tLrT6k6r+z8fwX0E9xH8P4rHJx6fePw/9M3RN0ff/D9e1HtR70X9P8naJWuXrP0/NOHPhD8T/j+e53me53n+PwjuI7iP4P4/c/TN0TdH/z/e+nfr363/P6QAkQJECgBA2QNmD5g9AEAOBzsc7HAAQEQKEClApABAeQ3lNZTXAECuELpC6AoBQOQTj088PgFAGRdkXJBxAUBOGjlp5KQBQIMdDnY42AFAuCDjgowLAkDuI7iP4D4CQCMnjZw0cgJAWCpiqYilAkCOLTe23NgCQMMwDMMwDANA+DPhz4Q/A0AtN7bc2HIDQGI6i+kspgNAmD1g9oDZA0DNQDUD1QwEQAJEChApQARAOEffHH1zBEBtSrQp0aYEQKJNiTYl2gRA11BeQ3kNBUAMVDNQzUAFQEJXCF0hdAVAd1rdaXWnBUCsXbJ2ydoFQOJgh4MdDgZAF2RckHFBBkBMZzGdxXQGQIFqBqoZqAZAtm3btm3bBkDscLDDwQ4HQCF0hdAVQgdAVnda3Wl1B0CMei/qvagHQMF9BPcR3AdA9oDZA2YPCEArhK4QukIIQGCHgx0OdghAlopYKmKpCEDLjS03ttwIQACRAkQKEAlANpTXUF5DCUBrl6xdsnYJQKCagWoGqglA1Z1Wd1rdCUAKoSuErhAKQECkAJECRApAdafVnVZ3CkCqqqqqqqoKQOCtf7f+3QpAFbFUxFIRC0BKtCnRpkQLQH+3/t36dwtAtLrT6k6rC0Dqvaj3ot4LQB/BfQT3EQxAVMRSEUtFDECKxycen3gMQL/K/CrzqwxA9M3RN0ffDEAp0aZEmxINQF7Ue1HvRQ1AlNdQXkN5DUDJ2iVrl6wNQP7d+nfr3w1ANOHPhD8TDkBp5KSRk0YOQJ7neZ7neQ5A0+pOqzutDkAI7iO4j+AOQD7x+MTjEw9Ac/TN0TdHD0Co96Lei3oPQN76d+vfrQ9AE/5M+DPhD0CkAJECRAoQQD+C+wjuIxBA2QNmD5g9EEB0hdAVQlcQQA4HOxzscBBAqYilIpaKEEBEChApQKQQQN6Lei/qvRBAeQ3lNZTXEEAUj088PvEQQK4QukLoChFASZIkSZIkEUDkE49PPD4RQH6V+VXmVxFAGRdkXJBxEUCzmM5iOosRQE4aOWnkpBFA6Zujb46+EUCDHQ52ONgRQB6feHzi8RFAuCDjgowLEkBTok2JNiUSQO4juI/gPhJAiKUilopYEkAjJ42cNHISQL6o96LeixJAWCpiqYilEkDzq8yvMr8SQI4tN7bc2BJAKK+hvIbyEkDDMAzDMAwTQF2ydsnaJRNA+DPhz4Q/E0CTtUvWLlkTQC03ttzYchNAyLgg44KME0BiOovpLKYTQP279e/WvxNAmD1g9oDZE0Ayv8r8KvMTQM1ANQPVDBRAaMKfCX8mFEACRAoQKUAUQJ3FdBbTWRRAOEffHH1zFEDSyEkjJ40UQG1KtCnRphRAB8weMHvAFECiTYk2JdoUQD3P8zzP8xRA11BeQ3kNFUBy0shJIycVQAxUM1DNQBVAp9WdVndaFUBCVwhdIXQVQNzYcmPLjRVAd1rdaXWnFUAS3EdwH8EVQKxdsnbJ2hVAR98cfXP0FUDiYIeDHQ4WQHzi8YnHJxZAF2RckHFBFkCx5caWG1sWQExnMZ3FdBZA5+ibo2+OFkCBagaqGagWQBzscLDDwRZAtm3btm3bFkBR70W9F/UWQOxwsMPBDhdAhvIaymsoF0AhdIXQFUIXQLz179a/WxdAVnda3Wl1F0Dx+MTjE48XQIx6L+q9qBdAJvyZ8GfCF0DBfQT3EdwXQFv/bv279RdA9oDZA2YPGECRAkQKECkYQCuErhC6QhhAxgUZF2RcGEBgh4MdDnYYQPsI7iO4jxhAlopYKmKpGEAwDMMwDMMYQMuNLTe23BhAZg+YPWD2GEAAkQJEChAZQJsSbUq0KRlANpTXUF5DGUDQFUJXCF0ZQGuXrF2ydhlABRkXZFyQGUCgmoFqBqoZQDsc7HCwwxlA1Z1Wd1rdGUBwH8F9BPcZQAqhK4SuEBpApSKWilgqGkBApACRAkQaQNola5esXRpAdafVnVZ3GkAQKUCkAJEaQKqqqqqqqhpARSwVsVTEGkDgrX+3/t0aQHov6r2o9xpAFbFUxFIRG0CvMr/K/CobQEq0KdGmRBtA5TWU11BeG0B/t/7d+ncbQBo5aeSkkRtAtLrT6k6rG0BPPD7x+MQbQOq9qPei3htAhD8T/kz4G0AfwX0E9xEcQLpC6AqhKxxAVMRSEUtFHEDvRb0X9V4cQIrHJx6feBxAJEmSJEmSHEC/yvwq86scQFlMZzGdxRxA9M3RN0ffHECPTzw+8fgcQCnRpkSbEh1AxFIRS0UsHUBe1HtR70UdQPlV5leZXx1AlNdQXkN5HUAuWbtk7ZIdQMnaJWuXrB1AZFyQcUHGHUD+3fp3698dQJlfZX6V+R1ANOHPhD8THkDOYjqL6SweQGnkpJGTRh5AA2YPmD1gHkCe53me53keQDlp5KSRkx5A0+pOqzutHkBubLmx5cYeQAjuI7iP4B5Ao2+Ovjn6HkA+8fjE4xMfQNhyY8uNLR9Ac/TN0TdHH0AOdjjY4WAfQKj3ot6Leh9AQ3kN5TWUH0De+nfr360fQHh84vGJxx9AE/5M+DPhH0Ctf7f+3fofQKQAkQJECiBAcUHGBRkXIEA/gvsI7iMgQAzDMAzDMCBA2QNmD5g9IECnRJsSbUogQHSF0BVCVyBAQcYFGRdkIEAOBzsc7HAgQNxHcB/BfSBAqYilIpaKIEB2ydola5cgQEQKEClApCBAEUtFLBWxIEDei3ov6r0gQKzMrzK/yiBAeQ3lNZTXIEBGTho5aeQgQBSPTzw+8SBA4c+EPxP+IECuELpC6AohQHxR70W9FyFASZIkSZIkIUAW01lMZzEhQOQTj088PiFAsVTEUhFLIUB+lflV5lchQEvWLlm7ZCFAGRdkXJBxIUDmV5lfZX4hQLOYzmI6iyFAgdkDZg+YIUBOGjlp5KQhQBtbbmy5sSFA6Zujb46+IUC23NhyY8shQIMdDnY42CFAUV5DeQ3lIUAen3h84vEhQOvfrX+3/iFAuCDjgowLIkCGYRiGYRgiQFOiTYk2JSJAIOOCjAsyIkDuI7iP4D4iQLtk7ZK1SyJAiKUilopYIkBW5leZX2UiQCMnjZw0ciJA8GfCnwl/IkC+qPei3osiQIvpLKazmCJAWCpiqYilIkAma5esXbIiQPOrzK8yvyJAwOwBswfMIkCOLTe23NgiQFtubLmx5SJAKK+hvIbyIkD179a/W/8iQMMwDMMwDCNAkHFBxgUZI0BdsnbJ2iUjQCvzq8yvMiNA+DPhz4Q/I0DFdBbTWUwjQJO1S9YuWSNAYPaA2QNmI0AtN7bc2HIjQPt369+tfyNAyLgg44KMI0CV+VXmV5kjQGI6i+kspiNAMHvA7AGzI0D9u/Xv1r8jQMr8KvOrzCNAmD1g9oDZI0BlfpX5VeYjQDK/yvwq8yNAAAAAAAAAJEA=","dtype":"float64","order":"little","shape":[400]},"y_c":{"__ndarray__":"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/v/vP8k2jFn+/+8/rCwUbf7/7z+tvLV//v/vP5V6e5H+/+8/YH5vov7/7z/maZuy/v/vPzRuCML+/+8/tVC/0P7/7z8VcMje/v/vP+7IK+z+/+8/Rfrw+P7/7z/GSR8F///vP9ynvRD//+8/k7PSG///7z9MvmQm///vP0vPeTD//+8/FacXOv//7z+twkND///vP6heA0z//+8/HnpbVP//7z962VBc///vPyUJ6GP//+8/GWAla///7z9QAg1y///vPxnjonj//+8/Usfqfv//7z+HR+iE///vP/nRnor//+8/kKwRkP//7z+u9kOV///vP/qqOJr//+8/BqHynv//7z/zjnSj///vP/EKwaf//+8/vIzaq///7z/+bsOv///vP6XwfbP//+8/JjYMt///7z+4SnC6///vP3shrL3//+8/kJbBwP//7z8scLLD///vP5NfgMb//+8/FgItyf//7z/44bnL///vP013KM7//+8/1Sh60P//7z/ETLDS///vP4YpzNT//+8/d/bO1v//7z+X3LnY///vPzH3jdr//+8/e1RM3P//7z819vXd///vPzbSi9///+8//dIO4f//7z8y2H/i///vPym33+P//+8/Xjsv5f//7z/hJm/m///vP80yoOf//+8/rw/D6P//7z8=","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"2382"},"selection_policy":{"id":"2383"}},"id":"2346","type":"ColumnDataSource"},{"attributes":{},"id":"2383","type":"UnionRenderers"},{"attributes":{},"id":"2301","type":"ResetTool"},{"attributes":{"args":{"arg1":{"id":"2358"},"arg2":{"id":"2359"},"arg3":{"id":"2358"},"discrete":false,"dist":"gamma","n":400,"source_c":{"id":"2346"},"source_p":{"id":"2345"},"xrange":{"id":"2281"}},"code":"function linspace(start, stop, n) {\\n\\tvar x = [];\\n\\tvar currValue = start;\\n\\tvar step = (stop - start) / (n - 1);\\n\\tfor (var i = 0; i &lt; n; i++) {\\n\\t\\tx.push(currValue);\\n\\t\\tcurrValue += step;\\n\\t}\\n\\treturn x;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_continuous(cdfFun, x_c, arg1, arg2, arg3) {\\n    var y_c = [];\\n    for (var i = 0; i &lt; x_c.length; i ++)\\n        y_c.push(cdfFun(x_c[i], arg1, arg2, arg3));\\n\\n    return y_c;\\n}\\n\\nfunction lngamma(z) {\\n    // Compute log of the Gamma function using Lanczos approx.,\\n    // see https://en.wikipedia.org/wiki/Lanczos_approximation.\\n\\n    if(z &lt; 0) return Number(&#x27;0/0&#x27;);\\n\\n    if (z &lt; 0.5) return Math.log(Math.PI) - Math.log(Math.sin(Math.PI * z)) - lngamma(1-z);\\n\\n    var p = [676.5203681218851,\\n             -1259.1392167224028,\\n             771.32342877765313,\\n             -176.61502916214059,\\n             12.507343278686905,\\n             -0.13857109526572012,\\n             9.9843695780195716e-6,\\n             1.5056327351493116e-7];\\n\\n    z -= 1.0;\\n    var Ag = 0.99999999999980993;\\n    for (var i = 0; i &lt; p.length; i++) {\\n        Ag += p[i] / (z + i + 1);\\n    }\\n    var t = z + p.length - 0.5;\\n\\n    return 0.5 * Math.log(2*Math.PI) + (z + 0.5)*Math.log(t) - t + Math.log(Ag);\\n}\\n\\n\\n\\nfunction gammainc_u(x, s, regularized) {\\n    // Adapted from Compute.io package\\n    var EPSILON = 1e-12;\\n\\n    if (x &lt;= 1.1 || x &lt;= s) {\\n        if (regularized !== false) {\\n            return 1 - gammainc_l(x, s, regularized);\\n        } else {\\n            return Math.exp(lngamma(s)) - gammainc_l(x, s, regularized);\\n        }\\n    }\\n\\n    var f = 1 + x - s,\\n        C = f,\\n        D = 0,\\n        i = 1,\\n        a, b, chg;\\n    for (i = 1; i &lt; 10000; i++) {\\n        a = i * (s - i);\\n        b = (i&lt;&lt;1) + 1 + x - s;\\n        D = b + a * D;\\n        C = b + a / C;\\n        D = 1 / D;\\n        chg = C * D;\\n        f *= chg;\\n        if (Math.abs(chg - 1) &lt; EPSILON) {\\n            break;\\n        }\\n    }\\n    if (regularized !== false) {\\n        return Math.exp(s * Math.log(x) - x - lngamma(s) - Math.log(f));\\n    } else {\\n        return Math.exp(s * Math.log(x) - x - Math.log(f));\\n    }\\n}\\n\\n\\n\\nfunction gammainc_l(x, s, regularized) {\\n    // Adapted from Compute.io package\\n    var EPSILON = 1e-12;\\n\\n    if (x === 0) {\\n        return 0;\\n    }\\n    if (x &lt; 0 || s &lt;= 0) {\\n        return NaN;\\n    }\\n\\n    if(x &gt; 1.1 &amp;&amp; x &gt; s) {\\n        if (regularized !== false) {\\n            return 1 - gammainc_u(x, s, regularized);\\n        } else {\\n            return Math.exp(lngamma(s)) - gammainc_u(x, s, regularized);\\n        }\\n    }\\n\\n    var ft,\\n        r = s,\\n        c = 1,\\n        pws = 1;\\n\\n    if (regularized !== false) {\\n        ft = s * Math.log(x) - x - lngamma(s);\\n    } else {\\n        ft = s * Math.log(x) - x;\\n    }\\n    ft = Math.exp(ft);\\n    do {\\n        r += 1;\\n        c *= x/r;\\n        pws += c;\\n    } while (c / pws &gt; EPSILON);\\n    return pws*ft/s;\\n}\\n\\n\\n\\nfunction probFun(x, alpha, beta, {}) {\\n    if (x &lt; 0) return NaN;\\n\\n    var ln_prob;\\n\\n    ln_prob = alpha * Math.log(beta * x) - Math.log(x) - beta * x - lngamma(alpha);\\n\\n    return Math.exp(ln_prob);\\n}\\n\\nfunction cdfFun(x, alpha, beta, {}) {\\n    if (x &lt; 0) return 0.0;\\n\\n    return gammainc_l(beta*x, alpha, true);\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points based on support\\n// We&#x27;re not doing this now because we want to allow zooming\\n// JS codes now make anything outside of support NaN.\\n// if (dist == &#x27;lognormal&#x27; \\n//     || dist == &#x27;gamma&#x27; \\n//     || dist == &#x27;exponential&#x27; \\n//     || dist == &#x27;inv_gamma&#x27;\\n//     || dist == &#x27;weibull&#x27;) {\\n// \\txRangeMin = 0.0;\\n// }\\n// else if (dist == &#x27;beta&#x27;) { \\n//     xRangeMin = 0.0;\\n//     xRangeMax = 1.0;\\n// }\\n\\n// x-values to evaluate PDF and CDF\\nx_p = linspace(xRangeMin, xRangeMax, n);\\nx_c = x_p;\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PDF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_continuous(cdfFun, \\n    x_c, arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"2357","type":"CustomJS"},{"attributes":{},"id":"2381","type":"UnionRenderers"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"2359"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"2366","type":"CustomJS"},{"attributes":{},"id":"2382","type":"Selection"},{"attributes":{},"id":"2320","type":"LinearScale"},{"attributes":{},"id":"2330","type":"PanTool"},{"attributes":{"overlay":{"id":"2336"}},"id":"2332","type":"BoxZoomTool"},{"attributes":{"end":5,"js_property_callbacks":{"change:value":[{"id":"2357"}]},"start":0.1,"step":0.01,"title":"\\u03b2","value":2},"id":"2359","type":"Slider"},{"attributes":{},"id":"2391","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"2360"},{"id":"2358"},{"id":"2362"}]},"id":"2368","type":"Row"},{"attributes":{},"id":"2318","type":"LinearScale"},{"attributes":{"children":[{"id":"2368"},{"id":"2369"}]},"id":"2370","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"2336","type":"BoxAnnotation"},{"attributes":{},"id":"2378","type":"BasicTickFormatter"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"2358"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"2365","type":"CustomJS"},{"attributes":{"text":" "},"id":"2312","type":"Title"},{"attributes":{"end":5,"js_property_callbacks":{"change:value":[{"id":"2357"}]},"start":1,"step":0.01,"title":"\\u03b1","value":2},"id":"2358","type":"Slider"},{"attributes":{},"id":"2333","type":"SaveTool"},{"attributes":{"text":"Gamma"},"id":"2279","type":"Title"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"2322"}],"border_fill_alpha":0,"center":[{"id":"2325"},{"id":"2329"}],"frame_height":175,"frame_width":300,"left":[{"id":"2326"}],"renderers":[{"id":"2350"}],"title":{"id":"2312"},"toolbar":{"id":"2337"},"toolbar_location":null,"x_range":{"id":"2281"},"x_scale":{"id":"2318"},"y_range":{"id":"2344"},"y_scale":{"id":"2320"}},"id":"2311","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2334","type":"ResetTool"},{"attributes":{"overlay":{"id":"2303"}},"id":"2299","type":"BoxZoomTool"},{"attributes":{"height":10},"id":"2402","type":"Spacer"},{"attributes":{},"id":"2297","type":"PanTool"},{"attributes":{},"id":"2302","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"2303","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"2322"},"ticker":null},"id":"2325","type":"Grid"},{"attributes":{},"id":"2294","type":"BasicTicker"},{"attributes":{"axis":{"id":"2293"},"dimension":1,"ticker":null},"id":"2296","type":"Grid"},{"attributes":{},"id":"2375","type":"BasicTickFormatter"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"2359"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"2367","type":"CustomJS"},{"attributes":{"axis_label":"PDF","formatter":{"id":"2375"},"major_label_policy":{"id":"2374"},"ticker":{"id":"2294"}},"id":"2293","type":"LinearAxis"},{"attributes":{"active_multi":null,"tools":[{"id":"2297"},{"id":"2298"},{"id":"2299"},{"id":"2300"},{"id":"2301"},{"id":"2302"}]},"id":"2304","type":"Toolbar"},{"attributes":{},"id":"2390","type":"AllLabels"},{"attributes":{"end":1.05,"start":-0.05},"id":"2344","type":"Range1d"},{"attributes":{},"id":"2298","type":"WheelZoomTool"},{"attributes":{},"id":"2290","type":"BasicTicker"},{"attributes":{"axis":{"id":"2289"},"ticker":null},"id":"2292","type":"Grid"},{"attributes":{"axis_label":"y","formatter":{"id":"2378"},"major_label_policy":{"id":"2377"},"ticker":{"id":"2290"}},"id":"2289","type":"LinearAxis"},{"attributes":{"children":[{"id":"2370"},{"id":"2402"},{"id":"2401"}]},"id":"2403","type":"Column"},{"attributes":{"children":[[{"id":"2278"},0,0],[{"id":"2371"},0,1],[{"id":"2311"},0,2]]},"id":"2398","type":"GridBox"},{"attributes":{"active_multi":null,"tools":[{"id":"2330"},{"id":"2331"},{"id":"2332"},{"id":"2333"},{"id":"2334"},{"id":"2335"}]},"id":"2337","type":"Toolbar"},{"attributes":{"width":30},"id":"2371","type":"Spacer"},{"attributes":{},"id":"2335","type":"HelpTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y_p":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"2380"},"selection_policy":{"id":"2381"}},"id":"2345","type":"ColumnDataSource"}],"root_ids":["2403"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"6af9a254-1d94-4356-a6f3-10500db728f1","root_ids":["2403"],"roots":{"2403":"a0eead47-368a-48c5-b418-ce0359e7e091"}}];
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