#ep_autoresize
## Rich Jones

Use HTML5 message passing to automagically resize EPL iframes.

# Server Settings

    ep_autosize = {
        is_https: false
    },

# Client Javascript

    <iframe src="http://yourpad.url/p/pid&parentUrl=yourparent.url/where_this_iframe_is_right_now" class="span9" id="thePad" onload="resizeCrossDomainIframe('thePad', 'http://yourpad.url');" >

    <script type="text/javascript">
      function resizeCrossDomainIframe(id, other_domain) {
        var iframe = document.getElementById(id);
        window.addEventListener('message', function(event) {
          if (event.origin !== other_domain) return; // only accept messages from the specified domain
          if (isNaN(event.data)) return; // only accept something which can be parsed as a number
          var height = parseInt(event.data); // add some extra height to avoid scrollbar
          iframe.height = height + "px";
        }, false);
      }
    </script>

