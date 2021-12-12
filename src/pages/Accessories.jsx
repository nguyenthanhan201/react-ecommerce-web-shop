import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import accessoriesData from "../assets/fake-data/products";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import ProductCard from "../components/ProductCard";
import Section, { SectionBody, SectionTitle } from "../components/Section";

const Accessories = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Helmet title="Phụ Kiện">
        <Section>
          <SectionTitle>Phụ Kiện</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={10}>
              {accessoriesData.data2.cardData2.map((item) => (
                <div data-aos="flip-left">
                  <ProductCard
                    key={item.title}
                    img01={item.image01}
                    img02={item.image02}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                </div>
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </Helmet>
    </div>
  );
};

export default Accessories;
