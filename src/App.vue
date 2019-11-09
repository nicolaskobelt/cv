<template>
  <v-app>
    <v-app-bar
      app
      color="gray"
    >
      <div class="d-flex align-center">
        <v-btn
          icon
          color="black"
          @click.stop="drawer = !drawer"
          class="hidden-sm-and-up"
        >
        <v-icon>fas fa-bars</v-icon>
        </v-btn>
      </div>

      <v-icon></v-icon>
      <v-toolbar-items v-bind:key="item" v-for="item in items" class="hidden-xs-only">
        <v-btn text @click="$vuetify.goTo(item.target)">
            <v-icon left class="cyan--text text--dark-6">{{ item.icon }}</v-icon>
            {{item.title}}
        </v-btn>

      </v-toolbar-items>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon class="cyan--text text--dark-6">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content @click="$vuetify.goTo(item.target)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
        drawer: null,
        items: [
          { title: 'About me', icon: 'fas fa-user-alt', target: '#about'},
          { title: 'Experience', icon: 'fas fa-code-branch',target: '#experience' },
          { title: 'Education', icon: 'fas fa-book-open',target: '#education'},
          { title: 'Skills', icon: 'fas fa-user-tag',target: '#skills' },
          
        ],
    //
  }),
};
</script>
