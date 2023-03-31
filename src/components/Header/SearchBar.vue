<script>
export default {
    data() {
        return {
            name: 'SearchBar'
        }
    }
}
</script>

<template>
    <form action="#">
        <div class="searchbar input-group">
            <label for="searchbar" class="input-group-text">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </label>
            <input type="search" id="searchbar" class="form-control" placeholder="Cerca un film o una serie TV">
        </div>
    </form>
</template>

<style lang="scss" scoped>
form {
    width: 30%;
}
</style>