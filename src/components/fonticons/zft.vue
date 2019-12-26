<template>
  <i :class="'fa ' + IconClass" aria-hidden="true"></i>
</template>

<script>
export default {
  name: 'zft',
  props: {
    IconClass: {
      type: String,
      default: ''
    }
  }
}
</script>
