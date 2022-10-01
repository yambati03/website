---
title: 'How to write maintainable code.'
date: 'August 15, 2022'
excerpt: "I just finished up an amazing summer at NCR. Along the way, I've picked up a few good practices for writing maintainable code."
tags: 'Internships'
---

Coming into my internship this summer, I didn't know much about writing maintainable code. The only person that would ever read *my* code was *me*.
One of the biggest things I didn't do consistently was **comment** my code. When writing code for others to read, it's important to comment.

However, comments come with some caveats. When it comes to refactoring code, it's important to sniff out [code smells](https://blog.codinghorror.com/code-smells/).
These are patterns in code that **decrease** the quality of code. Similarly, there are comment smells! There's a fine line between useful and misleading comments.

Comments for functions or classes should tell people **what** something does from a user's perspective without getting into the implementation details.

> Are there any code changes to this function that would make this comment incorrect but wouldn't change how the user calls this function?

That's an indication that you're getting into unnecessary implementation detail.

This paradigm is the writing-equivalent of the dependency inversion principle from SOLID: depend on abstraction instead of concretions where possible.
