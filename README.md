# Uncommon JavaScript Bug: Unexpected Null Handling

This repository demonstrates a subtle bug in JavaScript related to null handling within a function.  The function `foo` adds two numbers, but its behavior with null values might be unexpected or lead to problems depending on the application's needs.  The solution provides alternative approaches to address this behavior.

## Bug Description

The `foo` function directly returns 0 if either input (`a` or `b`) is `null`. While seemingly simple, this can cause unexpected issues if 0 is a valid input and not an indicator of a null value. For example in cases where 0 could represent a quantity, it's indistinguishable from an absence of data (null). This can be a challenge to debug, especially in larger applications.

## Solution

The solution demonstrates ways to handle null more robustly, including throwing an error for clarity and using optional chaining/nullish coalescing for improved readability and error prevention.