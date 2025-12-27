# ABCD Software Documentation

This repository contains the source code for the **ABCD Software Documentation** website, built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

URL: [https://ABCD-DEVCOM.github.io/](https://ABCD-DEVCOM.github.io/)

---

## 🚀 Getting Started

To edit the documentation and preview your changes locally, follow these steps:

### 1. Prerequisites
You need **Node.js** (version 18 or higher) installed on your machine.

### 2. Installation
Clone the repository and install the dependencies:

```bash
# Clone the repository
git clone [https://github.com/ABCD-DEVCOM/ABCD-DEVCOM.github.io.git](https://github.com/ABCD-DEVCOM/ABCD-DEVCOM.github.io.git)

# Enter the directory
cd ABCD-DEVCOM.github.io

# Install dependencies
npm install

```

### 3. Local Development

Start the local server. This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```bash
npm start
# or
npx docusaurus start

```

Open `http://localhost:3000` in your browser.

---

## 📝 Writing Documentation (Style Guide)

We use **Markdown** (`.md`) files located in the `/docs` folder. Here are the basic rules for creating or editing pages in this project.

### 1. Frontmatter (Required)

Every documentation file **must** start with a Frontmatter block at the very top. This metadata tells Docusaurus how to handle the page.

```markdown
---
id: my-page-id
title: My Page Title
sidebar_label: Short Menu Label
sidebar_position: 2
---

```

* **id**: Unique identifier for the page (optional, filename is used by default).
* **title**: The `<h1>` title of the page.
* **sidebar_label**: The text that appears in the left navigation menu.
* **sidebar_position**: The numeric order in the menu.

### 2. Admonitions (Alerts)

Use Docusaurus-specific syntax to highlight important information:

```markdown
:::note
This is a standard note.
:::

:::tip
Useful advice or shortcuts.
:::

:::warning
Be careful! This action might have consequences.
:::

:::danger
Critical errors or data loss warnings.
:::

```

### 3. Images and Links

* **Images:** Place images in the `/static/img` folder. Reference them like this:
`![Alt Text](/img/my-image.png)`
* **Internal Links:** Link to other markdown files directly:
`[Link text](./other-folder/page-name.md)`

---

## 🤝 How to Collaborate

We welcome contributions from the community! To contribute:

1. **Fork** this repository to your own GitHub account.
2. **Clone** your fork locally.
3. Create a **new branch** for your feature or fix:
```bash
git checkout -b feature/my-new-content

```


4. Make your changes and commit them:
```bash
git commit -m "Docs: Add guide for Z39.50"

```


5. **Push** to your fork:
```bash
git push origin feature/my-new-content

```


6. Open a **Pull Request (PR)** on the main repository. Describe what you changed and why.

---

## 🛠️ Build and Deployment (Admins)

These commands are for building the static files for production.

### Build

Generates static content into the `build` directory.

```bash
npm run build

```

### Deployment to GitHub Pages

To deploy the documentation manually:

```bash
# Using SSH
USE_SSH=true npm run deploy

# Or specifying the user
GIT_USER=<Your GitHub username> npm run deploy

```

