<script>
import axios from 'axios'

export default {
    name: "AppDetails",
    data() {

        return {
            restaurant: "",
            loading: false
        }
    },
    methods: {
        ajax() {
            axios.get(`http://127.0.0.1:8000/api/restaurant/${this.$route.params.id}`).then(response => {
                this.restaurant = response.data
                this.loading = true
                console.log(this.restaurant);
            })
        }
    },
    mounted() {
        this.ajax();
    }
}
</script>
<template>
    <div v-if="loading" class="card p-3 m-5 text-center">
        <div class="fw-bold">{{ restaurant.name }}</div>
        <div>{{ restaurant.photo }}</div>
        <div>{{ restaurant.address }}</div>
    </div>
</template>


<style lang="scss" scoped></style>