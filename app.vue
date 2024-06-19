<script setup lang="ts">

const toggleTheme = () => {
  document.body.classList.toggle("dark-mode");
};
const { locale, setLocale } = useI18n();
const $t = useI18n().t;
const setItems = () => {
  return [
    {
      label: $t('home'),
      icon: 'pi pi-fw pi-home',
    },
    {
      label: $t('contact'),
      icon: 'pi pi-fw pi-envelope',
    },
    {
      label: $t('about'),
      icon: 'pi pi-fw pi-info',
      items: [
        {
          label: $t('company'),
          icon: 'pi pi-fw pi-align-left',
        },
        {
          label: $t('team'),
          icon: 'pi pi-fw pi-user',
        },
      ],
    },
  ];
}
let item = setItems();
watch(locale, () => {
  item = setItems();
});
</script>

<template>
  <div id="app">
    <Menubar :model="item">
      <template #start>
        <Image
          src="https://images.freecreatives.com/wp-content/uploads/2015/04/logo007.png"
          alt="logo"
          width="50"
        />
      </template>
      <template #end>
        <InputText size="small" placeholder="Search" />
      </template>
    </Menubar>
    <Button label="Toggle Theme" @click="toggleTheme"></Button>
    <button @click="setLocale('en')">en</button>
    <button @click="setLocale('fr')">fr</button>
    <p>{{ $t('welcome') }}</p>
  </div>
</template>

<style>
.dark-mode {
  background-color: #242424;
  color: #fff;
}
:root{
  font-family: 'Roboto', sans-serif;
}
</style>
