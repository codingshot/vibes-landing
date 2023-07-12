import { useEffect } from "react";

const RedirectLinks = {
  "/twitter": "https://twitter.com/VibesProof",
    "/bos": "https://near.org/near/widget/ProfilePage?accountId=proofofvibes.near",
      "/github": "",
        "/apply": "",
          "/events": "https://neardc.org/telegram",
            "/telegram": "https://neardc.org/telegram",
              "/tastemakers": "",
                "/horizon": "https://near.org/nearhorizon.near/widget/Index?tab=project&accountId=proofofvibes.near",
                    "/linkedin": "https://www.linkedin.com/company/proof-of-vibes/",
                     "/members": "",
                      "/dao": "https://near.org/ndcplug.near/widget/DAO.main?daoId=vibes.sputnik-dao.near",
                      "/genadrop": "https://genadrop.io/mint/vibe",
                      "/sbts": "https://i-am-human.app/community-sbts",
                      "/about": "https://proofofvibes.vercel.app/about/b1db17ba1752463ea6e48e6936cbd839",
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