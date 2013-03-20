// eejs is a special templating engine for EPL that should be included.
var eejs = require("ep_etherpad-lite/node/eejs");
settings = require('../../src/node/utils/Settings');
var pluginSettings = settings.ep_autosize;

// Plugins are defined by overriding 'exports'
// Overriding of the templated content is a SERVER SIDE HOOK,
// most of which occurs in eejsBlock_**BLOCK_NAME**, as set in
// etherpad-lite/src/templates/pad.html
// Override as necessary.
//
// In this case, we will make the buttons big (for no particular reason)
// by appdending the incoming block content with a link to our own stylesheet.
exports.eejsBlock_scripts= function(hook_name, args, cb){

    args.content = args.content + "<script>function getURLParameter(name) { return decodeURI( (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1] ); } </script>;";
    args.content = args.content + "<script>var parent_url = getURLParameter('parentUrl');</script>";
    args.content = args.content + "<script>var last_height= 600;setTimeout(function(){parent.postMessage($('#editorcontainer').find('iframe')[0].contentDocument.getElementById('outerdocbody').firstElementChild.scrollHeight, parent_url);}, 2000); </script>";
    args.content = args.content + "<script>setTimeout(function(){$($('#editorcontainer').find('iframe')[0].contentDocument.getElementsByTagName('html')[0]).css('overflow', 'hidden');}, 3333); </script>";
    if(pluginSettings.is_https){
        args.content = args.content + "<script>var prefix = 'https://';</script>";
    } else{
        args.content = args.content + "<script>var prefix = 'http://';</script>";
    }

    return cb();
}
