<template>
  <div>
    <HeaderLayout fonts="nexon" />
    <SliderSection fonts="nexon" />
    <ImageSection attr="section nexon" layout="container" />
    <ImgTextSection attr="section nexon gray" layout="container" />
    <CardSection attr="section nexon" layout="container" />
    <BannerSection fonts="gmark" />
    <TextSection attr="section nexon" layout="container" />
    <FooterLayout attr="section nexon gray" layout="container" />
  </div>
</template>

<script>
import FooterLayout from "./components/layout/FooterLayout.vue";
import HeaderLayout from "./components/layout/HeaderLayout.vue";
import BannerSection from "./components/section/BannerSection.vue";
import CardSection from "./components/section/CardSection.vue";
import ImageSection from "./components/section/ImageSection.vue";
import ImgTextSection from "./components/section/ImgTextSection.vue";
import SliderSection from "./components/section/SliderSection.vue";
import TextSection from "./components/section/TextSection.vue";

export default {
  name: "App",
  components: {
    HeaderLayout,
    FooterLayout,
    SliderSection,
    ImageSection,
    ImgTextSection,
    CardSection,
    BannerSection,
    TextSection,
  },
};
</script>
