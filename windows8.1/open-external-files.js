var file_path = 'folder/file.pdf';
var localStorage = Windows.Storage.ApplicationData.current.localFolder;
// Replace / -> \ Windows Format
file_path = file_path.replace(/\//gi, '\\'); 

localStorage.getFileAsync(file_path, Windows.Storage.CreationCollisionOption.openIfExists).then(function (file) {

	var options = new Windows.System.LauncherOptions();
	options.displayApplicationPicker = true;

	var success = Windows.System.Launcher.launchFileAsync(file, options);
	if(success){
		// FILE LAUNCHED
	}
	else{
		// FILE LAUNCH ERROR
	}
});