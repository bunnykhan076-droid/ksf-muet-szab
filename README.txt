KSF MUET SZAB Website
======================

Files:
- index.html      (Main website file)
- style.css       (Stylesheet)
- script.js       (JavaScript for tabs and demo form)
- README.txt      (this file)

How to publish (GitHub Pages):
1. Create a GitHub account if you don't have one.
2. Create a new repository (for example: ksf-muet-szab).
3. Upload all files from this ZIP to the repository (you can drag-and-drop on GitHub).
4. In the repository, go to Settings -> Pages -> Source -> choose "main" branch and root (/) -> Save.
5. Your site will be available at: https://<yourusername>.github.io/ksf-muet-szab/

How to publish (Netlify):
1. Create a free Netlify account.
2. Click "Add new site" -> "Deploy manually" -> drag-and-drop the ZIP contents or the folder.
3. Netlify will create a public URL like https://ksf-muet-szab.netlify.app

Notes:
- The contact form in this package is static (demo). To receive messages:
  - Option A: Use a service like Formspree or Netlify Forms and follow their integration docs.
  - Option B: Add a backend (PHP/Node/Python) and change the form action to point to the backend endpoint.
- To change the header title, edit the <div class="title"> in index.html.
- To replace the logo, swap the #logoPlaceholder div contents with an <img> tag (e.g. <img src="logo.png" alt="KSF Logo">) and add logo.png to the folder.
