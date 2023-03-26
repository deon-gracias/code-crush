import React from "react";

const ChatboT = () => {
  React.useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "15a1b30c12c938478c4276737a32563d0",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);
  return <div></div>;
};

export default ChatboT;
