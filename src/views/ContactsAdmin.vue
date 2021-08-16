<template>
    <div>
        <h1>Contacts envoyés</h1>
        <ul v-if="contacts != ''">
            <li :data-id="index" v-for="(contact, index) in contacts" :key="index">
              <details>
                <summary>{{ contact.nom | cap }} {{ contact.prenom | cap }}</summary>
                    {{ contact.message }}
              </details>
            </li>
        </ul>
    </div>
</template>

<script>
import service from '@/services/contacts'
import cap from '@/filters/cap'

    export default {
        name: 'ConactsAdmin',
        props: {
            
        },
        data() {
            return {
                contacts: {}
            }
        },
        filters: {
           cap 
        },
        created() {
            service.listContacts()
            .then(response => {
                this.contacts = response
            })
            .catch(error => {console.log(error)})
        }
    }
</script>

<style scoped>
    details {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: .5em .5em 0;
}

summary {
    font-weight: bold;
    margin: -.5em -.5em 0;
    padding: .5em;
}

details[open] {
    padding: .5em;
}

details[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: .5em;
}

</style>