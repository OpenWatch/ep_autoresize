exports.aceEditEvent = function(hook, context){
    height = $('#editorcontainer').find('iframe')[0].contentDocument.getElementById('outerdocbody').firstElementChild.scrollHeight;  
    if(height != last_height){
        if(height<600){
            parent.postMessage(600, 'http://localhost:5000/i/2/');
        } 
        else{
            parent.postMessage(height, 'http://localhost:5000/i/2/');
        }
        last_height = height;
    }
};
