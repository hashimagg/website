<template>
  <nav class="grid grid-cols-2 md:grid-cols-4 gap-y-12 uppercase">
    <div class="space-y-12">
      <div>
        <HeadingSans>
          About
        </HeadingSans>
        <ul role="list" class="mt-6 space-y-3">
          <li>
            <NavigationLink
              color="hover:text-red-500"
              id="about-database"
              to="https://db.hashima.gg"
              external="true"
            >
              Database
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              color="hover:text-red-500"
              id="about-colophon"
              to="https://db.hashima.gg/Resources/Colophon"
              external="true"
            >
              Colophon
            </NavigationLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="space-y-12">
      <div>
        <HeadingSans>
          Media
        </HeadingSans>
        <ul role="list" class="mt-6 space-y-3">
          <li>
            <NavigationLink
              color="hover:text-red-500"
              id="media-screenshots"
              to="/media/screenshots"
            >
              Screenshots
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              color="hover:text-red-500"
              id="media-videos"
              to="/media/videos"
            >
              Videos
            </NavigationLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="space-y-12">
      <div>
        <HeadingSans>
          Server
        </HeadingSans>
        <ul role="list" class="mt-6 space-y-3">
          <li>
            <NavigationLink
              color="hover:text-red-500"
              id="server-information"
              to="/server/information"
            >
              Information
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              color="hover:text-red-500"
              id="server-mission"
              to="/server/mission"
            >
              Mission
            </NavigationLink>
          </li>
          <!-- <li>
            <NavigationLink
              color="hover:text-red-500"
              id="server-has"
              to="/server/has"
            >
              H.A.S ™
            </NavigationLink>
          </li> -->
        </ul>
      </div>
    </div>
    <div class="space-y-12">
      <div>
        <HeadingSans>
          Extras
        </HeadingSans>
        <ul role="list" class="mt-6 space-y-3">
          <li>
            <NavigationLink
              color="hover:text-red-500"
              id="extras-kofi"
              to="https://ko-fi.com/creepycrappyshow"
              external="true"
            >
              Ko-fi Tip
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              color="hover:text-red-500"
              id="extras-shop"
              to="https://shop.creepycrappy.show"
              external="true"
            >
              CCShop
            </NavigationLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
