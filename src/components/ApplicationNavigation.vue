<template>
  <div>
    <v-navigation-drawer
        permanent
        app
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="()=>{$router.push({name:'ClassCourse'})}">学生课程</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="()=>{$router.push({name:'TeacherCourse'})}">教师课程</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>总课表</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        color="deep-purple"
        dark
        app
    >
    </v-app-bar>

    <v-main>
     <slot/>
    </v-main>
  </div>


</template>

<script>
export default {
  name:"ApplicationNavigation",
}
</script>
