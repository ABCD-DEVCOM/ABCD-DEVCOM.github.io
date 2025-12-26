---
sidebar_position: 3
title: Appearance and Languages
---

# Appearance and Languages

ABCD allows for extensive customization of its visual identity and the internationalization of its interface directly from the Central Module's administration area. These settings are managed through the **System settings (abcd.def)** file.

To access these options, navigate to **Administration** → **ABCD Configuration** → **System settings (abcd.def)**.

### Customizing Appearance

You can modify the header, footer, and logo to align the platform's appearance with your institution's branding.

1.  **Header and Footer:**
    * In the `abcd.def` editor, you will find specific fields to define the text and HTML content that appears at the top and bottom of every page in the Central Module.
    * You can insert the name of your institution, links, or other relevant information. The system allows the use of HTML tags for formatting.

2.  **Institution Logo:**
    * The configuration screen provides an option to upload your institution's logo.
    * This logo will replace the default ABCD logo and will be displayed in the header of the Central Module, reinforcing your institution's identity.

### Managing Languages

ABCD is a multilingual system. You can define the default language and control which languages are available to operators.

1.  **Default Language:**
    * In the `abcd.def` settings, you can set a default language for the interface (e.g., `en` for English, `es` for Spanish, `pt` for Portuguese). This will be the language displayed to users before they log in or if no other preference is set.

2.  **Activating/Deactivating Languages:**
    * ABCD comes with several pre-installed languages. Through the configuration files, you can manage which of these are active and available for selection on the login screen.
    * Operators can then choose their preferred language from the available options when they log in, and the system will remember their selection for future sessions.

After making any changes to the appearance or language settings in `abcd.def`, remember to click **Save** to apply them.