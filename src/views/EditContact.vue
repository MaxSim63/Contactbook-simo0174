<template>
    <div v-if="contact">
        <h2>Edit Contact</h2>
        <form @submit.prevent="updateContact">
        <input v-model="firstName" placeholder="First Name" required />
        <input v-model="lastName" placeholder="Last Name" required />
        <input v-model="email" placeholder="Email" required />'
        <button type="submit">Update Contact</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contact: null,
            firstName: '',
            lastName: '',
            email: ''
        };
    },
    created() {
        const contactId = this.$route.parms.id;
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        this.contact = contacts.find(contact => contact.id === contactId);
        if (this.contact) {
            this.firstName = this.contact.firstName;
            this.lastName = this.contact.lastName;
            this.email = this.contact.email;
        }
    },
    methods: {
        updateContact() {
            let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
            const index - contacts.findIndex(contact => contact.id === this.contact.id);
            if (index !== -1) {
                contacts [index] = {
                    id: this.contact.id,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email
                };
                localStorage.setItem('contacts', JSON.stringify(contacts));
                this.$router.push('/contact/' + this contact.id);
            }
        }
    }
};
</script>
            