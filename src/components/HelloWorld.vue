<template>
<v-content style="padding: 0px 0px 0px;">
 <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
 <div class="mx-auto">
 <v-img src="../assets/profile128X128.png"
    class="center center"
    contain
    width="120px"
    height="100px"></v-img>
  </div>
 <h2 class="white--text mb-2 display-2 text-center">Nicolás Kobelt</h2>
 <h2 class="white--text mb-2 text-center">Student of System's Engineer</h2>
<div class="mx-auto">
    <v-row justify="space-around">
      <v-btn text dark>
      <v-icon dark>fab fa-github</v-icon>
      </v-btn>
      <v-btn text dark>
      <v-icon dark>fab fa-linkedin</v-icon>
      </v-btn>
    </v-row>
</div>
 </v-parallax>

<section>
        <v-layout
          column
          align-center
        >
          <v-flex xs12 sm4 class="my-5">
            <div class="text-center">
              <v-icon class="cyan--text text--dark-2">fas fa-user-alt</v-icon>
              <h2 class="headline">About me</h2>
            </div>
          </v-flex>
          <v-flex>
            <v-container>
              <v-layout align-center>
                <v-flex class="text-justify">
                    <v-card-text class="text-justify">
                      I am student in the last year of system's engineering, 
                      I love this career, this help me found what is my passion. <br>
                      I came from a little town in Córdoba, Argentina. 
                      Actually I am living in Córdoba City. 
                      What I said, the career help me found what are my passion, 
                      this are Artificial Intelligence, Data Sciene, App develop, etc.
                      I can work in teams, I like know new people, 
                      learn from them and try understand each one. 
                      I like do fisical activities, go out with friends, enjoy. 
                    </v-card-text>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

<section>
        <v-layout
          column
          align-center
        >
          <v-flex xs12 sm4 class="my-5">
            <div class="text-center">
              <v-icon class="cyan--text text--dark-2">fas fa-code-branch</v-icon>
              <h2 class="headline">Experience</h2>
            </div>
          </v-flex>
          <v-flex>
            <v-container>
              <v-layout align-center>
                <v-flex class="text-justify">
                    <v-card-text class="text-justify">
                      I am student in the last year of system's engineering, 
                      I love this career, this help me found what is my passion. <br>
                      I came from a little town in Córdoba, Argentina. 
                      Actually I am living in Córdoba City. 
                      What I said, the career help me found what are my passion, 
                      this are Artificial Intelligence, Data Sciene, App develop, etc.
                      I can work in teams, I like know new people, 
                      learn from them and try understand each one. 
                      I like do fisical activities, go out with friends, enjoy. 
                    </v-card-text>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
</v-content>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/layout/pre-defined',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
};
</script>
