---
title: Visual Appearance (Colors)
sidebar_label: Appearance
sidebar_position: 6
---

# Visual Appearance & Colors

The **Appearance** module (`presentacion.php`) is a visual tool designed to help administrators define the color palette of the OPAC. It features a modern, split-screen interface with a **Live Preview** system using an SVG simulation.

**Access:** **OPAC Configuration** > **Appearance**

## 1. The Color Customizer Interface

The screen is divided into two main areas:

### A. Configuration Panel (Left)
On the left side, you will find the controls to define colors for specific interface elements. The inputs use the **JSColor** picker, allowing you to select colors visually or type Hexadecimal codes (e.g., `#003366`).

**Customizable Elements:**
* **Navigation Bar:** The background color of the top menu.
* **Buttons:** Colors for primary actions (Search, Login) and secondary actions.
* **Text & Links:** Definition of base font colors and link highlights.
* **Footer:** Background and text colors for the bottom section.
* **Search Bar:** Highlights and background for the main search area.

### B. Live Preview (Right)
On the right side, the system displays a schematic representation (SVG) of the OPAC layout.
* **Real-Time Feedback:** As soon as you pick a color on the left, the corresponding element in the SVG updates immediately.
* **No Reload Needed:** This allows you to experiment with different combinations (e.g., testing contrast between text and background) without reloading the page or saving changes.

## 2. Managing Colors

### Picking a Color
1.  Click on the color box next to the element you want to change.
2.  A color wheel/picker will appear.
3.  Select the desired shade. The Hex code is automatically filled in.

### Resetting Defaults
If you make a mistake or want to revert a specific field to its original state:
* Click the **Reset Icon** (<i class="fas fa-sync"></i>) located next to the input field.
* This restores the default color defined in the system's CSS or configuration.

:::info Visual Aid
This module acts primarily as a **Visual Aid** to help you define your institutional branding colors. Once you are satisfied with the simulation, you can save the configuration to apply the palette to the public interface.
:::