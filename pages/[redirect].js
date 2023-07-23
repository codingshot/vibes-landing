import { useEffect } from "react";

const RedirectLinks = {
  "/twitter": "https://twitter.com/VibesProof",
    "/bos": "https://near.org/near/widget/ProfilePage?accountId=proofofvibes.near",
      "/github": "https://github.com/proofofvibes",
        "/apply": "https://forms.gle/dkafkGbvqKvBXyet7",
          "/events": "https://t.me/+NjNy-5yl_KllNmYx",
            "/telegram": "https://t.me/+NjNy-5yl_KllNmYx",
            "/human": "https://i-am-human.app/?community=proofofvibes&vertical=infrastructure",
              "/tastemakers": "",
                "/horizon": "https://near.org/nearhorizon.near/widget/Index?tab=project&accountId=proofofvibes.near",
                    "/linkedin": "https://www.linkedin.com/company/proof-of-vibes/",
                      "/dao": "https://app.proofofvibes.com/#/",
                      "/genadrop": "https://genadrop.io/mint/vibe",
                      "/sbts": "https://i-am-human.app/community-sbts",
                      "/about": "https://proofofvibes.vercel.app/about/b1db17ba1752463ea6e48e6936cbd839",
                      "/feed": "https://www.near.org/proofofvibes.near/widget/Vibes.Feed.main",
                      "/book": "https://calendly.com/proofofvibes",
                      "/dao": "https://www.near.org/proofofvibes.near/widget/Vibes.DAO.main",
                      "/sbt-v1-flow": "https://miro.com/app/board/uXjVM1gTAfg=/?share_link_id=178384065579",
                      "/wallet": "https://shard.dog/proofofvibes",
                      "/russ-tapin": "https://app.proofofvibes.com/#/proofofvibes.near/widget/Vibes.Tastemakers.tapIn?accountId=ogruss.near",
                      "/feed": "https://app.proofofvibes.com/#/proofofvibes.near/widget/Vibes.Feed.main",
                      "/plug-tapin": "https://app.proofofvibes.com/#/proofofvibes.near/widget/Vibes.Tastemakers.tapIn?accountId=ndcplug.near",
                      "/will-tapin": "https://app.proofofvibes.com/#/proofofvibes.near/widget/Vibes.Tastemakers.tapIn?accountId=atrox1382.near",
                      "/illumnifti-tapin": "https://app.proofofvibes.com/#/proofofvibes.near/widget/Vibes.Tastemakers.tapIn?accountId=fiftycent.near",
                      "/members": "https://app.proofofvibes.com/#/proofofvibes.near/widget/Vibes.DAO.main?daoId=vibes.sputnik-dao.near&issuer=issuer.proofofvibes.near&accountId=proofofvibes.near&role=vibee&sbtTitle=&tab=members",

      
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