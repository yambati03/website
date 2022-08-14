const githubLight = {
  'code[class*="language-"]': {
    color: "#24292f",
    fontFamily:
      "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "#24292f",
    fontFamily:
      "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    borderRadius: "0.3em",
    background: "#e4e4e7",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#e4e4e7",
    padding: ".1em",
    borderRadius: ".3em",
  },
  comment: {
    color: "#7C7C7C",
  },
  prolog: {
    color: "#7C7C7C",
  },
  doctype: {
    color: "#7C7C7C",
  },
  cdata: {
    color: "#7C7C7C",
  },
  punctuation: {
    color: "#0550ae",
  },
  ".namespace": {
    Opacity: ".7",
  },
  property: {
    color: "#0550ae",
  },
  keyword: {
    color: "#cf222e",
  },
  tag: {
    color: "#A8FF60",
  },
  "class-name": {
    color: "#24292f",
  },
  boolean: {
    color: "#99CC99",
  },
  constant: {
    color: "#99CC99",
  },
  symbol: {
    color: "#f92672",
  },
  deleted: {
    color: "#f92672",
  },
  number: {
    color: "#FF73FD",
  },
  selector: {
    color: "#A8FF60",
  },
  "attr-name": {
    color: "#0550ae",
  },
  string: {
    color: "#a5d6ff",
  },
  char: {
    color: "#A8FF60",
  },
  builtin: {
    color: "#c9d1d9",
  },
  inserted: {
    color: "#A8FF60",
  },
  variable: {
    color: "#c9d1d9",
  },
  operator: {
    color: "#0550ae",
  },
  entity: {
    color: "#FFFFB6",
    cursor: "help",
  },
  url: {
    color: "#a5d6ff",
  },
  ".language-css .token.string": {
    color: "#87C38A",
  },
  ".style .token.string": {
    color: "#87C38A",
  },
  atrule: {
    color: "#F9EE98",
  },
  "attr-value": {
    color: "#F9EE98",
  },
  function: {
    color: "#8250df",
  },
  regex: {
    color: "#E9C062",
  },
  important: {
    color: "#fd971f",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
} as { [key: string]: React.CSSProperties };

export default githubLight;
