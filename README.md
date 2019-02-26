# YogDDSExport v0.1

## About

**YogDDSExport** is a script for Photoshop written in JavaScript that makes it faster to export DDS files for Resident Evil 2.

**This is how you use it (tl;dr version):**
1. Open a file in photoshop, the extension doesn't matter, `.psd`, `.dds`, `.tga`. What matters is the name. Make sure it follows a standard RE2 texture pattern, such as: `pl1000_jacket_nrmr.tga`.
2. Press a button to run the script. Once done the script will show a popup with the Suffix that was detected, compression used and filename of the exported file.
3. Profit.

**Advantages:**

- **It's a lot faster than saving each texture manually**. Save dialogs are taken care of, so saving is as fast as pressing one key.
- **DDS compression formats are handled by the script**. It will save files using BC1, BC4 or BC7 depending on the texture suffix of your document.

## Requirements

YogDDSExport has only been tested in **Photoshop CC 2015**, but it should work in CS6 or above versions.

YogDDSExport requires the **[Intel® Texture Works Plugin for Photoshop](https://software.intel.com/en-us/articles/intel-texture-works-plugin)** to write DDS files.

## Download

**[You can download YogDDSExport from this link](https://github.com/yogensia/YogDDSExportRE2/archive/master.zip)**.

## Install

1. Make sure you have installed the [Intel® Texture Works Plugin for Photoshop](https://software.intel.com/en-us/articles/intel-texture-works-plugin) and run photoshop at least once.
2. Extract `YogDDSExportRE2.jsx` & `YogDDSExportRE2Fast.jsx` files to `C:\Program Files\Adobe\Adobe Photoshop CC 2015\Presets\Scripts`.
3. Extract the preset files to `C:\Users\YourName\AppData\Local\Intel\PhotoshopDDSPlugin`
4. Restart Photoshop if it was already open.

ℹ️ **Note:** The AppData directory is hidden by default in Windows. If you have trouble opening it, open the Start Menu, type `%LocalAppData%\Intel\PhotoshopDDSPlugin`, and press enter.

## Running the Script

### From the File Menu

You can run the script from Photoshop by navigating to `File > Script > YogDDSExportRE2`.

### Keyboard Shortcut

It is recommended to use a keyboard shourtcut to run the script quicker. You can assign shourtcuts in the menu `Edit > Keyboard Shourtcuts...`. In the window that opens, expand the `File` menu and scroll down to `YogDDSExportRE2` to give it the shortcut you want.

I'd recommend to use something like `Ctrl + Shift + Alt + D`, but you can also use most of the "F" keys if you find it easier.

## Details on how to use the Script

### Before Starting

Before you can use the script you have to make sure you have at least one open file, and that it's already saved on your drive. If these conditions are not met the script will show an error leting you know.

The script will use the path of your active document, and export the DDS file there. Before continuing make sure you don't have any important files there.

⚠️ **Keep in mind:** The script will overwrite files already existing files!

Make sure to backup your files regularly.

### File Naming

The name of your document is what the script uses to know what to do, so make sure it follows RE2 conventions.

Valid name examples:
- `pl1000_jacket_nrmr.tga`
- `pl1000_jacket_nrmr.tex.tga`
- `pl1000_jacket_nrmr.texout.tga`

`pl1000_jacket` is the base name of the texture, while `_nrmr` is the suffix that tells us what data the file contains and therefore what compression to use.

Filenames that contain `.tex.` & `.textout.` are also supported, but this extensions will be removed from the exported file.

All three examples above will be exported as:

- `pl1000_jacket_nrmr.dds`

### Texture Outputs & DDS Compression Formats

The script will try to detect texture types based on the suffix and save the data in the according DDS compression format, as follows:

| Suffix | Format            |
| ------ | ----------------- |
| _atos  | BC1 AutoMips      |
| _alb   | BC1 AutoMips      |
| _albm  | BC7 Fine AutoMips |
| _dtl   | BC7 Fine AutoMips |
| _emi   | BC1 AutoMips      |
| _msk1  | BC4 AutoMips      |
| _msk4  | BC7 Fine AutoMips |
| _nrm   | BC7 Fine AutoMips |
| _nrmr  | BC7 Fine AutoMips |
| _rgh   | BC4 AutoMips      |
| _spc   | BC4 AutoMips      |

## Optional No Confirmation Dialog Mode

You have two versions of the script to choose from:

- Confirmation version, with a dialog that shows **Suffix**, **Compression format**, and **output filename**.
- Fast version, with no dialogs, in case you want to skip those.

<p align="center">
    <img src="https://i.imgur.com/vp4vmEr.png" alt="Confirmation Dialog">
</p>

⚠️ **Keep in Mind:** The confirmation version will still overwrite output files without warning. This is by design, the dialog is just to double check compresion settings being used.

## Known Bugs

- Needs Testing: Compression Formats
- Needs Testing: Handling of alpha channels in BC7 files that don't need it.

## Credits

This script is based on and contains portions of code from [VTools by James A. Taylor](http://polycount.com/discussion/49192/vtools-scripts-for-photoshop/).

Compression format detection based on [Gh0stblade's RE2 Noesis script](https://forum.xentax.com/viewtopic.php?p=148425#p148425).

## License

The MIT License (MIT)
Copyright (c) 2019 Yogensia

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.