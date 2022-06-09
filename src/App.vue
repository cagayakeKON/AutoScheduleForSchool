<template>
  <v-app>
    <ApplicationNavigation>
      <router-view/>
    </ApplicationNavigation>
  </v-app>
</template>

<script>
import ApplicationNavigation from './components/ApplicationNavigation'

export default {
  name: 'App',
  components: {
    ApplicationNavigation
  },
  data: () => ({
    //
  }),
};
</script>
