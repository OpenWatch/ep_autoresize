// eejs is a special templating engine for EPL that should be included.
var eejs = require("ep_etherpad-lite/node/eejs");

// Plugins are defined by overriding 'exports'
// Overriding of the templated content is a SERVER SIDE HOOK,
// most of which occurs in eejsBlock_**BLOCK_NAME**, as set in
// etherpad-lite/src/templates/pad.html
// Override as necessary.
//
// In this case, we will make the buttons big (for no particular reason)
// by appdending the incoming block content with a link to our own stylesheet.
exports.eejsBlock_scripts= function(hook_name, args, cb){

    args.content = args.content + "<script>setTimeout(function(){parent.postMessage($('#editorcontainer').find('iframe')[0].contentDocument.getElementById('outerdocbody').firstElementChild.scrollHeight + 200, 'http://localhost:5000/i/2/');}, 2000); </script>";

    return cb();
}
