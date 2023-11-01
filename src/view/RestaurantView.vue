<script>
import axios from 'axios'

export default {
    name: "RestaurantView",
    data() {

        return {
            restaurants: []
        }
    },
    methods: {
        ajax() {
            axios.get("http://127.0.0.1:8000/api/restaurant").then(response => {
                this.restaurants = response.data.restaurants
                console.log(this.restaurants);
            })
        }
    },
    mounted() {
        this.ajax();
    }
}
</script>
<template>
    <div>
        <div class=" d-flex justify-content-center mt-4" v-for=" (restaurant, index)   in   restaurants">

            <router-link class="text-black text-decoration-none pe-3 fs-3"
                :to="{ name: 'details', params: { 'id': restaurant.id } }">{{ restaurant.name
                }}</router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>