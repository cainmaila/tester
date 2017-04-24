const AdmZip = require('adm-zip')
// reading archives 
var zip = new AdmZip('./R360.zip')
var zipEntries = zip.getEntries(); // an array of ZipEntry records 
zipEntries.forEach(function (zipEntry) {
    console.log(zipEntry.toString()); // outputs zip entries information 
});
zip.extractAllTo(/*target path*/'b', /*overwrite*/true);