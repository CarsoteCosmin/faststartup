<template>
  <div>
    <NavBar />
    <v-container fluid id="background">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row align="center" justify="center">
            <v-col class="pa-1" cols="10" xs="9" sm="9" md="9" lg="5" xl="5">
              <div class="flipCard">
                <div class="card" id="classchange1" style="display:block;">
                  <v-card class="side front" style="background: #313131;">
                    <v-list-item>
                      <v-list-item-content class="pt-1">
                        <v-list-item-title
                          class="headline text-center pb-7"
                          style="color:white;"
                          >Presentation Site</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-row no-gutters align="center" justify="center">
                      <v-col cols="12" xs="10" sm="8" md="5" lg="7" xl="4">
                        <v-img
                          lazy-src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/Product%20tour.gif?alt=media&token=b04d23cf-3d2c-410e-b688-ff9534cdcf7a"
                          src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/Product%20tour.gif?alt=media&token=b04d23cf-3d2c-410e-b688-ff9534cdcf7a"
                          min-height="275"
                          max-height="352"
                        >
                          <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="black"
                              ></v-progress-circular>
                            </v-row> </template
                        ></v-img>
                      </v-col>
                    </v-row>
                    <v-card-text
                      class="pt-2 pb-0 text-center"
                      style="color:white;"
                    >
                      <h3>
                        The fastest way to make yourself visible in the world of
                        the internet.
                      </h3>
                    </v-card-text>
                    <v-card-actions class="pt-0 pb-0">
                      <v-col class="pa-0" cols="12">
                        <v-row align="center" justify="center" no-gutters>
                          <v-btn text @click="flip1()">
                            <v-icon color="white">mdi-rotate-3d-variant</v-icon>
                          </v-btn>
                        </v-row>
                      </v-col>
                    </v-card-actions>
                  </v-card>
                  <v-card class="side back">
                    <v-row no-gutters style="height:100%">
                      <v-col cols="12">
                        <v-row
                          no-gutters
                          align="center"
                          justify="center"
                          style="height:91%;"
                        >
                          <p
                            class="text-start ma-0"
                            style="color:white;line-height:200%;padding-left: 12px;padding-right: 12px;"
                          >
                            This service is perfect for you if you represent a
                            small company (e.g.: a bakery, a warehouse, a small
                            and medium-sized factory). The service consists in
                            creating a presentation site, simple, elegant and
                            safe for your clients, being the best decision,
                            saving you precious time, offering you the best
                            solution for your company. You will receive: a free
                            domain for a year, we will optimize your files, data
                            and images (SEO), we will put some protection
                            systems against attacks, an SSL certificate
                            <v-icon small color="white">mdi-lock</v-icon>. If
                            you have any questions, do not hesitate to
                            <v-tooltip bottom>
                              <template v-slot:activator="{ on, attrs }">
                                <a
                                  v-bind="attrs"
                                  v-on="on"
                                  href="mailto:faststartup@protonmail.com"
                                  target="blank"
                                  style="color:white;text-decoration:underline;"
                                  >contact us</a
                                >
                              </template>
                              <span style="color:white;"
                                >faststartup@protonmail.com</span
                              >
                            </v-tooltip>
                            .
                          </p>
                        </v-row>
                        <v-row
                          no-gutters
                          align="center"
                          justify="center"
                          style="height:9%;"
                        >
                          <v-btn text @click="flip1()">
                            <v-icon
                              color="white"
                              style="transform: rotatey(-180deg);"
                              >mdi-rotate-3d-variant</v-icon
                            >
                          </v-btn>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col class="pa-1" cols="10" xs="9" sm="9" md="9" lg="5" xl="5">
              <div class="flipCard">
                <div class="card" id="classchange2" style="display:block;">
                  <v-card class="side front" style="background: #313131;">
                    <v-list-item>
                      <v-list-item-content class="pt-1">
                        <v-list-item-title
                          class="headline text-center pb-7"
                          style="color:white;"
                          >Business Site</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-row no-gutters align="center" justify="center">
                      <v-col cols="12" xs="10" sm="6" md="5" lg="7" xl="4">
                        <v-img
                          lazy-src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/Site%20Stats%20(1).gif?alt=media&token=f1d6a43b-4eaa-432d-8d03-6df858f3eab9"
                          src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/Site%20Stats%20(1).gif?alt=media&token=f1d6a43b-4eaa-432d-8d03-6df858f3eab9"
                          min-height="290"
                          max-height="365"
                        >
                          <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="black"
                              ></v-progress-circular>
                            </v-row> </template
                        ></v-img>
                      </v-col>
                    </v-row>
                    <v-card-text
                      class="pt-2 pb-0 text-center"
                      style="color:white;"
                    >
                      <h3>
                        The best solution to create an online store.
                      </h3>
                    </v-card-text>
                    <v-card-actions class="pt-0 pb-0">
                      <v-col class="pa-0" cols="12">
                        <v-row align="center" justify="center" no-gutters>
                          <v-btn text @click="flip2()">
                            <v-icon color="white">mdi-rotate-3d-variant</v-icon>
                          </v-btn>
                        </v-row>
                      </v-col>
                    </v-card-actions>
                  </v-card>
                  <v-card class="side back">
                    <v-row no-gutters style="height:100%">
                      <v-col cols="12">
                        <v-row
                          no-gutters
                          align="center"
                          justify="center"
                          style="height:91%;"
                        >
                          <p
                            class="text-start ma-0"
                            style="color:white;line-height:200%;padding-left: 12px;padding-right: 12px;"
                          >
                            This service is perfect for your company (e.g.: a
                            flower shop, a restaurant, a small or medium
                            company) when you want to move on to the next step,
                            the step of creating your own online store. This
                            package contains everything you will find in the
                            above, plus premium tools, a superior look, 200 GB
                            storage, automatic backups. If you have any
                            questions, do not hesitate to
                            <v-tooltip bottom>
                              <template v-slot:activator="{ on, attrs }">
                                <a
                                  v-bind="attrs"
                                  v-on="on"
                                  href="mailto:faststartup@protonmail.com"
                                  target="blank"
                                  style="color:white;text-decoration:underline;"
                                  >contact us</a
                                >
                              </template>
                              <span style="color:white;"
                                >faststartup@protonmail.com</span
                              > </v-tooltip
                            >.
                          </p>
                        </v-row>
                        <v-row
                          no-gutters
                          align="center"
                          justify="center"
                          style="height:9%;"
                        >
                          <v-btn text @click="flip2()">
                            <v-icon
                              color="white"
                              style="transform: rotatey(-180deg);"
                              >mdi-rotate-3d-variant</v-icon
                            >
                          </v-btn>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col class="pa-1" cols="10" xs="9" sm="9" md="9" lg="5" xl="5">
              <div class="flipCard">
                <div class="card" id="classchange3" style="display:block;">
                  <v-card class="side front" style="background: #313131;">
                    <v-list-item>
                      <v-list-item-content class="pt-1">
                        <v-list-item-title
                          class="headline text-center"
                          style="color:white;line-height:107%;"
                          >Social Media <br />
                          Integration</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-row no-gutters align="center" justify="center">
                      <v-col cols="12" xs="10" sm="6" md="5" lg="7" xl="4">
                        <v-img
                          lazy-src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/Email%20capture.gif?alt=media&token=1924d8ee-70ac-422f-b45c-3735ae822a02"
                          src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/Email%20capture.gif?alt=media&token=1924d8ee-70ac-422f-b45c-3735ae822a02"
                          min-height="278"
                          max-height="365"
                        >
                          <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="black"
                              ></v-progress-circular>
                            </v-row> </template
                        ></v-img>
                      </v-col>
                    </v-row>
                    <v-card-text
                      class="pt-2 pb-0 text-center"
                      style="color:white;"
                    >
                      <h3>
                        The best decision to be known on the all social
                        platforms.
                      </h3>
                    </v-card-text>
                    <v-card-actions class="pt-0 pb-0">
                      <v-col class="pa-0" cols="12">
                        <v-row align="center" justify="center" no-gutters>
                          <v-btn text @click="flip3()">
                            <v-icon color="white">mdi-rotate-3d-variant</v-icon>
                          </v-btn>
                        </v-row>
                      </v-col>
                    </v-card-actions>
                  </v-card>
                  <v-card class="side back">
                    <v-row no-gutters style="height:100%">
                      <v-col cols="12">
                        <v-row
                          no-gutters
                          align="center"
                          justify="center"
                          style="height:91%;"
                        >
                          <p
                            class="text-start ma-0"
                            style="color:white;line-height:200%;padding-left: 12px;padding-right: 12px;"
                          >
                            This option is more than necessary and vital for
                            recognizing a company and recruiting new customers.
                            We will receive a beautiful console application from
                            where you will only send the same picture to all
                            your platforms once.
                          </p>
                        </v-row>
                        <v-row
                          no-gutters
                          align="center"
                          justify="center"
                          style="height:9%;"
                        >
                          <v-btn text @click="flip3()">
                            <v-icon
                              color="white"
                              style="transform: rotatey(-180deg);"
                              >mdi-rotate-3d-variant</v-icon
                            >
                          </v-btn>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col class="pa-1" cols="10" xs="9" sm="9" md="9" lg="5" xl="5">
              <div class="flipCard">
                <div class="card" id="classchange4" style="display:block;">
                  <v-card class="side front" style="background: #313131;">
                    <v-list-item>
                      <v-list-item-content class="pt-1">
                        <v-list-item-title
                          class="headline text-center"
                          style="color:white;line-height:95%;"
                        >
                          Create a Custom Site <br />
                          or Application</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-row no-gutters align="center" justify="center">
                      <v-col cols="12" xs="10" sm="6" md="5" lg="7" xl="4">
                        <v-img
                          lazy-src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/Business%20Plan.gif?alt=media&token=eb45e757-05d2-4c8c-ae29-17ff0b5d2b8f"
                          src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/Business%20Plan.gif?alt=media&token=eb45e757-05d2-4c8c-ae29-17ff0b5d2b8f"
                          min-height="280"
                          max-height="365"
                        >
                          <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="black"
                              ></v-progress-circular>
                            </v-row> </template
                        ></v-img>
                      </v-col>
                    </v-row>
                    <v-card-text
                      class="pt-2 pb-0 text-center"
                      style="color:white;"
                    >
                      <h3>
                        The best decision for something particular and unique.
                      </h3>
                    </v-card-text>
                    <v-card-actions class="pt-0 pb-0">
                      <v-col class="pa-0" cols="12">
                        <v-row align="center" justify="center" no-gutters>
                          <v-btn text @click="flip4()">
                            <v-icon color="white">mdi-rotate-3d-variant</v-icon>
                          </v-btn>
                        </v-row>
                      </v-col>
                    </v-card-actions>
                  </v-card>
                  <v-card class="side back">
                    <v-row no-gutters style="height:100%">
                      <v-col cols="12">
                        <v-row
                          no-gutters
                          align="center"
                          justify="center"
                          style="height:91%;"
                        >
                          <p
                            class="text-start ma-0"
                            style="color:white;line-height:200%;padding-left: 12px;padding-right: 12px;"
                          >
                            This service is a special one, completely special,
                            which makes the most of the skill of the development
                            team. Here you tell us your problem, and we come up
                            with a solution for it. Whether you want to have an
                            application to check how long your workers work, or
                            you want an application for your gym, or you want an
                            application for confidential conversations, we will
                            succeed.
                            <!-- Click on the arrow below to go to
                                the next step, where you will explain what you
                                would like to achieve for you. -->
                          </p>
                        </v-row>
                        <v-row
                          no-gutters
                          align="center"
                          justify="center"
                          style="height:9%;"
                        >
                          <v-btn text @click="flip4()">
                            <v-icon
                              color="white"
                              style="transform: rotatey(-180deg);"
                              >mdi-rotate-3d-variant</v-icon
                            >
                          </v-btn>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col class="pa-1" cols="10" xs="9" sm="9" md="9" lg="5" xl="5">
              <div class="flipCard">
                <div class="card" id="classchange5" style="display:block;">
                  <v-card class="side front" style="background: #313131;">
                    <v-list-item>
                      <v-list-item-content class="pt-1">
                        <v-list-item-title
                          class="headline text-center"
                          style="color:white;"
                        >
                          Need employers?</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-row no-gutters align="center" justify="center">
                      <v-col cols="12" xs="10" sm="6" md="5" lg="7" xl="4">
                        <v-img
                          lazy-src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/Startup%20life.gif?alt=media&token=12d5b6c2-2b99-4486-9eac-decc4a9313e4"
                          src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/Startup%20life.gif?alt=media&token=12d5b6c2-2b99-4486-9eac-decc4a9313e4"
                          min-height="290"
                          max-height="365"
                        >
                          <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="black"
                              ></v-progress-circular>
                            </v-row> </template
                        ></v-img>
                      </v-col>
                    </v-row>
                    <v-card-text
                      class="pt-2 pb-0 text-center"
                      style="color:white;"
                    >
                      <h3>
                        The best decision to find the employees you need.
                      </h3>
                    </v-card-text>
                    <v-card-actions class="pt-0 pb-0">
                      <v-col class="pa-0" cols="12">
                        <v-row align="center" justify="center" no-gutters>
                          <v-btn text @click="flip5()">
                            <v-icon color="white">mdi-rotate-3d-variant</v-icon>
                          </v-btn>
                        </v-row>
                      </v-col>
                    </v-card-actions>
                  </v-card>
                  <v-card class="side back">
                    <v-row no-gutters style="height:100%">
                      <v-col cols="12">
                        <v-row
                          no-gutters
                          align="center"
                          justify="center"
                          style="height:91%;"
                        >
                          <p
                            class="text-start ma-0"
                            style="color:white;line-height:200%;padding-left: 12px;padding-right: 12px;"
                          >
                            This service consists in saving your precious time
                            in the endless search on countless sites. We will
                            take care of all the bureaucracy behind this system.
                            YOU will only receive the results of our search. We
                            will create accounts for you on all the platforms
                            available in your country, we will create countless
                            ads and we will search everywhere in search of the
                            best people you need.
                          </p>
                        </v-row>
                        <v-row
                          no-gutters
                          align="center"
                          justify="center"
                          style="height:9%;"
                        >
                          <v-btn text @click="flip5()">
                            <v-icon
                              color="white"
                              style="transform: rotatey(-180deg);"
                              >mdi-rotate-3d-variant</v-icon
                            >
                          </v-btn>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col class="pa-1" cols="10" xs="9" sm="9" md="9" lg="5" xl="5">
              <div class="flipCard">
                <div class="card" id="classchange6" style="display:block;">
                  <v-card class="side front" style="background: #313131;">
                    <v-list-item>
                      <v-list-item-content class="pt-1">
                        <v-list-item-title
                          class="headline text-center"
                          style="color:white;line-height:95%"
                        >
                          Need Security and <br />
                          Optimize?</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-row no-gutters align="center" justify="center">
                      <v-col cols="12" xs="10" sm="6" md="5" lg="7" xl="4">
                        <v-img
                          lazy-src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/Security%20On%20(1).gif?alt=media&token=abd2913b-d48a-453f-9592-2cb3a1659245"
                          src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/Security%20On%20(1).gif?alt=media&token=abd2913b-d48a-453f-9592-2cb3a1659245"
                          min-height="290"
                          max-height="365"
                        >
                          <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="black"
                              ></v-progress-circular>
                            </v-row> </template
                        ></v-img>
                      </v-col>
                    </v-row>
                    <v-card-text
                      class="pt-2 pb-0 text-center"
                      style="color:white;"
                    >
                      <h3>
                        The best way to feel safe and comfortable using your
                        devices.
                      </h3>
                    </v-card-text>
                    <v-card-actions class="pt-0 pb-0">
                      <v-col class="pa-0" cols="12">
                        <v-row align="center" justify="center" no-gutters>
                          <v-btn text @click="flip6()">
                            <v-icon color="white">mdi-rotate-3d-variant</v-icon>
                          </v-btn>
                        </v-row>
                      </v-col>
                    </v-card-actions>
                  </v-card>
                  <v-card class="side back">
                    <v-row no-gutters style="height:100%">
                      <v-col cols="12">
                        <v-row
                          no-gutters
                          align="center"
                          justify="center"
                          style="height:91%;"
                        >
                          <p
                            class="text-start ma-0"
                            style="color:white;line-height:200%;padding-left: 12px;padding-right: 12px;"
                          >
                            This service is dedicated to solving all existing
                            problems by scanning your system, solving
                            vulnerabilities, by cleaning up garbage documents
                            that make your device run harder and harder. A bonus
                            of this service would be to improve your computer,
                            by optimizing the operating system and giving up
                            functions that you do not use, but they run in the
                            background, eating up a lot of your time.
                          </p>
                        </v-row>
                        <v-row
                          no-gutters
                          align="center"
                          justify="center"
                          style="height:9%;"
                        >
                          <v-btn text @click="flip6()">
                            <v-icon
                              color="white"
                              style="transform: rotatey(-180deg);"
                              >mdi-rotate-3d-variant</v-icon
                            >
                          </v-btn>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col class="pa-1" cols="10" xs="9" sm="9" md="9" lg="5" xl="5">
              <div class="flipCard">
                <div class="card" id="classchange7" style="display:block;">
                  <v-card class="side front" style="background: #313131;">
                    <v-list-item>
                      <v-list-item-content class="pt-1">
                        <v-list-item-title
                          class="headline text-center"
                          style="color:white;"
                        >
                          Creating a Logo?</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-row no-gutters align="center" justify="center">
                      <v-col cols="12" xs="10" sm="6" md="5" lg="7" xl="4">
                        <v-img
                          lazy-src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/Artificial%20intelligence.gif?alt=media&token=0762e58c-285a-4bbe-bbca-8d4f07fef062"
                          src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/Artificial%20intelligence.gif?alt=media&token=0762e58c-285a-4bbe-bbca-8d4f07fef062"
                          min-height="290"
                          max-height="365"
                        >
                          <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="black"
                              ></v-progress-circular>
                            </v-row> </template
                        ></v-img>
                      </v-col>
                    </v-row>
                    <v-card-text
                      class="pt-2 pb-0 text-center"
                      style="color:white;"
                    >
                      <h3>
                        The best way to create a logo that will remain in the
                        minds of your customers.
                      </h3>
                    </v-card-text>
                    <v-card-actions class="pt-0 pb-0">
                      <v-col class="pa-0" cols="12">
                        <v-row align="center" justify="center" no-gutters>
                          <v-btn text @click="flip7()">
                            <v-icon color="white">mdi-rotate-3d-variant</v-icon>
                          </v-btn>
                        </v-row>
                      </v-col>
                    </v-card-actions>
                  </v-card>
                  <v-card class="side back">
                    <v-row no-gutters style="height:100%">
                      <v-col cols="12">
                        <v-row
                          no-gutters
                          align="center"
                          justify="center"
                          style="height:91%;"
                        >
                          <p
                            class="text-start ma-0"
                            style="color:white;line-height:200%;padding-left: 12px;padding-right: 12px;"
                          >
                            This service is ideal for creating a unique logo,
                            which is great for the interests and field of
                            activity of your company. Our creators are
                            experienced and will deliver a masterpiece as soon
                            as possible.
                          </p>
                        </v-row>
                        <v-row
                          no-gutters
                          align="center"
                          justify="center"
                          style="height:9%;"
                        >
                          <v-btn text @click="flip7()">
                            <v-icon
                              color="white"
                              style="transform: rotatey(-180deg);"
                              >mdi-rotate-3d-variant</v-icon
                            >
                          </v-btn>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "MainPage",
  components: {
    NavBar: () => import("./NavBar"),
  },
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    flip1() {
      var elem = document.getElementById("classchange1");
      elem.classList.toggle("flipped");
    },
    flip2() {
      var elem = document.getElementById("classchange2");
      elem.classList.toggle("flipped");
    },
    flip3() {
      var elem = document.getElementById("classchange3");
      elem.classList.toggle("flipped");
    },
    flip4() {
      var elem = document.getElementById("classchange4");
      elem.classList.toggle("flipped");
    },
    flip5() {
      var elem = document.getElementById("classchange5");
      elem.classList.toggle("flipped");
    },
    flip6() {
      var elem = document.getElementById("classchange6");
      elem.classList.toggle("flipped");
    },
    flip7() {
      var elem = document.getElementById("classchange7");
      elem.classList.toggle("flipped");
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.flipCard {
  /* -webkit-perspective: 800;
  -ms-perspective: 800;
  -moz-perspective: 800;
  -o-perspective: 800; */
  height: 520px;
  position: relative;
}
.flipCard .card.flipped {
  transform: rotatey(180deg);
  -ms-transform: rotatey(180deg); /* IE 9 */
  -moz-transform: rotatey(180deg); /* Firefox */
  -webkit-transform: rotatey(180deg); /* Safari and Chrome */
  -o-transform: rotatey(180deg); /* Opera */
}
.flipCard .card {
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  -webkit-transition: 0.5s;
  -moz-transform-style: preserve-3d;
  -moz-transition: 0.5s;
  -ms-transform-style: preserve-3d;
  -ms-transition: 0.5s;
  -o-transform-style: preserve-3d;
  -o-transition: 0.5s;
  transform-style: preserve-3d;
  transition: 0.7s;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.flipCard .card .side {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  backface-visibility: hidden; /* W3C */
  -webkit-backface-visibility: hidden; /* Safari & Chrome */
  -moz-backface-visibility: hidden; /* Firefox */
  -ms-backface-visibility: hidden; /* Internet Explorer */
  -o-backface-visibility: hidden; /* Opera */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  overflow: auto;
}
.flipCard .card .back {
  background: #313131;
  transform: rotatey(-180deg);
  -ms-transform: rotatey(-180deg); /* IE 9 */
  -moz-transform: rotatey(-180deg); /* Firefox */
  -webkit-transform: rotatey(-180deg); /* Safari and Chrome */
  -o-transform: rotatey(-180deg); /* Opera */
}
/* button {
  transition: 0.2s;
}
button:active {
  transform: translate(12px);
} */
@media screen and (max-width: 1904px) {
  p {
    font-size: 19px;
  }
}
@media screen and (max-width: 1264px) {
  p {
    font-size: 15px;
  }
}
@media screen and (max-width: 960px) {
  p {
    font-size: 12px;
  }
}
@media screen and (max-width: 600px) {
  p {
    font-size: 13px;
  }
}
#background {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/backbun2.png?alt=media&token=15f472f1-d0e2-4b54-a425-ddd91c067ffb");
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;
}
/* @media only screen and (max-width: 1026px) {
  #fadeshow1 {
    display: none;
  }
} */
/* @media only screen and (min-width: 1026px) {
    #fadeshow2 {
        display: none;
    }
} */
/* .font1 {
  font-size: calc(9px + (26 - 9) * ((100vw - 300px) / (1600 - 300)));
}
.font2 {
  font-size: calc(23px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
} */
/* html {
  font-size: 16px;
}
@media screen and (max-width: 600px) {
  p.text {
    font-size: 12px;
  }
}
@media screen and (min-width: 1000px) {
  html {
    font-size: 22px;
  }
} */
</style>
