var imageViewerPlugin = {
    viewImage: function(filepath, successCallback, errorCallback) {
    cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'ImageViewer', // mapped to our native Java class called "CalendarPlugin"
            'viewImageFile', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "filepath": filepath
            }]
        ); 
    }
}