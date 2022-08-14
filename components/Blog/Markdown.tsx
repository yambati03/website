import { useTheme } from "next-themes";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import githubDark from "../../styles/github-dark";
import githubLight from "../../styles/github-light";
import Code from "../Code";
import SmartLink from "../SmartLink";

export interface Props {
  content: string;
}

function Markdown(props: Props) {
  const { theme, setTheme } = useTheme();

  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={theme === "dark" ? githubDark : githubLight}
              language={match[1]}
              PreTag='div'
              customStyle={{ padding: 10 }}
              codeTagProps={{ className: "text-xs" }}
              wrapLongLines={true}
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <Code>{children}</Code>
          );
        },
        a: ({ href, children, ...props }) => (
          <SmartLink href={href!} {...props}>
            {children}
          </SmartLink>
        ),
      }}
    >
      {props.content}
    </ReactMarkdown>
  );
}

export default Markdown;
