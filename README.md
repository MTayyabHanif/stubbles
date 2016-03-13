# stubbles

This package aims to do provide a simpler and much more abstract implementation of Handlebars. Instead of being a whole template engine and including files, it will only provide you with a compiler that consumes a template string and uses the provided data to output a new string.

Because of this, you don't necessarily need to use it to compile your HTML. You can use it for whatever you like! As long it's a string, stubbles will be fine with it!


## Helpers

This is the core concept behind stubbles.

#### Regular helper (a.k.a. "variable")

```mustache
{{helper}}
```

### Block helper

```mustache
{{#helper}}
  Hi mum!
{{/helper}}
```

## Helper types

Feel free to use any character you want in position of `>` . Stubbles will check the list of variable types and if there's a function assigned to that certain character, it will use it to handle the variable.

Just make sure that it's not `#` or `/`.

```mustache
{{>helper}}
```
