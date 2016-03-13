exports.compile = function (template, fields) {
  if (!fields) {
    return
  }

  var matches = []
  var regex = /{{([^{}]+)}}/g

  while (match = regex.exec(template)) {
    matches.push({
      index: regex.lastIndex - match[0].length,
      end: regex.lastIndex - 1,
      content: match[1]
    })
  }

  for (var tag of matches) {
    template = template.replace(new RegExp(`{{${tag.content}}}`), fields[tag.content])
  }

  return template
}
