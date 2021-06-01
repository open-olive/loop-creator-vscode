# Loop Development Kit README

Loop Development Kit is an extension to generate boiler plate code to create loops for Olive Helps.

You can download Olive Helps here:

- [Windows](https://olive.page.link/olive-helps-windows)
- [Mac](https://olive.page.link/olive-helps-mac)

It supports generating loop code in Typescript and ES6 Javascript.

## Usage

To get started use cmd(mac)/ctrl(win)+shift+p and type Create Loop
This will open the Create Loop form to populate with the loop details.

![Create Loop Form](images/createLoopUi.png)

Select your preferred language.

Browse to find the location where you want your project to exist.

Give your loop project a name.

Select the example Aptitudes you want to include in your loop.

Click create loop, this will open a new VS Code window with your project.

You will need to run [npm install] to install packages and [npm run build] to build the loop.

Now you can install your loop locally in Olive Helps. To do this open the Loop Library in Olive Helps
and click "Install Local Loop".

Enter the name of your loop and browse to your loop project location and select the `dist` folder
that was created when you ran `npm run build`.

## Requirements

You must have [Node.js](https://nodejs.org/en/download/) installed to build your loop.

You must have Olive Helps installed to be able to use and test your loop:

- [Windows](https://olive.page.link/olive-helps-windows)
- [Mac](https://olive.page.link/olive-helps-mac)

**Enjoy!**
