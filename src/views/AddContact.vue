<template>
    <div>
        <h2>Add New Contact</h2>
        <from @submit.prevent="addContact">
        <input v-model="firstName" placeholder="First Name" required />
        <input v-model="lastName" placeholder="Last Name" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <button type="submit".Add COntact</button>
        </form>'
    </div>
</template>

<script>
export default {
    data() {
        return {
        firstName: '',
        lastName: '',
        email: ''
    };
},
methods: {
    addContact() {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const newContact = {
            id: Date.now().toString(),
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        };
        contacts.push(newConatact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push('/contact/' + newConatact.id);
    }
}
};
</script>