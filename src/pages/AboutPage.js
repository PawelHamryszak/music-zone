import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Music Zone welcomes you with open arms! We are a haven for music
            lovers, offering a diverse range of instruments, equipment, and
            accessories to cater to your musical needs. Our mission is to
            inspire and empower musicians of all levels to express themselves
            through the universal language of music. With our knowledgeable
            staff and wide selection of products, we strive to provide an
            exceptional shopping experience. Step into Music Zone and embark on
            a melodious journey where your musical dreams come alive. Let the
            power of music ignite your soul at Music Zone!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
