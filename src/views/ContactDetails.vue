<template>
    <div v-if="contact">
        <h2>{{contact.firstName}} {{contact.lastName}}</h2>
        <p>Email: {{contact.Email}}</p>
        <router-link :to="'/edit/' + contact.id">Edit</router-link>
        <button @click="deleteContact">Delete</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contact: null
        };
    },
    created() {
        const contactId = this.$route.params.id;
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        this.contact = contacts.find(contact => contact.id === contactId);
    },
    methods: {
        deleteContact() {
            let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
            contacts = contacts.filter(contact => contact.id !== this.contact.id);
            localStorage.setItem('contacts', JSON.stringify(contacts));
            this.$router.push('/');
        }
    }
};
</script>