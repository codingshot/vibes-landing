import Link from "next/link";
import Head from "next/head";

const metrics = () => {
  return (
    <div className="metrics-container">
      <Head>
        <title>Proof of Vibes | Metrics</title>
        <meta
          name="description"
          content="The first vibe to earn platform powered by the world's finest tastemakers. "
        />
        <meta property="og:title" content="Proof of Vibes | Metrics" />
        <meta
          property="og:description"
          content="The first vibe to earn platform powered by the world's finest tastemakers. "
        />
      </Head>
      <div className="metrics-header">Analytics Dashboards</div>
      <div className="metrics-cards">
        <Link href={"/metrics-landing"}>
          <div className="card">
            <div>
              <img src="/card1.png" alt="" />
              <p>Landing Page</p>
            </div>
          </div>
        </Link>
        <Link href={"/metrics-canny"}>
          <div className="card">
            <div>
              <img src="/card3.png" alt="" />
              <p>Canny</p>
            </div>
          </div>
        </Link>
        <Link href={"/metrics-docs"}>
          <div className="card">
            <div>
              <img src="/card2.png" alt="" />
              <p style={{ color: "black" }}>Docs</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default metrics;
