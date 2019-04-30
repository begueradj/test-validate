<template>
  <v-container
    grid-list-md
    text-xs-center
    fill-height
  >
    <v-layout
      row
      wrap
      align-center
    >
      <v-flex
        xs12
        sm4
        offset-sm4
      >
        <v-text-field
          v-model="townName"
          label="Town name"
        />
      </v-flex>
      <v-flex
        xs12
        sm4
        offset-sm4
      >
        <v-btn
          @click="post"
        >
          Post
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'MainPage',

  data() {
    return {
      townName: ''
    }
  },

  methods: {
    post() {
      console.log(this.townName)
    }
  }
}
</script>
