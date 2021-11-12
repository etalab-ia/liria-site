<template>
  <header role="banner" class="fr-header fr-mb-4w">
    <div class="fr-header__body">
      <div class="fr-container">
        <div class="fr-header__body-row">
          <div class="fr-header__brand fr-enlarge-link">
            <div class="fr-header__brand-top">
              <div class="fr-header__logo">
                <p class="fr-logo">
                  République
                  <br />Française
                </p>
              </div>
            </div>
            <div class="fr-header__service">
              <a href="/">
                <p class="fr-header__service-title">{{ $site.title }}</p>
              </a>
              <p class="fr-header__service-tagline">{{ $site.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fr-header__menu fr-modal" id="header-navigation">
      <div class="fr-container">
        <button
          class="fr-link--close fr-link"
          aria-controls="header-navigation"
        >
          Fermer
        </button>
        <div class="fr-header__menu-links"></div>
        <nav
          class="fr-nav"
          id="navigation-832"
          role="navigation"
          aria-label="Menu principal"
        >
          <ul class="fr-nav__list">
            <li class="fr-nav__item">
              <a class="fr-nav__link" href="/presentation">Présentation</a>
            </li>
            <li class="fr-nav__item">
              <a class="fr-nav__link" href="/actualites">Actualités</a>
            </li>
            <li class="fr-nav__item">
              <a class="fr-nav__link" href="/documentation">Documentation</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
