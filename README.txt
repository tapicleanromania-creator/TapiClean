Consent Manager Installation Instructions

1. Extract the contents of this zip file
2. Place the files in your website directory
3. Add the following code to your HTML page, inside the <head> tag:

<link rel="stylesheet" id="silktide-consent-manager-css" href="path-to-css/silktide-consent-manager.css">
<script src="path-to-js/silktide-consent-manager.js"></script>
<script>
silktideCookieBannerManager.updateCookieBannerConfig({
  background: {
    showBackground: true
  },
  cookieIcon: {
    position: "bottomLeft"
  },
  cookieTypes: [
    {
      id: "necesar",
      name: "Necesar",
      description: "<p>Aceste cookie-uri sunt necesare pentru ca site-ul web să funcționeze corect și nu pot fi dezactivate. Acestea vă ajută cu lucruri precum conectarea și setarea preferințelor de confidențialitate.</p>",
      required: true,
      onAccept: function() {
        console.log('Add logic for the required Necesar here');
      }
    },
    {
      id: "analytics",
      name: "Analytics",
      description: "<p>Aceste cookie-uri ne ajută să îmbunătățim site-ul prin urmărirea paginilor cele mai populare și a modului în care vizitatorii se deplasează pe site.</p>",
      required: false,
      onAccept: function() {
        gtag('consent', 'update', {
          analytics_storage: 'granted',
        });
        dataLayer.push({
          'event': 'consent_accepted_analytics',
        });
      },
      onReject: function() {
        gtag('consent', 'update', {
          analytics_storage: 'denied',
        });
      }
    },
    {
      id: "publicitate",
      name: "Publicitate",
      description: "<p>Aceste cookie-uri oferă funcții suplimentare și personalizare pentru a vă îmbunătăți experiența. Acestea pot fi stabilite de noi sau de parteneri ale căror servicii le folosim.</p>",
      required: false,
      onAccept: function() {
        gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
        });
        dataLayer.push({
          'event': 'consent_accepted_publicitate',
        });
      },
      onReject: function() {
        gtag('consent', 'update', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
        });
      }
    }
  ],
  text: {
    banner: {
      description: "<p>Folosim cookie-uri pe site-ul nostru pentru a vă îmbunătăți experiența utilizatorului, pentru a oferi conținut personalizat și pentru a analiza traficul nostru. <a href=\"https://your-website.com/cookie-policy\" target=\"_blank\">Cookie Policy.</a></p>",
      acceptAllButtonText: "Acceptă tot",
      acceptAllButtonAccessibleLabel: "Accept all cookies",
      rejectNonEssentialButtonText: "Respingeți neesențiale",
      rejectNonEssentialButtonAccessibleLabel: "Reject non-essential",
      preferencesButtonText: "Preferinţe",
      preferencesButtonAccessibleLabel: "Toggle preferences"
    },
    preferences: {
      title: "Personalizați-vă preferințele privind cookie-urile",
      description: "<p>Vă respectăm dreptul la confidențialitate. Puteți alege să nu permiteți anumite tipuri de cookie-uri. Preferințele dumneavoastră privind cookie-urile se vor aplica pe site-ul nostru web.</p>",
      creditLinkText: "Get this banner for free",
      creditLinkAccessibleLabel: "Get this banner for free"
    }
  }
});
</script>
