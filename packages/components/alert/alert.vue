<template>
  <transition name="t-alert-fade">
    <div
      class="t-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      v-show="visible"
    >
      <i
        class="t-alert__icon"
        :class="[iconClass, isBigIcon]"
        v-if="showIcon"
      ></i>
      <div class="t-alert__content">
        <span
          class="t-alert__title"
          :class="[isBoldTitle]"
          v-if="title || $slots.title"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="t-alert__description" v-if="$slots.default && !description">
          <slot></slot>
        </p>
        <p class="t-alert__description" v-if="description && !$slots.default">
          {{ description }}
        </p>
        <i
          class="t-alert__closebtn"
          :class="{
            'is-customed': closeText !== '',
            't-icon-close': closeText === '',
          }"
          v-show="closable"
          @click="close()"
          >{{ closeText }}</i
        >
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
const TYPE_CLASSES_MAP = {
  success: 't-icon-success',
  warning: 't-icon-warning',
  error: 't-icon-error'
}
export default {
  name: 'ElAlert',

  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    showIcon: Boolean,
    center: Boolean,
    effect: {
      type: String,
      default: 'light',
      validator: function (value) {
        return ['light', 'dark'].indexOf(value) !== -1
      }
    }
  },

  data () {
    return {
      visible: true
    }
  },

  methods: {
    close () {
      this.visible = false
      this.$emit('close')
    }
  },

  computed: {
    typeClass () {
      return `t-alert--${this.type}`
    },

    iconClass () {
      return TYPE_CLASSES_MAP[this.type] || 't-icon-info'
    },

    isBigIcon () {
      return this.description || this.$slots.default ? 'is-big' : ''
    },

    isBoldTitle () {
      return this.description || this.$slots.default ? 'is-bold' : ''
    }
  }
}
</script>
