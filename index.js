exports.compile = function (template, fields) {
  if (!fields) {
    return
  }

  var matches = []
  var regex = /{{([^{}]+)}}/g

  while (match = regex.exec(template)) {
    var content = match[1],
        first = content.charAt(0),
        type = first === '#' ? 'open' : (first === '/' ? 'close' : false)

    if (type !== false) {
      content = content.substr(1, content.length)
    }

    matches.push({
      index: regex.lastIndex - match[0].length,
      end: regex.lastIndex - 1,
      content,
      full: match[0]
    })
  }

  for (var tag of matches) {
    template = template.replace(new RegExp(`{{${tag.content}}}`), fields[tag.content])
  }

  return template
}
