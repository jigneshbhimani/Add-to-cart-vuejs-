import axios from "axios";
import { products } from "./getters";

export function getProducts({ commit }) {
  axios
    .get("http://localhost:3000/products")
    .then((response) => {
      commit("SET_PRODUCTS", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function productDetails({ commit }, id) {
  axios
    .get("http://localhost:3000/products", { params: { id: id } })
    .then((response) => {
      commit("SET_PRODUCT", response.data[0]);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function addCart({ commit, getters }, payload) {
  let cart = getters.cart;
  let data = payload.product;
  data["quantity"] = payload.quantity;
  cart.push(data);
  commit("SET_CART", cart);
}

export function removeCart({ commit, getters }, id) {
  let cart = [];
  if (id) {
    for (let index = 0; index < getters.cart.length; index++) {
      const element = getters.cart[index];
      if (element.id !== id) {
        cart.push(element);
      }
    }
  }
  commit("SET_CART", cart);
}

// export function updateProduct({ commit }, { id, product }) {
//   console.log(id, "id");
//   console.log(product, "product");
//   axios
//     .put(
//       `http://localhost:3000/products/${this.$route.params.id}`,
//       this.product
//     )
//     .then((response) => {
//       console.log(response);
//       router.push("/details/" + this.$route.params.id);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
