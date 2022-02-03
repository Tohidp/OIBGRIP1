function clicked(siteName){
    var URL ='';
    if(siteName == 'fb'){
        URL = 'https://www.facebook.com/tohid.patwekar.5/'
    }
    if(siteName == 'ig'){
        URL = 'https://www.instagram.com/mr_tohid_patwekar_/'
    }
    if(siteName == 'gh'){
        URL = 'https://github.com/tohidpatwekar7'
    }
    if(siteName == 'tw'){
        URL = 'https://twitter.com/patwekartohid1'
    }
    window.open(URL, '_blank');
}