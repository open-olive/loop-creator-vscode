# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

## [0.4.0]

- Added Document aptitude to templates and VSCode/NPX tools.

## [0.3.2]

- Fixing bug where aptitudes do not generate unless you select all aptitudes

## [0.3.1]

- Adding new repository link to extension's package.json

## [0.3.0]

- Refactored extension to remove templates being bundled with the extension and instead using a central template location at https://www.npmjs.com/package/@oliveai/loop-templates

## [0.2.0]

- Added openHandler

## [0.1.13]

### Changed

- Bug fix for Windows file paths beginning with a '/'

## [0.1.12]

### Changed

- Updated to latest LDK (3.2.0).
- Removed "jest - ..." prefix from intro whisper.
- Bumped to latest Node LTS release in .nvmrc file.

## [0.1.11]

### Changed

- Added updatable whisper logic to generated loop
- Added ESLint, Prettier, and Jest
- Refactored code structure to make it more compatible with Jest and updatable whispers

## [0.1.10]

### Changed

- Upgraded to LDK 3.1.0.

### Removed

- Removed old ldkVersion property in `package.json` under `ldk` section.

## [0.1.9] - 2021-06-24

### Changed

- Upgraded to LDK 3.0.2.
- Upgraded .nvmrc to Node 14.17.1.

## [0.1.8] - 2021-06-15

### Changed

- Added box example to intro whisper (with previous/next buttons).

## [0.1.7] - 2021-06-02

### Changed

- Updated to LDK 3.0.0.

### Removed

- Removed onClose handlers for some example whispers (the handler is no longer required).

## [0.1.6] - 2021-06-01

### Added

- Added example for filesystem aptitude.

### Changed

- Improved network example to use FDA recalls API with child whispers.

### Removed

- Removed user-selectable LDK field. Will use hard-coded one instead to avoid supporting multiple
  versions of the LDK.

## [0.1.5] - 2021-05-26

### Changed

- Updated to latest published LDK version 3.0.0-beta.3.

## [0.1.4] - 2021-05-13

### Changed

- Switch to bundling with Webpack.

## [0.1.3] - 2021-05-12

- Initial release.
