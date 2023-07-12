import { useEffect } from "react";

const RedirectLinks = {
  "/twitter": "",
    "/bos": "",
      "/github": "",
        "/apply": "",
          "/events": "",
            "/telegram": "",
              "/tastemakers": "",
                "/horizon": "",
                    "/linkedin": "",
                     "/members": "",
                      "/dao": "",
};

const Redirect = () => {
  useEffect(() => {
    const url = RedirectLinks[window.location.pathname.toLowerCase()];
    if (url) {
      window.location.href = url;
    } else {
      window.location.href = "/";
    }
  }, []);

  return <></>;
};
export default Redirect;