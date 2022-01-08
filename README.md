# ScreenSinric

Allows you to turn off screen of your Windows computer using Google Home.

## Usage
You must indicate the value of `SINRIC_KEY`, `SINRIC_SECRET`, and `SINRIC_DEVICE` in a `.env` file. 

To automatically start the program when you turn on your computer :
Edit the file `autostart.js` to edit the paths of `args` and `out`.
You can start `node autostart.js` which will create an automatic rule to start the script.
