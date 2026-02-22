/* ============================================
   MOSAIC DOCS - TARGETED PREMIUM ANIMATIONS
   ============================================ */

(function() {
  'use strict';

  let isNavigating = false;

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    setupNavClickAnimation();
    observePageChanges();
  }

  /* ============================================
     NAV CLICK - ANIMATE ONLY CLICKED ICON
     ============================================ */
  function setupNavClickAnimation() {
    document.addEventListener('click', (e) => {
      // Find the nav link that was clicked
      const navLink = e.target.closest('nav a, [class*="sidebar"] a, [class*="nav-"] a');
      if (!navLink) return;

      // Get the icon inside this specific link
      const icon = navLink.querySelector('svg');
      if (icon) {
        // Remove class from any previously animated icons
        document.querySelectorAll('.icon-animating').forEach(el => {
          el.classList.remove('icon-animating');
        });

        // Animate only this icon
        icon.classList.add('icon-animating');
        
        // Create sparkles around this icon only
        createSparkles(icon, 5);

        // Remove class after animation completes
        setTimeout(() => {
          icon.classList.remove('icon-animating');
        }, 500);
      }

      // Mark that we're navigating (for page content animation)
      isNavigating = true;
    });
  }

  /* ============================================
     SPARKLE EFFECT - SUBTLE & ELEGANT
     ============================================ */
  function createSparkles(element, count) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Position at icon center
        sparkle.style.left = centerX + 'px';
        sparkle.style.top = centerY + 'px';
        
        // Random outward direction
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const distance = 15 + Math.random() * 15;
        sparkle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
        sparkle.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
        
        document.body.appendChild(sparkle);
        
        // Clean up
        setTimeout(() => sparkle.remove(), 600);
      }, i * 40); // Stagger sparkle creation
    }
  }

  /* ============================================
     PAGE CONTENT - MAGIC TEXT REVEAL
     Triggered only when content actually changes
     ============================================ */
  function observePageChanges() {
    // Watch for content changes in the main area
    const observer = new MutationObserver((mutations) => {
      // Only animate if we were navigating
      if (!isNavigating) return;
      
      // Check if actual content changed (not just attributes)
      const hasContentChange = mutations.some(m => 
        m.type === 'childList' && m.addedNodes.length > 0
      );
      
      if (hasContentChange) {
        // Small delay to ensure content is rendered
        requestAnimationFrame(() => {
          animateNewContent();
          isNavigating = false;
        });
      }
    });

    // Find main content area
    const mainContent = document.querySelector('main') || 
                        document.querySelector('article') || 
                        document.querySelector('[class*="prose"]') ||
                        document.querySelector('[class*="content"]');
    
    if (mainContent) {
      observer.observe(mainContent, { 
        childList: true, 
        subtree: true 
      });
    }

    // Also handle initial page load for fresh navigation
    window.addEventListener('load', () => {
      if (document.referrer && new URL(document.referrer).origin === window.location.origin) {
        animateNewContent();
      }
    });
  }

  /* ============================================
     ANIMATE NEW PAGE CONTENT
     Staggered, left-to-right magic reveal
     ============================================ */
  function animateNewContent() {
    const content = document.querySelector('main') || 
                    document.querySelector('article') ||
                    document.querySelector('[class*="prose"]');
    
    if (!content) return;

    let delay = 0;
    const baseDelay = 80; // ms between elements

    // Title - dramatic reveal
    const title = content.querySelector('h1');
    if (title && !title.classList.contains('reveal-title')) {
      title.style.animationDelay = delay + 'ms';
      title.classList.add('reveal-title');
      delay += 150;
    }

    // Description/first paragraph - flows in after title
    const firstP = content.querySelector('h1 + p, [class*="description"]');
    if (firstP && !firstP.classList.contains('reveal-text')) {
      firstP.style.animationDelay = delay + 'ms';
      firstP.classList.add('reveal-text');
      delay += 100;
    }

    // Images - soft reveal
    const images = content.querySelectorAll('img');
    images.forEach((img, i) => {
      if (!img.classList.contains('reveal-image')) {
        img.style.animationDelay = (delay + i * 100) + 'ms';
        img.classList.add('reveal-image');
      }
    });
    if (images.length) delay += 150;

    // Headings (h2, h3) - text flow
    const headings = content.querySelectorAll('h2, h3');
    headings.forEach((h, i) => {
      if (!h.classList.contains('reveal-text')) {
        h.style.animationDelay = (delay + i * baseDelay) + 'ms';
        h.classList.add('reveal-text');
      }
    });
    if (headings.length) delay += headings.length * 30;

    // Paragraphs - staggered text flow
    const paragraphs = content.querySelectorAll('p:not([class*="description"]):not(h1 + p)');
    paragraphs.forEach((p, i) => {
      if (!p.classList.contains('reveal-text')) {
        p.style.animationDelay = (delay + i * baseDelay) + 'ms';
        p.classList.add('reveal-text');
      }
    });

    // List items - cascade from left
    const lists = content.querySelectorAll('ul, ol');
    lists.forEach(list => {
      const items = list.querySelectorAll('li');
      items.forEach((li, i) => {
        if (!li.classList.contains('reveal-list-item')) {
          li.style.animationDelay = (delay + i * 50) + 'ms';
          li.classList.add('reveal-list-item');
        }
      });
    });

    // Code blocks - slide up
    const codeBlocks = content.querySelectorAll('pre');
    codeBlocks.forEach((pre, i) => {
      if (!pre.classList.contains('reveal-code')) {
        pre.style.animationDelay = (delay + 200 + i * 100) + 'ms';
        pre.classList.add('reveal-code');
      }
    });

    // Blockquotes and callouts
    const callouts = content.querySelectorAll('blockquote, [class*="callout"], [class*="note"]');
    callouts.forEach((el, i) => {
      if (!el.classList.contains('reveal-text')) {
        el.style.animationDelay = (delay + 150 + i * 100) + 'ms';
        el.classList.add('reveal-text');
      }
    });

    // Tables
    const tables = content.querySelectorAll('table');
    tables.forEach((table, i) => {
      if (!table.classList.contains('reveal-code')) {
        table.style.animationDelay = (delay + 200 + i * 100) + 'ms';
        table.classList.add('reveal-code');
      }
    });
  }

  /* ============================================
     CLEANUP - Remove animation classes on navigation
     ============================================ */
  function cleanupAnimations() {
    document.querySelectorAll('.reveal-title, .reveal-text, .reveal-list-item, .reveal-image, .reveal-code').forEach(el => {
      el.classList.remove('reveal-title', 'reveal-text', 'reveal-list-item', 'reveal-image', 'reveal-code');
      el.style.animationDelay = '';
    });
  }

  // Clean up before navigating away
  window.addEventListener('beforeunload', cleanupAnimations);
  
  // Also handle SPA-style navigation
  window.addEventListener('popstate', () => {
    cleanupAnimations();
    isNavigating = true;
  });

})();
