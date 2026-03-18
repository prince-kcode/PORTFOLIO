import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Navbar.tsx");"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=2f2ccbcf"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=2f2ccbcf"; const useState = __vite__cjsImport1_react["useState"]; const useEffect = __vite__cjsImport1_react["useEffect"];
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=9e966bd0";
import { Menu, X } from "/node_modules/.vite/deps/lucide-react.js?v=23d6c3cb";
import { cn } from "/src/lib/utils.ts";
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];
export function Navbar() {
  _s();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxDEV(
    "header",
    {
      "data-replit-metadata": "artifacts/portfolio/src/components/Navbar.tsx:27:4",
      "data-component-name": "header",
      className: cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4 bg-[#0a0a0ccc] backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"
      ),
      children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/components/Navbar.tsx:35:6", "data-component-name": "div", className: "max-w-7xl mx-auto px-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              "data-replit-metadata": "artifacts/portfolio/src/components/Navbar.tsx:36:8",
              "data-component-name": "a",
              href: "#top",
              className: "flex items-center gap-2 group",
              onClick: (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              children: /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/portfolio/src/components/Navbar.tsx:44:10", "data-component-name": "span", className: "font-sans font-bold text-2xl tracking-tight text-white", children: "Prince Kumar" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/components/Navbar.tsx",
                lineNumber: 44,
                columnNumber: 11
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/runner/workspace/artifacts/portfolio/src/components/Navbar.tsx",
              lineNumber: 36,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("nav", { "data-replit-metadata": "artifacts/portfolio/src/components/Navbar.tsx:50:8", "data-component-name": "nav", className: "hidden md:flex items-center gap-8", children: navLinks.map(
            (link) => /* @__PURE__ */ jsxDEV(
              "a",
              {
                "data-replit-metadata": "artifacts/portfolio/src/components/Navbar.tsx:52:12",
                "data-component-name": "a",
                href: link.href,
                className: "text-sm font-medium text-muted-foreground hover:text-primary transition-colors",
                children: link.name
              },
              link.name,
              false,
              {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/components/Navbar.tsx",
                lineNumber: 52,
                columnNumber: 11
              },
              this
            )
          ) }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/portfolio/src/components/Navbar.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              "data-replit-metadata": "artifacts/portfolio/src/components/Navbar.tsx:63:8",
              "data-component-name": "button",
              className: "md:hidden p-2 text-white hover:text-primary transition-colors",
              onClick: () => setMobileMenuOpen(!mobileMenuOpen),
              children: mobileMenuOpen ? /* @__PURE__ */ jsxDEV(X, { "data-replit-metadata": "artifacts/portfolio/src/components/Navbar.tsx:67:28", "data-component-name": "X" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/components/Navbar.tsx",
                lineNumber: 67,
                columnNumber: 29
              }, this) : /* @__PURE__ */ jsxDEV(Menu, { "data-replit-metadata": "artifacts/portfolio/src/components/Navbar.tsx:67:36", "data-component-name": "Menu" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/portfolio/src/components/Navbar.tsx",
                lineNumber: 67,
                columnNumber: 136
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/runner/workspace/artifacts/portfolio/src/components/Navbar.tsx",
              lineNumber: 63,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/portfolio/src/components/Navbar.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-replit-metadata": "artifacts/portfolio/src/components/Navbar.tsx:72:6", "data-component-name": "AnimatePresence", children: mobileMenuOpen && /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-replit-metadata": "artifacts/portfolio/src/components/Navbar.tsx:74:10",
            "data-component-name": "motion.div",
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: "absolute top-full left-0 right-0 bg-[#0a0a0c] border-b border-white/10 overflow-hidden md:hidden shadow-2xl",
            children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/portfolio/src/components/Navbar.tsx:80:12", "data-component-name": "div", className: "flex flex-col p-6 gap-6", children: navLinks.map(
              (link) => /* @__PURE__ */ jsxDEV(
                "a",
                {
                  "data-replit-metadata": "artifacts/portfolio/src/components/Navbar.tsx:82:16",
                  "data-component-name": "a",
                  href: link.href,
                  onClick: () => setMobileMenuOpen(false),
                  className: "text-lg text-muted-foreground hover:text-primary font-medium transition-colors",
                  children: link.name
                },
                link.name,
                false,
                {
                  fileName: "/home/runner/workspace/artifacts/portfolio/src/components/Navbar.tsx",
                  lineNumber: 82,
                  columnNumber: 13
                },
                this
              )
            ) }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/portfolio/src/components/Navbar.tsx",
              lineNumber: 80,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/home/runner/workspace/artifacts/portfolio/src/components/Navbar.tsx",
            lineNumber: 74,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/portfolio/src/components/Navbar.tsx",
          lineNumber: 72,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/runner/workspace/artifacts/portfolio/src/components/Navbar.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}
_s(Navbar, "Tz1YhpjmJIU2IHcimEech/T/LuY=");
_c = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/portfolio/src/components/Navbar.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/portfolio/src/components/Navbar.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/portfolio/src/components/Navbar.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUEsWUFDdEMsTUFBTSxFQUFFRCxTQUFTLEdBQUdDLFFBQVEsRUFBRTtBQUFBLFlBQzlCLFdBQVU7QUFBQSxZQUVWLGlDQUFDLFNBQUUsNkdBQUUsV0FBVSwyQkFDWnRCLG1CQUFTbUI7QUFBQUEsY0FBSSxDQUFDQyxTQUNiO0FBQUEsZ0JBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFFQyxNQUFNQSxLQUFLbEI7QUFBQUEsa0JBQ1gsU0FBUyxNQUFNTSxrQkFBa0IsS0FBSztBQUFBLGtCQUN0QyxXQUFVO0FBQUEsa0JBRVRZLGVBQUtuQjtBQUFBQTtBQUFBQSxnQkFMRG1CLEtBQUtuQjtBQUFBQSxnQkFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBT0E7QUFBQSxZQUNELEtBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFXQTtBQUFBO0FBQUEsVUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBa0JBLEtBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFzQkE7QUFBQTtBQUFBO0FBQUEsSUFuRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBb0VBO0FBRUo7QUFBQUcsR0FuRmdCRCxRQUFNO0FBQUEsS0FBTkE7QUFBTSxJQUFBb0I7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJNZW51IiwiWCIsImNuIiwibmF2TGlua3MiLCJuYW1lIiwiaHJlZiIsIk5hdmJhciIsIl9zIiwiaXNTY3JvbGxlZCIsInNldElzU2Nyb2xsZWQiLCJtb2JpbGVNZW51T3BlbiIsInNldE1vYmlsZU1lbnVPcGVuIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsIm1hcCIsImxpbmsiLCJvcGFjaXR5IiwiaGVpZ2h0IiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTmF2YmFyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBNZW51LCBYIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgbmF2TGlua3MgPSBbXG4gIHsgbmFtZTogXCJBYm91dFwiLCBocmVmOiBcIiNhYm91dFwiIH0sXG4gIHsgbmFtZTogXCJTa2lsbHNcIiwgaHJlZjogXCIjc2tpbGxzXCIgfSxcbiAgeyBuYW1lOiBcIlByb2plY3RzXCIsIGhyZWY6IFwiI3Byb2plY3RzXCIgfSxcbiAgeyBuYW1lOiBcIkVkdWNhdGlvblwiLCBocmVmOiBcIiNlZHVjYXRpb25cIiB9LFxuICB7IG5hbWU6IFwiQ29udGFjdFwiLCBocmVmOiBcIiNjb250YWN0XCIgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21vYmlsZU1lbnVPcGVuLCBzZXRNb2JpbGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBzZXRJc1Njcm9sbGVkKHdpbmRvdy5zY3JvbGxZID4gMjApO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlclxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTUwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiLFxuICAgICAgICBpc1Njcm9sbGVkIFxuICAgICAgICAgID8gXCJweS00IGJnLVsjMGEwYTBjY2NdIGJhY2tkcm9wLWJsdXItbWQgYm9yZGVyLWIgYm9yZGVyLXdoaXRlLzEwXCIgXG4gICAgICAgICAgOiBcInB5LTYgYmctdHJhbnNwYXJlbnRcIlxuICAgICAgKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTYgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxhIFxuICAgICAgICAgIGhyZWY9XCIjdG9wXCIgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZ3JvdXBcIlxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LTJ4bCB0cmFja2luZy10aWdodCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICBQcmluY2UgS3VtYXJcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cblxuICAgICAgICB7LyogRGVza3RvcCBOYXYgKi99XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggaXRlbXMtY2VudGVyIGdhcC04XCI+XG4gICAgICAgICAge25hdkxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAga2V5PXtsaW5rLm5hbWV9XG4gICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xpbmsubmFtZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgey8qIE1vYmlsZSBOYXYgVG9nZ2xlICovfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIHAtMiB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTWVudU9wZW4oIW1vYmlsZU1lbnVPcGVuKX1cbiAgICAgICAgPlxuICAgICAgICAgIHttb2JpbGVNZW51T3BlbiA/IDxYIC8+IDogPE1lbnUgLz59XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBNb2JpbGUgTmF2IE1lbnUgKi99XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICB7bW9iaWxlTWVudU9wZW4gJiYgKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIGhlaWdodDogMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBoZWlnaHQ6IFwiYXV0b1wiIH19XG4gICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIGhlaWdodDogMCB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLWZ1bGwgbGVmdC0wIHJpZ2h0LTAgYmctWyMwYTBhMGNdIGJvcmRlci1iIGJvcmRlci13aGl0ZS8xMCBvdmVyZmxvdy1oaWRkZW4gbWQ6aGlkZGVuIHNoYWRvdy0yeGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTYgZ2FwLTZcIj5cbiAgICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBrZXk9e2xpbmsubmFtZX1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU1lbnVPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtcHJpbWFyeSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2xpbmsubmFtZX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvYXJ0aWZhY3RzL3BvcnRmb2xpby9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4In0=