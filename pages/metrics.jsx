import Link from "next/link";
import Head from "next/head";
import { event } from "../components/gtag";
import { useEffect } from "react";

const links = [
  {
    title: "Landing Page",
    url: "/metrics-landing",
    img: "/card1.png",
    dark: false,
  },
  {
    title: "Canny",
    url: "/metrics-canny",
    img: "/card2.png",
    dark: false,
  },
  {
    title: "Docs",
    url: "/metrics-docs",
    img: "/card3.png",
    dark: true,
  },
];

// async function fetchGa4Reports() {
//   const apiKey = ""
//   const propertyId = "G-J701Q0V069"; // Replace with your GA4 property ID

//   const url = `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`;

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${apiKey}`, // Include the API key as a Bearer token
//       },
//       body: JSON.stringify({
//         entity: {
//           propertyId: propertyId,
//         },
//         dimensions: [
//           { name: "eventName" }, // Replace with your desired dimensions
//         ],
//         metrics: [
//           { name: "eventCount" }, // Replace with your desired metrics
//         ],
//         // Add your dimensions and metrics here
//       }),
//     });

//     const data = await response.json();
//     console.log("GA4 Report Data:", data);
//   } catch (error) {
//     console.error("Error fetching GA4 report data:", error);
//   }
// }

const metrics = () => {
  //   useEffect(() => {
  //     fetchGa4Reports();
  //   }, []);
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
        {links.map((link) => (
          <Link href={link.url} key={link.url}>
            <div
              className="card"
              onClick={() =>
                event({
                  action: link.url,
                  category: "External Links",
                  label: link.url,
                })
              }
            >
              <div>
                <img src={link.img} alt="" />
                <p style={{ color: link.dark ? "black" : "white" }}>
                  {link.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default metrics;
