<template>
  <section className="cont__title">
    <div className="container">
      <h1>
        <strong>{{ name1 }}</strong>
        <em>{{ name2 }}</em>
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name1: String,
    name2: String,
  },
};
</script>

<style lang="scss"></style>
