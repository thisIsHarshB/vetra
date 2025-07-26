# Vetra 📝

Welcome to Vetra, a modern, feature-rich, and beautifully designed notes application. Vetra is more than just a notepad; it's a dynamic, visual workspace designed to capture and organize your ideas, tasks, and inspirations in a fluid, interactive way.

## ✨ Key Features

Vetra is designed to be a fully-equipped digital canvas, available wherever you are.

* **🧠 Intuitive Drag & Drop Interface**: Freely move and rearrange your notes on the canvas. Visually organize your thoughts, create mood boards, or structure your workflow in a way that makes sense to you.

* **🖼️ Rich Content Support**: Go beyond plain text. Vetra allows you to embed images and save important links, turning simple notes into rich, detailed documents. It's the perfect tool for collecting research, saving visual inspiration, or planning projects.

* **📱 Fully Responsive Design**: Vetra is built to be available on the go. Whether you're on your desktop, tablet, or phone, you'll have a seamless and optimized experience, ensuring your notes are always within reach.

* **🎨 Customizable & Themeable**: With a powerful theme engine powered by DaisyUI, you can instantly change the look and feel of your entire workspace to match your style or mood.

## 🛠️ Tech Stack

Vetra is built from the ground up using a modern, efficient, and scalable tech stack, perfect for creating dynamic user interfaces.

* **Core Framework:**
  * [**React**](https://react.dev/): For building a component-based, declarative UI.
  * [**Vite**](https://vitejs.dev/): As the next-generation frontend tooling for a blazing-fast development experience.

* **Styling & UI:**
  * [**Tailwind CSS v4**](https://tailwindcss.com/): A utility-first CSS framework for rapid, custom UI development.
  * [**DaisyUI**](https://daisyui.com/): A component library for Tailwind CSS that provides beautiful, themeable components.
  * [**Lucide React**](https://lucide.dev/): For clean, consistent, and lightweight icons.

* **Backend & Database:**
  * [**Firebase (Firestore)**](https://firebase.google.com/): Powers the backend with a real-time, NoSQL database for features like auto-saving and data persistence.

## 🚀 Project Roadmap

This project is being built in phases to ensure a structured and iterative development process.

### ✅ Phase 1: The Static Foundation
* \[x] Set up React project with Vite.
* \[x] Integrate and configure Tailwind CSS v4 and DaisyUI.
* \[x] Add custom fonts (Philosopher & Mulish).
* \[x] Create a static `Header` component.
* \[x] Create a static `NoteCard` component.
* \[x] Assemble the static layout in `App.jsx`.
* \[x] Integrate the Lucide React icon library.

### ⬜ Phase 2: Core State & Functionality
* \[ ] Use `useState` to manage an array of notes.
* \[ ] Implement "Add New Note" functionality.
* \[ ] Make note content editable.
* \[ ] Implement "Delete Note" functionality.
* \[ ] Implement the collapsible card feature.
* \[ ] Implement random pastel color generation for new notes.

### ⬜ Phase 3: Advanced Interactivity & Backend
* \[ ] Implement drag-and-drop functionality for cards.
* \[ ] Set up and connect Firebase Firestore.
* \[ ] Implement the auto-save feature to Firestore.
* \[ ] Load existing notes from Firestore on app startup.
* \[ ] Bring a clicked card to the front (z-index management).

### ⬜ Phase 4: Polishing & Final Features
* \[ ] Implement rich content support (add links, images).
* \[ ] Implement Markdown support for note content.
* \[ ] Implement the "Tags" feature for creating and filtering notes.
* \[ ] Implement the "Rearrange Notes" button to sort cards by date.
* \[ ] Final responsive design polish for all devices.

## ⚙️ Running the Project Locally

To get a local copy up and running, follow these simple steps.

1. **Clone the repository:**
   ```sh
   git clone [https://github.com/thisIsHarshB/vetra.git](https://github.com/thisIsHarshB/vetra.git)
2. **Navigate to the project directory:**
   ```sh
   cd vetra
3. **Install NPM packages:**
   ```sh
   npm install
4. **Start the development server**
   ```sh
   npm run dev