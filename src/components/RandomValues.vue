<template>
    <div class="field is-grouped is-grouped-multiline">
            <div class="control" v-for="(value, index) in result" :key="index">
                <div class="tags has-addons">
                    <span class="tag is-warning"><i class="fa fa-dice"></i>{{label}}</span>
                    <span class="tag is-info">{{value}}</span>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  name: "random-values",
  props: {
    result: {
      type: [],
      required: false
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.tag {
  min-width: 3em;
}
.control:last-child {
  margin-right: 0.75rem;
}
</style>
