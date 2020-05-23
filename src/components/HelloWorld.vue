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
      <h2 class="white--text mb-2 text-center">Systems Engineer</h2>
      <div class="mx-auto">
        <v-row justify="space-around">
          <v-btn text dark href="https://www.linkedin.com/in/nicolaskobelt/" target="_blank">
            <v-icon dark>fab fa-linkedin</v-icon>
          </v-btn>
          <v-btn text dark href="https://github.com/nicolaskobelt" target="_blank">
            <v-icon dark>fab fa-github</v-icon>
          </v-btn>
          <v-btn text dark href="mailto:nicolaskobelt@gmail.com">
            <v-icon dark>fas fa-envelope</v-icon>
          </v-btn>
          <v-btn text dark href="https://t.me/nicolaskobelt" target="_blank">
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
                <v-card-text
                  v-resize-text="{ratio:1.5, minFontSize: '5px', maxFontSize: '20px', delay: 200}"
                >
                  I was born in Córdoba, Argentina. I am passionate for the development of technology,
                  I love discovering new things and taking time to learn them in order to improve every day.
                  I like to work in a team, to meet new people so I can also learn new things,
                  not only technology, other cultures, customs, etc.
                  On the other hand I like to leave the virtual world, enjoy nature, be with friends, family.
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
                <v-list-item-title
                  v-resize-text="{ratio:1.5, minFontSize: '5px', maxFontSize: '20px', delay: 200}"
                >Software Developer</v-list-item-title>
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
                  src="../assets/acamica.png"
                  class="center center"
                  contain
                  width="120px"
                  height="100px"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  v-resize-text="{ratio:1.5, minFontSize: '5px', maxFontSize: '20px', delay: 200}"
                >Data Science</v-list-item-title>
                <v-list-item-subtitle>Acámica</v-list-item-subtitle>
                <v-list-item-subtitle>April 2020 - Present</v-list-item-subtitle>
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
                <v-list-item-title
                  v-resize-text="{ratio:1.5, minFontSize: '5px', maxFontSize: '20px', delay: 200}"
                >Systems Engineering</v-list-item-title>
                <v-list-item-subtitle>Universidad Católica de Córdoba</v-list-item-subtitle>
                <v-list-item-subtitle>2015 - 2020</v-list-item-subtitle>
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
                <v-list-item-title
                  v-resize-text="{ratio:1.5, minFontSize: '5px', maxFontSize: '20px', delay: 200}"
                >Project Management Diploma</v-list-item-title>
                <v-list-item-subtitle>Universidad Católica de Córdoba</v-list-item-subtitle>
                <v-list-item-subtitle>June 2019 - November 2019</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-container>
        </v-flex>

        <v-flex>
          <v-container>
            <v-list-item justify="center">
              <v-list-item-avatar color="white"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  v-resize-text="{ratio:1.5, minFontSize: '5px', maxFontSize: '20px', delay: 200}"
                >Bachelor in Economics and Management</v-list-item-title>
                <v-list-item-subtitle>Instituto Parroquial San Juan Diego</v-list-item-subtitle>
                <v-list-item-subtitle>March 2009 - December 2014</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-layout column>
        <v-flex xs12 sm4 class="my-5">
          <div class="text-center" id="skills">
            <v-icon class="cyan--text text--dark-2">fas fa-user-tag</v-icon>
            <h2 class="headline">Skills</h2>
          </div>
        </v-flex>

        <v-col
        cols="12"
      >
             <v-row
          align="center"
          justify="center">
    
          <v-card class="ma-3 pa-6" max-width="200" shaped="true"            
            tile>
            <v-card-text>
              <div>Methodologies</div>
              <p class="display-0 text--primary">Agile</p>
              <p>Scrum, Kanban, XP</p>
              <div class="text--primary">
                From the university working
                with agile methods.
              </div>
            </v-card-text>

          </v-card>
          <v-card class="ma-3 pa-6" max-width="200" shaped="true" tile>
            <v-card-text>
              <div>Technologies</div>
              <p class="display-0 text--primary">Web Focused</p>
              <p>Javascript, Typescript, more!</p>
              <div class="text--primary">
                When I started learn programming
                the last technologies on the market was 
                based on web/cloud this is why I'm working on these.
              </div>
            </v-card-text>
          </v-card>          

          <v-card class="ma-3 pa-6" max-width="200" shaped="true" tile>
            <v-card-text>
              <div>Desire to learn</div>
              <p class="display-0 text--primary">Artificial Intelligence</p>
              <p>N. Networks, ML, more!</p>
              <div class="text--primary">
                I love the power of computers to do human 
                works.
              </div>
            </v-card-text>
          </v-card>   
  
             </v-row>

        </v-col>
        <div class="text-center">
          <h4>Technologic stack</h4>
        </div>
        <v-container align="center">
          <v-flex class="pa-2">
            <v-row justify="space-around">
              <v-icon
                @mouseover="hover = true"
                @mouseleave="hover = false"
                v-bind:key="icon"
                v-for="icon in icons"
                large
                color="grey ligthen-1"
              >{{icon.name}}</v-icon>
            </v-row>
          </v-flex>
        </v-container>
      </v-layout>
    </section>
  </v-content>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    icons: [
      { name: "fab fa-angular" },
      { name: "fab fa-docker" },
      { name: "fab fa-react" },
      { name: "fab fa-node" },
      { name: "fab fa-git-square" },
      { name: "fab fa-jenkins" },
      { name: "fab fa-js" },
      { name: "fab fa-python" },
      { name: "fab fa-sass" }
    ],
    hover: false
  })
};
</script>
