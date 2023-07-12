import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Proof of Vibes</title>
          <meta
            name="description"
            content="The first vibe to earn platform powered by the world's finest tastemakers. "
          />
          <meta property="og:title" content="Proof of Vibes" />
          <meta
            property="og:description"
            content="The first vibe to earn platform powered by the world's finest tastemakers. "
          />
        </Head>
        <section className="home-hero">
          <video
            src="https://www.nearefi.org/vibesboat.mp4"
            loop
            poster="/poster-1500h.png"
            preload="auto"
            playsInline
            autoPlay
            className="home-video"
          ></video>
          <header data-thq="thq-navbar" className="home-navbar">
            <img
              alt="image"
              src="/proofofvibesverticalwhite.svg"
              className="home-branding"
            />
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <div className="home-hamburger">
                <img alt="image" src="/hamburger.svg" className="home-icon" />
              </div>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav"
              >
                <div className="home-container1">
                  <img
                    alt="image"
                    src="/proofofvibesverticalwhite.svg"
                    className="home-image"
                  />
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon1">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav1"
                >
                  <a
                    href="https://proofofvibes.com/about"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link"
                  >
                    Vibe Paper
                  </a>
                  <a
                    href="https://proofofvibes.com/tastemakers"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link01"
                  >
                    Tastemakers
                  </a>
                  <a
                    href="https://proofofvibes.com/dao"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link02"
                  >
                    The DAO
                  </a>
                  <a
                    href="https://proofofvibes.com/dao"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link03"
                  >
                    #BOS
                  </a>
                </nav>
                <div className="home-container2">
                  <a
                    href="https://proofofvibes.com/events"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-login button"
                  >
                    Find Events
                  </a>
                  <a
                    href="https://proofofvibes.com/apply"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-register button"
                  >
                    Become A Tastemaker
                  </a>
                </div>
              </div>
              <div className="home-icon-group">
                <a
                  href="https://proofofvibes.com/twitter"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link04"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon3"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </header>
          <div className="home-hero-content">
            <div className="home-header-container">
              <div className="home-header">
                <h1 className="home-heading">
                  <span>Proof of Vibes</span>
                  <br></br>
                </h1>
              </div>
              <p className="home-caption">
                First vibe to earn platform powered by the world&apos;s best
                tastemakers
              </p>
            </div>
            <a
              href="https://proofofvibes.com/events"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link05 button"
            >
              <span>
                <span>Find An Event</span>
                <br></br>
              </span>
            </a>
          </div>
        </section>
        <section className="home-note">
          <h2 className="home-caption1">
            Leveraging blockchain to bring the best vibes on chain and IRL
          </h2>
        </section>
        <section className="home-statistics">
          <div className="home-content">
            <div className="home-stat">
              <h3 className="home-header01">DAO</h3>
              <span className="home-caption2">
                Vibes DAO to verify tastemakers 
              </span>
            </div>
            <div className="home-stat1">
              <h3 className="home-header02">Tastemakers</h3>
              <span className="home-caption3">
                Curate the best vibes around the world
              </span>
            </div>
            <div className="home-stat2">
              <h3 className="home-header03">Vibees</h3>
              <span className="home-caption4">Prove your vibe</span>
            </div>
          </div>
        </section>
        <section className="home-get-started">
          <div className="home-header-container1">
            <div className="home-header04">
              <h2 className="home-heading1">
                Become Part of the Network of the Best Global Tastemakers
              </h2>
              <p className="home-caption5">
                Every experience is curated by a vetted tastemaker.
              </p>
            </div>
            <div className="home-button">
              <a
                href="https://proofofvibes.com/apply"
                target="_blank"
                rel="noreferrer noopener"
                className="home-button1 button"
              >
                <span>Apply Today</span>
              </a>
            </div>
          </div>
          <img
            alt="image"
            src="/proofofvibes-800w.jpg"
            className="home-image1"
          />
        </section>
        <section className="home-objectives">
          <div className="home-content1">
            <div className="home-objectives-list">
              <div className="objective">
                <h3 className="home-text06">Attend</h3>
                <p className="home-text07">Find an exclusive vibe</p>
              </div>
              <div className="objective home-objective1">
                <h3 className="home-text08">Curate</h3>
                <p className="home-text09">
                  Curate vibes for the community as a tastemaker
                </p>
              </div>
              <div className="objective home-objective2">
                <h3 className="home-text10">Earn</h3>
                <p className="home-text11">
                  Earn the more vibes you get and the better vibes you curate.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-customer">
          <div className="home-header05">
            <h2 className="home-heading2">
              <span>Our teamslikes to Vibe at scale.</span>
              <br></br>
            </h2>
          </div>
          <div className="home-quotes">
            <div className="home-quote">
              <p className="home-quote1">
                Seasoned Creative Executive, Anthony Marshall co-founded the
                Lyricist Lounge, at the age of 16. What started as MCs
                congregating in a rehearsal studio soon turned into one of Hip
                Hop’s most respected brands. Establishing the Lyricist Lounge as
                a platform &amp; blueprint for discovering emerging Hip Hop
                talent. Mr. Marshall helped develop a Hip Hop musical/comedy
                sketch show entitled ‘The Lyricist Lounge Show’. The show was
                then sold to MTV and became one of their highest rated programs.
                In 2005, he helped to launch ’Current TV’ [Al Gore&apos;s TV
                network], aiding in the development of the company&apos;s VC2
                (Viewer Created Content) initiative. In 2009, he developed an
                HIV awareness campaign named &apos;Greater Than AIDS&apos;
                [Kaiser Family Foundation]. In 2010, he acted as an Executive
                Producer on ‘Master of the Mix’ [a Branded Content TV series
                about DJs funded by Smirnoff] which aired on BET and VH1 for
                three seasons. He is now preparing to celebrate his 30th year
                with Lyricist Lounge and looks forward to opening (digital +
                IRL) venues in its name throughout the world. His latest venture
                includes the launch of the Lyricist Lounge DAO, a WEB3
                collective of cultural mavens, content creators, developers,
                programmers, artists, and music producers.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="home-author">
                <span className="home-name">Ant Marshall</span>
                <span className="home-location">Co-Founder</span>
              </div>
            </div>
            <div className="home-quote2">
              <p className="home-quote3">
                Russ Leads Community at the NEAR Digital Collective. Russ is
                dedicated to building the intersection between tech and culture,
                and is on a mission to bridge the gap for kids to get into tech.
                As a co-founder of the &quot;40 Acres and a DAO&quot;
                initiative, Russ is working to create sustainable communities of
                color through education, empowerment, and engagement. In
                addition to this, Russ is building the Proof of Vibes protocol,
                the first blockchain-based platform that rewards users for their
                good vibes and positive contributions to the community.
              </p>
              <div className="home-author1">
                <span className="home-name1">Russell Ballard</span>
                <span className="home-location1">Chief Vibe Officer</span>
              </div>
            </div>
            <div className="home-quote4">
              <p className="home-quote5">
                Shot is the President of Minority Programmers, Head of
                Decentralization at Banyan Collective. Founder of Genadrop, a
                multichain marketplace and NFT tool. Chief Sobriety Officer at
                Blunt DAO. Contributor at GWG, NEAR Digital Collective, Advisor
                at Components.gg, &amp; Ecosystem at Keypom.
              </p>
              <div className="home-author2">
                <span className="home-name2">Shot</span>
                <span className="home-location2">Proof of Tech</span>
              </div>
            </div>
            <div className="home-quote6">
              <p className="home-quote7">A ceritificed CPA </p>
              <div className="home-author3">
                <span className="home-name3">Ben Hout</span>
                <span className="home-location3">Chief Finance Officer</span>
              </div>
            </div>
          </div>
          {/* <div className="home-controls">
            <button className="home-previous button">
              <svg viewBox="0 0 1024 1024" className="home-icon5">
                <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
            </button>
            <button className="home-next button">
              <svg viewBox="0 0 1024 1024" className="home-icon7">
                <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </button>
            <button className="home-button2 button">
              <span>
                <span>See the Team</span>
                <br></br>
              </span>
            </button>
          </div> */}
        </section>
        <section className="home-faq">
          <div className="home-header06">
            <h2 className="home-heading3">
              <span>Frequently </span>
              <span className="home-text18">vibed </span>
              <span>questions</span>
            </h2>
          </div>
          <div className="home-content2">
            <div className="home-column">
              <div className="home-element">
                <h3 className="home-header07">How do I earn a vibe?</h3>
                <p className="home-content3">
                  Go to an event, tap in, and get your Proof of Vibe approved by
                  a tastemaker.
                </p>
              </div>
              <div className="home-element1">
                <h3 className="home-header08">Who can curate events?</h3>
                <p className="home-content4">
                  Only qualified tastemakers in the DAO can setup vibe checks.
                </p>
              </div>
              <div className="home-element2">
                <h3 className="home-header09">How can I earn?</h3>
                <p className="home-content5">
                  Sign up for the NEAR Digital Collective&apos;s program
                </p>
              </div>
            </div>
            <div className="home-column1">
              <div className="home-element3">
                <h3 className="home-header10">What is a Proof of Vibe?</h3>
                <p className="home-content6">
                  A Proof of Vibe is a verified non transferable credential that
                  verifies you vibes with vibe scores embedded into the
                  metadata. A protocols for vibees and tastemakers for IRL
                  experiences.
                </p>
              </div>
              <div className="home-element4">
                <h3 className="home-header11">Who picks tastemakers?</h3>
                <p className="home-content7">
                  <span className="home-text20">
                    Check out the Vibe DAO at proofofvibe.com/dao
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="home-footer">
          <div className="home-content8">
            <div className="home-main">
              <div className="home-branding1">
                <img
                  alt="image"
                  src="/proofofvibesverticalwhite.svg"
                  className="home-image2"
                />
                <span className="home-text22">
                  Vibe to earn protocol powered by tastemakers globally.
                </span>
              </div>
              <div className="home-links">
                <div className="home-column2">
                  <span className="home-header12">Learn More</span>
                  <div className="home-list">
                    <a
                      href="https://proofofvibes.com/twitter"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link06"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://proofofvibes.com/bos"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link07"
                    >
                      #BOS
                    </a>
                    <a
                      href="https://proofofvibes.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link08"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://proofofvibes.com/about"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link09"
                    >
                      <span className="home-text23">VibePaper</span>
                      <br></br>
                    </a>
                  </div>
                </div>
                <div className="home-column3">
                  <span className="home-header13">Vibe</span>
                  <div className="home-list1">
                    <a
                      href="https://proofofvibes.com/events"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link10"
                    >
                      Events
                    </a>
                    <a
                      href="https://https:/proofofvibes.com/tastemakers"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link11"
                    >
                      Tastemakers
                    </a>
                    <a
                      href="https://proofofvibes.com/human"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link12"
                    >
                      Verify Human
                    </a>
                    <a
                      href="https://proofofvibes.com/human"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link13"
                    >
                      DAO
                    </a>
                    <a
                      href="https://proofofvibes.com/members"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link14"
                    >
                      <span>Vib</span>
                      <span>ees</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-bottom">
              <span className="home-text27">
                © 2023 Proof of Vibes - All rights reserved
              </span>
              <button data-role="scroll-top" className="home-button3 button">
                <img alt="image" src="/arrow.svg" className="home-image3" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <Script
            html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
          ></Script>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-video {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: opacity(0.6);
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .home-branding {
            width: var(--dl-size-size-xxlarge);
            align-self: flex-end;
            object-fit: cover;
          }
          .home-burger-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-hamburger {
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
            background-color: #b79bc7;
          }
          .home-hamburger:hover {
            opacity: 0.5;
          }
          .home-icon {
            width: 60px;
            object-fit: cover;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            color: var(--dl-color-gray-white);
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image {
            height: 2rem;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon1 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link01 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link02 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link03 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
            background-color: rgb(183, 155, 199);
          }
          .home-register {
            text-decoration: none;
            background-color: rgb(232, 166, 170);
          }
          .home-icon-group {
            fill: var(--dl-color-gray-white);
            display: flex;
          }
          .home-link04 {
            display: contents;
          }
          .home-icon3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-hero-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header-container {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading {
            color: rgb(255, 255, 255);
            font-size: 100px;
            max-width: 790px;
            font-style: normal;
            font-weight: 500;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-link05 {
            text-decoration: none;
            background-color: #b79bc7;
          }
          .home-note {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-end;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: flex-start;
          }
          .home-caption1 {
            color: rgb(124, 124, 128);
            font-size: 40px;
            max-width: 800px;
            font-style: normal;
            font-weight: 400;
            line-height: 52px;
            margin-right: 158px;
          }
          .home-statistics {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-content {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #313133;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 1px;
            border-bottom-width: 1px;
          }
          .home-stat {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
          }
          .home-header01 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: Playfair Display;
            font-weight: 500;
            line-height: 73px;
          }
          .home-caption2 {
            color: rgb(124, 124, 128);
            font-size: 16px;
            line-height: 24px;
          }
          .home-stat1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
          }
          .home-header02 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: Playfair Display;
            font-weight: 500;
            line-height: 73px;
          }
          .home-caption3 {
            color: rgb(124, 124, 128);
            font-size: 16px;
            line-height: 24px;
          }
          .home-stat2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-header03 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: Playfair Display;
            font-weight: 500;
            line-height: 73px;
          }
          .home-caption4 {
            color: rgb(124, 124, 128);
            font-size: 16px;
            line-height: 24px;
          }
          .home-get-started {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
          }
          .home-header-container1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            z-index: 100;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header04 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading1 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-caption5 {
            color: rgb(124, 124, 128);
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-button {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-button1 {
            text-decoration: none;
            background-color: #b79bc7;
          }
          .home-image1 {
            top: 0px;
            right: 0px;
            width: 720px;
            bottom: 0px;
            margin: auto;
            opacity: 0.3;
            position: absolute;
            object-fit: cover;
          }
          .home-objectives {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #313133;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-top-width: 1px;
          }
          .home-objectives-list {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 940px;
            display: flex;
            align-items: flex-start;
            margin-right: 89px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text06 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text07 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-text08 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text09 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-text10 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text11 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-customer {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-header05 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            flex-direction: column;
          }
          .home-heading2 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            max-width: 900px;
            font-style: normal;
            font-weight: 400;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
          }
          .home-quotes {
            width: 100%;
            display: flex;
            position: relative;
            overflow-x: hidden;
            align-items: flex-start;
            margin-left: max(0px, (100% - 1240px)/2);
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            border-top-width: 1px;
            border-bottom-width: 1px;
          }
          .home-quote {
            gap: var(--dl-space-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-quote1 {
            color: rgb(124, 124, 128);
            width: 456px;
            font-size: 16px;
            max-width: 400px;
            line-height: 24px;
            letter-spacing: 1%;
          }
          .home-author {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 1%;
          }
          .home-location {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 1%;
          }
          .home-quote2 {
            gap: var(--dl-space-space-threeunits);
            width: 637px;
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-quote3 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 16px;
            max-width: 400px;
            line-height: 24px;
            letter-spacing: 1%;
          }
          .home-author1 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name1 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 1%;
          }
          .home-location1 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 1%;
          }
          .home-quote4 {
            gap: var(--dl-space-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-quote5 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 16px;
            max-width: 400px;
            line-height: 24px;
            letter-spacing: 1%;
          }
          .home-author2 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name2 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 1%;
          }
          .home-location2 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 1%;
          }
          .home-quote6 {
            gap: var(--dl-space-space-threeunits);
            width: 272px;
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-quote7 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 16px;
            max-width: 400px;
            line-height: 24px;
            letter-spacing: 1%;
          }
          .home-author3 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name3 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 1%;
          }
          .home-location3 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 1%;
          }
          .home-controls {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .home-previous {
            display: flex;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            background-color: #b79bc7;
          }
          .home-icon5 {
            fill: #ffffff;
            width: 24px;
            height: 24px;
          }
          .home-next {
            display: flex;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            background-color: #b79bc7;
          }
          .home-icon7 {
            fill: #ffffff;
            width: 24px;
            height: 24px;
          }
          .home-button2 {
            background-color: #b79bc7;
          }
          .home-faq {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-header06 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-heading3 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text18 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-content2 {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-column {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-element {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header07 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content3 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header08 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content4 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header09 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content5 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-column1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-element3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header10 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content6 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header11 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content7 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-content8 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-top-width: 1px;
          }
          .home-main {
            gap: 240px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-branding1 {
            gap: var(--dl-space-space-twounits);
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image2 {
            width: var(--dl-size-size-xxlarge);
            object-fit: cover;
          }
          .home-text22 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-links {
            gap: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-column2 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header12 {
            font-size: 24px;
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-list {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link06 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link06:hover {
            opacity: 0.5;
          }
          .home-link07 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link07:hover {
            opacity: 0.5;
          }
          .home-link08 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link08:hover {
            opacity: 0.5;
          }
          .home-link09 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link09:hover {
            opacity: 0.5;
          }
          .home-text23:hover {
            opacity: 0.5;
          }
          .home-column3 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header13 {
            font-size: 24px;
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-list1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link10 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link10:hover {
            opacity: 0.5;
          }
          .home-link11 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link11:hover {
            opacity: 0.5;
          }
          .home-link12 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link12:hover {
            opacity: 0.5;
          }
          .home-link13 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link13:hover {
            opacity: 0.5;
          }
          .home-link14 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link14:hover {
            opacity: 0.5;
          }
          .home-bottom {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text27 {
            color: rgb(124, 124, 128);
            font-size: 14px;
            line-height: 21px;
          }
          .home-button3 {
            display: flex;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: 0px;
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #b79bc7;
          }
          .home-image3 {
            width: 21px;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .home-hero-content {
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content {
              padding-top: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-stat {
              width: 100%;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-stat1 {
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-stat2 {
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-content1 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-objectives-list {
              padding-right: 0px;
            }
            .home-objective1 {
              flex: 1;
            }
            .home-objective2 {
              flex: 1;
            }
            .home-customer {
              max-width: 1400px;
              padding-left: var(--dl-space-space-fiveunits);
              padding-right: var(--dl-space-space-fiveunits);
            }
            .home-header05 {
              max-width: 100%;
            }
            .home-heading2 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-quotes {
              padding-top: 0px;
              flex-direction: column;
              border-bottom-width: 0px;
            }
            .home-quote {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote1 {
              font-size: 16px;
              max-width: 100%;
            }
            .home-quote2 {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote3 {
              font-size: 16px;
              max-width: 100%;
            }
            .home-quote4 {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote5 {
              font-size: 16px;
              max-width: 100%;
            }
            .home-quote6 {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote7 {
              font-size: 16px;
              max-width: 100%;
            }
            .home-controls {
              max-width: 100%Width;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-previous {
              display: none;
            }
            .home-next {
              display: none;
            }
            .home-faq {
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-content2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-column {
              max-width: 100%;
            }
            .home-header07 {
              font-size: 24px;
            }
            .home-content3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header08 {
              font-size: 24px;
            }
            .home-content4 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header09 {
              font-size: 24px;
            }
            .home-content5 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-column1 {
              max-width: 100%;
            }
            .home-header10 {
              font-size: 24px;
            }
            .home-content6 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header11 {
              font-size: 24px;
            }
            .home-content7 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-text20 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content8 {
              border-top-width: 0px;
            }
            .home-main {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-branding1 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-burger-menu {
              display: flex;
            }
            .home-heading {
              font-size: 60px;
            }
            .home-note {
              align-items: flex-start;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-caption1 {
              font-size: 18px;
              max-width: 90%;
              line-height: 23px;
              margin-right: 0px;
            }
            .home-statistics {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-stat {
              gap: var(--dl-space-space-unit);
            }
            .home-header01 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-stat1 {
              gap: var(--dl-space-space-unit);
            }
            .home-header02 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-stat2 {
              gap: var(--dl-space-space-unit);
            }
            .home-header03 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption4 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-get-started {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading1 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption5 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image1 {
              width: 300px;
            }
            .home-objectives {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-objectives-list {
              width: 100%;
              flex-direction: column;
            }
            .home-customer {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-quote {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote1 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-author {
              width: 100%;
            }
            .home-name {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-location {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-quote2 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote3 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-author1 {
              width: 100%;
            }
            .home-name1 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-location1 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-quote4 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote5 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-author2 {
              width: 100%;
            }
            .home-name2 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-location2 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-quote6 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote7 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-author3 {
              width: 100%;
            }
            .home-name3 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-location3 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-icon5 {
              width: 14px;
              height: 14px;
            }
            .home-icon7 {
              width: 14px;
              height: 14px;
            }
            .home-faq {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-header06 {
              gap: var(--dl-space-space-unit);
              align-items: center;
            }
            .home-heading3 {
              font-size: 36px;
            }
            .home-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-element {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header07 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-element1 {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header08 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-element2 {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header09 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-element3 {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header10 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-element4 {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header11 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-links {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .home-branding {
              padding-top: var(--dl-space-space-unit);
            }
            .home-hamburger {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-icon {
              width: 30px;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-hero-content {
              gap: var(--dl-space-space-threeunits);
            }
            .home-heading {
              font-size: 36px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-link05 {
              text-align: center;
            }
            .home-image1 {
              height: 400px;
            }
            .home-text06 {
              font-size: 18px;
            }
            .home-text08 {
              font-size: 18px;
            }
            .home-text10 {
              font-size: 18px;
            }
            .home-button2 {
              text-align: center;
            }
            .home-header06 {
              gap: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
            .home-links {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-bottom {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .home-button3 {
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
