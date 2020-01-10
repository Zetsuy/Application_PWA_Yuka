<template>
    <div class="products">
        <qrcode-stream @decode="onDecode"></qrcode-stream>
        <qrcode-drop-zone></qrcode-drop-zone>
        <qrcode-capture></qrcode-capture>
        <product v-for="(product,i) in products" :key="i" class="product" :product="product">
        </product>
    </div>
</template>

<script>
import { mapActions,mapState } from 'vuex'

import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

import Product from '~/components/Product'

  

export default{

   
    mounted(){
        this.fetchProducts()
    },

    components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
    },
    computed : mapState({
        products: state => state.products
    }),

    methods: {
       onDecode: function(result) {
      const matchingProduct = this.products.find(
        product => product.bar_code === result
      )

      this.$router.push({
        path: matchingProduct ? `product/${matchingProduct._id}` : '404'
      })
    },
        ...mapActions(['fetchProducts'])
    }
}
</script>

<style>

@font-face {
    font-family: "yuka";
    src: url("./../assets/yuka.woff2") format("woff2");
  }

.products{
    display:flex;
    flex-direction:column;
}
.product{
    display:flex;
    padding:15px;
    border-bottom: 1px solid grey;
    width:90%;
    align-self:center;
}
.img-product{
    width:30%;
}

.img-product img{
    width:30%;
}

ul {
list-style:none;
margin-left:0;
padding-left:0;
}
li {
margin-bottom:15px;/* à adapter */
}

.ingredient {
    margin-left: 30px;
}

</style>