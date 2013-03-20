exports.aceEditEvent = function(hook, context){
    height = $('#editorcontainer').find('iframe')[0].contentDocument.getElementById('outerdocbody').firstElementChild.scrollHeight;  
    if(height != last_height){
        if(height<600){
            parent.postMessage(600, prefix + parent_url);
        } 
        else{
            parent.postMessage(height, prefix + parent_url);
        }
        last_height = height;
    }
};
