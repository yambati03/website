const githubDark = {
  'code[class*="language-"]': {
    color: "#c9d1d9",
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
    color: "#c9d1d9",
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
    background: "#18181b",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#18181b",
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
    color: "#79c0ff",
  },
  ".namespace": {
    Opacity: ".7",
  },
  property: {
    color: "#79c0ff",
  },
  keyword: {
    color: "#ff7b72",
  },
  tag: {
    color: "#A8FF60",
  },
  "class-name": {
    color: "#c9d1d9",
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
    color: "#79c0ff",
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
    color: "#79c0ff",
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
    color: "#d2a8ff",
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

export default githubDark;
