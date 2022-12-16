<template>
  <div>
    <HeaderCont />
    <TitleCont name1="reference" name2="api" />

    <section className="cont__refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            <li v-for="refer in refers" :key="refer.title">
              <a href="/">
                <span>{{ refer.title }}</span>
                <span>{{ refer.desc }}</span>
                <span>{{ refer.star }}</span>
              </a>
            </li>
          </ul>
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

export default {
  components: {
    HeaderCont,
    FooterCont,
    TitleCont,
    ContactCont,
  },

  setup() {
    const refers = ref([]);

    const references = () => {
      fetch(
        "https://webstoryboy.github.io/webstoryboy/react_api/src/utils/cssRefer.json"
      )
        .then((response) => response.json())
        // .then((result) => console.log(result.data.css))
        .then((result) => (refers.value = result.data.css))
        .catch((error) => console.log("error", error));
    };
    references();

    return {
      refers,
      references,
    };
  },
};
</script>

<style lang="scss">
.refer__inner {
  padding-bottom: 200px;

  h2 {
    font-size: 30px;
    color: var(--black);
  }
}

.refer__list {
  border: 1px solid var(--bg-dark-border);
  border-top-width: 2px;

  li {
    border-bottom: 1px solid var(--bg-dark-border);
    a {
      display: flex;
      align-items: center;
      width: 100%;
      color: var(--black);
      font-family: var(--font-kor2);

      span {
        display: inline-block;
        padding: 15px 20px;
      }

      .num {
        flex: 1 1 5%;
        text-align: center;
        border-right: 1px solid var(--bg-dark-border);
      }
      .name {
        flex: 1 1 20%;
        border-right: 1px solid var(--bg-dark-border);
      }
      .desc {
        flex: 1 1 65%;
        border-right: 1px solid var(--bg-dark-border);
      }
      .star {
        flex: 1 1 10%;
        text-align: center;
      }
    }
  }
}
</style>
