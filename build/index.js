var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/style.css
var style_default = "/build/_assets/style-4RUXR3IT.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: style_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "bg-black", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/projects.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects
});

// app/components/Header.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Header = () => /* @__PURE__ */ jsxDEV3("div", { className: "", children: /* @__PURE__ */ jsxDEV3("nav", { className: "relative flex flex-row justify-items-start space-x-4 items-start px-0 pb-0 mb-10 antialiased", children: [
  /* @__PURE__ */ jsxDEV3("a", { className: "flex text-white", href: "/", children: "home" }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV3("a", { className: "flex text-white", href: "/projects", children: "projects" }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV3("a", { className: "flex text-white", href: "/blogs", children: "blogs" }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Header.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this), Header_default = Header;

// app/routes/projects.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Projects() {
  return /* @__PURE__ */ jsxDEV4("div", { className: "mx-4 flex lg:mx-auto max-w-2xl mt-8 flex-col", children: [
    /* @__PURE__ */ jsxDEV4(Header_default, {}, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "text-white", children: " Working on it" }, void 0, !1, {
      fileName: "app/routes/projects.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Subhajit" },
  { name: "description", content: "My Personal Blog" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV5("div", { className: "mx-4 flex lg:mx-auto max-w-2xl mt-8 flex-col", children: [
    /* @__PURE__ */ jsxDEV5(Header_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("h1", { className: "text-white mb-8 text-2xl font-medium tracking-tighter", children: "subhajit das" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { className: "text-white", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique nisl vel maximus congue. Maecenas nisl turpis, bibendum sed molestie quis, iaculis et sapien. Phasellus maximus metus nec varius molestie. Vestibulum massa elit, sollicitudin sed ex nec, accumsan interdum diam. Cras eleifend, sapien vel tincidunt bibendum, neque nunc consequat ipsum, sit amet pulvinar libero eros non massa. Nam et tristique dolor. Praesent sit amet mauris at enim vestibulum venenatis. Donec sit amet egestas nibh. Nullam tempus dolor gravida, pretium quam ut, elementum neque. Etiam a ultricies urna. Etiam varius augue mauris, sed molestie nulla tempor sed. Maecenas euismod sapien in lacinia rutrum. Nam pellentesque diam sapien, sed cursus justo porttitor id. Curabitur vehicula vitae libero et euismod. Pellentesque sit amet elit quis ante congue fringilla in commodo augue. Quisque neque ante, euismod et mauris vel, congue imperdiet ipsum." }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/blogs.tsx
var blogs_exports = {};
__export(blogs_exports, {
  default: () => Blogs
});
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Blogs() {
  return /* @__PURE__ */ jsxDEV6("div", { className: "mx-4 flex lg:mx-auto max-w-2xl mt-8 flex-col", children: [
    /* @__PURE__ */ jsxDEV6(Header_default, {}, void 0, !1, {
      fileName: "app/routes/blogs.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "text-white", children: " Working on it" }, void 0, !1, {
      fileName: "app/routes/blogs.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blogs.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-3XIPHFXO.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-OM4ETI2T.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-5MTCINCZ.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VQV7IHC2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-SNAI3IPD.js", imports: ["/build/_shared/chunk-ZIK73V7A.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blogs": { id: "routes/blogs", parentId: "root", path: "blogs", index: void 0, caseSensitive: void 0, module: "/build/routes/blogs-OXVRLTMA.js", imports: ["/build/_shared/chunk-ZIK73V7A.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-PGECVITH.js", imports: ["/build/_shared/chunk-ZIK73V7A.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "11a191b0", hmr: { runtime: "/build/_shared/chunk-5MTCINCZ.js", timestamp: 1703623612302 }, url: "/build/manifest-11A191B0.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/blogs": {
    id: "routes/blogs",
    parentId: "root",
    path: "blogs",
    index: void 0,
    caseSensitive: void 0,
    module: blogs_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
