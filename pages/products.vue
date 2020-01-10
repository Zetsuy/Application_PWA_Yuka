<template>
    <div class="products">
        <qrcode-stream @decode="onDecode"></qrcode-stream>
        <qrcode-drop-zone></qrcode-drop-zone>
        <qrcode-capture></qrcode-capture>
        <div v-for='(product,i) in products' :key='i' class="product">
            <div class = "products__infos">
                
                <div class = "products__name">{{product.name}}</div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions,mapState } from 'vuex'

import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'


  

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

 /* data: function(){
        return{
            products: [
                {   
                    name: "Lipton Ice Tea", 
                    photo: "/img/lipton_icetea.jpg",
                    bar_code : "3228886030011",
                    brand : "Lipton" ,
                    grade : "4",
                    quantity : "50cl",
                    ingredients : [{"name" : "eau",proportion : ""},
                                   {"name" : "sucre",proportion : ""},
                                   {"name" : "fructose",proportion : ""},
                                   {"name" : "acidifiants",proportion : ""},
                                   {"name" : "extrait de thé noir",proportion : "1,4g/l"},
                                   {"name" : "jus de pêche à base de concentre",proportion : "0.1%"},
                                   {"name" : "correcteur d'acidité",proportion : ""},
                                   {"name" : "aromes",proportion : ""},
                                   {"name" : "antioxydant",proportion : ""},
                                   {"name" : "edulcorant",proportion : ""}]
                    
                 },
                {
                    name: "Coca cola",
                    photo: "/img/coca_cola.jpg",
                    bar_code : "5449000000286" ,
                    brand : "The Coca-Cola Company" ,
                    grade : "3.5",
                    quantity : "1.5L" ,
                    ingredients : [{"name" : "eau",proportion : ""},
                                   {"name" : "sucre",proportion : ""},
                                   {"name" : "acide carbonique",proportion : ""},
                                   {"name" : "colorant caramel",proportion : ""},
                                   {"name" : "acidifiant E338",proportion : ""},
                                   {"name" : "aromes naturels",proportion : ""},
                                   {"name" : "contient cafeine",proportion : ""}]
                    
                },
                {
                    name: "Fanta citron",
                    photo: "/img/fanta.jpg",
                    bar_code : "5000112631692"  ,
                    brand : "The Coca-Cola Company" ,
                    grade : "2",
                    quantity : "1L",
                    ingredients : [{"name" : "eau",proportion : ""},
                                   {"name" : "sucre",proportion : ""},
                                   {"name" : "jus de citron a base de concentre",proportion : "5%"},
                                   {"name" : "antioxydant",proportion : ""},
                                   {"name" : "acidifiant",proportion : ""},
                                   {"name" : "conservateur",proportion : ""},
                                   {"name" : "stabilisants",proportion : ""},
                                   {"name" : "edulcorant",proportion : ""},
                                   {"name" : "arome naturels de citron avec autres aromes naturels",proportion : ""},
                                   {"name" : "colorant",proportion : ""}]
                },
                {
                    name: "Jus de pomme",
                    photo: "/img/jus_de_pomme.jpg",
                    bar_code : "3564707080385",
                    brand : "Carrefour" ,
                    grade : "4.5",
                    quantity : "1L",
                    ingredients : [{"name" : "jus de pomme issu de l'agriculture biologique",proportion : "100%"}]
                }
            ]
        }
    },
    */
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