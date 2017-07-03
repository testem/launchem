'use strict';

// Simple template function. Replaces occurences of "<name>" with param[name]
function template(str, params) {
  return !str.replace ? str : str.replace(/<(.+?)>/g, function(unchanged, name) {
    return name in params ? params[name] : unchanged;
  });
}

exports.template = template;
