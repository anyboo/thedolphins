<template>
  <div id="app">
    <img src="./assets/clock.png">
    <h1>{{ msg }}</h1>
    <el-button @click="startHacking">Let's do it use click event</el-button>
    <el-button @click.native="startHacking">Let's do it</el-button>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">test for github-webhook-handler</div></el-col>
    </el-row>
    <el-button type="primary" icon="search">Search</el-button>
    <el-button type="primary" icon="search">Search</el-button>
    <el-button type="primary" :loading="true">Loading</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Thedolphins is going!'+'111'
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
