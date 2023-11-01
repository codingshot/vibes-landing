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
                      "/book": "https://calendly.com/proofofvibes",
                      "/dao": "https://www.near.org/proofofvibes.near/widget/Vibes.DAO.main",
                      "/sbt-v1-flow": "https://miro.com/app/board/uXjVM1gTAfg=/?share_link_id=178384065579",
                      "/wallet": "https://shard.dog/proofofvibes",
                      "/russ-tapin": "https://app.proofofvibes.com/#/proofofvibes.near/widget/Vibes.Tastemakers.tapIn?accountId=ogruss.near",
                      "/feed": "https://app.proofofvibes.com/#/proofofvibes.near/widget/Vibes.Feed.main",
                      "/plug-tapin": "https://app.proofofvibes.com/#/proofofvibes.near/widget/Vibes.Tastemakers.tapIn?accountId=ndcplug.near",
                      "/will-tapin": "https://app.proofofvibes.com/#/proofofvibes.near/widget/Vibes.Tastemakers.tapIn?accountId=atrox1382.near",
                      "/derceo-tapin": "https://app.proofofvibes.com/#/proofofvibes.near/widget/Vibes.Tastemakers.tapIn?accountId=derceo.near",
                      "/illumnifti-tapin": "https://app.proofofvibes.com/#/proofofvibes.near/widget/Vibes.Tastemakers.tapIn?accountId=fiftycent.near",
                      "/members": "https://app.proofofvibes.com/#/proofofvibes.near/widget/Vibes.DAO.main?daoId=vibes.sputnik-dao.near&issuer=issuer.proofofvibes.near&accountId=proofofvibes.near&role=vibee&sbtTitle=&tab=members",
                      "/sharddog-holders": "https://app.proofofvibes.com/#/ndcplug.near/widget/Sharddog.Holders?series=161",
                      "/components": "https://app.proofofvibes.com/#/near/widget/ProfilePage?accountId=proofofvibes.near&tab=apps",
                      "/gateway": "https://github.com/nearbos/vibes-bos",
                      "/deploy-gateway": "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnearbos%2Fvibes-bos&build-command=npm%20run%20build&install-command=npm%20--force%20install&output-directory=dist",
                      "/feedback": "https://vibes.canny.io/feedback/",
                      "/partner": "https://forms.gle/xFqzzimKkFpGH8gx5",
                      "/metrics-canny": "https://app.databox.com/datawall/5d7806b07071f467380bf606e83c53922bfe1c064c964a9",
                      "/metrics-landing": "https://app.databox.com/datawall/a02142490de75123f6324b6c3ebc98eb5a7954064c94a36",
                      "/metrics-docs": "https://app.databox.com/datawall/55076c1f37e0d595f937bd98996de771501c14c64cabf8e",
                      "/app": "https://app.ProofofVibes.com",
                      "/metrics-gateway": "",
                      "/near": "https://near.org/proofofvibes.near/widget/Vibes.DAO.main",
                      "/vibecheck": "https://near.org/proofofvibes.near/widget/Vibes.DAO.main",
                      "/nearsocial": "https://near.social/proofofvibes.near/widget/Vibes.DAP.main",
                      "/apple-playlist": "https://music.apple.com/us/playlist/proof-of-vibes-playlist/pl.u-e98lGLjCa1zqaMx",
                      "/apple-worldwide-playlist": "https://music.apple.com/us/playlist/worldwide-vibes/pl.u-mJy81vJTNaz1NxX",
                      "/screening": "https://us05web.zoom.us/j/83163983928?pwd=0WgeNL8nhf9SGzQLUw1ojf5BjtaDqM.1",
                      "/bday": "https://partiful.com/e/JRxzSwnJhtjJbhut877H",
                      "/yotube": "https://www.youtube.com/@POV.1.",
                      "/tiktok": "https://www.tiktok.com/@proofofvibes",
                      "/nfc": "",
                      "/roadmap": "https://www.figma.com/file/aL1QKALh03aWlGmgcRp6MO/Proof-of-Vibes-Roadmap?type=whiteboard&node-id=0%3A1&t=S3EjwrWBX1OokNX0-1",
                      "/v5": "https://docs.google.com/document/d/1dOiQyROVfGLW3ecqb-zGn5eQlxsHeQzxGSxXtTJ07U4/edit?usp=sharing",
                      "/v5-backlog": "https://github.com/orgs/proofofvibes/projects/1/",
                      "/v5-repo": "https://github.com/proofofvibes/v5-monorepo",
                      "/v5-design": "https://www.figma.com/file/TRbUnInRv87JSN7cinKHSk/PoV-v5?type=design&node-id=0%3A1&mode=design&t=rPlTXewnUnrN49YE-1",
                      "/v5-forum": "https://github.com/proofofvibes/v5-monorepo/discussions",
                      "/v5-deck": "https://docs.google.com/presentation/d/1pOt2fW0ZkidNqDZfccmP4rnvdZXw7qSwT_OIO8xL4Xg/edit?usp=sharing",
                      "/mapathon": "https://docs.google.com/document/d/1R2kXq0PqCZ5jhwgEwNIkXQWVQVbt6D-ySAPUDCwP7hs/edit?usp=sharing",

      
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