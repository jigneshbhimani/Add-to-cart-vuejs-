<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <h3 class="navbar-brand">Vue.js</h3>
      </nav>
    </div>
    <h3 style="color: red; font-weight: 900">UPDATE PRODUCT</h3>
    <br />
    <form>
      <div class="form-group row">
        <label class="col-sm col-form-label"><b>Title</b></label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="productDetailData.title"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm col-form-label"><b>Price</b></label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="productDetailData.price"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm col-form-label"><b>Description</b></label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="productDetailData.description"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm col-form-label"><b>Color</b></label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="productDetailData.color"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm col-form-label"><b>Size</b></label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="productDetailData.size"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm col-form-label"><b>Company</b></label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control input-sm"
            v-model="productDetailData.company"
          />
        </div>
      </div>
    </form>
    <button class="btn btn-primary" @click="updateProduct">UPDATE</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditProduct",
  props: { updateProducts: Object },
  data() {
    return {
      productDetailData: {},
    };
  },
  mounted() {
    this.productDetailData = this.updateProducts;
  },
  methods: {
    updateProduct(e) {
      let data = {
        title: e.title,
        price: e.price,
        description: e.description,
        color: e.color,
        size: e.size,
        company: e.company,
      };
      axios
        .put(`http://localhost:3000/products/${id}`, data)
        .then((response) => {
          console.log("response", response);
          this.$router.push("/app");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.form-control {
  width: 60%;
  background-color: lightskyblue;
}
</style>
