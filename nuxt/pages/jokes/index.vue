<template>
    <div>
        <SearchJokes v-on:search-text="searchText"/>
        <Joke v-for="joke in jokes" :key="joke.id" :id="joke.id" :joke="joke.joke"/>
    </div>
</template>

<script>
import axios from "axios";
import Joke from "../../components/Joke.vue"
import SearchJokes from "../../components/SearchJokes.vue"


export default {
    components: {
        Joke,
        SearchJokes,
    },
    data() {
        return {
            jokes: []
        }
    },
    async created() {
        const config = {
            headers: {
                'Accept': 'application/json'
            }
        }
        try{
            const res = await axios.get('https://icanhazdadjoke.com/search', config)
            console.log(res.data.results)

            this.jokes = res.data.results
        }catch(err) {
            console.log(err)
        }

    },
    methods: {
        async searchText(text){
            const config = {
                headers: {
                    'Accept': 'application/json'
                }
            }
            try{
                const res = await axios.get('https://icanhazdadjoke.com/search?term='+ text, config)
                console.log(res.data.results)

                this.jokes = res.data.results
            }catch(err) {
                console.log(err)
            }
        }
    },
    head() {
        return {
            title: "Dad jokes",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Best place for corny dad jokes"
                }
            ]
        }
    }
}
</script>