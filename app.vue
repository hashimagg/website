<script setup lang="ts">
  const route = useRoute()
</script>
<template>
  <App>
    <NuxtLoadingIndicator color="#dc2626" />
    <Content>
      <NuxtPage />
    </Content>
    <Header />
  </App>
</template>
