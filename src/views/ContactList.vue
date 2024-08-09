<template>
    <div>
        <input v-model="filter" placeholder+"Filter by name"/>
        <ul>
            <li v-for="contact in filteredContacts" :key="contact.id">
                <router-link :to="'/contact/' + contact.id">{{contact.firstName}} {{contact.lastName}}</router-link>
            </li>
        </ul>
        <router-link to="/add">Add New Contact</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            filter: '',
                contacts: JSON.parse(localStorage.getItem('contact')) || []
        };
    },
    computed: {
        filteredContacts() {
            return this.contacts
                .filter(contact =>
                    contact.firstName.toLowerCase().includes(this.filter.toLowerCase()) ||
                    contact.lastName.toLowerCase().includes(this.filter.toLowerCase())
                    )
                    .sort((a, b) => a.lastName.localCompare(b.lastName));
        }
    }
};
</script>