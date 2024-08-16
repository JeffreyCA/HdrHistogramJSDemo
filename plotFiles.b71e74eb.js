// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fm8Gy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deleteRow", ()=>deleteRow);
var _hdrHistogramJs = require("hdr-histogram-js");
var _jquery = require("jquery");
var _jqueryDefault = parcelHelpers.interopDefault(_jquery);
var _splitJs = require("split.js");
var _splitJsDefault = parcelHelpers.interopDefault(_splitJs);
var _chartTs = require("./chart.ts");
var _handlersTs = require("./handlers.ts");
let b64InputRowCount = 1;
let chartWrapper;
window.onload = ()=>{
    if (window.File && window.FileReader && window.FileList && window.Blob) ;
    else alert("The File APIs are not fully supported in this browser.");
    // Load the Visualization API and the corechart package.
    google.load("visualization", "1.0", {
        packages: [
            "corechart"
        ]
    });
    window.onerror = function(e) {
        (0, _jqueryDefault.default)("#errorbox").html(e.toString());
        (0, _jqueryDefault.default)("#errorbox-close").css("display", "block");
    };
    chartWrapper = new (0, _chartTs.ChartWrapper)();
    (0, _jqueryDefault.default)("#files-append").on("change", (evt)=>(0, _handlersTs.handleFileSelectMemtierAppended)(evt, chartWrapper));
    (0, _jqueryDefault.default)("#files-runcount").on("change", (evt)=>(0, _handlersTs.handleFileSelectMemtierRunCount)(evt, chartWrapper));
    // Set a callback to run when the Google Visualization API is loaded.
    _hdrHistogramJs.initWebAssembly().then(()=>google.setOnLoadCallback(()=>chartWrapper.drawInitialChart()));
    // Define event listeners for label and text input changes
    (0, _jqueryDefault.default)("#hdr-inputs").on("input", ()=>(0, _handlersTs.handleRawDataInputChange)(chartWrapper));
    (0, _splitJsDefault.default)([
        "#chart_div",
        "#chart_split_right"
    ], {
        minSize: 200,
        sizes: [
            40,
            60
        ]
    });
    var gutter = (0, _jqueryDefault.default)(".gutter")[0];
    var dragging = false;
    (0, _jqueryDefault.default)(gutter).on("mousedown", function(e) {
        dragging = true;
    });
    (0, _jqueryDefault.default)(window).on("mouseup", function(e) {
        if (!dragging) return;
        chartWrapper.drawChart();
        dragging = false;
    });
    (0, _jqueryDefault.default)("#errorbox-close").on("click", clearErrorBox);
    (0, _jqueryDefault.default)("#radio-compressed-histogram").on("change", function(e) {
        toggleDiv("group-compressed-histogram");
    });
    (0, _jqueryDefault.default)("#radio-memtier-append").on("change", function(e) {
        toggleDiv("group-memtier-append");
    });
    (0, _jqueryDefault.default)("#radio-memtier-runcount").on("change", function(e) {
        toggleDiv("group-memtier-runcount");
    });
    (0, _jqueryDefault.default)("#add-row-button").on("click", addB64InputRow);
    (0, _jqueryDefault.default)("#radio-show-median").on("change", toggleMedianRPS);
    (0, _jqueryDefault.default)("#commandTypeSelection").on("change", commandTypeChanged);
    (0, _jqueryDefault.default)("#sourceTimeUnitSelection").on("change", timeUnitsChanged);
    (0, _jqueryDefault.default)("#displayTimeUnitSelection").on("change", timeUnitsChanged);
    (0, _jqueryDefault.default)("#export-button").on("click", ()=>chartWrapper.doExport());
    (0, _jqueryDefault.default)("#percentile-range-input").on("change", function(e) {
        const inputElement = this;
        chartWrapper.showValue(inputElement.value);
    });
    (0, _jqueryDefault.default)("#yAxisMaxInput").on("change", function(e) {
        const inputElement = this;
        chartWrapper.updateMaxYRange(inputElement.value);
    });
};
function getCurrentFormat() {
    const inputTypeRadios = document.getElementsByName("formatType");
    let checkedValue;
    for(let i = 0; i < inputTypeRadios.length; i++){
        const radioElement = inputTypeRadios[i];
        if (radioElement.checked) {
            checkedValue = radioElement.value;
            break;
        }
    }
    return checkedValue;
}
function forceReload() {
    const currentFormat = getCurrentFormat();
    if (currentFormat === "group-compressed-histogram") (0, _handlersTs.handleRawDataInputChange)(chartWrapper);
    else if ((0, _handlersTs.lastEvt) && currentFormat === "group-memtier-append") (0, _handlersTs.handleFileSelectMemtierAppended)((0, _handlersTs.lastEvt), chartWrapper);
    else if ((0, _handlersTs.lastEvt) && currentFormat === "group-memtier-runcount") (0, _handlersTs.handleFileSelectMemtierRunCount)((0, _handlersTs.lastEvt), chartWrapper);
}
function timeUnitsChanged() {
    forceReload();
}
function commandTypeChanged() {
    forceReload();
}
function toggleMedianRPS() {
    forceReload();
}
const groupDivIds = [
    "group-compressed-histogram",
    "group-memtier-append",
    "group-memtier-runcount"
];
function toggleDiv(divId) {
    groupDivIds.forEach((id)=>{
        if (divId !== id) (0, _jqueryDefault.default)(`#${id}`).css("display", "none");
        else (0, _jqueryDefault.default)(`#${id}`).css("display", "block");
    });
}
function deleteRow(button) {
    const row = button.parentNode;
    row.parentNode.removeChild(row);
}
window.deleteRow = deleteRow;
function addB64InputRow() {
    const container = (0, _jqueryDefault.default)("#hdr-inputs");
    const newRow = (0, _jqueryDefault.default)("<div>").css("margin-bottom", "5px");
    newRow.html('<input type="text" id="b64-label-' + b64InputRowCount + '" placeholder="Enter label">' + " " + '<input type="text" id="b64-input-' + b64InputRowCount + '" placeholder="Enter base64 histogram" style="width: 50%;">' + " " + '<button onclick="deleteRow(this)" style="margin-left: 10px;">X</button>');
    container.append(newRow);
    b64InputRowCount++;
}
function clearErrorBox() {
    (0, _jqueryDefault.default)("#errorbox").html("");
    (0, _jqueryDefault.default)("#errorbox-close").css("display", "none");
}

},{"hdr-histogram-js":"4If5t","jquery":"hgMhh","split.js":"FcWZA","./chart.ts":"dqZQw","./handlers.ts":"gXqj0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4If5t":[function(require,module,exports) {
var process = require("5fbc054b0f181e81");
var global = arguments[3];
!function(t, e) {
    e(exports, require("988556ed4231b5cf"));
}(this, function(exports1, pako) {
    "use strict";
    function _interopNamespace(t) {
        if (t && t.__esModule) return t;
        var e = Object.create(null);
        return t && Object.keys(t).forEach(function(r) {
            if ("default" !== r) {
                var n = Object.getOwnPropertyDescriptor(t, r);
                Object.defineProperty(e, r, n.get ? n : {
                    enumerable: !0,
                    get: function() {
                        return t[r];
                    }
                });
            }
        }), e.default = t, Object.freeze(e);
    }
    var pako__namespace = _interopNamespace(pako);
    const { pow: pow$6, floor: floor$5 } = Math, TWO_POW_32 = pow$6(2, 32);
    class ByteBuffer {
        constructor(t){
            this.position = 0, this.data = t, this.int32ArrayForConvert = new Uint32Array(1), this.int8ArrayForConvert = new Uint8Array(this.int32ArrayForConvert.buffer);
        }
        static allocate(t = 16) {
            return new ByteBuffer(new Uint8Array(t));
        }
        put(t) {
            if (this.position === this.data.length) {
                const t = this.data;
                this.data = new Uint8Array(2 * this.data.length), this.data.set(t);
            }
            this.data[this.position] = t, this.position++;
        }
        putInt32(t) {
            if (this.data.length - this.position < 4) {
                const t = this.data;
                this.data = new Uint8Array(2 * this.data.length + 4), this.data.set(t);
            }
            this.int32ArrayForConvert[0] = t, this.data.set(this.int8ArrayForConvert.reverse(), this.position), this.position += 4;
        }
        putInt64(t) {
            this.putInt32(floor$5(t / TWO_POW_32)), this.putInt32(t);
        }
        putArray(t) {
            if (this.data.length - this.position < t.byteLength) {
                const e = this.data;
                this.data = new Uint8Array(this.position + t.byteLength), this.data.set(e);
            }
            this.data.set(t, this.position), this.position += t.byteLength;
        }
        get() {
            const t = this.data[this.position];
            return this.position++, t;
        }
        getInt32() {
            this.int8ArrayForConvert.set(this.data.slice(this.position, this.position + 4).reverse());
            const t = this.int32ArrayForConvert[0];
            return this.position += 4, t;
        }
        getInt64() {
            const t = this.getInt32(), e = this.getInt32();
            return t * TWO_POW_32 + e;
        }
        resetPosition() {
            this.position = 0;
        }
    }
    class HistogramIterationValue {
        constructor(){
            this.reset();
        }
        reset() {
            this.valueIteratedTo = 0, this.valueIteratedFrom = 0, this.countAtValueIteratedTo = 0, this.countAddedInThisIterationStep = 0, this.totalCountToThisValue = 0, this.totalValueToThisValue = 0, this.percentile = 0, this.percentileLevelIteratedTo = 0;
        }
    }
    class JsHistogramIterator {
        constructor(){
            this.currentIterationValue = new HistogramIterationValue;
        }
        resetIterator(t) {
            this.histogram = t, this.savedHistogramTotalRawCount = t.totalCount, this.arrayTotalCount = t.totalCount, this.currentIndex = 0, this.currentValueAtIndex = 0, this.nextValueAtIndex = Math.pow(2, t.unitMagnitude), this.prevValueIteratedTo = 0, this.totalCountToPrevIndex = 0, this.totalCountToCurrentIndex = 0, this.totalValueToCurrentIndex = 0, this.countAtThisValue = 0, this.freshSubBucket = !0, this.currentIterationValue.reset();
        }
        hasNext() {
            if (this.histogram.totalCount !== this.savedHistogramTotalRawCount) throw "Concurrent Modification Exception";
            return this.totalCountToCurrentIndex < this.arrayTotalCount;
        }
        next() {
            for(; !this.exhaustedSubBuckets();){
                if (this.countAtThisValue = this.histogram.getCountAtIndex(this.currentIndex), this.freshSubBucket && (this.totalCountToCurrentIndex += this.countAtThisValue, this.totalValueToCurrentIndex += this.countAtThisValue * this.histogram.highestEquivalentValue(this.currentValueAtIndex), this.freshSubBucket = !1), this.reachedIterationLevel()) {
                    const t = this.getValueIteratedTo();
                    if (Object.assign(this.currentIterationValue, {
                        valueIteratedTo: t,
                        valueIteratedFrom: this.prevValueIteratedTo,
                        countAtValueIteratedTo: this.countAtThisValue,
                        countAddedInThisIterationStep: this.totalCountToCurrentIndex - this.totalCountToPrevIndex,
                        totalCountToThisValue: this.totalCountToCurrentIndex,
                        totalValueToThisValue: this.totalValueToCurrentIndex,
                        percentile: 100 * this.totalCountToCurrentIndex / this.arrayTotalCount,
                        percentileLevelIteratedTo: this.getPercentileIteratedTo()
                    }), this.prevValueIteratedTo = t, this.totalCountToPrevIndex = this.totalCountToCurrentIndex, this.incrementIterationLevel(), this.histogram.totalCount !== this.savedHistogramTotalRawCount) throw new Error("Concurrent Modification Exception");
                    return this.currentIterationValue;
                }
                this.incrementSubBucket();
            }
            throw new Error("Index Out Of Bounds Exception");
        }
        getPercentileIteratedTo() {
            return 100 * this.totalCountToCurrentIndex / this.arrayTotalCount;
        }
        getPercentileIteratedFrom() {
            return 100 * this.totalCountToPrevIndex / this.arrayTotalCount;
        }
        getValueIteratedTo() {
            return this.histogram.highestEquivalentValue(this.currentValueAtIndex);
        }
        exhaustedSubBuckets() {
            return this.currentIndex >= this.histogram.countsArrayLength;
        }
        incrementSubBucket() {
            this.freshSubBucket = !0, this.currentIndex++, this.currentValueAtIndex = this.histogram.valueFromIndex(this.currentIndex), this.nextValueAtIndex = this.histogram.valueFromIndex(this.currentIndex + 1);
        }
    }
    class RecordedValuesIterator extends JsHistogramIterator {
        constructor(t){
            super(), this.doReset(t);
        }
        reset() {
            this.doReset(this.histogram);
        }
        doReset(t) {
            super.resetIterator(t), this.visitedIndex = -1;
        }
        incrementIterationLevel() {
            this.visitedIndex = this.currentIndex;
        }
        reachedIterationLevel() {
            return 0 != this.histogram.getCountAtIndex(this.currentIndex) && this.visitedIndex !== this.currentIndex;
        }
    }
    const { pow: pow$5, floor: floor$4, log2: log2$2 } = Math;
    class PercentileIterator extends JsHistogramIterator {
        constructor(t, e){
            super(), this.percentileTicksPerHalfDistance = 0, this.percentileLevelToIterateTo = 0, this.percentileLevelToIterateFrom = 0, this.reachedLastRecordedValue = !1, this.doReset(t, e);
        }
        reset(t) {
            this.doReset(this.histogram, t);
        }
        doReset(t, e) {
            super.resetIterator(t), this.percentileTicksPerHalfDistance = e, this.percentileLevelToIterateTo = 0, this.percentileLevelToIterateFrom = 0, this.reachedLastRecordedValue = !1;
        }
        hasNext() {
            return !!super.hasNext() || !this.reachedLastRecordedValue && this.arrayTotalCount > 0 && (this.percentileLevelToIterateTo = 100, this.reachedLastRecordedValue = !0, !0);
        }
        incrementIterationLevel() {
            this.percentileLevelToIterateFrom = this.percentileLevelToIterateTo;
            const t = this.percentileTicksPerHalfDistance * pow$5(2, floor$4(log2$2(100 / (100 - this.percentileLevelToIterateTo))) + 1);
            this.percentileLevelToIterateTo += 100 / t;
        }
        reachedIterationLevel() {
            if (0 === this.countAtThisValue) return !1;
            return 100 * this.totalCountToCurrentIndex / this.arrayTotalCount >= this.percentileLevelToIterateTo;
        }
        getPercentileIteratedTo() {
            return this.percentileLevelToIterateTo;
        }
        getPercentileIteratedFrom() {
            return this.percentileLevelToIterateFrom;
        }
    }
    const leftPadding = (t)=>(e)=>e.length < t ? " ".repeat(t - e.length) + e : e, integerFormatter = (t)=>{
        const e = leftPadding(t);
        return (t)=>e("" + t);
    }, { floor: floor$3, log10: log10, pow: pow$4 } = Math, numberOfDigits = (t)=>floor$3(log10(t) + 1), keepSignificantDigits = (t)=>(e)=>{
            const r = numberOfDigits(e);
            if (r > t) return e - e % pow$4(10, r - t);
            return e;
        }, floatFormatter = (t, e)=>{
        const r = new Intl.NumberFormat("en-US", {
            maximumFractionDigits: e,
            minimumFractionDigits: e,
            useGrouping: !1
        }), n = leftPadding(t);
        return (t)=>n(r.format(t));
    }, ulp = (t)=>Math.pow(2, Math.floor(Math.log2(t)) - 52), NO_TAG = "NO TAG", toSummary = (t)=>{
        const { totalCount: e, maxValue: r, numberOfSignificantValueDigits: n } = t, o = keepSignificantDigits(n);
        return {
            p50: o(t.getValueAtPercentile(50)),
            p75: o(t.getValueAtPercentile(75)),
            p90: o(t.getValueAtPercentile(90)),
            p97_5: o(t.getValueAtPercentile(97.5)),
            p99: o(t.getValueAtPercentile(99)),
            p99_9: o(t.getValueAtPercentile(99.9)),
            p99_99: o(t.getValueAtPercentile(99.99)),
            p99_999: o(t.getValueAtPercentile(99.999)),
            max: r,
            totalCount: e
        };
    }, { pow: pow$3, floor: floor$2, ceil: ceil$1, log2: log2$1, max: max$2, min: min } = Math;
    class JsHistogram {
        constructor(t, e, r){
            if (this.autoResize = !1, this.startTimeStampMsec = Number.MAX_SAFE_INTEGER, this.endTimeStampMsec = 0, this.tag = NO_TAG, this.maxValue = 0, this.minNonZeroValue = Number.MAX_SAFE_INTEGER, this.identity = 0, this.highestTrackableValue = 0, this.lowestDiscernibleValue = 0, this.numberOfSignificantValueDigits = 0, this.bucketCount = 0, this.subBucketCount = 0, this.countsArrayLength = 0, this.wordSizeInBytes = 0, t < 1) throw new Error("lowestDiscernibleValue must be >= 1");
            if (e < 2 * t) throw new Error(`highestTrackableValue must be >= 2 * lowestDiscernibleValue ( 2 * ${t} )`);
            if (r < 0 || r > 5) throw new Error("numberOfSignificantValueDigits must be between 0 and 5");
            this.identity = JsHistogram.identityBuilder++, this.init(t, e, r);
        }
        incrementTotalCount() {
            this._totalCount++;
        }
        addToTotalCount(t) {
            this._totalCount += t;
        }
        setTotalCount(t) {
            this._totalCount = t;
        }
        get totalCount() {
            return this._totalCount;
        }
        updatedMaxValue(t) {
            const e = t + this.unitMagnitudeMask;
            this.maxValue = e;
        }
        updateMinNonZeroValue(t) {
            if (t <= this.unitMagnitudeMask) return;
            const e = floor$2(t / this.lowestDiscernibleValueRounded) * this.lowestDiscernibleValueRounded;
            this.minNonZeroValue = e;
        }
        init(t, e, r) {
            this.lowestDiscernibleValue = t, this.highestTrackableValue = e, this.numberOfSignificantValueDigits = r;
            const n = 2 * floor$2(pow$3(10, r));
            this.unitMagnitude = floor$2(log2$1(t)), this.lowestDiscernibleValueRounded = pow$3(2, this.unitMagnitude), this.unitMagnitudeMask = this.lowestDiscernibleValueRounded - 1;
            const o = ceil$1(log2$1(n));
            this.subBucketHalfCountMagnitude = (o > 1 ? o : 1) - 1, this.subBucketCount = pow$3(2, this.subBucketHalfCountMagnitude + 1), this.subBucketHalfCount = this.subBucketCount / 2, this.subBucketMask = (floor$2(this.subBucketCount) - 1) * pow$3(2, this.unitMagnitude), this.establishSize(e), this.leadingZeroCountBase = 53 - this.unitMagnitude - this.subBucketHalfCountMagnitude - 1, this.percentileIterator = new PercentileIterator(this, 1), this.recordedValuesIterator = new RecordedValuesIterator(this);
        }
        establishSize(t) {
            this.countsArrayLength = this.determineArrayLengthNeeded(t), this.bucketCount = this.getBucketsNeededToCoverValue(t), this.highestTrackableValue = t;
        }
        determineArrayLengthNeeded(t) {
            if (t < 2 * this.lowestDiscernibleValue) throw new Error("highestTrackableValue (" + t + ") cannot be < (2 * lowestDiscernibleValue)");
            return this.getLengthForNumberOfBuckets(this.getBucketsNeededToCoverValue(t));
        }
        getLengthForNumberOfBuckets(t) {
            return (t + 1) * (this.subBucketCount / 2);
        }
        getBucketsNeededToCoverValue(t) {
            let e = this.subBucketCount * pow$3(2, this.unitMagnitude), r = 1;
            for(; e <= t;){
                if (e > Number.MAX_SAFE_INTEGER / 2) return r + 1;
                e *= 2, r++;
            }
            return r;
        }
        recordValue(t) {
            this.recordSingleValue(t);
        }
        recordSingleValue(t) {
            const e = this.countsArrayIndex(t);
            e >= this.countsArrayLength ? this.handleRecordException(1, t) : this.incrementCountAtIndex(e), this.updateMinAndMax(t), this.incrementTotalCount();
        }
        handleRecordException(t, e) {
            if (!this.autoResize) throw new Error("Value " + e + " is outside of histogram covered range");
            this.resize(e);
            var r = this.countsArrayIndex(e);
            this.addToCountAtIndex(r, t), this.highestTrackableValue = this.highestEquivalentValue(this.valueFromIndex(this.countsArrayLength - 1));
        }
        countsArrayIndex(t) {
            if (t < 0) throw new Error("Histogram recorded value cannot be negative.");
            const e = this.getBucketIndex(t), r = this.getSubBucketIndex(t, e);
            return this.computeCountsArrayIndex(e, r);
        }
        computeCountsArrayIndex(t, e) {
            return (t + 1) * pow$3(2, this.subBucketHalfCountMagnitude) + (e - this.subBucketHalfCount);
        }
        getBucketIndex(t) {
            return max$2(floor$2(log2$1(t)) - this.subBucketHalfCountMagnitude - this.unitMagnitude, 0);
        }
        getSubBucketIndex(t, e) {
            return floor$2(t / pow$3(2, e + this.unitMagnitude));
        }
        updateMinAndMax(t) {
            t > this.maxValue && this.updatedMaxValue(t), t < this.minNonZeroValue && 0 !== t && this.updateMinNonZeroValue(t);
        }
        getValueAtPercentile(t) {
            const e = min(t, 100) / 100 * this.totalCount, r = max$2(ceil$1(e - ulp(e)), 1);
            let n = 0;
            for(let e = 0; e < this.countsArrayLength; e++)if (n += this.getCountAtIndex(e), n >= r) {
                var o = this.valueFromIndex(e);
                return 0 === t ? this.lowestEquivalentValue(o) : this.highestEquivalentValue(o);
            }
            return 0;
        }
        valueFromIndexes(t, e) {
            return e * pow$3(2, t + this.unitMagnitude);
        }
        valueFromIndex(t) {
            let e = floor$2(t / this.subBucketHalfCount) - 1, r = t % this.subBucketHalfCount + this.subBucketHalfCount;
            return e < 0 && (r -= this.subBucketHalfCount, e = 0), this.valueFromIndexes(e, r);
        }
        lowestEquivalentValue(t) {
            const e = this.getBucketIndex(t), r = this.getSubBucketIndex(t, e);
            return this.valueFromIndexes(e, r);
        }
        highestEquivalentValue(t) {
            return this.nextNonEquivalentValue(t) - 1;
        }
        nextNonEquivalentValue(t) {
            return this.lowestEquivalentValue(t) + this.sizeOfEquivalentValueRange(t);
        }
        sizeOfEquivalentValueRange(t) {
            const e = this.getBucketIndex(t), r = this.getSubBucketIndex(t, e);
            return pow$3(2, this.unitMagnitude + (r >= this.subBucketCount ? e + 1 : e));
        }
        medianEquivalentValue(t) {
            return this.lowestEquivalentValue(t) + floor$2(this.sizeOfEquivalentValueRange(t) / 2);
        }
        get mean() {
            if (0 === this.totalCount) return 0;
            this.recordedValuesIterator.reset();
            let t = 0;
            for(; this.recordedValuesIterator.hasNext();){
                const e = this.recordedValuesIterator.next();
                t += this.medianEquivalentValue(e.valueIteratedTo) * e.countAtValueIteratedTo;
            }
            return t / this.totalCount;
        }
        getStdDeviation(t = this.mean) {
            if (0 === this.totalCount) return 0;
            let e = 0;
            for(this.recordedValuesIterator.reset(); this.recordedValuesIterator.hasNext();){
                const r = this.recordedValuesIterator.next(), n = this.medianEquivalentValue(r.valueIteratedTo) - t;
                e += n * n * r.countAddedInThisIterationStep;
            }
            return Math.sqrt(e / this.totalCount);
        }
        get stdDeviation() {
            if (0 === this.totalCount) return 0;
            const t = this.mean;
            let e = 0;
            for(this.recordedValuesIterator.reset(); this.recordedValuesIterator.hasNext();){
                const r = this.recordedValuesIterator.next(), n = this.medianEquivalentValue(r.valueIteratedTo) - t;
                e += n * n * r.countAddedInThisIterationStep;
            }
            return Math.sqrt(e / this.totalCount);
        }
        outputPercentileDistribution(t = 5, e = 1, r = !1) {
            let n = "";
            n += r ? '"Value","Percentile","TotalCount","1/(1-Percentile)"\n' : "       Value     Percentile TotalCount 1/(1-Percentile)\n\n";
            const o = this.percentileIterator;
            let i, s;
            if (o.reset(t), r) {
                const t = floatFormatter(0, this.numberOfSignificantValueDigits), r = floatFormatter(0, 12), n = floatFormatter(0, 2);
                i = (o)=>t(o.valueIteratedTo / e) + "," + r(o.percentileLevelIteratedTo / 100) + "," + o.totalCountToThisValue + "," + n(1 / (1 - o.percentileLevelIteratedTo / 100)) + "\n", s = (n)=>t(n.valueIteratedTo / e) + "," + r(n.percentileLevelIteratedTo / 100) + "," + n.totalCountToThisValue + ",Infinity\n";
            } else {
                const t = floatFormatter(12, this.numberOfSignificantValueDigits), r = floatFormatter(2, 12), n = integerFormatter(10), o = floatFormatter(14, 2);
                i = (i)=>t(i.valueIteratedTo / e) + " " + r(i.percentileLevelIteratedTo / 100) + " " + n(i.totalCountToThisValue) + " " + o(1 / (1 - i.percentileLevelIteratedTo / 100)) + "\n", s = (o)=>t(o.valueIteratedTo / e) + " " + r(o.percentileLevelIteratedTo / 100) + " " + n(o.totalCountToThisValue) + "\n";
            }
            for(; o.hasNext();){
                const t = o.next();
                t.percentileLevelIteratedTo < 100 ? n += i(t) : n += s(t);
            }
            if (!r) {
                const t = floatFormatter(12, this.numberOfSignificantValueDigits), r = this.mean, o = t(r / e), i = t(this.getStdDeviation(r) / e), s = t(this.maxValue / e), a = integerFormatter(12);
                n += `#[Mean    = ${o}, StdDeviation   = ${i}]\n#[Max     = ${s}, Total count    = ${a(this.totalCount)}]\n#[Buckets = ${a(this.bucketCount)}, SubBuckets     = ${a(this.subBucketCount)}]\n`;
            }
            return n;
        }
        get summary() {
            return toSummary(this);
        }
        toJSON() {
            return this.summary;
        }
        inspect() {
            return this.toString();
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
            return this.toString();
        }
        get estimatedFootprintInBytes() {
            return this._getEstimatedFootprintInBytes();
        }
        recordSingleValueWithExpectedInterval(t, e) {
            if (this.recordSingleValue(t), !(e <= 0)) for(let r = t - e; r >= e; r -= e)this.recordSingleValue(r);
        }
        recordCountAtValue(t, e) {
            const r = this.countsArrayIndex(e);
            r >= this.countsArrayLength ? this.handleRecordException(t, e) : this.addToCountAtIndex(r, t), this.updateMinAndMax(e), this.addToTotalCount(t);
        }
        recordValueWithCount(t, e) {
            this.recordCountAtValue(e, t);
        }
        recordValueWithExpectedInterval(t, e) {
            this.recordSingleValueWithExpectedInterval(t, e);
        }
        recordValueWithCountAndExpectedInterval(t, e, r) {
            if (this.recordCountAtValue(e, t), !(r <= 0)) for(let n = t - r; n >= r; n -= r)this.recordCountAtValue(e, n);
        }
        addWhileCorrectingForCoordinatedOmission(t, e) {
            const r = this, n = new RecordedValuesIterator(t);
            for(; n.hasNext();){
                const t = n.next();
                r.recordValueWithCountAndExpectedInterval(t.valueIteratedTo, t.countAtValueIteratedTo, e);
            }
        }
        add(t) {
            if (!(t instanceof JsHistogram)) throw new Error("Cannot add a WASM histogram to a regular JS histogram");
            if (this.highestEquivalentValue(this.valueFromIndex(this.countsArrayLength - 1)) < t.maxValue) {
                if (!this.autoResize) throw new Error("The other histogram includes values that do not fit in this histogram's range.");
                this.resize(t.maxValue);
            }
            if (this.bucketCount === t.bucketCount && this.subBucketCount === t.subBucketCount && this.unitMagnitude === t.unitMagnitude) {
                let e = 0;
                for(let r = 0; r < t.countsArrayLength; r++){
                    const n = t.getCountAtIndex(r);
                    n > 0 && (this.addToCountAtIndex(r, n), e += n);
                }
                this.setTotalCount(this.totalCount + e), this.updatedMaxValue(max$2(this.maxValue, t.maxValue)), this.updateMinNonZeroValue(min(this.minNonZeroValue, t.minNonZeroValue));
            } else {
                const e = t.countsArrayIndex(t.maxValue);
                let r = t.getCountAtIndex(e);
                this.recordCountAtValue(r, t.valueFromIndex(e));
                for(let n = 0; n < e; n++)r = t.getCountAtIndex(n), r > 0 && this.recordCountAtValue(r, t.valueFromIndex(n));
            }
            this.startTimeStampMsec = min(this.startTimeStampMsec, t.startTimeStampMsec), this.endTimeStampMsec = max$2(this.endTimeStampMsec, t.endTimeStampMsec);
        }
        getCountAtValue(t) {
            const e = min(max$2(0, this.countsArrayIndex(t)), this.countsArrayLength - 1);
            return this.getCountAtIndex(e);
        }
        subtract(t) {
            const e = this.valueFromIndex(this.countsArrayLength - 1);
            if (!(t instanceof JsHistogram)) throw new Error("Cannot subtract a WASM histogram to a regular JS histogram");
            if (e < t.maxValue) {
                if (!this.autoResize) throw new Error("The other histogram includes values that do not fit in this histogram's range.");
                this.resize(t.maxValue);
            }
            if (this.bucketCount === t.bucketCount && this.subBucketCount === t.subBucketCount && this.unitMagnitude === t.unitMagnitude) {
                let e = 0;
                for(let r = 0; r < t.countsArrayLength; r++){
                    const n = t.getCountAtIndex(r);
                    n > 0 && (this.addToCountAtIndex(r, -n), e += n);
                }
                this.setTotalCount(this.totalCount - e);
            } else for(let e = 0; e < t.countsArrayLength; e++){
                const r = t.getCountAtIndex(e);
                if (r > 0) {
                    const n = t.valueFromIndex(e);
                    if (this.getCountAtValue(n) < r) throw new Error("otherHistogram count (" + r + ") at value " + n + " is larger than this one's (" + this.getCountAtValue(n) + ")");
                    this.recordCountAtValue(-r, n);
                }
            }
            (this.getCountAtValue(this.maxValue) <= 0 || this.getCountAtValue(this.minNonZeroValue) <= 0) && this.establishInternalTackingValues();
        }
        establishInternalTackingValues(t = this.countsArrayLength) {
            this.maxValue = 0, this.minNonZeroValue = Number.MAX_VALUE;
            let e = -1, r = -1, n = 0;
            for(let o = 0; o < t; o++){
                const t = this.getCountAtIndex(o);
                t > 0 && (n += t, e = o, -1 == r && 0 != o && (r = o));
            }
            e >= 0 && this.updatedMaxValue(this.highestEquivalentValue(this.valueFromIndex(e))), r >= 0 && this.updateMinNonZeroValue(this.valueFromIndex(r)), this.setTotalCount(n);
        }
        reset() {
            this.clearCounts(), this.setTotalCount(0), this.startTimeStampMsec = 0, this.endTimeStampMsec = 0, this.tag = NO_TAG, this.maxValue = 0, this.minNonZeroValue = Number.MAX_SAFE_INTEGER;
        }
        destroy() {}
    }
    /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */ function __awaiter(t, e, r, n) {
        return new (r || (r = Promise))(function(o, i) {
            function s(t) {
                try {
                    u(n.next(t));
                } catch (t) {
                    i(t);
                }
            }
            function a(t) {
                try {
                    u(n.throw(t));
                } catch (t) {
                    i(t);
                }
            }
            function u(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e);
                })).then(s, a);
            }
            u((n = n.apply(t, e || [])).next());
        });
    }
    const BINARY = "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";
    for(var toByteArray_1 = toByteArray, fromByteArray_1 = fromByteArray, lookup = [], revLookup = [], Arr = "undefined" != typeof Uint8Array ? Uint8Array : Array, code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, len = code.length; i < len; ++i)lookup[i] = code[i], revLookup[code.charCodeAt(i)] = i;
    function getLens(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        return -1 === r && (r = e), [
            r,
            r === e ? 0 : 4 - r % 4
        ];
    }
    function _byteLength(t, e, r) {
        return 3 * (e + r) / 4 - r;
    }
    function toByteArray(t) {
        var e, r, n = getLens(t), o = n[0], i = n[1], s = new Arr(_byteLength(t, o, i)), a = 0, u = i > 0 ? o - 4 : o;
        for(r = 0; r < u; r += 4)e = revLookup[t.charCodeAt(r)] << 18 | revLookup[t.charCodeAt(r + 1)] << 12 | revLookup[t.charCodeAt(r + 2)] << 6 | revLookup[t.charCodeAt(r + 3)], s[a++] = e >> 16 & 255, s[a++] = e >> 8 & 255, s[a++] = 255 & e;
        return 2 === i && (e = revLookup[t.charCodeAt(r)] << 2 | revLookup[t.charCodeAt(r + 1)] >> 4, s[a++] = 255 & e), 1 === i && (e = revLookup[t.charCodeAt(r)] << 10 | revLookup[t.charCodeAt(r + 1)] << 4 | revLookup[t.charCodeAt(r + 2)] >> 2, s[a++] = e >> 8 & 255, s[a++] = 255 & e), s;
    }
    function tripletToBase64(t) {
        return lookup[t >> 18 & 63] + lookup[t >> 12 & 63] + lookup[t >> 6 & 63] + lookup[63 & t];
    }
    function encodeChunk(t, e, r) {
        for(var n, o = [], i = e; i < r; i += 3)n = (t[i] << 16 & 16711680) + (t[i + 1] << 8 & 65280) + (255 & t[i + 2]), o.push(tripletToBase64(n));
        return o.join("");
    }
    function fromByteArray(t) {
        for(var e, r = t.length, n = r % 3, o = [], i = 0, s = r - n; i < s; i += 16383)o.push(encodeChunk(t, i, i + 16383 > s ? s : i + 16383));
        return 1 === n ? (e = t[r - 1], o.push(lookup[e >> 2] + lookup[e << 4 & 63] + "==")) : 2 === n && (e = (t[r - 2] << 8) + t[r - 1], o.push(lookup[e >> 10] + lookup[e >> 4 & 63] + lookup[e << 2 & 63] + "=")), o.join("");
    }
    revLookup["-".charCodeAt(0)] = 62, revLookup["_".charCodeAt(0)] = 63;
    const ID_OFFSET = -8, SIZE_OFFSET = -4, ARRAYBUFFER_ID = 0, STRING_ID = 1, ARRAYBUFFERVIEW = 1, ARRAY = 2, STATICARRAY = 4, VAL_ALIGN_OFFSET = 6, VAL_SIGNED = 2048, VAL_FLOAT = 4096, VAL_MANAGED = 16384, ARRAYBUFFERVIEW_BUFFER_OFFSET = 0, ARRAYBUFFERVIEW_DATASTART_OFFSET = 4, ARRAYBUFFERVIEW_BYTELENGTH_OFFSET = 8, ARRAYBUFFERVIEW_SIZE = 12, ARRAY_LENGTH_OFFSET = 12, ARRAY_SIZE = 16, E_NO_EXPORT_TABLE = "Operation requires compiling with --exportTable", E_NO_EXPORT_RUNTIME = "Operation requires compiling with --exportRuntime", F_NO_EXPORT_RUNTIME = ()=>{
        throw Error(E_NO_EXPORT_RUNTIME);
    }, BIGINT = "undefined" != typeof BigUint64Array, THIS = Symbol(), STRING_SMALLSIZE = 192, STRING_CHUNKSIZE = 1024, utf16 = new TextDecoder("utf-16le", {
        fatal: !0
    });
    function getStringImpl(t, e) {
        let r = new Uint32Array(t)[e + SIZE_OFFSET >>> 2] >>> 1;
        const n = new Uint16Array(t, e, r);
        if (r <= STRING_SMALLSIZE) return String.fromCharCode(...n);
        try {
            return utf16.decode(n);
        } catch  {
            let t = "", e = 0;
            for(; r - e > STRING_CHUNKSIZE;)t += String.fromCharCode(...n.subarray(e, e += STRING_CHUNKSIZE));
            return t + String.fromCharCode(...n.subarray(e));
        }
    }
    function preInstantiate(t) {
        const e = {};
        function r(t, e) {
            return t ? getStringImpl(t.buffer, e) : "<yet unknown>";
        }
        const n = t.env = t.env || {};
        return n.abort = n.abort || function(t, o, i, s) {
            const a = e.memory || n.memory;
            throw Error(`abort: ${r(a, t)} at ${r(a, o)}:${i}:${s}`);
        }, n.trace = n.trace || function(t, o, ...i) {
            const s = e.memory || n.memory;
            console.log(`trace: ${r(s, t)}${o ? " " : ""}${i.slice(0, o).join(", ")}`);
        }, n.seed = n.seed || Date.now, t.Math = t.Math || Math, t.Date = t.Date || Date, e;
    }
    function postInstantiate(t, e) {
        const r = e.exports, n = r.memory, o = r.table, i = r.__new || F_NO_EXPORT_RUNTIME, s = r.__pin || F_NO_EXPORT_RUNTIME, a = r.__unpin || F_NO_EXPORT_RUNTIME, u = r.__collect || F_NO_EXPORT_RUNTIME, l = r.__rtti_base, h = l ? (t)=>t[l >>> 2] : F_NO_EXPORT_RUNTIME;
        function c(t) {
            const e = new Uint32Array(n.buffer);
            if ((t >>>= 0) >= h(e)) throw Error("invalid id: " + t);
            return e[(l + 4 >>> 2) + (t << 1) + 1];
        }
        function d(t) {
            const e = function(t) {
                const e = new Uint32Array(n.buffer);
                if ((t >>>= 0) >= h(e)) throw Error("invalid id: " + t);
                return e[(l + 4 >>> 2) + (t << 1)];
            }(t);
            if (!(e & (ARRAYBUFFERVIEW | ARRAY | STATICARRAY))) throw Error(`not an array: ${t}, flags=${e}`);
            return e;
        }
        function g(t) {
            return 31 - Math.clz32(t >>> VAL_ALIGN_OFFSET & 31);
        }
        function m(t, e, r) {
            const o = n.buffer;
            if (r) switch(t){
                case 2:
                    return new Float32Array(o);
                case 3:
                    return new Float64Array(o);
            }
            else switch(t){
                case 0:
                    return new (e ? Int8Array : Uint8Array)(o);
                case 1:
                    return new (e ? Int16Array : Uint16Array)(o);
                case 2:
                    return new (e ? Int32Array : Uint32Array)(o);
                case 3:
                    return new (e ? BigInt64Array : BigUint64Array)(o);
            }
            throw Error("unsupported align: " + t);
        }
        function f(t) {
            const e = new Uint32Array(n.buffer), r = d(e[t + ID_OFFSET >>> 2]), o = g(r);
            let i = r & STATICARRAY ? t : e[t + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2];
            const s = r & ARRAY ? e[t + ARRAY_LENGTH_OFFSET >>> 2] : e[i + SIZE_OFFSET >>> 2] >>> o;
            return m(o, r & VAL_SIGNED, r & VAL_FLOAT).subarray(i >>>= o, i + s);
        }
        function p(t, e, r) {
            return new t(I(t, e, r));
        }
        function I(t, e, r) {
            const o = n.buffer, i = new Uint32Array(o);
            return new t(o, i[r + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2], i[r + ARRAYBUFFERVIEW_BYTELENGTH_OFFSET >>> 2] >>> e);
        }
        function A(e, r, n) {
            t["__get" + r] = p.bind(null, e, n), t[`__get${r}View`] = I.bind(null, e, n);
        }
        return t.__new = i, t.__pin = s, t.__unpin = a, t.__collect = u, t.__newString = function(t) {
            if (null == t) return 0;
            const e = t.length, r = i(e << 1, STRING_ID), o = new Uint16Array(n.buffer);
            for(var s = 0, a = r >>> 1; s < e; ++s)o[a + s] = t.charCodeAt(s);
            return r;
        }, t.__newArrayBuffer = function(t) {
            if (null == t) return 0;
            const e = new Uint8Array(t), r = i(e.length, ARRAYBUFFER_ID);
            return new Uint8Array(n.buffer).set(e, r), r;
        }, t.__getString = function(t) {
            if (!t) return null;
            const e = n.buffer;
            if (new Uint32Array(e)[t + ID_OFFSET >>> 2] !== STRING_ID) throw Error("not a string: " + t);
            return getStringImpl(e, t);
        }, t.__newArray = function(t, e = 0) {
            const r = e, o = d(t), u = g(o), l = "number" != typeof r, h = l ? r.length : r, c = i(h << u, o & STATICARRAY ? t : ARRAYBUFFER_ID);
            let f;
            if (o & STATICARRAY) f = c;
            else {
                s(c);
                const e = i(o & ARRAY ? ARRAY_SIZE : ARRAYBUFFERVIEW_SIZE, t);
                a(c);
                const r = new Uint32Array(n.buffer);
                r[e + ARRAYBUFFERVIEW_BUFFER_OFFSET >>> 2] = c, r[e + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2] = c, r[e + ARRAYBUFFERVIEW_BYTELENGTH_OFFSET >>> 2] = h << u, o & ARRAY && (r[e + ARRAY_LENGTH_OFFSET >>> 2] = h), f = e;
            }
            if (l) {
                const t = m(u, o & VAL_SIGNED, o & VAL_FLOAT), e = c >>> u;
                if (o & VAL_MANAGED) for(let n = 0; n < h; ++n)t[e + n] = r[n];
                else t.set(r, e);
            }
            return f;
        }, t.__getArrayView = f, t.__getArray = function(t) {
            const e = f(t), r = e.length, n = new Array(r);
            for(let t = 0; t < r; t++)n[t] = e[t];
            return n;
        }, t.__getArrayBuffer = function(t) {
            const e = n.buffer, r = new Uint32Array(e)[t + SIZE_OFFSET >>> 2];
            return e.slice(t, t + r);
        }, t.__getFunction = function(t) {
            if (!o) throw Error(E_NO_EXPORT_TABLE);
            const e = new Uint32Array(n.buffer)[t >>> 2];
            return o.get(e);
        }, [
            Int8Array,
            Uint8Array,
            Uint8ClampedArray,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array
        ].forEach((t)=>{
            A(t, t.name, 31 - Math.clz32(t.BYTES_PER_ELEMENT));
        }), BIGINT && [
            BigUint64Array,
            BigInt64Array
        ].forEach((t)=>{
            A(t, t.name.slice(3), 3);
        }), t.__instanceof = function(t, e) {
            const r = new Uint32Array(n.buffer);
            let o = r[t + ID_OFFSET >>> 2];
            if (o <= h(r)) do {
                if (o == e) return !0;
                o = c(o);
            }while (o);
            return !1;
        }, t.memory = t.memory || n, t.table = t.table || o, demangle(r, t);
    }
    function isResponse(t) {
        return "undefined" != typeof Response && t instanceof Response;
    }
    function isModule(t) {
        return t instanceof WebAssembly.Module;
    }
    async function instantiate(t, e = {}) {
        if (isResponse(t = await t)) return instantiateStreaming(t, e);
        const r = isModule(t) ? t : await WebAssembly.compile(t), n = preInstantiate(e), o = await WebAssembly.instantiate(r, e);
        return {
            module: r,
            instance: o,
            exports: postInstantiate(n, o)
        };
    }
    function instantiateSync(t, e = {}) {
        const r = isModule(t) ? t : new WebAssembly.Module(t), n = preInstantiate(e), o = new WebAssembly.Instance(r, e);
        return {
            module: r,
            instance: o,
            exports: postInstantiate(n, o)
        };
    }
    async function instantiateStreaming(t, e = {}) {
        if (!WebAssembly.instantiateStreaming) return instantiate(isResponse(t = await t) ? t.arrayBuffer() : t, e);
        const r = preInstantiate(e), n = await WebAssembly.instantiateStreaming(t, e), o = postInstantiate(r, n.instance);
        return {
            ...n,
            exports: o
        };
    }
    function demangle(t, e = {}) {
        const r = t.__argumentsLength ? (e)=>{
            t.__argumentsLength.value = e;
        } : t.__setArgumentsLength || t.__setargc || (()=>{});
        for (let n of Object.keys(t)){
            const o = t[n];
            let i = n.split("."), s = e;
            for(; i.length > 1;){
                let t = i.shift();
                Object.hasOwn(s, t) || (s[t] = {}), s = s[t];
            }
            let a = i[0], u = a.indexOf("#");
            if (u >= 0) {
                const e = a.substring(0, u), i = s[e];
                if (void 0 === i || !i.prototype) {
                    const t = function(...e) {
                        return t.wrap(t.prototype.constructor(0, ...e));
                    };
                    t.prototype = {
                        valueOf () {
                            return this[THIS];
                        }
                    }, t.wrap = function(e) {
                        return Object.create(t.prototype, {
                            [THIS]: {
                                value: e,
                                writable: !1
                            }
                        });
                    }, i && Object.getOwnPropertyNames(i).forEach((e)=>Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))), s[e] = t;
                }
                if (a = a.substring(u + 1), s = s[e].prototype, /^(get|set):/.test(a)) {
                    if (!Object.hasOwn(s, a = a.substring(4))) {
                        let e = t[n.replace("set:", "get:")], r = t[n.replace("get:", "set:")];
                        Object.defineProperty(s, a, {
                            get () {
                                return e(this[THIS]);
                            },
                            set (t) {
                                r(this[THIS], t);
                            },
                            enumerable: !0
                        });
                    }
                } else "constructor" === a ? (s[a] = function(...t) {
                    return r(t.length), o(...t);
                }).original = o : (s[a] = function(...t) {
                    return r(t.length), o(this[THIS], ...t);
                }).original = o;
            } else /^(get|set):/.test(a) ? Object.hasOwn(s, a = a.substring(4)) || Object.defineProperty(s, a, {
                get: t[n.replace("set:", "get:")],
                set: t[n.replace("get:", "set:")],
                enumerable: !0
            }) : "function" == typeof o && o !== r ? (s[a] = (...t)=>(r(t.length), o(...t))).original = o : s[a] = o;
        }
        return e;
    }
    Object.hasOwn = Object.hasOwn || function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    };
    const isNode = "undefined" != typeof process && process.version, isWorker = "function" == typeof importScripts, webAssemblyAvailable = (()=>{
        let t = !1;
        return t = isNode ? "WebAssembly" in global : isWorker || "WebAssembly" in window, t;
    })();
    let wasm = void 0;
    const initWebAssembly = ()=>__awaiter(void 0, void 0, void 0, function*() {
            if (!webAssemblyAvailable) throw new Error("WebAssembly not available here!");
            if (!wasm) return instantiate(pako__namespace.inflate(toByteArray_1(BINARY))).then((t)=>wasm = t.exports || t);
        }), initWebAssemblySync = ()=>{
        if (wasm) return;
        const t = instantiateSync(pako__namespace.inflate(toByteArray_1(BINARY)));
        wasm = t.exports || t;
    }, webAssemblyReady = ()=>!!wasm, defaultRequest$1 = {
        bitBucketSize: 32,
        autoResize: !0,
        lowestDiscernibleValue: 1,
        highestTrackableValue: 2,
        numberOfSignificantValueDigits: 3
    }, remoteHistogramClassFor = (t)=>"packed" === t ? "PackedHistogram" : "Histogram" + t, destroyedWasmHistogram = new Proxy({}, {
        get: function(t, e) {
            throw new Error("Cannot use a destroyed histogram");
        }
    });
    class WasmHistogram {
        constructor(t, e){
            this._wasmHistogram = t, this._remoteHistogramClass = e, this.tag = NO_TAG, wasm.__pin(this._wasmHistogram);
        }
        static build(t = defaultRequest$1) {
            if (!webAssemblyReady()) throw new Error("WebAssembly is not ready yet!");
            const e = Object.assign({}, defaultRequest$1, t), r = remoteHistogramClassFor(e.bitBucketSize);
            return new WasmHistogram(new wasm[r](e.lowestDiscernibleValue, e.highestTrackableValue, e.numberOfSignificantValueDigits, e.autoResize), r);
        }
        static decode(t, e = 32, r = 0) {
            if (!webAssemblyReady()) throw new Error("WebAssembly is not ready yet!");
            const n = remoteHistogramClassFor(e), o = "decode" + n, i = wasm.__newArray(wasm.UINT8ARRAY_ID, t);
            return new WasmHistogram(wasm[n].wrap(wasm[o](i, r)), n);
        }
        get numberOfSignificantValueDigits() {
            return this._wasmHistogram.numberOfSignificantValueDigits;
        }
        get autoResize() {
            return !!this._wasmHistogram.autoResize;
        }
        set autoResize(t) {
            this._wasmHistogram.autoResize = t;
        }
        get highestTrackableValue() {
            return this._wasmHistogram.highestTrackableValue;
        }
        set highestTrackableValue(t) {
            this._wasmHistogram.highestTrackableValue = t;
        }
        get startTimeStampMsec() {
            return this._wasmHistogram.startTimeStampMsec;
        }
        set startTimeStampMsec(t) {
            this._wasmHistogram.startTimeStampMsec = t;
        }
        get endTimeStampMsec() {
            return this._wasmHistogram.endTimeStampMsec;
        }
        set endTimeStampMsec(t) {
            this._wasmHistogram.endTimeStampMsec = t;
        }
        get totalCount() {
            return this._wasmHistogram.totalCount;
        }
        get stdDeviation() {
            return this._wasmHistogram.stdDeviation;
        }
        get mean() {
            return this._wasmHistogram.mean;
        }
        get estimatedFootprintInBytes() {
            return 192 + this._wasmHistogram.estimatedFootprintInBytes;
        }
        get minNonZeroValue() {
            return this._wasmHistogram.minNonZeroValue;
        }
        get maxValue() {
            return this._wasmHistogram.maxValue;
        }
        recordValue(t) {
            this._wasmHistogram.recordValue(t);
        }
        recordValueWithCount(t, e) {
            this._wasmHistogram.recordValueWithCount(t, e);
        }
        recordValueWithExpectedInterval(t, e) {
            this._wasmHistogram.recordValueWithExpectedInterval(t, e);
        }
        getValueAtPercentile(t) {
            return this._wasmHistogram.getValueAtPercentile(t);
        }
        outputPercentileDistribution(t = 5, e = 1, r = !1) {
            if (r) throw new Error("CSV output not supported by wasm histograms");
            return wasm.__getString(this._wasmHistogram.outputPercentileDistribution(t, e));
        }
        isDestroyed() {
            return this._wasmHistogram === destroyedWasmHistogram;
        }
        get summary() {
            return toSummary(this);
        }
        toJSON() {
            return this.summary;
        }
        toString() {
            return this.isDestroyed() ? "Destroyed WASM histogram" : `WASM ${this._remoteHistogramClass} ${JSON.stringify(this, null, 2)}`;
        }
        inspect() {
            return this.toString();
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
            return this.toString();
        }
        addWhileCorrectingForCoordinatedOmission(t, e) {
            this._wasmHistogram.addWhileCorrectingForCoordinatedOmission(t, e);
        }
        copyCorrectedForCoordinatedOmission(t) {
            return new WasmHistogram(wasm[this._remoteHistogramClass].wrap(this._wasmHistogram.copyCorrectedForCoordinatedOmission(t)), this._remoteHistogramClass);
        }
        add(t) {
            if (!(t instanceof WasmHistogram)) throw new Error("Cannot add a regular JS histogram to a WASM histogram");
            this._wasmHistogram["add" + t._remoteHistogramClass](t._wasmHistogram);
        }
        subtract(t) {
            if (!(t instanceof WasmHistogram)) throw new Error("Cannot subtract a regular JS histogram to a WASM histogram");
            this._wasmHistogram["subtract" + t._remoteHistogramClass](t._wasmHistogram);
        }
        encode() {
            const t = wasm.__pin(this._wasmHistogram.encode()), e = wasm.__getUint8Array(t);
            return wasm.__unpin(t), e;
        }
        reset() {
            this.tag = NO_TAG, this._wasmHistogram.reset();
        }
        destroy() {
            wasm.__unpin(this._wasmHistogram), this._wasmHistogram = destroyedWasmHistogram;
        }
    }
    const MINIMUM_INITIAL_PACKED_ARRAY_CAPACITY = 16, MAX_SUPPORTED_PACKED_COUNTS_ARRAY_LENGTH = Math.pow(2, 13) - 1, SET_0_START_INDEX = 0, NUMBER_OF_SETS$1 = 8, LEAF_LEVEL_SHIFT = 3, NON_LEAF_ENTRY_SLOT_INDICATORS_OFFSET = 0, NON_LEAF_ENTRY_HEADER_SIZE_IN_SHORTS = 1, PACKED_ARRAY_GROWTH_INCREMENT = 16, PACKED_ARRAY_GROWTH_FRACTION_POW2 = 4, { pow: pow$2, ceil: ceil, log2: log2, max: max$1 } = Math, bitCount = (t)=>{
        for(var e = 0; 0 !== t;)e += bitCount32(0 | t), t /= 4294967296;
        return e;
    }, bitCount32 = (t)=>16843009 * ((t = (858993459 & (t -= t >> 1 & 1431655765)) + (t >> 2 & 858993459)) + (t >> 4) & 252645135) >> 24;
    class PackedArrayContext {
        constructor(t, e){
            this.populatedShortLength = 0, this.topLevelShift = Number.MAX_VALUE, this.physicalLength = Math.max(e, MINIMUM_INITIAL_PACKED_ARRAY_CAPACITY), this.isPacked = this.physicalLength <= MAX_SUPPORTED_PACKED_COUNTS_ARRAY_LENGTH, this.isPacked || (this.physicalLength = t), this.array = new ArrayBuffer(8 * this.physicalLength), this.initArrayViews(this.array), this.init(t);
        }
        initArrayViews(t) {
            this.byteArray = new Uint8Array(t), this.shortArray = new Uint16Array(t), this.longArray = new Float64Array(t);
        }
        init(t) {
            if (this.isPacked) {
                this.populatedShortLength = SET_0_START_INDEX + 8;
                for(let t = 0; t < NUMBER_OF_SETS$1; t++)this.setAtShortIndex(SET_0_START_INDEX + t, 0);
                this.setVirtualLength(t);
            } else this.virtualLength = t;
        }
        clear() {
            this.byteArray.fill(0), this.init(this.virtualLength);
        }
        copyAndIncreaseSize(t, e) {
            const r = new PackedArrayContext(e, t);
            return this.isPacked && r.populateEquivalentEntriesWithEntriesFromOther(this), r;
        }
        getPopulatedShortLength() {
            return this.populatedShortLength;
        }
        getPopulatedLongLength() {
            return this.getPopulatedShortLength() + 3 >> 2;
        }
        setAtByteIndex(t, e) {
            this.byteArray[t] = e;
        }
        getAtByteIndex(t) {
            return this.byteArray[t];
        }
        addAtByteIndex(t, e) {
            const r = this.byteArray[t] + e;
            return this.byteArray[t] = r, r;
        }
        setPopulatedLongLength(t) {
            this.populatedShortLength = t << 2;
        }
        getVirtualLength() {
            return this.virtualLength;
        }
        length() {
            return this.physicalLength;
        }
        setAtShortIndex(t, e) {
            this.shortArray[t] = e;
        }
        setAtLongIndex(t, e) {
            this.longArray[t] = e;
        }
        getAtShortIndex(t) {
            return this.shortArray[t];
        }
        getIndexAtShortIndex(t) {
            return this.shortArray[t];
        }
        setPackedSlotIndicators(t, e) {
            this.setAtShortIndex(t + NON_LEAF_ENTRY_SLOT_INDICATORS_OFFSET, e);
        }
        getPackedSlotIndicators(t) {
            return 65535 & this.shortArray[t + NON_LEAF_ENTRY_SLOT_INDICATORS_OFFSET];
        }
        getIndexAtEntrySlot(t, e) {
            return this.getAtShortIndex(t + NON_LEAF_ENTRY_HEADER_SIZE_IN_SHORTS + e);
        }
        setIndexAtEntrySlot(t, e, r) {
            this.setAtShortIndex(t + NON_LEAF_ENTRY_HEADER_SIZE_IN_SHORTS + e, r);
        }
        expandArrayIfNeeded(t) {
            const e = this.length();
            if (e < this.getPopulatedLongLength() + t) {
                const r = max$1(t, PACKED_ARRAY_GROWTH_INCREMENT, this.getPopulatedLongLength() >> PACKED_ARRAY_GROWTH_FRACTION_POW2);
                this.resizeArray(e + r);
            }
        }
        newEntry(t) {
            const e = this.populatedShortLength;
            this.expandArrayIfNeeded(1 + (t >> 2)), this.populatedShortLength = e + t;
            for(let r = 0; r < t; r++)this.setAtShortIndex(e + r, -1);
            return e;
        }
        newLeafEntry() {
            let t;
            return t = this.getPopulatedLongLength(), this.expandArrayIfNeeded(1), this.setPopulatedLongLength(t + 1), this.setAtLongIndex(t, 0), t;
        }
        consolidateEntry(t, e) {
            const r = this.getPackedSlotIndicators(e), n = this.getPackedSlotIndicators(t), o = bitCount(n & (n ^ r) - 1), i = bitCount(n);
            let s = 0;
            for(let r = 0; r < i; r++)if (r !== o) {
                const n = this.getIndexAtEntrySlot(e, s);
                0 !== n && this.setIndexAtEntrySlot(t, r, n), s++;
            }
        }
        expandEntry(t, e, r, n, o) {
            let i = 65535 & this.getAtShortIndex(t);
            i |= n;
            const s = bitCount(i);
            if (r >= s) throw new Error("inserted slot index is out of range given provided masks");
            const a = s + NON_LEAF_ENTRY_HEADER_SIZE_IN_SHORTS;
            let u = 0;
            o ? u = this.newLeafEntry() : (u = this.newEntry(NON_LEAF_ENTRY_HEADER_SIZE_IN_SHORTS), this.setPackedSlotIndicators(u, 0));
            const l = u, h = this.newEntry(a);
            return this.setPackedSlotIndicators(h, i), this.setIndexAtEntrySlot(h, r, l), this.setAtShortIndex(e, h), this.consolidateEntry(h, t), h;
        }
        getRootEntry(t, e = !1) {
            const r = SET_0_START_INDEX + t;
            let n = this.getIndexAtShortIndex(r);
            if (0 == n) {
                if (!e) return 0;
                n = this.newEntry(NON_LEAF_ENTRY_HEADER_SIZE_IN_SHORTS), this.setPackedSlotIndicators(n, 0), this.setAtShortIndex(r, n);
            }
            return n;
        }
        getPackedIndex(t, e, r) {
            if (e >= this.virtualLength) throw new Error(`Attempting access at index ${e}, beyond virtualLength ${this.virtualLength}`);
            let n = SET_0_START_INDEX + t, o = this.getRootEntry(t, r);
            if (0 == o) return -1;
            for(let t = this.topLevelShift; t >= LEAF_LEVEL_SHIFT; t -= 4){
                const i = t === LEAF_LEVEL_SHIFT, s = this.getPackedSlotIndicators(o), a = 1 << (e / pow$2(2, t) & 15), u = bitCount(s & a - 1);
                if (0 == (s & a)) {
                    if (!r) return -1;
                    o = this.expandEntry(o, n, u, a, i);
                }
                n = o + NON_LEAF_ENTRY_HEADER_SIZE_IN_SHORTS + u, o = this.getIndexAtShortIndex(n);
            }
            return (o << 3) + (7 & e);
        }
        determineTopLevelShiftForVirtualLength(t) {
            const e = ceil(log2(t));
            let r = 4 * ceil((e - 3) / 4);
            r = max$1(r, 8);
            return r - 4 + 3;
        }
        setVirtualLength(t) {
            if (!this.isPacked) throw new Error("Should never be adjusting the virtual size of a non-packed context");
            this.topLevelShift = this.determineTopLevelShiftForVirtualLength(t), this.virtualLength = t;
        }
        getTopLevelShift() {
            return this.topLevelShift;
        }
        resizeArray(t) {
            const e = new Uint8Array(8 * t);
            e.set(this.byteArray), this.array = e.buffer, this.initArrayViews(this.array), this.physicalLength = t;
        }
        populateEquivalentEntriesWithEntriesFromOther(t) {
            if (this.virtualLength < t.getVirtualLength()) throw new Error("Cannot populate array of smaller virtual length");
            for(let e = 0; e < NUMBER_OF_SETS$1; e++){
                const r = t.getAtShortIndex(SET_0_START_INDEX + e);
                if (0 == r) continue;
                let n = SET_0_START_INDEX + e;
                for(let e = this.topLevelShift; e > t.topLevelShift; e -= 4){
                    const t = NON_LEAF_ENTRY_HEADER_SIZE_IN_SHORTS + 1, e = this.newEntry(t);
                    this.setAtShortIndex(n, e), this.setPackedSlotIndicators(e, 1), n = e + NON_LEAF_ENTRY_HEADER_SIZE_IN_SHORTS;
                }
                this.copyEntriesAtLevelFromOther(t, r, n, t.topLevelShift);
            }
        }
        copyEntriesAtLevelFromOther(t, e, r, n) {
            const o = n == LEAF_LEVEL_SHIFT, i = t.getPackedSlotIndicators(e), s = bitCount(i), a = NON_LEAF_ENTRY_HEADER_SIZE_IN_SHORTS + s, u = this.newEntry(a);
            this.setAtShortIndex(r, u), this.setAtShortIndex(u + NON_LEAF_ENTRY_SLOT_INDICATORS_OFFSET, i);
            for(let r = 0; r < s; r++)if (o) {
                const n = this.newLeafEntry();
                this.setIndexAtEntrySlot(u, r, n);
                const o = t.getIndexAtEntrySlot(e, r);
                this.longArray[n] = t.longArray[o];
            } else {
                const o = t.getIndexAtEntrySlot(e, r);
                this.copyEntriesAtLevelFromOther(t, o, u + NON_LEAF_ENTRY_HEADER_SIZE_IN_SHORTS + r, n - 4);
            }
        }
        getAtUnpackedIndex(t) {
            return this.longArray[t];
        }
        setAtUnpackedIndex(t, e) {
            this.longArray[t] = e;
        }
        lazysetAtUnpackedIndex(t, e) {
            this.longArray[t] = e;
        }
        incrementAndGetAtUnpackedIndex(t) {
            return this.longArray[t]++, this.longArray[t];
        }
        addAndGetAtUnpackedIndex(t, e) {
            return this.longArray[t] += e, this.longArray[t];
        }
        nonLeafEntryToString(t, e, r) {
            let n = "";
            for(let t = 0; t < r; t++)n += "  ";
            try {
                const o = this.getPackedSlotIndicators(t);
                n += `slotIndiators: 0x${toHex(o)}, prevVersionIndex: 0: [ `;
                const i = bitCount(o);
                for(let e = 0; e < i; e++)n += this.getIndexAtEntrySlot(t, e), e < i - 1 && (n += ", ");
                n += ` ] (indexShift = ${e})\n`;
                const s = e == LEAF_LEVEL_SHIFT;
                for(let o = 0; o < i; o++){
                    const i = this.getIndexAtEntrySlot(t, o);
                    n += s ? this.leafEntryToString(i, r + 4) : this.nonLeafEntryToString(i, e - 4, r + 4);
                }
            } catch (r) {
                n += `Exception thrown at nonLeafEnty at index ${t} with indexShift ${e}\n`;
            }
            return n;
        }
        leafEntryToString(t, e) {
            let r = "";
            for(let t = 0; t < e; t++)r += "  ";
            try {
                r += "Leaf bytes : ";
                for(let e = 0; e < 8; e++)r += `0x${toHex(this.byteArray[8 * t + e])} `;
                r += "\n";
            } catch (e) {
                r += `Exception thrown at leafEnty at index ${t}\n`;
            }
            return r;
        }
        toString() {
            let t = "PackedArrayContext:\n";
            if (!this.isPacked) return t + "Context is unpacked:\n";
            for(let e = 0; e < NUMBER_OF_SETS$1; e++)try {
                const r = SET_0_START_INDEX + e, n = this.getIndexAtShortIndex(r);
                if (t += `Set ${e}: root = ${n} \n`, 0 == n) continue;
                t += this.nonLeafEntryToString(n, this.topLevelShift, 4);
            } catch (r) {
                t += `Exception thrown in set ${e}%d\n`;
            }
            return t;
        }
    }
    const toHex = (t)=>Number(t).toString(16).padStart(2, "0"), NUMBER_OF_SETS = 8, { pow: pow$1, floor: floor$1 } = Math;
    class PackedArray {
        constructor(t, e = MINIMUM_INITIAL_PACKED_ARRAY_CAPACITY){
            this.arrayContext = new PackedArrayContext(t, e);
        }
        setVirtualLength(t) {
            if (t < this.length()) throw new Error("Cannot set virtual length, as requested length " + t + " is smaller than the current virtual length " + this.length());
            const e = this.arrayContext;
            e.isPacked && e.determineTopLevelShiftForVirtualLength(t) == e.getTopLevelShift() ? e.setVirtualLength(t) : this.arrayContext = e.copyAndIncreaseSize(this.getPhysicalLength(), t);
        }
        get(t) {
            let e = 0;
            for(let r = 0; r < NUMBER_OF_SETS; r++){
                let n = 0;
                if (!this.arrayContext.isPacked) return this.arrayContext.getAtUnpackedIndex(t);
                const o = this.arrayContext.getPackedIndex(r, t, !1);
                if (o < 0) return e;
                n = this.arrayContext.getAtByteIndex(o) * pow$1(2, r << 3), e += n;
            }
            return e;
        }
        increment(t) {
            this.add(t, 1);
        }
        safeGetPackedIndexgetPackedIndex(t, e) {
            return this.arrayContext.getPackedIndex(t, e, !0);
        }
        add(t, e) {
            let r = e;
            for(let n = 0, o = 0; n < NUMBER_OF_SETS; n++, o += 8){
                if (!this.arrayContext.isPacked) return void this.arrayContext.addAndGetAtUnpackedIndex(t, e);
                const o = this.safeGetPackedIndexgetPackedIndex(n, t), i = 255 & r, s = this.arrayContext.addAtByteIndex(o, i);
                if (r -= i, r /= pow$1(2, 8), r += floor$1(s / pow$1(2, 8)), 0 == r) return;
            }
        }
        set(t, e) {
            let r = 0, n = e;
            for(let o = 0; o < NUMBER_OF_SETS; o++){
                if (!this.arrayContext.isPacked) return void this.arrayContext.setAtUnpackedIndex(t, e);
                if (0 == n) {
                    if (this.arrayContext.getPackedIndex(o, t, !1) < 0) return;
                }
                const i = this.arrayContext.getPackedIndex(o, t, !0), s = 255 & n;
                n = floor$1(n / pow$1(2, 8)), o < r || (this.arrayContext.setAtByteIndex(i, s), r++);
            }
        }
        getPhysicalLength() {
            return this.arrayContext.physicalLength;
        }
        length() {
            return this.arrayContext.getVirtualLength();
        }
        clear() {
            this.arrayContext.clear();
        }
        toString() {
            let t = "PackedArray:\n";
            return t += this.arrayContext.toString(), t;
        }
    }
    class PackedHistogram extends JsHistogram {
        constructor(t, e, r){
            super(t, e, r), this._totalCount = 0, this.packedCounts = new PackedArray(this.countsArrayLength);
        }
        clearCounts() {
            this.packedCounts.clear();
        }
        incrementCountAtIndex(t) {
            this.packedCounts.increment(t);
        }
        addToCountAtIndex(t, e) {
            this.packedCounts.add(t, e);
        }
        setCountAtIndex(t, e) {
            this.packedCounts.set(t, e);
        }
        resize(t) {
            this.establishSize(t), this.packedCounts.setVirtualLength(this.countsArrayLength);
        }
        getCountAtIndex(t) {
            return this.packedCounts.get(t);
        }
        _getEstimatedFootprintInBytes() {
            return 192 + 8 * this.packedCounts.getPhysicalLength();
        }
        copyCorrectedForCoordinatedOmission(t) {
            const e = new PackedHistogram(this.lowestDiscernibleValue, this.highestTrackableValue, this.numberOfSignificantValueDigits);
            return e.addWhileCorrectingForCoordinatedOmission(this, t), e;
        }
        toString() {
            return "PackedHistogram " + JSON.stringify(this, null, 2);
        }
    }
    class TypedArrayHistogram extends JsHistogram {
        constructor(t, e, r, n){
            super(e, r, n), this.arrayCtr = t, this._totalCount = 0, this._counts = new t(this.countsArrayLength);
        }
        clearCounts() {
            this._counts.fill(0);
        }
        incrementCountAtIndex(t) {
            const e = this._counts[t] + 1;
            if (e < 0) throw e + " would overflow short integer count";
            this._counts[t] = e;
        }
        addToCountAtIndex(t, e) {
            const r = this._counts[t] + e;
            if (r < Number.MIN_SAFE_INTEGER || r > Number.MAX_SAFE_INTEGER) throw r + " would overflow integer count";
            this._counts[t] = r;
        }
        setCountAtIndex(t, e) {
            if (e < Number.MIN_SAFE_INTEGER || e > Number.MAX_SAFE_INTEGER) throw e + " would overflow integer count";
            this._counts[t] = e;
        }
        resize(t) {
            this.establishSize(t);
            const e = new this.arrayCtr(this.countsArrayLength);
            e.set(this._counts), this._counts = e;
        }
        getCountAtIndex(t) {
            return this._counts[t];
        }
        _getEstimatedFootprintInBytes() {
            return 1024 + this._counts.BYTES_PER_ELEMENT * this._counts.length;
        }
        copyCorrectedForCoordinatedOmission(t) {
            const e = new TypedArrayHistogram(this.arrayCtr, this.lowestDiscernibleValue, this.highestTrackableValue, this.numberOfSignificantValueDigits);
            return e.addWhileCorrectingForCoordinatedOmission(this, t), e;
        }
        toString() {
            return `Histogram ${8 * this._counts.BYTES_PER_ELEMENT}b ${JSON.stringify(this, null, 2)}`;
        }
    }
    class Int8Histogram extends TypedArrayHistogram {
        constructor(t, e, r){
            super(Uint8Array, t, e, r);
        }
    }
    class Int16Histogram extends TypedArrayHistogram {
        constructor(t, e, r){
            super(Uint16Array, t, e, r);
        }
    }
    class Int32Histogram extends TypedArrayHistogram {
        constructor(t, e, r){
            super(Uint32Array, t, e, r);
        }
    }
    class Float64Histogram extends TypedArrayHistogram {
        constructor(t, e, r){
            super(Float64Array, t, e, r);
        }
    }
    function constructorFromBucketSize(t) {
        switch(t){
            case "packed":
                return PackedHistogram;
            case 8:
                return Int8Histogram;
            case 16:
                return Int16Histogram;
            case 32:
                return Int32Histogram;
            case 64:
                return Float64Histogram;
            default:
                throw new Error("Incorrect parameter bitBucketSize");
        }
    }
    const { pow: pow, floor: floor } = Math, TWO_POW_7 = pow(2, 7), TWO_POW_14 = pow(2, 14), TWO_POW_21 = pow(2, 21), TWO_POW_28 = pow(2, 28), TWO_POW_35 = pow(2, 35), TWO_POW_42 = pow(2, 42), TWO_POW_49 = pow(2, 49), TWO_POW_56 = pow(2, 56);
    class ZigZagEncoding {
        static encode(t, e) {
            e >= 0 ? e *= 2 : e = 2 * -e - 1, e < TWO_POW_7 ? t.put(e) : (t.put(128 | e), e < TWO_POW_14 ? t.put(floor(e / TWO_POW_7)) : (t.put(128 | floor(e / TWO_POW_7)), e < TWO_POW_21 ? t.put(floor(e / TWO_POW_14)) : (t.put(128 | floor(e / TWO_POW_14)), e < TWO_POW_28 ? t.put(floor(e / TWO_POW_21)) : (t.put(128 | floor(e / TWO_POW_21)), e < TWO_POW_35 ? t.put(floor(e / TWO_POW_28)) : (t.put(128 | floor(e / TWO_POW_28)), e < TWO_POW_42 ? t.put(floor(e / TWO_POW_35)) : (t.put(128 | floor(e / TWO_POW_35)), e < TWO_POW_49 ? t.put(floor(e / TWO_POW_42)) : (t.put(128 | floor(e / TWO_POW_42)), e < TWO_POW_56 ? t.put(floor(e / TWO_POW_49)) : (t.put(floor(e / TWO_POW_49) + 128), t.put(floor(e / TWO_POW_56))))))))));
        }
        static decode(t) {
            let e = t.get(), r = 127 & e;
            return 0 != (128 & e) && (e = t.get(), r += (127 & e) * TWO_POW_7, 0 != (128 & e) && (e = t.get(), r += (127 & e) * TWO_POW_14, 0 != (128 & e) && (e = t.get(), r += (127 & e) * TWO_POW_21, 0 != (128 & e) && (e = t.get(), r += (127 & e) * TWO_POW_28, 0 != (128 & e) && (e = t.get(), r += (127 & e) * TWO_POW_35, 0 != (128 & e) && (e = t.get(), r += (127 & e) * TWO_POW_42, 0 != (128 & e) && (e = t.get(), r += (127 & e) * TWO_POW_49, 0 != (128 & e) && (e = t.get(), r += (127 & e) * TWO_POW_56)))))))), r % 2 == 0 ? r /= 2 : r = -(r + 1) / 2, r;
        }
    }
    const { max: max } = Math, V2EncodingCookieBase = 478450435, V2CompressedEncodingCookieBase$1 = 478450436, V2maxWordSizeInBytes = 9, encodingCookie = 16 | V2EncodingCookieBase, compressedEncodingCookie$1 = 16 | V2CompressedEncodingCookieBase$1;
    function fillBufferFromCountsArray(t, e) {
        const r = t.countsArrayIndex(t.maxValue) + 1;
        let n = 0;
        for(; n < r;){
            const o = t.getCountAtIndex(n++);
            if (o < 0) throw new Error("Cannot encode histogram containing negative counts (" + o + ") at index " + n + ", corresponding the value range [" + t.lowestEquivalentValue(t.valueFromIndex(n)) + "," + t.nextNonEquivalentValue(t.valueFromIndex(n)) + ")");
            let i = 0;
            if (0 == o) for(i = 1; n < r && 0 == t.getCountAtIndex(n);)i++, n++;
            i > 1 ? ZigZagEncoding.encode(e, -i) : ZigZagEncoding.encode(e, o);
        }
    }
    function encodeIntoByteBuffer(t, e) {
        const r = e.position;
        e.putInt32(encodingCookie), e.putInt32(0), e.putInt32(1), e.putInt32(t.numberOfSignificantValueDigits), e.putInt64(t.lowestDiscernibleValue), e.putInt64(t.highestTrackableValue), e.putInt64(1);
        const n = e.position;
        fillBufferFromCountsArray(t, e);
        const o = e.position;
        return e.position = r + 4, e.putInt32(o - n), e.position = o, o - r;
    }
    function fillCountsArrayFromSourceBuffer(t, e, r, n) {
        if (2 != n && 4 != n && 8 != n && n != V2maxWordSizeInBytes) throw new Error("word size must be 2, 4, 8, or V2maxWordSizeInBytes (" + V2maxWordSizeInBytes + ") bytes");
        let o = 0;
        const i = e.position + r;
        for(; e.position < i;){
            let r = 0, n = ZigZagEncoding.decode(e);
            n < 0 ? (r = -n, o += r) : t.setCountAtIndex(o++, n);
        }
        return o;
    }
    function getCookieBase(t) {
        return -241 & t;
    }
    function getWordSizeInBytesFromCookie(t) {
        if (getCookieBase(t) == V2EncodingCookieBase || getCookieBase(t) == V2CompressedEncodingCookieBase$1) return V2maxWordSizeInBytes;
        return 14 & (240 & t) >> 4;
    }
    function findDeflateFunction() {
        try {
            return eval('require("zlib").deflateSync');
        } catch (t) {
            return pako__namespace ? pako__namespace.deflate : ()=>{
                throw new Error("pako library is mandatory for encoding/deconding on the browser side");
            };
        }
    }
    function findInflateFunction() {
        try {
            return eval('require("zlib").inflateSync');
        } catch (t) {
            return pako__namespace ? pako__namespace.inflate : ()=>{
                throw new Error("pako library is mandatory for encoding/deconding on the browser side");
            };
        }
    }
    const deflate = findDeflateFunction(), inflate = findInflateFunction();
    function doDecode(t, e = 32, r = 0) {
        const n = new ByteBuffer(t), o = n.getInt32();
        let i, s, a, u;
        if (getCookieBase(o) !== V2EncodingCookieBase) throw new Error("The buffer does not contain a Histogram (no valid V2 encoding cookie found)");
        if (getWordSizeInBytesFromCookie(o) != V2maxWordSizeInBytes) throw new Error("The buffer does not contain a Histogram (no valid cookie found)");
        i = n.getInt32(), n.getInt32(), s = n.getInt32(), a = n.getInt64(), u = n.getInt64(), n.getInt64(), u = max(u, r);
        const l = new (constructorFromBucketSize(e))(a, u, s), h = fillCountsArrayFromSourceBuffer(l, n, i, V2maxWordSizeInBytes);
        return l.establishInternalTackingValues(h), l;
    }
    function doEncodeIntoCompressedBase64(t) {
        const e = t ? {
            level: t
        } : {}, r = ByteBuffer.allocate();
        r.putInt32(compressedEncodingCookie$1);
        const n = ByteBuffer.allocate(), o = encodeIntoByteBuffer(this, n), i = n.data.slice(0, o), s = deflate(i, e);
        return r.putInt32(s.byteLength), r.putArray(s), fromByteArray_1(r.data);
    }
    JsHistogram.decode = doDecode, JsHistogram.prototype.encodeIntoCompressedBase64 = doEncodeIntoCompressedBase64;
    const V2CompressedEncodingCookieBase = 478450436, compressedEncodingCookie = 16 | V2CompressedEncodingCookieBase;
    function decompress(t) {
        const e = new ByteBuffer(t), r = e.position;
        if ((-241 & e.getInt32()) !== V2CompressedEncodingCookieBase) throw new Error("Encoding not supported, only V2 is supported");
        const n = e.getInt32();
        return inflate(e.data.slice(r + 8, r + 8 + n));
    }
    const decodeFromCompressedBase64 = (t, e = 32, r = !1, n = 0)=>{
        const o = decompress(toByteArray_1(t.trim()));
        return r ? WasmHistogram.decode(o, e, n) : JsHistogram.decode(o, e, n);
    };
    function encodeWasmIntoCompressedBase64(t) {
        const e = t ? {
            level: t
        } : {}, r = ByteBuffer.allocate();
        r.putInt32(compressedEncodingCookie);
        const n = this.encode(), o = deflate(n, e);
        return r.putInt32(o.byteLength), r.putArray(o), fromByteArray_1(r.data);
    }
    WasmHistogram.prototype.encodeIntoCompressedBase64 = encodeWasmIntoCompressedBase64;
    const encodeIntoCompressedBase64 = (t, e)=>{
        if (t instanceof WasmHistogram) return t.encodeIntoCompressedBase64(e);
        if (t instanceof JsHistogram) return t.encodeIntoCompressedBase64(e);
        throw new Error("Unsupported Histogram implementation");
    }, TAG_PREFIX = "Tag=", TAG_PREFIX_LENGTH = 4;
    class HistogramLogReader {
        constructor(t, e = 32, r = !1){
            this.lines = splitLines(t), this.currentLineIndex = 0, this.bitBucketSize = e, this.useWebAssembly = r;
        }
        nextIntervalHistogram(t = 0, e = Number.MAX_VALUE) {
            for(; this.currentLineIndex < this.lines.length;){
                const r = this.lines[this.currentLineIndex];
                if (this.currentLineIndex++, r.startsWith("#[StartTime:")) this.parseStartTimeFromLine(r);
                else if (r.startsWith("#[BaseTime:")) this.parseBaseTimeFromLine(r);
                else if (r.startsWith("#") || r.startsWith('"StartTimestamp"')) ;
                else if (r.includes(",")) {
                    const n = r.split(","), [o] = n;
                    let i;
                    o.startsWith(TAG_PREFIX) ? (i = o.substring(TAG_PREFIX_LENGTH), n.shift()) : i = NO_TAG;
                    const [s, a, , u] = n, l = Number.parseFloat(s);
                    if (this.baseTimeSec || (l < this.startTimeSec - 31536e3 ? this.baseTimeSec = this.startTimeSec : this.baseTimeSec = 0), e < l) return null;
                    if (l < t) continue;
                    const h = decodeFromCompressedBase64(u, this.bitBucketSize, this.useWebAssembly);
                    h.startTimeStampMsec = 1e3 * (this.baseTimeSec + l);
                    const c = Number.parseFloat(a);
                    return h.endTimeStampMsec = 1e3 * (this.baseTimeSec + l + c), h.tag = i, h;
                }
            }
            return null;
        }
        parseStartTimeFromLine(t) {
            this.startTimeSec = Number.parseFloat(t.split(" ")[1]);
        }
        parseBaseTimeFromLine(t) {
            this.baseTimeSec = Number.parseFloat(t.split(" ")[1]);
        }
    }
    const splitLines = (t)=>t.split(/\r\n|\r|\n/g), shouldIncludeNoTag = (t)=>t.find((t)=>!t.startsWith("#") && !t.startsWith('"') && !t.startsWith(TAG_PREFIX) && t.includes(",")), listTags = (t)=>{
        const e = splitLines(t), r = e.filter((t)=>t.includes(",") && t.startsWith(TAG_PREFIX)).map((t)=>t.substring(TAG_PREFIX_LENGTH, t.indexOf(","))), n = new Set(r), o = Array.from(n);
        return shouldIncludeNoTag(e) && o.unshift("NO TAG"), o;
    }, HISTOGRAM_LOG_FORMAT_VERSION = "1.3", timeFormatter = floatFormatter(5, 3);
    class HistogramLogWriter {
        constructor(t){
            this.log = t, this.baseTime = 0;
        }
        outputIntervalHistogram(t, e = (t.startTimeStampMsec - this.baseTime) / 1e3, r = (t.endTimeStampMsec - this.baseTime) / 1e3, n = 1e3) {
            const o = encodeIntoCompressedBase64(t), i = `${timeFormatter(e)},${timeFormatter(r - e)},${timeFormatter(t.maxValue / n)},${o}\n`;
            t.tag && t.tag !== NO_TAG ? this.log(`Tag=${t.tag},${i}`) : this.log(i);
        }
        outputComment(t) {
            this.log(`#${t}\n`);
        }
        outputStartTime(t) {
            this.outputComment(`[StartTime: ${floatFormatter(5, 3)(t / 1e3)} (seconds since epoch), ${new Date(t)}]\n`);
        }
        outputLegend() {
            this.log('"StartTimestamp","Interval_Length","Interval_Max","Interval_Compressed_Histogram"\n');
        }
        outputLogFormatVersion() {
            this.outputComment("[Histogram log format version " + HISTOGRAM_LOG_FORMAT_VERSION + "]");
        }
    }
    const defaultRequest = {
        bitBucketSize: 32,
        autoResize: !0,
        lowestDiscernibleValue: 1,
        highestTrackableValue: 2,
        numberOfSignificantValueDigits: 3,
        useWebAssembly: !1
    }, build = (t = defaultRequest)=>{
        const e = Object.assign({}, defaultRequest, t);
        if (t.useWebAssembly && webAssemblyAvailable) return WasmHistogram.build(e);
        const r = new (constructorFromBucketSize(e.bitBucketSize))(e.lowestDiscernibleValue, e.highestTrackableValue, e.numberOfSignificantValueDigits);
        return r.autoResize = e.autoResize, r;
    };
    class Recorder {
        constructor(t = defaultRequest, e = ()=>(new Date).getTime()){
            this.histogramBuildRequest = t, this.clock = e, this.activeHistogram = build(this.histogramBuildRequest), Recorder.idGenerator++, this.activeHistogram.containingInstanceId = Recorder.idGenerator, this.activeHistogram.startTimeStampMsec = e();
        }
        recordValue(t) {
            this.activeHistogram.recordValue(t);
        }
        recordValueWithCount(t, e) {
            this.activeHistogram.recordValueWithCount(t, e);
        }
        recordValueWithExpectedInterval(t, e) {
            this.activeHistogram.recordValueWithExpectedInterval(t, e);
        }
        getIntervalHistogram(t) {
            if (t) {
                if (t.containingInstanceId !== this.activeHistogram.containingInstanceId) throw "replacement histogram must have been obtained via a previous getIntervalHistogram() call from this Recorder";
            }
            this.inactiveHistogram = t, this.performIntervalSample();
            const e = this.inactiveHistogram;
            return this.inactiveHistogram = null, e;
        }
        getIntervalHistogramInto(t) {
            this.performIntervalSample(), this.inactiveHistogram && (t.add(this.inactiveHistogram), t.startTimeStampMsec = this.inactiveHistogram.startTimeStampMsec, t.endTimeStampMsec = this.inactiveHistogram.endTimeStampMsec);
        }
        reset() {
            this.activeHistogram.reset(), this.activeHistogram.startTimeStampMsec = this.clock();
        }
        performIntervalSample() {
            this.inactiveHistogram || (this.inactiveHistogram = build(this.histogramBuildRequest), this.inactiveHistogram.containingInstanceId = this.activeHistogram.containingInstanceId), this.inactiveHistogram.reset();
            const t = this.activeHistogram;
            this.activeHistogram = this.inactiveHistogram, this.inactiveHistogram = t;
            const e = this.clock();
            this.inactiveHistogram.endTimeStampMsec = e, this.activeHistogram.startTimeStampMsec = e;
        }
        destroy() {
            var t;
            this.activeHistogram.destroy(), null === (t = this.inactiveHistogram) || void 0 === t || t.destroy();
        }
    }
    Recorder.idGenerator = 0, exports1.ByteBuffer = ByteBuffer, exports1.Float64Histogram = Float64Histogram, exports1.HistogramLogReader = HistogramLogReader, exports1.HistogramLogWriter = HistogramLogWriter, exports1.Int16Histogram = Int16Histogram, exports1.Int32Histogram = Int32Histogram, exports1.Int8Histogram = Int8Histogram, exports1.JsHistogram = JsHistogram, exports1.PackedHistogram = PackedHistogram, exports1.Recorder = Recorder, exports1.WasmHistogram = WasmHistogram, exports1.build = build, exports1.decodeFromCompressedBase64 = decodeFromCompressedBase64, exports1.encodeIntoCompressedBase64 = encodeIntoCompressedBase64, exports1.initWebAssembly = initWebAssembly, exports1.initWebAssemblySync = initWebAssemblySync, exports1.listTags = listTags, Object.defineProperty(exports1, "__esModule", {
        value: !0
    });
});

},{"5fbc054b0f181e81":"d5jf4","988556ed4231b5cf":"adOZY"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"adOZY":[function(require,module,exports) {
// Top level file is just a mixin of submodules & constants
"use strict";
var assign = require("348045eb9f6197c9").assign;
var deflate = require("56b639b6aa076763");
var inflate = require("fe93ff52db6ebaa6");
var constants = require("e2707a1304e9de10");
var pako = {};
assign(pako, deflate, inflate, constants);
module.exports = pako;

},{"348045eb9f6197c9":"fFptP","56b639b6aa076763":"9S8fs","fe93ff52db6ebaa6":"ekUz3","e2707a1304e9de10":"hBkF3"}],"fFptP":[function(require,module,exports) {
"use strict";
var TYPED_OK = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
function _has(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
exports.assign = function(obj /*from1, from2, from3, ...*/ ) {
    var sources = Array.prototype.slice.call(arguments, 1);
    while(sources.length){
        var source = sources.shift();
        if (!source) continue;
        if (typeof source !== "object") throw new TypeError(source + "must be non-object");
        for(var p in source)if (_has(source, p)) obj[p] = source[p];
    }
    return obj;
};
// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function(buf, size) {
    if (buf.length === size) return buf;
    if (buf.subarray) return buf.subarray(0, size);
    buf.length = size;
    return buf;
};
var fnTyped = {
    arraySet: function(dest, src, src_offs, len, dest_offs) {
        if (src.subarray && dest.subarray) {
            dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
            return;
        }
        // Fallback to ordinary array
        for(var i = 0; i < len; i++)dest[dest_offs + i] = src[src_offs + i];
    },
    // Join array of chunks to single array.
    flattenChunks: function(chunks) {
        var i, l, len, pos, chunk, result;
        // calculate data length
        len = 0;
        for(i = 0, l = chunks.length; i < l; i++)len += chunks[i].length;
        // join chunks
        result = new Uint8Array(len);
        pos = 0;
        for(i = 0, l = chunks.length; i < l; i++){
            chunk = chunks[i];
            result.set(chunk, pos);
            pos += chunk.length;
        }
        return result;
    }
};
var fnUntyped = {
    arraySet: function(dest, src, src_offs, len, dest_offs) {
        for(var i = 0; i < len; i++)dest[dest_offs + i] = src[src_offs + i];
    },
    // Join array of chunks to single array.
    flattenChunks: function(chunks) {
        return [].concat.apply([], chunks);
    }
};
// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function(on) {
    if (on) {
        exports.Buf8 = Uint8Array;
        exports.Buf16 = Uint16Array;
        exports.Buf32 = Int32Array;
        exports.assign(exports, fnTyped);
    } else {
        exports.Buf8 = Array;
        exports.Buf16 = Array;
        exports.Buf32 = Array;
        exports.assign(exports, fnUntyped);
    }
};
exports.setTyped(TYPED_OK);

},{}],"9S8fs":[function(require,module,exports) {
"use strict";
var zlib_deflate = require("b0ef42cbda6fe16c");
var utils = require("a402d15c852a9ca0");
var strings = require("24460910c8f8079d");
var msg = require("9bcdc2aa7c5a51aa");
var ZStream = require("fa305d4f7d21ccbf");
var toString = Object.prototype.toString;
/* Public constants ==========================================================*/ /* ===========================================================================*/ var Z_NO_FLUSH = 0;
var Z_FINISH = 4;
var Z_OK = 0;
var Z_STREAM_END = 1;
var Z_SYNC_FLUSH = 2;
var Z_DEFAULT_COMPRESSION = -1;
var Z_DEFAULT_STRATEGY = 0;
var Z_DEFLATED = 8;
/* ===========================================================================*/ /**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/ /* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/ /**
 * Deflate.result -> Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
 * push a chunk with explicit flush (call [[Deflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/ /**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/ /**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/ /**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/ function Deflate(options) {
    if (!(this instanceof Deflate)) return new Deflate(options);
    this.options = utils.assign({
        level: Z_DEFAULT_COMPRESSION,
        method: Z_DEFLATED,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Z_DEFAULT_STRATEGY,
        to: ""
    }, options || {});
    var opt = this.options;
    if (opt.raw && opt.windowBits > 0) opt.windowBits = -opt.windowBits;
    else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) opt.windowBits += 16;
    this.err = 0; // error code, if happens (0 = Z_OK)
    this.msg = ""; // error message
    this.ended = false; // used to avoid multiple onEnd() calls
    this.chunks = []; // chunks of compressed data
    this.strm = new ZStream();
    this.strm.avail_out = 0;
    var status = zlib_deflate.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);
    if (status !== Z_OK) throw new Error(msg[status]);
    if (opt.header) zlib_deflate.deflateSetHeader(this.strm, opt.header);
    if (opt.dictionary) {
        var dict;
        // Convert data if needed
        if (typeof opt.dictionary === "string") // If we need to compress text, change encoding to utf8.
        dict = strings.string2buf(opt.dictionary);
        else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") dict = new Uint8Array(opt.dictionary);
        else dict = opt.dictionary;
        status = zlib_deflate.deflateSetDictionary(this.strm, dict);
        if (status !== Z_OK) throw new Error(msg[status]);
        this._dict_set = true;
    }
}
/**
 * Deflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the compression context.
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/ Deflate.prototype.push = function(data, mode) {
    var strm = this.strm;
    var chunkSize = this.options.chunkSize;
    var status, _mode;
    if (this.ended) return false;
    _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH;
    // Convert data if needed
    if (typeof data === "string") // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
    else if (toString.call(data) === "[object ArrayBuffer]") strm.input = new Uint8Array(data);
    else strm.input = data;
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    do {
        if (strm.avail_out === 0) {
            strm.output = new utils.Buf8(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
        }
        status = zlib_deflate.deflate(strm, _mode); /* no bad return value */ 
        if (status !== Z_STREAM_END && status !== Z_OK) {
            this.onEnd(status);
            this.ended = true;
            return false;
        }
        if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
            if (this.options.to === "string") this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
            else this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
    }while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
    // Finalize on the last chunk.
    if (_mode === Z_FINISH) {
        status = zlib_deflate.deflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === Z_OK;
    }
    // callback interim results if Z_SYNC_FLUSH.
    if (_mode === Z_SYNC_FLUSH) {
        this.onEnd(Z_OK);
        strm.avail_out = 0;
        return true;
    }
    return true;
};
/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/ Deflate.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
};
/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/ Deflate.prototype.onEnd = function(status) {
    // On success - join
    if (status === Z_OK) {
        if (this.options.to === "string") this.result = this.chunks.join("");
        else this.result = utils.flattenChunks(this.chunks);
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
};
/**
 * deflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/ function deflate(input, options) {
    var deflator = new Deflate(options);
    deflator.push(input, true);
    // That will never happens, if you don't cheat with options :)
    if (deflator.err) throw deflator.msg || msg[deflator.err];
    return deflator.result;
}
/**
 * deflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/ function deflateRaw(input, options) {
    options = options || {};
    options.raw = true;
    return deflate(input, options);
}
/**
 * gzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/ function gzip(input, options) {
    options = options || {};
    options.gzip = true;
    return deflate(input, options);
}
exports.Deflate = Deflate;
exports.deflate = deflate;
exports.deflateRaw = deflateRaw;
exports.gzip = gzip;

},{"b0ef42cbda6fe16c":"elVQe","a402d15c852a9ca0":"fFptP","24460910c8f8079d":"5INtC","9bcdc2aa7c5a51aa":"kwIoc","fa305d4f7d21ccbf":"5ZapS"}],"elVQe":[function(require,module,exports) {
"use strict";
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
var utils = require("6ecd050ab5cf9e92");
var trees = require("b17b4660c9a756a1");
var adler32 = require("8a0173ce93724f81");
var crc32 = require("9fe740ea87b93669");
var msg = require("86729d90d4373c72");
/* Public constants ==========================================================*/ /* ===========================================================================*/ /* Allowed flush values; see deflate() and inflate() below for details */ var Z_NO_FLUSH = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH = 3;
var Z_FINISH = 4;
var Z_BLOCK = 5;
//var Z_TREES         = 6;
/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */ var Z_OK = 0;
var Z_STREAM_END = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR = -2;
var Z_DATA_ERROR = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR = -5;
//var Z_VERSION_ERROR = -6;
/* compression levels */ //var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;
var Z_FILTERED = 1;
var Z_HUFFMAN_ONLY = 2;
var Z_RLE = 3;
var Z_FIXED = 4;
var Z_DEFAULT_STRATEGY = 0;
/* Possible values of the data_type field (though see inflate()) */ //var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN = 2;
/* The deflate compression method */ var Z_DEFLATED = 8;
/*============================================================================*/ var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */ var MAX_WBITS = 15;
/* 32K LZ77 window */ var DEF_MEM_LEVEL = 8;
var LENGTH_CODES = 29;
/* number of length codes, not counting the special END_BLOCK code */ var LITERALS = 256;
/* number of literal bytes 0..255 */ var L_CODES = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */ var D_CODES = 30;
/* number of distance codes */ var BL_CODES = 19;
/* number of codes used to transfer the bit lengths */ var HEAP_SIZE = 2 * L_CODES + 1;
/* maximum heap size */ var MAX_BITS = 15;
/* All codes must not exceed MAX_BITS bits */ var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
var PRESET_DICT = 0x20;
var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;
var BS_NEED_MORE = 1; /* block not completed, need more input or more output */ 
var BS_BLOCK_DONE = 2; /* block flush performed */ 
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */ 
var BS_FINISH_DONE = 4; /* finish done, accept no more input or output */ 
var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.
function err(strm, errorCode) {
    strm.msg = msg[errorCode];
    return errorCode;
}
function rank(f) {
    return (f << 1) - (f > 4 ? 9 : 0);
}
function zero(buf) {
    var len = buf.length;
    while(--len >= 0)buf[len] = 0;
}
/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */ function flush_pending(strm) {
    var s = strm.state;
    //_tr_flush_bits(s);
    var len = s.pending;
    if (len > strm.avail_out) len = strm.avail_out;
    if (len === 0) return;
    utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
    strm.next_out += len;
    s.pending_out += len;
    strm.total_out += len;
    strm.avail_out -= len;
    s.pending -= len;
    if (s.pending === 0) s.pending_out = 0;
}
function flush_block_only(s, last) {
    trees._tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
    s.block_start = s.strstart;
    flush_pending(s.strm);
}
function put_byte(s, b) {
    s.pending_buf[s.pending++] = b;
}
/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */ function putShortMSB(s, b) {
    //  put_byte(s, (Byte)(b >> 8));
    //  put_byte(s, (Byte)(b & 0xff));
    s.pending_buf[s.pending++] = b >>> 8 & 0xff;
    s.pending_buf[s.pending++] = b & 0xff;
}
/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */ function read_buf(strm, buf, start, size) {
    var len = strm.avail_in;
    if (len > size) len = size;
    if (len === 0) return 0;
    strm.avail_in -= len;
    // zmemcpy(buf, strm->next_in, len);
    utils.arraySet(buf, strm.input, strm.next_in, len, start);
    if (strm.state.wrap === 1) strm.adler = adler32(strm.adler, buf, len, start);
    else if (strm.state.wrap === 2) strm.adler = crc32(strm.adler, buf, len, start);
    strm.next_in += len;
    strm.total_in += len;
    return len;
}
/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */ function longest_match(s, cur_match) {
    var chain_length = s.max_chain_length; /* max hash chain length */ 
    var scan = s.strstart; /* current string */ 
    var match; /* matched string */ 
    var len; /* length of current match */ 
    var best_len = s.prev_length; /* best match length so far */ 
    var nice_match = s.nice_match; /* stop if match long enough */ 
    var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0 /*NIL*/ ;
    var _win = s.window; // shortcut
    var wmask = s.w_mask;
    var prev = s.prev;
    /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */ var strend = s.strstart + MAX_MATCH;
    var scan_end1 = _win[scan + best_len - 1];
    var scan_end = _win[scan + best_len];
    /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */ // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");
    /* Do not waste too much time if we already have a good match: */ if (s.prev_length >= s.good_match) chain_length >>= 2;
    /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */ if (nice_match > s.lookahead) nice_match = s.lookahead;
    // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");
    do {
        // Assert(cur_match < s->strstart, "no future");
        match = cur_match;
        /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */ if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) continue;
        /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */ scan += 2;
        match++;
        // Assert(*scan == *match, "match[2]?");
        /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */ do ;
        while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
        // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");
        len = MAX_MATCH - (strend - scan);
        scan = strend - MAX_MATCH;
        if (len > best_len) {
            s.match_start = cur_match;
            best_len = len;
            if (len >= nice_match) break;
            scan_end1 = _win[scan + best_len - 1];
            scan_end = _win[scan + best_len];
        }
    }while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
    if (best_len <= s.lookahead) return best_len;
    return s.lookahead;
}
/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */ function fill_window(s) {
    var _w_size = s.w_size;
    var p, n, m, more, str;
    //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");
    do {
        more = s.window_size - s.lookahead - s.strstart;
        // JS ints have 32 bit, block below not needed
        /* Deal with !@#$% 64K limit: */ //if (sizeof(int) <= 2) {
        //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
        //        more = wsize;
        //
        //  } else if (more == (unsigned)(-1)) {
        //        /* Very unlikely, but possible on 16 bit machine if
        //         * strstart == 0 && lookahead == 1 (input done a byte at time)
        //         */
        //        more--;
        //    }
        //}
        /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */ if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
            utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
            s.match_start -= _w_size;
            s.strstart -= _w_size;
            /* we now have strstart >= MAX_DIST */ s.block_start -= _w_size;
            /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */ n = s.hash_size;
            p = n;
            do {
                m = s.head[--p];
                s.head[p] = m >= _w_size ? m - _w_size : 0;
            }while (--n);
            n = _w_size;
            p = n;
            do {
                m = s.prev[--p];
                s.prev[p] = m >= _w_size ? m - _w_size : 0;
            /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */ }while (--n);
            more += _w_size;
        }
        if (s.strm.avail_in === 0) break;
        /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */ //Assert(more >= 2, "more < 2");
        n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
        s.lookahead += n;
        /* Initialize the hash value now that we have some input: */ if (s.lookahead + s.insert >= MIN_MATCH) {
            str = s.strstart - s.insert;
            s.ins_h = s.window[str];
            /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */ s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + 1]) & s.hash_mask;
            //#if MIN_MATCH != 3
            //        Call update_hash() MIN_MATCH-3 more times
            //#endif
            while(s.insert){
                /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */ s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
                s.prev[str & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = str;
                str++;
                s.insert--;
                if (s.lookahead + s.insert < MIN_MATCH) break;
            }
        }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */ }while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
/* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */ //  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}
/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */ function deflate_stored(s, flush) {
    /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */ var max_block_size = 0xffff;
    if (max_block_size > s.pending_buf_size - 5) max_block_size = s.pending_buf_size - 5;
    /* Copy as much as possible from input to output: */ for(;;){
        /* Fill the window as much as possible: */ if (s.lookahead <= 1) {
            //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
            //  s->block_start >= (long)s->w_size, "slide too late");
            //      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
            //        s.block_start >= s.w_size)) {
            //        throw  new Error("slide too late");
            //      }
            fill_window(s);
            if (s.lookahead === 0 && flush === Z_NO_FLUSH) return BS_NEED_MORE;
            if (s.lookahead === 0) break;
        /* flush the current block */ }
        //Assert(s->block_start >= 0L, "block gone");
        //    if (s.block_start < 0) throw new Error("block gone");
        s.strstart += s.lookahead;
        s.lookahead = 0;
        /* Emit a stored block if pending_buf will be full: */ var max_start = s.block_start + max_block_size;
        if (s.strstart === 0 || s.strstart >= max_start) {
            /* strstart == 0 is possible when wraparound on 16-bit machine */ s.lookahead = s.strstart - max_start;
            s.strstart = max_start;
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
        /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */ if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = 0;
    if (flush === Z_FINISH) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.strstart > s.block_start) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_NEED_MORE;
}
/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */ function deflate_fast(s, flush) {
    var hash_head; /* head of the hash chain */ 
    var bflush; /* set if current block must be flushed */ 
    for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */ if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);
            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) return BS_NEED_MORE;
            if (s.lookahead === 0) break; /* flush the current block */ 
        }
        /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */ hash_head = 0 /*NIL*/ ;
        if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
        /***/ }
        /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */ if (hash_head !== 0 /*NIL*/  && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */ s.match_length = longest_match(s, hash_head);
        if (s.match_length >= MIN_MATCH) {
            // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only
            /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/ bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */ if (s.match_length <= s.max_lazy_match /*max_insert_length*/  && s.lookahead >= MIN_MATCH) {
                s.match_length--; /* string at strstart already in table */ 
                do {
                    s.strstart++;
                    /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
                    hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                    s.head[s.ins_h] = s.strstart;
                /***/ /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */ }while (--s.match_length !== 0);
                s.strstart++;
            } else {
                s.strstart += s.match_length;
                s.match_length = 0;
                s.ins_h = s.window[s.strstart];
                /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */ s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask;
            //#if MIN_MATCH != 3
            //                Call UPDATE_HASH() MIN_MATCH-3 more times
            //#endif
            /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */ }
        } else {
            /* No match, output a literal byte */ //Tracevv((stderr,"%c", s.window[s.strstart]));
            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
        }
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.last_lit) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
}
/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */ function deflate_slow(s, flush) {
    var hash_head; /* head of hash chain */ 
    var bflush; /* set if current block must be flushed */ 
    var max_insert;
    /* Process the input block. */ for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */ if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);
            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) return BS_NEED_MORE;
            if (s.lookahead === 0) break;
             /* flush the current block */ 
        }
        /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */ hash_head = 0 /*NIL*/ ;
        if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
        /***/ }
        /* Find the longest match, discarding those <= prev_length.
     */ s.prev_length = s.match_length;
        s.prev_match = s.match_start;
        s.match_length = MIN_MATCH - 1;
        if (hash_head !== 0 /*NIL*/  && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
            /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */ s.match_length = longest_match(s, hash_head);
            /* longest_match() sets match_start */ if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096 /*TOO_FAR*/ )) /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */ s.match_length = MIN_MATCH - 1;
        }
        /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */ if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
            max_insert = s.strstart + s.lookahead - MIN_MATCH;
            /* Do not insert strings in hash table beyond this. */ //check_match(s, s.strstart-1, s.prev_match, s.prev_length);
            /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/ bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
            /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */ s.lookahead -= s.prev_length - 1;
            s.prev_length -= 2;
            do if (++s.strstart <= max_insert) {
                /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
                hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = s.strstart;
            /***/ }
            while (--s.prev_length !== 0);
            s.match_available = 0;
            s.match_length = MIN_MATCH - 1;
            s.strstart++;
            if (bflush) {
                /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
                if (s.strm.avail_out === 0) return BS_NEED_MORE;
            /***/ }
        } else if (s.match_available) {
            /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */ //Tracevv((stderr,"%c", s->window[s->strstart-1]));
            /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/ bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
            if (bflush) /*** FLUSH_BLOCK_ONLY(s, 0) ***/ flush_block_only(s, false);
            s.strstart++;
            s.lookahead--;
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        } else {
            /* There is no previous match to compare with, wait for
       * the next step to decide.
       */ s.match_available = 1;
            s.strstart++;
            s.lookahead--;
        }
    }
    //Assert (flush != Z_NO_FLUSH, "no flush?");
    if (s.match_available) {
        //Tracevv((stderr,"%c", s->window[s->strstart-1]));
        /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/ bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
        s.match_available = 0;
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.last_lit) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
}
/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */ function deflate_rle(s, flush) {
    var bflush; /* set if current block must be flushed */ 
    var prev; /* byte at distance one to match */ 
    var scan, strend; /* scan goes up to strend for length of run */ 
    var _win = s.window;
    for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */ if (s.lookahead <= MAX_MATCH) {
            fill_window(s);
            if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) return BS_NEED_MORE;
            if (s.lookahead === 0) break;
             /* flush the current block */ 
        }
        /* See how many times the previous byte repeats */ s.match_length = 0;
        if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
            scan = s.strstart - 1;
            prev = _win[scan];
            if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
                strend = s.strstart + MAX_MATCH;
                do ;
                while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
                s.match_length = MAX_MATCH - (strend - scan);
                if (s.match_length > s.lookahead) s.match_length = s.lookahead;
            }
        //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
        }
        /* Emit match if have run of MIN_MATCH or longer, else emit literal */ if (s.match_length >= MIN_MATCH) {
            //check_match(s, s.strstart, s.strstart - 1, s.match_length);
            /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/ bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            s.strstart += s.match_length;
            s.match_length = 0;
        } else {
            /* No match, output a literal byte */ //Tracevv((stderr,"%c", s->window[s->strstart]));
            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
        }
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = 0;
    if (flush === Z_FINISH) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.last_lit) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
}
/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */ function deflate_huff(s, flush) {
    var bflush; /* set if current block must be flushed */ 
    for(;;){
        /* Make sure that we have a literal to write. */ if (s.lookahead === 0) {
            fill_window(s);
            if (s.lookahead === 0) {
                if (flush === Z_NO_FLUSH) return BS_NEED_MORE;
                break; /* flush the current block */ 
            }
        }
        /* Output a literal byte */ s.match_length = 0;
        //Tracevv((stderr,"%c", s->window[s->strstart]));
        /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = 0;
    if (flush === Z_FINISH) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.last_lit) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
}
/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */ function Config(good_length, max_lazy, nice_length, max_chain, func) {
    this.good_length = good_length;
    this.max_lazy = max_lazy;
    this.nice_length = nice_length;
    this.max_chain = max_chain;
    this.func = func;
}
var configuration_table;
configuration_table = [
    /*      good lazy nice chain */ new Config(0, 0, 0, 0, deflate_stored),
    /* 0 store only */ new Config(4, 4, 8, 4, deflate_fast),
    /* 1 max speed, no lazy matches */ new Config(4, 5, 16, 8, deflate_fast),
    /* 2 */ new Config(4, 6, 32, 32, deflate_fast),
    /* 3 */ new Config(4, 4, 16, 16, deflate_slow),
    /* 4 lazy matches */ new Config(8, 16, 32, 32, deflate_slow),
    /* 5 */ new Config(8, 16, 128, 128, deflate_slow),
    /* 6 */ new Config(8, 32, 128, 256, deflate_slow),
    /* 7 */ new Config(32, 128, 258, 1024, deflate_slow),
    /* 8 */ new Config(32, 258, 258, 4096, deflate_slow)
];
/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */ function lm_init(s) {
    s.window_size = 2 * s.w_size;
    /*** CLEAR_HASH(s); ***/ zero(s.head); // Fill with NIL (= 0);
    /* Set the default configuration parameters:
   */ s.max_lazy_match = configuration_table[s.level].max_lazy;
    s.good_match = configuration_table[s.level].good_length;
    s.nice_match = configuration_table[s.level].nice_length;
    s.max_chain_length = configuration_table[s.level].max_chain;
    s.strstart = 0;
    s.block_start = 0;
    s.lookahead = 0;
    s.insert = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    s.ins_h = 0;
}
function DeflateState() {
    this.strm = null; /* pointer back to this zlib stream */ 
    this.status = 0; /* as the name implies */ 
    this.pending_buf = null; /* output still pending */ 
    this.pending_buf_size = 0; /* size of pending_buf */ 
    this.pending_out = 0; /* next pending byte to output to the stream */ 
    this.pending = 0; /* nb of bytes in the pending buffer */ 
    this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip */ 
    this.gzhead = null; /* gzip header information to write */ 
    this.gzindex = 0; /* where in extra, name, or comment */ 
    this.method = Z_DEFLATED; /* can only be DEFLATED */ 
    this.last_flush = -1; /* value of flush param for previous deflate call */ 
    this.w_size = 0; /* LZ77 window size (32K by default) */ 
    this.w_bits = 0; /* log2(w_size)  (8..16) */ 
    this.w_mask = 0; /* w_size - 1 */ 
    this.window = null;
    /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */ this.window_size = 0;
    /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */ this.prev = null;
    /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */ this.head = null; /* Heads of the hash chains or NIL. */ 
    this.ins_h = 0; /* hash index of string to be inserted */ 
    this.hash_size = 0; /* number of elements in hash table */ 
    this.hash_bits = 0; /* log2(hash_size) */ 
    this.hash_mask = 0; /* hash_size-1 */ 
    this.hash_shift = 0;
    /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */ this.block_start = 0;
    /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */ this.match_length = 0; /* length of best match */ 
    this.prev_match = 0; /* previous match */ 
    this.match_available = 0; /* set if previous match exists */ 
    this.strstart = 0; /* start of string to insert */ 
    this.match_start = 0; /* start of matching string */ 
    this.lookahead = 0; /* number of valid bytes ahead in window */ 
    this.prev_length = 0;
    /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */ this.max_chain_length = 0;
    /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */ this.max_lazy_match = 0;
    /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */ // That's alias to max_lazy_match, don't use directly
    //this.max_insert_length = 0;
    /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */ this.level = 0; /* compression level (1..9) */ 
    this.strategy = 0; /* favor or force Huffman coding*/ 
    this.good_match = 0;
    /* Use a faster search when the previous match is longer than this */ this.nice_match = 0; /* Stop searching when current match exceeds this */ 
    /* used by trees.c: */ /* Didn't use ct_data typedef below to suppress compiler warning */ // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
    // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
    // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
    // Use flat array of DOUBLE size, with interleaved fata,
    // because JS does not support effective
    this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
    this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
    this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
    zero(this.dyn_ltree);
    zero(this.dyn_dtree);
    zero(this.bl_tree);
    this.l_desc = null; /* desc. for literal tree */ 
    this.d_desc = null; /* desc. for distance tree */ 
    this.bl_desc = null; /* desc. for bit length tree */ 
    //ush bl_count[MAX_BITS+1];
    this.bl_count = new utils.Buf16(MAX_BITS + 1);
    /* number of codes at each bit length for an optimal tree */ //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
    this.heap = new utils.Buf16(2 * L_CODES + 1); /* heap used to build the Huffman trees */ 
    zero(this.heap);
    this.heap_len = 0; /* number of elements in the heap */ 
    this.heap_max = 0; /* element of largest frequency */ 
    /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */ this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
    zero(this.depth);
    /* Depth of each subtree used as tie breaker for trees of equal frequency
   */ this.l_buf = 0; /* buffer index for literals or lengths */ 
    this.lit_bufsize = 0;
    /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */ this.last_lit = 0; /* running index in l_buf */ 
    this.d_buf = 0;
    /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */ this.opt_len = 0; /* bit length of current block with optimal trees */ 
    this.static_len = 0; /* bit length of current block with static trees */ 
    this.matches = 0; /* number of string matches in current block */ 
    this.insert = 0; /* bytes at end of window left to insert */ 
    this.bi_buf = 0;
    /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */ this.bi_valid = 0;
/* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */ // Used for window memory init. We safely ignore it for JS. That makes
// sense only for pointers and memory check tools.
//this.high_water = 0;
/* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */ }
function deflateResetKeep(strm) {
    var s;
    if (!strm || !strm.state) return err(strm, Z_STREAM_ERROR);
    strm.total_in = strm.total_out = 0;
    strm.data_type = Z_UNKNOWN;
    s = strm.state;
    s.pending = 0;
    s.pending_out = 0;
    if (s.wrap < 0) s.wrap = -s.wrap;
    s.status = s.wrap ? INIT_STATE : BUSY_STATE;
    strm.adler = s.wrap === 2 ? 0 // crc32(0, Z_NULL, 0)
     : 1; // adler32(0, Z_NULL, 0)
    s.last_flush = Z_NO_FLUSH;
    trees._tr_init(s);
    return Z_OK;
}
function deflateReset(strm) {
    var ret = deflateResetKeep(strm);
    if (ret === Z_OK) lm_init(strm.state);
    return ret;
}
function deflateSetHeader(strm, head) {
    if (!strm || !strm.state) return Z_STREAM_ERROR;
    if (strm.state.wrap !== 2) return Z_STREAM_ERROR;
    strm.state.gzhead = head;
    return Z_OK;
}
function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
    if (!strm) return Z_STREAM_ERROR;
    var wrap = 1;
    if (level === Z_DEFAULT_COMPRESSION) level = 6;
    if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
    } else if (windowBits > 15) {
        wrap = 2; /* write gzip wrapper instead */ 
        windowBits -= 16;
    }
    if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) return err(strm, Z_STREAM_ERROR);
    if (windowBits === 8) windowBits = 9;
    /* until 256-byte window bug fixed */ var s = new DeflateState();
    strm.state = s;
    s.strm = strm;
    s.wrap = wrap;
    s.gzhead = null;
    s.w_bits = windowBits;
    s.w_size = 1 << s.w_bits;
    s.w_mask = s.w_size - 1;
    s.hash_bits = memLevel + 7;
    s.hash_size = 1 << s.hash_bits;
    s.hash_mask = s.hash_size - 1;
    s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
    s.window = new utils.Buf8(s.w_size * 2);
    s.head = new utils.Buf16(s.hash_size);
    s.prev = new utils.Buf16(s.w_size);
    // Don't need mem init magic for JS.
    //s.high_water = 0;  /* nothing written to s->window yet */
    s.lit_bufsize = 1 << memLevel + 6; /* 16K elements by default */ 
    s.pending_buf_size = s.lit_bufsize * 4;
    //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
    //s->pending_buf = (uchf *) overlay;
    s.pending_buf = new utils.Buf8(s.pending_buf_size);
    // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
    //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
    s.d_buf = 1 * s.lit_bufsize;
    //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
    s.l_buf = 3 * s.lit_bufsize;
    s.level = level;
    s.strategy = strategy;
    s.method = method;
    return deflateReset(strm);
}
function deflateInit(strm, level) {
    return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}
function deflate(strm, flush) {
    var old_flush, s;
    var beg, val; // for gzip header write only
    if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
    s = strm.state;
    if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
    s.strm = strm; /* just in case */ 
    old_flush = s.last_flush;
    s.last_flush = flush;
    /* Write the header */ if (s.status === INIT_STATE) {
        if (s.wrap === 2) {
            strm.adler = 0; //crc32(0L, Z_NULL, 0);
            put_byte(s, 31);
            put_byte(s, 139);
            put_byte(s, 8);
            if (!s.gzhead) {
                put_byte(s, 0);
                put_byte(s, 0);
                put_byte(s, 0);
                put_byte(s, 0);
                put_byte(s, 0);
                put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
                put_byte(s, OS_CODE);
                s.status = BUSY_STATE;
            } else {
                put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
                put_byte(s, s.gzhead.time & 0xff);
                put_byte(s, s.gzhead.time >> 8 & 0xff);
                put_byte(s, s.gzhead.time >> 16 & 0xff);
                put_byte(s, s.gzhead.time >> 24 & 0xff);
                put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
                put_byte(s, s.gzhead.os & 0xff);
                if (s.gzhead.extra && s.gzhead.extra.length) {
                    put_byte(s, s.gzhead.extra.length & 0xff);
                    put_byte(s, s.gzhead.extra.length >> 8 & 0xff);
                }
                if (s.gzhead.hcrc) strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
                s.gzindex = 0;
                s.status = EXTRA_STATE;
            }
        } else {
            var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
            var level_flags = -1;
            if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) level_flags = 0;
            else if (s.level < 6) level_flags = 1;
            else if (s.level === 6) level_flags = 2;
            else level_flags = 3;
            header |= level_flags << 6;
            if (s.strstart !== 0) header |= PRESET_DICT;
            header += 31 - header % 31;
            s.status = BUSY_STATE;
            putShortMSB(s, header);
            /* Save the adler32 of the preset dictionary: */ if (s.strstart !== 0) {
                putShortMSB(s, strm.adler >>> 16);
                putShortMSB(s, strm.adler & 0xffff);
            }
            strm.adler = 1; // adler32(0L, Z_NULL, 0);
        }
    }
    //#ifdef GZIP
    if (s.status === EXTRA_STATE) {
        if (s.gzhead.extra /* != Z_NULL*/ ) {
            beg = s.pending; /* start of bytes to update crc */ 
            while(s.gzindex < (s.gzhead.extra.length & 0xffff)){
                if (s.pending === s.pending_buf_size) {
                    if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                    flush_pending(strm);
                    beg = s.pending;
                    if (s.pending === s.pending_buf_size) break;
                }
                put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
                s.gzindex++;
            }
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            if (s.gzindex === s.gzhead.extra.length) {
                s.gzindex = 0;
                s.status = NAME_STATE;
            }
        } else s.status = NAME_STATE;
    }
    if (s.status === NAME_STATE) {
        if (s.gzhead.name /* != Z_NULL*/ ) {
            beg = s.pending; /* start of bytes to update crc */ 
            //int val;
            do {
                if (s.pending === s.pending_buf_size) {
                    if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                    flush_pending(strm);
                    beg = s.pending;
                    if (s.pending === s.pending_buf_size) {
                        val = 1;
                        break;
                    }
                }
                // JS specific: little magic to add zero terminator to end of string
                if (s.gzindex < s.gzhead.name.length) val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
                else val = 0;
                put_byte(s, val);
            }while (val !== 0);
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            if (val === 0) {
                s.gzindex = 0;
                s.status = COMMENT_STATE;
            }
        } else s.status = COMMENT_STATE;
    }
    if (s.status === COMMENT_STATE) {
        if (s.gzhead.comment /* != Z_NULL*/ ) {
            beg = s.pending; /* start of bytes to update crc */ 
            //int val;
            do {
                if (s.pending === s.pending_buf_size) {
                    if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                    flush_pending(strm);
                    beg = s.pending;
                    if (s.pending === s.pending_buf_size) {
                        val = 1;
                        break;
                    }
                }
                // JS specific: little magic to add zero terminator to end of string
                if (s.gzindex < s.gzhead.comment.length) val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
                else val = 0;
                put_byte(s, val);
            }while (val !== 0);
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            if (val === 0) s.status = HCRC_STATE;
        } else s.status = HCRC_STATE;
    }
    if (s.status === HCRC_STATE) {
        if (s.gzhead.hcrc) {
            if (s.pending + 2 > s.pending_buf_size) flush_pending(strm);
            if (s.pending + 2 <= s.pending_buf_size) {
                put_byte(s, strm.adler & 0xff);
                put_byte(s, strm.adler >> 8 & 0xff);
                strm.adler = 0; //crc32(0L, Z_NULL, 0);
                s.status = BUSY_STATE;
            }
        } else s.status = BUSY_STATE;
    }
    //#endif
    /* Flush as much pending output as possible */ if (s.pending !== 0) {
        flush_pending(strm);
        if (strm.avail_out === 0) {
            /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */ s.last_flush = -1;
            return Z_OK;
        }
    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */ } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) return err(strm, Z_BUF_ERROR);
    /* User must not provide more input after the first FINISH: */ if (s.status === FINISH_STATE && strm.avail_in !== 0) return err(strm, Z_BUF_ERROR);
    /* Start a new block or continue the current one.
   */ if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
        var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
        if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) s.status = FINISH_STATE;
        if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
            if (strm.avail_out === 0) s.last_flush = -1;
            return Z_OK;
        /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */ }
        if (bstate === BS_BLOCK_DONE) {
            if (flush === Z_PARTIAL_FLUSH) trees._tr_align(s);
            else if (flush !== Z_BLOCK) {
                trees._tr_stored_block(s, 0, 0, false);
                /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */ if (flush === Z_FULL_FLUSH) {
                    /*** CLEAR_HASH(s); ***/ /* forget history */ zero(s.head); // Fill with NIL (= 0);
                    if (s.lookahead === 0) {
                        s.strstart = 0;
                        s.block_start = 0;
                        s.insert = 0;
                    }
                }
            }
            flush_pending(strm);
            if (strm.avail_out === 0) {
                s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */ 
                return Z_OK;
            }
        }
    }
    //Assert(strm->avail_out > 0, "bug2");
    //if (strm.avail_out <= 0) { throw new Error("bug2");}
    if (flush !== Z_FINISH) return Z_OK;
    if (s.wrap <= 0) return Z_STREAM_END;
    /* Write the trailer */ if (s.wrap === 2) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, strm.adler >> 8 & 0xff);
        put_byte(s, strm.adler >> 16 & 0xff);
        put_byte(s, strm.adler >> 24 & 0xff);
        put_byte(s, strm.total_in & 0xff);
        put_byte(s, strm.total_in >> 8 & 0xff);
        put_byte(s, strm.total_in >> 16 & 0xff);
        put_byte(s, strm.total_in >> 24 & 0xff);
    } else {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
    }
    flush_pending(strm);
    /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */ if (s.wrap > 0) s.wrap = -s.wrap;
    /* write the trailer only once! */ return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}
function deflateEnd(strm) {
    var status;
    if (!strm /*== Z_NULL*/  || !strm.state /*== Z_NULL*/ ) return Z_STREAM_ERROR;
    status = strm.state.status;
    if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) return err(strm, Z_STREAM_ERROR);
    strm.state = null;
    return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}
/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */ function deflateSetDictionary(strm, dictionary) {
    var dictLength = dictionary.length;
    var s;
    var str, n;
    var wrap;
    var avail;
    var next;
    var input;
    var tmpDict;
    if (!strm /*== Z_NULL*/  || !strm.state /*== Z_NULL*/ ) return Z_STREAM_ERROR;
    s = strm.state;
    wrap = s.wrap;
    if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) return Z_STREAM_ERROR;
    /* when using zlib wrappers, compute Adler-32 for provided dictionary */ if (wrap === 1) /* adler32(strm->adler, dictionary, dictLength); */ strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
    s.wrap = 0; /* avoid computing Adler-32 in read_buf */ 
    /* if dictionary would fill window, just replace the history */ if (dictLength >= s.w_size) {
        if (wrap === 0) {
            /*** CLEAR_HASH(s); ***/ zero(s.head); // Fill with NIL (= 0);
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
        }
        /* use the tail */ // dictionary = dictionary.slice(dictLength - s.w_size);
        tmpDict = new utils.Buf8(s.w_size);
        utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
        dictionary = tmpDict;
        dictLength = s.w_size;
    }
    /* insert dictionary into window and hash */ avail = strm.avail_in;
    next = strm.next_in;
    input = strm.input;
    strm.avail_in = dictLength;
    strm.next_in = 0;
    strm.input = dictionary;
    fill_window(s);
    while(s.lookahead >= MIN_MATCH){
        str = s.strstart;
        n = s.lookahead - (MIN_MATCH - 1);
        do {
            /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */ s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
        }while (--n);
        s.strstart = str;
        s.lookahead = MIN_MATCH - 1;
        fill_window(s);
    }
    s.strstart += s.lookahead;
    s.block_start = s.strstart;
    s.insert = s.lookahead;
    s.lookahead = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    strm.next_in = next;
    strm.input = input;
    strm.avail_in = avail;
    s.wrap = wrap;
    return Z_OK;
}
exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateInfo = "pako deflate (from Nodeca project)"; /* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/ 

},{"6ecd050ab5cf9e92":"fFptP","b17b4660c9a756a1":"eMB47","8a0173ce93724f81":"goy7x","9fe740ea87b93669":"9qfRD","86729d90d4373c72":"kwIoc"}],"eMB47":[function(require,module,exports) {
"use strict";
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
/* eslint-disable space-unary-ops */ var utils = require("f7e73d4e313a2bb7");
/* Public constants ==========================================================*/ /* ===========================================================================*/ //var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED = 4;
//var Z_DEFAULT_STRATEGY  = 0;
/* Possible values of the data_type field (though see inflate()) */ var Z_BINARY = 0;
var Z_TEXT = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN = 2;
/*============================================================================*/ function zero(buf) {
    var len = buf.length;
    while(--len >= 0)buf[len] = 0;
}
// From zutil.h
var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES = 2;
/* The three kinds of block type */ var MIN_MATCH = 3;
var MAX_MATCH = 258;
/* The minimum and maximum match lengths */ // From deflate.h
/* ===========================================================================
 * Internal compression state.
 */ var LENGTH_CODES = 29;
/* number of length codes, not counting the special END_BLOCK code */ var LITERALS = 256;
/* number of literal bytes 0..255 */ var L_CODES = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */ var D_CODES = 30;
/* number of distance codes */ var BL_CODES = 19;
/* number of codes used to transfer the bit lengths */ var HEAP_SIZE = 2 * L_CODES + 1;
/* maximum heap size */ var MAX_BITS = 15;
/* All codes must not exceed MAX_BITS bits */ var Buf_size = 16;
/* size of bit buffer in bi_buf */ /* ===========================================================================
 * Constants
 */ var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */ var END_BLOCK = 256;
/* end of block literal code */ var REP_3_6 = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */ var REPZ_3_10 = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */ var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */ /* eslint-disable comma-spacing,array-bracket-spacing */ var extra_lbits = /* extra bits for each length code */ [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0
];
var extra_dbits = /* extra bits for each distance code */ [
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
];
var extra_blbits = /* extra bits for each bit length code */ [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    3,
    7
];
var bl_order = [
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
];
/* eslint-enable comma-spacing,array-bracket-spacing */ /* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */ /* ===========================================================================
 * Local data. These are initialized only once.
 */ // We pre-fill arrays with 0 to avoid uninitialized gaps
var DIST_CODE_LEN = 512; /* see definition of array dist_code below */ 
// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
var static_ltree = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */ var static_dtree = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */ var _dist_code = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */ var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */ var base_length = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */ var base_dist = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */ function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
    this.static_tree = static_tree; /* static tree or NULL */ 
    this.extra_bits = extra_bits; /* extra bits for each code or NULL */ 
    this.extra_base = extra_base; /* base index for extra_bits */ 
    this.elems = elems; /* max number of elements in the tree */ 
    this.max_length = max_length; /* max bit length for the codes */ 
    // show if `static_tree` has data or dummy - needed for monomorphic objects
    this.has_stree = static_tree && static_tree.length;
}
var static_l_desc;
var static_d_desc;
var static_bl_desc;
function TreeDesc(dyn_tree, stat_desc) {
    this.dyn_tree = dyn_tree; /* the dynamic tree */ 
    this.max_code = 0; /* largest code with non zero frequency */ 
    this.stat_desc = stat_desc; /* the corresponding static tree */ 
}
function d_code(dist) {
    return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}
/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */ function put_short(s, w) {
    //    put_byte(s, (uch)((w) & 0xff));
    //    put_byte(s, (uch)((ush)(w) >> 8));
    s.pending_buf[s.pending++] = w & 0xff;
    s.pending_buf[s.pending++] = w >>> 8 & 0xff;
}
/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */ function send_bits(s, value, length) {
    if (s.bi_valid > Buf_size - length) {
        s.bi_buf |= value << s.bi_valid & 0xffff;
        put_short(s, s.bi_buf);
        s.bi_buf = value >> Buf_size - s.bi_valid;
        s.bi_valid += length - Buf_size;
    } else {
        s.bi_buf |= value << s.bi_valid & 0xffff;
        s.bi_valid += length;
    }
}
function send_code(s, c, tree) {
    send_bits(s, tree[c * 2], tree[c * 2 + 1]);
}
/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */ function bi_reverse(code, len) {
    var res = 0;
    do {
        res |= code & 1;
        code >>>= 1;
        res <<= 1;
    }while (--len > 0);
    return res >>> 1;
}
/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */ function bi_flush(s) {
    if (s.bi_valid === 16) {
        put_short(s, s.bi_buf);
        s.bi_buf = 0;
        s.bi_valid = 0;
    } else if (s.bi_valid >= 8) {
        s.pending_buf[s.pending++] = s.bi_buf & 0xff;
        s.bi_buf >>= 8;
        s.bi_valid -= 8;
    }
}
/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */ function gen_bitlen(s, desc) //    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
    var tree = desc.dyn_tree;
    var max_code = desc.max_code;
    var stree = desc.stat_desc.static_tree;
    var has_stree = desc.stat_desc.has_stree;
    var extra = desc.stat_desc.extra_bits;
    var base = desc.stat_desc.extra_base;
    var max_length = desc.stat_desc.max_length;
    var h; /* heap index */ 
    var n, m; /* iterate over the tree elements */ 
    var bits; /* bit length */ 
    var xbits; /* extra bits */ 
    var f; /* frequency */ 
    var overflow = 0; /* number of elements with bit length too large */ 
    for(bits = 0; bits <= MAX_BITS; bits++)s.bl_count[bits] = 0;
    /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */ tree[s.heap[s.heap_max] * 2 + 1] = 0; /* root of the heap */ 
    for(h = s.heap_max + 1; h < HEAP_SIZE; h++){
        n = s.heap[h];
        bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
        if (bits > max_length) {
            bits = max_length;
            overflow++;
        }
        tree[n * 2 + 1] = bits;
        /* We overwrite tree[n].Dad which is no longer needed */ if (n > max_code) continue;
         /* not a leaf node */ 
        s.bl_count[bits]++;
        xbits = 0;
        if (n >= base) xbits = extra[n - base];
        f = tree[n * 2] /*.Freq*/ ;
        s.opt_len += f * (bits + xbits);
        if (has_stree) s.static_len += f * (stree[n * 2 + 1] + xbits);
    }
    if (overflow === 0) return;
    // Trace((stderr,"\nbit length overflow\n"));
    /* This happens for example on obj2 and pic of the Calgary corpus */ /* Find the first bit length which could increase: */ do {
        bits = max_length - 1;
        while(s.bl_count[bits] === 0)bits--;
        s.bl_count[bits]--; /* move one leaf down the tree */ 
        s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */ 
        s.bl_count[max_length]--;
        /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */ overflow -= 2;
    }while (overflow > 0);
    /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */ for(bits = max_length; bits !== 0; bits--){
        n = s.bl_count[bits];
        while(n !== 0){
            m = s.heap[--h];
            if (m > max_code) continue;
            if (tree[m * 2 + 1] !== bits) {
                // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
                s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2] /*.Freq*/ ;
                tree[m * 2 + 1] = bits;
            }
            n--;
        }
    }
}
/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */ function gen_codes(tree, max_code, bl_count) //    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
    var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */ 
    var code = 0; /* running code value */ 
    var bits; /* bit index */ 
    var n; /* code index */ 
    /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */ for(bits = 1; bits <= MAX_BITS; bits++)next_code[bits] = code = code + bl_count[bits - 1] << 1;
    /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */ //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
    //        "inconsistent bit counts");
    //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));
    for(n = 0; n <= max_code; n++){
        var len = tree[n * 2 + 1] /*.Len*/ ;
        if (len === 0) continue;
        /* Now reverse the bits */ tree[n * 2] = bi_reverse(next_code[len]++, len);
    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
    }
}
/* ===========================================================================
 * Initialize the various 'constant' tables.
 */ function tr_static_init() {
    var n; /* iterates over tree elements */ 
    var bits; /* bit counter */ 
    var length; /* length value */ 
    var code; /* code value */ 
    var dist; /* distance index */ 
    var bl_count = new Array(MAX_BITS + 1);
    /* number of codes at each bit length for an optimal tree */ // do check in _tr_init()
    //if (static_init_done) return;
    /* For some embedded targets, global variables are not initialized: */ /*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/ /* Initialize the mapping length (0..255) -> length code (0..28) */ length = 0;
    for(code = 0; code < LENGTH_CODES - 1; code++){
        base_length[code] = length;
        for(n = 0; n < 1 << extra_lbits[code]; n++)_length_code[length++] = code;
    }
    //Assert (length == 256, "tr_static_init: length != 256");
    /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */ _length_code[length - 1] = code;
    /* Initialize the mapping dist (0..32K) -> dist code (0..29) */ dist = 0;
    for(code = 0; code < 16; code++){
        base_dist[code] = dist;
        for(n = 0; n < 1 << extra_dbits[code]; n++)_dist_code[dist++] = code;
    }
    //Assert (dist == 256, "tr_static_init: dist != 256");
    dist >>= 7; /* from now on, all distances are divided by 128 */ 
    for(; code < D_CODES; code++){
        base_dist[code] = dist << 7;
        for(n = 0; n < 1 << extra_dbits[code] - 7; n++)_dist_code[256 + dist++] = code;
    }
    //Assert (dist == 256, "tr_static_init: 256+dist != 512");
    /* Construct the codes of the static literal tree */ for(bits = 0; bits <= MAX_BITS; bits++)bl_count[bits] = 0;
    n = 0;
    while(n <= 143){
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
    }
    while(n <= 255){
        static_ltree[n * 2 + 1] = 9;
        n++;
        bl_count[9]++;
    }
    while(n <= 279){
        static_ltree[n * 2 + 1] = 7;
        n++;
        bl_count[7]++;
    }
    while(n <= 287){
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
    }
    /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */ gen_codes(static_ltree, L_CODES + 1, bl_count);
    /* The static distance tree is trivial: */ for(n = 0; n < D_CODES; n++){
        static_dtree[n * 2 + 1] = 5;
        static_dtree[n * 2] = bi_reverse(n, 5);
    }
    // Now data ready and we can init static trees
    static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
    static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
    static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
//static_init_done = true;
}
/* ===========================================================================
 * Initialize a new block.
 */ function init_block(s) {
    var n; /* iterates over tree elements */ 
    /* Initialize the trees. */ for(n = 0; n < L_CODES; n++)s.dyn_ltree[n * 2] = 0;
    for(n = 0; n < D_CODES; n++)s.dyn_dtree[n * 2] = 0;
    for(n = 0; n < BL_CODES; n++)s.bl_tree[n * 2] = 0;
    s.dyn_ltree[END_BLOCK * 2] = 1;
    s.opt_len = s.static_len = 0;
    s.last_lit = s.matches = 0;
}
/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */ function bi_windup(s) {
    if (s.bi_valid > 8) put_short(s, s.bi_buf);
    else if (s.bi_valid > 0) //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
    s.bi_buf = 0;
    s.bi_valid = 0;
}
/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */ function copy_block(s, buf, len, header) //DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
    bi_windup(s); /* align on byte boundary */ 
    if (header) {
        put_short(s, len);
        put_short(s, ~len);
    }
    //  while (len--) {
    //    put_byte(s, *buf++);
    //  }
    utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
    s.pending += len;
}
/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */ function smaller(tree, n, m, depth) {
    var _n2 = n * 2;
    var _m2 = m * 2;
    return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
}
/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */ function pqdownheap(s, tree, k) //    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
    var v = s.heap[k];
    var j = k << 1; /* left son of k */ 
    while(j <= s.heap_len){
        /* Set j to the smallest of the two sons: */ if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) j++;
        /* Exit if v is smaller than both sons */ if (smaller(tree, v, s.heap[j], s.depth)) break;
        /* Exchange v with the smallest son */ s.heap[k] = s.heap[j];
        k = j;
        /* And continue down the tree, setting j to the left son of k */ j <<= 1;
    }
    s.heap[k] = v;
}
// inlined manually
// var SMALLEST = 1;
/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */ function compress_block(s, ltree, dtree) //    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
    var dist; /* distance of matched string */ 
    var lc; /* match length or unmatched char (if dist == 0) */ 
    var lx = 0; /* running index in l_buf */ 
    var code; /* the code to send */ 
    var extra; /* number of extra bits to send */ 
    if (s.last_lit !== 0) do {
        dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
        lc = s.pending_buf[s.l_buf + lx];
        lx++;
        if (dist === 0) send_code(s, lc, ltree); /* send a literal byte */ 
        else {
            /* Here, lc is the match length - MIN_MATCH */ code = _length_code[lc];
            send_code(s, code + LITERALS + 1, ltree); /* send the length code */ 
            extra = extra_lbits[code];
            if (extra !== 0) {
                lc -= base_length[code];
                send_bits(s, lc, extra); /* send the extra length bits */ 
            }
            dist--; /* dist is now the match distance - 1 */ 
            code = d_code(dist);
            //Assert (code < D_CODES, "bad d_code");
            send_code(s, code, dtree); /* send the distance code */ 
            extra = extra_dbits[code];
            if (extra !== 0) {
                dist -= base_dist[code];
                send_bits(s, dist, extra); /* send the extra distance bits */ 
            }
        } /* literal or match pair ? */ 
    /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */ //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
    //       "pendingBuf overflow");
    }while (lx < s.last_lit);
    send_code(s, END_BLOCK, ltree);
}
/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */ function build_tree(s, desc) //    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
    var tree = desc.dyn_tree;
    var stree = desc.stat_desc.static_tree;
    var has_stree = desc.stat_desc.has_stree;
    var elems = desc.stat_desc.elems;
    var n, m; /* iterate over heap elements */ 
    var max_code = -1; /* largest code with non zero frequency */ 
    var node; /* new node being created */ 
    /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */ s.heap_len = 0;
    s.heap_max = HEAP_SIZE;
    for(n = 0; n < elems; n++)if (tree[n * 2] !== 0) {
        s.heap[++s.heap_len] = max_code = n;
        s.depth[n] = 0;
    } else tree[n * 2 + 1] = 0;
    /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */ while(s.heap_len < 2){
        node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
        tree[node * 2] = 1;
        s.depth[node] = 0;
        s.opt_len--;
        if (has_stree) s.static_len -= stree[node * 2 + 1] /*.Len*/ ;
    /* node is 0 or 1 so it does not have extra bits */ }
    desc.max_code = max_code;
    /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */ for(n = s.heap_len >> 1 /*int /2*/ ; n >= 1; n--)pqdownheap(s, tree, n);
    /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */ node = elems; /* next internal node of the tree */ 
    do {
        //pqremove(s, tree, n);  /* n = node of least frequency */
        /*** pqremove ***/ n = s.heap[1 /*SMALLEST*/ ];
        s.heap[1 /*SMALLEST*/ ] = s.heap[s.heap_len--];
        pqdownheap(s, tree, 1 /*SMALLEST*/ );
        /***/ m = s.heap[1 /*SMALLEST*/ ]; /* m = node of next least frequency */ 
        s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */ 
        s.heap[--s.heap_max] = m;
        /* Create a new node father of n and m */ tree[node * 2] = tree[n * 2] + tree[m * 2] /*.Freq*/ ;
        s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
        tree[n * 2 + 1] = tree[m * 2 + 1] = node;
        /* and insert the new node in the heap */ s.heap[1 /*SMALLEST*/ ] = node++;
        pqdownheap(s, tree, 1 /*SMALLEST*/ );
    }while (s.heap_len >= 2);
    s.heap[--s.heap_max] = s.heap[1 /*SMALLEST*/ ];
    /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */ gen_bitlen(s, desc);
    /* The field len is now set, we can generate the bit codes */ gen_codes(tree, max_code, s.bl_count);
}
/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */ function scan_tree(s, tree, max_code) //    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
    var n; /* iterates over all tree elements */ 
    var prevlen = -1; /* last emitted length */ 
    var curlen; /* length of current code */ 
    var nextlen = tree[1] /*.Len*/ ; /* length of next code */ 
    var count = 0; /* repeat count of the current code */ 
    var max_count = 7; /* max repeat count */ 
    var min_count = 4; /* min repeat count */ 
    if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
    }
    tree[(max_code + 1) * 2 + 1] = 0xffff; /* guard */ 
    for(n = 0; n <= max_code; n++){
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1] /*.Len*/ ;
        if (++count < max_count && curlen === nextlen) continue;
        else if (count < min_count) s.bl_tree[curlen * 2] += count;
        else if (curlen !== 0) {
            if (curlen !== prevlen) s.bl_tree[curlen * 2]++;
            s.bl_tree[REP_3_6 * 2]++;
        } else if (count <= 10) s.bl_tree[REPZ_3_10 * 2]++;
        else s.bl_tree[REPZ_11_138 * 2]++;
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
        } else {
            max_count = 7;
            min_count = 4;
        }
    }
}
/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */ function send_tree(s, tree, max_code) //    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
    var n; /* iterates over all tree elements */ 
    var prevlen = -1; /* last emitted length */ 
    var curlen; /* length of current code */ 
    var nextlen = tree[1] /*.Len*/ ; /* length of next code */ 
    var count = 0; /* repeat count of the current code */ 
    var max_count = 7; /* max repeat count */ 
    var min_count = 4; /* min repeat count */ 
    /* tree[max_code+1].Len = -1; */ /* guard already set */ if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
    }
    for(n = 0; n <= max_code; n++){
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1] /*.Len*/ ;
        if (++count < max_count && curlen === nextlen) continue;
        else if (count < min_count) do send_code(s, curlen, s.bl_tree);
        while (--count !== 0);
        else if (curlen !== 0) {
            if (curlen !== prevlen) {
                send_code(s, curlen, s.bl_tree);
                count--;
            }
            //Assert(count >= 3 && count <= 6, " 3_6?");
            send_code(s, REP_3_6, s.bl_tree);
            send_bits(s, count - 3, 2);
        } else if (count <= 10) {
            send_code(s, REPZ_3_10, s.bl_tree);
            send_bits(s, count - 3, 3);
        } else {
            send_code(s, REPZ_11_138, s.bl_tree);
            send_bits(s, count - 11, 7);
        }
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
        } else {
            max_count = 7;
            min_count = 4;
        }
    }
}
/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */ function build_bl_tree(s) {
    var max_blindex; /* index of last bit length code of non zero freq */ 
    /* Determine the bit length frequencies for literal and distance trees */ scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
    scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
    /* Build the bit length tree: */ build_tree(s, s.bl_desc);
    /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */ /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */ for(max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--){
        if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) break;
    }
    /* Update opt_len to include the bit length tree and counts */ s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
    //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
    //        s->opt_len, s->static_len));
    return max_blindex;
}
/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */ function send_all_trees(s, lcodes, dcodes, blcodes) //    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
    var rank; /* index in bl_order */ 
    //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
    //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
    //        "too many codes");
    //Tracev((stderr, "\nbl counts: "));
    send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */ 
    send_bits(s, dcodes - 1, 5);
    send_bits(s, blcodes - 4, 4); /* not -3 as stated in appnote.txt */ 
    for(rank = 0; rank < blcodes; rank++)//Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
    //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));
    send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */ 
    //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));
    send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */ 
//Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}
/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */ function detect_data_type(s) {
    /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */ var black_mask = 0xf3ffc07f;
    var n;
    /* Check for non-textual ("black-listed") bytes. */ for(n = 0; n <= 31; n++, black_mask >>>= 1){
        if (black_mask & 1 && s.dyn_ltree[n * 2] !== 0) return Z_BINARY;
    }
    /* Check for textual ("white-listed") bytes. */ if (s.dyn_ltree[18] !== 0 || s.dyn_ltree[20] !== 0 || s.dyn_ltree[26] !== 0) return Z_TEXT;
    for(n = 32; n < LITERALS; n++){
        if (s.dyn_ltree[n * 2] !== 0) return Z_TEXT;
    }
    /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */ return Z_BINARY;
}
var static_init_done = false;
/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */ function _tr_init(s) {
    if (!static_init_done) {
        tr_static_init();
        static_init_done = true;
    }
    s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
    s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
    s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
    s.bi_buf = 0;
    s.bi_valid = 0;
    /* Initialize the first block of the first file: */ init_block(s);
}
/* ===========================================================================
 * Send a stored block
 */ function _tr_stored_block(s, buf, stored_len, last) //DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
    send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3); /* send block type */ 
    copy_block(s, buf, stored_len, true); /* with header */ 
}
/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */ function _tr_align(s) {
    send_bits(s, STATIC_TREES << 1, 3);
    send_code(s, END_BLOCK, static_ltree);
    bi_flush(s);
}
/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */ function _tr_flush_block(s, buf, stored_len, last) //DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
    var opt_lenb, static_lenb; /* opt_len and static_len in bytes */ 
    var max_blindex = 0; /* index of last bit length code of non zero freq */ 
    /* Build the Huffman trees unless a stored block is forced */ if (s.level > 0) {
        /* Check if the file is binary or text */ if (s.strm.data_type === Z_UNKNOWN) s.strm.data_type = detect_data_type(s);
        /* Construct the literal and distance trees */ build_tree(s, s.l_desc);
        // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
        //        s->static_len));
        build_tree(s, s.d_desc);
        // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
        //        s->static_len));
        /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */ /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */ max_blindex = build_bl_tree(s);
        /* Determine the best encoding. Compute the block lengths in bytes. */ opt_lenb = s.opt_len + 3 + 7 >>> 3;
        static_lenb = s.static_len + 3 + 7 >>> 3;
        // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
        //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
        //        s->last_lit));
        if (static_lenb <= opt_lenb) opt_lenb = static_lenb;
    } else // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */ 
    if (stored_len + 4 <= opt_lenb && buf !== -1) /* 4: two words for the lengths */ /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */ _tr_stored_block(s, buf, stored_len, last);
    else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
        send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
        compress_block(s, static_ltree, static_dtree);
    } else {
        send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
        send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
        compress_block(s, s.dyn_ltree, s.dyn_dtree);
    }
    // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
    /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */ init_block(s);
    if (last) bi_windup(s);
// Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
//       s->compressed_len-7*last));
}
/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */ function _tr_tally(s, dist, lc) //    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
    //var out_length, in_length, dcode;
    s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 0xff;
    s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;
    s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
    s.last_lit++;
    if (dist === 0) /* lc is the unmatched char */ s.dyn_ltree[lc * 2]++;
    else {
        s.matches++;
        /* Here, lc is the match length - MIN_MATCH */ dist--; /* dist = match distance - 1 */ 
        //Assert((ush)dist < (ush)MAX_DIST(s) &&
        //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
        //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");
        s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
        s.dyn_dtree[d_code(dist) * 2]++;
    }
    // (!) This block is disabled in zlib defaults,
    // don't enable it for binary compatibility
    //#ifdef TRUNCATE_BLOCK
    //  /* Try to guess if it is profitable to stop the current block here */
    //  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
    //    /* Compute an upper bound for the compressed length */
    //    out_length = s.last_lit*8;
    //    in_length = s.strstart - s.block_start;
    //
    //    for (dcode = 0; dcode < D_CODES; dcode++) {
    //      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
    //    }
    //    out_length >>>= 3;
    //    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
    //    //       s->last_lit, in_length, out_length,
    //    //       100L - out_length*100L/in_length));
    //    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
    //      return true;
    //    }
    //  }
    //#endif
    return s.last_lit === s.lit_bufsize - 1;
/* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */ }
exports._tr_init = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;

},{"f7e73d4e313a2bb7":"fFptP"}],"goy7x":[function(require,module,exports) {
"use strict";
// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function adler32(adler, buf, len, pos) {
    var s1 = adler & 0xffff | 0, s2 = adler >>> 16 & 0xffff | 0, n = 0;
    while(len !== 0){
        // Set limit ~ twice less than 5552, to keep
        // s2 in 31-bits, because we force signed ints.
        // in other case %= will fail.
        n = len > 2000 ? 2000 : len;
        len -= n;
        do {
            s1 = s1 + buf[pos++] | 0;
            s2 = s2 + s1 | 0;
        }while (--n);
        s1 %= 65521;
        s2 %= 65521;
    }
    return s1 | s2 << 16 | 0;
}
module.exports = adler32;

},{}],"9qfRD":[function(require,module,exports) {
"use strict";
// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// Use ordinary array, since untyped makes no boost here
function makeTable() {
    var c, table = [];
    for(var n = 0; n < 256; n++){
        c = n;
        for(var k = 0; k < 8; k++)c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
        table[n] = c;
    }
    return table;
}
// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();
function crc32(crc, buf, len, pos) {
    var t = crcTable, end = pos + len;
    crc ^= -1;
    for(var i = pos; i < end; i++)crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 0xFF];
    return crc ^ -1; // >>> 0;
}
module.exports = crc32;

},{}],"kwIoc":[function(require,module,exports) {
"use strict";
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
module.exports = {
    2: "need dictionary",
    /* Z_NEED_DICT       2  */ 1: "stream end",
    /* Z_STREAM_END      1  */ 0: "",
    /* Z_OK              0  */ "-1": "file error",
    /* Z_ERRNO         (-1) */ "-2": "stream error",
    /* Z_STREAM_ERROR  (-2) */ "-3": "data error",
    /* Z_DATA_ERROR    (-3) */ "-4": "insufficient memory",
    /* Z_MEM_ERROR     (-4) */ "-5": "buffer error",
    /* Z_BUF_ERROR     (-5) */ "-6": "incompatible version" /* Z_VERSION_ERROR (-6) */ 
};

},{}],"5INtC":[function(require,module,exports) {
// String encode/decode helpers
"use strict";
var utils = require("7ca9172d5a6b1798");
// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;
try {
    String.fromCharCode.apply(null, [
        0
    ]);
} catch (__) {
    STR_APPLY_OK = false;
}
try {
    String.fromCharCode.apply(null, new Uint8Array(1));
} catch (__) {
    STR_APPLY_UIA_OK = false;
}
// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for(var q = 0; q < 256; q++)_utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start
// convert string to array (typed, when possible)
exports.string2buf = function(str) {
    var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
    // count binary size
    for(m_pos = 0; m_pos < str_len; m_pos++){
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
    }
    // allocate buffer
    buf = new utils.Buf8(buf_len);
    // convert
    for(i = 0, m_pos = 0; i < buf_len; m_pos++){
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        if (c < 0x80) /* one byte */ buf[i++] = c;
        else if (c < 0x800) {
            /* two bytes */ buf[i++] = 0xC0 | c >>> 6;
            buf[i++] = 0x80 | c & 0x3f;
        } else if (c < 0x10000) {
            /* three bytes */ buf[i++] = 0xE0 | c >>> 12;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
        } else {
            /* four bytes */ buf[i++] = 0xf0 | c >>> 18;
            buf[i++] = 0x80 | c >>> 12 & 0x3f;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
        }
    }
    return buf;
};
// Helper (used in 2 places)
function buf2binstring(buf, len) {
    // On Chrome, the arguments in a function call that are allowed is `65534`.
    // If the length of the buffer is smaller than that, we can use this optimization,
    // otherwise we will take a slower path.
    if (len < 65534) {
        if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
    var result = "";
    for(var i = 0; i < len; i++)result += String.fromCharCode(buf[i]);
    return result;
}
// Convert byte array to binary string
exports.buf2binstring = function(buf) {
    return buf2binstring(buf, buf.length);
};
// Convert binary string (typed, when possible)
exports.binstring2buf = function(str) {
    var buf = new utils.Buf8(str.length);
    for(var i = 0, len = buf.length; i < len; i++)buf[i] = str.charCodeAt(i);
    return buf;
};
// convert array to string
exports.buf2string = function(buf, max) {
    var i, out, c, c_len;
    var len = max || buf.length;
    // Reserve max possible length (2 words per char)
    // NB: by unknown reasons, Array is significantly faster for
    //     String.fromCharCode.apply than Uint16Array.
    var utf16buf = new Array(len * 2);
    for(out = 0, i = 0; i < len;){
        c = buf[i++];
        // quick process ascii
        if (c < 0x80) {
            utf16buf[out++] = c;
            continue;
        }
        c_len = _utf8len[c];
        // skip 5 & 6 byte codes
        if (c_len > 4) {
            utf16buf[out++] = 0xfffd;
            i += c_len - 1;
            continue;
        }
        // apply mask on first byte
        c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
        // join the rest
        while(c_len > 1 && i < len){
            c = c << 6 | buf[i++] & 0x3f;
            c_len--;
        }
        // terminated by end of string?
        if (c_len > 1) {
            utf16buf[out++] = 0xfffd;
            continue;
        }
        if (c < 0x10000) utf16buf[out++] = c;
        else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
            utf16buf[out++] = 0xdc00 | c & 0x3ff;
        }
    }
    return buf2binstring(utf16buf, out);
};
// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function(buf, max) {
    var pos;
    max = max || buf.length;
    if (max > buf.length) max = buf.length;
    // go back from last position, until start of sequence found
    pos = max - 1;
    while(pos >= 0 && (buf[pos] & 0xC0) === 0x80)pos--;
    // Very small and broken sequence,
    // return max, because we should return something anyway.
    if (pos < 0) return max;
    // If we came to start of buffer - that means buffer is too small,
    // return max too.
    if (pos === 0) return max;
    return pos + _utf8len[buf[pos]] > max ? pos : max;
};

},{"7ca9172d5a6b1798":"fFptP"}],"5ZapS":[function(require,module,exports) {
"use strict";
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function ZStream() {
    /* next input byte */ this.input = null; // JS specific, because we have no pointers
    this.next_in = 0;
    /* number of bytes available at input */ this.avail_in = 0;
    /* total number of input bytes read so far */ this.total_in = 0;
    /* next output byte should be put there */ this.output = null; // JS specific, because we have no pointers
    this.next_out = 0;
    /* remaining free space at output */ this.avail_out = 0;
    /* total number of bytes output so far */ this.total_out = 0;
    /* last error message, NULL if no error */ this.msg = "" /*Z_NULL*/ ;
    /* not visible by applications */ this.state = null;
    /* best guess about the data type: binary or text */ this.data_type = 2 /*Z_UNKNOWN*/ ;
    /* adler32 value of the uncompressed data */ this.adler = 0;
}
module.exports = ZStream;

},{}],"ekUz3":[function(require,module,exports) {
"use strict";
var zlib_inflate = require("dd64f509a13f2ae4");
var utils = require("4c9b744bf1bb68c7");
var strings = require("a6a879671ada369a");
var c = require("dbf920c388b193d4");
var msg = require("a85d599be6e8296a");
var ZStream = require("2cb10505c6d74721");
var GZheader = require("e0b11c8ff712dfd");
var toString = Object.prototype.toString;
/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/ /* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/ /**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/ /**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/ /**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/ /**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/ function Inflate(options) {
    if (!(this instanceof Inflate)) return new Inflate(options);
    this.options = utils.assign({
        chunkSize: 16384,
        windowBits: 0,
        to: ""
    }, options || {});
    var opt = this.options;
    // Force window size for `raw` data, if not set directly,
    // because we have no header for autodetect.
    if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
        opt.windowBits = -opt.windowBits;
        if (opt.windowBits === 0) opt.windowBits = -15;
    }
    // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
    if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) opt.windowBits += 32;
    // Gzip header has no info about windows size, we can do autodetect only
    // for deflate. So, if window size not set, force it to max when gzip possible
    if (opt.windowBits > 15 && opt.windowBits < 48) // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    {
        if ((opt.windowBits & 15) === 0) opt.windowBits |= 15;
    }
    this.err = 0; // error code, if happens (0 = Z_OK)
    this.msg = ""; // error message
    this.ended = false; // used to avoid multiple onEnd() calls
    this.chunks = []; // chunks of compressed data
    this.strm = new ZStream();
    this.strm.avail_out = 0;
    var status = zlib_inflate.inflateInit2(this.strm, opt.windowBits);
    if (status !== c.Z_OK) throw new Error(msg[status]);
    this.header = new GZheader();
    zlib_inflate.inflateGetHeader(this.strm, this.header);
    // Setup dictionary
    if (opt.dictionary) {
        // Convert data if needed
        if (typeof opt.dictionary === "string") opt.dictionary = strings.string2buf(opt.dictionary);
        else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") opt.dictionary = new Uint8Array(opt.dictionary);
        if (opt.raw) {
            status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
            if (status !== c.Z_OK) throw new Error(msg[status]);
        }
    }
}
/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/ Inflate.prototype.push = function(data, mode) {
    var strm = this.strm;
    var chunkSize = this.options.chunkSize;
    var dictionary = this.options.dictionary;
    var status, _mode;
    var next_out_utf8, tail, utf8str;
    // Flag to properly process Z_BUF_ERROR on testing inflate call
    // when we check that all output data was flushed.
    var allowBufError = false;
    if (this.ended) return false;
    _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH;
    // Convert data if needed
    if (typeof data === "string") // Only binary strings can be decompressed on practice
    strm.input = strings.binstring2buf(data);
    else if (toString.call(data) === "[object ArrayBuffer]") strm.input = new Uint8Array(data);
    else strm.input = data;
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    do {
        if (strm.avail_out === 0) {
            strm.output = new utils.Buf8(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
        }
        status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH); /* no bad return value */ 
        if (status === c.Z_NEED_DICT && dictionary) status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
        if (status === c.Z_BUF_ERROR && allowBufError === true) {
            status = c.Z_OK;
            allowBufError = false;
        }
        if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
            this.onEnd(status);
            this.ended = true;
            return false;
        }
        if (strm.next_out) {
            if (strm.avail_out === 0 || status === c.Z_STREAM_END || strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH)) {
                if (this.options.to === "string") {
                    next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
                    tail = strm.next_out - next_out_utf8;
                    utf8str = strings.buf2string(strm.output, next_out_utf8);
                    // move tail
                    strm.next_out = tail;
                    strm.avail_out = chunkSize - tail;
                    if (tail) utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
                    this.onData(utf8str);
                } else this.onData(utils.shrinkBuf(strm.output, strm.next_out));
            }
        }
        // When no more input data, we should check that internal inflate buffers
        // are flushed. The only way to do it when avail_out = 0 - run one more
        // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
        // Here we set flag to process this error properly.
        //
        // NOTE. Deflate does not return error in this case and does not needs such
        // logic.
        if (strm.avail_in === 0 && strm.avail_out === 0) allowBufError = true;
    }while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);
    if (status === c.Z_STREAM_END) _mode = c.Z_FINISH;
    // Finalize on the last chunk.
    if (_mode === c.Z_FINISH) {
        status = zlib_inflate.inflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === c.Z_OK;
    }
    // callback interim results if Z_SYNC_FLUSH.
    if (_mode === c.Z_SYNC_FLUSH) {
        this.onEnd(c.Z_OK);
        strm.avail_out = 0;
        return true;
    }
    return true;
};
/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/ Inflate.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
};
/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/ Inflate.prototype.onEnd = function(status) {
    // On success - join
    if (status === c.Z_OK) {
        if (this.options.to === "string") // Glue & convert here, until we teach pako to send
        // utf8 aligned strings to onData
        this.result = this.chunks.join("");
        else this.result = utils.flattenChunks(this.chunks);
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
};
/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/ function inflate(input, options) {
    var inflator = new Inflate(options);
    inflator.push(input, true);
    // That will never happens, if you don't cheat with options :)
    if (inflator.err) throw inflator.msg || msg[inflator.err];
    return inflator.result;
}
/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/ function inflateRaw(input, options) {
    options = options || {};
    options.raw = true;
    return inflate(input, options);
}
/**
 * ungzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/ exports.Inflate = Inflate;
exports.inflate = inflate;
exports.inflateRaw = inflateRaw;
exports.ungzip = inflate;

},{"dd64f509a13f2ae4":"g5zaP","4c9b744bf1bb68c7":"fFptP","a6a879671ada369a":"5INtC","dbf920c388b193d4":"hBkF3","a85d599be6e8296a":"kwIoc","2cb10505c6d74721":"5ZapS","e0b11c8ff712dfd":"2O9qo"}],"g5zaP":[function(require,module,exports) {
"use strict";
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
var utils = require("3693fcbb98dc8df0");
var adler32 = require("6ebe24dff7c86ec6");
var crc32 = require("733ae5de3dad536a");
var inflate_fast = require("d6c5d4935fa23026");
var inflate_table = require("f4fe87fcccdc3597");
var CODES = 0;
var LENS = 1;
var DISTS = 2;
/* Public constants ==========================================================*/ /* ===========================================================================*/ /* Allowed flush values; see deflate() and inflate() below for details */ //var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH = 4;
var Z_BLOCK = 5;
var Z_TREES = 6;
/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */ var Z_OK = 0;
var Z_STREAM_END = 1;
var Z_NEED_DICT = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR = -2;
var Z_DATA_ERROR = -3;
var Z_MEM_ERROR = -4;
var Z_BUF_ERROR = -5;
//var Z_VERSION_ERROR = -6;
/* The deflate compression method */ var Z_DEFLATED = 8;
/* STATES ====================================================================*/ /* ===========================================================================*/ var HEAD = 1; /* i: waiting for magic header */ 
var FLAGS = 2; /* i: waiting for method and flags (gzip) */ 
var TIME = 3; /* i: waiting for modification time (gzip) */ 
var OS = 4; /* i: waiting for extra flags and operating system (gzip) */ 
var EXLEN = 5; /* i: waiting for extra length (gzip) */ 
var EXTRA = 6; /* i: waiting for extra bytes (gzip) */ 
var NAME = 7; /* i: waiting for end of file name (gzip) */ 
var COMMENT = 8; /* i: waiting for end of comment (gzip) */ 
var HCRC = 9; /* i: waiting for header crc (gzip) */ 
var DICTID = 10; /* i: waiting for dictionary check value */ 
var DICT = 11; /* waiting for inflateSetDictionary() call */ 
var TYPE = 12; /* i: waiting for type bits, including last-flag bit */ 
var TYPEDO = 13; /* i: same, but skip check to exit inflate on new block */ 
var STORED = 14; /* i: waiting for stored size (length and complement) */ 
var COPY_ = 15; /* i/o: same as COPY below, but only first time in */ 
var COPY = 16; /* i/o: waiting for input or output to copy stored block */ 
var TABLE = 17; /* i: waiting for dynamic block table lengths */ 
var LENLENS = 18; /* i: waiting for code length code lengths */ 
var CODELENS = 19; /* i: waiting for length/lit and distance code lengths */ 
var LEN_ = 20; /* i: same as LEN below, but only first time in */ 
var LEN = 21; /* i: waiting for length/lit/eob code */ 
var LENEXT = 22; /* i: waiting for length extra bits */ 
var DIST = 23; /* i: waiting for distance code */ 
var DISTEXT = 24; /* i: waiting for distance extra bits */ 
var MATCH = 25; /* o: waiting for output space to copy string */ 
var LIT = 26; /* o: waiting for output space to write literal */ 
var CHECK = 27; /* i: waiting for 32-bit check value */ 
var LENGTH = 28; /* i: waiting for 32-bit length (gzip) */ 
var DONE = 29; /* finished check, done -- remain here until reset */ 
var BAD = 30; /* got a data error -- remain here until reset */ 
var MEM = 31; /* got an inflate() memory error -- remain here until reset */ 
var SYNC = 32; /* looking for synchronization bytes to restart inflate() */ 
/* ===========================================================================*/ var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);
var MAX_WBITS = 15;
/* 32K LZ77 window */ var DEF_WBITS = MAX_WBITS;
function zswap32(q) {
    return (q >>> 24 & 0xff) + (q >>> 8 & 0xff00) + ((q & 0xff00) << 8) + ((q & 0xff) << 24);
}
function InflateState() {
    this.mode = 0; /* current inflate mode */ 
    this.last = false; /* true if processing last block */ 
    this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip */ 
    this.havedict = false; /* true if dictionary provided */ 
    this.flags = 0; /* gzip header method and flags (0 if zlib) */ 
    this.dmax = 0; /* zlib header max distance (INFLATE_STRICT) */ 
    this.check = 0; /* protected copy of check value */ 
    this.total = 0; /* protected copy of output count */ 
    // TODO: may be {}
    this.head = null; /* where to save gzip header information */ 
    /* sliding window */ this.wbits = 0; /* log base 2 of requested window size */ 
    this.wsize = 0; /* window size or zero if not using window */ 
    this.whave = 0; /* valid bytes in the window */ 
    this.wnext = 0; /* window write index */ 
    this.window = null; /* allocated sliding window, if needed */ 
    /* bit accumulator */ this.hold = 0; /* input bit accumulator */ 
    this.bits = 0; /* number of bits in "in" */ 
    /* for string and stored block copying */ this.length = 0; /* literal or length of data to copy */ 
    this.offset = 0; /* distance back to copy string from */ 
    /* for table and code decoding */ this.extra = 0; /* extra bits needed */ 
    /* fixed and dynamic code tables */ this.lencode = null; /* starting table for length/literal codes */ 
    this.distcode = null; /* starting table for distance codes */ 
    this.lenbits = 0; /* index bits for lencode */ 
    this.distbits = 0; /* index bits for distcode */ 
    /* dynamic table building */ this.ncode = 0; /* number of code length code lengths */ 
    this.nlen = 0; /* number of length code lengths */ 
    this.ndist = 0; /* number of distance code lengths */ 
    this.have = 0; /* number of code lengths in lens[] */ 
    this.next = null; /* next available space in codes[] */ 
    this.lens = new utils.Buf16(320); /* temporary storage for code lengths */ 
    this.work = new utils.Buf16(288); /* work area for code table building */ 
    /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */ //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
    this.lendyn = null; /* dynamic table for length/literal codes (JS specific) */ 
    this.distdyn = null; /* dynamic table for distance codes (JS specific) */ 
    this.sane = 0; /* if false, allow invalid distance too far */ 
    this.back = 0; /* bits back of last unprocessed length/lit */ 
    this.was = 0; /* initial length of match */ 
}
function inflateResetKeep(strm) {
    var state;
    if (!strm || !strm.state) return Z_STREAM_ERROR;
    state = strm.state;
    strm.total_in = strm.total_out = state.total = 0;
    strm.msg = ""; /*Z_NULL*/ 
    if (state.wrap) strm.adler = state.wrap & 1;
    state.mode = HEAD;
    state.last = 0;
    state.havedict = 0;
    state.dmax = 32768;
    state.head = null /*Z_NULL*/ ;
    state.hold = 0;
    state.bits = 0;
    //state.lencode = state.distcode = state.next = state.codes;
    state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
    state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
    state.sane = 1;
    state.back = -1;
    //Tracev((stderr, "inflate: reset\n"));
    return Z_OK;
}
function inflateReset(strm) {
    var state;
    if (!strm || !strm.state) return Z_STREAM_ERROR;
    state = strm.state;
    state.wsize = 0;
    state.whave = 0;
    state.wnext = 0;
    return inflateResetKeep(strm);
}
function inflateReset2(strm, windowBits) {
    var wrap;
    var state;
    /* get the state */ if (!strm || !strm.state) return Z_STREAM_ERROR;
    state = strm.state;
    /* extract wrap request from windowBits parameter */ if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
    } else {
        wrap = (windowBits >> 4) + 1;
        if (windowBits < 48) windowBits &= 15;
    }
    /* set number of window bits, free window if different */ if (windowBits && (windowBits < 8 || windowBits > 15)) return Z_STREAM_ERROR;
    if (state.window !== null && state.wbits !== windowBits) state.window = null;
    /* update state and reset the rest of it */ state.wrap = wrap;
    state.wbits = windowBits;
    return inflateReset(strm);
}
function inflateInit2(strm, windowBits) {
    var ret;
    var state;
    if (!strm) return Z_STREAM_ERROR;
    //strm.msg = Z_NULL;                 /* in case we return an error */
    state = new InflateState();
    //if (state === Z_NULL) return Z_MEM_ERROR;
    //Tracev((stderr, "inflate: allocated\n"));
    strm.state = state;
    state.window = null /*Z_NULL*/ ;
    ret = inflateReset2(strm, windowBits);
    if (ret !== Z_OK) strm.state = null /*Z_NULL*/ ;
    return ret;
}
function inflateInit(strm) {
    return inflateInit2(strm, DEF_WBITS);
}
/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */ var virgin = true;
var lenfix, distfix; // We have no pointers in JS, so keep tables separate
function fixedtables(state) {
    /* build fixed huffman tables if first call (may not be thread safe) */ if (virgin) {
        var sym;
        lenfix = new utils.Buf32(512);
        distfix = new utils.Buf32(32);
        /* literal/length table */ sym = 0;
        while(sym < 144)state.lens[sym++] = 8;
        while(sym < 256)state.lens[sym++] = 9;
        while(sym < 280)state.lens[sym++] = 7;
        while(sym < 288)state.lens[sym++] = 8;
        inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, {
            bits: 9
        });
        /* distance table */ sym = 0;
        while(sym < 32)state.lens[sym++] = 5;
        inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, {
            bits: 5
        });
        /* do this just once */ virgin = false;
    }
    state.lencode = lenfix;
    state.lenbits = 9;
    state.distcode = distfix;
    state.distbits = 5;
}
/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */ function updatewindow(strm, src, end, copy) {
    var dist;
    var state = strm.state;
    /* if it hasn't been done already, allocate space for the window */ if (state.window === null) {
        state.wsize = 1 << state.wbits;
        state.wnext = 0;
        state.whave = 0;
        state.window = new utils.Buf8(state.wsize);
    }
    /* copy state->wsize or less output bytes into the circular window */ if (copy >= state.wsize) {
        utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
        state.wnext = 0;
        state.whave = state.wsize;
    } else {
        dist = state.wsize - state.wnext;
        if (dist > copy) dist = copy;
        //zmemcpy(state->window + state->wnext, end - copy, dist);
        utils.arraySet(state.window, src, end - copy, dist, state.wnext);
        copy -= dist;
        if (copy) {
            //zmemcpy(state->window, end - copy, copy);
            utils.arraySet(state.window, src, end - copy, copy, 0);
            state.wnext = copy;
            state.whave = state.wsize;
        } else {
            state.wnext += dist;
            if (state.wnext === state.wsize) state.wnext = 0;
            if (state.whave < state.wsize) state.whave += dist;
        }
    }
    return 0;
}
function inflate(strm, flush) {
    var state;
    var input, output; // input/output buffers
    var next; /* next input INDEX */ 
    var put; /* next output INDEX */ 
    var have, left; /* available input and output */ 
    var hold; /* bit buffer */ 
    var bits; /* bits in bit buffer */ 
    var _in, _out; /* save starting available input and output */ 
    var copy; /* number of stored or match bytes to copy */ 
    var from; /* where to copy match bytes from */ 
    var from_source;
    var here = 0; /* current decoding table entry */ 
    var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
    //var last;                   /* parent table entry */
    var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
    var len; /* length to copy for repeats, bits to drop */ 
    var ret; /* return code */ 
    var hbuf = new utils.Buf8(4); /* buffer for gzip header crc calculation */ 
    var opts;
    var n; // temporary var for NEED_BITS
    var order = /* permutation of code lengths */ [
        16,
        17,
        18,
        0,
        8,
        7,
        9,
        6,
        10,
        5,
        11,
        4,
        12,
        3,
        13,
        2,
        14,
        1,
        15
    ];
    if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) return Z_STREAM_ERROR;
    state = strm.state;
    if (state.mode === TYPE) state.mode = TYPEDO;
     /* skip check */ 
    //--- LOAD() ---
    put = strm.next_out;
    output = strm.output;
    left = strm.avail_out;
    next = strm.next_in;
    input = strm.input;
    have = strm.avail_in;
    hold = state.hold;
    bits = state.bits;
    //---
    _in = have;
    _out = left;
    ret = Z_OK;
    inf_leave: for(;;)switch(state.mode){
        case HEAD:
            if (state.wrap === 0) {
                state.mode = TYPEDO;
                break;
            }
            //=== NEEDBITS(16);
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.wrap & 2 && hold === 0x8b1f) {
                state.check = 0 /*crc32(0L, Z_NULL, 0)*/ ;
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32(state.check, hbuf, 2, 0);
                //===//
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
                state.mode = FLAGS;
                break;
            }
            state.flags = 0; /* expect zlib header */ 
            if (state.head) state.head.done = false;
            if (!(state.wrap & 1) || /* check if zlib header allowed */ (((hold & 0xff) << 8) + (hold >> 8)) % 31) {
                strm.msg = "incorrect header check";
                state.mode = BAD;
                break;
            }
            if ((hold & 0x0f) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
            }
            //--- DROPBITS(4) ---//
            hold >>>= 4;
            bits -= 4;
            //---//
            len = (hold & 0x0f) + 8;
            if (state.wbits === 0) state.wbits = len;
            else if (len > state.wbits) {
                strm.msg = "invalid window size";
                state.mode = BAD;
                break;
            }
            state.dmax = 1 << len;
            //Tracev((stderr, "inflate:   zlib header ok\n"));
            strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/ ;
            state.mode = hold & 0x200 ? DICTID : TYPE;
            //=== INITBITS();
            hold = 0;
            bits = 0;
            break;
        case FLAGS:
            //=== NEEDBITS(16); */
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.flags = hold;
            if ((state.flags & 0xff) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
            }
            if (state.flags & 0xe000) {
                strm.msg = "unknown header flags set";
                state.mode = BAD;
                break;
            }
            if (state.head) state.head.text = hold >> 8 & 1;
            if (state.flags & 0x0200) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32(state.check, hbuf, 2, 0);
            //===//
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = TIME;
        /* falls through */ case TIME:
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.head) state.head.time = hold;
            if (state.flags & 0x0200) {
                //=== CRC4(state.check, hold)
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                hbuf[2] = hold >>> 16 & 0xff;
                hbuf[3] = hold >>> 24 & 0xff;
                state.check = crc32(state.check, hbuf, 4, 0);
            //===
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = OS;
        /* falls through */ case OS:
            //=== NEEDBITS(16); */
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.head) {
                state.head.xflags = hold & 0xff;
                state.head.os = hold >> 8;
            }
            if (state.flags & 0x0200) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32(state.check, hbuf, 2, 0);
            //===//
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = EXLEN;
        /* falls through */ case EXLEN:
            if (state.flags & 0x0400) {
                //=== NEEDBITS(16); */
                while(bits < 16){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.length = hold;
                if (state.head) state.head.extra_len = hold;
                if (state.flags & 0x0200) {
                    //=== CRC2(state.check, hold);
                    hbuf[0] = hold & 0xff;
                    hbuf[1] = hold >>> 8 & 0xff;
                    state.check = crc32(state.check, hbuf, 2, 0);
                //===//
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            } else if (state.head) state.head.extra = null /*Z_NULL*/ ;
            state.mode = EXTRA;
        /* falls through */ case EXTRA:
            if (state.flags & 0x0400) {
                copy = state.length;
                if (copy > have) copy = have;
                if (copy) {
                    if (state.head) {
                        len = state.head.extra_len - state.length;
                        if (!state.head.extra) // Use untyped array for more convenient processing later
                        state.head.extra = new Array(state.head.extra_len);
                        utils.arraySet(state.head.extra, input, next, // extra field is limited to 65536 bytes
                        // - no need for additional size check
                        copy, /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/ len);
                    //zmemcpy(state.head.extra + len, next,
                    //        len + copy > state.head.extra_max ?
                    //        state.head.extra_max - len : copy);
                    }
                    if (state.flags & 0x0200) state.check = crc32(state.check, input, copy, next);
                    have -= copy;
                    next += copy;
                    state.length -= copy;
                }
                if (state.length) break inf_leave;
            }
            state.length = 0;
            state.mode = NAME;
        /* falls through */ case NAME:
            if (state.flags & 0x0800) {
                if (have === 0) break inf_leave;
                copy = 0;
                do {
                    // TODO: 2 or 1 bytes?
                    len = input[next + copy++];
                    /* use constant limit because in js we should not preallocate memory */ if (state.head && len && state.length < 65536 /*state.head.name_max*/ ) state.head.name += String.fromCharCode(len);
                }while (len && copy < have);
                if (state.flags & 0x0200) state.check = crc32(state.check, input, copy, next);
                have -= copy;
                next += copy;
                if (len) break inf_leave;
            } else if (state.head) state.head.name = null;
            state.length = 0;
            state.mode = COMMENT;
        /* falls through */ case COMMENT:
            if (state.flags & 0x1000) {
                if (have === 0) break inf_leave;
                copy = 0;
                do {
                    len = input[next + copy++];
                    /* use constant limit because in js we should not preallocate memory */ if (state.head && len && state.length < 65536 /*state.head.comm_max*/ ) state.head.comment += String.fromCharCode(len);
                }while (len && copy < have);
                if (state.flags & 0x0200) state.check = crc32(state.check, input, copy, next);
                have -= copy;
                next += copy;
                if (len) break inf_leave;
            } else if (state.head) state.head.comment = null;
            state.mode = HCRC;
        /* falls through */ case HCRC:
            if (state.flags & 0x0200) {
                //=== NEEDBITS(16); */
                while(bits < 16){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                if (hold !== (state.check & 0xffff)) {
                    strm.msg = "header crc mismatch";
                    state.mode = BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            }
            if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
            }
            strm.adler = state.check = 0;
            state.mode = TYPE;
            break;
        case DICTID:
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            strm.adler = state.check = zswap32(hold);
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = DICT;
        /* falls through */ case DICT:
            if (state.havedict === 0) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                return Z_NEED_DICT;
            }
            strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/ ;
            state.mode = TYPE;
        /* falls through */ case TYPE:
            if (flush === Z_BLOCK || flush === Z_TREES) break inf_leave;
        /* falls through */ case TYPEDO:
            if (state.last) {
                //--- BYTEBITS() ---//
                hold >>>= bits & 7;
                bits -= bits & 7;
                //---//
                state.mode = CHECK;
                break;
            }
            //=== NEEDBITS(3); */
            while(bits < 3){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.last = hold & 0x01 /*BITS(1)*/ ;
            //--- DROPBITS(1) ---//
            hold >>>= 1;
            bits -= 1;
            //---//
            switch(hold & 0x03){
                case 0:
                    /* stored block */ //Tracev((stderr, "inflate:     stored block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = STORED;
                    break;
                case 1:
                    /* fixed block */ fixedtables(state);
                    //Tracev((stderr, "inflate:     fixed codes block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = LEN_; /* decode codes */ 
                    if (flush === Z_TREES) {
                        //--- DROPBITS(2) ---//
                        hold >>>= 2;
                        bits -= 2;
                        break inf_leave;
                    }
                    break;
                case 2:
                    /* dynamic block */ //Tracev((stderr, "inflate:     dynamic codes block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = TABLE;
                    break;
                case 3:
                    strm.msg = "invalid block type";
                    state.mode = BAD;
            }
            //--- DROPBITS(2) ---//
            hold >>>= 2;
            bits -= 2;
            break;
        case STORED:
            //--- BYTEBITS() ---// /* go to byte boundary */
            hold >>>= bits & 7;
            bits -= bits & 7;
            //---//
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if ((hold & 0xffff) !== (hold >>> 16 ^ 0xffff)) {
                strm.msg = "invalid stored block lengths";
                state.mode = BAD;
                break;
            }
            state.length = hold & 0xffff;
            //Tracev((stderr, "inflate:       stored length %u\n",
            //        state.length));
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = COPY_;
            if (flush === Z_TREES) break inf_leave;
        /* falls through */ case COPY_:
            state.mode = COPY;
        /* falls through */ case COPY:
            copy = state.length;
            if (copy) {
                if (copy > have) copy = have;
                if (copy > left) copy = left;
                if (copy === 0) break inf_leave;
                //--- zmemcpy(put, next, copy); ---
                utils.arraySet(output, input, next, copy, put);
                //---//
                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state.length -= copy;
                break;
            }
            //Tracev((stderr, "inflate:       stored end\n"));
            state.mode = TYPE;
            break;
        case TABLE:
            //=== NEEDBITS(14); */
            while(bits < 14){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.nlen = (hold & 0x1f) + 257;
            //--- DROPBITS(5) ---//
            hold >>>= 5;
            bits -= 5;
            //---//
            state.ndist = (hold & 0x1f) + 1;
            //--- DROPBITS(5) ---//
            hold >>>= 5;
            bits -= 5;
            //---//
            state.ncode = (hold & 0x0f) + 4;
            //--- DROPBITS(4) ---//
            hold >>>= 4;
            bits -= 4;
            //---//
            //#ifndef PKZIP_BUG_WORKAROUND
            if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = "too many length or distance symbols";
                state.mode = BAD;
                break;
            }
            //#endif
            //Tracev((stderr, "inflate:       table sizes ok\n"));
            state.have = 0;
            state.mode = LENLENS;
        /* falls through */ case LENLENS:
            while(state.have < state.ncode){
                //=== NEEDBITS(3);
                while(bits < 3){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.lens[order[state.have++]] = hold & 0x07; //BITS(3);
                //--- DROPBITS(3) ---//
                hold >>>= 3;
                bits -= 3;
            //---//
            }
            while(state.have < 19)state.lens[order[state.have++]] = 0;
            // We have separate tables & no pointers. 2 commented lines below not needed.
            //state.next = state.codes;
            //state.lencode = state.next;
            // Switch to use dynamic table
            state.lencode = state.lendyn;
            state.lenbits = 7;
            opts = {
                bits: state.lenbits
            };
            ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;
            if (ret) {
                strm.msg = "invalid code lengths set";
                state.mode = BAD;
                break;
            }
            //Tracev((stderr, "inflate:       code lengths ok\n"));
            state.have = 0;
            state.mode = CODELENS;
        /* falls through */ case CODELENS:
            while(state.have < state.nlen + state.ndist){
                for(;;){
                    here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/ 
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 0xff;
                    here_val = here & 0xffff;
                    if (here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                if (here_val < 16) {
                    //--- DROPBITS(here.bits) ---//
                    hold >>>= here_bits;
                    bits -= here_bits;
                    //---//
                    state.lens[state.have++] = here_val;
                } else {
                    if (here_val === 16) {
                        //=== NEEDBITS(here.bits + 2);
                        n = here_bits + 2;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        if (state.have === 0) {
                            strm.msg = "invalid bit length repeat";
                            state.mode = BAD;
                            break;
                        }
                        len = state.lens[state.have - 1];
                        copy = 3 + (hold & 0x03); //BITS(2);
                        //--- DROPBITS(2) ---//
                        hold >>>= 2;
                        bits -= 2;
                    //---//
                    } else if (here_val === 17) {
                        //=== NEEDBITS(here.bits + 3);
                        n = here_bits + 3;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        len = 0;
                        copy = 3 + (hold & 0x07); //BITS(3);
                        //--- DROPBITS(3) ---//
                        hold >>>= 3;
                        bits -= 3;
                    //---//
                    } else {
                        //=== NEEDBITS(here.bits + 7);
                        n = here_bits + 7;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        len = 0;
                        copy = 11 + (hold & 0x7f); //BITS(7);
                        //--- DROPBITS(7) ---//
                        hold >>>= 7;
                        bits -= 7;
                    //---//
                    }
                    if (state.have + copy > state.nlen + state.ndist) {
                        strm.msg = "invalid bit length repeat";
                        state.mode = BAD;
                        break;
                    }
                    while(copy--)state.lens[state.have++] = len;
                }
            }
            /* handle error breaks in while */ if (state.mode === BAD) break;
            /* check for end-of-block code (better have one) */ if (state.lens[256] === 0) {
                strm.msg = "invalid code -- missing end-of-block";
                state.mode = BAD;
                break;
            }
            /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */ state.lenbits = 9;
            opts = {
                bits: state.lenbits
            };
            ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
            // We have separate tables & no pointers. 2 commented lines below not needed.
            // state.next_index = opts.table_index;
            state.lenbits = opts.bits;
            // state.lencode = state.next;
            if (ret) {
                strm.msg = "invalid literal/lengths set";
                state.mode = BAD;
                break;
            }
            state.distbits = 6;
            //state.distcode.copy(state.codes);
            // Switch to use dynamic table
            state.distcode = state.distdyn;
            opts = {
                bits: state.distbits
            };
            ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
            // We have separate tables & no pointers. 2 commented lines below not needed.
            // state.next_index = opts.table_index;
            state.distbits = opts.bits;
            // state.distcode = state.next;
            if (ret) {
                strm.msg = "invalid distances set";
                state.mode = BAD;
                break;
            }
            //Tracev((stderr, 'inflate:       codes ok\n'));
            state.mode = LEN_;
            if (flush === Z_TREES) break inf_leave;
        /* falls through */ case LEN_:
            state.mode = LEN;
        /* falls through */ case LEN:
            if (have >= 6 && left >= 258) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                inflate_fast(strm, _out);
                //--- LOAD() ---
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                //---
                if (state.mode === TYPE) state.back = -1;
                break;
            }
            state.back = 0;
            for(;;){
                here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/ 
                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;
                if (here_bits <= bits) break;
                //--- PULLBYTE() ---//
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            //---//
            }
            if (here_op && (here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for(;;){
                    here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 0xff;
                    here_val = here & 0xffff;
                    if (last_bits + here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
            }
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.back += here_bits;
            state.length = here_val;
            if (here_op === 0) {
                //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
                //        "inflate:         literal '%c'\n" :
                //        "inflate:         literal 0x%02x\n", here.val));
                state.mode = LIT;
                break;
            }
            if (here_op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.back = -1;
                state.mode = TYPE;
                break;
            }
            if (here_op & 64) {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break;
            }
            state.extra = here_op & 15;
            state.mode = LENEXT;
        /* falls through */ case LENEXT:
            if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while(bits < n){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.length += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/ ;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
            }
            //Tracevv((stderr, "inflate:         length %u\n", state.length));
            state.was = state.length;
            state.mode = DIST;
        /* falls through */ case DIST:
            for(;;){
                here = state.distcode[hold & (1 << state.distbits) - 1]; /*BITS(state.distbits)*/ 
                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;
                if (here_bits <= bits) break;
                //--- PULLBYTE() ---//
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            //---//
            }
            if ((here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for(;;){
                    here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 0xff;
                    here_val = here & 0xffff;
                    if (last_bits + here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
            }
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.back += here_bits;
            if (here_op & 64) {
                strm.msg = "invalid distance code";
                state.mode = BAD;
                break;
            }
            state.offset = here_val;
            state.extra = here_op & 15;
            state.mode = DISTEXT;
        /* falls through */ case DISTEXT:
            if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while(bits < n){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.offset += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/ ;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
            }
            //#ifdef INFLATE_STRICT
            if (state.offset > state.dmax) {
                strm.msg = "invalid distance too far back";
                state.mode = BAD;
                break;
            }
            //#endif
            //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
            state.mode = MATCH;
        /* falls through */ case MATCH:
            if (left === 0) break inf_leave;
            copy = _out - left;
            if (state.offset > copy) {
                copy = state.offset - copy;
                if (copy > state.whave) {
                    if (state.sane) {
                        strm.msg = "invalid distance too far back";
                        state.mode = BAD;
                        break;
                    }
                }
                if (copy > state.wnext) {
                    copy -= state.wnext;
                    from = state.wsize - copy;
                } else from = state.wnext - copy;
                if (copy > state.length) copy = state.length;
                from_source = state.window;
            } else {
                from_source = output;
                from = put - state.offset;
                copy = state.length;
            }
            if (copy > left) copy = left;
            left -= copy;
            state.length -= copy;
            do output[put++] = from_source[from++];
            while (--copy);
            if (state.length === 0) state.mode = LEN;
            break;
        case LIT:
            if (left === 0) break inf_leave;
            output[put++] = state.length;
            left--;
            state.mode = LEN;
            break;
        case CHECK:
            if (state.wrap) {
                //=== NEEDBITS(32);
                while(bits < 32){
                    if (have === 0) break inf_leave;
                    have--;
                    // Use '|' instead of '+' to make sure that result is signed
                    hold |= input[next++] << bits;
                    bits += 8;
                }
                //===//
                _out -= left;
                strm.total_out += _out;
                state.total += _out;
                if (_out) strm.adler = state.check = /*UPDATE(state.check, put - _out, _out);*/ state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
                _out = left;
                // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
                if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                    strm.msg = "incorrect data check";
                    state.mode = BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            //Tracev((stderr, "inflate:   check matches trailer\n"));
            }
            state.mode = LENGTH;
        /* falls through */ case LENGTH:
            if (state.wrap && state.flags) {
                //=== NEEDBITS(32);
                while(bits < 32){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                if (hold !== (state.total & 0xffffffff)) {
                    strm.msg = "incorrect length check";
                    state.mode = BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            //Tracev((stderr, "inflate:   length matches trailer\n"));
            }
            state.mode = DONE;
        /* falls through */ case DONE:
            ret = Z_STREAM_END;
            break inf_leave;
        case BAD:
            ret = Z_DATA_ERROR;
            break inf_leave;
        case MEM:
            return Z_MEM_ERROR;
        case SYNC:
        /* falls through */ default:
            return Z_STREAM_ERROR;
    }
    // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"
    /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */ //--- RESTORE() ---
    strm.next_out = put;
    strm.avail_out = left;
    strm.next_in = next;
    strm.avail_in = have;
    state.hold = hold;
    state.bits = bits;
    //---
    if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH)) {
        if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
            state.mode = MEM;
            return Z_MEM_ERROR;
        }
    }
    _in -= strm.avail_in;
    _out -= strm.avail_out;
    strm.total_in += _in;
    strm.total_out += _out;
    state.total += _out;
    if (state.wrap && _out) strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/ state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
    strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
    if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) ret = Z_BUF_ERROR;
    return ret;
}
function inflateEnd(strm) {
    if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/ ) return Z_STREAM_ERROR;
    var state = strm.state;
    if (state.window) state.window = null;
    strm.state = null;
    return Z_OK;
}
function inflateGetHeader(strm, head) {
    var state;
    /* check state */ if (!strm || !strm.state) return Z_STREAM_ERROR;
    state = strm.state;
    if ((state.wrap & 2) === 0) return Z_STREAM_ERROR;
    /* save header structure */ state.head = head;
    head.done = false;
    return Z_OK;
}
function inflateSetDictionary(strm, dictionary) {
    var dictLength = dictionary.length;
    var state;
    var dictid;
    var ret;
    /* check state */ if (!strm /* == Z_NULL */  || !strm.state /* == Z_NULL */ ) return Z_STREAM_ERROR;
    state = strm.state;
    if (state.wrap !== 0 && state.mode !== DICT) return Z_STREAM_ERROR;
    /* check for correct dictionary identifier */ if (state.mode === DICT) {
        dictid = 1; /* adler32(0, null, 0)*/ 
        /* dictid = adler32(dictid, dictionary, dictLength); */ dictid = adler32(dictid, dictionary, dictLength, 0);
        if (dictid !== state.check) return Z_DATA_ERROR;
    }
    /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */ ret = updatewindow(strm, dictionary, dictLength, dictLength);
    if (ret) {
        state.mode = MEM;
        return Z_MEM_ERROR;
    }
    state.havedict = 1;
    // Tracev((stderr, "inflate:   dictionary set\n"));
    return Z_OK;
}
exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = "pako inflate (from Nodeca project)"; /* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/ 

},{"3693fcbb98dc8df0":"fFptP","6ebe24dff7c86ec6":"goy7x","733ae5de3dad536a":"9qfRD","d6c5d4935fa23026":"2vjs8","f4fe87fcccdc3597":"aMCan"}],"2vjs8":[function(require,module,exports) {
"use strict";
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// See state defs from inflate.js
var BAD = 30; /* got a data error -- remain here until reset */ 
var TYPE = 12; /* i: waiting for type bits, including last-flag bit */ 
/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */ module.exports = function inflate_fast(strm, start) {
    var state;
    var _in; /* local strm.input */ 
    var last; /* have enough input while in < last */ 
    var _out; /* local strm.output */ 
    var beg; /* inflate()'s initial strm.output */ 
    var end; /* while out < end, enough space available */ 
    //#ifdef INFLATE_STRICT
    var dmax; /* maximum distance from zlib header */ 
    //#endif
    var wsize; /* window size or zero if not using window */ 
    var whave; /* valid bytes in the window */ 
    var wnext; /* window write index */ 
    // Use `s_window` instead `window`, avoid conflict with instrumentation tools
    var s_window; /* allocated sliding window, if wsize != 0 */ 
    var hold; /* local strm.hold */ 
    var bits; /* local strm.bits */ 
    var lcode; /* local strm.lencode */ 
    var dcode; /* local strm.distcode */ 
    var lmask; /* mask for first level of length codes */ 
    var dmask; /* mask for first level of distance codes */ 
    var here; /* retrieved table entry */ 
    var op; /* code bits, operation, extra bits, or */ 
    /*  window position, window bytes to copy */ var len; /* match length, unused bytes */ 
    var dist; /* match distance */ 
    var from; /* where to copy match from */ 
    var from_source;
    var input, output; // JS specific, because we have no pointers
    /* copy state to local variables */ state = strm.state;
    //here = state.here;
    _in = strm.next_in;
    input = strm.input;
    last = _in + (strm.avail_in - 5);
    _out = strm.next_out;
    output = strm.output;
    beg = _out - (start - strm.avail_out);
    end = _out + (strm.avail_out - 257);
    //#ifdef INFLATE_STRICT
    dmax = state.dmax;
    //#endif
    wsize = state.wsize;
    whave = state.whave;
    wnext = state.wnext;
    s_window = state.window;
    hold = state.hold;
    bits = state.bits;
    lcode = state.lencode;
    dcode = state.distcode;
    lmask = (1 << state.lenbits) - 1;
    dmask = (1 << state.distbits) - 1;
    /* decode literals and length/distances until end-of-block or not enough
     input data or output space */ top: do {
        if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
        }
        here = lcode[hold & lmask];
        dolen: for(;;){
            op = here >>> 24 /*here.bits*/ ;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 0xff /*here.op*/ ;
            if (op === 0) //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
            //        "inflate:         literal '%c'\n" :
            //        "inflate:         literal 0x%02x\n", here.val));
            output[_out++] = here & 0xffff /*here.val*/ ;
            else if (op & 16) {
                len = here & 0xffff /*here.val*/ ;
                op &= 15; /* number of extra bits */ 
                if (op) {
                    if (bits < op) {
                        hold += input[_in++] << bits;
                        bits += 8;
                    }
                    len += hold & (1 << op) - 1;
                    hold >>>= op;
                    bits -= op;
                }
                //Tracevv((stderr, "inflate:         length %u\n", len));
                if (bits < 15) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    hold += input[_in++] << bits;
                    bits += 8;
                }
                here = dcode[hold & dmask];
                dodist: for(;;){
                    op = here >>> 24 /*here.bits*/ ;
                    hold >>>= op;
                    bits -= op;
                    op = here >>> 16 & 0xff /*here.op*/ ;
                    if (op & 16) {
                        dist = here & 0xffff /*here.val*/ ;
                        op &= 15; /* number of extra bits */ 
                        if (bits < op) {
                            hold += input[_in++] << bits;
                            bits += 8;
                            if (bits < op) {
                                hold += input[_in++] << bits;
                                bits += 8;
                            }
                        }
                        dist += hold & (1 << op) - 1;
                        //#ifdef INFLATE_STRICT
                        if (dist > dmax) {
                            strm.msg = "invalid distance too far back";
                            state.mode = BAD;
                            break top;
                        }
                        //#endif
                        hold >>>= op;
                        bits -= op;
                        //Tracevv((stderr, "inflate:         distance %u\n", dist));
                        op = _out - beg; /* max distance in output */ 
                        if (dist > op) {
                            op = dist - op; /* distance back in window */ 
                            if (op > whave) {
                                if (state.sane) {
                                    strm.msg = "invalid distance too far back";
                                    state.mode = BAD;
                                    break top;
                                }
                            }
                            from = 0; // window index
                            from_source = s_window;
                            if (wnext === 0) {
                                from += wsize - op;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op);
                                    from = _out - dist; /* rest from output */ 
                                    from_source = output;
                                }
                            } else if (wnext < op) {
                                from += wsize + wnext - op;
                                op -= wnext;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op);
                                    from = 0;
                                    if (wnext < len) {
                                        op = wnext;
                                        len -= op;
                                        do output[_out++] = s_window[from++];
                                        while (--op);
                                        from = _out - dist; /* rest from output */ 
                                        from_source = output;
                                    }
                                }
                            } else {
                                from += wnext - op;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op);
                                    from = _out - dist; /* rest from output */ 
                                    from_source = output;
                                }
                            }
                            while(len > 2){
                                output[_out++] = from_source[from++];
                                output[_out++] = from_source[from++];
                                output[_out++] = from_source[from++];
                                len -= 3;
                            }
                            if (len) {
                                output[_out++] = from_source[from++];
                                if (len > 1) output[_out++] = from_source[from++];
                            }
                        } else {
                            from = _out - dist; /* copy direct from output */ 
                            do {
                                output[_out++] = output[from++];
                                output[_out++] = output[from++];
                                output[_out++] = output[from++];
                                len -= 3;
                            }while (len > 2);
                            if (len) {
                                output[_out++] = output[from++];
                                if (len > 1) output[_out++] = output[from++];
                            }
                        }
                    } else if ((op & 64) === 0) {
                        here = dcode[(here & 0xffff) + (hold & (1 << op) - 1)];
                        continue dodist;
                    } else {
                        strm.msg = "invalid distance code";
                        state.mode = BAD;
                        break top;
                    }
                    break; // need to emulate goto via "continue"
                }
            } else if ((op & 64) === 0) {
                here = lcode[(here & 0xffff) + (hold & (1 << op) - 1)];
                continue dolen;
            } else if (op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.mode = TYPE;
                break top;
            } else {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break top;
            }
            break; // need to emulate goto via "continue"
        }
    }while (_in < last && _out < end);
    /* return unused bytes (on entry, bits < 8, so in won't go too far back) */ len = bits >> 3;
    _in -= len;
    bits -= len << 3;
    hold &= (1 << bits) - 1;
    /* update state and return */ strm.next_in = _in;
    strm.next_out = _out;
    strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
    strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
    state.hold = hold;
    state.bits = bits;
    return;
};

},{}],"aMCan":[function(require,module,exports) {
"use strict";
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
var utils = require("11b3fa99ba8f3902");
var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);
var CODES = 0;
var LENS = 1;
var DISTS = 2;
var lbase = [
    /* Length codes 257..285 base */ 3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
];
var lext = [
    /* Length codes 257..285 extra */ 16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
];
var dbase = [
    /* Distance codes 0..29 base */ 1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
];
var dext = [
    /* Distance codes 0..29 extra */ 16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
];
module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
    var bits = opts.bits;
    //here = opts.here; /* table entry for duplication */
    var len = 0; /* a code's length in bits */ 
    var sym = 0; /* index of code symbols */ 
    var min = 0, max = 0; /* minimum and maximum code lengths */ 
    var root = 0; /* number of index bits for root table */ 
    var curr = 0; /* number of index bits for current table */ 
    var drop = 0; /* code bits to drop for sub-table */ 
    var left = 0; /* number of prefix codes available */ 
    var used = 0; /* code entries in table used */ 
    var huff = 0; /* Huffman code */ 
    var incr; /* for incrementing code, index */ 
    var fill; /* index for replicating entries */ 
    var low; /* low bits for current root entry */ 
    var mask; /* mask for low root bits */ 
    var next; /* next available space in table */ 
    var base = null; /* base value table to use */ 
    var base_index = 0;
    //  var shoextra;    /* extra bits table to use */
    var end; /* use base and extra for symbol > end */ 
    var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
    var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
    var extra = null;
    var extra_index = 0;
    var here_bits, here_op, here_val;
    /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */ /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */ for(len = 0; len <= MAXBITS; len++)count[len] = 0;
    for(sym = 0; sym < codes; sym++)count[lens[lens_index + sym]]++;
    /* bound code lengths, force root to be within code lengths */ root = bits;
    for(max = MAXBITS; max >= 1; max--){
        if (count[max] !== 0) break;
    }
    if (root > max) root = max;
    if (max === 0) {
        //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
        //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
        //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
        table[table_index++] = 20971520;
        //table.op[opts.table_index] = 64;
        //table.bits[opts.table_index] = 1;
        //table.val[opts.table_index++] = 0;
        table[table_index++] = 20971520;
        opts.bits = 1;
        return 0; /* no symbols, but wait for decoding to report error */ 
    }
    for(min = 1; min < max; min++){
        if (count[min] !== 0) break;
    }
    if (root < min) root = min;
    /* check for an over-subscribed or incomplete set of lengths */ left = 1;
    for(len = 1; len <= MAXBITS; len++){
        left <<= 1;
        left -= count[len];
        if (left < 0) return -1;
         /* over-subscribed */ 
    }
    if (left > 0 && (type === CODES || max !== 1)) return -1; /* incomplete set */ 
    /* generate offsets into symbol table for each length for sorting */ offs[1] = 0;
    for(len = 1; len < MAXBITS; len++)offs[len + 1] = offs[len] + count[len];
    /* sort symbols by length, by symbol order within each length */ for(sym = 0; sym < codes; sym++)if (lens[lens_index + sym] !== 0) work[offs[lens[lens_index + sym]]++] = sym;
    /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */ /* set up for code type */ // poor man optimization - use if-else instead of switch,
    // to avoid deopts in old v8
    if (type === CODES) {
        base = extra = work; /* dummy value--not used */ 
        end = 19;
    } else if (type === LENS) {
        base = lbase;
        base_index -= 257;
        extra = lext;
        extra_index -= 257;
        end = 256;
    } else {
        base = dbase;
        extra = dext;
        end = -1;
    }
    /* initialize opts for loop */ huff = 0; /* starting code */ 
    sym = 0; /* starting code symbol */ 
    len = min; /* starting code length */ 
    next = table_index; /* current table to fill in */ 
    curr = root; /* current table index bits */ 
    drop = 0; /* current bits to drop from code for index */ 
    low = -1; /* trigger new sub-table when len > root */ 
    used = 1 << root; /* use root table entries */ 
    mask = used - 1; /* mask for comparing low */ 
    /* check available table space */ if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) return 1;
    /* process all codes and make table entries */ for(;;){
        /* create table entry */ here_bits = len - drop;
        if (work[sym] < end) {
            here_op = 0;
            here_val = work[sym];
        } else if (work[sym] > end) {
            here_op = extra[extra_index + work[sym]];
            here_val = base[base_index + work[sym]];
        } else {
            here_op = 96; /* end of block */ 
            here_val = 0;
        }
        /* replicate for those indices with low len bits equal to huff */ incr = 1 << len - drop;
        fill = 1 << curr;
        min = fill; /* save offset to next table */ 
        do {
            fill -= incr;
            table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
        }while (fill !== 0);
        /* backwards increment the len-bit code huff */ incr = 1 << len - 1;
        while(huff & incr)incr >>= 1;
        if (incr !== 0) {
            huff &= incr - 1;
            huff += incr;
        } else huff = 0;
        /* go to next symbol, update count, len */ sym++;
        if (--count[len] === 0) {
            if (len === max) break;
            len = lens[lens_index + work[sym]];
        }
        /* create new sub-table if needed */ if (len > root && (huff & mask) !== low) {
            /* if first time, transition to sub-tables */ if (drop === 0) drop = root;
            /* increment past last table */ next += min; /* here min is 1 << curr */ 
            /* determine length of next table */ curr = len - drop;
            left = 1 << curr;
            while(curr + drop < max){
                left -= count[curr + drop];
                if (left <= 0) break;
                curr++;
                left <<= 1;
            }
            /* check for enough space */ used += 1 << curr;
            if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) return 1;
            /* point entry in root table to sub-table */ low = huff & mask;
            /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/ table[low] = root << 24 | curr << 16 | next - table_index | 0;
        }
    }
    /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */ if (huff !== 0) //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = len - drop << 24 | 4194304;
    /* set return parameters */ //opts.table_index += used;
    opts.bits = root;
    return 0;
};

},{"11b3fa99ba8f3902":"fFptP"}],"hBkF3":[function(require,module,exports) {
"use strict";
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
module.exports = {
    /* Allowed flush values; see deflate() and inflate() below for details */ Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */ Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    //Z_MEM_ERROR:     -4,
    Z_BUF_ERROR: -5,
    //Z_VERSION_ERROR: -6,
    /* compression levels */ Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    /* Possible values of the data_type field (though see inflate()) */ Z_BINARY: 0,
    Z_TEXT: 1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN: 2,
    /* The deflate compression method */ Z_DEFLATED: 8
};

},{}],"2O9qo":[function(require,module,exports) {
"use strict";
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function GZheader() {
    /* true if compressed data believed to be text */ this.text = 0;
    /* modification time */ this.time = 0;
    /* extra flags (not used when writing a gzip file) */ this.xflags = 0;
    /* operating system */ this.os = 0;
    /* pointer to extra field or Z_NULL if none */ this.extra = null;
    /* extra field length (valid if extra != Z_NULL) */ this.extra_len = 0; // Actually, we don't need it in JS,
    // but leave for few code modifications
    //
    // Setup limits is not necessary because in js we should not preallocate memory
    // for inflate use constant limit in 65536 bytes
    //
    /* space at extra (only when reading header) */ // this.extra_max  = 0;
    /* pointer to zero-terminated file name or Z_NULL */ this.name = "";
    /* space at name (only when reading header) */ // this.name_max   = 0;
    /* pointer to zero-terminated comment or Z_NULL */ this.comment = "";
    /* space at comment (only when reading header) */ // this.comm_max   = 0;
    /* true if there was or will be a header crc */ this.hcrc = 0;
    /* true when done reading gzip header (not used when writing a gzip file) */ this.done = false;
}
module.exports = GZheader;

},{}],"hgMhh":[function(require,module,exports) {
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */ (function(global, factory) {
    "use strict";
    if (typeof module.exports === "object") // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket trac-14549 for more info.
    module.exports = global.document ? factory(global, true) : function(w) {
        if (!w.document) throw new Error("jQuery requires a window with a document");
        return factory(w);
    };
    else factory(global);
// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function(window1, noGlobal) {
    // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
    // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
    // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
    // enough that all such attempts are guarded in a try block.
    "use strict";
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
    } : function(array) {
        return arr.concat.apply([], array);
    };
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
    var isFunction = function isFunction(obj) {
        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
        // Plus for old WebKit, typeof returns "function" for HTML collections
        // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
    };
    var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window;
    };
    var document = window1.document;
    var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
    };
    function DOMEval(code, node, doc) {
        doc = doc || document;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) for(i in preservedScriptAttributes){
            // Support: Firefox 64+, Edge 18+
            // Some browsers don't support the "nonce" property on scripts.
            // On the other hand, just using `getAttribute` is not enough as
            // the `nonce` attribute is reset to an empty string whenever it
            // becomes browsing-context connected.
            // See https://github.com/whatwg/html/issues/2369
            // See https://html.spec.whatwg.org/#nonce-attributes
            // The `node.getAttribute` check was added for the sake of
            // `jQuery.globalEval` so that it can fake a nonce-containing node
            // via an object.
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) script.setAttribute(i, val);
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
    }
    function toType(obj) {
        if (obj == null) return obj + "";
        // Support: Android <=2.3 only (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    }
    /* global Symbol */ // Defining this global in .eslintrc.json would create a danger of using the global
    // unguarded in another place, it seems safer to define global only for this module
    var version = "3.7.1", rhtmlSuffix = /HTML$/i, // Define a local copy of jQuery
    jQuery = function(selector, context) {
        // The jQuery object is actually just the init constructor 'enhanced'
        // Need init if jQuery is called (just allow error to be thrown if not included)
        return new jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
            // Return all the elements in a clean array
            if (num == null) return slice.call(this);
            // Return just the one element from the set
            return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
            // Build a new jQuery matched element set
            var ret = jQuery.merge(this.constructor(), elems);
            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;
            // Return the newly-formed element set
            return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
            return jQuery.each(this, callback);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
                return (i + 1) % 2;
            }));
        },
        odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
                return i % 2;
            }));
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [
                this[j]
            ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;
            // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }
        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !isFunction(target)) target = {};
        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }
        for(; i < length; i++){
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) // Extend the base object
            for(name in options){
                copy = options[name];
                // Prevent Object.prototype pollution
                // Prevent never-ending loop
                if (name === "__proto__" || target === copy) continue;
                // Recurse if we're merging plain objects or arrays
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    src = target[name];
                    // Ensure proper type for the source value
                    if (copyIsArray && !Array.isArray(src)) clone = [];
                    else if (!copyIsArray && !jQuery.isPlainObject(src)) clone = {};
                    else clone = src;
                    copyIsArray = false;
                    // Never move original objects, clone them
                    target[name] = jQuery.extend(deep, clone, copy);
                // Don't bring in undefined values
                } else if (copy !== undefined) target[name] = copy;
            }
        }
        // Return the modified object
        return target;
    };
    jQuery.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
            throw new Error(msg);
        },
        noop: function() {},
        isPlainObject: function(obj) {
            var proto, Ctor;
            // Detect obvious negatives
            // Use toString instead of jQuery.type to catch host objects
            if (!obj || toString.call(obj) !== "[object Object]") return false;
            proto = getProto(obj);
            // Objects with no prototype (e.g., `Object.create( null )`) are plain
            if (!proto) return true;
            // Objects with prototype are plain iff they were constructed by a global Object function
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
            var name;
            for(name in obj)return false;
            return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
            DOMEval(code, {
                nonce: options && options.nonce
            }, doc);
        },
        each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
                length = obj.length;
                for(; i < length; i++){
                    if (callback.call(obj[i], i, obj[i]) === false) break;
                }
            } else for(i in obj){
                if (callback.call(obj[i], i, obj[i]) === false) break;
            }
            return obj;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) // If no nodeType, this is expected to be an array
            while(node = elem[i++])// Do not traverse comment nodes
            ret += jQuery.text(node);
            if (nodeType === 1 || nodeType === 11) return elem.textContent;
            if (nodeType === 9) return elem.documentElement.textContent;
            if (nodeType === 3 || nodeType === 4) return elem.nodeValue;
            // Do not include comment or processing instruction nodes
            return ret;
        },
        // results is for internal usage only
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArrayLike(Object(arr))) jQuery.merge(ret, typeof arr === "string" ? [
                    arr
                ] : arr);
                else push.call(ret, arr);
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        },
        isXMLDoc: function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            // Assume HTML when documentElement doesn't yet exist, such as inside
            // document fragments.
            return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for(; j < len; j++)first[i++] = second[j];
            first.length = i;
            return first;
        },
        grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            // Go through the array, only saving the items
            // that pass the validator function
            for(; i < length; i++){
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) matches.push(elems[i]);
            }
            return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            // Go through the array, translating each of the items to their new values
            if (isArrayLike(elems)) {
                length = elems.length;
                for(; i < length; i++){
                    value = callback(elems[i], i, arg);
                    if (value != null) ret.push(value);
                }
            // Go through every key on the object,
            } else for(i in elems){
                value = callback(elems[i], i, arg);
                if (value != null) ret.push(value);
            }
            // Flatten any nested arrays
            return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    });
    if (typeof Symbol === "function") jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    // Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArrayLike(obj) {
        // Support: real iOS 8.2 only (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) return false;
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }
    var pop = arr.pop;
    var sort = arr.sort;
    var splice = arr.splice;
    var whitespace = "[\\x20\\t\\r\\n\\f]";
    var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
    // Note: an element does not contain itself
    jQuery.contains = function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
    };
    // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
            // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
            if (ch === "\0") return "\uFFFD";
            // Control characters and (dependent upon position) numbers get escaped as code points
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        // Other potentially-special ASCII characters get backslash-escaped
        return "\\" + ch;
    }
    jQuery.escapeSelector = function(sel) {
        return (sel + "").replace(rcssescape, fcssescape);
    };
    var preferredDoc = document, pushNative = push;
    (function() {
        var i, Expr, outermostContext, sortInput, hasDuplicate, push = pushNative, // Local document vars
        document, documentElement, documentIsHTML, rbuggyQSA, matches, // Instance-specific data
        expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) hasDuplicate = true;
            return 0;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
        // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
        identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", // Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
        // 1. quoted (capture 3; capture 4 or capture 5)
        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
        "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
        ".*" + ")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, // Easily-parseable/retrievable ID or TAG or CLASS selectors
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, // CSS escapes
        // https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 0x10000;
            if (nonHex) // Strip the backslash prefix from a non-hex escape sequence
            return nonHex;
            // Replace a hexadecimal escape sequence with the encoded Unicode code point
            // Support: IE <=11+
            // For values outside the Basic Multilingual Plane (BMP), manually construct a
            // surrogate pair
            return high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        }, // Used for iframes; see `setDocument`.
        // Support: IE 9 - 11+, Edge 12 - 18+
        // Removing the function wrapper causes a "Permission Denied"
        // error in IE/Edge.
        unloadHandler = function() {
            setDocument();
        }, inDisabledFieldset = addCombinator(function(elem) {
            return elem.disabled === true && nodeName(elem, "fieldset");
        }, {
            dir: "parentNode",
            next: "legend"
        });
        // Support: IE <=9 only
        // Accessing document.activeElement can throw unexpectedly
        // https://bugs.jquery.com/ticket/13393
        function safeActiveElement() {
            try {
                return document.activeElement;
            } catch (err) {}
        }
        // Optimize for push.apply( _, NodeList )
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            // Support: Android <=4.0
            // Detect silently failing push.apply
            // eslint-disable-next-line no-unused-expressions
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: function(target, els) {
                    pushNative.apply(target, slice.call(els));
                },
                call: function(target) {
                    pushNative.apply(target, slice.call(arguments, 1));
                }
            };
        }
        function find(selector, context, results, seed) {
            var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, // nodeType defaults to 9, since context defaults to document
            nodeType = context ? context.nodeType : 9;
            results = results || [];
            // Return early from calls with invalid selector or context
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) return results;
            // Try to shortcut find operations (as opposed to filters) in HTML documents
            if (!seed) {
                setDocument(context);
                context = context || document;
                if (documentIsHTML) {
                    // If the selector is sufficiently simple, try using a "get*By*" DOM method
                    // (excepting DocumentFragment context, where the methods don't exist)
                    if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                        // ID selector
                        if (m = match[1]) {
                            // Document context
                            if (nodeType === 9) {
                                if (elem = context.getElementById(m)) // Support: IE 9 only
                                // getElementById can match elements by name instead of ID
                                {
                                    if (elem.id === m) {
                                        push.call(results, elem);
                                        return results;
                                    }
                                } else return results;
                            // Element context
                            } else // Support: IE 9 only
                            // getElementById can match elements by name instead of ID
                            if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                                push.call(results, elem);
                                return results;
                            }
                        // Type selector
                        } else if (match[2]) {
                            push.apply(results, context.getElementsByTagName(selector));
                            return results;
                        // Class selector
                        } else if ((m = match[3]) && context.getElementsByClassName) {
                            push.apply(results, context.getElementsByClassName(m));
                            return results;
                        }
                    }
                    // Take advantage of querySelectorAll
                    if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                        newSelector = selector;
                        newContext = context;
                        // qSA considers elements outside a scoping root when evaluating child or
                        // descendant combinators, which is not what we want.
                        // In such cases, we work around the behavior by prefixing every selector in the
                        // list with an ID selector referencing the scope context.
                        // The technique has to be used as well when a leading combinator is used
                        // as such selectors are not recognized by querySelectorAll.
                        // Thanks to Andrew Dupont for this technique.
                        if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                            // Expand context for sibling selectors
                            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                            // We can use :scope instead of the ID hack if the browser
                            // supports it & if we're not changing the context.
                            // Support: IE 11+, Edge 17 - 18+
                            // IE/Edge sometimes throw a "Permission denied" error when
                            // strict-comparing two documents; shallow comparisons work.
                            // eslint-disable-next-line eqeqeq
                            if (newContext != context || !support.scope) {
                                // Capture the context ID, setting it first if necessary
                                if (nid = context.getAttribute("id")) nid = jQuery.escapeSelector(nid);
                                else context.setAttribute("id", nid = expando);
                            }
                            // Prefix every selector in the list
                            groups = tokenize(selector);
                            i = groups.length;
                            while(i--)groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                            newSelector = groups.join(",");
                        }
                        try {
                            push.apply(results, newContext.querySelectorAll(newSelector));
                            return results;
                        } catch (qsaError) {
                            nonnativeSelectorCache(selector, true);
                        } finally{
                            if (nid === expando) context.removeAttribute("id");
                        }
                    }
                }
            }
            // All others
            return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
        }
        /**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */ function createCache() {
            var keys = [];
            function cache(key, value) {
                // Use (key + " ") to avoid collision with native prototype properties
                // (see https://github.com/jquery/sizzle/issues/157)
                if (keys.push(key + " ") > Expr.cacheLength) // Only keep the most recent entries
                delete cache[keys.shift()];
                return cache[key + " "] = value;
            }
            return cache;
        }
        /**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */ function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }
        /**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */ function assert(fn) {
            var el = document.createElement("fieldset");
            try {
                return !!fn(el);
            } catch (e) {
                return false;
            } finally{
                // Remove from its parent by default
                if (el.parentNode) el.parentNode.removeChild(el);
                // release memory in IE
                el = null;
            }
        }
        /**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */ function createInputPseudo(type) {
            return function(elem) {
                return nodeName(elem, "input") && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */ function createButtonPseudo(type) {
            return function(elem) {
                return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */ function createDisabledPseudo(disabled) {
            // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
            return function(elem) {
                // Only certain elements can match :enabled or :disabled
                // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                if ("form" in elem) {
                    // Check for inherited disabledness on relevant non-disabled elements:
                    // * listed form-associated elements in a disabled fieldset
                    //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                    // * option elements in a disabled optgroup
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                    // All such elements have a "form" property.
                    if (elem.parentNode && elem.disabled === false) {
                        // Option elements defer to a parent optgroup if present
                        if ("label" in elem) {
                            if ("label" in elem.parentNode) return elem.parentNode.disabled === disabled;
                            else return elem.disabled === disabled;
                        }
                        // Support: IE 6 - 11+
                        // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                        return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                        elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                    }
                    return elem.disabled === disabled;
                // Try to winnow out elements that can't be disabled before trusting the disabled property.
                // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                // even exist on them, let alone have a boolean value.
                } else if ("label" in elem) return elem.disabled === disabled;
                // Remaining elements are neither :enabled nor :disabled
                return false;
            };
        }
        /**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */ function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    // Match elements found at the specified indexes
                    while(i--)if (seed[j = matchIndexes[i]]) seed[j] = !(matches[j] = seed[j]);
                });
            });
        }
        /**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */ function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        /**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */ function setDocument(node) {
            var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            // Return early if doc is invalid or already selected
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if (doc == document || doc.nodeType !== 9 || !doc.documentElement) return document;
            // Update global variables
            document = doc;
            documentElement = document.documentElement;
            documentIsHTML = !jQuery.isXMLDoc(document);
            // Support: iOS 7 only, IE 9 - 11+
            // Older browsers didn't support unprefixed `matches`.
            matches = documentElement.matches || documentElement.webkitMatchesSelector || documentElement.msMatchesSelector;
            // Support: IE 9 - 11+, Edge 12 - 18+
            // Accessing iframe documents after unload throws "permission denied" errors
            // (see trac-13936).
            // Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,
            // all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.
            if (documentElement.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) // Support: IE 9 - 11+, Edge 12 - 18+
            subWindow.addEventListener("unload", unloadHandler);
            // Support: IE <10
            // Check if getElementById returns elements by name
            // The broken getElementById methods don't pick up programmatically-set names,
            // so use a roundabout getElementsByName test
            support.getById = assert(function(el) {
                documentElement.appendChild(el).id = jQuery.expando;
                return !document.getElementsByName || !document.getElementsByName(jQuery.expando).length;
            });
            // Support: IE 9 only
            // Check to see if it's possible to do matchesSelector
            // on a disconnected node.
            support.disconnectedMatch = assert(function(el) {
                return matches.call(el, "*");
            });
            // Support: IE 9 - 11+, Edge 12 - 18+
            // IE/Edge don't support the :scope pseudo-class.
            support.scope = assert(function() {
                return document.querySelectorAll(":scope");
            });
            // Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
            // Make sure the `:has()` argument is parsed unforgivingly.
            // We include `*` in the test to detect buggy implementations that are
            // _selectively_ forgiving (specifically when the list includes at least
            // one valid selector).
            // Note that we treat complete lack of support for `:has()` as if it were
            // spec-compliant support, which is fine because use of `:has()` in such
            // environments will fail in the qSA path and fall back to jQuery traversal
            // anyway.
            support.cssHas = assert(function() {
                try {
                    document.querySelector(":has(*,:jqfake)");
                    return false;
                } catch (e) {
                    return true;
                }
            });
            // ID filter and find
            if (support.getById) {
                Expr.filter.ID = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId;
                    };
                };
                Expr.find.ID = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var elem = context.getElementById(id);
                        return elem ? [
                            elem
                        ] : [];
                    }
                };
            } else {
                Expr.filter.ID = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    };
                };
                // Support: IE 6 - 7 only
                // getElementById is not reliable as a find shortcut
                Expr.find.ID = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var node, i, elems, elem = context.getElementById(id);
                        if (elem) {
                            // Verify the id attribute
                            node = elem.getAttributeNode("id");
                            if (node && node.value === id) return [
                                elem
                            ];
                            // Fall back on getElementsByName
                            elems = context.getElementsByName(id);
                            i = 0;
                            while(elem = elems[i++]){
                                node = elem.getAttributeNode("id");
                                if (node && node.value === id) return [
                                    elem
                                ];
                            }
                        }
                        return [];
                    }
                };
            }
            // Tag
            Expr.find.TAG = function(tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") return context.getElementsByTagName(tag);
                else return context.querySelectorAll(tag);
            };
            // Class
            Expr.find.CLASS = function(className, context) {
                if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) return context.getElementsByClassName(className);
            };
            /* QSA/matchesSelector
	---------------------------------------------------------------------- */ // QSA and matchesSelector support
            rbuggyQSA = [];
            // Build QSA regex
            // Regex strategy adopted from Diego Perini
            assert(function(el) {
                var input;
                documentElement.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a>" + "<select id='" + expando + "-\r\\' disabled='disabled'>" + "<option selected=''></option></select>";
                // Support: iOS <=7 - 8 only
                // Boolean attributes and "value" are not treated correctly in some XML documents
                if (!el.querySelectorAll("[selected]").length) rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                // Support: iOS <=7 - 8 only
                if (!el.querySelectorAll("[id~=" + expando + "-]").length) rbuggyQSA.push("~=");
                // Support: iOS 8 only
                // https://bugs.webkit.org/show_bug.cgi?id=136851
                // In-page `selector#id sibling-combinator selector` fails
                if (!el.querySelectorAll("a#" + expando + "+*").length) rbuggyQSA.push(".#.+[+~]");
                // Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
                // In some of the document kinds, these selectors wouldn't work natively.
                // This is probably OK but for backwards compatibility we want to maintain
                // handling them through jQuery traversal in jQuery 3.x.
                if (!el.querySelectorAll(":checked").length) rbuggyQSA.push(":checked");
                // Support: Windows 8 Native Apps
                // The type and name attributes are restricted during .innerHTML assignment
                input = document.createElement("input");
                input.setAttribute("type", "hidden");
                el.appendChild(input).setAttribute("name", "D");
                // Support: IE 9 - 11+
                // IE's :disabled selector does not pick up the children of disabled fieldsets
                // Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
                // In some of the document kinds, these selectors wouldn't work natively.
                // This is probably OK but for backwards compatibility we want to maintain
                // handling them through jQuery traversal in jQuery 3.x.
                documentElement.appendChild(el).disabled = true;
                if (el.querySelectorAll(":disabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                // Support: IE 11+, Edge 15 - 18+
                // IE 11/Edge don't find elements on a `[name='']` query in some cases.
                // Adding a temporary attribute to the document before the selection works
                // around the issue.
                // Interestingly, IE 10 & older don't seem to have the issue.
                input = document.createElement("input");
                input.setAttribute("name", "");
                el.appendChild(input);
                if (!el.querySelectorAll("[name='']").length) rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
            });
            if (!support.cssHas) // Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
            // Our regular `try-catch` mechanism fails to detect natively-unsupported
            // pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
            // in browsers that parse the `:has()` argument as a forgiving selector list.
            // https://drafts.csswg.org/selectors/#relational now requires the argument
            // to be parsed unforgivingly, but browsers have not yet fully adjusted.
            rbuggyQSA.push(":has");
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            /* Sorting
	---------------------------------------------------------------------- */ // Document order sorting
            sortOrder = function(a, b) {
                // Flag for duplicate removal
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                // Sort on method existence if only one input has compareDocumentPosition
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) return compare;
                // Calculate position if both inputs belong to the same document
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
                1;
                // Disconnected nodes
                if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                    // Choose the first element that is related to our preferred document
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (a === document || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) return -1;
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (b === document || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) return 1;
                    // Maintain original order
                    return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                }
                return compare & 4 ? -1 : 1;
            };
            return document;
        }
        find.matches = function(expr, elements) {
            return find(expr, null, null, elements);
        };
        find.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                var ret = matches.call(elem, expr);
                // IE 9's matchesSelector returns false on disconnected nodes
                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) return ret;
            } catch (e) {
                nonnativeSelectorCache(expr, true);
            }
            return find(expr, document, null, [
                elem
            ]).length > 0;
        };
        find.contains = function(context, elem) {
            // Set document vars if needed
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if ((context.ownerDocument || context) != document) setDocument(context);
            return jQuery.contains(context, elem);
        };
        find.attr = function(elem, name) {
            // Set document vars if needed
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if ((elem.ownerDocument || elem) != document) setDocument(elem);
            var fn = Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (see trac-13807)
            val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            if (val !== undefined) return val;
            return elem.getAttribute(name);
        };
        find.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        /**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */ jQuery.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            // Unless we *know* we can detect duplicates, assume their presence
            //
            // Support: Android <=4.0+
            // Testing for detecting duplicates is unpredictable so instead assume we can't
            // depend on duplicate detection in all browsers without a stable sort.
            hasDuplicate = !support.sortStable;
            sortInput = !support.sortStable && slice.call(results, 0);
            sort.call(results, sortOrder);
            if (hasDuplicate) {
                while(elem = results[i++])if (elem === results[i]) j = duplicates.push(i);
                while(j--)splice.call(results, duplicates[j], 1);
            }
            // Clear input after sorting to release objects
            // See https://github.com/jquery/sizzle/pull/225
            sortInput = null;
            return results;
        };
        jQuery.fn.uniqueSort = function() {
            return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
        };
        Expr = jQuery.expr = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    // Move the given value to match[3] whether quoted or unquoted
                    match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") match[3] = " " + match[3] + " ";
                    return match.slice(0, 4);
                },
                CHILD: function(match) {
                    /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/ match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        // nth-* requires argument
                        if (!match[3]) find.error(match[0]);
                        // numeric x and y parameters for Expr.filter.CHILD
                        // remember that false/true cast respectively to 0/1
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    // other types prohibit arguments
                    } else if (match[3]) find.error(match[0]);
                    return match;
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    if (matchExpr.CHILD.test(match[0])) return null;
                    // Accept quoted arguments as-is
                    if (match[3]) match[2] = match[4] || match[5] || "";
                    else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                    (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                    (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        // excess is a negative index
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }
                    // Return only captures needed by the pseudo filter method (type and argument)
                    return match.slice(0, 3);
                }
            },
            filter: {
                TAG: function(nodeNameSelector) {
                    var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return true;
                    } : function(elem) {
                        return nodeName(elem, expectedNodeName);
                    };
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)"), classCache(className, function(elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                    }));
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = find.attr(elem, name);
                        if (result == null) return operator === "!=";
                        if (!operator) return true;
                        result += "";
                        if (operator === "=") return result === check;
                        if (operator === "!=") return result !== check;
                        if (operator === "^=") return check && result.indexOf(check) === 0;
                        if (operator === "*=") return check && result.indexOf(check) > -1;
                        if (operator === "$=") return check && result.slice(-check.length) === check;
                        if (operator === "~=") return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                        if (operator === "|=") return result === check || result.slice(0, check.length + 1) === check + "-";
                        return false;
                    };
                },
                CHILD: function(type, what, _argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
                    function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, _context, xml) {
                        var cache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                        if (parent) {
                            // :(first|last|only)-(child|of-type)
                            if (simple) {
                                while(dir){
                                    node = elem;
                                    while(node = node[dir]){
                                        if (ofType ? nodeName(node, name) : node.nodeType === 1) return false;
                                    }
                                    // Reverse direction for :only-* (if we haven't yet done so)
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
                            start = [
                                forward ? parent.firstChild : parent.lastChild
                            ];
                            // non-xml :nth-child(...) stores cache data on `parent`
                            if (forward && useCache) {
                                // Seek `elem` from a previously-cached index
                                outerCache = parent[expando] || (parent[expando] = {});
                                cache = outerCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = nodeIndex && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while(node = ++nodeIndex && node && node[dir] || // Fallback to seeking `elem` from the start
                                (diff = nodeIndex = 0) || start.pop())// When found, cache indexes on `parent` and break
                                if (node.nodeType === 1 && ++diff && node === elem) {
                                    outerCache[type] = [
                                        dirruns,
                                        nodeIndex,
                                        diff
                                    ];
                                    break;
                                }
                            } else {
                                // Use previously-cached element index if available
                                if (useCache) {
                                    outerCache = elem[expando] || (elem[expando] = {});
                                    cache = outerCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex;
                                }
                                // xml :nth-child(...)
                                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                if (diff === false) {
                                    // Use the same loop as above to seek `elem` from the start
                                    while(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                                        // Cache the index of each encountered element
                                        if (useCache) {
                                            outerCache = node[expando] || (node[expando] = {});
                                            outerCache[type] = [
                                                dirruns,
                                                diff
                                            ];
                                        }
                                        if (node === elem) break;
                                    }
                                }
                            }
                            // Incorporate the offset, then check against cycle size
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                PSEUDO: function(pseudo, argument) {
                    // pseudo-class names are case-insensitive
                    // https://www.w3.org/TR/selectors/#pseudo-classes
                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                    // Remember that setFilters inherits from pseudos
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as jQuery does
                    if (fn[expando]) return fn(argument);
                    // But maintain support for old signatures
                    if (fn.length > 1) {
                        args = [
                            pseudo,
                            pseudo,
                            "",
                            argument
                        ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while(i--){
                                idx = indexOf.call(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                // Potentially complex pseudos
                not: markFunction(function(selector) {
                    // Trim the selector passed to compile
                    // to avoid treating leading and trailing
                    // spaces as combinators
                    var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, _context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        // Match elements unmatched by `matcher`
                        while(i--)if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
                    }) : function(elem, _context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        // Don't keep the element
                        // (see https://github.com/jquery/sizzle/issues/299)
                        input[0] = null;
                        return !results.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return find(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(text) {
                    text = text.replace(runescape, funescape);
                    return function(elem) {
                        return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
                    };
                }),
                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // https://www.w3.org/TR/selectors/#lang-pseudo
                lang: markFunction(function(lang) {
                    // lang value must be a valid identifier
                    if (!ridentifier.test(lang || "")) find.error("unsupported lang: " + lang);
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                            elemLang = elemLang.toLowerCase();
                            return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                        }
                        while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                    };
                }),
                // Miscellaneous
                target: function(elem) {
                    var hash = window1.location && window1.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                    return elem === documentElement;
                },
                focus: function(elem) {
                    return elem === safeActiveElement() && document.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                // Boolean properties
                enabled: createDisabledPseudo(false),
                disabled: createDisabledPseudo(true),
                checked: function(elem) {
                    // In CSS3, :checked should return both checked and selected elements
                    // https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
                },
                selected: function(elem) {
                    // Support: IE <=11+
                    // Accessing the selectedIndex property
                    // forces the browser to treat the default option as
                    // selected when in an optgroup.
                    if (elem.parentNode) // eslint-disable-next-line no-unused-expressions
                    elem.parentNode.selectedIndex;
                    return elem.selected === true;
                },
                // Contents
                empty: function(elem) {
                    // https://www.w3.org/TR/selectors/#empty-pseudo
                    // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                    //   but not by others (comment: 8; processing instruction: 7; etc.)
                    // nodeType < 6 works because attributes (2) do not appear as children
                    for(elem = elem.firstChild; elem; elem = elem.nextSibling){
                        if (elem.nodeType < 6) return false;
                    }
                    return true;
                },
                parent: function(elem) {
                    return !Expr.pseudos.empty(elem);
                },
                // Element/input types
                header: function(elem) {
                    return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                    return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
                },
                text: function(elem) {
                    var attr;
                    return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
                    // New HTML5 attribute values (e.g., "search") appear
                    // with elem.type === "text"
                    ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },
                // Position-in-collection
                first: createPositionalPseudo(function() {
                    return [
                        0
                    ];
                }),
                last: createPositionalPseudo(function(_matchIndexes, length) {
                    return [
                        length - 1
                    ];
                }),
                eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                    return [
                        argument < 0 ? argument + length : argument
                    ];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for(; i < length; i += 2)matchIndexes.push(i);
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for(; i < length; i += 2)matchIndexes.push(i);
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i;
                    if (argument < 0) i = argument + length;
                    else if (argument > length) i = length;
                    else i = argument;
                    for(; --i >= 0;)matchIndexes.push(i);
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for(; ++i < length;)matchIndexes.push(i);
                    return matchIndexes;
                })
            }
        };
        Expr.pseudos.nth = Expr.pseudos.eq;
        // Add button/input type pseudos
        for(i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        })Expr.pseudos[i] = createInputPseudo(i);
        for(i in {
            submit: true,
            reset: true
        })Expr.pseudos[i] = createButtonPseudo(i);
        // Easy API for creating new setFilters
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) return parseOnly ? 0 : cached.slice(0);
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while(soFar){
                // Comma and first run
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) // Don't consume trailing commas as valid
                    soFar = soFar.slice(match[0].length) || soFar;
                    groups.push(tokens = []);
                }
                matched = false;
                // Combinators
                if (match = rleadingCombinator.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        // Cast descendant combinators to space
                        type: match[0].replace(rtrimCSS, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                // Filters
                for(type in Expr.filter)if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: type,
                        matches: match
                    });
                    soFar = soFar.slice(matched.length);
                }
                if (!matched) break;
            }
            // Return the length of the invalid excess
            // if we're just parsing
            // Otherwise, throw an error or return tokens
            if (parseOnly) return soFar.length;
            return soFar ? find.error(selector) : // Cache the tokens
            tokenCache(selector, groups).slice(0);
        }
        function toSelector(tokens) {
            var i = 0, len = tokens.length, selector = "";
            for(; i < len; i++)selector += tokens[i].value;
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? // Check against closest ancestor/preceding element
            function(elem, context, xml) {
                while(elem = elem[dir]){
                    if (elem.nodeType === 1 || checkNonElements) return matcher(elem, context, xml);
                }
                return false;
            } : // Check against all ancestor/preceding elements
            function(elem, context, xml) {
                var oldCache, outerCache, newCache = [
                    dirruns,
                    doneName
                ];
                // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                if (xml) {
                    while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                        if (matcher(elem, context, xml)) return true;
                    }
                } else {
                    while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        if (skip && nodeName(elem, skip)) elem = elem[dir] || elem;
                        else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) // Assign to newCache so results back-propagate to previous elements
                        return newCache[2] = oldCache[2];
                        else {
                            // Reuse newcache so results back-propagate to previous elements
                            outerCache[key] = newCache;
                            // A match means we're done; a fail means we have to keep checking
                            if (newCache[2] = matcher(elem, context, xml)) return true;
                        }
                    }
                }
                return false;
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while(i--){
                    if (!matchers[i](elem, context, xml)) return false;
                }
                return true;
            } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
            var i = 0, len = contexts.length;
            for(; i < len; i++)find(selector, contexts[i], results);
            return results;
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for(; i < len; i++){
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) map.push(i);
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) postFilter = setMatcher(postFilter);
            if (postFinder && !postFinder[expando]) postFinder = setMatcher(postFinder, postSelector);
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, // Get initial elements from seed or context
                elems = seed || multipleContexts(selector || "*", context.nodeType ? [
                    context
                ] : context, []), // Prefilter to get matcher input, preserving a map for seed-results synchronization
                matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
                if (matcher) {
                    // If we have a postFinder, or filtered seed, or non-seed postFilter
                    // or preexisting results,
                    matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
                    [] : // ...otherwise use results directly
                    results;
                    // Find primary matches
                    matcher(matcherIn, matcherOut, context, xml);
                } else matcherOut = matcherIn;
                // Apply postFilter
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    // Un-match failing elements by moving them back to matcherIn
                    i = temp.length;
                    while(i--)if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            // Get the final matcherOut by condensing this intermediate into postFinder contexts
                            temp = [];
                            i = matcherOut.length;
                            while(i--)if (elem = matcherOut[i]) // Restore matcherIn since elem is not yet a final match
                            temp.push(matcherIn[i] = elem);
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        // Move matched elements from seed to results to keep them synchronized
                        i = matcherOut.length;
                        while(i--)if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) seed[temp] = !(results[temp] = elem);
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) postFinder(null, results, matcherOut, xml);
                    else push.apply(results, matcherOut);
                }
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, // The foundational matcher ensures that elements are reachable from top-level context(s)
            matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [
                function(elem, context, xml) {
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                    // Avoid hanging onto element
                    // (see https://github.com/jquery/sizzle/issues/299)
                    checkContext = null;
                    return ret;
                }
            ];
            for(; i < len; i++)if (matcher = Expr.relative[tokens[i].type]) matchers = [
                addCombinator(elementMatcher(matchers), matcher)
            ];
            else {
                matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                // Return special upon seeing a positional matcher
                if (matcher[expando]) {
                    // Find the next relative operator (if any) for proper handling
                    j = ++i;
                    for(; j < len; j++){
                        if (Expr.relative[tokens[j].type]) break;
                    }
                    return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    tokens.slice(0, i - 1).concat({
                        value: tokens[i - 2].type === " " ? "*" : ""
                    })).replace(rtrimCSS, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                }
                matchers.push(matcher);
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, // We must always have either seed elements or outermost context
                elems = seed || byElement && Expr.find.TAG("*", outermost), // Use integer dirruns iff this is the outermost matcher
                dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
                if (outermost) // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                outermostContext = context == document || context || outermost;
                // Add elements passing elementMatchers directly to results
                // Support: iOS <=7 - 9 only
                // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
                // elements by id. (see trac-14142)
                for(; i !== len && (elem = elems[i]) != null; i++){
                    if (byElement && elem) {
                        j = 0;
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (!context && elem.ownerDocument != document) {
                            setDocument(elem);
                            xml = !documentIsHTML;
                        }
                        while(matcher = elementMatchers[j++])if (matcher(elem, context || document, xml)) {
                            push.call(results, elem);
                            break;
                        }
                        if (outermost) dirruns = dirrunsUnique;
                    }
                    // Track unmatched elements for set filters
                    if (bySet) {
                        // They will have gone through all possible matchers
                        if (elem = !matcher && elem) matchedCount--;
                        // Lengthen the array for every element, matched or not
                        if (seed) unmatched.push(elem);
                    }
                }
                // `i` is now the count of elements visited above, and adding it to `matchedCount`
                // makes the latter nonnegative.
                matchedCount += i;
                // Apply set filters to unmatched elements
                // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                // no element matchers and no seed.
                // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                // numerically zero.
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while(matcher = setMatchers[j++])matcher(unmatched, setMatched, context, xml);
                    if (seed) {
                        // Reintegrate element matches to eliminate the need for sorting
                        if (matchedCount > 0) {
                            while(i--)if (!(unmatched[i] || setMatched[i])) setMatched[i] = pop.call(results);
                        }
                        // Discard index placeholder values to get only actual matches
                        setMatched = condense(setMatched);
                    }
                    // Add matches to results
                    push.apply(results, setMatched);
                    // Seedless set matches succeeding multiple successful matchers stipulate sorting
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) jQuery.uniqueSort(results);
                }
                // Override manipulation of globals by nested matchers
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        function compile(selector, match /* Internal Use Only */ ) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                // Generate a function of recursive functions that can be used to check each element
                if (!match) match = tokenize(selector);
                i = match.length;
                while(i--){
                    cached = matcherFromTokens(match[i]);
                    if (cached[expando]) setMatchers.push(cached);
                    else elementMatchers.push(cached);
                }
                // Cache the compiled function
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                // Save selector and tokenization
                cached.selector = selector;
            }
            return cached;
        }
        /**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */ function select(selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            // Try to minimize operations if there is only one selector in the list and no seed
            // (the latter of which guarantees us context)
            if (match.length === 1) {
                // Reduce context if the leading compound selector is an ID
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                    context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0];
                    if (!context) return results;
                    else if (compiled) context = context.parentNode;
                    selector = selector.slice(tokens.shift().value.length);
                }
                // Fetch a seed set for right-to-left matching
                i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
                while(i--){
                    token = tokens[i];
                    // Abort if we hit a combinator
                    if (Expr.relative[type = token.type]) break;
                    if (find = Expr.find[type]) // Search, expanding context for leading sibling combinators
                    {
                        if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                            // If seed is empty or no tokens remain, we can return early
                            tokens.splice(i, 1);
                            selector = seed.length && toSelector(tokens);
                            if (!selector) {
                                push.apply(results, seed);
                                return results;
                            }
                            break;
                        }
                    }
                }
            }
            // Compile and execute a filtering function if one is not provided
            // Provide `match` to avoid retokenization if we modified the selector above
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
        }
        // One-time assignments
        // Support: Android <=4.0 - 4.1+
        // Sort stability
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        // Initialize against the default document
        setDocument();
        // Support: Android <=4.0 - 4.1+
        // Detached nodes confoundingly follow *each other*
        support.sortDetached = assert(function(el) {
            // Should return 1, but returns 4 (following)
            return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
        });
        jQuery.find = find;
        // Deprecated
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = jQuery.uniqueSort;
        // These have always been private, but they used to be documented as part of
        // Sizzle so let's maintain them for now for backwards compatibility purposes.
        find.compile = compile;
        find.select = select;
        find.setDocument = setDocument;
        find.tokenize = tokenize;
        find.escape = jQuery.escapeSelector;
        find.getText = jQuery.text;
        find.isXML = jQuery.isXMLDoc;
        find.selectors = jQuery.expr;
        find.support = jQuery.support;
        find.uniqueSort = jQuery.uniqueSort;
    /* eslint-enable */ })();
    var dir = function(elem, dir, until) {
        var matched = [], truncate = until !== undefined;
        while((elem = elem[dir]) && elem.nodeType !== 9)if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) break;
            matched.push(elem);
        }
        return matched;
    };
    var siblings = function(n, elem) {
        var matched = [];
        for(; n; n = n.nextSibling)if (n.nodeType === 1 && n !== elem) matched.push(n);
        return matched;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    // Implement the identical functionality for filter and not
    function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
        });
        // Single element
        if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
        });
        // Arraylike of elements (jQuery, arguments, Array)
        if (typeof qualifier !== "string") return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
        });
        // Filtered directly for both simple and complex selectors
        return jQuery.filter(qualifier, elements, not);
    }
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) expr = ":not(" + expr + ")";
        if (elems.length === 1 && elem.nodeType === 1) return jQuery.find.matchesSelector(elem, expr) ? [
            elem
        ] : [];
        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return elem.nodeType === 1;
        }));
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, ret, len = this.length, self = this;
            if (typeof selector !== "string") return this.pushStack(jQuery(selector).filter(function() {
                for(i = 0; i < len; i++){
                    if (jQuery.contains(self[i], this)) return true;
                }
            }));
            ret = this.pushStack([]);
            for(i = 0; i < len; i++)jQuery.find(selector, self[i], ret);
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
            return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
    });
    // Initialize a jQuery object
    // A central reference to the root jQuery(document)
    var rootjQuery, // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
    // Strict HTML recognition (trac-11290: must start with <)
    // Shortcut simple #id case for speed
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
        var match, elem;
        // HANDLE: $(""), $(null), $(undefined), $(false)
        if (!selector) return this;
        // Method init() accepts an alternate rootjQuery
        // so migrate can support jQuery.sub (gh-2101)
        root = root || rootjQuery;
        // Handle HTML strings
        if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) // Assume that strings that start and end with <> are HTML and skip the regex check
            match = [
                null,
                selector,
                null
            ];
            else match = rquickExpr.exec(selector);
            // Match html or make sure no context is specified for #id
            if (match && (match[1] || !context)) {
                // HANDLE: $(html) -> $(array)
                if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;
                    // Option to run scripts is true for back-compat
                    // Intentionally let the error be thrown if parseHTML is not present
                    jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                    // HANDLE: $(html, props)
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                        for(match in context)// Properties of context are called as methods if possible
                        if (isFunction(this[match])) this[match](context[match]);
                        else this.attr(match, context[match]);
                    }
                    return this;
                // HANDLE: $(#id)
                } else {
                    elem = document.getElementById(match[2]);
                    if (elem) {
                        // Inject the element directly into the jQuery object
                        this[0] = elem;
                        this.length = 1;
                    }
                    return this;
                }
            } else if (!context || context.jquery) return (context || root).find(selector);
            else return this.constructor(context).find(selector);
        // HANDLE: $(DOMElement)
        } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
        // HANDLE: $(function)
        // Shortcut for document ready
        } else if (isFunction(selector)) return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
        selector(jQuery);
        return jQuery.makeArray(selector, this);
    };
    // Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;
    // Initialize central reference
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
    guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
                var i = 0;
                for(; i < l; i++){
                    if (jQuery.contains(this, targets[i])) return true;
                }
            });
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            // Positional selectors never match, since there's no _selection_ context
            if (!rneedsContext.test(selectors)) for(; i < l; i++){
                for(cur = this[i]; cur && cur !== context; cur = cur.parentNode)// Always skip document fragments
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to jQuery#find
                cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                    matched.push(cur);
                    break;
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
            // No argument, return index in parent
            if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            // Index in selector
            if (typeof elem === "string") return indexOf.call(jQuery(elem), this[0]);
            // Locate the position of the desired element
            return indexOf.call(this, // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    function sibling(cur, dir) {
        while((cur = cur[dir]) && cur.nodeType !== 1);
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return siblings(elem.firstChild);
        },
        contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) return elem.contentDocument;
            // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
            // Treat the template element as a regular one in browsers that
            // don't support it.
            if (nodeName(elem, "template")) elem = elem.content || elem;
            return jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") selector = until;
            if (selector && typeof selector === "string") matched = jQuery.filter(selector, matched);
            if (this.length > 1) {
                // Remove duplicates
                if (!guaranteedUnique[name]) jQuery.uniqueSort(matched);
                // Reverse order for parents* and prev-derivatives
                if (rparentsprev.test(name)) matched.reverse();
            }
            return this.pushStack(matched);
        };
    });
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    // Convert String-formatted options into Object-formatted ones
    function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    /*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */ jQuery.Callbacks = function(options) {
        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing, // Last fire value for non-forgettable lists
        memory, // Flag to know if list was already fired
        fired, // Flag to prevent firing
        locked, // Actual callback list
        list = [], // Queue of execution data for repeatable lists
        queue = [], // Index of currently firing callback (modified by add/remove as needed)
        firingIndex = -1, // Fire callbacks
        fire = function() {
            // Enforce single-firing
            locked = locked || options.once;
            // Execute callbacks for all pending executions,
            // respecting firingIndex overrides and runtime changes
            fired = firing = true;
            for(; queue.length; firingIndex = -1){
                memory = queue.shift();
                while(++firingIndex < list.length)// Run callback and check for early termination
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                    // Jump to end and forget the data so .add doesn't re-fire
                    firingIndex = list.length;
                    memory = false;
                }
            }
            // Forget the data if we're done with it
            if (!options.memory) memory = false;
            firing = false;
            // Clean up if we're done firing for good
            if (locked) {
                // Keep an empty list if we have data for future add calls
                if (memory) list = [];
                else list = "";
            }
        }, // Actual Callbacks object
        self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
                if (list) {
                    // If we have memory from a past run, we should fire after adding
                    if (memory && !firing) {
                        firingIndex = list.length - 1;
                        queue.push(memory);
                    }
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            if (isFunction(arg)) {
                                if (!options.unique || !self.has(arg)) list.push(arg);
                            } else if (arg && arg.length && toType(arg) !== "string") // Inspect recursively
                            add(arg);
                        });
                    })(arguments);
                    if (memory && !firing) fire();
                }
                return this;
            },
            // Remove a callback from the list
            remove: function() {
                jQuery.each(arguments, function(_, arg) {
                    var index;
                    while((index = jQuery.inArray(arg, list, index)) > -1){
                        list.splice(index, 1);
                        // Handle firing indexes
                        if (index <= firingIndex) firingIndex--;
                    }
                });
                return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
                if (list) list = [];
                return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
                locked = queue = [];
                list = memory = "";
                return this;
            },
            disabled: function() {
                return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
                locked = queue = [];
                if (!memory && !firing) list = memory = "";
                return this;
            },
            locked: function() {
                return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
                if (!locked) {
                    args = args || [];
                    args = [
                        context,
                        args.slice ? args.slice() : args
                    ];
                    queue.push(args);
                    if (!firing) fire();
                }
                return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
                self.fireWith(this, arguments);
                return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
                return !!fired;
            }
        };
        return self;
    };
    function Identity(v) {
        return v;
    }
    function Thrower(ex) {
        throw ex;
    }
    function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
            // Check for promise aspect first to privilege synchronous behavior
            if (value && isFunction(method = value.promise)) method.call(value).done(resolve).fail(reject);
            else if (value && isFunction(method = value.then)) method.call(value, resolve, reject);
            else // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
            // * false: [ value ].slice( 0 ) => resolve( value )
            // * true: [ value ].slice( 1 ) => resolve()
            resolve.apply(undefined, [
                value
            ].slice(noValue));
        // For Promises/A+, convert exceptions into rejections
        // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
        // Deferred#then to conditionally suppress rejection.
        } catch (value) {
            // Support: Android 4.0 only
            // Strict mode functions invoked without .call/.apply get global-object context
            reject.apply(undefined, [
                value
            ]);
        }
    }
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [
                // action, add listener, callbacks,
                // ... .then handlers, argument index, [final state]
                [
                    "notify",
                    "progress",
                    jQuery.Callbacks("memory"),
                    jQuery.Callbacks("memory"),
                    2
                ],
                [
                    "resolve",
                    "done",
                    jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"),
                    0,
                    "resolved"
                ],
                [
                    "reject",
                    "fail",
                    jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"),
                    1,
                    "rejected"
                ]
            ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                "catch": function(fn) {
                    return promise.then(null, fn);
                },
                // Keep pipe for back-compat
                pipe: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(_i, tuple) {
                            // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                            var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                            // deferred.progress(function() { bind to newDefer or newDefer.notify })
                            // deferred.done(function() { bind to newDefer or newDefer.resolve })
                            // deferred.fail(function() { bind to newDefer or newDefer.reject })
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && isFunction(returned.promise)) returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                else newDefer[tuple[0] + "With"](this, fn ? [
                                    returned
                                ] : arguments);
                            });
                        });
                        fns = null;
                    }).promise();
                },
                then: function(onFulfilled, onRejected, onProgress) {
                    var maxDepth = 0;
                    function resolve(depth, deferred, handler, special) {
                        return function() {
                            var that = this, args = arguments, mightThrow = function() {
                                var returned, then;
                                // Support: Promises/A+ section 2.3.3.3.3
                                // https://promisesaplus.com/#point-59
                                // Ignore double-resolution attempts
                                if (depth < maxDepth) return;
                                returned = handler.apply(that, args);
                                // Support: Promises/A+ section 2.3.1
                                // https://promisesaplus.com/#point-48
                                if (returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                // Support: Promises/A+ sections 2.3.3.1, 3.5
                                // https://promisesaplus.com/#point-54
                                // https://promisesaplus.com/#point-75
                                // Retrieve `then` only once
                                then = returned && // Support: Promises/A+ section 2.3.4
                                // https://promisesaplus.com/#point-64
                                // Only check objects and functions for thenability
                                (typeof returned === "object" || typeof returned === "function") && returned.then;
                                // Handle a returned thenable
                                if (isFunction(then)) {
                                    // Special processors (notify) just wait for resolution
                                    if (special) then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                                    else {
                                        // ...and disregard older resolution values
                                        maxDepth++;
                                        then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                    }
                                } else {
                                    // Only substitute handlers pass on context
                                    // and multiple values (non-spec behavior)
                                    if (handler !== Identity) {
                                        that = undefined;
                                        args = [
                                            returned
                                        ];
                                    }
                                    // Process the value(s)
                                    // Default process is resolve
                                    (special || deferred.resolveWith)(that, args);
                                }
                            }, // Only normal processors (resolve) catch and reject exceptions
                            process = special ? mightThrow : function() {
                                try {
                                    mightThrow();
                                } catch (e) {
                                    if (jQuery.Deferred.exceptionHook) jQuery.Deferred.exceptionHook(e, process.error);
                                    // Support: Promises/A+ section 2.3.3.3.4.1
                                    // https://promisesaplus.com/#point-61
                                    // Ignore post-resolution exceptions
                                    if (depth + 1 >= maxDepth) {
                                        // Only substitute handlers pass on context
                                        // and multiple values (non-spec behavior)
                                        if (handler !== Thrower) {
                                            that = undefined;
                                            args = [
                                                e
                                            ];
                                        }
                                        deferred.rejectWith(that, args);
                                    }
                                }
                            };
                            // Support: Promises/A+ section 2.3.3.3.1
                            // https://promisesaplus.com/#point-57
                            // Re-resolve promises immediately to dodge false rejection from
                            // subsequent errors
                            if (depth) process();
                            else {
                                // Call an optional hook to record the error, in case of exception
                                // since it's otherwise lost when execution goes async
                                if (jQuery.Deferred.getErrorHook) process.error = jQuery.Deferred.getErrorHook();
                                else if (jQuery.Deferred.getStackHook) process.error = jQuery.Deferred.getStackHook();
                                window1.setTimeout(process);
                            }
                        };
                    }
                    return jQuery.Deferred(function(newDefer) {
                        // progress_handlers.add( ... )
                        tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                        // fulfilled_handlers.add( ... )
                        tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                        // rejected_handlers.add( ... )
                        tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                    }).promise();
                },
                // Get a promise for this deferred
                // If obj is provided, the promise aspect is added to the object
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            // Add list-specific methods
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[5];
                // promise.progress = list.add
                // promise.done = list.add
                // promise.fail = list.add
                promise[tuple[1]] = list.add;
                // Handle state
                if (stateString) list.add(function() {
                    // state = "resolved" (i.e., fulfilled)
                    // state = "rejected"
                    state = stateString;
                }, // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable, // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable, // progress_callbacks.lock
                tuples[0][2].lock, // progress_handlers.lock
                tuples[0][3].lock);
                // progress_handlers.fire
                // fulfilled_handlers.fire
                // rejected_handlers.fire
                list.add(tuple[3].fire);
                // deferred.notify = function() { deferred.notifyWith(...) }
                // deferred.resolve = function() { deferred.resolveWith(...) }
                // deferred.reject = function() { deferred.rejectWith(...) }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                    return this;
                };
                // deferred.notifyWith = list.fireWith
                // deferred.resolveWith = list.fireWith
                // deferred.rejectWith = list.fireWith
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            // Make the deferred a promise
            promise.promise(deferred);
            // Call given func if any
            if (func) func.call(deferred, deferred);
            // All done!
            return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
            var // count of uncompleted subordinates
            remaining = arguments.length, // count of unprocessed arguments
            i = remaining, // subordinate fulfillment data
            resolveContexts = Array(i), resolveValues = slice.call(arguments), // the primary Deferred
            primary = jQuery.Deferred(), // subordinate callback factory
            updateFunc = function(i) {
                return function(value) {
                    resolveContexts[i] = this;
                    resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                    if (!--remaining) primary.resolveWith(resolveContexts, resolveValues);
                };
            };
            // Single- and empty arguments are adopted like Promise.resolve
            if (remaining <= 1) {
                adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
                // Use .then() to unwrap secondary thenables (cf. gh-3000)
                if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) return primary.then();
            }
            // Multiple arguments are aggregated like Promise.all array elements
            while(i--)adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            return primary.promise();
        }
    });
    // These usually indicate a programmer mistake during development,
    // warn about them ASAP rather than swallowing them by default.
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    // If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
    // captured before the async barrier to get the original error cause
    // which may otherwise be hidden.
    jQuery.Deferred.exceptionHook = function(error, asyncError) {
        // Support: IE 8 - 9 only
        // Console exists when dev tools are open, which can happen at any time
        if (window1.console && window1.console.warn && error && rerrorNames.test(error.name)) window1.console.warn("jQuery.Deferred exception: " + error.message, error.stack, asyncError);
    };
    jQuery.readyException = function(error) {
        window1.setTimeout(function() {
            throw error;
        });
    };
    // The deferred used on DOM ready
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function(fn) {
        readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
        // happens at the time of error handling instead of callback
        // registration.
        .catch(function(error) {
            jQuery.readyException(error);
        });
        return this;
    };
    jQuery.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
            // Abort if there are pending holds or we're already ready
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) return;
            // Remember that the DOM is ready
            jQuery.isReady = true;
            // If a normal DOM Ready event fired, decrement, and wait if need be
            if (wait !== true && --jQuery.readyWait > 0) return;
            // If there are functions bound, to execute
            readyList.resolveWith(document, [
                jQuery
            ]);
        }
    });
    jQuery.ready.then = readyList.then;
    // The ready event handler and self cleanup method
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window1.removeEventListener("load", completed);
        jQuery.ready();
    }
    // Catch cases where $(document).ready() is called
    // after the browser event has already occurred.
    // Support: IE <=9 - 10 only
    // Older IE sometimes signals "interactive" too soon
    if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) // Handle it asynchronously to allow scripts the opportunity to delay ready
    window1.setTimeout(jQuery.ready);
    else {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed);
        // A fallback to window.onload, that will always work
        window1.addEventListener("load", completed);
    }
    // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        // Sets many values
        if (toType(key) === "object") {
            chainable = true;
            for(i in key)access(elems, fn, i, key[i], true, emptyGet, raw);
        // Sets one value
        } else if (value !== undefined) {
            chainable = true;
            if (!isFunction(value)) raw = true;
            if (bulk) {
                // Bulk operations run against the entire set
                if (raw) {
                    fn.call(elems, value);
                    fn = null;
                // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function(elem, _key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }
            if (fn) for(; i < len; i++)fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
        if (chainable) return elems;
        // Gets
        if (bulk) return fn.call(elems);
        return len ? fn(elems[0], key) : emptyGet;
    };
    // Matches dashed string for camelizing
    var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
    // Used by camelCase as callback to replace()
    function fcamelCase(_all, letter) {
        return letter.toUpperCase();
    }
    // Convert dashed to camelCase; used by the css and data modules
    // Support: IE <=9 - 11, Edge 12 - 15
    // Microsoft forgot to hump their vendor prefix (trac-9572)
    function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }
    var acceptData = function(owner) {
        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };
    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
        cache: function(owner) {
            // Check if the owner object already has a cache
            var value = owner[this.expando];
            // If not, create one
            if (!value) {
                value = {};
                // We can accept data for non-element nodes in modern browsers,
                // but we should not, see trac-8335.
                // Always return an empty object.
                if (acceptData(owner)) {
                    // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if (owner.nodeType) owner[this.expando] = value;
                    else Object.defineProperty(owner, this.expando, {
                        value: value,
                        configurable: true
                    });
                }
            }
            return value;
        },
        set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            // Handle: [ owner, key, value ] args
            // Always use camelCase key (gh-2257)
            if (typeof data === "string") cache[camelCase(data)] = value;
            else // Copy the properties one-by-one to the cache object
            for(prop in data)cache[camelCase(prop)] = data[prop];
            return cache;
        },
        get: function(owner, key) {
            return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function(owner, key, value) {
            // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            if (key === undefined || key && typeof key === "string" && value === undefined) return this.get(owner, key);
            // When the key is not a string, or both a key and value
            // are specified, set or extend (existing objects) with either:
            //
            //   1. An object of properties
            //   2. A key and value
            //
            this.set(owner, key, value);
            // Since the "set" path can have two possible entry points
            // return the expected data based on which path was taken[*]
            return value !== undefined ? value : key;
        },
        remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === undefined) return;
            if (key !== undefined) {
                // Support array or space separated string of keys
                if (Array.isArray(key)) // If key is an array of keys...
                // We always set camelCase keys, so remove that.
                key = key.map(camelCase);
                else {
                    key = camelCase(key);
                    // If a key with the spaces exists, use it.
                    // Otherwise, create an array by matching non-whitespace
                    key = key in cache ? [
                        key
                    ] : key.match(rnothtmlwhite) || [];
                }
                i = key.length;
                while(i--)delete cache[key[i]];
            }
            // Remove the expando if there's no more data
            if (key === undefined || jQuery.isEmptyObject(cache)) {
                // Support: Chrome <=35 - 45
                // Webkit & Blink performance suffers when deleting properties
                // from DOM nodes, so set to undefined instead
                // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                if (owner.nodeType) owner[this.expando] = undefined;
                else delete owner[this.expando];
            }
        },
        hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
    };
    var dataPriv = new Data();
    var dataUser = new Data();
    //	Implementation Summary
    //
    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
    //	2. Improve the module's maintainability by reducing the storage
    //		paths to a single mechanism.
    //	3. Use the same single mechanism to support "private" and "user" data.
    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    function getData(data) {
        if (data === "true") return true;
        if (data === "false") return false;
        if (data === "null") return null;
        // Only convert to a number if it doesn't change the string
        if (data === +data + "") return +data;
        if (rbrace.test(data)) return JSON.parse(data);
        return data;
    }
    function dataAttr(elem, key, data) {
        var name;
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = getData(data);
                } catch (e) {}
                // Make sure we set the data so it isn't changed later
                dataUser.set(elem, key, data);
            } else data = undefined;
        }
        return data;
    }
    jQuery.extend({
        hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
            dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            // Gets all values
            if (key === undefined) {
                if (this.length) {
                    data = dataUser.get(elem);
                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while(i--)// Support: IE 11 only
                        // The attrs elements can be null (trac-14894)
                        if (attrs[i]) {
                            name = attrs[i].name;
                            if (name.indexOf("data-") === 0) {
                                name = camelCase(name.slice(5));
                                dataAttr(elem, name, data[name]);
                            }
                        }
                        dataPriv.set(elem, "hasDataAttrs", true);
                    }
                }
                return data;
            }
            // Sets multiple values
            if (typeof key === "object") return this.each(function() {
                dataUser.set(this, key);
            });
            return access(this, function(value) {
                var data;
                // The calling jQuery object (element matches) is not empty
                // (and therefore has an element appears at this[ 0 ]) and the
                // `value` parameter was not undefined. An empty jQuery object
                // will result in `undefined` for elem = this[ 0 ] which will
                // throw an exception if an attempt to read a data cache is made.
                if (elem && value === undefined) {
                    // Attempt to get data from the cache
                    // The key will always be camelCased in Data
                    data = dataUser.get(elem, key);
                    if (data !== undefined) return data;
                    // Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    data = dataAttr(elem, key);
                    if (data !== undefined) return data;
                    // We tried really hard, but the data doesn't exist.
                    return;
                }
                // Set the data...
                this.each(function() {
                    // We always store the camelCased key
                    dataUser.set(this, key, value);
                });
            }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
            return this.each(function() {
                dataUser.remove(this, key);
            });
        }
    });
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = dataPriv.get(elem, type);
                // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                    if (!queue || Array.isArray(data)) queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                    else queue.push(data);
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) {
                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") queue.unshift("inprogress");
                // Clear up the last queue stop function
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) hooks.empty.fire();
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    dataPriv.remove(elem, [
                        type + "queue",
                        key
                    ]);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) return jQuery.queue(this[0], type);
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                // Ensure a hooks for this queue
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") jQuery.dequeue(this, type);
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                if (!--count) defer.resolveWith(elements, [
                    elements
                ]);
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while(i--){
                tmp = dataPriv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = [
        "Top",
        "Right",
        "Bottom",
        "Left"
    ];
    var documentElement = document.documentElement;
    var isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
    }, composed = {
        composed: true
    };
    // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
    // Check attachment across shadow DOM boundaries when possible (gh-3504)
    // Support: iOS 10.0-10.2 only
    // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
    // leading to errors. We need to check for `getRootNode`.
    if (documentElement.getRootNode) isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
    var isHiddenWithinTree = function(elem, el) {
        // isHiddenWithinTree might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;
        // Inline style trumps all
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery.css(elem, "display") === "none";
    };
    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
        } : function() {
            return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), // Starting value computation is required for potential unit mismatches
        initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
            // Support: Firefox <=54
            // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
            initial = initial / 2;
            // Trust units reported by jQuery.css
            unit = unit || initialInUnit[3];
            // Iteratively approximate from a nonzero starting point
            initialInUnit = +initial || 1;
            while(maxIterations--){
                // Evaluate and update our best guess (doubling guesses that zero out).
                // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                jQuery.style(elem, prop, initialInUnit + unit);
                if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) maxIterations = 0;
                initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            // Make sure we update the tween properties later on
            valueParts = valueParts || [];
        }
        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            // Apply relative offset (+=/-=) if specified
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }
    var defaultDisplayMap = {};
    function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
        if (display) return display;
        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") display = "block";
        defaultDisplayMap[nodeName] = display;
        return display;
    }
    function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        // Determine new display value for elements that need to change
        for(; index < length; index++){
            elem = elements[index];
            if (!elem.style) continue;
            display = elem.style.display;
            if (show) {
                // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                // check is required in this first loop unless we have a nonempty display value (either
                // inline or about-to-be-restored)
                if (display === "none") {
                    values[index] = dataPriv.get(elem, "display") || null;
                    if (!values[index]) elem.style.display = "";
                }
                if (elem.style.display === "" && isHiddenWithinTree(elem)) values[index] = getDefaultDisplay(elem);
            } else if (display !== "none") {
                values[index] = "none";
                // Remember what we're overwriting
                dataPriv.set(elem, "display", display);
            }
        }
        // Set the display of the elements in a second loop to avoid constant reflow
        for(index = 0; index < length; index++)if (values[index] != null) elements[index].style.display = values[index];
        return elements;
    }
    jQuery.fn.extend({
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            if (typeof state === "boolean") return state ? this.show() : this.hide();
            return this.each(function() {
                if (isHiddenWithinTree(this)) jQuery(this).show();
                else jQuery(this).hide();
            });
        }
    });
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
        var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
        // Support: Android 4.0 - 4.3 only
        // Check state lost if the name is set (trac-11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (trac-14901)
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        // Support: Android <=4.1 only
        // Older WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        // Support: IE <=11 only
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        // Support: IE <=9 only
        // IE <=9 replaces <option> tags with their contents when inserted outside of
        // the select element.
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
    })();
    // We have to close these tags to support XHTML (trac-13200)
    var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [
            1,
            "<table>",
            "</table>"
        ],
        col: [
            2,
            "<table><colgroup>",
            "</colgroup></table>"
        ],
        tr: [
            2,
            "<table><tbody>",
            "</tbody></table>"
        ],
        td: [
            3,
            "<table><tbody><tr>",
            "</tr></tbody></table>"
        ],
        _default: [
            0,
            "",
            ""
        ]
    };
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    // Support: IE <=9 only
    if (!support.option) wrapMap.optgroup = wrapMap.option = [
        1,
        "<select multiple='multiple'>",
        "</select>"
    ];
    function getAll(context, tag) {
        // Support: IE <=9 - 11 only
        // Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") ret = context.getElementsByTagName(tag || "*");
        else if (typeof context.querySelectorAll !== "undefined") ret = context.querySelectorAll(tag || "*");
        else ret = [];
        if (tag === undefined || tag && nodeName(context, tag)) return jQuery.merge([
            context
        ], ret);
        return ret;
    }
    // Mark scripts as having already been evaluated
    function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for(; i < l; i++)dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
    var rhtml = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for(; i < l; i++){
            elem = elems[i];
            if (elem || elem === 0) {
                // Add nodes directly
                if (toType(elem) === "object") // Support: Android <=4.0 only, PhantomJS 1 only
                // push.apply(_, arraylike) throws on ancient WebKit
                jQuery.merge(nodes, elem.nodeType ? [
                    elem
                ] : elem);
                else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem));
                else {
                    tmp = tmp || fragment.appendChild(context.createElement("div"));
                    // Deserialize a standard representation
                    tag = (rtagName.exec(elem) || [
                        "",
                        ""
                    ])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                    // Descend through wrappers to the right content
                    j = wrap[0];
                    while(j--)tmp = tmp.lastChild;
                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, tmp.childNodes);
                    // Remember the top-level container
                    tmp = fragment.firstChild;
                    // Ensure the created nodes are orphaned (trac-12392)
                    tmp.textContent = "";
                }
            }
        }
        // Remove wrapper from fragment
        fragment.textContent = "";
        i = 0;
        while(elem = nodes[i++]){
            // Skip elements already in the context collection (trac-4087)
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) ignored.push(elem);
                continue;
            }
            attached = isAttached(elem);
            // Append to fragment
            tmp = getAll(fragment.appendChild(elem), "script");
            // Preserve script evaluation history
            if (attached) setGlobalEval(tmp);
            // Capture executables
            if (scripts) {
                j = 0;
                while(elem = tmp[j++])if (rscriptType.test(elem.type || "")) scripts.push(elem);
            }
        }
        return fragment;
    }
    var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
        return true;
    }
    function returnFalse() {
        return false;
    }
    function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        // Types can be a map of types/handlers
        if (typeof types === "object") {
            // ( types-Object, selector, data )
            if (typeof selector !== "string") {
                // ( types-Object, data )
                data = data || selector;
                selector = undefined;
            }
            for(type in types)on(elem, type, selector, data, types[type], one);
            return elem;
        }
        if (data == null && fn == null) {
            // ( types, fn )
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") {
                // ( types, selector, fn )
                fn = data;
                data = undefined;
            } else {
                // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if (fn === false) fn = returnFalse;
        else if (!fn) return elem;
        if (one === 1) {
            origFn = fn;
            fn = function(event) {
                // Can use an empty set, since event contains the info
                jQuery().off(event);
                return origFn.apply(this, arguments);
            };
            // Use same guid so caller can remove using origFn
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }
    /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */ jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            // Only attach events to objects that accept data
            if (!acceptData(elem)) return;
            // Caller can pass in an object of custom data in lieu of the handler
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            // Ensure that invalid selectors throw exceptions at attach time
            // Evaluate against documentElement in case elem is a non-element node (e.g., document)
            if (selector) jQuery.find.matchesSelector(documentElement, selector);
            // Make sure that the handler has a unique ID, used to find/remove it later
            if (!handler.guid) handler.guid = jQuery.guid++;
            // Init the element's event structure and main handler, if this is the first
            if (!(events = elemData.events)) events = elemData.events = Object.create(null);
            if (!(eventHandle = elemData.handle)) eventHandle = elemData.handle = function(e) {
                // Discard the second event of a jQuery.event.trigger() and
                // when an event is called after a page has unloaded
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
            };
            // Handle multiple events separated by a space
            types = (types || "").match(rnothtmlwhite) || [
                ""
            ];
            t = types.length;
            while(t--){
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // There *must* be a type, no attaching namespace-only handlers
                if (!type) continue;
                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[type] || {};
                // If selector defined, determine special event api type, otherwise given type
                type = (selector ? special.delegateType : special.bindType) || type;
                // Update special based on newly reset type
                special = jQuery.event.special[type] || {};
                // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                // Init the event handler queue if we're the first
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    // Only use addEventListener if the special events handler returns false
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) elem.addEventListener(type, eventHandle);
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
                }
                // Add to the element's handler list, delegates in front
                if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj);
                else handlers.push(handleObj);
                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[type] = true;
            }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) return;
            // Once for each type.namespace in types; type may be omitted
            types = (types || "").match(rnothtmlwhite) || [
                ""
            ];
            t = types.length;
            while(t--){
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // Unbind all events (on this namespace, if provided) for the element
                if (!type) {
                    for(type in events)jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                // Remove matching events
                origCount = j = handlers.length;
                while(j--){
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) handlers.delegateCount--;
                        if (special.remove) special.remove.call(elem, handleObj);
                    }
                }
                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) jQuery.removeEvent(elem, type, elemData.handle);
                    delete events[type];
                }
            }
            // Remove data and the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) dataPriv.remove(elem, "handle events");
        },
        dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), // Make a writable jQuery.Event from the native event object
            event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;
            for(i = 1; i < arguments.length; i++)args[i] = arguments[i];
            event.delegateTarget = this;
            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (special.preDispatch && special.preDispatch.call(this, event) === false) return;
            // Determine handlers
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while((matched = handlerQueue[i++]) && !event.isPropagationStopped()){
                event.currentTarget = matched.elem;
                j = 0;
                while((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped())// If the event is namespaced, then each handler is only invoked if it is
                // specially universal or its namespaces are a superset of the event's.
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                    event.handleObj = handleObj;
                    event.data = handleObj.data;
                    ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                    if (ret !== undefined) {
                        if ((event.result = ret) === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    }
                }
            }
            // Call the postDispatch hook for the mapped type
            if (special.postDispatch) special.postDispatch.call(this, event);
            return event.result;
        },
        handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            // Find delegate handlers
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
                for(; cur !== this; cur = cur.parentNode || this)// Don't check non-elements (trac-13208)
                // Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                    matchedHandlers = [];
                    matchedSelectors = {};
                    for(i = 0; i < delegateCount; i++){
                        handleObj = handlers[i];
                        // Don't conflict with Object.prototype properties (trac-13203)
                        sel = handleObj.selector + " ";
                        if (matchedSelectors[sel] === undefined) matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [
                            cur
                        ]).length;
                        if (matchedSelectors[sel]) matchedHandlers.push(handleObj);
                    }
                    if (matchedHandlers.length) handlerQueue.push({
                        elem: cur,
                        handlers: matchedHandlers
                    });
                }
            }
            // Add the remaining (directly-bound) handlers
            cur = this;
            if (delegateCount < handlers.length) handlerQueue.push({
                elem: cur,
                handlers: handlers.slice(delegateCount)
            });
            return handlerQueue;
        },
        addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
                enumerable: true,
                configurable: true,
                get: isFunction(hook) ? function() {
                    if (this.originalEvent) return hook(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[name];
                },
                set: function(value) {
                    Object.defineProperty(this, name, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: value
                    });
                }
            });
        },
        fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
            load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            click: {
                // Utilize native event to ensure correct state for checkable inputs
                setup: function(data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;
                    // Claim the first handler
                    if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) // dataPriv.set( el, "click", ... )
                    leverageNative(el, "click", true);
                    // Return false to allow normal processing in the caller
                    return false;
                },
                trigger: function(data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;
                    // Force setup before triggering a click
                    if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click");
                    // Return non-false to allow normal event-path propagation
                    return true;
                },
                // For cross-browser consistency, suppress native .click() on links
                // Also prevent it if we're currently inside a leveraged native-event stack
                _default: function(event) {
                    var target = event.target;
                    return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (event.result !== undefined && event.originalEvent) event.originalEvent.returnValue = event.result;
                }
            }
        }
    };
    // Ensure the presence of an event listener that handles manually-triggered
    // synthetic events by interrupting progress until reinvoked in response to
    // *native* events that it fires directly, ensuring that state changes have
    // already occurred before other listeners are invoked.
    function leverageNative(el, type, isSetup) {
        // Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
        if (!isSetup) {
            if (dataPriv.get(el, type) === undefined) jQuery.event.add(el, type, returnTrue);
            return;
        }
        // Register the controller as a special universal handler for all event namespaces
        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
                var result, saved = dataPriv.get(this, type);
                if (event.isTrigger & 1 && this[type]) {
                    // Interrupt processing of the outer synthetic .trigger()ed event
                    if (!saved) {
                        // Store arguments for use when handling the inner native event
                        // There will always be at least one argument (an event object), so this array
                        // will not be confused with a leftover capture object.
                        saved = slice.call(arguments);
                        dataPriv.set(this, type, saved);
                        // Trigger the native event and capture its result
                        this[type]();
                        result = dataPriv.get(this, type);
                        dataPriv.set(this, type, false);
                        if (saved !== result) {
                            // Cancel the outer synthetic event
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return result;
                        }
                    // If this is an inner synthetic event for an event with a bubbling surrogate
                    // (focus or blur), assume that the surrogate already propagated from triggering
                    // the native event and prevent that from happening again here.
                    // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                    // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                    // less bad than duplication.
                    } else if ((jQuery.event.special[type] || {}).delegateType) event.stopPropagation();
                // If this is a native event triggered above, everything is now in order
                // Fire an inner synthetic event with the original arguments
                } else if (saved) {
                    // ...and capture the result
                    dataPriv.set(this, type, jQuery.event.trigger(saved[0], saved.slice(1), this));
                    // Abort handling of the native event by all jQuery handlers while allowing
                    // native handlers on the same element to run. On target, this is achieved
                    // by stopping immediate propagation just on the jQuery event. However,
                    // the native event is re-wrapped by a jQuery one on each level of the
                    // propagation so the only way to stop it for jQuery is to stop it for
                    // everyone via native `stopPropagation()`. This is not a problem for
                    // focus/blur which don't bubble, but it does also stop click on checkboxes
                    // and radios. We accept this limitation.
                    event.stopPropagation();
                    event.isImmediatePropagationStopped = returnTrue;
                }
            }
        });
    }
    jQuery.removeEvent = function(elem, type, handle) {
        // This "if" is needed for plain objects
        if (elem.removeEventListener) elem.removeEventListener(type, handle);
    };
    jQuery.Event = function(src, props) {
        // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
        // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            // Create target properties
            // Support: Safari <=6 - 7 only
            // Target should not be a text node (trac-504, trac-13143)
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
        // Event type
        } else this.type = src;
        // Put explicitly provided properties onto the event object
        if (props) jQuery.extend(this, props);
        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || Date.now();
        // Mark it as fixed
        this[jQuery.expando] = true;
    };
    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) e.stopImmediatePropagation();
            this.stopPropagation();
        }
    };
    // Includes all common event props including KeyEvent and MouseEvent specific props
    jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
    }, jQuery.event.addProp);
    jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(type, delegateType) {
        function focusMappedHandler(nativeEvent) {
            if (document.documentMode) {
                // Support: IE 11+
                // Attach a single focusin/focusout handler on the document while someone wants
                // focus/blur. This is because the former are synchronous in IE while the latter
                // are async. In other browsers, all those handlers are invoked synchronously.
                // `handle` from private data would already wrap the event, but we need
                // to change the `type` here.
                var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
                event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
                event.isSimulated = true;
                // First, handle focusin/focusout
                handle(nativeEvent);
                // ...then, handle focus/blur
                //
                // focus/blur don't bubble while focusin/focusout do; simulate the former by only
                // invoking the handler at the lower level.
                if (event.target === event.currentTarget) // The setup part calls `leverageNative`, which, in turn, calls
                // `jQuery.event.add`, so event handle will already have been set
                // by this point.
                handle(event);
            } else // For non-IE browsers, attach a single capturing handler on the document
            // while someone wants focusin/focusout.
            jQuery.event.simulate(delegateType, nativeEvent.target, jQuery.event.fix(nativeEvent));
        }
        jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
                var attaches;
                // Claim the first handler
                // dataPriv.set( this, "focus", ... )
                // dataPriv.set( this, "blur", ... )
                leverageNative(this, type, true);
                if (document.documentMode) {
                    // Support: IE 9 - 11+
                    // We use the same native handler for focusin & focus (and focusout & blur)
                    // so we need to coordinate setup & teardown parts between those events.
                    // Use `delegateType` as the key as `type` is already used by `leverageNative`.
                    attaches = dataPriv.get(this, delegateType);
                    if (!attaches) this.addEventListener(delegateType, focusMappedHandler);
                    dataPriv.set(this, delegateType, (attaches || 0) + 1);
                } else // Return false to allow normal processing in the caller
                return false;
            },
            trigger: function() {
                // Force setup before trigger
                leverageNative(this, type);
                // Return non-false to allow normal event-path propagation
                return true;
            },
            teardown: function() {
                var attaches;
                if (document.documentMode) {
                    attaches = dataPriv.get(this, delegateType) - 1;
                    if (!attaches) {
                        this.removeEventListener(delegateType, focusMappedHandler);
                        dataPriv.remove(this, delegateType);
                    } else dataPriv.set(this, delegateType, attaches);
                } else // Return false to indicate standard teardown should be applied
                return false;
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event) {
                return dataPriv.get(event.target, type);
            },
            delegateType: delegateType
        };
        // Support: Firefox <=44
        // Firefox doesn't have focus(in | out) events
        // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
        //
        // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
        // focus(in | out) events fire after focus & blur events,
        // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
        // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
        //
        // Support: IE 9 - 11+
        // To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
        // attach a single handler for both events in IE.
        jQuery.event.special[delegateType] = {
            setup: function() {
                // Handle: regular nodes (via `this.ownerDocument`), window
                // (via `this.document`) & document (via `this`).
                var doc = this.ownerDocument || this.document || this, dataHolder = document.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
                // Support: IE 9 - 11+
                // We use the same native handler for focusin & focus (and focusout & blur)
                // so we need to coordinate setup & teardown parts between those events.
                // Use `delegateType` as the key as `type` is already used by `leverageNative`.
                if (!attaches) {
                    if (document.documentMode) this.addEventListener(delegateType, focusMappedHandler);
                    else doc.addEventListener(type, focusMappedHandler, true);
                }
                dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
            },
            teardown: function() {
                var doc = this.ownerDocument || this.document || this, dataHolder = document.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
                if (!attaches) {
                    if (document.documentMode) this.removeEventListener(delegateType, focusMappedHandler);
                    else doc.removeEventListener(type, focusMappedHandler, true);
                    dataPriv.remove(dataHolder, delegateType);
                } else dataPriv.set(dataHolder, delegateType, attaches);
            }
        };
    });
    // Create mouseenter/leave events using mouseover/out and event-time checks
    // so that event delegation works in jQuery.
    // Do the same for pointerenter/pointerleave and pointerover/pointerout
    //
    // Support: Safari 7 only
    // Safari sends mouseenter too often; see:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
    // for the description of the bug (it existed in older Chrome versions as well).
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                // For mouseenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    jQuery.fn.extend({
        on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                // ( types-object [, selector] )
                for(type in types)this.off(type, selector, types[type]);
                return this;
            }
            if (selector === false || typeof selector === "function") {
                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if (fn === false) fn = returnFalse;
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        }
    });
    var // Support: IE <=10 - 11, Edge 12 - 13 only
    // In IE/Edge using regex groups here causes severe slowdowns.
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    rnoInnerhtml = /<script|<style|<link/i, // checked="checked" or checked
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    // Prefer a tbody over its parent table for containing new rows
    function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) return jQuery(elem).children("tbody")[0] || elem;
        return elem;
    }
    // Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") elem.type = elem.type.slice(5);
        else elem.removeAttribute("type");
        return elem;
    }
    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) return;
        // 1. Copy private data: events, handlers, etc.
        if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
                dataPriv.remove(dest, "handle events");
                for(type in events)for(i = 0, l = events[type].length; i < l; i++)jQuery.event.add(dest, type, events[type][i]);
            }
        }
        // 2. Copy user data
        if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
        }
    }
    // Fix IE bugs, see support tests
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        // Fails to persist the checked state of a cloned checkbox or radio button.
        if (nodeName === "input" && rcheckableType.test(src.type)) dest.checked = src.checked;
        else if (nodeName === "input" || nodeName === "textarea") dest.defaultValue = src.defaultValue;
    }
    function domManip(collection, args, callback, ignored) {
        // Flatten any nested arrays
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        // We can't cloneNode fragments that contain checked, in WebKit
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) args[0] = value.call(this, index, self.html());
            domManip(self, args, callback, ignored);
        });
        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) fragment = first;
            // Require either new content or an interest in ignored elements to invoke the callback
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length;
                // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (trac-8070).
                for(; i < l; i++){
                    node = fragment;
                    if (i !== iNoClone) {
                        node = jQuery.clone(node, true, true);
                        // Keep references to cloned scripts for later restoration
                        if (hasScripts) // Support: Android <=4.0 only, PhantomJS 1 only
                        // push.apply(_, arraylike) throws on ancient WebKit
                        jQuery.merge(scripts, getAll(node, "script"));
                    }
                    callback.call(collection[i], node, i);
                }
                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument;
                    // Re-enable scripts
                    jQuery.map(scripts, restoreScript);
                    // Evaluate executable scripts on first document insertion
                    for(i = 0; i < hasScripts; i++){
                        node = scripts[i];
                        if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                            if (node.src && (node.type || "").toLowerCase() !== "module") // Optional AJAX dependency, but won't run scripts if not present
                            {
                                if (jQuery._evalUrl && !node.noModule) jQuery._evalUrl(node.src, {
                                    nonce: node.nonce || node.getAttribute("nonce")
                                }, doc);
                            } else // Unwrap a CDATA section containing script contents. This shouldn't be
                            // needed as in XML documents they're already not visible when
                            // inspecting element contents and in HTML documents they have no
                            // meaning but we're preserving that logic for backwards compatibility.
                            // This will be removed completely in 4.0. See gh-4904.
                            DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                        }
                    }
                }
            }
        }
        return collection;
    }
    function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
        for(; (node = nodes[i]) != null; i++){
            if (!keepData && node.nodeType === 1) jQuery.cleanData(getAll(node));
            if (node.parentNode) {
                if (keepData && isAttached(node)) setGlobalEval(getAll(node, "script"));
                node.parentNode.removeChild(node);
            }
        }
        return elem;
    }
    jQuery.extend({
        htmlPrefilter: function(html) {
            return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            // Fix IE cloning issues
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                // We eschew jQuery#find here for performance reasons:
                // https://jsperf.com/getall-vs-sizzle/2
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for(i = 0, l = srcElements.length; i < l; i++)fixInput(srcElements[i], destElements[i]);
            }
            // Copy the events from the original to the clone
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for(i = 0, l = srcElements.length; i < l; i++)cloneCopyEvent(srcElements[i], destElements[i]);
                } else cloneCopyEvent(elem, clone);
            }
            // Preserve script evaluation history
            destElements = getAll(clone, "script");
            if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            // Return the cloned set
            return clone;
        },
        cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for(; (elem = elems[i]) !== undefined; i++)if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                    if (data.events) {
                        for(type in data.events)if (special[type]) jQuery.event.remove(elem, type);
                        else jQuery.removeEvent(elem, type, data.handle);
                    }
                    // Support: Chrome <=35 - 45+
                    // Assign undefined instead of using delete, see Data#remove
                    elem[dataPriv.expando] = undefined;
                }
                if (elem[dataUser.expando]) // Support: Chrome <=35 - 45+
                // Assign undefined instead of using delete, see Data#remove
                elem[dataUser.expando] = undefined;
            }
        }
    });
    jQuery.fn.extend({
        detach: function(selector) {
            return remove(this, selector, true);
        },
        remove: function(selector) {
            return remove(this, selector);
        },
        text: function(value) {
            return access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = value;
                });
            }, null, value, arguments.length);
        },
        append: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) this.parentNode.insertBefore(elem, this);
            });
        },
        after: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
            });
        },
        empty: function() {
            var elem, i = 0;
            for(; (elem = this[i]) != null; i++)if (elem.nodeType === 1) {
                // Prevent memory leaks
                jQuery.cleanData(getAll(elem, false));
                // Remove any remaining nodes
                elem.textContent = "";
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined && elem.nodeType === 1) return elem.innerHTML;
                // See if we can take a shortcut and just use innerHTML
                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [
                    "",
                    ""
                ])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for(; i < l; i++){
                            elem = this[i] || {};
                            // Remove element nodes and prevent memory leaks
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    // If using innerHTML throws an exception, use the fallback method
                    } catch (e) {}
                }
                if (elem) this.empty().append(value);
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var ignored = [];
            // Make the changes, replacing each non-ignored context element with the new content
            return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) parent.replaceChild(elem, this);
                }
            // Force callback invocation
            }, ignored);
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for(; i <= last; i++){
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                // Support: Android <=4.0 only, PhantomJS 1 only
                // .get() because push.apply(_, arraylike) throws on ancient WebKit
                push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var rcustomProp = /^--/;
    var getStyles = function(elem) {
        // Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) view = window1;
        return view.getComputedStyle(elem);
    };
    var swap = function(elem, options, callback) {
        var ret, name, old = {};
        // Remember the old values, and insert the new ones
        for(name in options){
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        // Revert the old values
        for(name in options)elem.style[name] = old[name];
        return ret;
    };
    var rboxStyle = new RegExp(cssExpand.join("|"), "i");
    (function() {
        // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() {
            // This is a singleton, we need to execute it only once
            if (!div) return;
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window1.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
            // Some styles come back with percentage values, even though they shouldn't
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            // Support: IE 9 - 11 only
            // Detect misreporting of content dimensions for box-sizing:border-box elements
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            // Support: IE 9 only
            // Detect overflow:scroll screwiness (gh-3699)
            // Support: Chrome <=64
            // Don't get tricked when zoom affects offsetWidth (gh-4029)
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            // Nullify the div so it wouldn't be stored in the memory and
            // it will also be a sign that checks already performed
            div = null;
        }
        function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
        // Finish early in limited (non-browser) environments
        if (!div.style) return;
        // Support: IE <=9 - 11 only
        // Style of cloned element affects source element cloned (trac-8908)
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
            boxSizingReliable: function() {
                computeStyleTests();
                return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
                computeStyleTests();
                return pixelBoxStylesVal;
            },
            pixelPosition: function() {
                computeStyleTests();
                return pixelPositionVal;
            },
            reliableMarginLeft: function() {
                computeStyleTests();
                return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
                computeStyleTests();
                return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
                var table, tr, trChild, trStyle;
                if (reliableTrDimensionsVal == null) {
                    table = document.createElement("table");
                    tr = document.createElement("tr");
                    trChild = document.createElement("div");
                    table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                    tr.style.cssText = "box-sizing:content-box;border:1px solid";
                    // Support: Chrome 86+
                    // Height set through cssText does not get applied.
                    // Computed height then comes back as 0.
                    tr.style.height = "1px";
                    trChild.style.height = "9px";
                    // Support: Android 8 Chrome 86+
                    // In our bodyBackground.html iframe,
                    // display for all div elements is set to "inline",
                    // which causes a problem only in Android 8 Chrome 86.
                    // Ensuring the div is `display: block`
                    // gets around this issue.
                    trChild.style.display = "block";
                    documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                    trStyle = window1.getComputedStyle(tr);
                    reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                    documentElement.removeChild(table);
                }
                return reliableTrDimensionsVal;
            }
        });
    })();
    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), // Support: Firefox 51+
        // Retrieving style before computed somehow
        // fixes an issue with getting wrong values
        // on detached elements
        style = elem.style;
        computed = computed || getStyles(elem);
        // getPropertyValue is needed for:
        //   .css('filter') (IE 9 only, trac-12537)
        //   .css('--customProperty) (gh-3144)
        if (computed) {
            // Support: IE <=9 - 11+
            // IE only supports `"float"` in `getPropertyValue`; in computed styles
            // it's only available as `"cssFloat"`. We no longer modify properties
            // sent to `.css()` apart from camelCasing, so we need to check both.
            // Normally, this would create difference in behavior: if
            // `getPropertyValue` returns an empty string, the value returned
            // by `.css()` would be `undefined`. This is usually the case for
            // disconnected elements. However, in IE even disconnected elements
            // with no styles return `"none"` for `getPropertyValue( "float" )`
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) // Support: Firefox 105+, Chrome <=105+
            // Spec requires trimming whitespace for custom properties (gh-4926).
            // Firefox only trims leading whitespace. Chrome just collapses
            // both leading & trailing whitespace to a single space.
            //
            // Fall back to `undefined` if empty string returned.
            // This collapses a missing definition with property defined
            // and set to an empty string but there's no standard API
            // allowing us to differentiate them without a performance penalty
            // and returning `undefined` aligns with older jQuery.
            //
            // rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
            // as whitespace while CSS does not, but this is not a problem
            // because CSS preprocessing replaces them with U+000A LINE FEED
            // (which *is* CSS whitespace)
            // https://www.w3.org/TR/css-syntax-3/#input-preprocessing
            ret = ret.replace(rtrimCSS, "$1") || undefined;
            if (ret === "" && !isAttached(elem)) ret = jQuery.style(elem, name);
            // A tribute to the "awesome hack by Dean Edwards"
            // Android Browser returns percentage for some values,
            // but width seems to be reliably pixels.
            // This is against the CSSOM draft spec:
            // https://drafts.csswg.org/cssom/#resolved-values
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                // Remember the original values
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                // Put in the new values to get a computed value out
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                // Revert the changed values
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }
        return ret !== undefined ? // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function() {
                if (conditionFn()) {
                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                }
                // Hook needed; redefine it so that the support test is not executed again.
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    var cssPrefixes = [
        "Webkit",
        "Moz",
        "ms"
    ], emptyStyle = document.createElement("div").style, vendorProps = {};
    // Return a vendor-prefixed property or undefined
    function vendorPropName(name) {
        // Check for vendor prefixed names
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while(i--){
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) return name;
        }
    }
    // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
    function finalPropName(name) {
        var final = jQuery.cssProps[name] || vendorProps[name];
        if (final) return final;
        if (name in emptyStyle) return name;
        return vendorProps[name] = vendorPropName(name) || name;
    }
    var // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function setPositiveNumber(_elem, value, subtract) {
        // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec(value);
        return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }
    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
        // Adjustment may not be necessary
        if (box === (isBorderBox ? "border" : "content")) return 0;
        for(; i < 4; i += 2){
            // Both box models exclude margin
            // Count margin delta separately to only add it after scroll gutter adjustment.
            // This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
            if (box === "margin") marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
            // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
            if (!isBorderBox) {
                // Add padding
                delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                // For "border" or "margin", add border
                if (box !== "padding") delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                else extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            // If we get here with a border-box (content + padding + border), we're seeking "content" or
            // "padding" or "margin"
            } else {
                // For "content", subtract padding
                if (box === "content") delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                // For "content" or "padding", subtract border
                if (box !== "margin") delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
        }
        // Account for positive content-box scroll gutter when requested by providing computedVal
        if (!isBorderBox && computedVal >= 0) // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
        // Assuming integer scroll gutter, subtract the rest and round down
        delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
        return delta + marginDelta;
    }
    function getWidthOrHeight(elem, dimension, extra) {
        // Start with computed style
        var styles = getStyles(elem), // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
        // Fake content-box until we know it's needed to know the true value.
        boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        // Support: Firefox <=54
        // Return a confounding non-pixel value or feign ignorance, as appropriate.
        if (rnumnonpx.test(val)) {
            if (!extra) return val;
            val = "auto";
        }
        // Support: IE 9 - 11 only
        // Use offsetWidth/offsetHeight for when box sizing is unreliable.
        // In those cases, the computed value can be trusted to be border-box.
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            // Where available, offsetWidth/offsetHeight approximate border box dimensions.
            // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
            // retrieved value as a content box dimension.
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) val = elem[offsetProp];
        }
        // Normalize "" and auto
        val = parseFloat(val) || 0;
        // Adjust for the element's box model
        return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
        val) + "px";
    }
    jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageSlice: true,
            columnCount: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            scale: true,
            widows: true,
            zIndex: true,
            zoom: true,
            // SVG-related
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeMiterlimit: true,
            strokeOpacity: true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
            // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) return;
            // Make sure that we're working with the right name
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            // Make sure that we're working with the right name. We don't
            // want to query the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) name = finalPropName(origName);
            // Gets hook for the prefixed version, then unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // Check if we're setting a value
            if (value !== undefined) {
                type = typeof value;
                // Convert "+=" or "-=" to relative numbers (trac-7345)
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret);
                    // Fixes bug trac-9237
                    type = "number";
                }
                // Make sure that null and NaN values aren't set (trac-7116)
                if (value == null || value !== value) return;
                // If a number was passed in, add the unit (except for certain CSS properties)
                // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
                // "px" to a few hardcoded values.
                if (type === "number" && !isCustomProp) value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                // background-* props affect original clone's values
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) style[name] = "inherit";
                // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    if (isCustomProp) style.setProperty(name, value);
                    else style[name] = value;
                }
            } else {
                // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) return ret;
                // Otherwise just get the value from the style object
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            // Make sure that we're working with the right name. We don't
            // want to modify the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) name = finalPropName(origName);
            // Try prefixed name followed by the unprefixed name
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
            // Otherwise, if a way to get the computed value exists, use that
            if (val === undefined) val = curCSS(elem, name, styles);
            // Convert "normal" to computed value
            if (val === "normal" && name in cssNormalTransform) val = cssNormalTransform[name];
            // Make numeric if forced or a qualifier was provided and val looks numeric
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
        }
    });
    jQuery.each([
        "height",
        "width"
    ], function(_i, dimension) {
        jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
                if (computed) // Certain elements can have dimension info if we invisibly show them
                // but it must have a current display style that would benefit
                return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                    return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
            },
            set: function(elem, value, extra) {
                var matches, styles = getStyles(elem), // Only read styles.position if the test has a chance to fail
                // to avoid forcing a reflow.
                scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
                boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                // Account for unreliable border-box dimensions by comparing offset* to computed and
                // faking a content-box to get border and padding (gh-3699)
                if (isBorderBox && scrollboxSizeBuggy) subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
                // Convert to pixels if value adjustment is needed
                if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                    elem.style[dimension] = value;
                    value = jQuery.css(elem, dimension);
                }
                return setPositiveNumber(elem, value, subtract);
            }
        };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft: 0
        }, function() {
            return elem.getBoundingClientRect().left;
        })) + "px";
    });
    // These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0, expanded = {}, // Assumes a single number if not a string
                parts = typeof value === "string" ? value.split(" ") : [
                    value
                ];
                for(; i < 4; i++)expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                return expanded;
            }
        };
        if (prefix !== "margin") jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    });
    jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (Array.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for(; i < len; i++)map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        }
    });
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            else this.pos = eased = percent;
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) this.options.step.call(this.elem, this.now, this);
            if (hooks && hooks.set) hooks.set(this);
            else Tween.propHooks._default.set(this);
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) return tween.elem[tween.prop];
                // Passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails.
                // Simple values such as "10px" are parsed to Float;
                // complex values such as "rotate(1rad)" are returned as-is.
                result = jQuery.css(tween.elem, tween.prop, "");
                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                // Use step hook for back compat.
                // Use cssHook if its there.
                // Use .style if available and use plain properties where available.
                if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween);
                else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                else tween.elem[tween.prop] = tween.now;
            }
        }
    };
    // Support: IE <=9 only
    // Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) tween.elem[tween.prop] = tween.now;
        }
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };
    jQuery.fx = Tween.prototype.init;
    // Back compat <1.8 extension point
    jQuery.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function schedule() {
        if (inProgress) {
            if (document.hidden === false && window1.requestAnimationFrame) window1.requestAnimationFrame(schedule);
            else window1.setTimeout(schedule, jQuery.fx.interval);
            jQuery.fx.tick();
        }
    }
    // Animations created synchronously will run synchronously
    function createFxNow() {
        window1.setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = Date.now();
    }
    // Generate parameters to create a standard animation
    function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
            height: type
        };
        // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for(; i < 4; i += 2 - includeWidth){
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) attrs.opacity = attrs.width = type;
        return attrs;
    }
    function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for(; index < length; index++){
            if (tween = collection[index].call(animation, prop, value)) // We're done with this property
            return tween;
        }
    }
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        // Queue-skipping animations hijack the fx hooks
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) oldfire();
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                // Ensure the complete handler is called before this completes
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
                });
            });
        }
        // Detect show/hide animations
        for(prop in props){
            value = props[prop];
            if (rfxtypes.test(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    // Pretend to be hidden if this is a "show" and
                    // there is still data from a stopped show/hide
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) hidden = true;
                    else continue;
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
        }
        // Bail out if this is a no-op like .hide().hide()
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) return;
        // Restrict "overflow" and "display" styles during box animations
        if (isBox && elem.nodeType === 1) {
            // Support: IE <=9 - 11, Edge 12 - 15
            // Record all 3 overflow attributes because IE does not infer the shorthand
            // from identically-valued overflowX and overflowY and Edge just mirrors
            // the overflowX value there.
            opts.overflow = [
                style.overflow,
                style.overflowX,
                style.overflowY
            ];
            // Identify a display type, preferring old show/hide data over the CSS cascade
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) restoreDisplay = dataPriv.get(elem, "display");
            display = jQuery.css(elem, "display");
            if (display === "none") {
                if (restoreDisplay) display = restoreDisplay;
                else {
                    // Get nonempty value(s) by temporarily forcing visibility
                    showHide([
                        elem
                    ], true);
                    restoreDisplay = elem.style.display || restoreDisplay;
                    display = jQuery.css(elem, "display");
                    showHide([
                        elem
                    ]);
                }
            }
            // Animate inline elements as inline-block
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                if (jQuery.css(elem, "float") === "none") {
                    // Restore the original display value at the end of pure show/hide animations
                    if (!propTween) {
                        anim.done(function() {
                            style.display = restoreDisplay;
                        });
                        if (restoreDisplay == null) {
                            display = style.display;
                            restoreDisplay = display === "none" ? "" : display;
                        }
                    }
                    style.display = "inline-block";
                }
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        }
        // Implement show/hide animations
        propTween = false;
        for(prop in orig){
            // General show/hide setup for this element animation
            if (!propTween) {
                if (dataShow) {
                    if ("hidden" in dataShow) hidden = dataShow.hidden;
                } else dataShow = dataPriv.access(elem, "fxshow", {
                    display: restoreDisplay
                });
                // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                if (toggle) dataShow.hidden = !hidden;
                // Show elements before animating them
                if (hidden) showHide([
                    elem
                ], true);
                /* eslint-disable no-loop-func */ anim.done(function() {
                    /* eslint-enable no-loop-func */ // The final step of a "hide" animation is actually hiding the element
                    if (!hidden) showHide([
                        elem
                    ]);
                    dataPriv.remove(elem, "fxshow");
                    for(prop in orig)jQuery.style(elem, prop, orig[prop]);
                });
            }
            // Per-property setup
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
                dataShow[prop] = propTween.start;
                if (hidden) {
                    propTween.end = propTween.start;
                    propTween.start = 0;
                }
            }
        }
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        // camelCase, specialEasing and expand cssHook pass
        for(index in props){
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                // Not quite $.extend, this won't overwrite existing keys.
                // Reusing 'index' because we have the correct "name"
                for(index in value)if (!(index in props)) {
                    props[index] = value[index];
                    specialEasing[index] = easing;
                }
            } else specialEasing[name] = easing;
        }
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            // Don't match elem in the :animated selector
            delete tick.elem;
        }), tick = function() {
            if (stopped) return false;
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), // Support: Android 2.3 only
            // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
            temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
            for(; index < length; index++)animation.tweens[index].run(percent);
            deferred.notifyWith(elem, [
                animation,
                percent,
                remaining
            ]);
            // If there's more to do, yield
            if (percent < 1 && length) return remaining;
            // If this was an empty animation, synthesize a final progress notification
            if (!length) deferred.notifyWith(elem, [
                animation,
                1,
                0
            ]);
            // Resolve the animation and report its conclusion
            deferred.resolveWith(elem, [
                animation
            ]);
            return false;
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {},
                easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                var index = 0, // If we are going to the end, we want to run all the tweens
                // otherwise we skip this part
                length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) return this;
                stopped = true;
                for(; index < length; index++)animation.tweens[index].run(1);
                // Resolve when we played the last frame; otherwise, reject
                if (gotoEnd) {
                    deferred.notifyWith(elem, [
                        animation,
                        1,
                        0
                    ]);
                    deferred.resolveWith(elem, [
                        animation,
                        gotoEnd
                    ]);
                } else deferred.rejectWith(elem, [
                    animation,
                    gotoEnd
                ]);
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for(; index < length; index++){
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                if (isFunction(result.stop)) jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) animation.opts.start.call(elem, animation);
        // Attach callbacks from options
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation;
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [
                function(prop, value) {
                    var tween = this.createTween(prop, value);
                    adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                    return tween;
                }
            ]
        },
        tweener: function(props, callback) {
            if (isFunction(props)) {
                callback = props;
                props = [
                    "*"
                ];
            } else props = props.match(rnothtmlwhite);
            var prop, index = 0, length = props.length;
            for(; index < length; index++){
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback);
            }
        },
        prefilters: [
            defaultPrefilter
        ],
        prefilter: function(callback, prepend) {
            if (prepend) Animation.prefilters.unshift(callback);
            else Animation.prefilters.push(callback);
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
        };
        // Go to the end state if fx are off
        if (jQuery.fx.off) opt.duration = 0;
        else if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) opt.duration = jQuery.fx.speeds[opt.duration];
            else opt.duration = jQuery.fx.speeds._default;
        }
        // Normalize opt.queue - true/undefined/null -> "fx"
        if (opt.queue == null || opt.queue === true) opt.queue = "fx";
        // Queueing
        opt.old = opt.complete;
        opt.complete = function() {
            if (isFunction(opt.old)) opt.old.call(this);
            if (opt.queue) jQuery.dequeue(this, opt.queue);
        };
        return opt;
    };
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            // Show any hidden elements after setting opacity to 0
            return this.filter(isHiddenWithinTree).css("opacity", 0).show()// Animate to the value specified
            .end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                // Operate on a copy of prop so per-property easing won't be lost
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                // Empty animations, or finishing resolves immediately
                if (empty || dataPriv.get(this, "finish")) anim.stop(true);
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue) this.queue(type || "fx", []);
            return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                if (index) {
                    if (data[index] && data[index].stop) stopQueue(data[index]);
                } else {
                    for(index in data)if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
                }
                for(index = timers.length; index--;)if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                    timers[index].anim.stop(gotoEnd);
                    dequeue = false;
                    timers.splice(index, 1);
                }
                // Start the next in the queue if the last step wasn't forced.
                // Timers currently will call their complete callbacks, which
                // will dequeue but only if they were gotoEnd.
                if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
            });
        },
        finish: function(type) {
            if (type !== false) type = type || "fx";
            return this.each(function() {
                var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                // Enable finishing flag on private data
                data.finish = true;
                // Empty the queue first
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) hooks.stop.call(this, true);
                // Look for any active animations, and finish them
                for(index = timers.length; index--;)if (timers[index].elem === this && timers[index].queue === type) {
                    timers[index].anim.stop(true);
                    timers.splice(index, 1);
                }
                // Look for any animations in the old queue and finish them
                for(index = 0; index < length; index++)if (queue[index] && queue[index].finish) queue[index].finish.call(this);
                // Turn off finishing flag
                delete data.finish;
            });
        }
    });
    jQuery.each([
        "toggle",
        "show",
        "hide"
    ], function(_i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    // Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = Date.now();
        for(; i < timers.length; i++){
            timer = timers[i];
            // Run the timer and safely remove it when done (allowing for external removal)
            if (!timer() && timers[i] === timer) timers.splice(i--, 1);
        }
        if (!timers.length) jQuery.fx.stop();
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (inProgress) return;
        inProgress = true;
        schedule();
    };
    jQuery.fx.stop = function() {
        inProgress = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
    };
    // Based off of the plugin by Clint Helfers, with permission.
    jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
            var timeout = window1.setTimeout(next, time);
            hooks.stop = function() {
                window1.clearTimeout(timeout);
            };
        });
    };
    (function() {
        var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        // Support: Android <=4.3 only
        // Default value for a checkbox should be "on"
        support.checkOn = input.value !== "";
        // Support: IE <=11 only
        // Must access selectedIndex to make default options select
        support.optSelected = opt.selected;
        // Support: IE <=11 only
        // An input loses its value after becoming a radio
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    })();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    });
    jQuery.extend({
        attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            // Don't get/set attributes on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) return;
            // Fallback to prop when attributes are not supported
            if (typeof elem.getAttribute === "undefined") return jQuery.prop(elem, name, value);
            // Attribute hooks are determined by the lowercase version
            // Grab necessary hook if one is defined
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                }
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                elem.setAttribute(name, value + "");
                return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
            ret = jQuery.find.attr(elem, name);
            // Non-existent attributes return null, we normalize to undefined
            return ret == null ? undefined : ret;
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) elem.value = val;
                        return value;
                    }
                }
            }
        },
        removeAttr: function(elem, value) {
            var name, i = 0, // Attribute names can contain non-HTML whitespace characters
            // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
            attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) while(name = attrNames[i++])elem.removeAttribute(name);
        }
    });
    // Hooks for boolean attributes
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) // Remove boolean attributes when set to false
            jQuery.removeAttr(elem, name);
            else elem.setAttribute(name, name);
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle, lowercaseName = name.toLowerCase();
            if (!isXML) {
                // Avoid an infinite loop by temporarily removing this function from the getter
                handle = attrHandle[lowercaseName];
                attrHandle[lowercaseName] = ret;
                ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                attrHandle[lowercaseName] = handle;
            }
            return ret;
        };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });
    jQuery.extend({
        prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            // Don't get/set properties on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) return;
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
            return elem[name];
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    // Support: IE <=9 - 11 only
                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // Use proper attribute retrieval (trac-12072)
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    if (tabindex) return parseInt(tabindex, 10);
                    if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) return 0;
                    return -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    // Support: IE <=11 only
    // Accessing the selectedIndex property
    // forces the browser to respect setting selected
    // on the option
    // The getter ensures a default option is selected
    // when in an optgroup
    // eslint rule "no-unused-expressions" is disabled for this code
    // since it considers such accessions noop
    if (!support.optSelected) jQuery.propHooks.selected = {
        get: function(elem) {
            /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
            if (parent && parent.parentNode) parent.parentNode.selectedIndex;
            return null;
        },
        set: function(elem) {
            /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
            if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) parent.parentNode.selectedIndex;
            }
        }
    };
    jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    // Strip and collapse whitespace according to HTML spec
    // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
    function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
    }
    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
    }
    function classesToArray(value) {
        if (Array.isArray(value)) return value;
        if (typeof value === "string") return value.match(rnothtmlwhite) || [];
        return [];
    }
    jQuery.fn.extend({
        addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
            classNames = classesToArray(value);
            if (classNames.length) return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        if (cur.indexOf(" " + className + " ") < 0) cur += className + " ";
                    }
                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) this.setAttribute("class", finalValue);
                }
            });
            return this;
        },
        removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            classNames = classesToArray(value);
            if (classNames.length) return this.each(function() {
                curValue = getClass(this);
                // This expression is here for better compressibility (see addClass)
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        // Remove *all* instances
                        while(cur.indexOf(" " + className + " ") > -1)cur = cur.replace(" " + className + " ", " ");
                    }
                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) this.setAttribute("class", finalValue);
                }
            });
            return this;
        },
        toggleClass: function(value, stateVal) {
            var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) return this.each(function(i) {
                jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
            });
            if (typeof stateVal === "boolean" && isValidValue) return stateVal ? this.addClass(value) : this.removeClass(value);
            classNames = classesToArray(value);
            return this.each(function() {
                if (isValidValue) {
                    // Toggle individual class names
                    self = jQuery(this);
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        // Check each className given, space separated list
                        if (self.hasClass(className)) self.removeClass(className);
                        else self.addClass(className);
                    }
                // Toggle whole class name
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) // Store className if set
                    dataPriv.set(this, "__className__", className);
                    // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    if (this.setAttribute) this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                }
            });
        },
        hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while(elem = this[i++]){
                if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return true;
            }
            return false;
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) return ret;
                    ret = elem.value;
                    // Handle most common string cases
                    if (typeof ret === "string") return ret.replace(rreturn, "");
                    // Handle cases where value is null/undef or number
                    return ret == null ? "" : ret;
                }
                return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) return;
                if (valueIsFunction) val = value.call(this, i, jQuery(this).val());
                else val = value;
                // Treat null/undefined as ""; convert numbers to string
                if (val == null) val = "";
                else if (typeof val === "number") val += "";
                else if (Array.isArray(val)) val = jQuery.map(val, function(value) {
                    return value == null ? "" : value + "";
                });
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                // If set returns undefined, fall back to normal setting
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) this.value = val;
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : // Support: IE <=10 - 11 only
                    // option.text throws exceptions (trac-14686, trac-14858)
                    // Strip and collapse whitespace
                    // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                    stripAndCollapse(jQuery.text(elem));
                }
            },
            select: {
                get: function(elem) {
                    var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                    if (index < 0) i = max;
                    else i = one ? index : 0;
                    // Loop through all the selected options
                    for(; i < max; i++){
                        option = options[i];
                        // Support: IE <=9 only
                        // IE8-9 doesn't update selected after form reset (trac-2551)
                        if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                        !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                            // Get the specific value for the option
                            value = jQuery(option).val();
                            // We don't need an array for one selects
                            if (one) return value;
                            // Multi-Selects return an array
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while(i--){
                        option = options[i];
                        /* eslint-disable no-cond-assign */ if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) optionSet = true;
                    /* eslint-enable no-cond-assign */ }
                    // Force browsers to behave consistently when non-matching value is set
                    if (!optionSet) elem.selectedIndex = -1;
                    return values;
                }
            }
        }
    });
    // Radios and checkboxes getter/setter
    jQuery.each([
        "radio",
        "checkbox"
    ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
        };
        if (!support.checkOn) jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
        };
    });
    // Return jQuery for attributes-only inclusion
    var location = window1.location;
    var nonce = {
        guid: Date.now()
    };
    var rquery = /\?/;
    // Cross-browser xml parsing
    jQuery.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") return null;
        // Support: IE 9 - 11 only
        // IE throws on parseFromString with invalid input.
        try {
            xml = new window1.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {}
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
        }).join("\n") : data));
        return xml;
    };
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
    };
    jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [
                elem || document
            ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document;
            // Don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) return;
            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if (rfocusMorph.test(type + jQuery.event.triggered)) return;
            if (type.indexOf(".") > -1) {
                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            // Clean up the event in case it is being reused
            event.result = undefined;
            if (!event.target) event.target = elem;
            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ? [
                event
            ] : jQuery.makeArray(data, [
                event
            ]);
            // Allow special events to draw outside the lines
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) return;
            // Determine event propagation path in advance, per W3C events spec (trac-9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
                for(; cur; cur = cur.parentNode){
                    eventPath.push(cur);
                    tmp = cur;
                }
                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (tmp === (elem.ownerDocument || document)) eventPath.push(tmp.defaultView || tmp.parentWindow || window1);
            }
            // Fire handlers on the event path
            i = 0;
            while((cur = eventPath[i++]) && !event.isPropagationStopped()){
                lastElement = cur;
                event.type = i > 1 ? bubbleType : special.bindType || type;
                // jQuery handler
                handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                if (handle) handle.apply(cur, data);
                // Native handler
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) event.preventDefault();
                }
            }
            event.type = type;
            // If nobody prevented the default action, do it now
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) // Call a native DOM method on the target with the same name as the event.
                // Don't do default actions on window, that's where global variables be (trac-6170)
                {
                    if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ontype];
                        if (tmp) elem[ontype] = null;
                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        if (event.isPropagationStopped()) lastElement.addEventListener(type, stopPropagationCallback);
                        elem[type]();
                        if (event.isPropagationStopped()) lastElement.removeEventListener(type, stopPropagationCallback);
                        jQuery.event.triggered = undefined;
                        if (tmp) elem[ontype] = tmp;
                    }
                }
            }
            return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true
            });
            jQuery.event.trigger(e, null, elem);
        }
    });
    jQuery.fn.extend({
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) return jQuery.event.trigger(type, data, elem, true);
        }
    });
    var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) // Serialize array item.
        jQuery.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) // Treat each array item as a scalar.
            add(prefix, v);
            else // Item is non-scalar (array or object), encode its numeric index.
            buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
        });
        else if (!traditional && toType(obj) === "object") // Serialize object item.
        for(name in obj)buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
        else // Serialize scalar item.
        add(prefix, obj);
    }
    // Serialize an array of form elements or a set of
    // key/values into a query string
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
            // If value is a function, invoke it and use its return value
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) return "";
        // If an array was passed in, assume that it is an array of form elements.
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) // Serialize the form elements
        jQuery.each(a, function() {
            add(this.name, this.value);
        });
        else // If traditional, encode the "old" way (the way 1.3.2 or older
        // did it), otherwise encode params recursively.
        for(prefix in a)buildParams(prefix, a[prefix], traditional, add);
        // Return the resulting serialization
        return s.join("&");
    };
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                // Use .is( ":disabled" ) so that fieldset[disabled] works
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
                var val = jQuery(this).val();
                if (val == null) return null;
                if (Array.isArray(val)) return jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                });
                return {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, // trac-7653, trac-8125, trac-8152: local protocol detection
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */ prefilters = {}, /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */ transports = {}, // Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
    allTypes = "*/".concat("*"), // Anchor tag for parsing the document origin
    originAnchor = document.createElement("a");
    originAnchor.href = location.href;
    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports(structure) {
        // dataTypeExpression is optional and defaults to "*"
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
                // For each dataType in the dataTypeExpression
                while(dataType = dataTypes[i++])// Prepend if requested
                if (dataType[0] === "+") {
                    dataType = dataType.slice(1) || "*";
                    (structure[dataType] = structure[dataType] || []).unshift(func);
                // Otherwise append
                } else (structure[dataType] = structure[dataType] || []).push(func);
            }
        };
    }
    // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) return !(selected = dataTypeOrTransport);
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes trac-9887
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for(key in src)if (src[key] !== undefined) (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
        if (deep) jQuery.extend(true, target, deep);
        return target;
    }
    /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */ function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        // Remove auto dataType and get content-type in the process
        while(dataTypes[0] === "*"){
            dataTypes.shift();
            if (ct === undefined) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
        // Check if we're dealing with a known content-type
        if (ct) {
            for(type in contents)if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
            }
        }
        // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) finalDataType = dataTypes[0];
        else {
            // Try convertible dataTypes
            for(type in responses){
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) firstDataType = type;
            }
            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }
        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
            return responses[finalDataType];
        }
    }
    /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */ function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, // Work with a copy of dataTypes in case we need to modify it for conversion
        dataTypes = s.dataTypes.slice();
        // Create converters map with lowercased keys
        if (dataTypes[1]) for(conv in s.converters)converters[conv.toLowerCase()] = s.converters[conv];
        current = dataTypes.shift();
        // Convert to each sequential dataType
        while(current){
            if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
            // Apply the dataFilter if provided
            if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
            prev = current;
            current = dataTypes.shift();
            if (current) {
                // There's only work to do if current dataType is non-auto
                if (current === "*") current = prev;
                else if (prev !== "*" && prev !== current) {
                    // Seek a direct converter
                    conv = converters[prev + " " + current] || converters["* " + current];
                    // If none found, seek a pair
                    if (!conv) for(conv2 in converters){
                        // If conv2 outputs current
                        tmp = conv2.split(" ");
                        if (tmp[1] === current) {
                            // If prev can be converted to accepted input
                            conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                            if (conv) {
                                // Condense equivalence converters
                                if (conv === true) conv = converters[conv2];
                                else if (converters[conv2] !== true) {
                                    current = tmp[0];
                                    dataTypes.unshift(tmp[1]);
                                }
                                break;
                            }
                        }
                    }
                    // Apply converter (if not an equivalence)
                    if (conv !== true) {
                        // Unless errors are allowed to bubble, catch and return them
                        if (conv && s.throws) response = conv(response);
                        else try {
                            response = conv(response);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: conv ? e : "No conversion from " + prev + " to " + current
                            };
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/ accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
                // Convert anything to text
                "* text": String,
                // Text to html (true = no transformation)
                "text html": true,
                // Evaluate text as a json expression
                "text json": JSON.parse,
                // Parse text as xml
                "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
            return settings ? // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
            ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
            // If url is an object, simulate pre-1.5 signature
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            // Force options to be an object
            options = options || {};
            var transport, // URL without anti-cache param
            cacheURL, // Response headers
            responseHeadersString, responseHeaders, // timeout handle
            timeoutTimer, // Url cleanup var
            urlAnchor, // Request state (becomes false upon send and true upon completion)
            completed, // To know if global events are to be dispatched
            fireGlobals, // Loop variable
            i, // uncached part of the url
            uncached, // Create the final options object
            s = jQuery.ajaxSetup({}, options), // Callbacks context
            callbackContext = s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
            globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, // Deferreds
            deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), // Status-dependent callbacks
            statusCode = s.statusCode || {}, // Headers (they are sent all at once)
            requestHeaders = {}, requestHeadersNames = {}, // Default abort message
            strAbort = "canceled", // Fake xhr
            jqXHR = {
                readyState: 0,
                // Builds headers hashtable if needed
                getResponseHeader: function(key) {
                    var match;
                    if (completed) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while(match = rheaders.exec(responseHeadersString))responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                        }
                        match = responseHeaders[key.toLowerCase() + " "];
                    }
                    return match == null ? null : match.join(", ");
                },
                // Raw string
                getAllResponseHeaders: function() {
                    return completed ? responseHeadersString : null;
                },
                // Caches the header
                setRequestHeader: function(name, value) {
                    if (completed == null) {
                        name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                // Overrides response content-type header
                overrideMimeType: function(type) {
                    if (completed == null) s.mimeType = type;
                    return this;
                },
                // Status-dependent callbacks
                statusCode: function(map) {
                    var code;
                    if (map) {
                        if (completed) // Execute the appropriate callbacks
                        jqXHR.always(map[jqXHR.status]);
                        else // Lazy-add the new callbacks in a way that preserves old ones
                        for(code in map)statusCode[code] = [
                            statusCode[code],
                            map[code]
                        ];
                    }
                    return this;
                },
                // Cancel the request
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) transport.abort(finalText);
                    done(0, finalText);
                    return this;
                }
            };
            // Attach deferreds
            deferred.promise(jqXHR);
            // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (trac-10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            // Alias method option to type as per ticket trac-12004
            s.type = options.method || options.type || s.method || s.type;
            // Extract dataTypes list
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [
                ""
            ];
            // A cross-domain request is in order when the origin doesn't match the current origin.
            if (s.crossDomain == null) {
                urlAnchor = document.createElement("a");
                // Support: IE <=8 - 11, Edge 12 - 15
                // IE throws exception on accessing the href property if url is malformed,
                // e.g. http://example.com:80x/
                try {
                    urlAnchor.href = s.url;
                    // Support: IE <=8 - 11 only
                    // Anchor's host property isn't correctly set when s.url is relative
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                } catch (e) {
                    // If there is an error parsing the URL, assume it is crossDomain,
                    // it can be rejected by the transport if it is invalid
                    s.crossDomain = true;
                }
            }
            // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") s.data = jQuery.param(s.data, s.traditional);
            // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            // If request was aborted inside a prefilter, stop there
            if (completed) return jqXHR;
            // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
            fireGlobals = jQuery.event && s.global;
            // Watch for a new set of requests
            if (fireGlobals && jQuery.active++ === 0) jQuery.event.trigger("ajaxStart");
            // Uppercase the type
            s.type = s.type.toUpperCase();
            // Determine if request has content
            s.hasContent = !rnoContent.test(s.type);
            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            // Remove hash to simplify url manipulation
            cacheURL = s.url.replace(rhash, "");
            // More options handling for requests with no content
            if (!s.hasContent) {
                // Remember the hash so we can put it back
                uncached = s.url.slice(cacheURL.length);
                // If data is available and should be processed, append data to url
                if (s.data && (s.processData || typeof s.data === "string")) {
                    cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                    // trac-9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }
                // Add or update anti-cache param if needed
                if (s.cache === false) {
                    cacheURL = cacheURL.replace(rantiCache, "$1");
                    uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
                }
                // Put hash and anti-cache on the URL that will be requested (gh-1732)
                s.url = cacheURL + uncached;
            // Change '%20' to '+' if this is encoded form body content (gh-2658)
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) s.data = s.data.replace(r20, "+");
            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
            // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            // Check for headers option
            for(i in s.headers)jqXHR.setRequestHeader(i, s.headers[i]);
            // Allow custom headers/mimetypes and early abort
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) // Abort if not done already and return
            return jqXHR.abort();
            // Aborting is no longer a cancellation
            strAbort = "abort";
            // Install callbacks on deferreds
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            // If no transport, we auto-abort
            if (!transport) done(-1, "No Transport");
            else {
                jqXHR.readyState = 1;
                // Send global event
                if (fireGlobals) globalEventContext.trigger("ajaxSend", [
                    jqXHR,
                    s
                ]);
                // If request was aborted inside ajaxSend, stop there
                if (completed) return jqXHR;
                // Timeout
                if (s.async && s.timeout > 0) timeoutTimer = window1.setTimeout(function() {
                    jqXHR.abort("timeout");
                }, s.timeout);
                try {
                    completed = false;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    // Rethrow post-completion exceptions
                    if (completed) throw e;
                    // Propagate others as results
                    done(-1, e);
                }
            }
            // Callback for when everything is done
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                // Ignore repeat invocations
                if (completed) return;
                completed = true;
                // Clear timeout if it exists
                if (timeoutTimer) window1.clearTimeout(timeoutTimer);
                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;
                // Cache response headers
                responseHeadersString = headers || "";
                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;
                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;
                // Get response data
                if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
                // Use a noop converter for missing script but not if jsonp
                if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) s.converters["text script"] = function() {};
                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                // If successful, handle type chaining
                if (isSuccess) {
                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) jQuery.lastModified[cacheURL] = modified;
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) jQuery.etag[cacheURL] = modified;
                    }
                    // if no content
                    if (status === 204 || s.type === "HEAD") statusText = "nocontent";
                    else if (status === 304) statusText = "notmodified";
                    else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) status = 0;
                    }
                }
                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                // Success/Error
                if (isSuccess) deferred.resolveWith(callbackContext, [
                    success,
                    statusText,
                    jqXHR
                ]);
                else deferred.rejectWith(callbackContext, [
                    jqXHR,
                    statusText,
                    error
                ]);
                // Status-dependent callbacks
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [
                    jqXHR,
                    s,
                    isSuccess ? success : error
                ]);
                // Complete
                completeDeferred.fireWith(callbackContext, [
                    jqXHR,
                    statusText
                ]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [
                        jqXHR,
                        s
                    ]);
                    // Handle the global AJAX counter
                    if (!--jQuery.active) jQuery.event.trigger("ajaxStop");
                }
            }
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each([
        "get",
        "post"
    ], function(_i, method) {
        jQuery[method] = function(url, data, callback, type) {
            // Shift arguments if data argument was omitted
            if (isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            // The url can be an options object (which then must have .url)
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    });
    jQuery.ajaxPrefilter(function(s) {
        var i;
        for(i in s.headers)if (i.toLowerCase() === "content-type") s.contentType = s.headers[i] || "";
    });
    jQuery._evalUrl = function(url, options, doc) {
        return jQuery.ajax({
            url: url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
                "text script": function() {}
            },
            dataFilter: function(response) {
                jQuery.globalEval(response, options, doc);
            }
        });
    };
    jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            if (this[0]) {
                if (isFunction(html)) html = html.call(this[0]);
                // The elements to wrap the target around
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) wrap.insertBefore(this[0]);
                wrap.map(function() {
                    var elem = this;
                    while(elem.firstElementChild)elem = elem.firstElementChild;
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (isFunction(html)) return this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
            });
            return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) contents.wrapAll(html);
                else self.append(html);
            });
        },
        wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
                jQuery(this).replaceWith(this.childNodes);
            });
            return this;
        }
    });
    jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
    };
    jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new window1.XMLHttpRequest();
        } catch (e) {}
    };
    var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        // Cross domain only allowed if supported through XMLHttpRequest
        if (support.cors || xhrSupported && !options.crossDomain) return {
            send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(options.type, options.url, options.async, options.username, options.password);
                // Apply custom fields if provided
                if (options.xhrFields) for(i in options.xhrFields)xhr[i] = options.xhrFields[i];
                // Override mime type if needed
                if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
                // X-Requested-With header
                // For cross-domain requests, seeing as conditions for a preflight are
                // akin to a jigsaw puzzle, we simply never set it to be sure.
                // (it can always be set on a per-request basis or even using ajaxSetup)
                // For same-domain requests, won't change header if already provided.
                if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
                // Set headers
                for(i in headers)xhr.setRequestHeader(i, headers[i]);
                // Callback
                callback = function(type) {
                    return function() {
                        if (callback) {
                            callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                            if (type === "abort") xhr.abort();
                            else if (type === "error") {
                                // Support: IE <=9 only
                                // On a manual native abort, IE9 throws
                                // errors on any property access that is not readyState
                                if (typeof xhr.status !== "number") complete(0, "error");
                                else complete(// File: protocol always yields status 0; see trac-8605, trac-14207
                                xhr.status, xhr.statusText);
                            } else complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                            // IE9 has no XHR2 but throws on binary (trac-11426)
                            // For XHR2 non-text, let the caller handle it (gh-2498)
                            (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                binary: xhr.response
                            } : {
                                text: xhr.responseText
                            }, xhr.getAllResponseHeaders());
                        }
                    };
                };
                // Listen to events
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                // Support: IE 9 only
                // Use onreadystatechange to replace onabort
                // to handle uncaught aborts
                if (xhr.onabort !== undefined) xhr.onabort = errorCallback;
                else xhr.onreadystatechange = function() {
                    // Check readyState before timeout as it changes
                    if (xhr.readyState === 4) // Allow onerror to be called first,
                    // but that will not handle a native abort
                    // Also, save errorCallback to a variable
                    // as xhr.onerror cannot be accessed
                    window1.setTimeout(function() {
                        if (callback) errorCallback();
                    });
                };
                // Create the abort callback
                callback = callback("abort");
                try {
                    // Do send the request (this may raise an exception)
                    xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                    // trac-14683: Only rethrow if this hasn't been notified as an error yet
                    if (callback) throw e;
                }
            },
            abort: function() {
                if (callback) callback();
            }
        };
    });
    // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
    jQuery.ajaxPrefilter(function(s) {
        if (s.crossDomain) s.contents.script = false;
    });
    // Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    // Handle cache's special case and crossDomain
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) s.cache = false;
        if (s.crossDomain) s.type = "GET";
    });
    // Bind script tag hack transport
    jQuery.ajaxTransport("script", function(s) {
        // This transport only deals with cross domain or forced-by-attrs requests
        if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove();
                        callback = null;
                        if (evt) complete(evt.type === "error" ? 404 : 200, evt.type);
                    });
                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    document.head.appendChild(script[0]);
                },
                abort: function() {
                    if (callback) callback();
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    // Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
        }
    });
    // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            // Insert callback into url or form data
            if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            else if (s.jsonp !== false) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function() {
                if (!responseContainer) jQuery.error(callbackName + " was not called");
                return responseContainer[0];
            };
            // Force json dataType
            s.dataTypes[0] = "json";
            // Install callback
            overwritten = window1[callbackName];
            window1[callbackName] = function() {
                responseContainer = arguments;
            };
            // Clean-up function (fires after converters)
            jqXHR.always(function() {
                // If previous value didn't exist - remove it
                if (overwritten === undefined) jQuery(window1).removeProp(callbackName);
                else window1[callbackName] = overwritten;
                // Save back as free
                if (s[callbackName]) {
                    // Make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    // Save the callback name for future use
                    oldCallbacks.push(callbackName);
                }
                // Call if it was a function and we have a response
                if (responseContainer && isFunction(overwritten)) overwritten(responseContainer[0]);
                responseContainer = overwritten = undefined;
            });
            // Delegate to script
            return "script";
        }
    });
    // Support: Safari 8 only
    // In Safari 8 documents created via document.implementation.createHTMLDocument
    // collapse sibling forms: the second one becomes a child of the first one.
    // Because of that, this security measure has to be disabled in Safari 8.
    // https://bugs.webkit.org/show_bug.cgi?id=137337
    support.createHTMLDocument = function() {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
    }();
    // Argument "data" should be string of html
    // context (optional): If specified, the fragment will be created in this context,
    // defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") return [];
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        var base, parsed, scripts;
        if (!context) {
            // Stop scripts or inline event handlers from being executed immediately
            // by using document.implementation
            if (support.createHTMLDocument) {
                context = document.implementation.createHTMLDocument("");
                // Set the base href for the created document
                // so any parsed elements with URLs
                // are based on the document's URL (gh-2965)
                base = context.createElement("base");
                base.href = document.location.href;
                context.head.appendChild(base);
            } else context = document;
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        // Single tag
        if (parsed) return [
            context.createElement(parsed[1])
        ];
        parsed = buildFragment([
            data
        ], context, scripts);
        if (scripts && scripts.length) jQuery(scripts).remove();
        return jQuery.merge([], parsed.childNodes);
    };
    /**
 * Load a url into a page
 */ jQuery.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
        }
        // If it's a function
        if (isFunction(params)) {
            // We assume that it's the callback
            callback = params;
            params = undefined;
        // Otherwise, build a param string
        } else if (params && typeof params === "object") type = "POST";
        // If we have elements to modify, make the request
        if (self.length > 0) jQuery.ajax({
            url: url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
        }).done(function(responseText) {
            // Save response for use in complete callback
            response = arguments;
            self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
            responseText);
        // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
        }).always(callback && function(jqXHR, status) {
            self.each(function() {
                callback.apply(this, response || [
                    jqXHR.responseText,
                    status,
                    jqXHR
                ]);
            });
        });
        return this;
    };
    jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            // Set position first, in-case top/left are set even on static elem
            if (position === "static") elem.style.position = "relative";
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            // Need to be able to calculate position if either
            // top or left is auto and position is either absolute or fixed
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
            options = options.call(elem, i, jQuery.extend({}, curOffset));
            if (options.top != null) props.top = options.top - curOffset.top + curTop;
            if (options.left != null) props.left = options.left - curOffset.left + curLeft;
            if ("using" in options) options.using.call(elem, props);
            else curElem.css(props);
        }
    };
    jQuery.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
            // Preserve chaining for setter
            if (arguments.length) return options === undefined ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
            });
            var rect, win, elem = this[0];
            if (!elem) return;
            // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error
            if (!elem.getClientRects().length) return {
                top: 0,
                left: 0
            };
            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
            if (!this[0]) return;
            var offsetParent, offset, doc, elem = this[0], parentOffset = {
                top: 0,
                left: 0
            };
            // position:fixed elements are offset from the viewport, which itself always has zero offset
            if (jQuery.css(elem, "position") === "fixed") // Assume position:fixed implies availability of getBoundingClientRect
            offset = elem.getBoundingClientRect();
            else {
                offset = this.offset();
                // Account for the *real* offset parent, which can be the document or its root element
                // when a statically positioned element is identified
                doc = elem.ownerDocument;
                offsetParent = elem.offsetParent || doc.documentElement;
                while(offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.parentNode;
                if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                    // Incorporate borders into its offset, since they are outside its content origin
                    parentOffset = jQuery(offsetParent).offset();
                    parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                    parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                }
            }
            // Subtract parent offsets and element margins
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent;
                while(offsetParent && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.offsetParent;
                return offsetParent || documentElement;
            });
        }
    });
    // Create scrollLeft and scrollTop methods
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) {
                // Coalesce documents and windows
                var win;
                if (isWindow(elem)) win = elem;
                else if (elem.nodeType === 9) win = elem.defaultView;
                if (val === undefined) return win ? win[prop] : elem[method];
                if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                else elem[method] = val;
            }, method, val, arguments.length);
        };
    });
    // Support: Safari <=7 - 9.1, Chrome <=37 - 49
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
    // getComputedStyle returns percent when specified for top/left/bottom/right;
    // rather than make the css module depend on the offset module, just check for it here
    jQuery.each([
        "top",
        "left"
    ], function(_i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                // If curCSS returns percentage, fallback to offset
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
        });
    });
    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            // Margin is only for outerHeight, outerWidth
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    if (isWindow(elem)) // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                    return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                    // Get document width or height
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                        // whichever is greatest
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
                    jQuery.css(elem, type, extra) : // Set width or height on the element
                    jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable);
            };
        });
    });
    jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function(_i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.fn.extend({
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
            return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
        }
    });
    jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
        // Handle event binding
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    // Support: Android <=4.0 only
    // Make sure we trim BOM and NBSP
    // Require that the "whitespace run" starts from a non-whitespace
    // to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
    var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    // Bind a function to a context, optionally partially applying any
    // arguments.
    // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
    // However, it is not slated for removal any time soon
    jQuery.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
        }
        // Quick check to determine if target is callable, in the spec
        // this throws a TypeError, but we will just return undefined.
        if (!isFunction(fn)) return undefined;
        // Simulated bind
        args = slice.call(arguments, 2);
        proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        // Set the guid of unique handler to the same of original handler, so it can be removed
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
    };
    jQuery.holdReady = function(hold) {
        if (hold) jQuery.readyWait++;
        else jQuery.ready(true);
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;
    jQuery.now = Date.now;
    jQuery.isNumeric = function(obj) {
        // As of jQuery 3.0, isNumeric is limited to
        // strings and numbers (primitives or objects)
        // that can be coerced to finite numbers (gh-2662)
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
    };
    jQuery.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
    };
    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.
    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    if (typeof define === "function" && define.amd) define("jquery", [], function() {
        return jQuery;
    });
    var // Map over jQuery in case of overwrite
    _jQuery = window1.jQuery, // Map over the $ in case of overwrite
    _$ = window1.$;
    jQuery.noConflict = function(deep) {
        if (window1.$ === jQuery) window1.$ = _$;
        if (deep && window1.jQuery === jQuery) window1.jQuery = _jQuery;
        return jQuery;
    };
    // Expose jQuery and $ identifiers, even in AMD
    // (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (trac-13566)
    if (typeof noGlobal === "undefined") window1.jQuery = window1.$ = jQuery;
    return jQuery;
});

},{}],"FcWZA":[function(require,module,exports) {
// The programming goals of Split.js are to deliver readable, understandable and
// maintainable code, while at the same time manually optimizing for tiny minified file size,
// browser compatibility without additional requirements
// and very few assumptions about the user's page layout.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var global = typeof window !== "undefined" ? window : null;
var ssr = global === null;
var document = !ssr ? global.document : undefined;
// Save a couple long function names that are used frequently.
// This optimization saves around 400 bytes.
var addEventListener = "addEventListener";
var removeEventListener = "removeEventListener";
var getBoundingClientRect = "getBoundingClientRect";
var gutterStartDragging = "_a";
var aGutterSize = "_b";
var bGutterSize = "_c";
var HORIZONTAL = "horizontal";
var NOOP = function() {
    return false;
};
// Helper function determines which prefixes of CSS calc we need.
// We only need to do this once on startup, when this anonymous function is called.
//
// Tests -webkit, -moz and -o prefixes. Modified from StackOverflow:
// http://stackoverflow.com/questions/16625140/js-feature-detection-to-detect-the-usage-of-webkit-calc-over-calc/16625167#16625167
var calc = ssr ? "calc" : [
    "",
    "-webkit-",
    "-moz-",
    "-o-"
].filter(function(prefix) {
    var el = document.createElement("div");
    el.style.cssText = "width:" + prefix + "calc(9px)";
    return !!el.style.length;
}).shift() + "calc";
// Helper function checks if its argument is a string-like type
var isString = function(v) {
    return typeof v === "string" || v instanceof String;
};
// Helper function allows elements and string selectors to be used
// interchangeably. In either case an element is returned. This allows us to
// do `Split([elem1, elem2])` as well as `Split(['#id1', '#id2'])`.
var elementOrSelector = function(el) {
    if (isString(el)) {
        var ele = document.querySelector(el);
        if (!ele) throw new Error("Selector " + el + " did not match a DOM element");
        return ele;
    }
    return el;
};
// Helper function gets a property from the properties object, with a default fallback
var getOption = function(options, propName, def) {
    var value = options[propName];
    if (value !== undefined) return value;
    return def;
};
var getGutterSize = function(gutterSize, isFirst, isLast, gutterAlign) {
    if (isFirst) {
        if (gutterAlign === "end") return 0;
        if (gutterAlign === "center") return gutterSize / 2;
    } else if (isLast) {
        if (gutterAlign === "start") return 0;
        if (gutterAlign === "center") return gutterSize / 2;
    }
    return gutterSize;
};
// Default options
var defaultGutterFn = function(i, gutterDirection) {
    var gut = document.createElement("div");
    gut.className = "gutter gutter-" + gutterDirection;
    return gut;
};
var defaultElementStyleFn = function(dim, size, gutSize) {
    var style = {};
    if (!isString(size)) style[dim] = calc + "(" + size + "% - " + gutSize + "px)";
    else style[dim] = size;
    return style;
};
var defaultGutterStyleFn = function(dim, gutSize) {
    var obj;
    return obj = {}, obj[dim] = gutSize + "px", obj;
};
// The main function to initialize a split. Split.js thinks about each pair
// of elements as an independant pair. Dragging the gutter between two elements
// only changes the dimensions of elements in that pair. This is key to understanding
// how the following functions operate, since each function is bound to a pair.
//
// A pair object is shaped like this:
//
// {
//     a: DOM element,
//     b: DOM element,
//     aMin: Number,
//     bMin: Number,
//     dragging: Boolean,
//     parent: DOM element,
//     direction: 'horizontal' | 'vertical'
// }
//
// The basic sequence:
//
// 1. Set defaults to something sane. `options` doesn't have to be passed at all.
// 2. Initialize a bunch of strings based on the direction we're splitting.
//    A lot of the behavior in the rest of the library is paramatized down to
//    rely on CSS strings and classes.
// 3. Define the dragging helper functions, and a few helpers to go with them.
// 4. Loop through the elements while pairing them off. Every pair gets an
//    `pair` object and a gutter.
// 5. Actually size the pair elements, insert gutters and attach event listeners.
var Split = function(idsOption, options) {
    if (options === void 0) options = {};
    if (ssr) return {};
    var ids = idsOption;
    var dimension;
    var clientAxis;
    var position;
    var positionEnd;
    var clientSize;
    var elements;
    // Allow HTMLCollection to be used as an argument when supported
    if (Array.from) ids = Array.from(ids);
    // All DOM elements in the split should have a common parent. We can grab
    // the first elements parent and hope users read the docs because the
    // behavior will be whacky otherwise.
    var firstElement = elementOrSelector(ids[0]);
    var parent = firstElement.parentNode;
    var parentStyle = getComputedStyle ? getComputedStyle(parent) : null;
    var parentFlexDirection = parentStyle ? parentStyle.flexDirection : null;
    // Set default options.sizes to equal percentages of the parent element.
    var sizes = getOption(options, "sizes") || ids.map(function() {
        return 100 / ids.length;
    });
    // Standardize minSize and maxSize to an array if it isn't already.
    // This allows minSize and maxSize to be passed as a number.
    var minSize = getOption(options, "minSize", 100);
    var minSizes = Array.isArray(minSize) ? minSize : ids.map(function() {
        return minSize;
    });
    var maxSize = getOption(options, "maxSize", Infinity);
    var maxSizes = Array.isArray(maxSize) ? maxSize : ids.map(function() {
        return maxSize;
    });
    // Get other options
    var expandToMin = getOption(options, "expandToMin", false);
    var gutterSize = getOption(options, "gutterSize", 10);
    var gutterAlign = getOption(options, "gutterAlign", "center");
    var snapOffset = getOption(options, "snapOffset", 30);
    var snapOffsets = Array.isArray(snapOffset) ? snapOffset : ids.map(function() {
        return snapOffset;
    });
    var dragInterval = getOption(options, "dragInterval", 1);
    var direction = getOption(options, "direction", HORIZONTAL);
    var cursor = getOption(options, "cursor", direction === HORIZONTAL ? "col-resize" : "row-resize");
    var gutter = getOption(options, "gutter", defaultGutterFn);
    var elementStyle = getOption(options, "elementStyle", defaultElementStyleFn);
    var gutterStyle = getOption(options, "gutterStyle", defaultGutterStyleFn);
    // 2. Initialize a bunch of strings based on the direction we're splitting.
    // A lot of the behavior in the rest of the library is paramatized down to
    // rely on CSS strings and classes.
    if (direction === HORIZONTAL) {
        dimension = "width";
        clientAxis = "clientX";
        position = "left";
        positionEnd = "right";
        clientSize = "clientWidth";
    } else if (direction === "vertical") {
        dimension = "height";
        clientAxis = "clientY";
        position = "top";
        positionEnd = "bottom";
        clientSize = "clientHeight";
    }
    // 3. Define the dragging helper functions, and a few helpers to go with them.
    // Each helper is bound to a pair object that contains its metadata. This
    // also makes it easy to store references to listeners that that will be
    // added and removed.
    //
    // Even though there are no other functions contained in them, aliasing
    // this to self saves 50 bytes or so since it's used so frequently.
    //
    // The pair object saves metadata like dragging state, position and
    // event listener references.
    function setElementSize(el, size, gutSize, i) {
        // Split.js allows setting sizes via numbers (ideally), or if you must,
        // by string, like '300px'. This is less than ideal, because it breaks
        // the fluid layout that `calc(% - px)` provides. You're on your own if you do that,
        // make sure you calculate the gutter size by hand.
        var style = elementStyle(dimension, size, gutSize, i);
        Object.keys(style).forEach(function(prop) {
            // eslint-disable-next-line no-param-reassign
            el.style[prop] = style[prop];
        });
    }
    function setGutterSize(gutterElement, gutSize, i) {
        var style = gutterStyle(dimension, gutSize, i);
        Object.keys(style).forEach(function(prop) {
            // eslint-disable-next-line no-param-reassign
            gutterElement.style[prop] = style[prop];
        });
    }
    function getSizes() {
        return elements.map(function(element) {
            return element.size;
        });
    }
    // Supports touch events, but not multitouch, so only the first
    // finger `touches[0]` is counted.
    function getMousePosition(e) {
        if ("touches" in e) return e.touches[0][clientAxis];
        return e[clientAxis];
    }
    // Actually adjust the size of elements `a` and `b` to `offset` while dragging.
    // calc is used to allow calc(percentage + gutterpx) on the whole split instance,
    // which allows the viewport to be resized without additional logic.
    // Element a's size is the same as offset. b's size is total size - a size.
    // Both sizes are calculated from the initial parent percentage,
    // then the gutter size is subtracted.
    function adjust(offset) {
        var a = elements[this.a];
        var b = elements[this.b];
        var percentage = a.size + b.size;
        a.size = offset / this.size * percentage;
        b.size = percentage - offset / this.size * percentage;
        setElementSize(a.element, a.size, this[aGutterSize], a.i);
        setElementSize(b.element, b.size, this[bGutterSize], b.i);
    }
    // drag, where all the magic happens. The logic is really quite simple:
    //
    // 1. Ignore if the pair is not dragging.
    // 2. Get the offset of the event.
    // 3. Snap offset to min if within snappable range (within min + snapOffset).
    // 4. Actually adjust each element in the pair to offset.
    //
    // ---------------------------------------------------------------------
    // |    | <- a.minSize               ||              b.minSize -> |    |
    // |    |  | <- this.snapOffset      ||     this.snapOffset -> |  |    |
    // |    |  |                         ||                        |  |    |
    // |    |  |                         ||                        |  |    |
    // ---------------------------------------------------------------------
    // | <- this.start                                        this.size -> |
    function drag(e) {
        var offset;
        var a = elements[this.a];
        var b = elements[this.b];
        if (!this.dragging) return;
        // Get the offset of the event from the first side of the
        // pair `this.start`. Then offset by the initial position of the
        // mouse compared to the gutter size.
        offset = getMousePosition(e) - this.start + (this[aGutterSize] - this.dragOffset);
        if (dragInterval > 1) offset = Math.round(offset / dragInterval) * dragInterval;
        // If within snapOffset of min or max, set offset to min or max.
        // snapOffset buffers a.minSize and b.minSize, so logic is opposite for both.
        // Include the appropriate gutter sizes to prevent overflows.
        if (offset <= a.minSize + a.snapOffset + this[aGutterSize]) offset = a.minSize + this[aGutterSize];
        else if (offset >= this.size - (b.minSize + b.snapOffset + this[bGutterSize])) offset = this.size - (b.minSize + this[bGutterSize]);
        if (offset >= a.maxSize - a.snapOffset + this[aGutterSize]) offset = a.maxSize + this[aGutterSize];
        else if (offset <= this.size - (b.maxSize - b.snapOffset + this[bGutterSize])) offset = this.size - (b.maxSize + this[bGutterSize]);
        // Actually adjust the size.
        adjust.call(this, offset);
        // Call the drag callback continously. Don't do anything too intensive
        // in this callback.
        getOption(options, "onDrag", NOOP)(getSizes());
    }
    // Cache some important sizes when drag starts, so we don't have to do that
    // continously:
    //
    // `size`: The total size of the pair. First + second + first gutter + second gutter.
    // `start`: The leading side of the first element.
    //
    // ------------------------------------------------
    // |      aGutterSize -> |||                      |
    // |                     |||                      |
    // |                     |||                      |
    // |                     ||| <- bGutterSize       |
    // ------------------------------------------------
    // | <- start                             size -> |
    function calculateSizes() {
        // Figure out the parent size minus padding.
        var a = elements[this.a].element;
        var b = elements[this.b].element;
        var aBounds = a[getBoundingClientRect]();
        var bBounds = b[getBoundingClientRect]();
        this.size = aBounds[dimension] + bBounds[dimension] + this[aGutterSize] + this[bGutterSize];
        this.start = aBounds[position];
        this.end = aBounds[positionEnd];
    }
    function innerSize(element) {
        // Return nothing if getComputedStyle is not supported (< IE9)
        // Or if parent element has no layout yet
        if (!getComputedStyle) return null;
        var computedStyle = getComputedStyle(element);
        if (!computedStyle) return null;
        var size = element[clientSize];
        if (size === 0) return null;
        if (direction === HORIZONTAL) size -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
        else size -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
        return size;
    }
    // When specifying percentage sizes that are less than the computed
    // size of the element minus the gutter, the lesser percentages must be increased
    // (and decreased from the other elements) to make space for the pixels
    // subtracted by the gutters.
    function trimToMin(sizesToTrim) {
        // Try to get inner size of parent element.
        // If it's no supported, return original sizes.
        var parentSize = innerSize(parent);
        if (parentSize === null) return sizesToTrim;
        if (minSizes.reduce(function(a, b) {
            return a + b;
        }, 0) > parentSize) return sizesToTrim;
        // Keep track of the excess pixels, the amount of pixels over the desired percentage
        // Also keep track of the elements with pixels to spare, to decrease after if needed
        var excessPixels = 0;
        var toSpare = [];
        var pixelSizes = sizesToTrim.map(function(size, i) {
            // Convert requested percentages to pixel sizes
            var pixelSize = parentSize * size / 100;
            var elementGutterSize = getGutterSize(gutterSize, i === 0, i === sizesToTrim.length - 1, gutterAlign);
            var elementMinSize = minSizes[i] + elementGutterSize;
            // If element is too smal, increase excess pixels by the difference
            // and mark that it has no pixels to spare
            if (pixelSize < elementMinSize) {
                excessPixels += elementMinSize - pixelSize;
                toSpare.push(0);
                return elementMinSize;
            }
            // Otherwise, mark the pixels it has to spare and return it's original size
            toSpare.push(pixelSize - elementMinSize);
            return pixelSize;
        });
        // If nothing was adjusted, return the original sizes
        if (excessPixels === 0) return sizesToTrim;
        return pixelSizes.map(function(pixelSize, i) {
            var newPixelSize = pixelSize;
            // While there's still pixels to take, and there's enough pixels to spare,
            // take as many as possible up to the total excess pixels
            if (excessPixels > 0 && toSpare[i] - excessPixels > 0) {
                var takenPixels = Math.min(excessPixels, toSpare[i] - excessPixels);
                // Subtract the amount taken for the next iteration
                excessPixels -= takenPixels;
                newPixelSize = pixelSize - takenPixels;
            }
            // Return the pixel size adjusted as a percentage
            return newPixelSize / parentSize * 100;
        });
    }
    // stopDragging is very similar to startDragging in reverse.
    function stopDragging() {
        var self = this;
        var a = elements[self.a].element;
        var b = elements[self.b].element;
        if (self.dragging) getOption(options, "onDragEnd", NOOP)(getSizes());
        self.dragging = false;
        // Remove the stored event listeners. This is why we store them.
        global[removeEventListener]("mouseup", self.stop);
        global[removeEventListener]("touchend", self.stop);
        global[removeEventListener]("touchcancel", self.stop);
        global[removeEventListener]("mousemove", self.move);
        global[removeEventListener]("touchmove", self.move);
        // Clear bound function references
        self.stop = null;
        self.move = null;
        a[removeEventListener]("selectstart", NOOP);
        a[removeEventListener]("dragstart", NOOP);
        b[removeEventListener]("selectstart", NOOP);
        b[removeEventListener]("dragstart", NOOP);
        a.style.userSelect = "";
        a.style.webkitUserSelect = "";
        a.style.MozUserSelect = "";
        a.style.pointerEvents = "";
        b.style.userSelect = "";
        b.style.webkitUserSelect = "";
        b.style.MozUserSelect = "";
        b.style.pointerEvents = "";
        self.gutter.style.cursor = "";
        self.parent.style.cursor = "";
        document.body.style.cursor = "";
    }
    // startDragging calls `calculateSizes` to store the inital size in the pair object.
    // It also adds event listeners for mouse/touch events,
    // and prevents selection while dragging so avoid the selecting text.
    function startDragging(e) {
        // Right-clicking can't start dragging.
        if ("button" in e && e.button !== 0) return;
        // Alias frequently used variables to save space. 200 bytes.
        var self = this;
        var a = elements[self.a].element;
        var b = elements[self.b].element;
        // Call the onDragStart callback.
        if (!self.dragging) getOption(options, "onDragStart", NOOP)(getSizes());
        // Don't actually drag the element. We emulate that in the drag function.
        e.preventDefault();
        // Set the dragging property of the pair object.
        self.dragging = true;
        // Create two event listeners bound to the same pair object and store
        // them in the pair object.
        self.move = drag.bind(self);
        self.stop = stopDragging.bind(self);
        // All the binding. `window` gets the stop events in case we drag out of the elements.
        global[addEventListener]("mouseup", self.stop);
        global[addEventListener]("touchend", self.stop);
        global[addEventListener]("touchcancel", self.stop);
        global[addEventListener]("mousemove", self.move);
        global[addEventListener]("touchmove", self.move);
        // Disable selection. Disable!
        a[addEventListener]("selectstart", NOOP);
        a[addEventListener]("dragstart", NOOP);
        b[addEventListener]("selectstart", NOOP);
        b[addEventListener]("dragstart", NOOP);
        a.style.userSelect = "none";
        a.style.webkitUserSelect = "none";
        a.style.MozUserSelect = "none";
        a.style.pointerEvents = "none";
        b.style.userSelect = "none";
        b.style.webkitUserSelect = "none";
        b.style.MozUserSelect = "none";
        b.style.pointerEvents = "none";
        // Set the cursor at multiple levels
        self.gutter.style.cursor = cursor;
        self.parent.style.cursor = cursor;
        document.body.style.cursor = cursor;
        // Cache the initial sizes of the pair.
        calculateSizes.call(self);
        // Determine the position of the mouse compared to the gutter
        self.dragOffset = getMousePosition(e) - self.end;
    }
    // adjust sizes to ensure percentage is within min size and gutter.
    sizes = trimToMin(sizes);
    // 5. Create pair and element objects. Each pair has an index reference to
    // elements `a` and `b` of the pair (first and second elements).
    // Loop through the elements while pairing them off. Every pair gets a
    // `pair` object and a gutter.
    //
    // Basic logic:
    //
    // - Starting with the second element `i > 0`, create `pair` objects with
    //   `a = i - 1` and `b = i`
    // - Set gutter sizes based on the _pair_ being first/last. The first and last
    //   pair have gutterSize / 2, since they only have one half gutter, and not two.
    // - Create gutter elements and add event listeners.
    // - Set the size of the elements, minus the gutter sizes.
    //
    // -----------------------------------------------------------------------
    // |     i=0     |         i=1         |        i=2       |      i=3     |
    // |             |                     |                  |              |
    // |           pair 0                pair 1             pair 2           |
    // |             |                     |                  |              |
    // -----------------------------------------------------------------------
    var pairs = [];
    elements = ids.map(function(id, i) {
        // Create the element object.
        var element = {
            element: elementOrSelector(id),
            size: sizes[i],
            minSize: minSizes[i],
            maxSize: maxSizes[i],
            snapOffset: snapOffsets[i],
            i: i
        };
        var pair;
        if (i > 0) {
            // Create the pair object with its metadata.
            pair = {
                a: i - 1,
                b: i,
                dragging: false,
                direction: direction,
                parent: parent
            };
            pair[aGutterSize] = getGutterSize(gutterSize, i - 1 === 0, false, gutterAlign);
            pair[bGutterSize] = getGutterSize(gutterSize, false, i === ids.length - 1, gutterAlign);
            // if the parent has a reverse flex-direction, switch the pair elements.
            if (parentFlexDirection === "row-reverse" || parentFlexDirection === "column-reverse") {
                var temp = pair.a;
                pair.a = pair.b;
                pair.b = temp;
            }
        }
        // Determine the size of the current element. IE8 is supported by
        // staticly assigning sizes without draggable gutters. Assigns a string
        // to `size`.
        //
        // Create gutter elements for each pair.
        if (i > 0) {
            var gutterElement = gutter(i, direction, element.element);
            setGutterSize(gutterElement, gutterSize, i);
            // Save bound event listener for removal later
            pair[gutterStartDragging] = startDragging.bind(pair);
            // Attach bound event listener
            gutterElement[addEventListener]("mousedown", pair[gutterStartDragging]);
            gutterElement[addEventListener]("touchstart", pair[gutterStartDragging]);
            parent.insertBefore(gutterElement, element.element);
            pair.gutter = gutterElement;
        }
        setElementSize(element.element, element.size, getGutterSize(gutterSize, i === 0, i === ids.length - 1, gutterAlign), i);
        // After the first iteration, and we have a pair object, append it to the
        // list of pairs.
        if (i > 0) pairs.push(pair);
        return element;
    });
    function adjustToMin(element) {
        var isLast = element.i === pairs.length;
        var pair = isLast ? pairs[element.i - 1] : pairs[element.i];
        calculateSizes.call(pair);
        var size = isLast ? pair.size - element.minSize - pair[bGutterSize] : element.minSize + pair[aGutterSize];
        adjust.call(pair, size);
    }
    elements.forEach(function(element) {
        var computedSize = element.element[getBoundingClientRect]()[dimension];
        if (computedSize < element.minSize) {
            if (expandToMin) adjustToMin(element);
            else // eslint-disable-next-line no-param-reassign
            element.minSize = computedSize;
        }
    });
    function setSizes(newSizes) {
        var trimmed = trimToMin(newSizes);
        trimmed.forEach(function(newSize, i) {
            if (i > 0) {
                var pair = pairs[i - 1];
                var a = elements[pair.a];
                var b = elements[pair.b];
                a.size = trimmed[i - 1];
                b.size = newSize;
                setElementSize(a.element, a.size, pair[aGutterSize], a.i);
                setElementSize(b.element, b.size, pair[bGutterSize], b.i);
            }
        });
    }
    function destroy(preserveStyles, preserveGutter) {
        pairs.forEach(function(pair) {
            if (preserveGutter !== true) pair.parent.removeChild(pair.gutter);
            else {
                pair.gutter[removeEventListener]("mousedown", pair[gutterStartDragging]);
                pair.gutter[removeEventListener]("touchstart", pair[gutterStartDragging]);
            }
            if (preserveStyles !== true) {
                var style = elementStyle(dimension, pair.a.size, pair[aGutterSize]);
                Object.keys(style).forEach(function(prop) {
                    elements[pair.a].element.style[prop] = "";
                    elements[pair.b].element.style[prop] = "";
                });
            }
        });
    }
    return {
        setSizes: setSizes,
        getSizes: getSizes,
        collapse: function collapse(i) {
            adjustToMin(elements[i]);
        },
        destroy: destroy,
        parent: parent,
        pairs: pairs
    };
};
exports.default = Split;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dqZQw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChartWrapper", ()=>ChartWrapper);
var _hdrHistogramJs = require("hdr-histogram-js");
var _jquery = require("jquery");
var _jqueryDefault = parcelHelpers.interopDefault(_jquery);
var _dummyData = require("./DummyData");
var _util = require("./util");
class ChartWrapper {
    constructor(){
        this.chartData = null;
        this.chart = null;
        this.dataView = null;
        this.maxPercentile = 10000;
        this.maxYRange = undefined;
        this.ticks = [
            {
                v: 1,
                f: "0%"
            },
            {
                v: 10,
                f: "90%"
            },
            {
                v: 100,
                f: "99%"
            },
            {
                v: 1000,
                f: "99.9%"
            },
            {
                v: 10000,
                f: "99.99%"
            },
            {
                v: 100000,
                f: "99.999%"
            },
            {
                v: 1000000,
                f: "99.9999%"
            },
            {
                v: 10000000,
                f: "99.99999%"
            },
            {
                v: 100000000,
                f: "99.999999%"
            }
        ];
        var displayUnitText = (0, _util.getDisplayUnitText)();
        this.chartOptions = {
            title: "Latency by Percentile Distribution",
            height: 500,
            hAxis: {
                title: "Percentile",
                minValue: 1,
                logScale: true,
                ticks: this.ticks,
                viewWindowMode: "explicit",
                viewWindow: {
                    max: this.maxPercentile,
                    min: 1
                }
            },
            vAxis: {
                title: "Latency (" + displayUnitText + ")",
                minValue: 0,
                viewWindow: {
                    max: this.maxYRange
                }
            },
            legend: {
                position: "right",
                alignment: "center" /*, textStyle: { fontSize: 11 }*/ 
            },
            chartArea: {
                left: 75,
                top: 50,
                right: 200,
                height: 400
            }
        };
    }
    drawInitialChart() {
        // Load some static example data:
        var histos = (0, _dummyData.DummyData).reverse();
        var names = [
            "A",
            "B",
            "C"
        ];
        this.setChartData(names, histos);
        this.drawChart();
    }
    appendDataSeries(histo, name, dataSeries) {
        var displayUnitText = (0, _util.getDisplayUnitText)();
        var sourceUnitText = (0, _util.getSourceUnitText)();
        var sourceUnitFactor = getTimeUnitFactor(sourceUnitText);
        var displayUnitFactor = getTimeUnitFactor(displayUnitText);
        // Helper function to get the time unit factor
        function getTimeUnitFactor(unit) {
            switch(unit){
                case "seconds":
                    return 1;
                case "milliseconds":
                    return 1000;
                case "microseconds":
                    return 1000000;
                case "nanoseconds":
                    return 1000000000;
                default:
                    return 1;
            }
        }
        let series;
        let seriesCount;
        if (dataSeries.length == 0) {
            series = [
                [
                    "X",
                    name
                ]
            ];
            seriesCount = 1;
        } else {
            series = dataSeries;
            series[0].push(name);
            seriesCount = series[0].length - 1;
        }
        let lines = histo.split("\n");
        let seriesIndex = 1;
        for(var i = 0; i < lines.length; i++){
            let line = lines[i].trim();
            let values = line.trim().split(/[ ]+/);
            if (line[0] != "#" && values.length == 4) {
                let y = parseFloat(values[0]) / (sourceUnitFactor / displayUnitFactor);
                let x = parseFloat(values[3]);
                if (!isNaN(x) && !isNaN(y)) {
                    if (seriesIndex >= series.length) series.push([
                        x
                    ]);
                    while(series[seriesIndex].length < seriesCount)series[seriesIndex].push(null);
                    series[seriesIndex].push(y);
                    seriesIndex++;
                }
            }
        }
        while(seriesIndex < series.length){
            series[seriesIndex].push(null);
            seriesIndex++;
        }
        return series;
    }
    setChartData(names, histos) {
        while(names.length < histos.length)names.push("Unknown");
        var series = [];
        for(var i = 0; i < histos.length; i++)if (!histos[i].startsWith("HIST")) {
            console.log("Good old histogram output parsing for " + names[i]);
            series = this.appendDataSeries(histos[i], names[i], series);
        } else {
            console.log("Will try base64 decoding on " + names[i]);
            var histogram = _hdrHistogramJs.decodeFromCompressedBase64(histos[i], 32, true);
            var histoOutput = histogram.outputPercentileDistribution();
            series = this.appendDataSeries(histoOutput, names[i], series);
        }
        this.chartData = google.visualization.arrayToDataTable(series);
    }
    doExport() {
        const defaultFileName = "Histogram.png";
        const scaleFactor = 1.375;
        const chartWidth = (0, _jqueryDefault.default)("#chart_div").width();
        const chartHeight = (0, _jqueryDefault.default)("#chart_div").height();
        const tempDiv = document.createElement("div");
        document.body.appendChild(tempDiv);
        const scaledChart = new google.visualization.LineChart(tempDiv);
        const scaledChartOptions = structuredClone(this.chartOptions);
        scaledChartOptions.width = chartWidth * scaleFactor;
        scaledChartOptions.height = chartHeight * scaleFactor;
        scaledChartOptions.chartArea.height = this.chartOptions.chartArea.height * scaleFactor;
        scaledChart.draw(this.dataView, scaledChartOptions);
        const imageUri = scaledChart.getImageURI();
        if (window.showSaveFilePicker) fetch(imageUri).then((res)=>{
            return res.blob();
        }).then((blob)=>{
            const options = {
                types: [
                    {
                        description: "PNG Image",
                        accept: {
                            "image/png": [
                                ".png"
                            ]
                        }
                    }
                ],
                startIn: "downloads",
                suggestedName: defaultFileName
            };
            return window.showSaveFilePicker(options).then(function(handle) {
                return handle.createWritable().then(function(writable) {
                    return writable.write(blob).then(function() {
                        return writable.close();
                    });
                });
            });
        });
        else {
            const saveImg = document.createElement("a");
            saveImg.href = imageUri;
            saveImg.download = defaultFileName;
            saveImg.click();
        }
        tempDiv.remove();
        return {
            typed: ""
        };
    }
    drawChart() {
        var displayUnitText = (0, _util.getDisplayUnitText)();
        this.chartOptions = {
            title: "Latency by Percentile Distribution",
            height: 500,
            hAxis: {
                title: "Percentile",
                minValue: 1,
                logScale: true,
                ticks: this.ticks,
                viewWindowMode: "explicit",
                viewWindow: {
                    max: this.maxPercentile,
                    min: 1
                }
            },
            vAxis: {
                title: "Latency (" + displayUnitText + ")",
                minValue: 0,
                viewWindow: {
                    max: this.maxYRange
                }
            },
            legend: {
                position: "right",
                alignment: "center" /*, textStyle: { fontSize: 11 }*/ 
            },
            chartArea: {
                left: 75,
                top: 50,
                right: 200,
                height: 400
            }
        };
        // add tooltips with correct percentile text to data:
        var columns = [
            0
        ];
        for(var i = 1; i < this.chartData.getNumberOfColumns(); i++){
            columns.push(i);
            columns.push({
                type: "string",
                properties: {
                    role: "tooltip"
                },
                calc: function(j) {
                    return function(dt, row) {
                        var percentile = 100.0 - 100.0 / dt.getValue(row, 0);
                        return dt.getColumnLabel(j) + ": " + percentile.toPrecision(7) + "%'ile = " + dt.getValue(row, j) + " " + displayUnitText;
                    };
                }(i)
            });
        }
        this.dataView = new google.visualization.DataView(this.chartData);
        this.dataView.setColumns(columns);
        this.chart = new google.visualization.LineChart((0, _jqueryDefault.default)("#chart_div")[0]);
        this.chart.draw(this.dataView, this.chartOptions);
    }
    showValue(newValue) {
        var x = Math.pow(10, newValue);
        var percentile = 100.0 - 100.0 / x;
        (0, _jqueryDefault.default)("#percentileRange").text(percentile + "%");
        this.maxPercentile = x;
        this.drawChart();
        return {
            typed: ""
        };
    }
    updateMaxYRange(value) {
        if (value === "") this.maxYRange = undefined;
        else this.maxYRange = parseFloat(value);
        this.drawChart();
    }
}

},{"hdr-histogram-js":"4If5t","jquery":"hgMhh","./DummyData":"aizKa","./util":"7wzGb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aizKa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DummyData", ()=>DummyData);
const DummyData = [
    `Value Percentile TotalCount 1/(1-Percentile)
0.016 0.000000 1 1.00
0.980 0.100000 47530 1.11
3.609 0.200000 95042 1.25
6.783 0.300000 142539 1.43
9.183 0.400000 190154 1.67
11.167 0.500000 237581 2.00
12.295 0.550000 261367 2.22
13.759 0.600000 285105 2.50
15.375 0.650000 308930 2.86
16.703 0.700000 332844 3.33
18.639 0.750000 356366 4.00
19.951 0.775000 368356 4.44
21.951 0.800000 380158 5.00
24.559 0.825000 391991 5.71
28.095 0.850000 403848 6.67
32.591 0.875000 415744 8.00
35.743 0.887500 421673 8.89
40.671 0.900000 427627 10.00
47.423 0.912500 433573 11.43
56.895 0.925000 439503 13.33
80.639 0.937500 445415 16.00
97.023 0.943750 448385 17.78
127.231 0.950000 451374 20.00
133.887 0.956250 454341 22.86
138.623 0.962500 457329 26.67
143.231 0.968750 460283 32.00
145.919 0.971875 461775 35.56
149.247 0.975000 463239 40.00
153.855 0.978125 464725 45.71
159.103 0.981250 466207 53.33
165.247 0.984375 467687 64.00
171.647 0.985938 468439 71.11
179.967 0.987500 469178 80.00
190.591 0.989062 469916 91.43
206.207 0.990625 470658 106.67
231.551 0.992188 471407 128.00
252.799 0.992969 471771 142.22
257.023 0.993750 472143 160.00
261.759 0.994531 472547 182.86
263.423 0.995313 472887 213.33
269.055 0.996094 473274 256.00
272.383 0.996484 473441 284.44
289.023 0.996875 473627 320.00
311.551 0.997266 473819 365.71
367.359 0.997656 474009 426.67
540.159 0.998047 474186 512.00
713.727 0.998242 474274 568.89
999.935 0.998437 474367 640.00
1164.287 0.998633 474461 731.43
1229.823 0.998828 474554 853.33
1260.543 0.999023 474647 1024.00
1273.855 0.999121 474693 1137.78
1284.095 0.999219 474743 1280.00
1291.263 0.999316 474785 1462.86
1302.527 0.999414 474836 1706.67
1318.911 0.999512 474878 2048.00
1332.223 0.999561 474901 2275.56
1373.183 0.999609 474924 2560.00
1420.287 0.999658 474947 2925.71
1707.007 0.999707 474970 3413.33
3104.767 0.999756 474994 4096.00
3653.631 0.999780 475005 4551.11
5152.767 0.999805 475017 5120.00
5660.671 0.999829 475030 5851.43
5967.871 0.999854 475040 6826.67
6840.319 0.999878 475052 8192.00
6873.087 0.999890 475067 9102.22
6873.087 0.999902 475067 10240.00
7028.735 0.999915 475069 11702.86
7237.631 0.999927 475075 13653.33
7663.615 0.999939 475081 16384.00
7700.479 0.999945 475083 18204.44
7991.295 0.999951 475086 20480.00
8200.191 0.999957 475090 23405.71
8273.919 0.999963 475092 27306.67
8445.951 0.999969 475096 32768.00
8445.951 0.999973 475096 36408.89
8454.143 0.999976 475102 40960.00
8454.143 0.999979 475102 46811.43
8454.143 0.999982 475102 54613.33
8454.143 0.999985 475102 65536.00
8470.527 0.999986 475103 72817.78
9068.543 0.999988 475106 81920.00
9068.543 0.999989 475106 93622.86
9068.543 0.999991 475106 109226.67
9068.543 0.999992 475106 131072.00
9068.543 0.999993 475106 145635.56
9199.615 0.999994 475107 163840.00
9199.615 0.999995 475107 187245.71
9199.615 0.999995 475107 218453.33
9420.799 0.999996 475108 262144.00
9420.799 0.999997 475108 291271.11
9420.799 0.999997 475108 327680.00
9420.799 0.999997 475108 374491.43
9420.799 0.999998 475108 436906.67
9428.991 0.999998 475109 524288.00
9428.991 1.000000 475109 inf
#[Mean = 25.048, StdDeviation = 120.097]
#[Max = 9420.800, Total count = 475109]
#[Buckets = 27, SubBuckets = 2048]`,
    `Value Percentile TotalCount 1/(1-Percentile)
0.017 0.000000 7 1.00
4.747 0.100000 110499 1.11
10.791 0.200000 221161 1.25
17.311 0.300000 331501 1.43
136.319 0.400000 441939 1.67
1418.239 0.500000 813215 2.00
1418.239 0.550000 813215 2.22
1418.239 0.600000 813215 2.50
1418.239 0.650000 813215 2.86
1418.239 0.700000 813215 3.33
1477.631 0.750000 965043 4.00
1477.631 0.775000 965043 4.44
1477.631 0.800000 965043 5.00
1477.631 0.825000 965043 5.71
1477.631 0.850000 965043 6.67
1510.399 0.875000 1068006 8.00
1510.399 0.887500 1068006 8.89
1510.399 0.900000 1068006 10.00
1510.399 0.912500 1068006 11.43
1510.399 0.925000 1068006 13.33
1510.399 0.937500 1068006 16.00
1510.399 0.943750 1068006 17.78
1510.399 0.950000 1068006 20.00
1510.399 0.956250 1068006 22.86
1510.399 0.962500 1068006 26.67
1511.423 0.968750 1104769 32.00
1511.423 1.000000 1104769 inf
#[Mean = 856.989, StdDeviation = 705.812]
#[Max = 1510.400, Total count = 1104769]
#[Buckets = 27, SubBuckets = 2048]
`,
    `Value Percentile TotalCount 1/(1-Percentile)
0.016 0.000000 1 1.00
4.455 0.100000 109166 1.11
10.367 0.200000 218441 1.25
14.383 0.300000 327522 1.43
19.471 0.400000 436590 1.67
30.447 0.500000 545740 2.00
39.519 0.550000 600381 2.22
52.191 0.600000 654888 2.50
68.223 0.650000 709558 2.86
87.807 0.700000 763927 3.33
109.951 0.750000 818641 4.00
121.791 0.775000 845803 4.44
134.399 0.800000 873094 5.00
150.911 0.825000 900473 5.71
186.495 0.850000 927626 6.67
258.303 0.875000 954920 8.00
356.351 0.887500 968559 8.89
505.087 0.900000 982215 10.00
676.351 0.912500 995841 11.43
863.743 0.925000 1009492 13.33
1067.007 0.937500 1023145 16.00
1181.695 0.943750 1029991 17.78
1363.967 0.950000 1036758 20.00
1889.279 0.956250 1043588 22.86
2480.127 0.962500 1050404 26.67
3108.863 0.968750 1057243 32.00
3452.927 0.971875 1060633 35.56
3821.567 0.975000 1064053 40.00
4206.591 0.978125 1067484 45.71
4591.615 0.981250 1070864 53.33
4988.927 0.984375 1074290 64.00
5193.727 0.985938 1075999 71.11
5402.623 0.987500 1077691 80.00
5623.807 0.989062 1079393 91.43
5881.855 0.990625 1081093 106.67
6164.479 0.992188 1082817 128.00
6307.839 0.992969 1083659 142.22
6455.295 0.993750 1084511 160.00
6602.751 0.994531 1085360 182.86
6758.399 0.995313 1086216 213.33
6938.623 0.996094 1087066 256.00
7057.407 0.996484 1087500 284.44
7180.287 0.996875 1087921 320.00
7315.455 0.997266 1088345 365.71
7458.815 0.997656 1088775 426.67
7614.463 0.998047 1089198 512.00
7696.383 0.998242 1089413 568.89
7782.399 0.998437 1089619 640.00
7876.607 0.998633 1089835 731.43
7970.815 0.998828 1090048 853.33
8073.215 0.999023 1090260 1024.00
8126.463 0.999121 1090366 1137.78
8179.711 0.999219 1090473 1280.00
8237.055 0.999316 1090583 1462.86
8302.591 0.999414 1090691 1706.67
8376.319 0.999512 1090794 2048.00
8413.183 0.999561 1090847 2275.56
8454.143 0.999609 1090904 2560.00
8536.063 0.999658 1090951 2925.71
8642.559 0.999707 1091009 3413.33
8732.671 0.999756 1091061 4096.00
8781.823 0.999780 1091086 4551.11
8830.975 0.999805 1091115 5120.00
8880.127 0.999829 1091140 5851.43
8929.279 0.999854 1091169 6826.67
8978.431 0.999878 1091194 8192.00
9003.007 0.999890 1091210 9102.22
9027.583 0.999902 1091222 10240.00
9052.159 0.999915 1091235 11702.86
9068.543 0.999927 1091246 13653.33
9117.695 0.999939 1091259 16384.00
9142.271 0.999945 1091266 18204.44
9166.847 0.999951 1091273 20480.00
9191.423 0.999957 1091279 23405.71
9215.999 0.999963 1091285 27306.67
9248.767 0.999969 1091291 32768.00
9273.343 0.999973 1091295 36408.89
9289.727 0.999976 1091298 40960.00
9306.111 0.999979 1091302 46811.43
9330.687 0.999982 1091306 54613.33
9338.879 0.999985 1091308 65536.00
9355.263 0.999986 1091311 72817.78
9355.263 0.999988 1091311 81920.00
9371.647 0.999989 1091314 93622.86
9379.839 0.999991 1091315 109226.67
9388.031 0.999992 1091317 131072.00
9388.031 0.999993 1091317 145635.56
9396.223 0.999994 1091318 163840.00
9404.415 0.999995 1091320 187245.71
9404.415 0.999995 1091320 218453.33
9404.415 0.999996 1091320 262144.00
9412.607 0.999997 1091321 291271.11
9412.607 0.999997 1091321 327680.00
9420.799 0.999997 1091323 374491.43
9420.799 0.999998 1091323 436906.67
9420.799 0.999998 1091323 524288.00
9420.799 0.999998 1091323 582542.22
9420.799 0.999998 1091323 655360.00
9420.799 0.999999 1091323 748982.86
9420.799 0.999999 1091323 873813.33
9420.799 0.999999 1091323 1048576.00
9428.991 0.999999 1091324 1165084.44
9428.991 1.000000 1091324 inf
#[Mean = 297.175, StdDeviation = 976.346]
#[Max = 9420.800, Total count = 1091324]
#[Buckets = 27, SubBuckets = 2048]`
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wzGb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCommandTypeText", ()=>getCommandTypeText);
parcelHelpers.export(exports, "getSourceUnitText", ()=>getSourceUnitText);
parcelHelpers.export(exports, "getDisplayUnitText", ()=>getDisplayUnitText);
parcelHelpers.export(exports, "getFilenameWithoutExt", ()=>getFilenameWithoutExt);
var _jquery = require("jquery");
var _jqueryDefault = parcelHelpers.interopDefault(_jquery);
function getCommandTypeText() {
    var commandTypeSelection = (0, _jqueryDefault.default)("#commandTypeSelection");
    var commandTypeSelIndex = commandTypeSelection.prop("selectedIndex");
    return commandTypeSelection.find("option").eq(commandTypeSelIndex).html();
}
function getSourceUnitText() {
    var sourceUnitSelection = (0, _jqueryDefault.default)("#sourceTimeUnitSelection");
    var sourceUnitSelIndex = sourceUnitSelection.prop("selectedIndex");
    return sourceUnitSelection.find("option").eq(sourceUnitSelIndex).html();
}
function getDisplayUnitText() {
    var displayUnitSelection = (0, _jqueryDefault.default)("#displayTimeUnitSelection");
    var displayUnitSelIndex = displayUnitSelection.prop("selectedIndex");
    return displayUnitSelection.find("option").eq(displayUnitSelIndex).html();
}
function getFilenameWithoutExt(filename) {
    return escape(filename.split(".").slice(0, -1).join("."));
}

},{"jquery":"hgMhh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gXqj0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lastEvt", ()=>lastEvt);
parcelHelpers.export(exports, "handleFileSelectMemtierAppended", ()=>handleFileSelectMemtierAppended);
parcelHelpers.export(exports, "handleFileSelectMemtierRunCount", ()=>handleFileSelectMemtierRunCount);
parcelHelpers.export(exports, "handleRawDataInputChange", ()=>handleRawDataInputChange);
var _jquery = require("jquery");
var _jqueryDefault = parcelHelpers.interopDefault(_jquery);
var _jsonTs = require("./json.ts");
var _util = require("./util");
let lastEvt = undefined;
function getShowMedianResultForAppend() {
    var showMedianCheckbox = (0, _jqueryDefault.default)("#radio-show-median");
    return showMedianCheckbox.prop("checked");
}
function handleFileSelectMemtierAppended(evt, chartWrapper) {
    lastEvt = evt;
    const files = evt.target.files; // FileList object
    const fileDisplayArea = (0, _jqueryDefault.default)("#fileDisplayArea-append");
    const names = [];
    const histos = [];
    const fileNames = [];
    fileDisplayArea.text("file selected...\n");
    const showMedianOnly = getShowMedianResultForAppend();
    if (files == null) return;
    const commandTypeText = (0, _util.getCommandTypeText)();
    // Loop through the FileList and render image files as thumbnails.
    for(let i = 0, f; f = files[i]; i++){
        const reader = new FileReader();
        reader.onload = function(theFile) {
            fileNames.push(theFile.name);
            return function(e) {
                const rawJson = e.target.result;
                if (showMedianOnly) {
                    const medianHistogram = (0, _jsonTs.parseMedianRPSMemtierAppendedJson)(rawJson, commandTypeText);
                    if (medianHistogram) {
                        const nameWithIndex = (0, _util.getFilenameWithoutExt)(theFile.name);
                        histos.push(medianHistogram);
                        names.push(nameWithIndex);
                        chartWrapper.setChartData(names, histos);
                        chartWrapper.drawChart();
                    }
                } else {
                    const parsedCompressedHistograms = (0, _jsonTs.parseMemtierAppendedJson)(rawJson, commandTypeText);
                    if (parsedCompressedHistograms) {
                        for(let i = 0; i < parsedCompressedHistograms.length; i++){
                            const histogram = parsedCompressedHistograms[i];
                            const nameWithIndex = (0, _util.getFilenameWithoutExt)(theFile.name) + " " + (i + 1);
                            histos.push(histogram);
                            names.push(nameWithIndex);
                        }
                        chartWrapper.setChartData(names, histos);
                        chartWrapper.drawChart();
                    }
                }
                fileDisplayArea.text("Plotting input from: " + fileNames + "\n");
            };
        }(f);
        // Read in the image file as a data URL.
        reader.readAsText(f);
    }
}
function handleFileSelectMemtierRunCount(evt, chartWrapper) {
    lastEvt = evt;
    const files = evt.target.files; // FileList object
    const fileDisplayArea = (0, _jqueryDefault.default)("#fileDisplayArea-runcount");
    const names = [];
    const histos = [];
    const fileNames = [];
    fileDisplayArea.text("file selected...\n");
    // Loop through the FileList and render image files as thumbnails.
    for(var i = 0, f; f = files[i]; i++){
        var reader = new FileReader();
        reader.onload = function(theFile) {
            fileNames.push(theFile.name);
            return function(e) {
                var parsedCompressedHistogram = (0, _jsonTs.parseMemtierRunCountJson)(e.target.result, (0, _util.getCommandTypeText)());
                if (parsedCompressedHistogram) {
                    const nameWithIndex = (0, _util.getFilenameWithoutExt)(theFile.name);
                    histos.push(parsedCompressedHistogram);
                    names.push(nameWithIndex);
                    chartWrapper.setChartData(names, histos);
                    chartWrapper.drawChart();
                }
                fileDisplayArea.text("Plotting input from: " + fileNames + "\n");
            };
        }(f);
        // Read in the image file as a data URL.
        reader.readAsText(f);
    }
}
function handleRawDataInputChange(chartWrapper) {
    lastEvt = undefined;
    const labels = [];
    const histos = [];
    const container = (0, _jqueryDefault.default)("#hdr-inputs");
    const rows = container.find("div");
    for(let i = 0; i < rows.length; i++){
        const labelInput = (0, _jqueryDefault.default)(rows[i]).find("input[id^='b64-label']");
        const textInput = (0, _jqueryDefault.default)(rows[i]).find("input[id^='b64-input']");
        if (labelInput.val() && textInput.val()) {
            labels.push(labelInput.val());
            histos.push(textInput.val());
        }
    }
    for(let j = 0; j < labels.length; j++){
        chartWrapper.setChartData(labels, histos);
        chartWrapper.drawChart();
    }
}

},{"jquery":"hgMhh","./json.ts":"1Kmll","./util":"7wzGb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Kmll":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseMemtierAppendedJson", ()=>parseMemtierAppendedJson);
parcelHelpers.export(exports, "parseMedianRPSMemtierAppendedJson", ()=>parseMedianRPSMemtierAppendedJson);
parcelHelpers.export(exports, "parseMemtierRunCountJson", ()=>parseMemtierRunCountJson);
function parseMemtierAppendedJson(rawJson, commandTypeText) {
    const jsonObject = JSON.parse(rawJson);
    const compressedHistograms = jsonObject.map((obj)=>obj["ALL STATS"][commandTypeText]["Percentile Latencies"]["Histogram log format"]["Compressed Histogram"]);
    return compressedHistograms;
}
function parseMedianRPSMemtierAppendedJson(rawJson, commandTypeText) {
    const jsonObject = JSON.parse(rawJson);
    // Extract RPS and histogram values
    const results = jsonObject.map((result)=>({
            rps: result["ALL STATS"][commandTypeText]["Ops/sec"],
            histogram: result["ALL STATS"][commandTypeText]["Percentile Latencies"]["Histogram log format"]["Compressed Histogram"]
        }));
    // Sort by RPS
    results.sort((a, b)=>a.rps - b.rps);
    // Calculate median rps
    let midIndex = Math.floor(results.length / 2);
    if (results.length % 2 === 0) midIndex += 1;
    const medianResult = results[midIndex];
    return medianResult.histogram;
}
function parseMemtierRunCountJson(rawJson, commandTypeText) {
    const jsonObject = JSON.parse(rawJson);
    // Iterate over the keys of the object
    for(const key in jsonObject)// Check if the key matches the pattern "Aggregated average results"
    if (key.startsWith("AGGREGATED AVERAGE RESULTS")) {
        // Extract the value associated with the "Compressed Histogram" key
        const compressedHistogram = jsonObject[key][commandTypeText]["Percentile Latencies"]["Histogram log format"]["Compressed Histogram"];
        return compressedHistogram;
    }
    // Return null if no matching key is found
    return undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fm8Gy","h7u1C"], "h7u1C", "parcelRequireec06")

//# sourceMappingURL=plotFiles.b71e74eb.js.map
