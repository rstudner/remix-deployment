var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
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
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 89,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/shared.css
var shared_default = "/build/_assets/shared-GGRRQU2L.css";

// app/components/util/Error.jsx
var import_fa = require("react-icons/fa"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Error2({ title, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_fa.FaExclamationCircle, {}, void 0, !1, {
      fileName: "app/components/util/Error.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/util/Error.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: title }, void 0, !1, {
      fileName: "app/components/util/Error.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, !0, {
    fileName: "app/components/util/Error.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var Error_default = Error2;

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function Document({ title, children }) {
  let disableJSPages = (0, import_react2.useMatches)().some((match) => {
    var _a;
    return (_a = match.handle) == null ? void 0 : _a.disableJS;
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "link",
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 33,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap",
          rel: "stylesheet"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 38,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      !disableJSPages && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 56,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  var _a;
  let error = (0, import_react2.useRouteError)();
  return (0, import_react2.isRouteErrorResponse)(error) ? (console.log("is route error response"), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { title: error.statusText, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Error_default, { title: error.statusText, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: ((_a = error.data) == null ? void 0 : _a.message) || "Something went wrong. Please try again later" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 71,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "/", children: "Safety" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 76,
        columnNumber: 23
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 70,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 69,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 68,
    columnNumber: 7
  }, this)) : (console.log("is not route error response"), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { title: "An error occurred", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Error_default, { title: "An error occurred", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.message || "Something went wrong. Please try again later" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 90,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.Link, { to: "/", children: "Safety" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 94,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 93,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 89,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 88,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this));
}
var links = () => [{ rel: "stylesheet", href: shared_default }];

// app/routes/_expenses.expenses_.analysis.jsx
var expenses_expenses_analysis_exports = {};
__export(expenses_expenses_analysis_exports, {
  default: () => ExpensesAnalysisPage,
  headers: () => headers,
  loader: () => loader
});

// app/components/expenses/ExpenseStatistics.jsx
var import_react3 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function calculateSummaryStatistics(expenses) {
  let amounts = expenses.map((expense) => +expense.amount), maxAmount = Math.max(...amounts), minAmount = Math.min(...amounts), sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0), mean = sum / expenses.length;
  return { minAmount, maxAmount, sum, mean };
}
function ExpenseStatistics({ expenses }) {
  let { minAmount, maxAmount, sum, mean } = (0, import_react3.useMemo)(
    () => calculateSummaryStatistics(expenses),
    [expenses]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { children: "Summary Statistics" }, void 0, !1, {
      fileName: "app/components/expenses/ExpenseStatistics.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dl", { id: "expense-statistics", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dt", { children: "Total" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dd", { children: [
          "$",
          sum.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dt", { children: "Average" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dd", { children: [
          "$",
          mean.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dt", { children: " Min. Amount" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dd", { children: [
          "$",
          minAmount.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dt", { children: "Max. Amount" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dd", { children: [
          "$",
          maxAmount.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseStatistics.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ExpenseStatistics.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var ExpenseStatistics_default = ExpenseStatistics;

// app/components/expenses/ChartBar.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), ChartBar = ({ maxValue, value, label }) => {
  let barFillHeight = "0%";
  return maxValue > 0 && (barFillHeight = Math.round(value / maxValue * 100) + "%"), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "chart-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "chart-bar--inner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "div",
      {
        className: "chart-bar--fill",
        style: { height: barFillHeight }
      },
      void 0,
      !1,
      {
        fileName: "app/components/expenses/ChartBar.jsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "chart-bar--label", children: label }, void 0, !1, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ChartBar.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}, ChartBar_default = ChartBar;

// app/components/expenses/Chart.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Chart({ expenses }) {
  let chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];
  for (let expense of expenses) {
    let expenseMonth = new Date(expense.date).getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  let dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value), totalMaximum = Math.max(...dataPointValues);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: "Monthly Expenses" }, void 0, !1, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ol", { className: "chart", children: chartDataPoints.map((dataPoint) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      ChartBar_default,
      {
        value: dataPoint.value,
        maxValue: totalMaximum,
        label: dataPoint.label
      },
      dataPoint.label,
      !1,
      {
        fileName: "app/components/expenses/Chart.jsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/Chart.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
var Chart_default = Chart;

// app/data/database.server.js
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/data/expenses.server.js
async function addExpense(expenseData, userId) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
        User: { connect: { id: userId } }
      }
    });
  } catch {
    throw new Error("Failed to get expenses");
  }
}
async function getExpenses(userId) {
  try {
    return await prisma.expense.findMany({
      where: { userId },
      orderBy: { date: "desc" }
    });
  } catch {
    throw new Error("Failed to get expense");
  }
}
async function updateExpense(id, expenseData) {
  try {
    return await prisma.expense.update({
      where: { id },
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date)
      }
    });
  } catch {
    throw new Error("Failed to update expense");
  }
}
async function deleteExpense(id) {
  try {
    return await prisma.expense.delete({
      where: { id }
    });
  } catch (error) {
    throw console.log(error), new Error("Failed to delete expense");
  }
}

// app/routes/_expenses.expenses_.analysis.jsx
var import_react4 = require("@remix-run/react");

// app/data/auth.server.js
var import_node2 = require("@remix-run/node");
var import_bcryptjs = require("bcryptjs"), SESSION_SECRET = process.env.SESSION_SECRET, sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    secure: !1,
    secret: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60,
    //30 days
    httpOnly: !0
  }
});
async function createUserSession(userId, redirectPath = "/expenses") {
  let session = await sessionStorage.getSession();
  return session.set("userId", userId), (0, import_node2.redirect)(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
}
async function getUserFromSession(request) {
  let session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  if (!session)
    return null;
  let userId = session.get("userId");
  return userId || null;
}
async function destroyUserSession(request) {
  let session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  return session ? (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  }) : null;
}
async function requireUserSession(request) {
  let userId = await getUserFromSession(request);
  if (!userId)
    throw (0, import_node2.redirect)("/auth?mode=login");
  return userId;
}
async function signup({ email, password }) {
  if (await prisma.user.findFirst({ where: { email } })) {
    let error = new Error("A user with the provided email address exists");
    throw error.status = 422, error;
  }
  let passwordHash = await (0, import_bcryptjs.hash)(password, 12), user = await prisma.user.create({
    data: { email, password: passwordHash }
  });
  return createUserSession(user.id, "/expenses");
}
async function login({ email, password }) {
  let existingUser = await prisma.user.findFirst({ where: { email } });
  if (!existingUser) {
    let error = new Error(
      "Could not log you in, please check the provided credentials"
    );
    throw error.status = 401, error;
  }
  if (!await (0, import_bcryptjs.compare)(password, existingUser.password)) {
    let error = new Error(
      "Could not log you in, please check the provided credentials"
    );
    throw error.status = 401, error;
  }
  return createUserSession(existingUser.id, "/expenses");
}

// app/routes/_expenses.expenses_.analysis.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function ExpensesAnalysisPage() {
  let expenses = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Chart_default, { expenses }, void 0, !1, {
      fileName: "app/routes/_expenses.expenses_.analysis.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ExpenseStatistics_default, { expenses }, void 0, !1, {
      fileName: "app/routes/_expenses.expenses_.analysis.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_expenses.expenses_.analysis.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
async function loader({ request }) {
  let userId = await requireUserSession(request);
  return await getExpenses(userId);
}
function headers({ parentHeaders }) {
  return {
    "Cache-Control": parentHeaders.get("Cache-Control")
  };
}

// app/routes/_expenses.expenses.$id.jsx
var expenses_expenses_id_exports = {};
__export(expenses_expenses_id_exports, {
  action: () => action,
  default: () => UpdateExpensesPage,
  headers: () => headers2,
  meta: () => meta2
});
var import_react6 = require("@remix-run/react");

// app/components/expenses/ExpenseForm.jsx
var import_react5 = require("@remix-run/react");

// app/components/util/ValidationErrors.jsx
var import_fa2 = require("react-icons/fa"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function ValidationErrors({ validationErrors }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: validationErrors && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { children: Object.values(validationErrors).map((error) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: error }, error, !1, {
    fileName: "app/components/util/ValidationErrors.jsx",
    lineNumber: 9,
    columnNumber: 13
  }, this)) }, void 0, !1, {
    fileName: "app/components/util/ValidationErrors.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/util/ValidationErrors.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var ValidationErrors_default = ValidationErrors;

// app/components/expenses/ExpenseForm.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ExpenseForm() {
  let today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), validationErrors = (0, import_react5.useActionData)(), navigation = (0, import_react5.useNavigation)(), matches = (0, import_react5.useMatches)(), params = (0, import_react5.useParams)(), expenseData = matches.find(
    (match) => match.id === "routes/_expenses.expenses"
  ).data.find((expense) => expense.id === params.id);
  if (params.id && !expenseData)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Invalid expense id." }, void 0, !1, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 23,
      columnNumber: 12
    }, this);
  let defaultValues = expenseData ? {
    title: expenseData.title,
    amount: expenseData.amount,
    date: expenseData.date
  } : { title: "", amount: "", date: "" }, isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    import_react5.Form,
    {
      method: expenseData ? "patch" : "post",
      className: "form",
      id: "expense-form",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "title", children: "Expense Title" }, void 0, !1, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "input",
            {
              type: "text",
              id: "title",
              name: "title",
              required: !0,
              maxLength: 30,
              defaultValue: defaultValues.title
            },
            void 0,
            !1,
            {
              fileName: "app/components/expenses/ExpenseForm.jsx",
              lineNumber: 56,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "form-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "amount", children: "Amount" }, void 0, !1, {
              fileName: "app/components/expenses/ExpenseForm.jsx",
              lineNumber: 68,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "input",
              {
                type: "number",
                id: "amount",
                name: "amount",
                min: "0",
                step: "0.01",
                defaultValue: defaultValues.amount,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/components/expenses/ExpenseForm.jsx",
                lineNumber: 69,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "date", children: "Date" }, void 0, !1, {
              fileName: "app/components/expenses/ExpenseForm.jsx",
              lineNumber: 80,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "input",
              {
                type: "date",
                id: "date",
                name: "date",
                max: today,
                defaultValue: defaultValues.date ? defaultValues.date.slice(0, 10) : "",
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/components/expenses/ExpenseForm.jsx",
                lineNumber: 81,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 79,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 66,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ValidationErrors_default, { validationErrors }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 93,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "form-actions", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Saving..." : "Save Expense" }, void 0, !1, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 95,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react5.Link, { to: "..", children: "Cancel" }, void 0, !1, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 98,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 94,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 48,
      columnNumber: 5
    },
    this
  );
}
var ExpenseForm_default = ExpenseForm;

// app/components/util/Modal.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Modal({ children, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "modal-backdrop", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "dialog",
    {
      className: "modal",
      open: !0,
      onClick: (event) => event.stopPropagation(),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/util/Modal.jsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/util/Modal.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var Modal_default = Modal;

// app/routes/_expenses.expenses.$id.jsx
var import_node3 = require("@remix-run/node");

// app/data/validation.server.js
function isValidTitle(value) {
  return value && value.trim().length > 0 && value.trim().length <= 30;
}
function isValidAmount(value) {
  let amount = parseFloat(value);
  return !isNaN(amount) && amount > 0;
}
function isValidDate(value) {
  return value && new Date(value).getTime() < (/* @__PURE__ */ new Date()).getTime();
}
function validateExpenseInput(input) {
  let validationErrors = {};
  if (isValidTitle(input.title) || (validationErrors.title = "Invalid expense title. Must be at most 30 characters long."), isValidAmount(input.amount) || (validationErrors.amount = "Invalid amount. Must be a number greater than zero."), isValidDate(input.date) || (validationErrors.date = "Invalid date. Must be a date before today."), Object.keys(validationErrors).length > 0)
    throw validationErrors;
}
function isValidEmail(value) {
  return value && value.includes("@");
}
function isValidPassword(value) {
  return value && value.trim().length >= 7;
}
function validateCredentials(input) {
  let validationErrors = {};
  if (isValidEmail(input.email) || (validationErrors.email = "Invalid email address."), isValidPassword(input.password) || (validationErrors.password = "Invalid password. Must be at least 7 characters long."), Object.keys(validationErrors).length > 0)
    throw validationErrors;
}

// app/routes/_expenses.expenses.$id.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function UpdateExpensesPage() {
  let navigate = (0, import_react6.useNavigate)();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ExpenseForm_default, {}, void 0, !1, {
    fileName: "app/routes/_expenses.expenses.$id.jsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_expenses.expenses.$id.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
async function action({ params, request }) {
  let expenseId = params.id;
  if (request.method === "PATCH") {
    let formData = await request.formData(), expenseData = Object.fromEntries(formData);
    try {
      validateExpenseInput(expenseData);
    } catch (error) {
      return error;
    }
    return await updateExpense(expenseId, expenseData), (0, import_node3.redirect)("/expenses");
  } else if (request.method === "DELETE")
    return await deleteExpense(expenseId), { deletedId: expenseId };
}
function meta2({ params, location, data, parentsData }) {
  return {
    title: parentsData["routes/_expenses.expenses"].find(
      (expense2) => expense2.id === params.id
    ).title,
    description: "Update expense."
  };
}
function headers2({ parentHeaders }) {
  return {
    "Cache-Control": parentHeaders.get("Cache-Control")
  };
}

// app/routes/_expenses.expenses.add.jsx
var expenses_expenses_add_exports = {};
__export(expenses_expenses_add_exports, {
  action: () => action2,
  default: () => AddExpensePage,
  headers: () => headers3
});
var import_react7 = require("@remix-run/react");
var import_node4 = require("@remix-run/node");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function AddExpensePage() {
  let navigate = (0, import_react7.useNavigate)();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ExpenseForm_default, {}, void 0, !1, {
    fileName: "app/routes/_expenses.expenses.add.jsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_expenses.expenses.add.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
async function action2({ request }) {
  let userId = await requireUserSession(request);
  console.log("expenses.add action function"), console.log(`userId: ${userId}`);
  let formData = await request.formData(), expenseData = Object.fromEntries(formData);
  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }
  return await addExpense(expenseData, userId), (0, import_node4.redirect)("/expenses");
}
function headers3({ parentHeaders }) {
  return {
    "Cache-Control": parentHeaders.get("Cache-Control")
  };
}

// app/routes/_expenses.expenses.jsx
var expenses_expenses_exports = {};
__export(expenses_expenses_exports, {
  default: () => ExpensesLayout,
  headers: () => headers4,
  loader: () => loader2,
  meta: () => meta3
});
var import_react9 = require("@remix-run/react");

// app/components/expenses/ExpenseListItem.jsx
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function ExpenseListItem({ id, title, amount }) {
  let fetcher = (0, import_react8.useFetcher)();
  function deleteExpenseItemHandler() {
    confirm("Are you sure? Do you want to delete this item?") && fetcher.submit(null, {
      method: "delete",
      action: `/expenses/${id}`
    });
  }
  return fetcher.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("article", { className: "expense-item locked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Deleting..." }, void 0, !1, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 21,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("article", { className: "expense-item", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { className: "expense-title", children: title }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "expense-amount", children: [
        "$",
        amount.toFixed(2)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("menu", { className: "expense-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { onClick: deleteExpenseItemHandler, children: "Delete" }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react8.Link, { to: id, children: "Edit" }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
var ExpenseListItem_default = ExpenseListItem;

// app/components/expenses/ExpensesList.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function ExpensesList({ expenses }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("ol", { id: "expenses-list", children: expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    ExpenseListItem_default,
    {
      id: expense.id,
      title: expense.title,
      amount: expense.amount
    },
    void 0,
    !1,
    {
      fileName: "app/components/expenses/ExpensesList.jsx",
      lineNumber: 8,
      columnNumber: 11
    },
    this
  ) }, expense.id, !1, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var ExpensesList_default = ExpensesList;

// app/routes/_expenses.expenses.jsx
var import_fa3 = require("react-icons/fa");
var import_node5 = require("@remix-run/node"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function ExpensesLayout() {
  let expenses = (0, import_react9.useLoaderData)(), hasExpenses = expenses && expenses.length > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react9.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_expenses.expenses.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { id: "expenses-actions", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react9.Link, { to: "add", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_fa3.FaPlus, {}, void 0, !1, {
            fileName: "app/routes/_expenses.expenses.jsx",
            lineNumber: 17,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: "Add Expense" }, void 0, !1, {
            fileName: "app/routes/_expenses.expenses.jsx",
            lineNumber: 18,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_expenses.expenses.jsx",
          lineNumber: 16,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("a", { href: "/expenses/raw", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_fa3.FaDownload, {}, void 0, !1, {
            fileName: "app/routes/_expenses.expenses.jsx",
            lineNumber: 21,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: "Load Raw Data" }, void 0, !1, {
            fileName: "app/routes/_expenses.expenses.jsx",
            lineNumber: 22,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_expenses.expenses.jsx",
          lineNumber: 20,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_expenses.expenses.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      hasExpenses && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ExpensesList_default, { expenses }, void 0, !1, {
        fileName: "app/routes/_expenses.expenses.jsx",
        lineNumber: 25,
        columnNumber: 25
      }, this),
      !hasExpenses && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { id: "no-expenses", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { children: "No expenses found" }, void 0, !1, {
          fileName: "app/routes/_expenses.expenses.jsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: [
          "Start ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react9.Link, { to: "add", children: "adding some" }, void 0, !1, {
            fileName: "app/routes/_expenses.expenses.jsx",
            lineNumber: 30,
            columnNumber: 21
          }, this),
          " today."
        ] }, void 0, !0, {
          fileName: "app/routes/_expenses.expenses.jsx",
          lineNumber: 29,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_expenses.expenses.jsx",
        lineNumber: 27,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_expenses.expenses.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_expenses.expenses.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
async function loader2({ request }) {
  let userId = await requireUserSession(request), expenses = await getExpenses(userId);
  return (0, import_node5.json)(expenses, {
    headers: {
      "Cache-Control": "max-age=3"
    }
  });
}
function meta3() {
  return {
    title: "Expenses",
    description: "List of expenses."
  };
}
function headers4({ loaderHeaders }) {
  return {
    "Cache-Control": loaderHeaders.get("Cache-Control")
  };
}

// app/routes/_marketing.pricing.jsx
var marketing_pricing_exports = {};
__export(marketing_pricing_exports, {
  default: () => PricingPage,
  handle: () => handle,
  headers: () => headers5,
  meta: () => meta4
});
var import_fa4 = require("react-icons/fa");

// app/components/marketing/PricingPlan.jsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function PricingPlan({ title, price, perks, icon }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(icon, {}, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 7,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 6,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { children: title }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: price }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/marketing/PricingPlan.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "plan-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("ol", { children: perks.map((perk) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("li", { children: perk }, perk, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("a", { href: "/not-implemented", children: "Learn More" }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/marketing/PricingPlan.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/marketing/PricingPlan.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var PricingPlan_default = PricingPlan;

// app/routes/_marketing.pricing.jsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), PRICING_PLANS = [
  {
    id: "p1",
    title: "Basic",
    price: "Free forever",
    perks: ["1 User", "Up to 100 expenses/year", "Basic analytics"],
    icon: import_fa4.FaHandshake
  },
  {
    id: "p2",
    title: "Pro",
    price: "$9.99/month",
    perks: ["Unlimited Users", "Unlimited expenses/year", "Detailed analytics"],
    icon: import_fa4.FaTrophy
  }
];
function PricingPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("main", { id: "pricing", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { children: "Great Product, Simple Pricing" }, void 0, !1, {
      fileName: "app/routes/_marketing.pricing.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ol", { id: "pricing-plans", children: PRICING_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { className: "plan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      PricingPlan_default,
      {
        title: plan.title,
        price: plan.price,
        perks: plan.perks,
        icon: plan.icon
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_marketing.pricing.jsx",
        lineNumber: 29,
        columnNumber: 13
      },
      this
    ) }, plan.id, !1, {
      fileName: "app/routes/_marketing.pricing.jsx",
      lineNumber: 28,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_marketing.pricing.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_marketing.pricing.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function meta4() {
  return {
    title: "Pricing",
    description: "See our pricing plans."
  };
}
function headers5({ parentHeaders }) {
  return {
    "Cache-Control": parentHeaders.get("Cache-Control")
  };
}
var handle = { disableJS: !0 };

// app/routes/_marketing._index.tsx
var marketing_index_exports = {};
__export(marketing_index_exports, {
  default: () => Index,
  handle: () => handle2,
  headers: () => headers6,
  meta: () => meta5
});
var import_react10 = require("@remix-run/react"), import_fa5 = require("react-icons/fa"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("section", { className: "marketing-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_fa5.FaDollarSign, {}, void 0, !1, {
          fileName: "app/routes/_marketing._index.tsx",
          lineNumber: 10,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { children: "A Central Space" }, void 0, !1, {
          fileName: "app/routes/_marketing._index.tsx",
          lineNumber: 11,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_marketing._index.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "marketing-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "marketing-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "img",
          {
            src: "images/expenses-management.jpg",
            alt: "A list of expenses."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_marketing._index.tsx",
            lineNumber: 15,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_marketing._index.tsx",
          lineNumber: 14,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "marketing-explanation", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: "Manage your expenses in one central place." }, void 0, !1, {
            fileName: "app/routes/_marketing._index.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react10.Link, { className: "cta", to: "/expenses", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: "Get Started" }, void 0, !1, {
              fileName: "app/routes/_marketing._index.tsx",
              lineNumber: 24,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_fa5.FaArrowRight, {}, void 0, !1, {
              fileName: "app/routes/_marketing._index.tsx",
              lineNumber: 25,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_marketing._index.tsx",
            lineNumber: 23,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_marketing._index.tsx",
            lineNumber: 22,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_marketing._index.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_marketing._index.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_marketing._index.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("section", { className: "marketing-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_fa5.FaChartBar, {}, void 0, !1, {
          fileName: "app/routes/_marketing._index.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { children: "Detailed Analytics" }, void 0, !1, {
          fileName: "app/routes/_marketing._index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_marketing._index.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "marketing-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "marketing-explanation", children: "Benefit from best-in-class analytics to understand your spending patterns." }, void 0, !1, {
          fileName: "app/routes/_marketing._index.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "marketing-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { src: "images/expenses-chart.jpg", alt: "A demo bar chart." }, void 0, !1, {
          fileName: "app/routes/_marketing._index.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_marketing._index.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_marketing._index.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_marketing._index.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_marketing._index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function meta5() {
  return {
    title: "RemixExpenses - The Complete App",
    description: "Manage your expenses with ease."
  };
}
var headers6 = ({ parentHeaders }) => ({
  "Cache-Control": parentHeaders.get("Cache-Control")
}), handle2 = { disableJS: !0 };

// app/routes/_marketing.auth.tsx
var marketing_auth_exports = {};
__export(marketing_auth_exports, {
  action: () => action3,
  default: () => Index2,
  links: () => links2
});

// app/components/auth/AuthForm.jsx
var import_react11 = require("@remix-run/react"), import_fa6 = require("react-icons/fa");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function AuthForm() {
  let [searchParams] = (0, import_react11.useSearchParams)(), navigation = (0, import_react11.useNavigation)(), validationErrors = (0, import_react11.useActionData)(), authMode = searchParams.get("mode") || "login", submitBtnCaption = authMode === "login" ? "Login" : "Create User", toggleBtnCaption = authMode === "login" ? "Create a new user" : "Log in with existing user", isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react11.Form, { method: "post", className: "form", id: "auth-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "icon-img", children: authMode === "login" ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_fa6.FaLock, {}, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 26,
      columnNumber: 33
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_fa6.FaUserPlus, {}, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 26,
      columnNumber: 46
    }, this) }, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "email", children: "Email Address" }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "email", id: "email", name: "email", required: !0 }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "password", id: "password", name: "password", minLength: 7 }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ValidationErrors_default, { validationErrors }, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "form-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Authenticating..." : submitBtnCaption }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react11.Link, { to: authMode === "login" ? "?mode=signup" : "?mode=login", children: toggleBtnCaption }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/auth/AuthForm.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
var AuthForm_default = AuthForm;

// app/styles/auth.css
var auth_default = "/build/_assets/auth-7ZCCMTFI.css";

// app/routes/_marketing.auth.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(AuthForm_default, {}, void 0, !1, {
    fileName: "app/routes/_marketing.auth.tsx",
    lineNumber: 12,
    columnNumber: 10
  }, this);
}
async function action3({ request }) {
  let authMode = new URL(request.url).searchParams.get("mode") || "login", formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), credentials = { email, password };
  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }
  try {
    return authMode === "login" ? await login(credentials) : await signup(credentials);
  } catch (error) {
    if (error.status === 422)
      return { credentials: error.message };
  }
}
function links2() {
  return [{ rel: "stylesheet", href: auth_default }];
}

// app/routes/expenses_.raw.js
var expenses_raw_exports = {};
__export(expenses_raw_exports, {
  loader: () => loader3
});
async function loader3({ request }) {
  return await requireUserSession(request), getExpenses();
}

// app/routes/_marketing.jsx
var marketing_exports = {};
__export(marketing_exports, {
  default: () => MarketingLayout,
  headers: () => headers7,
  links: () => links3,
  loader: () => loader4
});
var import_react14 = require("@remix-run/react");

// app/components/navigation/MainHeader.jsx
var import_react13 = require("@remix-run/react");

// app/components/util/Logo.jsx
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { id: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react12.Link, { to: "/", children: "RemixExpenses" }, void 0, !1, {
    fileName: "app/components/util/Logo.jsx",
    lineNumber: 5,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/util/Logo.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var Logo_default = Logo;

// app/components/navigation/MainHeader.jsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function MainHeader() {
  let userId = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Logo_default, {}, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react13.NavLink, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react13.NavLink, { to: "/pricing", children: "Pricing" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("li", { children: [
      userId && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react13.Form, { method: "post", id: "logout-form", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("button", { className: "cta-alt", children: "Logout" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 26,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 25,
        columnNumber: 15
      }, this),
      !userId && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react13.Link, { to: "/auth?mode=login", className: "cta", children: "Login" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 30,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 23,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navigation/MainHeader.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var MainHeader_default = MainHeader;

// app/styles/marketing.css
var marketing_default = "/build/_assets/marketing-RVXOO7W5.css";

// app/routes/_marketing.jsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function MarketingLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(MainHeader_default, {}, void 0, !1, {
      fileName: "app/routes/_marketing.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react14.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_marketing.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_marketing.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
function loader4({ request }) {
  return getUserFromSession(request);
}
function links3() {
  return [{ rel: "stylesheet", href: marketing_default }];
}
function headers7() {
  return {
    "Cache-Control": "max-age-3600"
    // 60 minutes
  };
}

// app/routes/_expenses.jsx
var expenses_exports = {};
__export(expenses_exports, {
  default: () => ExpensesLayout2,
  headers: () => headers8,
  links: () => links4,
  loader: () => loader5
});
var import_react16 = require("@remix-run/react");

// app/components/navigation/ExpensesHeader.jsx
var import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function ExpensesHeader() {
  let userId = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Logo_default, {}, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react15.NavLink, { to: "/expenses", end: !0, children: "Manage Expenses" }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react15.NavLink, { to: "/expenses/analysis", children: "Analyze Expenses" }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 18,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 17,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("nav", { id: "cta-nav", children: [
      userId && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react15.Form, { method: "post", id: "logout-form", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { className: "cta-alt", children: "Logout" }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 25,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      !userId && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react15.Link, { to: "/auth?mode=login", className: "cta", children: "Login" }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 29,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navigation/ExpensesHeader.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var ExpensesHeader_default = ExpensesHeader;

// app/styles/expenses.css
var expenses_default = "/build/_assets/expenses-I2WWZSEC.css";

// app/routes/_expenses.jsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function ExpensesLayout2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ExpensesHeader_default, {}, void 0, !1, {
      fileName: "app/routes/_expenses.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react16.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_expenses.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_expenses.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function loader5({ request }) {
  return getUserFromSession(request);
}
function links4() {
  return [{ rel: "stylesheet", href: expenses_default }];
}
function headers8() {
  return {
    "Cache-Control": "max-age-3600"
    // 60 minutes
  };
}

// app/routes/logout.js
var logout_exports = {};
__export(logout_exports, {
  action: () => action4
});
var import_node6 = require("@remix-run/node");
function action4({ request }) {
  if (request.method !== "POST")
    throw (0, import_node6.json)("Invalid request method", { status: 400 });
  return destroyUserSession(request);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-5LLJLH4H.js", imports: ["/build/_shared/chunk-MBFT3YUS.js", "/build/_shared/chunk-RQ7GWW3B.js", "/build/_shared/chunk-DG4HR4CT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-24DYRWRD.js", imports: ["/build/_shared/chunk-ZV5TTPEX.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_expenses": { id: "routes/_expenses", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_expenses-OY3M34NO.js", imports: ["/build/_shared/chunk-ZYGY6NRU.js", "/build/_shared/chunk-WTCX7ONF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_expenses.expenses": { id: "routes/_expenses.expenses", parentId: "routes/_expenses", path: "expenses", index: void 0, caseSensitive: void 0, module: "/build/routes/_expenses.expenses-AHGHAMHS.js", imports: ["/build/_shared/chunk-MP4BX7QZ.js", "/build/_shared/chunk-ZV5TTPEX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_expenses.expenses.$id": { id: "routes/_expenses.expenses.$id", parentId: "routes/_expenses.expenses", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/_expenses.expenses.$id-YMG3KEML.js", imports: ["/build/_shared/chunk-3UEJRBSY.js", "/build/_shared/chunk-OR6FFXCJ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_expenses.expenses.add": { id: "routes/_expenses.expenses.add", parentId: "routes/_expenses.expenses", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/_expenses.expenses.add-ATOWTVHZ.js", imports: ["/build/_shared/chunk-3UEJRBSY.js", "/build/_shared/chunk-OR6FFXCJ.js", "/build/_shared/chunk-WTCX7ONF.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_expenses.expenses_.analysis": { id: "routes/_expenses.expenses_.analysis", parentId: "routes/_expenses", path: "expenses/analysis", index: void 0, caseSensitive: void 0, module: "/build/routes/_expenses.expenses_.analysis-7J5VGHXO.js", imports: ["/build/_shared/chunk-MP4BX7QZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_marketing": { id: "routes/_marketing", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_marketing-56EVPHLI.js", imports: ["/build/_shared/chunk-ZYGY6NRU.js", "/build/_shared/chunk-WTCX7ONF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_marketing._index": { id: "routes/_marketing._index", parentId: "routes/_marketing", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_marketing._index-LJJZ7I4I.js", imports: ["/build/_shared/chunk-ZV5TTPEX.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_marketing.auth": { id: "routes/_marketing.auth", parentId: "routes/_marketing", path: "auth", index: void 0, caseSensitive: void 0, module: "/build/routes/_marketing.auth-SDR4A5BD.js", imports: ["/build/_shared/chunk-OR6FFXCJ.js", "/build/_shared/chunk-ZV5TTPEX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_marketing.pricing": { id: "routes/_marketing.pricing", parentId: "routes/_marketing", path: "pricing", index: void 0, caseSensitive: void 0, module: "/build/routes/_marketing.pricing-257ZIEAX.js", imports: ["/build/_shared/chunk-ZV5TTPEX.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/expenses_.raw": { id: "routes/expenses_.raw", parentId: "root", path: "expenses/raw", index: void 0, caseSensitive: void 0, module: "/build/routes/expenses_.raw-JDJ3YSXT.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-YO44EPFE.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "8b5e6ac1", hmr: void 0, url: "/build/manifest-8B5E6AC1.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !1, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_expenses.expenses_.analysis": {
    id: "routes/_expenses.expenses_.analysis",
    parentId: "routes/_expenses",
    path: "expenses/analysis",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_expenses_analysis_exports
  },
  "routes/_expenses.expenses.$id": {
    id: "routes/_expenses.expenses.$id",
    parentId: "routes/_expenses.expenses",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_expenses_id_exports
  },
  "routes/_expenses.expenses.add": {
    id: "routes/_expenses.expenses.add",
    parentId: "routes/_expenses.expenses",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_expenses_add_exports
  },
  "routes/_expenses.expenses": {
    id: "routes/_expenses.expenses",
    parentId: "routes/_expenses",
    path: "expenses",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_expenses_exports
  },
  "routes/_marketing.pricing": {
    id: "routes/_marketing.pricing",
    parentId: "routes/_marketing",
    path: "pricing",
    index: void 0,
    caseSensitive: void 0,
    module: marketing_pricing_exports
  },
  "routes/_marketing._index": {
    id: "routes/_marketing._index",
    parentId: "routes/_marketing",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: marketing_index_exports
  },
  "routes/_marketing.auth": {
    id: "routes/_marketing.auth",
    parentId: "routes/_marketing",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: marketing_auth_exports
  },
  "routes/expenses_.raw": {
    id: "routes/expenses_.raw",
    parentId: "root",
    path: "expenses/raw",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_raw_exports
  },
  "routes/_marketing": {
    id: "routes/_marketing",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: marketing_exports
  },
  "routes/_expenses": {
    id: "routes/_expenses",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: expenses_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
