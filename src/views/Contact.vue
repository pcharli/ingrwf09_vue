<template>
    <div>
        <h1>Contactez-nous</h1>
        <FormContact></FormContact>
    </div>
</template>

<script>
import FormContact from '@/components/ContactForm.vue'
export default {
    name: "Contact",
    components: {
        FormContact
    }
}
</script>

<style scoped>

</style>