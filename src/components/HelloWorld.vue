<template>
  <v-content style="padding: 0px 0px 0px;">
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <div class="mx-auto">
        <v-img
          src="../assets/profile128X128.png"
          class="center center"
          contain
          width="120px"
          height="100px"
        ></v-img>
      </div>
      <h2 class="white--text mb-2 display-2 text-center">Nicolás Kobelt</h2>
      <h2 class="white--text mb-2 text-center">Student of Systems Engineering</h2>
      <div class="mx-auto">
        <v-row justify="space-around">
          <v-btn text dark href="https://www.linkedin.com/in/nicolaskobelt/">
            <v-icon dark>fab fa-linkedin</v-icon>
          </v-btn>
          <v-btn text dark href="https://github.com/nicolaskobelt">
            <v-icon dark>fab fa-github</v-icon>
          </v-btn>
          <v-btn text dark href="mailto:nicolaskobelt@gmail.com">
            <v-icon dark>fas fa-envelope</v-icon>
          </v-btn>
          <v-btn text dark href="https://t.me/nicolaskobelt">
            <v-icon dark>fab fa-telegram</v-icon>
          </v-btn>
        </v-row>
      </div>
    </v-parallax>

    <section>
      <v-layout column align-center>
        <v-flex xs12 sm4 class="my-5">
          <div class="text-center" id="about">
            <v-icon class="cyan--text text--dark-2">fas fa-user-alt</v-icon>
            <h2 class="headline">About me</h2>
          </div>
        </v-flex>
        <v-flex>
          <v-container>
            <v-layout align-center>
              <v-flex class="text-justify">
                <v-card-text class="text-justify">
                  I am student in the last year of systems engineering,
                  I love this career, this help me found what is my passion.
                  <br />I came from a little town in Córdoba, Argentina.
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
      <v-layout column align-center>
        <v-flex xs12 sm4 class="my-5">
          <div class="text-center" id="experience">
            <v-icon class="cyan--text text--dark-2">fas fa-code-branch</v-icon>
            <h2 class="headline">Experience</h2>
          </div>
        </v-flex>
        <v-flex>
          <v-container>
            <v-list-item justify="center">
              <v-list-item-avatar>
                <v-img
                  src="../assets/checkbox.png"
                  class="center center"
                  contain
                  width="120px"
                  height="100px"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">Software Developer</v-list-item-title>
                <v-list-item-subtitle>Checkbox Innovations</v-list-item-subtitle>
                <v-list-item-subtitle>October 2019 - Present</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-layout column align-center>
        <v-flex xs12 sm4 class="my-5">
          <div class="text-center" id="education">
            <v-icon class="cyan--text text--dark-2">fas fa-book-open</v-icon>
            <h2 class="headline">Education</h2>
          </div>
        </v-flex>
        <v-flex>
          <v-container>
            <v-list-item justify="center">
              <v-list-item-avatar>
                <v-img
                  src="../assets/logo-ucc-2018.png"
                  class="center center"
                  contain
                  width="120px"
                  height="100px"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">Systems Engineering</v-list-item-title>
                <v-list-item-subtitle>Universidad Católica de Córdoba</v-list-item-subtitle>
                <v-list-item-subtitle>March 2015 - Present</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-container>
        </v-flex>

        <v-flex>
          <v-container>
            <v-list-item justify="center">
              <v-list-item-avatar>
                <v-img
                  src="../assets/logo-ucc-2018.png"
                  class="center center"
                  contain
                  width="120px"
                  height="100px"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">Project Management Diploma</v-list-item-title>
                <v-list-item-subtitle>Universidad Católica de Córdoba</v-list-item-subtitle>
                <v-list-item-subtitle>June 2019 - October 2019</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-container>
        </v-flex>

        <v-flex>
          <v-container>
            <v-list-item justify="center">
              <v-list-item-avatar color="white"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">Bachelor in Economics and Management</v-list-item-title>
                <v-list-item-subtitle>Instituto Parroquial San Juan Diego</v-list-item-subtitle>
                <v-list-item-subtitle>March 2009 - December 2014</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-layout column align-center>
        <v-flex xs12 sm4 class="my-5">
          <div class="text-center" id="skills">
            <v-icon class="cyan--text text--dark-2">fas fa-user-tag</v-icon>
            <h2 class="headline">Skills</h2>
          </div>
        </v-flex>
      </v-layout>
    </section>
  </v-content>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({})
};
</script>
