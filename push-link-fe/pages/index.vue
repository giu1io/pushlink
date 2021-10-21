<template>
  <div />
</template>

<script>
import { v4 } from 'uuid'

export default {
  asyncData ({ redirect }) {
    redirect(`/private/${v4()}`)
  }
}
</script>
