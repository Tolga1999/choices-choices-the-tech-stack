<template>
    <header>
        <nav>
            <NuxtLink to="/">
                <img src=/img/vervoerregio_amsterdam_logo.svg alt="logo vervoerregio" />
            </NuxtLink>

            <section class="header-icons">
                <a href="/info">
                    <img class="information-icon-img" src=/img/information_icon.svg alt="information icon" />
                </a>
                <img src=/img/dark_mode_icon.svg alt="darkmode icon" />
            </section>
        </nav>
    </header>
</template>

<style scoped>
header {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
}

nav {
    display: flex;
    justify-content: space-between;
    background-color: #202020;
    padding: 1.5em 1em;
    border-bottom: 2px solid #454545;
}

.header-icons {
    display: flex;
    gap: 1em;
    align-items: center;
}

.information-icon-img {
    display: block;
}
</style>