<template>
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 6 : 2} `">
      <div class="section">
        <div class="card is-clearfix columns">
          <figure class="card-image column is-one-thirds">
            <img class="thumbnail" style="border-radius: 10px;" src="../assets/foo.jpg">
          </figure>
          <div class="mx-3">
            <div class="card-content__title">
              <h2 class="title is-4">{{ product.title }}</h2>
            </div>
            <div class="card-content__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud {{ product.rating }}
              </p>
            </div>

            <v-layout row style="margin-top: -6%;">
              <v-flex d-flex xs12 sm6 md8>
                <v-layout column>
                  <v-flex>
                    <div v-if="product.rating == 1">
                      <i class="fa fa-star"></i>
                    </div>
                    <div v-else-if="product.rating === 2">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div v-else-if="product.rating === 3">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div v-else-if="product.rating === 4">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div v-else-if="product.rating === 5">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </v-flex>
                  <v-flex style="margin-top:-5%;">
                    <div class="card-content__reviews">
                      <div class="is-pulled-left">
                        <p>
                          <strong>{{ product.reviews > 0 ? `${product.reviews} Reviews` : 'No reviews' }}</strong>
                        </p>
                      </div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex d-flex xs12 sm6 md10>
                <div class="card-content__price is-pulled-left">
                  <span class="title is-3">
                    <strong>{{ product.price }}&euro;</strong>
                  </span>
                </div>
              </v-flex>
            </v-layout>

            <v-layout justify-center row style="margin-top: -12%;">
              <v-flex>
                <v-btn class="mx-5" icon>
                  <v-icon size="30px">fa fa-heart</v-icon>
                </v-btn>
              </v-flex>
              <v-divider class="mb-2" vertical></v-divider>
              <v-divider class="mb-2" vertical></v-divider>

              <v-flex>
                <v-btn class="mx-5" icon>
                  <v-icon size="30px">fa fa-comment</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
import "font-awesome/css/font-awesome.css";

export default {
  name: "product-detail-component",

  data() {
    return {
      addToCartLabel: "Add to cart",
      removeFromCartLabel: "Remove from cart",
      addToFavouriteLabel: "Add to favourite",
      removeFromFavouriteLabel: "Remove from favourite",
      product: {},
      products: [
        {
          id: 1,
          title: "Product 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 50,
          rating: 3,
          reviews: 5,
          isAddedToCart: false,
          isAddedBtn: false,
          isFavourite: false,
          quantity: 1
        },
        {
          id: 2,
          title: "Product 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 35,
          rating: 5,
          reviews: 10,
          isAddedToCart: false,
          isAddedBtn: false,
          isFavourite: false,
          quantity: 1
        },
        {
          id: 3,
          title: "Product 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 110,
          rating: 2,
          reviews: 3,
          isAddedToCart: false,
          isAddedBtn: false,
          isFavourite: false,
          quantity: 1
        }
      ],

      selected: 1,
      quantityArray: []
    };
  },
  mounted() {
    (this.product = this.products[0]), (this.selected = this.product.quantity);
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }
  },
  computed: {
    isAddedBtn() {
      return this.product.isAddedBtn;
    }
  },
  methods: {
    addToCart(id) {
      let data = {
        id: id,
        status: true
      };
      t; //his.$store.commit('addToCart', id);
      //this.$store.commit('setAddedBtn', data);
    },
    removeFromCart(id) {
      let data = {
        id: id,
        status: false
      };
      //this.$store.commit('removeFromCart', id);
      //this.$store.commit('setAddedBtn', data);
    },

    saveToFavorite(id) {
      let isUserLogged = this.$store.state.userInfo.isLoggedIn;
      if (isUserLogged) {
        this.$store.commit("addToFavourite", id);
      } else {
        //this.$store.commit('showLoginModal', true);
      }
    },
    removeFromFavourite(id) {
      //this.$store.commit('removeFromFavourite', id);
    }
  }
};
</script>

<style lang="scss" scoped>
.card-content {
  padding: 15px 10px 15px 0;
  &__text {
    margin: 15px 0;
  }
  &__reviews {
    display: inline-block;
    width: 100%;
    margin-bottom: 10px;
  }
}

.thumbnail {
  display: inline-block;
  max-width: 100%; /* only this one important */
  margin-bottom: 1rem;
  border: solid 4px #fefefe;
  border-radius: 3px;
  box-shadow: 0 0 0 1px rgba(10, 10, 10, 0.2);
  line-height: 0;
}
</style>