<template>
  <div class="px-6 py-6 sm:px-6 sm:py-12 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <HeadingSerif class="text-4xl">
        {{ title }}
      </HeadingSerif>
      <div>
        <HeadingSans>
          {{ description }}
        </HeadingSans>
      </div>
      <div class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 uppercase">
        <NavigationLink
          color="ring-1 hover:bg-black/25"
          :id="idPrimary"
          :to="urlPrimary"
          external="true"
        >
          {{ labelPrimary }}
        </NavigationLink>
        <NavigationLink
          color="hover:bg-black/25"
          :id="idSecondary"
          :to="urlSecondary"
          external="true"
        >
          {{ labelSecondary }}
        </NavigationLink>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: [
      'title',
      'description',
      'idPrimary',
      'labelPrimary',
      'urlPrimary',
      'idSecondary',
      'labelSecondary',
      'urlSecondary'
    ]
  }
</script>
