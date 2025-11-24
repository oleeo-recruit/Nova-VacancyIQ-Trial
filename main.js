document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const mobileButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileButton && mobileMenu) {
    mobileButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // All chat CTAs across the page
  const chatButtons = [
    'hero-chat-cta',
    'nav-chat-cta',
    'mobile-chat-cta',
    'section-chat-cta',
    'floating-chat-button'
  ]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  chatButtons.forEach(btn => {
    btn.addEventListener('click', () => openVacancyIQChat());
  });
});

/**
 * Opens the Voiceflow VacancyIQ widget if available.
 * Falls back to scrolling to the chat demo section.
 */
function openVacancyIQChat() {
  if (window.voiceflow && window.voiceflow.chat && typeof window.voiceflow.chat.open === 'function') {
    try {
      window.voiceflow.chat.open();
      return;
    } catch (e) {
      console.warn('voiceflow.chat.open() failed, falling back to scroll.', e);
    }
  }

  // Fallback: scroll to chat section
  const section = document.getElementById('chat-demo');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
