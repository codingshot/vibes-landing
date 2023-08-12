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
//   const apiKey =
//     "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDllXXlrOki7DOA\n0NIXEtkLe+KiVvpg36sjsmiQYn0w1ujgmRWkIl7t4NfX2wLLy/eU6ffkMXvvHj1N\nPmx82Cs708jPvUfi8mhrEZREPPA2tsItb7vrA3fNg1WH33kJC8oJBn3mdGbOR0Qs\nXYVjeiAAoltKwWGviS95o2bqxZ1s9/tIPPxdYb5aCbQdd5agrmHkvnqYvk37AOiO\nR+VhKjt549Nroc2sls057MhfrsWaAImrcnQfPO4WQgHTi0LyTkKkd09QBO1XC0BA\n9gtnDCUsZgGZ7Hg6XgJMZiBcnDlny7bUq5Mi/4gMKrraJEuh+UcX9f97oFK3T9e5\nc2Dxl90zAgMBAAECggEAHmBviwYdNXEJ7NS0bOJ3iVzI7ds9oa0L2IX17ooO2nQf\nt/1JWcBFIzW0GWwcVe6/lsUmTDEn9B7iKY2a48yOW993xdTbkBxW0zkuOaEpKh7L\nA8wG5zTm7cWffteDYj5caw6gKz/iN7pCO5ncLlStq1J6wHdkf3SoAsYrYIuT0COi\nEn5RYbZg/1TQqo91C6o1VS3RsF3nQrlcakVTSuZcl916MmRM7ZmHjA5bLXEspNUW\nes7/nqHo3gBa8l8yxXf2TQRuN9+PeLDD1gq2VMrEOTAcI6D7LxU9F3ZcV9vksvko\nzYfqrmW9NXhTytvc1Ddgq6rmJ550VCx2cUtYU69b8QKBgQD6DjAwBgauGVqL8sAo\npklmpKeEJ/w9kcRds0WBzZVloJLvZHUnvlGIpghRvw3VxunDpsKkqyITvJr4ypZd\npb8Thu43iatSN21t4/W23GOJ0b9JZ0IzFaTs2xSWjABEwL2bDTkve5g3Kp8H+MY/\n50pzXUppHY0pqcvhOYk2gDqGpQKBgQDrCq8tDmcWdgHrJv43d0wD6KEpZBNNMHnM\nMKHnBiOfFnH+WKlkKExl7kYRZASuYfdmyBUegZTBrAYR6N8D53PQR5fqhIBl9K8H\nFiGFs5V3R2SHtbteguMyjQbfJfY4HZUhs9yqC86oEx4xGn5uc0qP2wAWERnzvHZn\nV5LPU1Hk9wKBgQCrINijlQwvS9Sm4CvX5e1n3Jl0HTVIIaEkixKvgbWThm/oe3Se\nDWaZQR+CamEag3Xp2w9sSF4a6cGZMHP1hQAeagJPad0geCRgx1iam3tXj378yjkI\n4vAq1MfjO87XPpzEJymSsF/8qSOK/hsXEr/l8duB0qKP9886xPh9nwXurQKBgQC2\nuS6oQ2snDgS90CmP60GARGiN6gwLVSVK9X/YP3CP6/4g8sJ1Z9LE53E3cd8lxml0\nURYCClEgI2DwqW4+9b+WayISIoJDQO6U/sJ+07bd7PWdf02z0uNX2EVAU53P0Eew\n1Mg2tkkpZvtwxx0FNsH/hgzSGudnEdumyXELlsWyzwKBgAINdN7vUpWbtGsnR0nt\nZAicaYRmCf94ckhW11MvB/bDKh/2r/eq8AExpfpekXLXll3vSsNzZb9SOQ5kywXA\nbFBv0NEaLo7ku5D7OnxVm1HNy8B1h5YamQp9h+gBYvOZyy9wQ2UaWQ3yuNK30s3l\nCpfqFEGwCSW0XcfO89vUxOgw"; // Replace with your API key
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
