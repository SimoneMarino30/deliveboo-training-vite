<script>
export default {
    name: "AppHeader",
    data() {


        return {}
    }
}
</script>
<template>
    <header class="w-100 position-sticky top-0">
        <nav class="h-100 navbar navbar-expand-lg bg_dark_fire">
            <div class="container-fluid">
                <router-link class="text-white text-decoration-none pe-3 fs-3"
                    :to="{ name: 'home' }">GourmetGo</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="text-white-50 text-decoration-none px-3"
                                :to="{ name: 'home' }">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="text-white-50 text-decoration-none px-3" :to="{ name: 'about' }">About
                                us</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="text-white-50 text-decoration-none px-3" :to="{ name: 'restaurant' }">
                                Restaurant</router-link>
                        </li>
                        <!-- <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li> -->
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>


<style lang="scss" scoped></style>