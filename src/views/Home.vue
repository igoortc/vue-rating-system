<template>
  <div>
    <StepTitle
      :title="step.title"
      :days="step.days"
      icon="star-half"/>
    <v-container
      fluid
      fill-height>
      <v-layout
        align-center
        justify-center>
        <v-flex
          xs12
          sm12
          class="rating-container">
          <v-card>
            <v-flex
              xs12
              class="text-xs-center">
              <img
                src="https://alchetron.com/cdn/chico-buarque-e798e6be-b59c-45a5-aec3-3ab5a3ee740-resize-750.jpeg"
                class="rating-image"
                height="96px"
                width="96px">
              <p class="msg-rating">
                Como você avalia a participação do mentor <span class="mentor">{{ fields.user_name }}</span> durante o ciclo de formação que você participou?
              </p>
              <star-rating
                v-model="fields.value"
                :inline="true"
                :show-rating="false"
                :star-size="44"
                rounded-corners
                border-color="#000"
                active-color="#fdd835"/>
              <div
                v-if="!$v.fields.value.between && $v.fields.value.$dirty"
                class="error--text caption">
                Por favor, escolha uma classificação.
              </div>
              <div class="comment-rating">
                <p>Deixe seu comentário</p>
                <v-flex
                  xs12>
                  <v-textarea
                    v-model="fields.comment"
                    :error-messages="commentErrors"
                    solo
                    name="input-7-4"
                    label="Deixe seu comentário"
                    counter="1000"
                    @input="$v.fields.comment.$touch()"
                    @blur="$v.fields.comment.$touch()"
                  />
                </v-flex>
              </div>
              <v-btn
                large
                block
                depressed
                color="secondary"
                @click="submitRating">
                <strong>Avaliar mentor e finalizar ciclo de formação</strong>
              </v-btn>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar
      v-model="snackbar"
      :color="alert.color"
      :timeout="alert.timeout"
      top>
      {{ alert.message }}
      <v-btn
        dark
        flat
        @click="snackbar = false">
        Fechar
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios'
import '@/icons/star-half'
import StarRating from 'vue-star-rating'
import StepTitle from '@/components/Step/StepTitle.vue'
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
  components: {
    StepTitle,
    StarRating
  },
  data () {
    return {
      step: {
        title: 'Avaliação do mentor',
        days: 3
      },
      fields: {
        user_name: 'Geovane Rodrigues',
        comment: '',
        value: 0
      },
      snackbar: false,
      alert: {
        timeout: 6000,
        message: '',
        color: ''
      }
    }
  },
  validations: {
    fields: {
      comment: {
        required,
        minLength: minLength(10)
      },
      value: {
        between: between(1, 5)
      }
    }
  },
  computed: {
    commentErrors () {
      const errors = []
      if (!this.$v.fields.comment.$dirty) return errors
      !this.$v.fields.comment.required && errors.push('Por favor, inclua um comentário.')
      return errors
    }
  },
  methods: {
    submitRating: function () {
      if (this.$v.$invalid) {
        console.log('INVALIDO', this.$v)
        this.$v.fields.$touch()
        this.alert.message = 'Por favor, preencha todos os campos.'
        this.alert.color = 'error'
        this.snackbar = true
      } else {
        axios.post('https://firestore.googleapis.com/v1beta1/projects/teste-dev-api/databases/(default)/documents/rates/',
          {
            'fields': {
              'user_name': {
                'stringValue': this.fields.user_name
              },
              'comment': {
                'stringValue': this.fields.comment
              },
              'value': {
                'integerValue': this.fields.value
              }
            }
          })
          .then(response => {
            this.alert.message = 'Sucesso! Sua avaliação foi enviada.'
            this.alert.color = 'success'
            this.snackbar = true
            this.$v.$reset()
            this.fields.comment = ''
            this.fields.value = 0
          })
          .catch(error => {
            console.log('erro', error)
            this.alert.message = `Ops! Erro ao enviar a sua avaliação. ${error}`
            this.alert.color = 'error'
            this.snackbar = true
          })
      }
    }
  }
}
</script>

<style src="./Home.styl" lang="stylus" />
