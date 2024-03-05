import Head from "next/head";
import Card from "../components/Card";
import Cta from "../components/Cta";
import Div from "../components/Div";
import FunFact from "../components/FunFact";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import LogoList from "../components/LogoList";
import MovingText from "../components/MovingText";
import SectionHeading from "../components/SectionHeading";
import PortfolioSlider from "../components/Slider/PortfolioSlider";
import PostSlider from "../components/Slider/PostSlider";
import TeamSlider from "../components/Slider/TeamSlider";
import TestimonialSlider from "../components/Slider/TestimonialSlider";
import TimelineSlider from "../components/Slider/TimelineSlider";
import Spacing from "../components/Spacing";
import VideoModal from "../components/VideoModal";

export default function Home() {
  // Hero Social Links
  const heroSocialLinks = [
    {
      name: "Behance",
      links: "/",
    },
    {
      name: "Twitter",
      links: "/",
    },
  ];

  // FunFact Data
  const funfaceData = [
    {
      title: "Range of colors",
      factNumber: "100",
    },
    {
      title: "Orders Completed",
      factNumber: "300",
    },
    {
      title: "Happy Customers",
      factNumber: "120",
    },
    {
      title: "Total USP",
      factNumber: "10",
    },
  ];

  return (
    <>
      <Head>
        <title>Expoxy Floors Brisbane</title>
        <meta name="description" content="Floorig in Brisbane" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Layout>
        {/* Start Hero Section */}
        <Hero
          // title="Creativity In <br/>Our Blood Line"
          title="Elevate Your Space with Epoxy Flooring"
          subtitle="Transform your floors with our seamless epoxy solutions - durable, stylish, and customizable to suit any home or business. Experience the difference today."
          btnText="Get a Quote"
          btnLink="/"
          scrollDownId="#service"
          socialLinksHeading="Follow Us"
          heroSocialLinks={heroSocialLinks}
          bgImageUrl="/images/hero_bg.jpeg"
        />
        {/* End Hero Section */}

        {/* Start FunFact Section */}
        <div className="container">
          <FunFact
            variant="cs-type1"
            title=" Facts about Epoxy Flooring"
            subtitle="Uncover the secret behind epoxy flooring - a seamless blend of durability and style. From its chemical resistance to its wide range of colors and textures, epoxy flooring offers a solution for every space."
            data={funfaceData}
          />
        </div>
        {/* End FunFact Section */}

        {/* Start Service Section */}
        <Spacing lg="150" md="80" />
        <Div id="service">
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Services we can help you with"
                  subtitle="What Can We Do"
                  btnText="See All Services"
                  btnLink="/"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-8">
                <Div className="row">
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Epoxy Floor Systems"
                      link="/"
                      src="/images/service_1.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Driveways"
                      link="/"
                      src="/images/service_2.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Cleaning"
                      link="/"
                      src="/images/service_3.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Deep Cleaning"
                      link="/"
                      src="/images/service_4.jpeg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Service Section */}

        {/* Start Portfolio Section */}
        {/* <Spacing lg="150" md="50" />
        <Div>
          <Div className="container">
            <SectionHeading
              title="Portfolio to explore"
              subtitle="Latest Projects"
              variant="cs-style1 text-center"
            />
            <Spacing lg="90" md="45" />
          </Div>
          <PortfolioSlider />
        </Div> */}
        {/* End Portfolio Section */}

        {/* Start Awards Section */}
        {/* <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_2">
          <Div className="cs-shape_2">
            <Div />
          </Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="We get multiple awards"
                  subtitle="Our Awards"
                  variant="cs-style1"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <TimelineSlider />
              </Div>
            </Div>
          </Div>
        </Div> */}
        {/* End Awards Section */}

        {/* Start Video Block Section */}
        <Spacing lg="130" md="70" />
        <Div className="container">
          <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
            Epoxy flooring: durable, low maintenance, resistant to chemicals and
            oils, customizable, non-slip, and seamless.
          </h2>
          <Spacing lg="70" md="70" />
          <VideoModal
            videoSrc="hhttps://www.youtube.com/watch?v=WT99aOwnOzk"
            bgUrl="https://www.signatureepoxyflooring.com.au/themes/sp/images/Signature_Flooring_153x110.png"
          />
        </Div>
        {/* End Video Block Section */}

        {/* Start Team Section */}
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Awesome team <br/>members"
            subtitle="Our Team"
            variant="cs-style1"
          />
          <Spacing lg="85" md="45" />
          <TeamSlider />
        </Div>
        <Spacing lg="150" md="80" />
        {/* End Team Section */}

        {/* Start Testimonial Section */}
        <TestimonialSlider />
        {/* End Testimonial Section */}

        {/* Start Blog Section */}
        {/* <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Explore recent publication"
                  subtitle="Our Blog"
                  btnText="View More Blog"
                  btnLink="/blog"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <Div className="cs-half_of_full_width">
                  <PostSlider />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div> */}
        {/* End Blog Section */}

        {/* Start MovingText Section */}
        <Spacing lg="125" md="70" />
        <MovingText text="Our reputed Customers" />
        <Spacing lg="105" md="70" />
        {/* End MovingText Section */}

        {/* Start LogoList Section */}
        <Div className="container">
          <LogoList />
        </Div>
        <Spacing lg="150" md="80" />
        {/* End LogoList Section */}

        {/* Start CTA Section */}
        <Div className="container">
          <Cta
            title="Let’s  make <br />your floor <i>cool</i> together"
            btnText="Request Quote"
            btnLink="/"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}
