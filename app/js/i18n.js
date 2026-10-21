/**
 * i18n.js — lightweight EN/ES switcher for ao-website
 *
 * Usage:
 *   Elements with plain text:   <span data-i18n="key"></span>
 *   Elements with HTML content: <span data-i18n-html="key"></span>
 *   Page title:                 uses key "page.title"
 *   Switcher button:            <button id="lang-switcher"></button>
 */

const STORAGE_KEY = 'ao-lang';
const DEFAULT_LANG = 'es';
const SUPPORTED = ['es', 'en'];

// In-memory cache so we only fetch each locale once.
const cache = {};

/**
 * Fetch and cache a locale JSON file.
 * @param {string} lang
 * @returns {Promise<Object>}
 */
async function loadLocale(lang) {
  if (cache[lang]) return cache[lang];
  const res = await fetch(`/locales/${lang}.json`);
  if (!res.ok) throw new Error(`Failed to load locale: ${lang}`);
  cache[lang] = await res.json();
  return cache[lang];
}

/**
 * Apply a loaded locale dictionary to the DOM.
 * @param {string} lang
 * @param {Object} dict
 */
function applyLocale(lang, dict) {
  // Update <html lang="">
  document.documentElement.lang = lang;

  // Update <title>
  if (dict['page.title']) {
    document.title = dict['page.title'];
  }

  // Plain-text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // HTML elements (contain inline links, <br>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update the switcher button label
  const switcher = document.getElementById('lang-switcher');
  if (switcher && dict['lang.switch']) {
    switcher.textContent = dict['lang.switch'];
  }
}

/**
 * Load and apply a language, persist to localStorage.
 * @param {string} lang
 */
async function switchLang(lang) {
  if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
  try {
    const dict = await loadLocale(lang);
    applyLocale(lang, dict);
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (err) {
    console.error('[i18n] Failed to switch language:', err);
  }
}

/**
 * Read stored preference (or default) and initialise the page.
 */
async function init() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const lang = SUPPORTED.includes(stored) ? stored : DEFAULT_LANG;
  await switchLang(lang);
}

// Expose switchLang globally so the inline onclick can call it.
window.switchLang = switchLang;

document.addEventListener('DOMContentLoaded', init);
