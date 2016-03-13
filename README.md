# stubbles

This package aims to provide a simpler and much more abstract implementation of Handlebars. Instead of being a whole template engine and including files, it will only provide you with a compiler that consumes a template string and uses the provided data to output a new string.

Because of this, you don't necessarily need to use it to compile your HTML. You can use it for whatever you like! As long it's a string, stubbles will be fine with it!


## Helper

```mustache
{{helper}}
```

## Block helper

```mustache
{{#helper}}
  Hi mum!
{{/helper}}
```
