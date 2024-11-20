# React WP Gutenberg Image Gallery

This project is a custom WordPress Gutenberg block named **Image Gallery**. It allows users to create a flexible image gallery using the default `core/image` block inside a custom gallery container.

## Features

- **Custom Gutenberg Block**: The block is built with React and integrates seamlessly into the Gutenberg editor.
- **InnerBlocks Integration**: Allows adding any number of `core/image` blocks within the gallery.
- **Customizable Layout**: Includes default CSS for responsive image grid styling.
- **WordPress Standards**: Follows the block.json schema and modern WordPress block development practices.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tekrajbhatta/react-wp-gutenberg-image-gallery.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-wp-gutenberg-image-gallery
   ```
3. nstall dependencies:
   ```bash
   npm install
   ```
4. Build the project:
   ```bash
   npm run build
   ```
5. Copy the block folder to your WordPress plugin directory:
   ```bash
   cp -r ./react-wp-gutenberg-image-gallery /path/to/wordpress/wp-content/plugins/
   ```
6. Activate the plugin in your WordPress admin dashboard.

## Usage

- In the WordPress block editor, search for the Image Gallery block.
- Add it to your page or post.
- Use the editor to add multiple images inside the gallery container.
- Customize and save your content.

## File Structure
  ```bash
  react-wp-gutenberg-image-gallery
  ├── block.json          // Block metadata
  ├── index.js            // Block registration and setup
  ├── edit.js             // Block editor logic
  ├── save.js             // Block save logic
  ├── style.css           // CSS for frontend and backend
  ├── icon.svg            // Custom icon for the block
  ├── package.json        // Project dependencies and scripts
  └── README.md           // Project documentation
  ```

## Scripts

- `npm run build`: Builds the block for production.
- `npm run start`: Starts the development mode with hot reloading.

## Dependencies

- Node.js
- WordPress >= 5.8
- WordPress Gutenberg Editor

## Contributing

You can fix this repository, open issues, or submit pull requests. Contributions are always welcome!

## License

This project is licensed under the [MIT License](LICENSE).

## Author

**Tekraj Bhatta**  
[GitHub](https://github.com/tekrajbhatta) | [Portfolio](https://tekrajbhatt.com)

