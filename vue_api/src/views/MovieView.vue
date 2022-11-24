<template>
  <div>
    <HeaderCont />
    <TitleCont name1="movie" name2="reference api" />
    <section class="cont__refer">
      <div class="container">
        <div class="movie__inner">
          <div class="movie__slider">
            <swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="'auto'"
              :initialSlide="3"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :coverflowEffect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }"
              :pagination="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="slider in sliders" :key="slider.id">
                <div class="item">
                  <a :href="`https://image.tmdb.org/movie/${slider.id}`">
                    <img
                      :src="`https://image.tmdb.org/t/p/w500/${slider.poster_path}`"
                      :alt="slider.title"
                    />
                  </a>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <!-- movie__slider -->

          <div class="movie__search">
            <div class="container">
              <form @submit.prevent="SearchMovies()">
                <input
                  type="search"
                  id="search"
                  placeholder="검색하시요"
                  v-model="search"
                />
                <button type="submit">검색</button>
              </form>
            </div>
          </div>
          <!-- //movie__search -->

          <div class="movie__movies">
            <div class="container">
              <div class="movie__list">
                <ul>
                  <li v-for="movie in movies" :key="movie.id">
                    <a :href="`https://image.tmdb.org/movie/${movie.id}`">
                      <img
                        :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                        :alt="movie.title"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- //movie__movies -->
        </div>
      </div>
    </section>
    <FooterCont />
    <ContactCont />
  </div>
</template>

<script>
import HeaderCont from "@/components/HeaderCont.vue";
import FooterCont from "@/components/FooterCont.vue";
import TitleCont from "@/components/TitleCont.vue";
import ContactCont from "@/components/ContactCont.vue";
import { ref } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default {
  components: {
    HeaderCont,
    FooterCont,
    TitleCont,
    ContactCont,
    Swiper,
    SwiperSlide,
  },

  setup() {
    const movies = ref([]);
    const sliders = ref([]);
    const search = ref("marvel");

    const SearchMovies = async () => {
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=9278d13f704ad0fe53c2263b692efd89&query=${search.value}`
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          movies.value = result.results;
          search.value = "";
        })
        .catch((error) => console.log(error));
    };

    SearchMovies();

    const TopMovies = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=9278d13f704ad0fe53c2263b692efd89&`
      )
        .then((response) => response.json())
        .then((result) => (sliders.value = result.results))
        .catch((error) => console.log(error));
    };
    TopMovies();

    return {
      movies,
      sliders,
      search,
      SearchMovies,
      TopMovies,
      modules: [EffectCoverflow, Pagination, Autoplay],
    };
  },
};
</script>

<style lang="scss">
.movie__list {
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      width: 19%;
      margin-bottom: 2%;
    }
  }
}
.movie__search {
  margin-bottom: 100px;

  .container {
    position: relative;
  }

  h2 {
    color: var(--white);
    font-size: 40px;
    text-indent: -9999px;
    height: 0;
  }
  input {
    background: var(--bg-light-border);
    border: 1px solid var(--bg-light-border);
    border-radius: 50px;
    color: #fff;
    width: 100%;
    padding: 14px 30px;
    font-family: var(--font-kor2);
  }
  button {
    position: absolute;
    right: 6px;
    top: 5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 0;
    font-family: var(--font-kor2);
    cursor: pointer;
    z-index: 1000;
    background: #fff;
  }
}
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
