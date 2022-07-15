import * as React from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import github from "../../styles/github";
import ExternalLink from "../ExternalLink";
import SmartLink from "../SmartLink";

export interface Props {
  content: string;
}

function Markdown(props: Props) {
  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={github}
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
            <code className={className} {...props}>
              {children}
            </code>
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
