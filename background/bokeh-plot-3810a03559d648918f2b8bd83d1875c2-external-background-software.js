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
    
      
      
    
      var element = document.getElementById("e73727bd-2f6c-4d94-ba55-a317297b1e28");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e73727bd-2f6c-4d94-ba55-a317297b1e28' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;db3e4043-f2dd-4bf0-8ee8-a29edb196389&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1414&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;1417&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1419&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1441&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1408&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1411&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1423&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1443&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1402&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1444&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;1424&quot;}},&quot;id&quot;:&quot;1420&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;1424&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1406&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;1418&quot;},{&quot;id&quot;:&quot;1419&quot;},{&quot;id&quot;:&quot;1420&quot;},{&quot;id&quot;:&quot;1421&quot;},{&quot;id&quot;:&quot;1422&quot;},{&quot;id&quot;:&quot;1423&quot;}]},&quot;id&quot;:&quot;1425&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1410&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;1413&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;1410&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;1413&quot;},{&quot;id&quot;:&quot;1417&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;1414&quot;}],&quot;plot_height&quot;:200,&quot;plot_width&quot;:300,&quot;renderers&quot;:[{&quot;id&quot;:&quot;1435&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;1437&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;1425&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;1402&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;1406&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;1404&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;1408&quot;}},&quot;id&quot;:&quot;1401&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAEMC+NHEYq60PwH1p4jBWWw/AO55TSQEJD8D60sRhrLYOwLgHNnpXZA7AdjynkgISDsA1cRirrb8NwPOlicNYbQ3Astr62wMbDcBwD2z0rsgMwC5E3QxadgzA7XhOJQUkDMCrrb89sNELwGriMFZbfwvAKBeibgYtC8DmSxOHsdoKwKWAhJ9ciArAY7X1twc2CsAi6mbQsuMJwOAe2OhdkQnAnlNJAQk/CcBciLoZtOwIwBu9KzJfmgjA2vGcSgpICMCYJg5jtfUHwFZbf3tgowfAFJDwkwtRB8DTxGGstv4GwJL50sRhrAbAUC5E3QxaBsAOY7X1twcGwMyXJg5jtQXAi8yXJg5jBcBKAQk/uRAFwAg2eldkvgTAxmrrbw9sBMCEn1yIuhkEwEPUzaBlxwPAAQk/uRB1A8DAPbDRuyIDwH5yIepm0ALAPKeSAhJ+AsD72wMbvSsCwLkQdTNo2QHAeEXmSxOHAcA2eldkvjQBwPSuyHxp4gDAs+M5lRSQAMBxGKutvz0AwGCaOIzV1v+/3AMbvSsy/79Ybf3tgY3+v9bW3x7Y6P2/UkDCTy5E/b/OqaSAhJ/8v0wTh7Ha+vu/yHxp4jBW+79G5ksTh7H6v8JPLkTdDPq/PrkQdTNo+b+8IvOlicP4vziM1dbfHvi/tvW3BzZ6978yX5o4jNX2v67IfGniMPa/LDJfmjiM9b+om0HLjuf0vyYFJPzkQvS/om4GLTue878e2Ohdkfnyv5xBy47nVPK/GKutvz2w8b+WFJDwkwvxvxJ+ciHqZvC/HM+ppICE778Yom4GLTvuvxB1M2jZ8ey/CEj4yYWo678EG70rMl/qv/ztgY3eFem/+MBG74rM57/wkwtRN4Pmv+hm0LLjOeW/5DmVFJDw47/cDFp2PKfiv9jfHtjoXeG/0LLjOZUU4L+QC1E3g5bdv4ix2vrbA9u/eFdkvjRx2L9w/e2Bjd7Vv2Cjd0XmS9O/UEkBCT+50L+Q3hWZL03Mv3AqKSDhJ8e/YHY8p5ICwr+AhJ9ciLq5v4A4jNXW366/gNCy4zmVlL8A0LLjOZWUP4A4jNXW364/gISfXIi6uT9gdjynkgLCP4AqKSDhJ8c/gN4VmS9NzD9QSQEJP7nQP2Cjd0XmS9M/cP3tgY3e1T+AV2S+NHHYP5Cx2vrbA9s/kAtRN4OW3T/QsuM5lRTgP9jfHtjoXeE/4Axadjyn4j/oOZUUkPDjP+hm0LLjOeU/8JMLUTeD5j/4wEbvisznPwDugY3eFek/CBu9KzJf6j8ISPjJhajrPxB1M2jZ8ew/GKJuBi077j8gz6mkgITvPxR+ciHqZvA/lBSQ8JML8T8Yq62/PbDxP5xBy47nVPI/INjoXZH58j+kbgYtO57zPyQFJPzkQvQ/qJtBy47n9D8sMl+aOIz1P7DIfGniMPY/NF+aOIzV9j+09bcHNnr3PziM1dbfHvg/vCLzpYnD+D9AuRB1M2j5P8RPLkTdDPo/ROZLE4ex+j/IfGniMFb7P0wTh7Ha+vs/0KmkgISf/D9UQMJPLkT9P9TW3x7Y6P0/WG397YGN/j/cAxu9KzL/P2CaOIzV1v8/chirrb89AEC04zmVFJAAQPSuyHxp4gBANnpXZL40AUB4ReZLE4cBQLoQdTNo2QFA/NsDG70rAkA8p5ICEn4CQH5yIepm0AJAwD2w0bsiA0ACCT+5EHUDQETUzaBlxwNAhJ9ciLoZBEDGautvD2wEQAg2eldkvgRASgEJP7kQBUCMzJcmDmMFQMyXJg5jtQVADmO19bcHBkBQLkTdDFoGQJL50sRhrAZA1MRhrLb+BkAUkPCTC1EHQFZbf3tgowdAmCYOY7X1B0Da8ZxKCkgIQBy9KzJfmghAXIi6GbTsCECeU0kBCT8JQOAe2OhdkQlAIupm0LLjCUBktfW3BzYKQKSAhJ9ciApA5ksTh7HaCkAoF6JuBi0LQGriMFZbfwtArK2/PbDRC0DseE4lBSQMQC5E3QxadgxAcA9s9K7IDECy2vrbAxsNQPSlicNYbQ1ANHEYq62/DUB2PKeSAhIOQLgHNnpXZA5A+tLEYay2DkA8nlNJAQkPQH5p4jBWWw9AvjRxGKutD0AAAAAAAAAQQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;1444&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1443&quot;}},&quot;id&quot;:&quot;1432&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1432&quot;}},&quot;id&quot;:&quot;1436&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;x&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;1439&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1411&quot;}},&quot;id&quot;:&quot;1410&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1418&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;f(x)&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;1441&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1415&quot;}},&quot;id&quot;:&quot;1414&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1433&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;1437&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1404&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1421&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1415&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1422&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1439&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1432&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1433&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1434&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1436&quot;}},&quot;id&quot;:&quot;1435&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1434&quot;,&quot;type&quot;:&quot;Line&quot;}],&quot;root_ids&quot;:[&quot;1401&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"db3e4043-f2dd-4bf0-8ee8-a29edb196389","root_ids":["1401"],"roots":{"1401":"e73727bd-2f6c-4d94-ba55-a317297b1e28"}}];
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