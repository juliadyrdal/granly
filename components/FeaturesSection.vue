<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base uppercase font-sans font-light text-theme-grey-dark leading-7">Villa Granly</h2>
          <p class="mt-2 text-4xl font-display text-theme-grey-dark font-medium tracking-tight sm:text-5xl">A luxury home on the west coast</p>
          <p class="mt-6 text-lg font-sans font-light leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div v-for="feature in features" :key="feature.name" class="relative pl-16">
              <dt class="text-base uppercase font-sans font-medium leading-7 text-theme-grey-dark">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-theme-surface-light">
                  <component :is="feature.icon" class="h-6 w-6 text-theme-accent" aria-hidden="true" />
                </div>
                {{ feature.name }}
              </dt>
              <dd class="mt-2 text-sm font-sans font-normal leading-7 text-gray-600">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ArrowPathIcon, HomeModernIcon, KeyIcon, ClipboardDocumentIcon } from '@heroicons/vue/24/outline'
  
  const features = [
    {
      name: 'Vulputate cursus',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: HomeModernIcon,
    },
    {
      name: 'Tincidunt mattis',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: KeyIcon,
    },
    {
      name: 'Ultricies libero',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Risus proin',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: ClipboardDocumentIcon,
    },
  ]
  </script>