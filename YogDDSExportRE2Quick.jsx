// SCRIPT NAME: YogDDSExport
// AUTHOR: Yogensia
// COPYRIGHT: Yogensia
// LICENSE: MIT
// DESCRIPTION: Makes it quicker to save DDS files for Resident Evil 2 textures.


// The MIT License (MIT)
// Copyright (c) 2019 Yogensia

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


// This script is based on VTools by James A. Taylor
// http://polycount.com/discussion/49192/vtools-scripts-for-photoshop/
//
// Compression format detection based on Gh0stblade's RE2 Noesis script.
//
// This script requires Intel® Texture Works DDS plugin (NVIDIA's plugin doesn't
// support the compression formats we need like BC5).
//
// The Presets included with this script are also required for it to function
// properly! Make sure to check installation notes in the readme file for more
// details.


/**
 * Variables and setup
 */

// Setup.
var VERSION = 0.1;
var DEBUG = false;
var docName,
  ddsPath,
  ddsSuffix,
  alphaChan;

// Focus on Photoshop.
#target photoshop
app.bringToFront();

// Initiate script code.
init();


/**
 * Debug function to show info
 * @param  string  desc  description of debug value
 * @param  any  val  result of the debug check
 *
 * @return void
 */
function debug(desc, val)
{
  if (DEBUG == true)
  {
    if (typeof val !== 'undefined')
    {
      alert(desc + ': ' + val, 'DEBUG MESSAGE')
    }
    else
    {
      alert(desc, 'DEBUG MESSAGE')
    }
  }
}


/**
 * Where everything starts
 *
 * @return void
 */
function init()
{
  // We need an open document first!
  if (documents.length <= 0)
  {
    alert("Error: No documents open.", "ERROR");
    return;
  }

  // Get input filepath.
  try {
    docPath = activeDocument.fullName.toString();
  } catch (error) {
    alert("Error: The active file doesn't exist in disk.\n\n"+
    "Save it somewhere first, its path will be\nused as the export destination.", "ERROR");
    return;
  }

  // Get export filepath.
  docPath = docPath.replace('.texout', '');
  docPath = docPath.replace('.tex', '');
  ddsPath = docPath.substr(0, docPath.lastIndexOf("."));
  ddsPath = ddsPath + '.dds';

  // Get suffix.
  ddsSuffix = docPath.substring(docPath.lastIndexOf("_") +1, docPath.lastIndexOf("."));
  ddsSuffix.toLowerCase();

  // Set docName to the currently active document name.
  docName = activeDocument.name;

  // Set docName to the currently active document name.
  docName = activeDocument

  // Handle export presets, depending on the suffix.
  // Supported presets:
  // BC7 Fine AutoMips (high quality RGBA)
  // BC4 AutoMips (high quality greyscale)
  // BC1 AutoMips (low quality RGB)
  if (ddsSuffix == 'atos') {
    var ddsFormat = "BC1 AutoMips";
  } else if (ddsSuffix == 'alb') {
    var ddsFormat = "BC1 AutoMips";
  } else if (ddsSuffix == 'albm') {
    var ddsFormat = "BC7 Fine AutoMips";
  } else if (ddsSuffix == 'dtl') {
    var ddsFormat = "BC7 Fine AutoMips";
  } else if (ddsSuffix == 'emi') {
    var ddsFormat = "BC1 AutoMips";
  } else if (ddsSuffix == 'msk1') {
    var ddsFormat = "BC4 AutoMips";
  } else if (ddsSuffix == 'msk4') {
    var ddsFormat = "BC7 Fine AutoMips";
  } else if (ddsSuffix == 'nrm') {
    var ddsFormat = "BC7 Fine AutoMips";
  } else if (ddsSuffix == 'nrmr') {
    var ddsFormat = "BC7 Fine AutoMips";
  } else if (ddsSuffix == 'rgh') {
    var ddsFormat = "BC4 AutoMips";
  } else if (ddsSuffix == 'spc') {
    var ddsFormat = "BC4 AutoMips";
  } else {
    // If unknown suffix, fallback to most common format.
    var ddsFormat = "BC7 Fine AutoMips";
  }

  // Scriptinglistener output for saving a file as copy with the Intel® Texture Works plugin.
  var idsave = charIDToTypeID( "save" );
  var desc135 = new ActionDescriptor();
  var idAs = charIDToTypeID( "As  " );
  var desc136 = new ActionDescriptor();
  var idpres = charIDToTypeID( "pres" );
  desc136.putString( idpres, ddsFormat );
  var idIntelTextureWorksIntelTextureWorks = stringIDToTypeID( "Intel® Texture Works Intel® Texture Works" );
  desc135.putObject( idAs, idIntelTextureWorksIntelTextureWorks, desc136 );
  var idIn = charIDToTypeID( "In  " );
  desc135.putPath( idIn, new File( ddsPath ) );
  var idDocI = charIDToTypeID( "DocI" );
  desc135.putInteger( idDocI, 1767 );
  var idCpy = charIDToTypeID( "Cpy " );
  desc135.putBoolean( idCpy, true );
  var idsaveStage = stringIDToTypeID( "saveStage" );
  var idsaveStageType = stringIDToTypeID( "saveStageType" );
  var idsaveSucceeded = stringIDToTypeID( "saveSucceeded" );
  desc135.putEnumerated( idsaveStage, idsaveStageType, idsaveSucceeded );
  executeAction( idsave, desc135, DialogModes.NO );
}